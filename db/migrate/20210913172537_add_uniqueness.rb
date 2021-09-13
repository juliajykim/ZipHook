class AddUniqueness < ActiveRecord::Migration[6.1]
  def change
    add_index :states, :name, unique: true
  end
end
