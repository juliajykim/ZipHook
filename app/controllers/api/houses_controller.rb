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
    debugger
    city = "%#{params[:house][:city].split(//).join("%")}%"
    state = "%#{params[:house][:state].split(//).join("%")}%"
    city_id = City.where("UPPER(name) LIKE UPPER(?)", city).pluck(:id)[0]
    state_id = State.where("UPPER(name) LIKE UPPER(?)", state).pluck(:id)[0]
    params[:house][:city_id] = city_id
    params[:house][:state_id] = state_id
    house = House.new(house_params)

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
