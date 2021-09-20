class Api::HousesController < ApplicationController
  def index
    @houses = params[:bounds] ? House.with_attached_photos.in_bounds(params[:bounds]) : House.with_attached_photos.all
    @cities = City.all
    render :index
  end

  def show
    @house = House.with_attached_photos.find(params[:id])
    render "api/houses/show"
  end

  def create
    city = "%#{params[:house][:city].strip.split(//).join("%")}%"
    state = "%#{params[:house][:state].strip.split(//).join("%")}%"
    city_id = City.where("UPPER(TRIM(name)) LIKE UPPER(?)", city).pluck(:id)[0]
    state_id = State.where("UPPER(TRIM(name)) LIKE UPPER(?)", state).pluck(:id)[0]
    if (!city_id)
      city_id = City.create!(name: city.split("%").join("").upcase)
    end
    if (!state_id)
      state_id = State.create!(name: state.split("%").join("").upcase)
    end
    params[:house][:city_id] = city_id
    params[:house][:state_id] = state_id
    @house = House.new(house_params)
    @house.city = City.find_by(id: city_id)
    @house.state = State.find_by(id: state_id)

    if @house.save
      render :show
    else
      render json: @house.errors.full_messages, status: 422
    end
  end

  def saving
    @save = Save.new(user_id: current_user.id, savable_id: params[:id], savable_type: "House")
    @user = current_user

    if @save.save
      render "api/users/show"
    else
      render json: save.errors.full_messages, status: 422
    end
  end

  def unsaving
    @save = Save.find_by(user_id: current_user.id, savable_id: params[:id], savable_type: "House")
    @user = current_user
    if @save.destroy
      render "api/users/show"
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  private

  def house_params
    params.require(:house).permit(:address, :city_id, :state_id, :zipcode, :price, :beds, :baths, :sqft, :is_rent, :lat, :lng, :description, :yr_built, :photo, photos: [])
  end
end
