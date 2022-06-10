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
  
  if model.downcase.eql?('cannon') 
    return select_cannon_lenses(rand_num_lenses)
  elsif model.downcase.eql?('nikon') 
    return select_nikon_lenses(rand_num_lenses)
  elsif model.downcase.eql?('sony') 
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
  user_id: jacob_saved.id,
  featured: true
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
  user_id: guest_saved.id,
  featured: true
}

camera_3 = Faker::Camera.brand_with_model
lenses_3 = get_lenses(camera_3.split.first)
profile_abstract = {
  first_name: faker_user_3[:name].split.first,
  last_name: faker_user_3[:name].split.last,
  website_url: faker_user_3[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_3,
  lenses: lenses_3,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: 'The unknown is known...to me. Abstract photographer.',
  gender: 'Male',
  user_id: user_3_saved.id,
  featured: true
}

camera_4 = Faker::Camera.brand_with_model
lenses_4 = get_lenses(camera_4.split.first)
profile_animals = {
  first_name: faker_user_4[:name].split.first,
  last_name: faker_user_4[:name].split.last,
  website_url: faker_user_4[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_4,
  lenses: lenses_4,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: 'Vegan, animal lover. Nature photography is my life!',
  gender: 'Male',
  user_id: user_4_saved.id,
  featured: true
}

camera_5 = Faker::Camera.brand_with_model
lenses_5 = get_lenses(camera_5.split.first)
profile_chocolate = {
  first_name: faker_user_5[:name].split.first,
  last_name: faker_user_5[:name].split.last,
  website_url: faker_user_5[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_5,
  lenses: lenses_5,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Who doesn't like chocolate? ME... I LOVE CHOCOLATE",
  gender: 'Male',
  user_id: user_5_saved.id,
  featured: true
}

camera_8 = Faker::Camera.brand_with_model
lenses_8 = get_lenses(camera_8.split.first)
profile_music = {
  first_name: faker_user_8[:name].split.first,
  last_name: faker_user_8[:name].split.last,
  website_url: faker_user_8[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_8,
  lenses: lenses_8,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Professional photographer for musicians around the world",
  gender: 'Male',
  user_id: user_8_saved.id,
  featured: true
}

camera_9 = Faker::Camera.brand_with_model
lenses_9 = get_lenses(camera_9.split.first)
profile_sports = {
  first_name: faker_user_9[:name].split.first,
  last_name: faker_user_9[:name].split.last,
  website_url: faker_user_9[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_9,
  lenses: lenses_9,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Sports is life.",
  gender: 'Male',
  user_id: user_9_saved.id,
  featured: true
}

camera_6 = Faker::Camera.brand_with_model
lenses_6 = get_lenses(camera_6.split.first)
profile_8 = {
  first_name: faker_user_6[:name].split.first,
  last_name: faker_user_6[:name].split.last,
  website_url: faker_user_6[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_6,
  lenses: lenses_6,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_6_saved.id,
  featured: false
}

camera_10 = Faker::Camera.brand_with_model
lenses_10 = get_lenses(camera_10.split.first)
profile_9 = {
  first_name: faker_user_10[:name].split.first,
  last_name: faker_user_10[:name].split.last,
  website_url: faker_user_10[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_10,
  lenses: lenses_10,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_10_saved.id,
  featured: false
}

camera_11 = Faker::Camera.brand_with_model
lenses_11 = get_lenses(camera_11.split.first)
profile_10 = {
  first_name: faker_user_11[:name].split.first,
  last_name: faker_user_11[:name].split.last,
  website_url: faker_user_11[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_11,
  lenses: lenses_11,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_11_saved.id,
  featured: false
}

camera_12 = Faker::Camera.brand_with_model
lenses_12 = get_lenses(camera_12.split.first)
profile_11 = {
  first_name: faker_user_12[:name].split.first,
  last_name: faker_user_12[:name].split.last,
  website_url: faker_user_12[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_12,
  lenses: lenses_12,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_12_saved.id,
  featured: false
}

camera_13 = Faker::Camera.brand_with_model
lenses_13 = get_lenses(camera_13.split.first)
profile_12 = {
  first_name: faker_user_13[:name].split.first,
  last_name: faker_user_13[:name].split.last,
  website_url: faker_user_13[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_13,
  lenses: lenses_13,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_13_saved.id,
  featured: false
}

camera_14 = Faker::Camera.brand_with_model
lenses_14 = get_lenses(camera_14.split.first)
profile_13 = {
  first_name: faker_user_14[:name].split.first,
  last_name: faker_user_14[:name].split.last,
  website_url: faker_user_14[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_14,
  lenses: lenses_14,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_14_saved.id,
  featured: false
}

camera_15 = Faker::Camera.brand_with_model
lenses_15 = get_lenses(camera_15.split.first)
profile_14 = {
  first_name: faker_user_15[:name].split.first,
  last_name: faker_user_15[:name].split.last,
  website_url: faker_user_15[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_15,
  lenses: lenses_15,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_15_saved.id,
  featured: false
}

camera_16 = Faker::Camera.brand_with_model
lenses_16 = get_lenses(camera_16.split.first)
profile_15 = {
  first_name: faker_user_7[:name].split.first,
  last_name: faker_user_7[:name].split.last,
  website_url: faker_user_7[:url],
  instagram_url: 'https://www.instagram.com/',
  cameras: camera_16,
  lenses: lenses_16,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: user_7_saved.id,
  featured: false
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

profile_guest_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/guest_avatar.webp'), filename: 'guest_avatar.jpg')

profile_jacob_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/jacob_avatar.jpg'), filename: 'jacob_avatar.jpg')

profile_abstract_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_1.png'), filename: 'abstract_avatar.jpg')

profile_animals_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_2.png'), filename: 'animal_avatar.jpg')

profile_chocolate_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_3.png'), filename: 'choco_avatar.jpg')

profile_music_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_4.png'), filename: 'music_avatar.jpg')

profile_sports_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_5.png'), filename: 'sport_avatar.jpg')

profile_8_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_6.png'), filename: '8_avatar.jpg')

profile_9_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_7.png'), filename: '9_avatar.jpg')

profile_10_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_8.png'), filename: '10_avatar.jpg')

profile_11_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_9.png'), filename: '11_avatar.jpg')

profile_12_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_10.png'), filename: '12_avatar.jpg')

profile_13_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_11.png'), filename: '13_avatar.jpg')

profile_14_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_12.png'), filename: '14_avatar.jpg')

profile_15_saved.avatar.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/avatars/avatar_13.png'), filename: '15_avatar.jpg')



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

# guest user
photo_1 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2111,
  height: 1407,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_1_saved = Photo.new(photo_1)
photo_1_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/architecture-building-black-and-white-staircase-staircase-steps-spiral-london-spiral-staircase_t20_Amw31y.jpg'), filename: 'minimal_1.jpg')
photo_1_saved.save!

photo_2 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1933,
  height: 1165,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_2_saved = Photo.new(photo_2)
photo_2_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/big-surf-off-the-coast-of-southern-africa_t20_K6EEyE.jpg'), filename: 'minimal_2.jpg')
photo_2_saved.save!

photo_3 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2094,
  height: 1396,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_3_saved = Photo.new(photo_3)
photo_3_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/cabalgata-en-el-mar_t20_gLlABx.jpg'), filename: 'minimal_3.jpg')
photo_3_saved.save!

photo_4 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1070,
  height: 1070,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_4_saved = Photo.new(photo_4)
photo_4_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/capture-light_t20_ZnBxYY.jpg'), filename: 'minimal_4.jpg')
photo_4_saved.save!

photo_5 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').last,
  width: 1024,
  height: 1024,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_5_saved = Photo.new(photo_5)
photo_5_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/cat-cat-s-eye-minimal-minimalist-minimalistic-minimalism_t20_7yN4Kk.jpg'), filename: 'minimal_5.jpg')
photo_5_saved.save!

photo_6 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2016,
  height: 1344,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_6_saved = Photo.new(photo_6)
photo_6_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/city-architecture-bridge-uk-landmark-london-fog-monochrome-mist-millennium-bridge_t20_A321Py.jpg'), filename: 'minimal_6.jpg')
photo_6_saved.save!

photo_7 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1824,
  height: 1503,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_7_saved = Photo.new(photo_7)
photo_7_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/city-architecture-people-business-adult-sign-hand-iron-minimal-desktop_t20_kRRmzE.jpg'), filename: 'minimal_7.jpg')
photo_7_saved.save!

photo_8 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2094,
  height: 1396,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_8_saved = Photo.new(photo_8)
photo_8_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/door-outside-that-leads-to-the-ocean_t20_ZJJRn0.jpg'), filename: 'minimal_8.jpg')
photo_8_saved.save!

photo_9 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2092,
  height: 1396,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_9_saved = Photo.new(photo_9)
photo_9_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/frame-mock-up-canvas-white-poster-blank-template-background-wall-design-mock-up-mockup-empty-copy_t20_nLZw6P.jpg'), filename: 'minimal_9.jpg')
photo_9_saved.save!

photo_10 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2170,
  height: 1323,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_10_saved = Photo.new(photo_10)
photo_10_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/green-spiral-vine-macro-curly-spirals-minimal-green-plants-natural-spirals-plant-spirals_t20_kz3kkX.jpg'), filename: 'minimal_10.jpg')
photo_10_saved.save!

photo_11 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1915,
  height: 1436,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_11_saved = Photo.new(photo_11)
photo_11_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/minimal_t20_PJjN97.jpg'), filename: 'minimal_11.jpg')
photo_11_saved.save!

photo_12 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1405,
  height: 2108,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_12_saved = Photo.new(photo_12)
photo_12_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/minimalistic-orange-corridor-with-arched-ceiling-in-egyptian-architecture_t20_4230d2.jpg'), filename: 'minimal_12.jpg')
photo_12_saved.save!

photo_13 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1479,
  height: 1849,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_13_saved = Photo.new(photo_13)
photo_13_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/minimalistic-vibe_t20_VW10N1.jpg'), filename: 'minimal_13.jpg')
photo_13_saved.save!

photo_14 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 1436,
  height: 1915,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_14_saved = Photo.new(photo_14)
photo_14_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/nature-fog-bench-dock-minimalism-neutrals_t20_onn1E8.jpg'), filename: 'minimal_14.jpg')
photo_14_saved.save!

photo_15 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest_saved.lenses,
  camera: profile_guest_saved.cameras.split(',').first,
  width: 2014,
  height: 1411,
  profile_id: profile_guest_saved.id,
  category: 'minimalism',
  featured: ''
}
photo_15_saved = Photo.new(photo_15)
photo_15_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/minimalism/nature-outdoors-sky-night-adventure-male-landscape-star-impact-earth-milky-way-minimalism-epic_t20_nR7L9A.jpg'), filename: 'minimal_15.jpg')
photo_15_saved.save!


## jacob

photo_16 = {
  title: 'Eyes',
  description: 'Eyes are the window to the soul.',
  location: 'South Pasadena',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1581,
  profile_id: profile_jacob_saved.id,
  category: 'people',
  featured: ''
}
photo_16_saved = Photo.new(photo_16)
photo_16_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/Benowitz Jacob - Eyes.jpg'), filename: 'jacob_16.jpg')
photo_16_saved.save!

photo_17 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Pasadena',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1581,
  profile_id: profile_jacob_saved.id,
  category: 'city',
  featured: ''
}
photo_17_saved = Photo.new(photo_17)
photo_17_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/Benowitz Jacob - LampSkyColor.jpg'), filename: 'jacob_17.jpg')
photo_17_saved.save!

photo_18 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Grape Valley',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1164,
  profile_id: profile_jacob_saved.id,
  category: 'nature',
  featured: ''
}
photo_18_saved = Photo.new(photo_18)
photo_18_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/DSC_Creative_0214.jpg'), filename: 'jacob_18.jpg')
photo_18_saved.save!

photo_18_1 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Pasadena',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1164,
  profile_id: profile_jacob_saved.id,
  category: 'creative',
  featured: ''
}
photo_18_1_saved = Photo.new(photo_18_1)
photo_18_1_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/DSC_Creative_0232.jpg'), filename: 'jacob_18_1.jpg')
photo_18_1_saved.save!

photo_19 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Ashville',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1167,
  profile_id: profile_jacob_saved.id,
  category: 'nature',
  featured: ''
}
photo_19_saved = Photo.new(photo_19)
photo_19_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/IMG_1453.jpg'), filename: 'jacob_19.jpg')
photo_19_saved.save!

photo_20 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'San Luis Obispo',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1167,
  profile_id: profile_jacob_saved.id,
  category: 'nature',
  featured: ''
}
photo_20_saved = Photo.new(photo_20)
photo_20_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/IMG_9052.jpg'), filename: 'jacob_20.jpg')
photo_20_saved.save!

photo_21 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'South Pasadena',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1167,
  profile_id: profile_jacob_saved.id,
  category: 'city',
  featured: ''
}
photo_21_saved = Photo.new(photo_21)
photo_21_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/IMG_Creative_0443.jpg'), filename: 'jacob_21.jpg')
photo_21_saved.save!

photo_22 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Malibu',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1167,
  profile_id: profile_jacob_saved.id,
  category: 'city',
  featured: ''
}
photo_22_saved = Photo.new(photo_22)
photo_22_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/IMG_Creative_0794.jpg'), filename: 'jacob_22.jpg')
photo_22_saved.save!

photo_23 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Malibu',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1167,
  profile_id: profile_jacob_saved.id,
  category: 'beach',
  featured: ''
}
photo_23_saved = Photo.new(photo_23)
photo_23_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/IMG_Creative_0885.jpg'), filename: 'jacob_23.jpg')
photo_23_saved.save!

photo_24 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Old Town Pasadena',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1167,
  profile_id: profile_jacob_saved.id,
  category: 'beach',
  featured: ''
}
photo_24_saved = Photo.new(photo_24)
photo_24_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/IMG_Creative_2774.jpg'), filename: 'jacob_24.jpg')
photo_24_saved.save!

photo_25 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Pismo Beach',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 990,
  profile_id: profile_jacob_saved.id,
  category: 'beach',
  featured: ''
}
photo_25_saved = Photo.new(photo_25)
photo_25_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/Sunset.jpg'), filename: 'jacob_25.jpg')
photo_25_saved.save!

photo_26 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Old Town Pasadena',
  lens: profile_jacob_saved.lenses.split(',').last,
  camera: profile_jacob_saved.cameras,
  width: 1750,
  height: 1164,
  profile_id: profile_jacob_saved.id,
  category: 'creative',
  featured: ''
}
photo_26_saved = Photo.new(photo_26)
photo_26_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/jacob/Upside.jpg'), filename: 'jacob_26.jpg')
photo_26_saved.save!

## abstract

photo_27 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract_saved.lenses.split(',').first,
  camera: profile_abstract_saved.cameras.split(',').first,
  width: 1891,
  height: 1502,
  profile_id: profile_abstract_saved.id,
  category: 'abstract',
  featured: ''
}
photo_27_saved = Photo.new(photo_27)
photo_27_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/abstract/abstract-background_t20_E4387Z.jpg'), filename: 'abstract_27.jpg')
photo_27_saved.save!

