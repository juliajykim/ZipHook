class Save < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:savable_id, :savable_type] }
  belongs_to :savable, :polymorphic => true
  belongs_to :user
end
