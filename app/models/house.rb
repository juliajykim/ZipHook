# == Schema Information
#
# Table name: houses
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  city_id     :integer          not null
#  state_id    :integer          not null
#  zipcode     :integer          not null
#  price       :integer          not null
#  beds        :integer          not null
#  baths       :integer          not null
#  sqft        :integer          not null
#  is_rent     :boolean          default(TRUE), not null
#  lat         :float            not null
#  lng         :float            not null
#  description :text
#  yr_built    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class House < ApplicationRecord
  validates :address, :city_id, :state_id, :zipcode, :price, :beds, :baths, :sqft, :lat, :lng, presence: true
  validates :is_rent, inclusion: { in: [true, false] }

  belongs_to :city
  belongs_to :state

  has_one_attached :photo
end
