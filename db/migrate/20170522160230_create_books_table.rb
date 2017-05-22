class CreateBooksTable < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.text :url
      t.integer :user_id
    end
  end
end
