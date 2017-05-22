class User <ActiveRecord::Base
  has_many :books, dependent: :destroy
end
class Book <ActiveRecord::Base
  belongs_to :user
end
