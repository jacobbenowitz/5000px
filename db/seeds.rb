# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

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
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: "Malibu",
  lens: 'EF 70-200mm f/4.0',
  camera: 'Cannon EOS 5DS',
  width: 1396,
  height: 2094,
  profile_id: guest_profile_saved.id
}
post_1_saved = Photo.new(post_1)

post_1_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/skateboard-urban-landscape-street-photography-big-city-city-background-people-using-mobile_t20_wLPeOm.jpg'), filename: 'toronto.jpg')


post_2 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: "Brooklyn",
  lens: 'EF 70-200mm f/4.0',
  camera: 'Cannon EOS 5DS',
  width: 2048,
  height: 1365,
  profile_id: profile_1_saved.id
}
post_2_saved = Photo.new(post_2)

post_2_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/toronto-city_t20_6lAdEo.jpg'), filename: 'cave.jpg')


post_3 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  width: 1953,
  height: 1466,
  profile_id: profile_1_saved.id
}
post_3_saved = Photo.new(post_3)

post_3_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/beautiful-jellyfish-or-medusa-in-the-neon-light-in-aquarium-in-new-opened-prague-medusarium-czech_t20_GJEL7E.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


post_4 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  width: 2251,
  height: 1326,
  profile_id: profile_1_saved.id
}
post_4_saved = Photo.new(post_4)

post_4_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/bike-in-urban-area_t20_ZV18zj.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


post_5 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  profile_id: profile_1_saved.id,
  width: 1915,
  height: 1436,
}
post_5_saved = Photo.new(post_5)

post_5_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/bright-and-colorful-jump_t20_B80RmO.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


post_6 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  profile_id: profile_1_saved.id,
  width: 1373,
  height: 2059,
}
post_6_saved = Photo.new(post_6)

post_6_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/yellow-tramway-in-busy-streets-of-lisbon_t20_xXgY0Q.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


post_7 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  profile_id: profile_1_saved.id,
  width: 2000,
  height: 1500,
}
post_7_saved = Photo.new(post_7)

post_7_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/sea-turtles_t20_98OYYY.jpg'), filename: Faker::Hipster.sentence(word_count: 3))

post_1_saved.save!
post_2_saved.save!
post_3_saved.save!
post_4_saved.save!
post_5_saved.save!
post_6_saved.save!
post_7_saved.save!



# photos = {
#   0 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   1 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   2 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   3 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   4 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   5 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   6 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   7 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   },
#   8 => {
#     title: Faker::Hipster.sentence(word_count: 3),
#     description: Faker::Hipster.sentences(number: 1)
#     profile_id: guest_profile_saved.id
#   }
# }
# dont use aws, use local
# images = [
#   "https://my5000px-static.s3.amazonaws.com/800px/urban-playground.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/sunrise-in-mexico.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/speed-boat.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/silhouette-of-fitness-woman-running-on-the-beach.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/silhouette-of-boy-throwing-a-net-into-the-water.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/red-fox-cub-vulpes-vulpes.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/moody-autumn-day-in-the-dolomites-forest.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/lost-in-the-city.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/los-angeles-vibes.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/jazz-performer-plays-the-saxophone.jpg",
#   "https://my5000px-static.s3.amazonaws.com/800px/jazz-performer-plays-the-saxophone.jpg"
# ]

# def create_sample_posts 
#   i = 0
#   while i >= post_array.length do
#     photo = Photo.create(post_array[i])
#     photo.photo.attach(io: images[i], filename: Faker::Hipster.sentence(word_count: 3))
#     i += 1
#   end
# end

# create_same_posts()