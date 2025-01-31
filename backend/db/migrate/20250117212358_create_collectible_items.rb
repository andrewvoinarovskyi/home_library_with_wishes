class CreateCollectibleItems < ActiveRecord::Migration[7.1]
  def change
    create_table :collectible_items do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.integer :priority
      t.integer :notes
      t.string :status, null: false, default: 'owned'

      t.timestamps
    end
  end
end
