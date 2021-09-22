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

  # validate :ensure_photo
  validate :ensure_photos

  belongs_to :city
  belongs_to :state

  # has_one_attached :photo

  has_many_attached :photos
  has_many :saves, as: :savable

  # def ensure_photo
  #   unless self.photo.attached?
  #     errors[:photo] << "Photo must be attached!"
  #   end
  # end

  def ensure_photos
    unless self.photos.attached?
      errors[:photos] << "Photo must be attached!"
    end
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end

  def self.with_query(bounds, query)
    city = "%#{query.strip.split(//).join("%")}%"
    state = "%#{query.strip.split(//).join("%")}%"
    zipcode = query.to_i if query.match(/^\d+$/)
    if (zipcode.is_a?(Integer))
      minrange = zipcode - 100
      maxrange = zipcode + 100
    else
      minrange = nil
      maxrange = nil
    end

    city_id = City.where("UPPER(TRIM(name)) LIKE UPPER(?)", city).pluck(:id)[0]
    state_id = State.where("UPPER(TRIM(name)) LIKE UPPER(?)", state).pluck(:id)[0]

    self.in_bounds(bounds)
      .where("city_id=? OR state_id=? OR zipcode BETWEEN ? AND ?", city_id, state_id, minrange, maxrange)
  end
end
