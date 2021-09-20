json.extract! user, :id, :email

saved = user.saves.map { |save| save.savable_id }
json.saves saved.uniq
