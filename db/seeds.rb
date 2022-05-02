# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

default_avatar = "https://my5000px-static.s3.amazonaws.com/person-placeholder-300x300.webp"
default_banner = "https://my5000px-static.s3.amazonaws.com/nature-cover-guest.jpg"

User.destroy_all
Profile.destroy_all
Photo.destroy_all

## users

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


## profiles

profile_1 = {
  first_name: 'John',
  last_name: 'Doe',
  website_url: 'https://www.somewebsite.com',
  instagram_url: 'https://www.instagram.com/user',
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
  website_url: 'https://www.jacobbenowitz.com',
  instagram_url: 'https://www.instagram.com/user',
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


## avatars

profile_1_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/person-placeholder-300x300.webp'), filename: 'placeholder-avatar.webp')

guest_profile_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/person-placeholder-300x300.webp'), filename: 'placeholder-avatar.webp')

profile_1_saved.save!
guest_profile_saved.save!


## cover photos

profile_1_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/city-street-vietnam-street-photography-hanoi-vietnam_t20_lxmznZ.jpg'), filename: 'vietnam-street.jpg')

guest_profile_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/beautiful-jellyfish-or-medusa-in-the-neon-light-in-aquarium-in-new-opened-prague-medusarium-czech_t20_GJEL7E.jpg'), filename: 'jellyfish.jpg')

guest_profile_saved.save!
profile_1_saved.save!

## photo posts

post_1 = {
  title: "Mystic deep ocean jelly",
  description: "Can't wait to go on another dive soon, life is different at the bottom of the ocean",
  profile_id: guest_profile_saved.id
}
post_1_saved = Photo.new(post_1)

post_1_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/toronto-city_t20_6lAdEo.jpg'), filename: 'toronto.jpg')

post_2 = {
  title: "Brooklyn Bridge Vibes",
  description: "Long exposure shot of the beautiful Brooklyn Bridge at sunset",
  profile_id: profile_1_saved.id
}
post_2_saved = Photo.new(post_2)

post_2_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/under-cave_t20_AV6wgr.jpg'), filename: 'cave.jpg')

post_1_saved.save!
post_2_saved.save!