photo_28 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract_saved.lenses.split(',').first,
  camera: profile_abstract_saved.cameras.split(',').first,
  width: 1407,
  height: 2111,
  profile_id: profile_abstract_saved.id,
  category: 'abstract',
  featured: ''
}
photo_28_saved = Photo.new(photo_28)
photo_28_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/abstract/abstract-net-museum-lines-threads-polygon-cobweb-contemporary-art-pentagon-geometries_t20_JJVOvl.jpg'), filename: 'abstract_28.jpg')
photo_28_saved.save!

photo_28_1 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract_saved.lenses.split(',').first,
  camera: profile_abstract_saved.cameras.split(',').first,
  width: 1436,
  height: 1915,
  profile_id: profile_abstract_saved.id,
  category: 'abstract',
  featured: ''
}
photo_28_1_saved = Photo.new(photo_28_1)
photo_28_1_saved.photo.attach(io: File.open('//Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/abstract/acrylic-abstract-art_t20_RJokzv.jpg'), filename: 'abstract_28_1.jpg')
photo_28_1_saved.save!

photo_29 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract_saved.lenses.split(',').first,
  camera: profile_abstract_saved.cameras.split(',').first,
  width: 1379,
  height: 2068,
  profile_id: profile_abstract_saved.id,
  category: 'abstract',
  featured: ''
}
photo_29_saved = Photo.new(photo_29)
photo_29_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/abstract/ferris-wheel-upside-down-evening-neon-colors-attraction-carousel-crystal-ball_t20_rB8vBo.jpg'), filename: 'abstract_29.jpg')
photo_29_saved.save!

