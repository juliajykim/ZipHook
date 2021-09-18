class AddIndex < ActiveRecord::Migration[6.1]
  def change
    add_index :saves, [:user_id, :savable_type, :savable_id]
  end
end
