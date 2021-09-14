json.extract! @house, :id, :lat, :lng, :address, :city, :state, :zipcode, :price, :beds, :baths, :sqft, :is_rent
json.photo_url url_for(@house.photo)