photo_30 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract_saved.lenses.split(',').first,
  camera: profile_abstract_saved.cameras.split(',').first,
  width: 2048,
  height: 1365,
  profile_id: profile_abstract_saved.id,
  category: 'abstract',
  featured: ''
}
photo_30_saved = Photo.new(photo_30)
photo_30_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/abstract/motions-3-3_t20_BAP4Nv.jpg'), filename: 'abstract_30.jpg')
photo_30_saved.save!

photo_31 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract_saved.lenses.split(',').first,
  camera: profile_abstract_saved.cameras.split(',').first,
  width: 1536,
  height: 1536,
  profile_id: profile_abstract_saved.id,
  category: 'abstract',
  featured: ''
}
photo_31_saved = Photo.new(photo_31)
photo_31_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/abstract/nominated-digital-experiment_t20_XQNjXR.jpg'), filename: 'abstract_31.jpg')
photo_31_saved.save!

## animals

photo_32 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 1407,
  height: 2111,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_32_saved = Photo.new(photo_32)
photo_32_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/_t20_kLZ3zr.jpg'), filename: 'animals_32.jpg')
photo_32_saved.save!

photo_33 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 1711,
  height: 1107,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_33_saved = Photo.new(photo_33)
photo_33_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/_t20_YamEaR.jpg'), filename: 'animals_33.jpg')
photo_33_saved.save!

