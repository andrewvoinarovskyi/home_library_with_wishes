class CollectibleItemsController < ApplicationController
    def index
      @collectible_items = CollectibleItem.all
      if params[:status]
        @collectible_items = @collectible_items.where(status: params[:status])
      end 
      render json: @collectible_items
    end
  
    def show
      @collectible_item = CollectibleItem.find(params[:id])
      render json: @collectible_item
    end
  
    def create
      @collectible_item = CollectibleItem.new(collectible_item_params)
      if @collectible_item.save
        render json: @collectible_item, status: :created
      else
        render json: @collectible_item.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @collectible_item = CollectibleItem.find(params[:id])
      if @collectible_item.update(collectible_item_params)
        render json: @collectible_item
      else
        render json: @collectible_item.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @collectible_item = CollectibleItem.find(params[:id])
      @collectible_item.destroy
      head :no_content
    end
  
    private
  
    def collectible_item_params
      params.require(:collectible_item).permit(:name, :category, :priority, :notes, :status)
    end
  end
  