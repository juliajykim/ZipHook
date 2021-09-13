@houses.each do |house|
  json.set! house.id do
    json.extract! house, :id, :address, :city_id, :state_id, :zipcode, :beds, :baths, :sqft
    json.photo_url url_for(house.photo)
  end
end
