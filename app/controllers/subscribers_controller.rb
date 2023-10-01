class SubscribersController < ApplicationController
  def new
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)

    unless @subscriber.save
      render :new
    end
  end

  private
    def subscriber_params
      params.require(:subscriber).permit(:email)
    end
end
