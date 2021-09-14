@houses.each do |house|
  json.set! house.id do
    json.extract! house, :id, :address, :zipcode, :beds, :baths, :sqft, :price
    json.city City.where(id: house.city_id).pluck(:name)[0]
    json.state State.where(id: house.state_id).pluck(:name)[0]
    json.photo_url url_for(house.photo)
  end
end
