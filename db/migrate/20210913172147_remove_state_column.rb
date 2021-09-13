class RemoveStateColumn < ActiveRecord::Migration[6.1]
  def change
    remove_index :states, name: "index_states_on_house_id"
    remove_column :states, :house_id
  end
end