photo_34 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 1396,
  height: 2094,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_34_saved = Photo.new(photo_34)
photo_34_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/a-monkey-sat-in-a-human-pose-in-loro-park-tenerife_t20_98LvYA.jpg'), filename: 'animals_34.jpg')
photo_34_saved.save!

# photo_35 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   location: Faker::Address.city,
#   lens: profile_animals_saved.lenses.split(',').first,
#   camera: profile_animals_saved.cameras.split(',').first,
#   width: 2094,
#   height: 1396,
#   profile_id: profile_animals_saved.id,
#   category: 'animals',
# featured: ''
# }

# photo_35_saved = Photo.new(photo_35)
# photo_35_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/an-infant-monkey-is-nursing-looking-at-the-camera-while-his-mother-is-lying-on-her-back-and-the-male_t20_KAPOyK.jpg'), filename: 'animals_35.jpg')photo_35_saved.save!

photo_36 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 2020,
  height: 1348,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_36_saved = Photo.new(photo_36)
photo_36_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/animal-animal-nature-animals-green-wild-exotic-fox-wild-nature-foxy_t20_rL13QJ.jpg'), filename: 'animals_36.jpg')
photo_36_saved.save!

photo_37 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 2081,
  height: 1387,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_37_saved = Photo.new(photo_37)
