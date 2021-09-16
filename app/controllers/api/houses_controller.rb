class Api::HousesController < ApplicationController
  def index
    @houses = params[:bounds] ? House.in_bounds(params[:bounds]) : House.all
    # @houses = House.all
    @cities = City.all
    render :index
  end

  def show
    @house = House.find(params[:id])
    render "api/houses/show"
  end

  def create
    city = "%#{params[:house][:city].strip.split(//).join("%")}%"
    state = "%#{params[:house][:state].strip.split(//).join("%")}%"
    debugger
    city_id = City.where("UPPER(TRIM(name)) LIKE UPPER(?)", city).pluck(:id)[0]
    state_id = State.where("UPPER(TRIM(name)) LIKE UPPER(?)", state).pluck(:id)[0]
    params[:house][:city_id] = city_id
    params[:house][:state_id] = state_id
    house = House.new(house_params)
    house.city = City.find_by(id: city_id)
    house.state = State.find_by(id: state_id)

    if house.save
      render :show
    else
      render json: house.errors.full_messages
    end
  end

  private

  def house_params
    params.require(:house).permit(:address, :city_id, :state_id, :zipcode, :price, :beds, :baths, :sqft, :is_rent, :lat, :lng, :description, :yr_built, :photo)
  end
end
