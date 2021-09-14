json.extract! house, :id, :address, :zipcode, :beds, :baths, :sqft, :price, :lat, :lng
json.city City.where(id: house.city_id).pluck(:name)[0]
json.state State.where(id: house.state_id).pluck(:name)[0]
