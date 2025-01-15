class ApplicationController < ActionController::API
    def test
        render json: { message: "success" }
    end
end