photo_37_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/animal-nature-nature-animals-animals-wild-exotic-owls_t20_XNVzor.jpg'), filename: 'animals_37.jpg')
photo_37_saved.save!

photo_38 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 1672,
  height: 1112,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_38_saved = Photo.new(photo_38)
photo_38_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/happy-elephant_t20_kLWQ24.jpg'), filename: 'animals_38.jpg')
photo_38_saved.save!

photo_39 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 2117,
  height: 1411,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_39_saved = Photo.new(photo_39)
photo_39_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/humans-in-monkeys-body-everyone-is-a-human-kind-just-living-in-different-dimension-and-different-life_t20_yne8zp.jpg'), filename: 'animals_39.jpg')
photo_39_saved.save!

photo_40 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals_saved.lenses.split(',').first,
  camera: profile_animals_saved.cameras.split(',').first,
  width: 2117,
  height: 1411,
  profile_id: profile_animals_saved.id,
  category: 'animals',
  featured: ''
}
photo_40_saved = Photo.new(photo_40)
photo_40_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/animals/red-fox-having-a-good-stretch-in-the-dunes-around-kijkduin-in-the-hague-netherlands-details-of-fur_t20_mLZJx3.jpg'), filename: 'animals_40.jpg')
photo_40_saved.save!

## chocolate

