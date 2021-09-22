# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
require "faker"

User.delete_all
House.delete_all
Save.delete_all
City.delete_all
State.delete_all

demo_user = User.create!(email: "demo@zip.com", password: "password")
cities = ["new york", "brooklyn", "queens", "bronx"]
states = ["NY", "NJ", "SF"]

newyork = City.create!(name: "new york")
brooklyn = City.create!(name: "brooklyn")
queens = City.create!(name: "queens")
bronx = City.create!(name: "bronx")

cities = [newyork, brooklyn, queens, bronx]

ny = State.create!(name: "NY")
nj = State.create!(name: "NJ")
sf = State.create!(name: "SF")

states = [ny, nj, sf]

10.times do |i|
  house = House.new
  house.lat = 40.746809 + rand(0.01..0.05) * [1, -1].sample
  house.lng = -73.987422 + rand(0.01..0.05) * [1, -1].sample
  house.address = Faker::Address.street_address
  house.city_id = cities.sample.id
  house.city = cities.sample
  house.state_id = states.sample.id
  house.state = states.sample
  house.zipcode = rand(10001..11104)
  house.price = rand(100000..10000000)
  house.beds = rand(1..10)
  house.baths = rand(1..10)
  house.sqft = rand(400..10000)
  house.is_rent = true
  house.description = Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false)

  liv_photo_num = rand(1..13)

  liv = URI.open("https://ziphook-seed.s3.amazonaws.com/livingroom#{liv_photo_num}.jpg")
  bath = URI.open("https://ziphook-seed.s3.amazonaws.com/livingroom#{liv_photo_num}.jpg")
  bed = URI.open("https://ziphook-seed.s3.amazonaws.com/livingroom#{liv_photo_num}.jpg")
  kitchen = URI.open("https://ziphook-seed.s3.amazonaws.com/livingroom#{liv_photo_num}.jpg")

  liv_file = "livingroom#{liv_photo_num}.jpg"
  bed_file = "livingroom#{liv_photo_num}.jpg"
  bath_file = "livingroom#{liv_photo_num}.jpg"
  kitchen_file = "livingroom#{liv_photo_num}.jpg"

  house.photos.attach(io: liv, filename: liv_file)
  house.photos.attach(io: bath, filename: bed_file)
  house.photos.attach(io: bed, filename: bath_file)
  house.photos.attach(io: kitchen, filename: kitchen_file)
  house.save!
end
