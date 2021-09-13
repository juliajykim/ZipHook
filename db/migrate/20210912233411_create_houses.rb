class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :address, null: false
      t.integer :city_id, null: false
      t.integer :state_id, null: false
      t.integer :zipcode, null: false
      t.integer :price, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.integer :sqft, null: false
      t.boolean :is_rent, default: true, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :description
      t.integer :yr_built
      t.timestamps
    end
    add_index :houses, :city_id
    add_index :houses, :state_id

    create_table :cities do |t|
      t.string :name, null: false
      t.integer :house_id, null: false

      t.timestamps
    end
    add_index :cities, :house_id

    create_table :states do |t|
      t.string :name, null: false
      t.integer :house_id, null: false

      t.timestamps
    end
    add_index :states, :house_id

  end
end
