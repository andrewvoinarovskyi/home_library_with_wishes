FactoryBot.define do
  factory :collectible_item do
    name { Faker::Book.title } 
    category { %w[book game toy].sample } 
    status { %w[owned wishlist].sample } 
  end
end