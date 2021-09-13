# == Schema Information
#
# Table name: states
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  house_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class State < ApplicationRecord
  validates :name, :house_id, presence: true

  has_many :houses
end
