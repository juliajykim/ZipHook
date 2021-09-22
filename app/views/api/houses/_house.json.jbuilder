json.extract! house, :id, :address, :zipcode, :beds, :baths, :sqft, :price, :lat, :lng
json.city house.city.name
json.state house.state.name
json.photoUrls house.photos.map { |photo| url_for(photo) }
