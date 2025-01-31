class CollectibleItem < ApplicationRecord
    validates :name, presence: true
    validates :category, presence: true
    validates :status, presence: true
  
    scope :books, -> { where(category: 'book') }
    scope :games, -> { where(category: 'game') }
    scope :owned, -> { where(status: 'owned') }
    scope :wishlist, -> { where(status: 'wishlist') }

    def self.by_categories(*categories)
      where(category: categories)
    end
  end
  