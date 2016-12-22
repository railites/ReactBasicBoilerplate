module Api
  module V1
    class ProductsController < Api::BaseController
      before_action :find_product, only: [:show, :update, :destroy]

      def index
        render json: current_user.products.paginate(page: params[:page], per_page: params[:per_page])
      end

      def show
        render json: @product
      end

      def create
        render json: current_user.products.create!(product_params)
      end

      def update
        @product.update_attributes(product_params)
        render json: @product
      end

      def destroy
        render json: @product.destroy
      end

      def search
        if params[:term].present? && !params[:term].blank?
          render json: Product.search(params[:term])
        elsif params[:item_id].present?  && !params[:item_id].blank?
          render json: Product.search_by_item_id(params[:item_id])
        end
      end

      private

      def find_product
        @product ||= current_user.products.find(params[:id])
      end

      def product_params
        params.require(:product).permit(:item_id, :name, :description, :product_type, :brand, :date_of_purchase, :warranty_expire_date)
      end
    end
  end
end
