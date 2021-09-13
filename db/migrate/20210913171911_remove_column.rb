class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_index :cities, name: "index_cities_on_house_id"
    remove_column :cities, :house_id
  end
end
