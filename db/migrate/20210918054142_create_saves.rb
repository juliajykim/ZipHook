class CreateSaves < ActiveRecord::Migration[6.1]
  def change
    create_table :saves do |t|
      t.integer :user_id
      t.string :savable_type
      t.bigint :savable_id

      t.timestamps
    end

    add_index :saves, [:savable_type, :savable_id]
  end
end
