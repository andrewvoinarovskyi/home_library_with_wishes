require 'rails_helper'

RSpec.describe CollectibleItemsController, type: :controller do
  let!(:collectible_item) { create(:collectible_item) }
  let!(:collectible_item2) { create(:collectible_item) }

  describe 'GET #index' do
    it 'returns a list of collectible items' do
      get :index
      expect(response).to have_http_status(:success)
      expect(json_response.size).to eq(2)  # Перевірка, що повертається 2 елементи
    end

    it 'filters collectible items by status' do
      collectible_item.update(status: 'owned')
      get :index, params: { status: 'owned' }
      expect(response).to have_http_status(:success)
      expect(json_response.size).to eq(1)  # Перевірка, що повертається 1 елемент з статусом "owned"
      expect(json_response.first['status']).to eq('owned')
    end
  end

  describe 'GET #show' do
    it 'returns the requested collectible item' do
      get :show, params: { id: collectible_item.id }
      expect(response).to have_http_status(:success)
      expect(json_response['id']).to eq(collectible_item.id)
    end
  end

  describe 'POST #create' do
    let(:valid_attributes) { { name: 'New Item', category: 'game', status: 'wishlist' } }
    let(:invalid_attributes) { { name: '', category: '', status: '' } }

    it 'creates a new collectible item with valid attributes' do
      post :create, params: { collectible_item: valid_attributes }
      expect(response).to have_http_status(:created)
      expect(json_response['name']).to eq('New Item')
    end

    it 'does not create a new collectible item with invalid attributes' do
      post :create, params: { collectible_item: invalid_attributes }
      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_response).to have_key('errors')
    end
  end

  describe 'PUT #update' do
    let(:valid_attributes) { { name: 'Updated Item', status: 'owned' } }
    let(:invalid_attributes) { { name: '', status: '' } }

    it 'updates the requested collectible item with valid attributes' do
      put :update, params: { id: collectible_item.id, collectible_item: valid_attributes }
      expect(response).to have_http_status(:success)
      expect(json_response['name']).to eq('Updated Item')
    end

    it 'does not update the collectible item with invalid attributes' do
      put :update, params: { id: collectible_item.id, collectible_item: invalid_attributes }
      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_response).to have_key('errors')
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested collectible item' do
      expect {
        delete :destroy, params: { id: collectible_item.id }
      }.to change(CollectibleItem, :count).by(-1)
      expect(response).to have_http_status(:no_content)
    end
  end
end
