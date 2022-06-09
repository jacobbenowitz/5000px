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

camera_3 = Faker::Camera.brand_with_model
lenses_3 = get_lenses(camera_1.split.first)
profile_abstract = {
  first_name: user_3_saved[:name].split.first,
  last_name: user_3_saved[:name].split.last,
  website_url: user_3_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_3,
  lenses: lenses_3,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: 'The unknown is known...to me. Abstract photographer.',
  gender: 'Male',
  user_id: user_3_saved.id
}

camera_4 = Faker::Camera.brand_with_model
lenses_4 = get_lenses(camera_1.split.first)
profile_animals = {
  first_name: user_4_saved[:name].split.first,
  last_name: user_4_saved[:name].split.last,
  website_url: user_4_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_4,
  lenses: lenses_4,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: 'Vegan, animal lover. Nature photography is my life!',
  gender: 'Male',
  user_id: user_4_saved.id
}

camera_5 = Faker::Camera.brand_with_model
lenses_5 = get_lenses(camera_1.split.first)
profile_chocolate = {
  first_name: user_5_saved[:name].split.first,
  last_name: user_5_saved[:name].split.last,
  website_url: user_5_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_5,
  lenses: lenses_5,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Who doesn't like chocolate? ME... I LOVE CHOCOLATE",
  gender: 'Male',
  user_id: user_5_saved.id
}

camera_8 = Faker::Camera.brand_with_model
lenses_8 = get_lenses(camera_1.split.first)
profile_music = {
  first_name: user_8_saved[:name].split.first,
  last_name: user_8_saved[:name].split.last,
  website_url: user_8_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_8,
  lenses: lenses_8,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Professional photographer for musicians around the world",
  gender: 'Male',
  user_id: user_8_saved.id
}

camera_9 = Faker::Camera.brand_with_model
lenses_9 = get_lenses(camera_1.split.first)
profile_sports = {
  first_name: user_9_saved[:name].split.first,
  last_name: user_9_saved[:name].split.last,
  website_url: user_9_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_9,
  lenses: lenses_9,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Sports is life.",
  gender: 'Male',
  user_id: user_9_saved.id
}

camera_6 = Faker::Camera.brand_with_model
lenses_6 = get_lenses(camera_1.split.first)
profile_8 = {
  first_name: user_6_saved[:name].split.first,
  last_name: user_6_saved[:name].split.last,
  website_url: user_6_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_6,
  lenses: lenses_6,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_6_saved.id
}

camera_10 = Faker::Camera.brand_with_model
lenses_10 = get_lenses(camera_1.split.first)
profile_9 = {
  first_name: user_10_saved[:name].split.first,
  last_name: user_10_saved[:name].split.last,
  website_url: user_10_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_10,
  lenses: lenses_10,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_10_saved.id
}

camera_11 = Faker::Camera.brand_with_model
lenses_11 = get_lenses(camera_1.split.first)
profile_10 = {
  first_name: user_11_saved[:name].split.first,
  last_name: user_11_saved[:name].split.last,
  website_url: user_11_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_11,
  lenses: lenses_11,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_11_saved.id
}

camera_12 = Faker::Camera.brand_with_model
lenses_12 = get_lenses(camera_1.split.first)
profile_11 = {
  first_name: user_12_saved[:name].split.first,
  last_name: user_12_saved[:name].split.last,
  website_url: user_12_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_12,
  lenses: lenses_12,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_12_saved.id
}

camera_13 = Faker::Camera.brand_with_model
lenses_13 = get_lenses(camera_1.split.first)
profile_12 = {
  first_name: user_13_saved[:name].split.first,
  last_name: user_13_saved[:name].split.last,
  website_url: user_13_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_13,
  lenses: lenses_13,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_13_saved.id
}

camera_14 = Faker::Camera.brand_with_model
lenses_14 = get_lenses(camera_1.split.first)
profile_13 = {
  first_name: user_14_saved[:name].split.first,
  last_name: user_14_saved[:name].split.last,
  website_url: user_14_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_14,
  lenses: lenses_14,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_14_saved.id
}

camera_15 = Faker::Camera.brand_with_model
lenses_15 = get_lenses(camera_1.split.first)
profile_14 = {
  first_name: user_15_saved[:name].split.first,
  last_name: user_15_saved[:name].split.last,
  website_url: user_15_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_15,
  lenses: lenses_15,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_15_saved.id
}

