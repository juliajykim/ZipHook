@houses.each do |house|
  json.set! house.id do
    json.partial! "house", house: house
    json.photo_url url_for(house.photo)
  end
end
