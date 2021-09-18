@saves.each do |save|
  jason.set! save.house_id do
    jason.partial! "api/houses/house", house_id: saves.house_id
  end
end
