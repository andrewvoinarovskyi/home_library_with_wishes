class CollectibleItem < ApplicationRecord
    validates :name, presence: true
    validates :category, presence: true
  
    scope :books, -> { where(category: 'book') }
    scope :games, -> { where(category: 'game') }

    def self.by_categories(*categories)
      where(category: categories)
    end
  end
  