photo_40_choc = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1223,
  height: 1223,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_40_choc_saved = Photo.new(photo_40_choc)
photo_40_choc_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolate-brownie-batter-on-beaters_t20_yvjYVx.jpg'), filename: 'chocolate_40_choc.jpg')
photo_40_choc_saved.save!

photo_41 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 900,
  height: 1200,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_41_saved = Photo.new(photo_41)
photo_41_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolate-cake_t20_yvZNpx.jpg'), filename: 'chocolate_41.jpg')
photo_41_saved.save!

photo_42 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1396,
  height: 2094,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_42_saved = Photo.new(photo_42)
photo_42_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolate-chia-seed-pudding_t20_PoPbdR.jpg'), filename: 'chocolate_42.jpg')
photo_42_saved.save!

photo_43 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1499,
  height: 1006,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_43_saved = Photo.new(photo_43)
photo_43_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolate-curls_t20_4ENQOy.jpg'), filename: 'chocolate_43.jpg')
photo_43_saved.save!

photo_44 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1500,
  height: 1000,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_44_saved = Photo.new(photo_44)
photo_44_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolate-donuts-with-sprinkles_t20_e3nJQW.jpg'), filename: 'chocolate_44.jpg')
photo_44_saved.save!

photo_45 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1616,
  height: 1080,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_45_saved = Photo.new(photo_45)
photo_45_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolate-truffles_t20_JlPK14.jpg'), filename: 'chocolate_45.jpg')
photo_45_saved.save!

photo_46 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1512,
  height: 1512,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_46_saved = Photo.new(photo_46)
photo_46_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/chocolates_t20_1Je2dx.jpg'), filename: 'chocolate_46.jpg')
photo_46_saved.save!

photo_47 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate_saved.lenses.split(',').first,
  camera: profile_chocolate_saved.cameras.split(',').first,
  width: 1376,
  height: 2064,
  profile_id: profile_chocolate_saved.id,
  category: 'chocolate',
  featured: ''
}
photo_47_saved = Photo.new(photo_47)
photo_47_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/chocolate/cocoa-powder-spilled-out-on-a-white-table_t20_kjEgYE.jpg'), filename: 'chocolate_47.jpg')
photo_47_saved.save!


## music

photo_48 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 2014,
  height: 1471,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_48_saved = Photo.new(photo_48)
photo_48_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/a-guitarist-with-long-hair-performing-at-a-concert-with-pyro_t20_vLVAaG.jpg'), filename: 'music_48.jpg')
photo_48_saved.save!

photo_49 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 1936,
  height: 1088,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_49_saved = Photo.new(photo_49)
photo_49_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/behind-the-djs_t20_pY9gdO.jpg'), filename: 'music_49.jpg')
photo_49_saved.save!

