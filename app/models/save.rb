class Save < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type] }
  belongs_to :savable, :polymorphic => true
  belongs_to :user
end