camera_16 = Faker::Camera.brand_with_model
lenses_16 = get_lenses(camera_1.split.first)
profile_15 = {
  first_name: user_16_saved[:name].split.first,
  last_name: user_16_saved[:name].split.last,
  website_url: user_16_saved[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_16,
  lenses: lenses_16,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_16_saved.id
}

profile_guest_saved = Profile.create(profile_guest)
profile_jacob_saved = Profile.create(profile_jacob)
profile_abstract_saved = Profile.create(profile_abstract)
profile_animals_saved = Profile.create(profile_animals)
profile_chocolate_saved = Profile.create(profile_chocolate)
profile_music_saved = Profile.create(profile_music)
profile_sports_saved = Profile.create(profile_sports)


profile_8_saved = Profile.create(profile_8)
profile_9_saved = Profile.create(profile_9)
profile_10_saved = Profile.create(profile_10)
profile_11_saved = Profile.create(profile_11)
profile_12_saved = Profile.create(profile_12)
profile_13_saved = Profile.create(profile_13)
profile_14_saved = Profile.create(profile_14)
profile_15_saved = Profile.create(profile_15)

################################################################################

## avatars

profile_guest_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/guest_avatar.webp', filename: 'guest_avatar.jpg')

profile_jacob_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/jacob_avatar.jpg', filename: 'jacob_avatar.jpg')

profile_abstract_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_1.png', filename: 'abstract_avatar.jpg')

profile_animals_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_2.png', filename: 'animal_avatar.jpg')

profile_chocolate_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_3.png', filename: 'choco_avatar.jpg')

profile_music_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_4.png', filename: 'music_avatar.jpg')

profile_sports_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_5.png', filename: 'sport_avatar.jpg')

profile_8_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_6.png', filename: '8_avatar.jpg')

profile_9_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_7.png', filename: '9_avatar.jpg')

profile_10_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_8.png', filename: '10_avatar.jpg')

profile_11_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_9.png', filename: '11_avatar.jpg')

profile_12_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_10.png', filename: '12_avatar.jpg')

profile_13_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_11.png', filename: '13_avatar.jpg')

profile_14_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_12.png', filename: '14_avatar.jpg')

profile_15_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_13.png', filename: '15_avatar.jpg')



################################################################################

## cover photos

profile_guest_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/minimalist_cover.jpg'), filename: 'guest_cover.jpg')
profile_jacob_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/jacob_cover.jpg'), filename: 'malibu.jpg')
profile_abstract_saved.cover.attach(io: File.open('app/assets/images/seeds/covers/abstract_cover.jpg'), filename: 'abstract_cover')
profile_animals_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/animals_cover.jpg'), filename: 'animals_cover.jpg')
profile_chocolate_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/chocolate_cover.jpg'), filename: 'chocolate_cover.jpg')
profile_music_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/music_cover.jpg'), filename: 'music_cover.jpg')
profile_sports_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/sports_cover.jpg'), filename: 'sports_cover.jpg')

profile_8_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/8_cover.jpg'), filename: '8_cover.jpg')
profile_9_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/9_cover.jpg'), filename: '9_cover.jpg')
profile_10_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/10_cover.jpg'), filename: '10_cover.jpg')
profile_11_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/11_cover.jpg'), filename: '11_cover.jpg')
profile_12_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/12_cover.jpg'), filename: '12_cover.jpg')
profile_13_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/13_cover.jpg'), filename: '13_cover.jpg')
profile_14_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/14_cover.jpg'), filename: '14_cover.jpg')
profile_15_saved.cover.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/covers/15_cover.jpg'), filename: '15_cover.jpg')

profile_guest_saved.save!
profile_jacob_saved.save!
profile_abstract_saved.save!
profile_animals_saved.save!
profile_chocolate_saved.save!
profile_music_saved.save!
profile_sports_saved.save!

profile_8_saved.save!
profile_9_saved.save!
profile_10_saved.save!
profile_11_saved.save!
profile_12_saved.save!
profile_13_saved.save!
profile_14_saved.save!
profile_15_saved.save!


################################################################################

## photos

photo_1 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: ,
  lens: ,
  camera: ,
  width: 333,
  height: 500,
  profile_id: profile_guest_saved.id,
  category: 'minimalism'
}
photo_1_saved = Photo.new(photo_1)

photo_1_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/architecture-building-black-and-white-staircase-staircase-steps-spiral-london-spiral-staircase_t20_Amw31y.jpg'), filename: 'minimal_1.jpg')


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