photo_50 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 2118,
  height: 1412,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_50_saved = Photo.new(photo_50)
photo_50_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/close-up-drum-sticks-drumming-hit-beat-rhythm-on-drum-surface-with-splash-water-drops_t20_QJQ99y.jpg'), filename: 'music_50.jpg')
photo_50_saved.save!

photo_51 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 1152,
  height: 1728,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_51_saved = Photo.new(photo_51)
photo_51_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/defocus-young-woman-playing-guitar-on-sunset-in-autumn-field-candid-silhouette-woman-in-hat-chill_t20_NlWYyQ.jpg'), filename: 'music_51.jpg')
photo_51_saved.save!

photo_52 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 1596,
  height: 1239,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_52_saved = Photo.new(photo_52)
photo_52_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/dnepropetrovsk-ukraine-04-05-2017-a-musician-on-a-city-street-after-a-successful-concert_t20_WJEmmz.jpg'), filename: 'music_52.jpg')
photo_52_saved.save!

photo_53 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 1168,
  height: 1752,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_53_saved = Photo.new(photo_53)
photo_53_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/happy-accordion-player_t20_rorAaJ.jpg'), filename: 'music_53.jpg')
photo_53_saved.save!

photo_54 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 2048,
  height: 1365,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_54_saved = Photo.new(photo_54)
photo_54_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/illuminated-neon-words-on-the-wall_t20_yRbZAL.jpg'), filename: 'music_54.jpg')
photo_54_saved.save!

photo_55 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 2111,
  height: 1407,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_55_saved = Photo.new(photo_55)
photo_55_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/music_t20_mxbEml.jpg'), filename: 'music_55.jpg')
photo_55_saved.save!

photo_56 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music_saved.lenses.split(',').first,
  camera: profile_music_saved.cameras.split(',').first,
  width: 2094,
  height: 1396,
  profile_id: profile_music_saved.id,
  category: 'music',
  featured: ''
}
photo_56_saved = Photo.new(photo_56)
photo_56_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/music/music-concert-musician-drummer-drums-live-drummer_t20_4dmEEl.jpg'), filename: 'music_56.jpg')
photo_56_saved.save!

## sports 

photo_57 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 2072,
  height: 1381,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_57_saved = Photo.new(photo_57)
photo_57_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/adrenaline-trail-dirt-man-leg-boot-biker-racer-moto-active-cross-enduro-motorcyclist-boots_t20_KArpK1.jpg'), filename: 'sports_57.jpg')
photo_57_saved.save!

photo_58 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 2066,
  height: 1371,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_58_saved = Photo.new(photo_58)
photo_58_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/adventure-sports-sports-extreme-sports-action-adrenaline-adventurous-watersports-flyboard_t20_g1bEzz.jpg'), filename: 'sports_58.jpg')
photo_58_saved.save!

photo_59 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 1354,
  height: 2031,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_59_saved = Photo.new(photo_59)
photo_59_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/adventure-surfing-sports-extreme-sports-extreme-sports-water-sports-life-surf-adrenaline-adventurous_t20_JokERk.jpg'), filename: 'sports_59.jpg')
photo_59_saved.save!

photo_60 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 1355,
  height: 2031,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_60_saved = Photo.new(photo_60)
photo_60_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/backflip-off-motorbike_t20_eVnelb.jpg'), filename: 'sports_60.jpg')
photo_60_saved.save!

photo_61 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 1644,
  height: 1645,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_61_saved = Photo.new(photo_61)
photo_61_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/bmx-freestyle_t20_GREW1R.jpg'), filename: 'sports_61.jpg')
photo_61_saved.save!

photo_62 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 2079,
  height: 1386,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_62_saved = Photo.new(photo_62)
photo_62_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/dune-rider_t20_1WPPev.jpg'), filename: 'sports_62.jpg')
photo_62_saved.save!

photo_63 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 1152,
  height: 768,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_63_saved = Photo.new(photo_63)
