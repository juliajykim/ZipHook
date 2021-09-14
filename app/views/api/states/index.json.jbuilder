@states.each do |state|
  json.set! state.id do
    json.extract! state, :id, :name
  end
end
