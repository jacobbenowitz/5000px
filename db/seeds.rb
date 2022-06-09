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

################################################################################

## cleanup

User.destroy_all
Profile.destroy_all
Photo.destroy_all
Like.destroy_all

################################################################################

## users

# hard-coded users
guest = {
  username: 'Guest',
  email: 'guest@gmail.com',
  password: 'demo#User!806'
}

jacob = {
  username: 'jacobbenowitz',
  email: 'jacob.benowitz@gmail.com',
  password: 'iZDhBJ6QrkvYKkXDn3Uz'
}

# generated users
faker_user_1 = Faker::Twitter.user(include_email: true)
faker_user_2 = Faker::Twitter.user(include_email: true)
faker_user_3 = Faker::Twitter.user(include_email: true)
faker_user_4 = Faker::Twitter.user(include_email: true)
faker_user_5 = Faker::Twitter.user(include_email: true)
faker_user_6 = Faker::Twitter.user(include_email: true)
faker_user_7 = Faker::Twitter.user(include_email: true)
faker_user_8 = Faker::Twitter.user(include_email: true)
faker_user_9 = Faker::Twitter.user(include_email: true)
faker_user_10 = Faker::Twitter.user(include_email: true)
faker_user_11 = Faker::Twitter.user(include_email: true)
faker_user_12 = Faker::Twitter.user(include_email: true)
faker_user_13 = Faker::Twitter.user(include_email: true)
faker_user_14 = Faker::Twitter.user(include_email: true)
faker_user_15 = Faker::Twitter.user(include_email: true)

