json.extract! user, :id, :email

saved = user.saves.map { |save| save.property_id }
json.saves saved.uniq
