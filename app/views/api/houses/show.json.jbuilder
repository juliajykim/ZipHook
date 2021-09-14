json.partial! "api/houses/house", house: @house

json.photo_url url_for(@house.photo)
