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

default_avatar = "https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.webp"
default_banner = "https://my5000px-static.s3.amazonaws.com/nature-cover-guest.jpg"

user_1 = {
  username: 'tester',
  email: 'tester@mail.com',
  password: 'password'
}

guest = {
  username: 'Guest',
  email: 'guest@gmail.com',
  password: 'password'
}

user_1_saved = User.create(user_1)
guest_saved = User.create(guest)

profile_1 = {
  first_name: 'John',
  last_name: 'Doe',
  profile_avatar: default_avatar,
  profile_banner: default_banner,
  website_url: '',
  instagram_url: '',
  lenses: '50mm f/1.8',
  cameras: 'GH5',
  birthday: '01/01/2000',
  city: 'Brooklyn',
  country: 'United States',
  about: 'My little bio is amazing',
  gender: 'Male',
  user_id: user_1_saved.id
}

profile_guest = {
  first_name: 'Jane',
  last_name: 'Smith',
  profile_avatar: default_avatar,
  profile_banner: default_banner,
  website_url: 'https://www.jacobbenowitz.com',
  instagram_url: 'https://www.instagram.com/',
  lenses: 'EF 70-200mm f/4.0',
  cameras: 'Cannon EOS 5DS',
  birthday: '01/01/2000',
  city: 'Dobbs Ferry',
  country: 'United States',
  about: 'nature photographer with a passion for hiking',
  gender: 'Female',
  user_id: guest_saved.id
}

profile_1_saved = Profile.create(profile_1)
guest_profile_saved = Profile.create(profile_guest)



# images

hero_photo = {
  title: "landing_hero",
  user_id: guest_saved.id
}

hero = Photo.new(hero_photo)

hero.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/toronto-city_t20_6lAdEo.jpg'), filename: 'toronto.jpg')

hero.save!

landing_photo_1 = {
  title: "Brooklyn Bridge Vibes",
  description: "Long exposure shot of the beautiful Brooklyn Bridge at sunset",
  user_id: guest_saved.id
}

landing_1 = Photo.new(landing_photo_1)

landing_1.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/under-cave_t20_AV6wgr.jpg'), filename: 'cave.jpg')

landing_1.save!