generated_user_1 = {
  username: faker_user_1[:screen_name],
  email: faker_user_1[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_2 = {
  username: faker_user_2[:screen_name],
  email: faker_user_2[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_3 = {
  username: faker_user_3[:screen_name],
  email: faker_user_3[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_4 = {
  username: faker_user_4[:screen_name],
  email: faker_user_4[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_5 = {
  username: faker_user_5[:screen_name],
  email: faker_user_5[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_6 = {
  username: faker_user_6[:screen_name],
  email: faker_user_6[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_7 = {
  username: faker_user_7[:screen_name],
  email: faker_user_7[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_8 = {
  username: faker_user_8[:screen_name],
  email: faker_user_8[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_9 = {
  username: faker_user_9[:screen_name],
  email: faker_user_9[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_10 = {
  username: faker_user_10[:screen_name],
  email: faker_user_10[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_11 = {
  username: faker_user_11[:screen_name],
  email: faker_user_11[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_12 = {
  username: faker_user_12[:screen_name],
  email: faker_user_12[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_13 = {
  username: faker_user_13[:screen_name],
  email: faker_user_13[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_14 = {
  username: faker_user_14[:screen_name],
  email: faker_user_14[:email],
  password: 'Lmd15cCX!aDk63b',
}
generated_user_15 = {
  username: faker_user_15[:screen_name],
  email: faker_user_15[:email],
  password: 'Lmd15cCX!aDk63b',
}

guest_saved = User.create(guest)
jacob_saved = User.create(jacob)
user_1_saved = User.create(generated_user_1)
user_2_saved = User.create(generated_user_2)
user_3_saved = User.create(generated_user_3)
user_4_saved = User.create(generated_user_4)
user_5_saved = User.create(generated_user_5)
user_6_saved = User.create(generated_user_6)
user_7_saved = User.create(generated_user_7)
user_8_saved = User.create(generated_user_8)
user_9_saved = User.create(generated_user_9)
user_10_saved = User.create(generated_user_10)
user_11_saved = User.create(generated_user_11)
user_12_saved = User.create(generated_user_12)
user_13_saved = User.create(generated_user_13)
user_14_saved = User.create(generated_user_14)
user_15_saved = User.create(generated_user_15)

################################################################################

## profiles

def get_lenses(model)
  rand_num_lenses = rand(1...4)
  
  if model.downcase.eql('cannon') 
    return select_cannon_lenses(rand_num_lenses)
  elsif model.downcase.eql('nikon') 
    return select_nikon_lenses(rand_num_lenses)
  elsif model.downcase.eql('sony') 
    return select_sony_lenses(rand_num_lenses)
  else  
    return select_other_lenses(rand_num_lenses)
  end

end

def select_cannon_lenses(num)
  options = [
    'Canon EF 50mm f/1.8', 'Canon EF-S 24mm f/2.8', 'Canon RF 50mm f/1.8', 'Canon EF-S 55-250mm f/4-5.6 IS', 'Canon RF 16mm f/2.8', 'Canon EF-S 10-18mm f/4.5-5.6', 'Canon EF 24-70mm f/2.8L II', 'Canon EF-S 18-55mm f/3.5-5.6 IS II', 'Canon EF 50mm f/1.2L', 'Canon RF 24-70mm f/2.8L IS', 'Canon RF 70-200mm f/2.8L IS', 'Canon RF 15-35mm f/2.8L IS', 'Canon RF 28-70mm f/2L', 'Canon RF 100-500mm f/4.5-7.1L IS', 'Canon RF 50mm f/1.2L', 'Canon EF 70-200mm f/2.8L IS II'
  ]

  lenses = []
  num_options = options.length

  num.times do 
    lens = options[rand(0...num_options)]
    lenses.push(lens)
  end

  return lenses
end

def select_nikon_lenses(num)
  options = [
    'Nikon AF-S DX Nikkor 35mm f/1.8G', 'Nikon AF-S FX Nikkor 50mm f/1.8G', 'Nikon AF-S FX Nikkor 85mm f/1.8G', 'Nikon Nikkor Z 85mm f/1.8 S', 'Nikon AF-S DX Nikkor 18-140mm f/3.5-5.6G ED', 'Nikon Nikkor Z 24-200mm f/4-6.3', 'Nikon AF FX Nikkor 50mm f/1.8D', 'Nikon AF-S DX Nikkor 18-300mm f/3.5-6.3G ED', 'Nikon Nikkor Z 14-24mm f/2.8 S', 'Nikon Nikkor Z 50mm f/1.8 S', 'Nikon AF-P DX Nikkor 70-300mm f/4.5-6.3G ED VR', 'Nikon AF-S FX Nikkor 200-500mm f/5.6E ED', 'Nikon Nikkor Z 24-70mm f/2.8 S', 'Nikon Nikkor Z 70-200mm f/2.8 VR S', 'Nikon AF-S DX Micro-Nikkor 40mm f/2.8G'
  ]

  lenses = []
  num_options = options.length

  num.times do 
    lens = options[rand(0...num_options)]
    lenses.push(lens)
  end

  return lenses
end

def select_sony_lenses(num)
  options = [
    'Sony FE 12-24mm f/2.8', 'Sony E 55-210mm f/4.5-6.3', 'Sony FE 85mm f/1.8', 'Sony FE 50mm f/1.2', 'Sony FE 35mm f/1.4', 'Sony E 16-50mm f/3.5-5.6', 'Sony FE 24mm f/1.4', 'Sony E 70-350mm f/4.5-6.3 G', 'Sony FE 70-200mm f/2.8 II', 'Sony FE 20mm f/1.8 G', 'Sony E 18-135mm f/3.5-5.6', 'Sony FE 200-600mm f/5.6-6.3 G', 'Sony FE 24-105mm f/4 G', 'Sony FE 12-24mm f/2.8'
  ]

  lenses = []
  num_options = options.length

  num.times do 
    lens = options[rand(0...num_options)]
    lenses.push(lens)
  end

  return lenses
end

def select_other_lenses(num)
  options = [
    'Sigma 24-70mm f/2.8', 'Tamron 28-75mm f/2.8', 'Sigma 16mm f/1.4', 'Sigma 150-600mm f/5-6.3 ', 'Sigma 18-35mm f/1.8', 'Sigma 18-50mm f/2.8', 'Tamron 70-180mm f/2.8'
  ]

  lenses = []
  num_options = options.length

  num.times do 
    lens = options[rand(0...num_options)]
    lenses.push(lens)
  end

  return lenses
end


profile_jacob = {
  first_name: 'Jacob',
  last_name: 'Benowitz',
  website_url: 'https://www.jacobbenowitz.com',
  instagram_url: 'https://www.instagram.com/j.benowitz',
  lenses: '50mm f/1.8, Lumix G X Vario 35-100mm f/2.8',
  cameras: 'Panasonic GH5',
  birthday: '03/17/1998',
  city: 'Brooklyn',
  country: 'United States',
  about: 'Full-stack engineer & previously a technical marketer with a passion for photography and video.',
  gender: 'Male',
  user_id: jacob_saved.id
}
profile_guest = {
  first_name: 'Jane',
  last_name: 'Smith',
  website_url: 'https://www.jacobbenowitz.com',
  instagram_url: 'https://www.instagram.com/',
  lenses: 'EF 70-200mm f/4.0',
  cameras: 'Cannon EOS 5DS, Cannon 50mm 1.4f',
  birthday: '01/01/2000',
  city: 'Dobbs Ferry',
  country: 'United States',
  about: 'Minimalist. I live by the motto: less is more, and do my best to caputure that in my photography.',
  gender: 'Female',
  user_id: guest_saved.id
}

camera_1 = Faker::Camera.brand_with_model
lenses_1 = get_lenses(camera_1.split.first)
profile_user_1 = {
  first_name: user_1_saved[:name].split.first,
  last_name: user_1_saved[:name].split.last,
  website_url: user_1_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_1,
  lenses: lenses_1,
  birthday: '01/01/2000',
  city: 'Dobbs Ferry',
  country: 'United States',
  about: 'Minimalist. I live by the motto: less is more, and do my best to caputure that in my photography.',
  gender: 'Female',
  user_id: user_1_saved.id
}

profile_1_saved = Profile.create(profile_1)
guest_profile_saved = Profile.create(profile_guest)

################################################################################

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

################################################################################

## photos

photo_1 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: "Malibu",
  lens: 'EF 70-200mm f/4.0',
  camera: 'Cannon EOS 5DS',
  width: 333,
  height: 500,
  profile_id: guest_profile_saved.id,
  # category
}
photo_1_saved = Photo.new(photo_1)

photo_1_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/skateboard-urban-landscape-street-photography-big-city-city-background-people-using-mobile_t20_wLPeOm.jpg'), filename: 'toronto.jpg')


photo_2 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: "Brooklyn",
  lens: 'EF 70-200mm f/4.0',
  camera: 'Cannon EOS 5DS',
  width: 500,
  height: 333,
  profile_id: profile_1_saved.id,
    # category
}
photo_2_saved = Photo.new(photo_2)

photo_2_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/toronto-city_t20_6lAdEo.jpg'), filename: 'cave.jpg')


photo_3 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  width: 500,
  height: 375,
  profile_id: guest_profile_saved.id,
    # category
}
photo_3_saved = Photo.new(photo_3)

photo_3_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/beautiful-jellyfish-or-medusa-in-the-neon-light-in-aquarium-in-new-opened-prague-medusarium-czech_t20_GJEL7E.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


photo_4 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  width: 500,
  height: 295,
  profile_id: profile_1_saved.id,
    # category
}
photo_4_saved = Photo.new(photo_4)

photo_4_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/bike-in-urban-area_t20_ZV18zj.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


photo_5 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  profile_id: guest_profile_saved.id,
  width: 500,
  height: 375,
    # category
}
photo_5_saved = Photo.new(photo_5)

photo_5_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/bright-and-colorful-jump_t20_B80RmO.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


photo_6 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  profile_id: profile_1_saved.id,
  width: 333,
  height: 500,
    # category
}
photo_6_saved = Photo.new(photo_6)

photo_6_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/yellow-tramway-in-busy-streets-of-lisbon_t20_xXgY0Q.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


photo_7 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  profile_id: guest_profile_saved.id,
  width: 500,
  height: 375,
    # category
}
photo_7_saved = Photo.new(photo_7)

photo_7_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/sea-turtles_t20_98OYYY.jpg'), filename: Faker::Hipster.sentence(word_count: 3))

photo_1_saved.save
photo_2_saved.save
photo_3_saved.save
photo_4_saved.save
photo_5_saved.save
photo_6_saved.save
photo_7_saved.save

################################################################################

## likes

# like1 = Like.new(photo_id: photo_1_saved.id, liker_id: profile_1_saved.id)
# like2 = Like.new(photo_id: photo_2_saved.id, liker_id: guest_profile_saved.id)
# like3 = Like.new(photo_id: photo_3_saved.id, liker_id: guest_profile_saved.id)

# like1.save
# like2.save
# like3.save