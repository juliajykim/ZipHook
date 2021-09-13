# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  # validate :ensure_photo

  # def ensure_photo
  #   unless self.profile_photo.attached?
  #     errors[:photo] << "must be attached"
  #   end
  # end

  has_one_attached :profile_photo

  has_many :saves,
    foreign_key: :user_id,
    class_name: :Save,
    dependent: :destroy
  has_many :saved_properties,
    through: :saves,
    source: :user

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def generate_unique_session_token
    self.session_token = SecureRandom.urlsafe_base64

    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64
    end

    self.session_token
  end
end