photo_63_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/going-down_t20_Noelrp.jpg'), filename: 'sports_63.jpg')
photo_63_saved.save!

photo_64 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 2117,
  height: 1411,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_64_saved = Photo.new(photo_64)
photo_64_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/hot-summer-days-are-just-perfect-for-a-river-cool-down_t20_8ORbGa.jpg'), filename: 'sports_64.jpg')
photo_64_saved.save!

photo_65 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 2048,
  height: 1352,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_65_saved = Photo.new(photo_65)
photo_65_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/jerrod-skorupski-pontiac-14_t20_VodWQ8.jpg'), filename: 'sports_65.jpg')
photo_65_saved.save!

photo_66 = {
  title: Faker::Hipster.sentence(word_count: 3),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports_saved.lenses.split(',').first,
  camera: profile_sports_saved.cameras.split(',').first,
  width: 1152,
  height: 768,
  profile_id: profile_sports_saved.id,
  category: 'sports',
  featured: ''
}
photo_66_saved = Photo.new(photo_66)
photo_66_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/sports/KokOOx_t20_KokOOx.jpg'), filename: 'sports_66.jpg')
photo_66_saved.save!


### first batch

# photo_2 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   location: "Brooklyn",
#   lens: 'EF 70-200mm f/4.0',
#   camera: 'Cannon EOS 5DS',
#   width: 500,
#   height: 333,
#   profile_id: profile_1_saved.id,
#     # category
# }
# photo_2_saved = Photo.new(photo_2)

# photo_2_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/toronto-city_t20_6lAdEo.jpg'), filename: 'cave.jpg')


# photo_3 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   width: 500,
#   height: 375,
#   profile_id: guest_profile_saved.id,
#     # category
# }
# photo_3_saved = Photo.new(photo_3)

# photo_3_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/beautiful-jellyfish-or-medusa-in-the-neon-light-in-aquarium-in-new-opened-prague-medusarium-czech_t20_GJEL7E.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


# photo_4 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   width: 500,
#   height: 295,
#   profile_id: profile_1_saved.id,
#     # category
# }
# photo_4_saved = Photo.new(photo_4)

# photo_4_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/bike-in-urban-area_t20_ZV18zj.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


# photo_5 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   profile_id: guest_profile_saved.id,
#   width: 500,
#   height: 375,
#     # category
# }
# photo_5_saved = Photo.new(photo_5)

# photo_5_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/bright-and-colorful-jump_t20_B80RmO.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


# photo_6 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   profile_id: profile_1_saved.id,
#   width: 333,
#   height: 500,
#     # category
# }
# photo_6_saved = Photo.new(photo_6)

# photo_6_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/yellow-tramway-in-busy-streets-of-lisbon_t20_xXgY0Q.jpg'), filename: Faker::Hipster.sentence(word_count: 3))


# photo_7 = {
#   title: Faker::Hipster.sentence(word_count: 3),
#   description: Faker::Hipster.sentences(number: 1).first,
#   profile_id: guest_profile_saved.id,
#   width: 500,
#   height: 375,
#     # category
# }
# photo_7_saved = Photo.new(photo_7)

# photo_7_saved.photo.attach(io: File.open('/Users/jacobbenowitz/Desktop/a:A/my5000px/app/assets/images/seeds/2000px/sea-turtles_t20_98OYYY.jpg'), filename: Faker::Hipster.sentence(word_count: 3))

# photo_1_saved.save
# photo_2_saved.save
# photo_3_saved.save
# photo_4_saved.save
# photo_5_saved.save
# photo_6_saved.save
# photo_7_saved.save

################################################################################

## likes

# like1 = Like.new(photo_id: photo_1_saved.id, liker_id: profile_1_saved.id)
# like2 = Like.new(photo_id: photo_2_saved.id, liker_id: guest_profile_saved.id)
# like3 = Like.new(photo_id: photo_3_saved.id, liker_id: guest_profile_saved.id)

# like1.save
# like2.save
# like3.save