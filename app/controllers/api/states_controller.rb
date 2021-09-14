class Api::StatesController < ApplicationController
  def index
    @states = State.all
  end
end
