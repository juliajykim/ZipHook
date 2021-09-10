class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :ensure_logged_in!, only: [:update]

  # TODO: make index funtion for getting seller info later

  def show
    @user = User.find(params[:id]).include(:saves)
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    #
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, state: 422
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :photoFile)
  end
end
