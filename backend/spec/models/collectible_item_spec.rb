require 'rails_helper'

describe CollectibleItem, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:category) }
  end

  describe 'scopes' do
    let!(:book) { create(:collectible_item, category: 'book') }
    let!(:game) { create(:collectible_item, category: 'game') }
    let!(:owned_item) { create(:collectible_item, status: 'owned') }
    let!(:wishlist_item) { create(:collectible_item, status: 'wishlist') }

    describe '.books' do
      it 'returns items with category book' do
        expect(CollectibleItem.books).to include(book)
      end
    end

    describe '.games' do
      it 'returns items with category game' do
        expect(CollectibleItem.games).to include(game)
      end
    end

    describe '.owned' do
      it 'returns items with status owned' do
        expect(CollectibleItem.owned).to include(owned_item)
      end
    end

    describe '.wishlist' do
      it 'returns items with status wishlist' do
        expect(CollectibleItem.wishlist).to include(wishlist_item)
      end
    end
  end

  describe '.by_categories' do
    let!(:book) { create(:collectible_item, category: 'book') }
    let!(:game) { create(:collectible_item, category: 'game') }
    let!(:toy) { create(:collectible_item, category: 'toy') }

    it 'returns items with specified categories' do
      expect(CollectibleItem.by_categories('book', 'game')).to contain_exactly(book, game)
    end

    it 'returns an empty array if no matching categories' do
      expect(CollectibleItem.by_categories('nonexistent')).to be_empty
    end
  end
end
