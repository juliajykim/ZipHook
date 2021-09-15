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

  private

  def house_params
    params.require(:house).permit(:address, :city, :state, :beds, :baths, :sqft)
  end
end
