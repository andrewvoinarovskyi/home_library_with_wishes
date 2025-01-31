require 'rails_helper'

RSpec.describe CollectibleItemsController, type: :controller do
  let!(:collectible_item) { create(:collectible_item, status: 'owned') }
  let!(:collectible_item_wished) { create(:collectible_item, status: 'wishlist') }

  describe 'GET #index' do
    it 'returns a list of collectible items' do
      get :index
      expect(response).to have_http_status(:success)
      expect(json_response.size).to eq(2) 
    end

    it 'filters collectible items by status' do
      get :index, params: { status: 'owned' }
      expect(response).to have_http_status(:success)
      expect(json_response.size).to eq(1) 
      expect(json_response.first['status']).to eq('owned')
    end
  end

  describe 'GET #show' do
    it 'returns the requested collectible item' do
      get :show, params: { id: collectible_item.id }
      expect(response).to have_http_status(:success)
      expect(json_response).to eq(collectible_item.as_json)
    end

    it 'returns error with invalid id' do
      get :show, params: { id: -1 }
      expect(response).to have_http_status(:not_found)
      expect(json_response['error']).to eq("Couldn't find CollectibleItem with 'id'=-1")
    end
  end

  describe 'POST #create' do
    let(:valid_attributes) { { name: 'New Item', category: 'game', status: 'wishlist' } }
    let(:invalid_attributes) { { name: '', category: '', status: 'owned' } }

    it 'creates a new collectible item with valid attributes' do
      post :create, params: { collectible_item: valid_attributes }
      expect(response).to have_http_status(:created)
      expect(json_response['name']).to eq('New Item')
    end

    it 'does not create a new collectible item with invalid attributes' do
      post :create, params: { collectible_item: invalid_attributes }
      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_response).to eq( { "category" => ["can't be blank"], "name" => ["can't be blank"] } )
    end
  end

  describe 'PUT #update' do
    let(:valid_attributes) { { name: 'Updated Item', status: 'owned' } }
    let(:invalid_attributes) { { name: '', status: '' } }

    it 'updates the requested collectible item with valid attributes' do
      put :update, params: { id: collectible_item_wished.id, collectible_item: valid_attributes }
      expect(response).to have_http_status(:success)
      expect(json_response['name']).to eq('Updated Item')
    end

    it 'does not update the collectible item with invalid attributes' do
      put :update, params: { id: collectible_item.id, collectible_item: invalid_attributes }
      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_response).to eq( { "status" => ["can't be blank"], "name" => ["can't be blank"] } )
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested collectible item' do
      expect {
        delete :destroy, params: { id: collectible_item.id }
      }.to change(CollectibleItem, :count).by(-1)
      expect(response).to have_http_status(:no_content)
    end

    it 'does not destroy collectible item if id is invalid' do
      expect {
        delete :destroy, params: { id: -1 }
      }.not_to change(CollectibleItem, :count)
      expect(response).to have_http_status(:not_found)
    end
  end
end
