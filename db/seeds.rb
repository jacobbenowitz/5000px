# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Profile.destroy_all
Photo.destroy_all

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

# images

hero_photo = {
  title: "landing_hero",
  user_id: user_1_saved.id
}

hero = Photo.create(hero_photo)

hero.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/landing_page/home_hero_opti.jpg'), filename: 'home-hero-opti.jpg')

landing_photo_1 = {
  title: "Brooklyn Bridge Vibes",
  description: "Long exposure shot of the beautiful Brooklyn Bridge at sunset",
  user_id: user_1_saved.id
}

landing_1 = Photo.create(landing_photo_1)

landing_1.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/photos/2000px/brooklyn-bridge.jpg'), filename: 'brooklyn-bridge.jpg')