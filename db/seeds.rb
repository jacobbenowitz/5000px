# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Profile.destroy_all

user_1 = {
  username: 'tester',
  email: 'tester@mail.com',
  password: 'password'
}

user_1_saved = User.create(user_1)

profile_1 = {
  first_name: 'John',
  last_name: 'Doe',
  profile_avatar: '',
  profile_banner: '',
  website_url: '',
  instagram_url: '',
  lenses: '50mm 1.8/f',
  cameras: 'GH5',
  birthday: '01/01/2000',
  city: 'Brooklyn',
  country: 'United States',
  about: 'My little bio is amazing',
  gender: 'Male',
  user_id: user_1_saved.id
}

Profile.create(profile_1)

