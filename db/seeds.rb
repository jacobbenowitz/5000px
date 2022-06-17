require 'faker'
require 'open-uri'

################################################################################

## cleanup

User.destroy_all
Profile.destroy_all
Photo.destroy_all
Like.destroy_all
Follow.destroy_all
Comment.destroy_all

################################################################################

## comments

$comments = [
  'Excellent work ❤️', 'Amazing shot 😍',
  'Very beautiful, love the contrast ⚪️⚫️', '👍👍👍',
  'Wow, just stunning!', 'Nice shot my friend! ✌️', 
  'So cool!! 💯', 'yaaaassssss 🔥🔥', 'Magnificent',
  'Do you always shoot with that camera?', 
  'Excellent light and hues! 🌈', '🙏🔟💟',
  'Beautiful work. Wonderful light, color and detail/clarity, best regards!',
  'Lovely series, keep it up!', 'Lovely🌹', 'Beautiful capture 👏📸',
  'This is beutiful!! 😍 good job!!', 'How amazing!', 
  'Unreal, great job my friend 👍', 'Love it 📝 taking notes',
  "I'm located nearby, can we meet up and shoot together?",
  "Let's collaborate! Big fan 🙏", 'Love your content 🔥', '🙏 AMAZING!!!',
  'Werk it! 💪', 'Second that ^', "Couldn't have shot it better myself",
  "Great editing 🫶", "Do you use Photoshop or Lightroom?", 'Great edit 10/10',
  'Shocking, thank you for this 👏', 'Sublime', 'Again!? 😇 wonderful.',
  "Can't wait to see what you 📸 next", "Great crop ✌️", 
  "No surprise, but wonderful job on the composition ✅", "Best photographer on here!", "Emotional and captures my attention 🥹", '10/10', "👏👏",
  "😱", "🤩🤯", "Nice one!", "👋 hey there! Big fan.", "love ❤️❤️❤️", "❤️❤️",
  "🤩👏", "Thank you for sharing this!! 💙", "Fantastic work as always 🤩", 
  "Wow...🤯 stunning!", "Perfectly executed 🙏", "🔥🔥", "✌️🙏", "Keep it up 👏"
]

$prev_comments = []

def get_comment
  if $comments.length > 1 
    comment = $comments.pop(rand(0...$comments.length))
    $prev_comments.push(comment)
    return comment
  else 
    comment = $comments.first
    $comments = $comments.concat($prev_comments)
    $prev_comments = []
    return comment
  end
end

################################################################################

## users

# hard-coded users
guest = User.create({
  username: 'Guest',
  email: 'guest@gmail.com',
  password: 'demo#User!806'
})

jacob = User.create({
  username: 'jacobbenowitz',
  email: 'jacob.benowitz@gmail.com',
  password: 'iZDhBJ6QrkvYKkXDn3Uz'
})

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

generated_user_3 = User.create({
  username: faker_user_3[:screen_name],
  email: faker_user_3[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_4 = User.create({
  username: faker_user_4[:screen_name],
  email: faker_user_4[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_5 = User.create({
  username: faker_user_5[:screen_name],
  email: faker_user_5[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_6 = User.create({
  username: faker_user_6[:screen_name],
  email: faker_user_6[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_7 = User.create({
  username: faker_user_7[:screen_name],
  email: faker_user_7[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_8 = User.create({
  username: faker_user_8[:screen_name],
  email: faker_user_8[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_9 = User.create({
  username: faker_user_9[:screen_name],
  email: faker_user_9[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_10 = User.create({
  username: faker_user_10[:screen_name],
  email: faker_user_10[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_11 = User.create({
  username: faker_user_11[:screen_name],
  email: faker_user_11[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_12 = User.create({
  username: faker_user_12[:screen_name],
  email: faker_user_12[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_13 = User.create({
  username: faker_user_13[:screen_name],
  email: faker_user_13[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_14 = User.create({
  username: faker_user_14[:screen_name],
  email: faker_user_14[:email],
  password: 'Lmd15cCX!aDk63b',
})
generated_user_15 = User.create({
  username: faker_user_15[:screen_name],
  email: faker_user_15[:email],
  password: 'Lmd15cCX!aDk63b',
})

guest.save!
jacob.save!
generated_user_3.save!
generated_user_4.save!
generated_user_5.save!
generated_user_6.save!
generated_user_7.save!
generated_user_8.save!
generated_user_9.save!
generated_user_10.save!
generated_user_11.save!
generated_user_12.save!
generated_user_13.save!
generated_user_14.save!
generated_user_15.save!

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
    "Canon EF 50mm f/1.8", "Canon EF-S 24mm f/2.8", "Canon RF 50mm f/1.8", "Canon EF-S 55-250mm f/4-5.6 IS", "Canon RF 16mm f/2.8", "Canon EF-S 10-18mm f/4.5-5.6", "Canon EF 24-70mm f/2.8L II", "Canon EF-S 18-55mm f/3.5-5.6 IS II", "Canon EF 50mm f/1.2L", "Canon RF 24-70mm f/2.8L IS", "Canon RF 70-200mm f/2.8L IS", "Canon RF 15-35mm f/2.8L IS", "Canon RF 28-70mm f/2L", "Canon RF 100-500mm f/4.5-7.1L IS", "Canon RF 50mm f/1.2L", "Canon EF 70-200mm f/2.8L IS II"
  ]

  lenses = ""
  num_options = options.length

  num.times do |i|
    lens = options[rand(0...num_options)]
    if i == num 
      lenses.concat(lens)
    else 
      lenses.concat(lens + ", ")
    end
  end

  return lenses
end

def select_nikon_lenses(num)
  options = [
    "Nikon AF-S DX Nikkor 35mm f/1.8G", "Nikon AF-S FX Nikkor 50mm f/1.8G", "Nikon AF-S FX Nikkor 85mm f/1.8G", "Nikon Nikkor Z 85mm f/1.8 S", "Nikon AF-S DX Nikkor 18-140mm f/3.5-5.6G ED", "Nikon Nikkor Z 24-200mm f/4-6.3", "Nikon AF FX Nikkor 50mm f/1.8D", "Nikon AF-S DX Nikkor 18-300mm f/3.5-6.3G ED", "Nikon Nikkor Z 14-24mm f/2.8 S", "Nikon Nikkor Z 50mm f/1.8 S", "Nikon AF-P DX Nikkor 70-300mm f/4.5-6.3G ED VR", "Nikon AF-S FX Nikkor 200-500mm f/5.6E ED", "Nikon Nikkor Z 24-70mm f/2.8 S", "Nikon Nikkor Z 70-200mm f/2.8 VR S", "Nikon AF-S DX Micro-Nikkor 40mm f/2.8G"
  ]

  lenses = ""
  num_options = options.length

  num.times do |i|
    lens = options[rand(0...num_options)]
    if i == num 
      lenses.concat(lens)
    else 
      lenses.concat(lens + ", ")
    end
  end

  return lenses
end

def select_sony_lenses(num)
  options = [
    "Sony FE 12-24mm f/2.8", "Sony E 55-210mm f/4.5-6.3", "Sony FE 85mm f/1.8", "Sony FE 50mm f/1.2", "Sony FE 35mm f/1.4", "Sony E 16-50mm f/3.5-5.6", "Sony FE 24mm f/1.4", "Sony E 70-350mm f/4.5-6.3 G", "Sony FE 70-200mm f/2.8 II", "Sony FE 20mm f/1.8 G", "Sony E 18-135mm f/3.5-5.6", "Sony FE 200-600mm f/5.6-6.3 G", "Sony FE 24-105mm f/4 G", "Sony FE 12-24mm f/2.8"
  ]

  lenses = ""
  num_options = options.length

  num.times do |i|
    lens = options[rand(0...num_options)]
    if i == num 
      lenses.concat(lens)
    else 
      lenses.concat(lens + ", ")
    end
  end

  return lenses
end

def select_other_lenses(num)
  options = [
    "Sigma 24-70mm f/2.8", "Tamron 28-75mm f/2.8", "Sigma 16mm f/1.4", "Sigma 150-600mm f/5-6.3", "Sigma 18-35mm f/1.8", "Sigma 18-50mm f/2.8", "Tamron 70-180mm f/2.8"
  ]

  lenses = ""
  num_options = options.length

  num.times do |i|
    lens = options[rand(0...num_options)]
    if i == num 
      lenses.concat(lens)
    else 
      lenses.concat(lens + ", ")
    end
  end

  return lenses
end


profile_jacob = Profile.create({
  first_name: 'Jacob',
  last_name: 'Benowitz',
  website_url: 'https://www.jacobbenowitz.com',
  instagram_url: 'instagram',
  lenses: '50mm f/1.8, Lumix G X Vario 35-100mm f/2.8',
  cameras: 'Panasonic GH5',
  birthday: '03/17/1998',
  city: 'Brooklyn',
  country: 'United States',
  about: 'Full-stack engineer & previously a technical marketer with a passion for photography and video.',
  gender: 'Male',
  user_id: jacob.id,
  featured: true
})

profile_guest = Profile.create({
  first_name: 'Jane',
  last_name: 'Smith',
  website_url: 'https://www.jacobbenowitz.com',
  instagram_url: 'instagram',
  lenses: 'EF 70-200mm f/4.0',
  cameras: 'Cannon EOS 5DS, Cannon 50mm 1.4f',
  birthday: '01/01/2000',
  city: 'Dobbs Ferry',
  country: 'United States',
  about: 'Minimalist. I live by the motto: less is more, and do my best to caputure that in my photography.',
  gender: 'Female',
  user_id: guest.id,
  featured: true,
  category: 'minimalism'
})

camera_3 = Faker::Camera.brand_with_model
lenses_3 = get_lenses(camera_3.split.first)
profile_abstract = Profile.create({
  first_name: faker_user_3[:name].split.first,
  last_name: faker_user_3[:name].split.last,
  website_url: faker_user_3[:url],
  instagram_url: 'instagram',
  cameras: camera_3,
  lenses: lenses_3,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: 'The unknown is known...to me. Abstract photographer.',
  gender: 'Male',
  user_id: generated_user_3.id,
  featured: true,
  category: 'abstract'
})

camera_4 = Faker::Camera.brand_with_model
lenses_4 = get_lenses(camera_4.split.first)
profile_animals = Profile.create({
  first_name: faker_user_4[:name].split.first,
  last_name: faker_user_4[:name].split.last,
  website_url: faker_user_4[:url],
  instagram_url: 'instagram',
  cameras: camera_4,
  lenses: lenses_4,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: 'Vegan, animal lover. Nature photography is my life!',
  gender: 'Male',
  user_id: generated_user_4.id,
  featured: true,
  category: 'animals'
})

camera_5 = Faker::Camera.brand_with_model
lenses_5 = get_lenses(camera_5.split.first)
profile_chocolate = Profile.create({
  first_name: faker_user_5[:name].split.first,
  last_name: faker_user_5[:name].split.last,
  website_url: faker_user_5[:url],
  instagram_url: 'instagram',
  cameras: camera_5,
  lenses: lenses_5,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Who doesn't like chocolate? ME... I LOVE CHOCOLATE",
  gender: 'Male',
  user_id: generated_user_5.id,
  featured: true,
  category: 'chocolate'
})

camera_8 = Faker::Camera.brand_with_model
lenses_8 = get_lenses(camera_8.split.first)
profile_music = Profile.create({
  first_name: faker_user_8[:name].split.first,
  last_name: faker_user_8[:name].split.last,
  website_url: faker_user_8[:url],
  instagram_url: 'instagram',
  cameras: camera_8,
  lenses: lenses_8,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Professional photographer for musicians around the world",
  gender: 'Male',
  user_id: generated_user_8.id,
  featured: true,
  category: 'music'
})

camera_9 = Faker::Camera.brand_with_model
lenses_9 = get_lenses(camera_9.split.first)
profile_sports = Profile.create({
  first_name: faker_user_9[:name].split.first,
  last_name: faker_user_9[:name].split.last,
  website_url: faker_user_9[:url],
  instagram_url: 'instagram',
  cameras: camera_9,
  lenses: lenses_9,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: "Sports is life.",
  gender: 'Male',
  user_id: generated_user_9.id,
  featured: true,
  category: 'sports'
})

camera_6 = Faker::Camera.brand_with_model
lenses_6 = get_lenses(camera_6.split.first)
profile_8 = Profile.create({
  first_name: faker_user_6[:name].split.first,
  last_name: faker_user_6[:name].split.last,
  website_url: faker_user_6[:url],
  instagram_url: 'instagram',
  cameras: camera_6,
  lenses: lenses_6,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_6.id,
  featured: false
})

camera_10 = Faker::Camera.brand_with_model
lenses_10 = get_lenses(camera_10.split.first)
profile_9 = Profile.create({
  first_name: faker_user_10[:name].split.first,
  last_name: faker_user_10[:name].split.last,
  website_url: faker_user_10[:url],
  instagram_url: 'instagram',
  cameras: camera_10,
  lenses: lenses_10,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_10.id,
  featured: false
})

camera_11 = Faker::Camera.brand_with_model
lenses_11 = get_lenses(camera_11.split.first)
profile_10 = Profile.create({
  first_name: faker_user_11[:name].split.first,
  last_name: faker_user_11[:name].split.last,
  website_url: faker_user_11[:url],
  instagram_url: 'instagram',
  cameras: camera_11,
  lenses: lenses_11,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_11.id,
  featured: false
})

camera_12 = Faker::Camera.brand_with_model
lenses_12 = get_lenses(camera_12.split.first)
profile_11 = Profile.create({
  first_name: faker_user_12[:name].split.first,
  last_name: faker_user_12[:name].split.last,
  website_url: faker_user_12[:url],
  instagram_url: 'instagram',
  cameras: camera_12,
  lenses: lenses_12,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_12.id,
  featured: false
})

camera_13 = Faker::Camera.brand_with_model
lenses_13 = get_lenses(camera_13.split.first)
profile_12 = Profile.create({
  first_name: faker_user_13[:name].split.first,
  last_name: faker_user_13[:name].split.last,
  website_url: faker_user_13[:url],
  instagram_url: 'instagram',
  cameras: camera_13,
  lenses: lenses_13,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_13.id,
  featured: false
})

camera_14 = Faker::Camera.brand_with_model
lenses_14 = get_lenses(camera_14.split.first)
profile_13 = Profile.create({
  first_name: faker_user_14[:name].split.first,
  last_name: faker_user_14[:name].split.last,
  website_url: faker_user_14[:url],
  instagram_url: 'instagram',
  cameras: camera_14,
  lenses: lenses_14,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_14.id,
  featured: false
})

camera_15 = Faker::Camera.brand_with_model
lenses_15 = get_lenses(camera_15.split.first)
profile_14 = Profile.create({
  first_name: faker_user_15[:name].split.first,
  last_name: faker_user_15[:name].split.last,
  website_url: faker_user_15[:url],
  instagram_url: 'instagram',
  cameras: camera_15,
  lenses: lenses_15,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_15.id,
  featured: false
})

camera_16 = Faker::Camera.brand_with_model
lenses_16 = get_lenses(camera_16.split.first)
profile_15 = Profile.create({
  first_name: faker_user_7[:name].split.first,
  last_name: faker_user_7[:name].split.last,
  website_url: faker_user_7[:url],
  instagram_url: 'instagram',
  cameras: camera_16,
  lenses: lenses_16,
  birthday: Faker::Date.between(from: '1980-01-01', to: '2005-12-25'),
  city: Faker::Address.city ,
  country: 'United States',
  about: Faker::TvShows::BigBangTheory.quote,
  gender: 'Male',
  user_id: generated_user_7.id,
  featured: false
})

################################################################################

## avatars

# file = open('https://my5000px-seeds.s3.amazonaws.com/<folder_name>/<some_file>.<extension>')

avatar_1 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/guest_avatar.png')
profile_guest.avatar.attach(io: avatar_1, filename: 'guest_avatar.png')

avatar_2 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/jacob_avatar.jpg')
profile_jacob.avatar.attach(io: avatar_2, filename: 'jacob_avatar.jpg')

avatar_3 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_1.png')
profile_abstract.avatar.attach(io: avatar_3, filename: 'abstract_avatar.png')

avatar_4 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_2.png')
profile_animals.avatar.attach(io: avatar_4, filename: 'animal_avatar.png')

avatar_5 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_3.png')
profile_chocolate.avatar.attach(io: avatar_5, filename: 'chocolate_avatar.png')

avatar_6 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_4.png')
profile_music.avatar.attach(io: avatar_6, filename: 'music_avatar.png')

avatar_7 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_5.png')
profile_sports.avatar.attach(io: avatar_7, filename: 'sport_avatar.png')

avatar_8 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_6.png')
profile_8.avatar.attach(io: avatar_8, filename: 'avatar_8.png')

avatar_9 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_7.png')
profile_9.avatar.attach(io: avatar_9, filename: 'avatar_9.png')

avatar_10 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_8.png')
profile_10.avatar.attach(io: avatar_10, filename: 'avatar_10.png')

avatar_11 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_9.png')
profile_11.avatar.attach(io: avatar_11, filename: 'avatar_11.png')

avatar_12 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_10.png')
profile_12.avatar.attach(io: avatar_12, filename: 'avatar_12.png')

avatar_13 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_11.png')
profile_13.avatar.attach(io: avatar_13, filename: 'avatar_13.png')

avatar_14 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_12.png')
profile_14.avatar.attach(io: avatar_14, filename: 'avatar_14.png')

avatar_15 = open('https://my5000px-seeds.s3.amazonaws.com/avatars/avatar_13.png')
profile_15.avatar.attach(io: avatar_15, filename: 'avatar_15.png')



################################################################################

## cover photos

minimalist_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/minimalist_cover.jpg')
profile_guest.cover.attach(io: minimalist_cover, filename: 'guest_cover.jpg')

jacob_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/jacob_cover.jpg')
profile_jacob.cover.attach(io: jacob_cover, filename: 'malibu.jpg')

abstract_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/abstract_cover.jpg')
profile_abstract.cover.attach(io: abstract_cover, filename: 'abstract_cover')

animals_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/animals_cover.jpg')
profile_animals.cover.attach(io: animals_cover, filename: 'animals_cover.jpg')

chocolate_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/chocolate_cover.jpg')
profile_chocolate.cover.attach(io: chocolate_cover, filename: 'chocolate_cover.jpg')

music_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/music_cover.jpg')
profile_music.cover.attach(io: music_cover, filename: 'music_cover.jpg')

sports_cover = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/sports_cover.jpg')
profile_sports.cover.attach(io: sports_cover, filename: 'sports_cover.jpg')

cover_8 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/8_cover.jpg')
profile_8.cover.attach(io: cover_8, filename: 'cover_8.jpg')

cover_9 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/9_cover.jpg')
profile_9.cover.attach(io: cover_9, filename: 'cover_9.jpg')

cover_10 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/10_cover.jpg')
profile_10.cover.attach(io: cover_10, filename: 'cover_10.jpg')

cover_11 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/11_cover.jpg')
profile_11.cover.attach(io: cover_11, filename: 'cover_11.jpg')

cover_12 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/12_cover.jpg')
profile_12.cover.attach(io: cover_12, filename: 'cover_12.jpg')

cover_13 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/13_cover.jpg')
profile_13.cover.attach(io: cover_13, filename: 'cover_13.jpg')

cover_14 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/14_cover.jpg')
profile_14.cover.attach(io: cover_14, filename: 'cover_14.jpg')

cover_15 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/covers/15_cover.jpg')
profile_15.cover.attach(io: cover_15, filename: 'cover_15.jpg')


# save profiles after attaching avatar and cover photos

profile_guest.save!
profile_jacob.save!
profile_abstract.save!
profile_animals.save!
profile_chocolate.save!
profile_music.save!
profile_sports.save!
profile_8.save!
profile_9.save!
profile_10.save!
profile_11.save!
profile_12.save!
profile_13.save!
profile_14.save!
profile_15.save!



################################################################################

## photos

def assignFeaturedPage
  pages = ['editors', 'fresh', 'popular', 'upcoming']
  return pages[rand(0..3)]
end

# guest user | minimalism
photo_1 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_1_saved = Photo.create(photo_1)
photo_file_1 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/architecture-building-black-and-white-staircase-staircase-steps-spiral-london-spiral-staircase_t20_Amw31y.jpg')
photo_1_saved.photo.attach(io: photo_file_1, filename: 'minimal_1.jpg')
photo_1_saved.save!

photo_2 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_2_saved = Photo.create(photo_2)
photo_file_2 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/big-surf-off-the-coast-of-southern-africa_t20_K6EEyE.jpg')
photo_2_saved.photo.attach(io: photo_file_2, filename: 'minimal_2.jpg')
photo_2_saved.save!

photo_3 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_3_saved = Photo.create(photo_3)
photo_file_3 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/cabalgata-en-el-mar_t20_gLlABx.jpg')
photo_3_saved.photo.attach(io: photo_file_3, filename: 'minimal_3.jpg')
photo_3_saved.save!

photo_4 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_4_saved = Photo.create(photo_4)
photo_file_4 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/capture-light_t20_ZnBxYY.jpg')
photo_4_saved.photo.attach(io: photo_file_4, filename: 'minimal_4.jpg')
photo_4_saved.save!

photo_5 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(',').last,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_5_saved = Photo.create(photo_5)
photo_file_5 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/cat-cat-s-eye-minimal-minimalist-minimalistic-minimalism_t20_7yN4Kk.jpg')
photo_5_saved.photo.attach(io: photo_file_5, filename: 'minimal_5.jpg')
photo_5_saved.save!

photo_6 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_6_saved = Photo.create(photo_6)
photo_file_6 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/city-architecture-bridge-uk-landmark-london-fog-monochrome-mist-millennium-bridge_t20_A321Py.jpg')
photo_6_saved.photo.attach(io: photo_file_6, filename: 'minimal_6.jpg')
photo_6_saved.save!

photo_7 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_7_saved = Photo.create(photo_7)
photo_file_7 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/city-architecture-people-business-adult-sign-hand-iron-minimal-desktop_t20_kRRmzE.jpg')
photo_7_saved.photo.attach(io: photo_file_7, filename: 'minimal_7.jpg')
photo_7_saved.save!

photo_8 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_8_saved = Photo.create(photo_8)
photo_file_8 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/door-outside-that-leads-to-the-ocean_t20_ZJJRn0.jpg')
photo_8_saved.photo.attach(io: photo_file_8, filename: 'minimal_8.jpg')
photo_8_saved.save!

photo_9 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_9_saved = Photo.create(photo_9)
photo_file_9 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/frame-mock-up-canvas-white-poster-blank-template-background-wall-design-mock-up-mockup-empty-copy_t20_nLZw6P.jpg')
photo_9_saved.photo.attach(io: photo_file_9, filename: 'minimal_9.jpg')
photo_9_saved.save!

photo_10 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_10_saved = Photo.create(photo_10)
photo_file_10 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/green-spiral-vine-macro-curly-spirals-minimal-green-plants-natural-spirals-plant-spirals_t20_kz3kkX.jpg')
photo_10_saved.photo.attach(io: photo_file_10, filename: 'minimal_10.jpg')
photo_10_saved.save!

photo_11 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_11_saved = Photo.create(photo_11)
photo_file_11 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/minimal_t20_PJjN97.jpg')
photo_11_saved.photo.attach(io: photo_file_11, filename: 'minimal_11.jpg')
photo_11_saved.save!

photo_12 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_12_saved = Photo.create(photo_12)
photo_file_12 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/minimalistic-orange-corridor-with-arched-ceiling-in-egyptian-architecture_t20_4230d2.jpg')
photo_12_saved.photo.attach(io: photo_file_12, filename: 'minimal_12.jpg')
photo_12_saved.save!

photo_13 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_13_saved = Photo.create(photo_13)
photo_file_13 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/minimalistic-vibe_t20_VW10N1.jpg')
photo_13_saved.photo.attach(io: photo_file_13, filename: 'minimal_13.jpg')
photo_13_saved.save!

photo_14 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_14_saved = Photo.create(photo_14)
photo_file_14 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/nature-fog-bench-dock-minimalism-neutrals_t20_onn1E8.jpg')
photo_14_saved.photo.attach(io: photo_file_14, filename: 'minimal_14.jpg')
photo_14_saved.save!

photo_15 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
photo_15_saved = Photo.create(photo_15)
photo_file_15 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/nature-outdoors-sky-night-adventure-male-landscape-star-impact-earth-milky-way-minimalism-epic_t20_nR7L9A.jpg')
photo_15_saved.photo.attach(io: photo_file_15, filename: 'minimal_15.jpg')
photo_15_saved.save!

guest_photo_16 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_16_saved = Photo.create(guest_photo_16)
photo_file_16 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/nature-sky-sunset-mountain-mountain-landscape-extreme-sports-mountains-paragliding-neutral-airy_t20_nRk8Kn.jpg')
guest_photo_16_saved.photo.attach(io: photo_file_16, filename: 'minimal_16.jpg')
guest_photo_16_saved.save!

guest_photo_17 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_17_saved = Photo.create(guest_photo_17)
photo_file_17 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/scandinavian-modern-white-cozy-eco-interior-white-table-and-mirror-in-bed-room-minimalism-cactus_t20_Jzvvp4.jpg')
guest_photo_17_saved.photo.attach(io: photo_file_17, filename: 'minimal_17.jpg')
guest_photo_17_saved.save!

guest_photo_18 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_18_saved = Photo.create(guest_photo_18)
photo_file_18 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/silhouettes-of-mountains-in-the-mist-and-bird-flying-light-blue-color-minimal-landscape-adventure_t20_lLlXvQ.jpg')
guest_photo_18_saved.photo.attach(io: photo_file_18, filename: 'minimal_18.jpg')
guest_photo_18_saved.save!

guest_photo_19 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_19_saved = Photo.create(guest_photo_19)
photo_file_19 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/sky-architecture-sunset-yellow-window-love-edifice-apartment_t20_8gZPwj.jpg')
guest_photo_19_saved.photo.attach(io: photo_file_19, filename: 'minimal_19.jpg')
guest_photo_19_saved.save!

guest_photo_20 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_20_saved = Photo.create(guest_photo_20)
photo_file_20 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/summer-purple-lavender-running-freedom-girl-flowers-lavender-farm_t20_jjlOVd.jpg')
guest_photo_20_saved.photo.attach(io: photo_file_20, filename: 'minimal_20.jpg')
guest_photo_20_saved.save!

guest_photo_21 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_21_saved = Photo.create(guest_photo_21)
photo_file_21 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/travel-landscape-desert-dunes-orange-color-sand-dunes-minimalism-neutral-colors-tiny-human_t20_E0GePJ.jpg')
guest_photo_21_saved.photo.attach(io: photo_file_21, filename: 'minimal_21.jpg')
guest_photo_21_saved.save!

guest_photo_22 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_guest.lenses,
  camera: profile_guest.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_guest.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
guest_photo_22_saved = Photo.create(guest_photo_22)
photo_file_22 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/minimalism/windows-on-windows_t20_knrmR4.jpg')
guest_photo_22_saved.photo.attach(io: photo_file_22, filename: 'minimal_22.jpg')
guest_photo_22_saved.save!


comment_1 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_1_saved.id,
  body: get_comment
})
comment_2 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_1_saved.id,
  body: get_comment
})
comment_3 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_2_saved.id,
  body: get_comment
})
comment_4 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_3_saved.id,
  body: get_comment
})
comment_5 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_4_saved.id,
  body: get_comment
})
comment_6 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_4_saved.id,
  body: get_comment
})
comment_7 = Comment.new({
  profile_id: profile_9.id,
  photo_id: photo_5_saved.id,
  body: get_comment
})
comment_8 = Comment.new({
  profile_id: profile_8.id,
  photo_id: photo_5_saved.id,
  body: get_comment
})
comment_9 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: photo_6_saved.id,
  body: get_comment
})
comment_10 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_6_saved.id,
  body: get_comment
})
comment_11 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_7_saved.id,
  body: get_comment
})
comment_12 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: photo_7_saved.id,
  body: get_comment
})
comment_13 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_7_saved.id,
  body: get_comment
})
comment_14 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_8_saved.id,
  body: get_comment
})
comment_15 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_8_saved.id,
  body: get_comment
})
comment_16 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_9_saved.id,
  body: get_comment
})
comment_17 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_10_saved.id,
  body: get_comment
})
comment_18 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_11_saved.id,
  body: get_comment
})
comment_19 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_12_saved.id,
  body: get_comment
})
comment_20 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: photo_13_saved.id,
  body: get_comment
})
comment_21 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: photo_14_saved.id,
  body: get_comment
})
comment_22 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: photo_15_saved.id,
  body: get_comment
})
comment_23 = Comment.new({
  profile_id: profile_11.id,
  photo_id: guest_photo_16_saved.id,
  body: get_comment
})
comment_24 = Comment.new({
  profile_id: profile_8.id,
  photo_id: guest_photo_17_saved.id,
  body: get_comment
})
comment_25 = Comment.new({
  profile_id: profile_9.id,
  photo_id: guest_photo_18_saved.id,
  body: get_comment
})
comment_26 = Comment.new({
  profile_id: profile_15.id,
  photo_id: guest_photo_19_saved.id,
  body: get_comment
})
comment_27 = Comment.new({
  profile_id: profile_14.id,
  photo_id: guest_photo_19_saved.id,
  body: get_comment
})
comment_28 = Comment.new({
  profile_id: profile_13.id,
  photo_id: guest_photo_20_saved.id,
  body: get_comment
})
comment_29 = Comment.new({
  profile_id: profile_12.id,
  photo_id: guest_photo_20_saved.id,
  body: get_comment
})
comment_30 = Comment.new({
  profile_id: profile_11.id,
  photo_id: guest_photo_21_saved.id,
  body: get_comment
})
comment_31 = Comment.new({
  profile_id: profile_10.id,
  photo_id: guest_photo_22_saved.id,
  body: get_comment
})


## jacob

photo_16 = {
  title: 'Eyes',
  description: 'Eyes are the window to the soul.',
  location: 'South Pasadena',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'people',
  featured: assignFeaturedPage()
}
photo_16_saved = Photo.create(photo_16)
jacob_photo_file_16 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/Benowitz+Jacob+-+Eyes.jpg')
photo_16_saved.photo.attach(io: jacob_photo_file_16, filename: 'jacob_16.jpg')
photo_16_saved.save!

comment_32 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_16_saved.id,
  body: get_comment
})
comment_33 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_16_saved.id,
  body: get_comment
})

photo_17 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Pasadena',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'city',
  featured: assignFeaturedPage()
}
photo_17_saved = Photo.create(photo_17)
jacob_photo_file_17 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/Benowitz+Jacob+-+LampSkyColor.jpg')
photo_17_saved.photo.attach(io: jacob_photo_file_17, filename: 'jacob_17.jpg')
photo_17_saved.save!

comment_34 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_17_saved.id,
  body: get_comment
})
comment_35 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_17_saved.id,
  body: get_comment
})

photo_18 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Grape Valley',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'nature',
  featured: assignFeaturedPage()
}
photo_18_saved = Photo.create(photo_18)
jacob_photo_file_18 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/DSC_Creative_0214.jpg')
photo_18_saved.photo.attach(io: jacob_photo_file_18, filename: 'jacob_18.jpg')
photo_18_saved.save!

comment_36 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: photo_18_saved.id,
  body: get_comment
})
comment_37 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: photo_18_saved.id,
  body: get_comment
})

photo_18_1 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Pasadena',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'creative',
  featured: assignFeaturedPage()
}
photo_18_1_saved = Photo.create(photo_18_1)
jacob_photo_file_18_1 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/DSC_Creative_0232.jpg')
photo_18_1_saved.photo.attach(io: jacob_photo_file_18_1, filename: 'jacob_18_1.jpg')
photo_18_1_saved.save!

comment_38 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_18_1_saved.id,
  body: get_comment
})
comment_39 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_18_1_saved.id,
  body: get_comment
})

photo_19 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Ashville',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'nature',
  featured: assignFeaturedPage()
}
photo_19_saved = Photo.create(photo_19)
jacob_photo_file_19 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_1453.jpg')
photo_19_saved.photo.attach(io: jacob_photo_file_19, filename: 'jacob_19.jpg')
photo_19_saved.save!

comment_40 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_19_saved.id,
  body: get_comment
})
comment_41 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_19_saved.id,
  body: get_comment
})


photo_20 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'San Luis Obispo',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'nature',
  featured: assignFeaturedPage()
}
photo_20_saved = Photo.create(photo_20)
jacob_photo_file_20 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_9052.jpg')
photo_20_saved.photo.attach(io: jacob_photo_file_20, filename: 'jacob_20.jpg')
photo_20_saved.save!

photo_21 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'South Pasadena',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'city',
  featured: assignFeaturedPage()
}
photo_21_saved = Photo.create(photo_21)
jacob_photo_file_21 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_0443.jpg')
photo_21_saved.photo.attach(io: jacob_photo_file_21, filename: 'jacob_21.jpg')
photo_21_saved.save!

comment_42 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_20_saved.id,
  body: get_comment
})
comment_43 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_21_saved.id,
  body: get_comment
})

photo_22 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Malibu',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'city',
  featured: assignFeaturedPage()
}
photo_22_saved = Photo.create(photo_22)
jacob_photo_file_22 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_0794.jpg')
photo_22_saved.photo.attach(io: jacob_photo_file_22, filename: 'jacob_22.jpg')
photo_22_saved.save!

photo_23 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Malibu',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'beach',
  featured: assignFeaturedPage()
}
photo_23_saved = Photo.create(photo_23)
jacob_photo_file_23 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_0885.jpg')
photo_23_saved.photo.attach(io: jacob_photo_file_23, filename: 'jacob_23.jpg')
photo_23_saved.save!

comment_44 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_22_saved.id,
  body: get_comment
})
comment_45 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_22_saved.id,
  body: get_comment
})
comment_46 = Comment.new({
  profile_id: profile_9.id,
  photo_id: photo_22_saved.id,
  body: get_comment
})
comment_47 = Comment.new({
  profile_id: profile_8.id,
  photo_id: photo_23_saved.id,
  body: get_comment
})

photo_24 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Old Town Pasadena',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'beach',
  featured: assignFeaturedPage()
}
photo_24_saved = Photo.create(photo_24)
jacob_photo_file_24 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_2774.jpg')
photo_24_saved.photo.attach(io: jacob_photo_file_24, filename: 'jacob_24.jpg')
photo_24_saved.save!

photo_25 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Pismo Beach',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'beach',
  featured: assignFeaturedPage()
}
photo_25_saved = Photo.create(photo_25)
jacob_photo_file_25 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/Sunset.jpg')
photo_25_saved.photo.attach(io: jacob_photo_file_25, filename: 'jacob_25.jpg')
photo_25_saved.save!

photo_26 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Old Town Pasadena',
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'creative',
  featured: assignFeaturedPage()
}
photo_26_saved = Photo.create(photo_26)
jacob_photo_file_26 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/Upside.jpg')
photo_26_saved.photo.attach(io: jacob_photo_file_26, filename: 'jacob_26.jpg')
photo_26_saved.save!

comment_48 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_26_saved.id,
  body: get_comment
})
comment_49 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_26_saved.id,
  body: get_comment
})


jacob_photo_27 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
jacob_photo_27_saved = Photo.create(jacob_photo_27)
jacob_photo_file_27 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_2789.jpg')
jacob_photo_27_saved.photo.attach(io: jacob_photo_file_27, filename: 'jacob_27.jpg')
jacob_photo_27_saved.save!

jacob_photo_28 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
jacob_photo_28_saved = Photo.create(jacob_photo_28)
jacob_photo_file_28 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_6565.jpg')
jacob_photo_28_saved.photo.attach(io: jacob_photo_file_28, filename: 'jacob_28.jpg')
jacob_photo_28_saved.save!

comment_50 = Comment.new({
  profile_id: profile_9.id,
  photo_id: jacob_photo_27_saved.id,
  body: get_comment
})
comment_51 = Comment.new({
  profile_id: profile_8.id,
  photo_id: jacob_photo_28_saved.id,
  body: get_comment
})

jacob_photo_29 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
jacob_photo_29_saved = Photo.create(jacob_photo_29)
jacob_photo_file_29 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/IMG_Creative_6576.jpg')
jacob_photo_29_saved.photo.attach(io: jacob_photo_file_29, filename: 'jacob_29.jpg')
jacob_photo_29_saved.save!

jacob_photo_30 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
jacob_photo_30_saved = Photo.create(jacob_photo_30)
jacob_photo_file_30 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/JacobBenowitz_Contact_Fallback.jpg')
jacob_photo_30_saved.photo.attach(io: jacob_photo_file_30, filename: 'jacob_30.jpg')
jacob_photo_30_saved.save!

jacob_photo_31 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
jacob_photo_31_saved = Photo.create(jacob_photo_31)
jacob_photo_file_31 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/JacobBenowitz_Cove_Fallback.jpg')
jacob_photo_31_saved.photo.attach(io: jacob_photo_file_31, filename: 'jacob_31.jpg')
jacob_photo_31_saved.save!

jacob_photo_32 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_jacob.lenses.split(',').last,
  camera: profile_jacob.cameras,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_jacob.id,
  category: 'minimalism',
  featured: assignFeaturedPage()
}
jacob_photo_32_saved = Photo.create(jacob_photo_32)
jacob_photo_file_32 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/jacob/JacobBenowitz_Home_Fallback.jpg')
jacob_photo_32_saved.photo.attach(io: jacob_photo_file_32, filename: 'jacob_32.jpg')
jacob_photo_32_saved.save!


## abstract

photo_27 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
photo_27_saved = Photo.create(photo_27)
abstract_photo_file_27 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/abstract-background_t20_E4387Z.jpg')
photo_27_saved.photo.attach(io: abstract_photo_file_27, filename: 'abstract_27.jpg')
photo_27_saved.save!

comment_52 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_27_saved.id,
  body: get_comment
})
comment_53 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_27_saved.id,
  body: get_comment
})

photo_28 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
photo_28_saved = Photo.create(photo_28)
abstract_photo_file_28 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/abstract-net-museum-lines-threads-polygon-cobweb-contemporary-art-pentagon-geometries_t20_JJVOvl.jpg')
photo_28_saved.photo.attach(io: abstract_photo_file_28, filename: 'abstract_28.jpg')
photo_28_saved.save!

comment_54 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_28_saved.id,
  body: get_comment
})
comment_55 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_28_saved.id,
  body: get_comment
})
comment_56 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_28_saved.id,
  body: get_comment
})

photo_28_1 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
photo_28_1_saved = Photo.create(photo_28_1)
abstract_photo_file_28_1 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/acrylic-abstract-art_t20_RJokzv.jpg')
photo_28_1_saved.photo.attach(io: abstract_photo_file_28_1, filename: 'abstract_28_1.jpg')
photo_28_1_saved.save!

comment_57 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_28_1_saved.id,
  body: get_comment
})
comment_58 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_28_1_saved.id,
  body: get_comment
})

photo_29 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
photo_29_saved = Photo.create(photo_29)
abstract_photo_file_29 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/ferris-wheel-upside-down-evening-neon-colors-attraction-carousel-crystal-ball_t20_rB8vBo.jpg')
photo_29_saved.photo.attach(io: abstract_photo_file_29, filename: 'abstract_29.jpg')
photo_29_saved.save!

photo_30 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
photo_30_saved = Photo.create(photo_30)
abstract_photo_file_30 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/motions-3-3_t20_BAP4Nv.jpg')
photo_30_saved.photo.attach(io: abstract_photo_file_30, filename: 'abstract_30.jpg')
photo_30_saved.save!

comment_59 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_30_saved.id,
  body: get_comment
})
comment_60 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_30_saved.id,
  body: get_comment
})

photo_31 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
photo_31_saved = Photo.create(photo_31)
abstract_photo_file_31 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/nominated-digital-experiment_t20_XQNjXR.jpg')
photo_31_saved.photo.attach(io: abstract_photo_file_31, filename: 'abstract_31.jpg')
photo_31_saved.save!


abs_photo_32 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
abs_photo_32_saved = Photo.create(abs_photo_32)
abstract_photo_file_32 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/people-come-and-go-that-s-life_t20_dzRGY9.jpg')
abs_photo_32_saved.photo.attach(io: abstract_photo_file_32, filename: 'abstract_32.jpg')
abs_photo_32_saved.save!

comment_61 = Comment.new({
  profile_id: profile_9.id,
  photo_id: abs_photo_32_saved.id,
  body: get_comment
})
comment_62 = Comment.new({
  profile_id: profile_10.id,
  photo_id: abs_photo_32_saved.id,
  body: get_comment
})

abs_photo_33 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
abs_photo_33_saved = Photo.create(abs_photo_33)
abstract_photo_file_33 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/reflection-pattern-sphere-abstract-bubble-texture-macro-creative-closeup-soap-bubble_t20_OJevlE.jpg')
abs_photo_33_saved.photo.attach(io: abstract_photo_file_33, filename: 'abstract_33.jpg')
abs_photo_33_saved.save!

comment_63 = Comment.new({
  profile_id: profile_12.id,
  photo_id: abs_photo_33_saved.id,
  body: get_comment
})

abs_photo_34 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
abs_photo_34_saved = Photo.create(abs_photo_34)
abstract_photo_file_34 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/the-roof-of-the-building-esplanade-theatres-on-the-bay_t20_kzAoRp.jpg')
abs_photo_34_saved.photo.attach(io: abstract_photo_file_34, filename: 'abstract_34.jpg')
abs_photo_34_saved.save!

comment_64 = Comment.new({
  profile_id: profile_13.id,
  photo_id: abs_photo_34_saved.id,
  body: get_comment
})

abs_photo_35 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
abs_photo_35_saved = Photo.create(abs_photo_35)
abstract_photo_file_35 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/through-tiny-lens_t20_loK6db.jpg')
abs_photo_35_saved.photo.attach(io: abstract_photo_file_35, filename: 'abstract_35.jpg')
abs_photo_35_saved.save!

comment_65 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: abs_photo_35_saved.id,
  body: get_comment
})
comment_65 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: abs_photo_35_saved.id,
  body: get_comment
})

abs_photo_36 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
abs_photo_36_saved = Photo.create(abs_photo_36)
abstract_photo_file_36 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/urban-scene-silhouette-jumping-street-abstract-jump-darkness-street-photography-lights-and-shadows_t20_wgmr2m.jpg')
abs_photo_36_saved.photo.attach(io: abstract_photo_file_36, filename: 'abstract_36.jpg')
abs_photo_36_saved.save!

comment_66 = Comment.new({
  profile_id: profile_13.id,
  photo_id: abs_photo_36_saved.id,
  body: get_comment
})
comment_67 = Comment.new({
  profile_id: profile_14.id,
  photo_id: abs_photo_36_saved.id,
  body: get_comment
})

abs_photo_37 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_abstract.lenses.split(',').first,
  camera: profile_abstract.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_abstract.id,
  category: 'abstract',
  featured: assignFeaturedPage()
}
abs_photo_37_saved = Photo.create(abs_photo_37)
abstract_photo_file_37 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/abstract/warm-city-1-3_t20_aO1a6Q.jpg')
abs_photo_37_saved.photo.attach(io: abstract_photo_file_37, filename: 'abstract_37.jpg')
abs_photo_37_saved.save!


## animals

photo_32 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_32_saved = Photo.create(photo_32)
animals_photo_file_32 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/_t20_kLZ3zr.jpg')
photo_32_saved.photo.attach(io: animals_photo_file_32, filename: 'animals_32.jpg')
photo_32_saved.save!

comment_68 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_32_saved.id,
  body: get_comment
})
comment_69 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_32_saved.id,
  body: get_comment
})
comment_69 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_32_saved.id,
  body: get_comment
})
comment_70 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: photo_32_saved.id,
  body: get_comment
})

photo_33 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_33_saved = Photo.create(photo_33)
animals_photo_file_33 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/_t20_YamEaR.jpg')
photo_33_saved.photo.attach(io: animals_photo_file_33, filename: 'animals_33.jpg')
photo_33_saved.save!

comment_71 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_33_saved.id,
  body: get_comment
})
comment_72 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_33_saved.id,
  body: get_comment
})

photo_34 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_34_saved = Photo.create(photo_34)
animals_photo_file_34 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/a-monkey-sat-in-a-human-pose-in-loro-park-tenerife_t20_98LvYA.jpg')
photo_34_saved.photo.attach(io: Fanimals_photo_file_34, filename: 'animals_34.jpg')
photo_34_saved.save!

comment_73 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: photo_34_saved.id,
  body: get_comment
})
comment_74 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_34_saved.id,
  body: get_comment
})
comment_75 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_34_saved.id,
  body: get_comment
})

photo_36 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_36_saved = Photo.create(photo_36)
animals_photo_file_36 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/animal-animal-nature-animals-green-wild-exotic-fox-wild-nature-foxy_t20_rL13QJ.jpg')
photo_36_saved.photo.attach(io: animals_photo_file_36, filename: 'animals_36.jpg')
photo_36_saved.save!

comment_76 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_36_saved.id,
  body: get_comment
})

photo_37 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_37_saved = Photo.create(photo_37)
animals_photo_file_37 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/animal-nature-nature-animals-animals-wild-exotic-owls_t20_XNVzor.jpg')
photo_37_saved.photo.attach(io: animals_photo_file_37, filename: 'animals_37.jpg')
photo_37_saved.save!

comment_77 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: photo_37_saved.id,
  body: get_comment
})
comment_78 = Comment.new({
  profile_id: profile_8.id,
  photo_id: photo_37_saved.id,
  body: get_comment
})

photo_38 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_38_saved = Photo.create(photo_38)
animals_photo_file_38 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/happy-elephant_t20_kLWQ24.jpg')
photo_38_saved.photo.attach(io: animals_photo_file_38, filename: 'animals_38.jpg')
photo_38_saved.save!

comment_79 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_38_saved.id,
  body: get_comment
})

photo_39 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_39_saved = Photo.create(photo_39)
animals_photo_file_39 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/humans-in-monkeys-body-everyone-is-a-human-kind-just-living-in-different-dimension-and-different-life_t20_yne8zp.jpg')
photo_39_saved.photo.attach(io: animals_photo_file_39, filename: 'animals_39.jpg')
photo_39_saved.save!

comment_80 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_39_saved.id,
  body: get_comment
})
comment_81 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_39_saved.id,
  body: get_comment
})

photo_40 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
photo_40_saved = Photo.create(photo_40)
animals_photo_file_40 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/red-fox-having-a-good-stretch-in-the-dunes-around-kijkduin-in-the-hague-netherlands-details-of-fur_t20_mLZJx3.jpg')
photo_40_saved.photo.attach(io: animals_photo_file_40, filename: 'animals_40.jpg')
photo_40_saved.save!

animal_photo_41 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
animal_photo_41_saved = Photo.create(animal_photo_41)
animals_photo_file_41 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/reindeers-in-a-winter-landscape-with-a-glow-on-snowy-mountains-the-reindeer-looks-directly-into-the_t20_3d2j4o.jpg')
animal_photo_41_saved.photo.attach(io: animals_photo_file_41, filename: 'animals_41.jpg')
animal_photo_41_saved.save!

animal_photo_42 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
animal_photo_42_saved = Photo.create(animal_photo_42)
animals_photo_file_42 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/the-baby-monkey-sits-on-a-stone-and-eats-tropical-animals-in-their-natural-habitat_t20_0X38rw.jpg')
animal_photo_42_saved.photo.attach(io: animals_photo_file_42, filename: 'animals_42.jpg')
animal_photo_42_saved.save!

comment_82 = Comment.new({
  profile_id: profile_11.id,
  photo_id: animal_photo_42_saved.id,
  body: get_comment
})
comment_83 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: animal_photo_42_saved.id,
  body: get_comment
})

animal_photo_43 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
animal_photo_43_saved = Photo.create(animal_photo_43)
animals_photo_file_43 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/together-forever_t20_1J8k41.jpg')
animal_photo_43_saved.photo.attach(io: animals_photo_file_43, filename: 'animals_43.jpg')
animal_photo_43_saved.save!

animal_photo_44 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
animal_photo_44_saved = Photo.create(animal_photo_44)
animals_photo_file_44 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/twenty20_600e29d6-776e-479a-b0e6-7dce00962a7c.jpg')
animal_photo_44_saved.photo.attach(io: animals_photo_file_44, filename: 'animals_44.jpg')

animal_photo_44_saved.save!

animal_photo_45 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_animals.lenses.split(',').first,
  camera: profile_animals.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_animals.id,
  category: 'animals',
  featured: assignFeaturedPage()
}
animal_photo_45_saved = Photo.create(animal_photo_45)
animals_photo_file_45 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/animals/wild-beautiful-giant-iguana-reminding-prehistoric-reptiles-close-up-portrait_t20_kL86B4.jpg')
animal_photo_45_saved.photo.attach(io: animals_photo_file_45, filename: 'animals_45.jpg')
animal_photo_45_saved.save!



## chocolate

photo_40_choc = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}

photo_40_choc_saved = Photo.create(photo_40_choc)
choc_photo_file_40 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolate-brownie-batter-on-beaters_t20_yvjYVx.jpg')
photo_40_choc_saved.photo.attach(io: choc_photo_file_40, filename: 'chocolate_40_choc.jpg')
photo_40_choc_saved.save!

comment_84 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_40_choc_saved.id,
  body: get_comment
})
comment_85 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_40_choc_saved.id,
  body: get_comment
})

photo_41 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_41_saved = Photo.create(photo_41)
choc_photo_file_41 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolate-cake_t20_yvZNpx.jpg')
photo_41_saved.photo.attach(io: choc_photo_file_41, filename: 'chocolate_41.jpg')
photo_41_saved.save!

comment_86 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_41_saved.id,
  body: get_comment
})
comment_87 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_41_saved.id,
  body: get_comment
})
comment_86 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: photo_41_saved.id,
  body: get_comment
})
comment_86 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_41_saved.id,
  body: get_comment
})

photo_42 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_42_saved = Photo.create(photo_42)
choc_photo_file_42 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolate-chia-seed-pudding_t20_PoPbdR.jpg')
photo_42_saved.photo.attach(io: choc_photo_file_42, filename: 'chocolate_42.jpg')
photo_42_saved.save!

comment_87 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_42_saved.id,
  body: get_comment
})


photo_43 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_43_saved = Photo.create(photo_43)
choc_photo_file_43 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolate-curls_t20_4ENQOy.jpg')
photo_43_saved.photo.attach(io: choc_photo_file_43, filename: 'chocolate_43.jpg')
photo_43_saved.save!

photo_44 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_44_saved = Photo.create(photo_44)
choc_photo_file_44 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolate-donuts-with-sprinkles_t20_e3nJQW.jpg')
photo_44_saved.photo.attach(io: choc_photo_file_44, filename: 'chocolate_44.jpg')
photo_44_saved.save!

comment_88 = Comment.new({
  profile_id: profile_9.id,
  photo_id: photo_44_saved.id,
  body: get_comment
})
comment_89 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_44_saved.id,
  body: get_comment
})

photo_45 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_45_saved = Photo.create(photo_45)
choc_photo_file_45 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolate-truffles_t20_JlPK14.jpg')
photo_45_saved.photo.attach(io: choc_photo_file_45, filename: 'chocolate_45.jpg')
photo_45_saved.save!

photo_46 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_46_saved = Photo.create(photo_46)
choc_photo_file_46 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/chocolates_t20_1Je2dx.jpg')
photo_46_saved.photo.attach(io: choc_photo_file_46, filename: 'chocolate_46.jpg')
photo_46_saved.save!

comment_90 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_46_saved.id,
  body: get_comment
})
comment_91 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_46_saved.id,
  body: get_comment
})

photo_47 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
photo_47_saved = Photo.create(photo_47)
choc_photo_file_47 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/cocoa-powder-spilled-out-on-a-white-table_t20_kjEgYE.jpg')
photo_47_saved.photo.attach(io: choc_photo_file_47, filename: 'chocolate_47.jpg')
photo_47_saved.save!


chocolate_photo_48 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_48_saved = Photo.create(chocolate_photo_48)
choc_photo_file_48 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/marzipan-balls_t20_rKv67g.jpg')
chocolate_photo_48_saved.photo.attach(io: choc_photo_file_48, filename: 'chocolate_48.jpg')
chocolate_photo_48_saved.save!

chocolate_photo_49 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_49_saved = Photo.create(chocolate_photo_49)
choc_photo_file_49 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/my-idea-of-heaven_t20_pld4n8.jpg')
chocolate_photo_49_saved.photo.attach(io: choc_photo_file_49, filename: 'chocolate_49.jpg')
chocolate_photo_49_saved.save!

comment_92 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: chocolate_photo_49_saved.id,
  body: get_comment
})
comment_93 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: chocolate_photo_49_saved.id,
  body: get_comment
})

chocolate_photo_50 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_50_saved = Photo.create(chocolate_photo_50)
choc_photo_file_50 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/photography-flower-sun-travel-sea-yellow-beach-light-vacations-pattern-sphere-still-life-business-my_t20_dpe4XR.jpg')
chocolate_photo_50_saved.photo.attach(io: choc_photo_file_50, filename: 'chocolate_50.jpg')
chocolate_photo_50_saved.save!

chocolate_photo_51 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_51_saved = Photo.create(chocolate_photo_51)
choc_photo_file_51 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/raw-dessert_t20_YXx6VW.jpg')
chocolate_photo_51_saved.photo.attach(io: choc_photo_file_51, filename: 'chocolate_51.jpg')
chocolate_photo_51_saved.save!

comment_94 = Comment.new({
  profile_id: profile_9.id,
  photo_id: chocolate_photo_51_saved.id,
  body: get_comment
})

chocolate_photo_52 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_52_saved = Photo.create(chocolate_photo_52)
choc_photo_file_52 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/the-right-cake_t20_EPgrWJ.jpg')
chocolate_photo_52_saved.photo.attach(io: choc_photo_file_52, filename: 'chocolate_52.jpg')
chocolate_photo_52_saved.save!

chocolate_photo_53 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_53_saved = Photo.create(chocolate_photo_53)
choc_photo_file_53 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/tiramis_t20_yvAYoO.jpg')
chocolate_photo_53_saved.photo.attach(io: choc_photo_file_53, filename: 'chocolate_53.jpg')
chocolate_photo_53_saved.save!

chocolate_photo_54 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_54_saved = Photo.create(chocolate_photo_54)
choc_photo_file_54 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/white-chocolate-with-hazelnuts_t20_bkjGzg.jpg')
chocolate_photo_54_saved.photo.attach(io: choc_photo_file_54, filename: 'chocolate_54.jpg')
chocolate_photo_54_saved.save!

chocolate_photo_55 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_chocolate.lenses.split(',').first,
  camera: profile_chocolate.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_chocolate.id,
  category: 'chocolate',
  featured: assignFeaturedPage()
}
chocolate_photo_55_saved = Photo.create(chocolate_photo_55)
choc_photo_file_55 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/chocolate/white-rose_t20_7OYOKN.jpg')
chocolate_photo_55_saved.photo.attach(io: choc_photo_file_55, filename: 'chocolate_55.jpg')
chocolate_photo_55_saved.save!


## music

photo_48 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_48_saved = Photo.create(photo_48)
music_photo_file_48 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/a-guitarist-with-long-hair-performing-at-a-concert-with-pyro_t20_vLVAaG.jpg')
photo_48_saved.photo.attach(io: music_photo_file_48, filename: 'music_48.jpg')
photo_48_saved.save!

comment_95 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_48_saved.id,
  body: get_comment
})
comment_96 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_48_saved.id,
  body: get_comment
})
comment_97 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_48_saved.id,
  body: get_comment
})

photo_49 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_49_saved = Photo.create(photo_49)
music_photo_file_49 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/behind-the-djs_t20_pY9gdO.jpg')
photo_49_saved.photo.attach(io: music_photo_file_49, filename: 'music_49.jpg')
photo_49_saved.save!

comment_98 = Comment.new({
  profile_id: profile_8.id,
  photo_id: photo_49_saved.id,
  body: get_comment
})

photo_50 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_50_saved = Photo.create(photo_50)
music_photo_file_50 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/close-up-drum-sticks-drumming-hit-beat-rhythm-on-drum-surface-with-splash-water-drops_t20_QJQ99y.jpg')
photo_50_saved.photo.attach(io: music_photo_file_50, filename: 'music_50.jpg')
photo_50_saved.save!

comment_99 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_50_saved.id,
  body: get_comment
})
comment_100 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_50_saved.id,
  body: get_comment
})

photo_51 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_51_saved = Photo.create(photo_51)
music_photo_file_51 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/defocus-young-woman-playing-guitar-on-sunset-in-autumn-field-candid-silhouette-woman-in-hat-chill_t20_NlWYyQ.jpg')
photo_51_saved.photo.attach(io: music_photo_file_51, filename: 'music_51.jpg')
photo_51_saved.save!

comment_101 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_51_saved.id,
  body: get_comment
})
comment_102 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_51_saved.id,
  body: get_comment
})
comment_103 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_51_saved.id,
  body: get_comment
})

photo_52 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_52_saved = Photo.create(photo_52)
music_photo_file_52 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/dnepropetrovsk-ukraine-04-05-2017-a-musician-on-a-city-street-after-a-successful-concert_t20_WJEmmz.jpg')
photo_52_saved.photo.attach(io: music_photo_file_52, filename: 'music_52.jpg')
photo_52_saved.save!

photo_53 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_53_saved = Photo.create(photo_53)
music_photo_file_53 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/happy-accordion-player_t20_rorAaJ.jpg')
photo_53_saved.photo.attach(io: music_photo_file_53, filename: 'music_53.jpg')
photo_53_saved.save!

comment_104 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_53_saved.id,
  body: get_comment
})
comment_105 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_53_saved.id,
  body: get_comment
})

photo_54 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_54_saved = Photo.create(photo_54)
music_photo_file_54 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/illuminated-neon-words-on-the-wall_t20_yRbZAL.jpg')
photo_54_saved.photo.attach(io: music_photo_file_54, filename: 'music_54.jpg')
photo_54_saved.save!

photo_55 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_55_saved = Photo.create(photo_55)
music_photo_file_55 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/music_t20_mxbEml.jpg')
photo_55_saved.photo.attach(io: music_photo_file_55, filename: 'music_55.jpg')
photo_55_saved.save!

comment_106 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: photo_55_saved.id,
  body: get_comment
})

photo_56 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
photo_56_saved = Photo.create(photo_56)
music_photo_file_56 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/music-concert-musician-drummer-drums-live-drummer_t20_4dmEEl.jpg')
photo_56_saved.photo.attach(io: music_photo_file_56, filename: 'music_56.jpg')
photo_56_saved.save!

comment_107 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_56_saved.id,
  body: get_comment
})
comment_108 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_56_saved.id,
  body: get_comment
})

music_photo_57 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_57_saved = Photo.create(music_photo_57)
music_photo_file_57 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/music-music-musical-instrument-classic-playing-music-saksophone_t20_K8Lrk9.jpg')
music_photo_57_saved.photo.attach(io: music_photo_file_57, filename: 'music_57.jpg')
music_photo_57_saved.save!

comment_109 = Comment.new({
  profile_id: profile_14.id,
  photo_id: music_photo_57_saved.id,
  body: get_comment
})

music_photo_58 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_58_saved = Photo.create(music_photo_58)
music_photo_file_58 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/music-musical-instrument-musician-music-festival-woman-play-sound-musical-instruments-harp_t20_pW9lvk.jpg')
music_photo_58_saved.photo.attach(io: music_photo_file_58, filename: 'music_58.jpg')
music_photo_58_saved.save!

comment_110 = Comment.new({
  profile_id: profile_11.id,
  photo_id: music_photo_58_saved.id,
  body: get_comment
})
comment_111 = Comment.new({
  profile_id: profile_10.id,
  photo_id: music_photo_58_saved.id,
  body: get_comment
})

music_photo_59 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_59_saved = Photo.create(music_photo_59)
music_photo_file_59 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/outdoors-sunset-beach-beach-decoration-celebration-music-concert-party-party-craft-chill-vibes_t20_9JAlwB.jpg')
music_photo_59_saved.photo.attach(io: music_photo_file_59, filename: 'music_59.jpg')
music_photo_59_saved.save!

music_photo_60 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_60_saved = Photo.create(music_photo_60)
music_photo_file_60 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/piano-hands-woman-piano-keys-pianist-playing-piano-playing-the-piano-vintage-piano_t20_LX7Jxo.jpg')
music_photo_60_saved.photo.attach(io: music_photo_file_60, filename: 'music_60.jpg')
music_photo_60_saved.save!

comment_112 = Comment.new({
  profile_id: profile_9.id,
  photo_id: music_photo_60_saved.id,
  body: get_comment
})
comment_113 = Comment.new({
  profile_id: profile_8.id,
  photo_id: music_photo_60_saved.id,
  body: get_comment
})

music_photo_61 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_61_saved = Photo.create(music_photo_61)
music_photo_file_61 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/playing-the-mandolin_t20_P3WEmR.jpg')
music_photo_61_saved.photo.attach(io: music_photo_file_61, filename: 'music_61.jpg')
music_photo_61_saved.save!

music_photo_62_1 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_62_1_saved = Photo.create(music_photo_62)
music_photo_file_62_1 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/selective-focus-music-acoustic-guitar-guitar-musical-instrument-musician-acoustic-musicians_t20_vOvpXE.jpg')
music_photo_62_1_saved.photo.attach(io: music_photo_file_62_1, filename: 'music_62.jpg')
music_photo_62_1_saved.save!

comment_114 = Comment.new({
  profile_id: profile_8.id,
  photo_id: music_photo_62_1_saved.id,
  body: get_comment
})


music_photo_62 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_62_saved = Photo.create(music_photo_62)
music_photo_file_62 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/summer-hand-music-music-antique-vintage-hands-hands-retro-closeup-vinyl-dj-old-school-putting_t20_yp6aa2.jpg')
music_photo_62_saved.photo.attach(io: music_photo_file_62, filename: 'music_62.jpg')
music_photo_62_saved.save!

music_photo_63 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_63_saved = Photo.create(music_photo_63)
music_photo_file_63 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/two-young-musicians-playing-classic-digital-piano-at-home-during-online-concert-at-home_t20_om9AkW.jpg')
music_photo_63_saved.photo.attach(io: music_photo_file_63, filename: 'music_63.jpg')
music_photo_63_saved.save!

music_photo_64 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_music.lenses.split(',').first,
  camera: profile_music.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_music.id,
  category: 'music',
  featured: assignFeaturedPage()
}
music_photo_64_saved = Photo.create(music_photo_64)
music_photo_file_64 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/music/window-guitar-natural-light-morning-light_t20_PJnaJJ.jpg')
music_photo_64_saved.photo.attach(io: music_photo_file_64, filename: 'music_64.jpg')
music_photo_64_saved.save!

comment_115 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: music_photo_63_saved.id,
  body: get_comment
})
comment_116 = Comment.new({
  profile_id: profile_music.id,
  photo_id: music_photo_64_saved.id,
  body: get_comment
})


## sports 

photo_57 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_57_saved = Photo.create(photo_57)
sports_photo_file_57 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/adrenaline-trail-dirt-man-leg-boot-biker-racer-moto-active-cross-enduro-motorcyclist-boots_t20_KArpK1.jpg')
photo_57_saved.photo.attach(io: sports_photo_file_57, filename: 'sports_57.jpg')
photo_57_saved.save!

photo_58 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_58_saved = Photo.create(photo_58)
sports_photo_file_58 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/adventure-sports-sports-extreme-sports-action-adrenaline-adventurous-watersports-flyboard_t20_g1bEzz.jpg')
photo_58_saved.photo.attach(io: sports_photo_file_58, filename: 'sports_58.jpg')
photo_58_saved.save!

comment_117 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_57_saved.id,
  body: get_comment
})
comment_118 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_58_saved.id,
  body: get_comment
})

photo_59 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_59_saved = Photo.create(photo_59)
sports_photo_file_59 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/adventure-surfing-sports-extreme-sports-extreme-sports-water-sports-life-surf-adrenaline-adventurous_t20_JokERk.jpg')
photo_59_saved.photo.attach(io: sports_photo_file_59, filename: 'sports_59.jpg')
photo_59_saved.save!

comment_119 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_59_saved.id,
  body: get_comment
})
comment_120 = Comment.new({
  profile_id: profile_12.id,
  photo_id: photo_59_saved.id,
  body: get_comment
})

photo_60 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_60_saved = Photo.create(photo_60)
sports_photo_file_60 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/backflip-off-motorbike_t20_eVnelb.jpg')
photo_60_saved.photo.attach(io: sports_photo_file_60, filename: 'sports_60.jpg')
photo_60_saved.save!

photo_61 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_61_saved = Photo.create(photo_61)
sports_photo_file_61 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/bmx-freestyle_t20_GREW1R.jpg')
photo_61_saved.photo.attach(io: sports_photo_file_61, filename: 'sports_61.jpg')
photo_61_saved.save!

comment_121 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_60_saved.id,
  body: get_comment
})
comment_122 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_60_saved.id,
  body: get_comment
})
comment_123 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: photo_60_saved.id,
  body: get_comment
})
comment_124 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: photo_61_saved.id,
  body: get_comment
})
comment_125 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_61_saved.id,
  body: get_comment
})
comment_126 = Comment.new({
  profile_id: profile_8.id,
  photo_id: photo_61_saved.id,
  body: get_comment
})

photo_62 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_62_saved = Photo.create(photo_62)
sports_photo_file_62 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/dune-rider_t20_1WPPev.jpg')
photo_62_saved.photo.attach(io: sports_photo_file_62, filename: 'sports_62.jpg')
photo_62_saved.save!

photo_63 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_63_saved = Photo.create(photo_63)
sports_photo_file_63 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/going-down_t20_Noelrp.jpg')
photo_63_saved.photo.attach(io: sports_photo_file_63, filename: 'sports_63.jpg')
photo_63_saved.save!

comment_127 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: photo_63_saved.id,
  body: get_comment
})

photo_64 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_64_saved = Photo.create(photo_64)
sports_photo_file_64 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/hot-summer-days-are-just-perfect-for-a-river-cool-down_t20_8ORbGa.jpg')
photo_64_saved.photo.attach(io: sports_photo_file_64, filename: 'sports_64.jpg')
photo_64_saved.save!

photo_65 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_65_saved = Photo.create(photo_65)
sports_photo_file_65 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/jerrod-skorupski-pontiac-14_t20_VodWQ8.jpg')
photo_65_saved.photo.attach(io: sports_photo_file_65, filename: 'sports_65.jpg')
photo_65_saved.save!

comment_128 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: photo_65_saved.id,
  body: get_comment
})
comment_129 = Comment.new({
  profile_id: profile_10.id,
  photo_id: photo_64_saved.id,
  body: get_comment
})

photo_66 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_66_saved = Photo.create(photo_66)
sports_photo_file_66 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/KokOOx_t20_KokOOx.jpg')
photo_66_saved.photo.attach(io: sports_photo_file_66, filename: 'sports_66.jpg')
photo_66_saved.save!

comment_130 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_66_saved.id,
  body: get_comment
})
comment_131 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_66_saved.id,
  body: get_comment
})

photo_67 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_67_saved = Photo.create(photo_67)
sports_photo_file_67 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/MQmDKe_t20_d12GoB.jpg')
photo_67_saved.photo.attach(io: sports_photo_file_67, filename: 'sports_67.jpg')
photo_67_saved.save!

photo_68 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_68_saved = Photo.create(photo_68)
sports_photo_file_68 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/nominated-austria-kaprun_t20_VWNpQk.jpg')
photo_68_saved.photo.attach(io: sports_photo_file_68, filename: 'sports_68.jpg')
photo_68_saved.save!

comment_132 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_68_saved.id,
  body: get_comment
})
comment_133 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_67_saved.id,
  body: get_comment
})

photo_69 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_69_saved = Photo.create(photo_69)
sports_photo_file_69 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/outdoors-people-sport-sports-extreme-sports-motorcycle-racing-race-motorbike-outdoor-activity_t20_QKZobb.jpg')
photo_69_saved.photo.attach(io: sports_photo_file_69, filename: 'sports_69.jpg')
photo_69_saved.save!

photo_70 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_70_saved = Photo.create(photo_70)
sports_photo_file_70 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/outdoors-winter-cold-snow-adventure-adventure-mountain-sport-recreation-action-outdoor-skier_t20_3Q7P3y.jpg')
photo_70_saved.photo.attach(io: sports_photo_file_70, filename: 'sports_70.jpg')
photo_70_saved.save!

comment_134 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_69_saved.id,
  body: get_comment
})
comment_135 = Comment.new({
  profile_id: profile_8.id,
  photo_id: photo_70_saved.id,
  body: get_comment
})
comment_136 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_69_saved.id,
  body: get_comment
})
comment_137 = Comment.new({
  profile_id: profile_9.id,
  photo_id: photo_70_saved.id,
  body: get_comment
})
comment_138 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_69_saved.id,
  body: get_comment
})
comment_139 = Comment.new({
  profile_id: profile_11.id,
  photo_id: photo_70_saved.id,
  body: get_comment
})

photo_71 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_71_saved = Photo.create(photo_71)
sports_photo_file_71 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/paragliding-in-the-mountains-extreme-sports-hang-glider-paragliding-sport-extreme-glider-hang-flight_t20_YE62a4.jpg')
photo_71_saved.photo.attach(io: sports_photo_file_71, filename: 'sports_71.jpg')
photo_71_saved.save!

photo_72 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_72_saved = Photo.create(photo_72)
sports_photo_file_72 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/sport-freedom-fly-blue-sky-paragliders-tandem-bucket-list-sunrise-sunset-skydiving-parachuting_t20_XNRPX3.jpg')
photo_72_saved.photo.attach(io: sports_photo_file_72, filename: 'sports_72.jpg')
photo_72_saved.save!

comment_140 = Comment.new({
  profile_id: profile_music.id,
  photo_id: photo_71_saved.id,
  body: get_comment
})
comment_141 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: photo_72_saved.id,
  body: get_comment
})

photo_73 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_73_saved = Photo.create(photo_73)
sports_photo_file_73 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/sport-surfing-waves-surf-extreme_t20_8OJe9g.jpg')
photo_73_saved.photo.attach(io: sports_photo_file_73, filename: 'sports_73.jpg')
photo_73_saved.save!

photo_74 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_74_saved = Photo.create(photo_74)
sports_photo_file_74 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/twenty20_f345d99e-cfaa-4ce5-99aa-3329c8ee332a.jpg')
photo_74_saved.photo.attach(io: sports_photo_file_74, filename: 'sports_74.jpg')
photo_74_saved.save!

comment_142 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: photo_74_saved.id,
  body: get_comment
})

photo_75 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_75_saved = Photo.create(photo_75)
sports_photo_file_75 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/view-from-above-flying-happiness-girl-above-blue-sky-paradise-happy-paragliding-happy-girl_t20_e9Z9ko.jpg')
photo_75_saved.photo.attach(io: sports_photo_file_75, filename: 'sports_75.jpg')
photo_75_saved.save!

comment_143 = Comment.new({
  profile_id: profile_15.id,
  photo_id: photo_75_saved.id,
  body: get_comment
})
comment_144 = Comment.new({
  profile_id: profile_14.id,
  photo_id: photo_75_saved.id,
  body: get_comment
})

photo_76 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_sports.lenses.split(',').first,
  camera: profile_sports.cameras.split(', ').first,
  taken: Faker::Date.between(from: 90.days.ago, to: Date.today),
  profile_id: profile_sports.id,
  category: 'sports',
  featured: assignFeaturedPage()
}
photo_76_saved = Photo.create(photo_76)
sports_photo_file_76 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/sports/wave-ocean-surf-caribbean-surfer-extreme-sport-ocean-waves-seaspray-sunnyseasand-bvi-apple-bay_t20_rLvzlX.jpg')
photo_76_saved.photo.attach(io: sports_photo_file_76, filename: 'sports_76.jpg')
photo_76_saved.save!

comment_145 = Comment.new({
  profile_id: profile_13.id,
  photo_id: photo_76_saved.id,
  body: get_comment
})


## general seeds (no category)

# profile_8

general_01 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_8.lenses.split(',').first,
  camera: profile_8.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_8.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_01_saved = Photo.create(general_01)
general_photo_file_01 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/beautiful-jellyfish-or-medusa-in-the-neon-light-in-aquarium-in-new-opened-prague-medusarium-czech_t20_GJEL7E.jpg')
general_01_saved.photo.attach(io: general_photo_file_01, filename: 'general_01.jpg')
general_01_saved.save!

general_02 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_8.lenses.split(',').first,
  camera: profile_8.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_8.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_02_saved = Photo.create(general_02)
general_photo_file_02 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/bike-in-urban-area_t20_ZV18zj.jpg')
general_02_saved.photo.attach(io: general_photo_file_02, filename: 'general_02.jpg')
general_02_saved.save!

comment_146 = Comment.new({
  profile_id: profile_9.id,
  photo_id: general_01_saved.id,
  body: get_comment
})
comment_147 = Comment.new({
  profile_id: profile_14.id,
  photo_id: general_01_saved.id,
  body: get_comment
})
comment_148 = Comment.new({
  profile_id: profile_10.id,
  photo_id: general_02_saved.id,
  body: get_comment
})

# profile_9

general_03 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_9.lenses.split(',').first,
  camera: profile_9.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_9.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_03_saved = Photo.create(general_03)
general_photo_file_03 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/bright-and-colorful-jump_t20_B80RmO.jpg')
general_03_saved.photo.attach(io: general_photo_file_03, filename: 'general_03.jpg')
general_03_saved.save!

general_04 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_9.lenses.split(',').first,
  camera: profile_9.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_9.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_04_saved = Photo.create(general_04)
general_photo_file_04 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/chifogo_t20_dxRlJA.jpg')
general_04_saved.photo.attach(io: general_photo_file_04, filename: 'general_04.jpg')
general_04_saved.save!

comment_149 = Comment.new({
  profile_id: profile_music.id,
  photo_id: general_03_saved.id,
  body: get_comment
})
comment_150 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: general_04_saved.id,
  body: get_comment
})

# profile_10

general_05 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_10.lenses.split(',').first,
  camera: profile_10.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_10.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_05_saved = Photo.create(general_05)
general_photo_file_05 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/city-bridge-woman-at-the-bridge-winter-snow-glasses-weather-eyes-hands-scarf-gloves-city-life-style_t20_Kvn8n9.jpg')
general_05_saved.photo.attach(io: general_photo_file_05, filename: 'general_05.jpg')
general_05_saved.save!

general_06 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_10.lenses.split(',').first,
  camera: profile_10.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_10.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_06_saved = Photo.create(general_06)
general_photo_file_06 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/city-street-vietnam-street-photography-hanoi-vietnam_t20_lxmznZ.jpg')
general_06_saved.photo.attach(io: general_photo_file_06, filename: 'general_06.jpg')
general_06_saved.save!

comment_151 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: general_05_saved.id,
  body: get_comment
})
comment_152 = Comment.new({
  profile_id: profile_music.id,
  photo_id: general_05_saved.id,
  body: get_comment
})
comment_153 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: general_06_saved.id,
  body: get_comment
})


general_07 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_10.lenses.split(',').first,
  camera: profile_10.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_10.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_07_saved = Photo.create(general_07)
general_photo_file_07 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/female-hand-with-palm-leaves-on-a-black-dark-background-dark-light-stylish-beauty-composition_t20_rRBBgw.jpg')
general_07_saved.photo.attach(io: general_photo_file_07, filename: 'general_07.jpg')
general_07_saved.save!

# profile_11

general_08 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_11.lenses.split(',').first,
  camera: profile_11.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_11.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_08_saved = Photo.create(general_08)
general_photo_file_08 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/fresh-plant-minimal-background_t20_x27K1Q.jpg')
general_08_saved.photo.attach(io: general_photo_file_08, filename: 'general_08.jpg')
general_08_saved.save!

general_09 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_11.lenses.split(',').first,
  camera: profile_11.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_11.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_09_saved = Photo.create(general_09)
general_photo_file_09 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/jumping-for-joy-in-canada_t20_0AEgkV.jpg')
general_09_saved.photo.attach(io: general_photo_file_09, filename: 'general_09.jpg')
general_09_saved.save!

comment_154 = Comment.new({
  profile_id: profile_guest.id,
  photo_id: general_08_saved.id,
  body: get_comment
})
comment_155 = Comment.new({
  profile_id: profile_14.id,
  photo_id: general_08_saved.id,
  body: get_comment
})
comment_156 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: general_09_saved.id,
  body: get_comment
})

# profile_12

general_10 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_12.lenses.split(',').first,
  camera: profile_12.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_12.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_10_saved = Photo.create(general_10)
general_photo_file_10 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/monkeys-in-ubud-monkey-forest-bali_t20_kRzb3R.jpg')
general_10_saved.photo.attach(io: general_photo_file_10, filename: 'general_10.jpg')
general_10_saved.save!

comment_157 = Comment.new({
  profile_id: profile_13.id,
  photo_id: general_10_saved.id,
  body: get_comment
})
comment_158 = Comment.new({
  profile_id: profile_15.id,
  photo_id: general_10_saved.id,
  body: get_comment
})

general_11 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_12.lenses.split(',').first,
  camera: profile_12.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_12.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_11_saved = Photo.create(general_11)
general_photo_file_11 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/outdoors-adventure-summer-surfboard-surfing-recreation-extreme-sports-water-sports-outdoor-surf_t20_GJGOQo.jpg')
general_11_saved.photo.attach(io: general_photo_file_11, filename: 'general_11.jpg')
general_11_saved.save!

general_12 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_12.lenses.split(',').first,
  camera: profile_12.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_12.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_12_saved = Photo.create(general_12)
general_photo_file_12 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/palm-leave-from-real-close-abstract-texture-with-pastel-colors_t20_2JPnKK.jpg')
general_12_saved.photo.attach(io: general_photo_file_12, filename: 'general_12.jpg')
general_12_saved.save!

comment_159 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: general_11_saved.id,
  body: get_comment
})
comment_160 = Comment.new({
  profile_id: profile_8.id,
  photo_id: general_12_saved.id,
  body: get_comment
})

general_13 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_12.lenses.split(',').first,
  camera: profile_12.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_12.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_13_saved = Photo.create(general_13)
general_photo_file_13 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/QQgekN_t20_mvLBQn.jpg')
general_13_saved.photo.attach(io: general_photo_file_13, filename: 'general_13.jpg')
general_13_saved.save!

# profile_13

general_14 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_13.lenses.split(',').first,
  camera: profile_13.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_13.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_14_saved = Photo.create(general_14)
general_photo_file_14 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/reflections_t20_XQ84wV.jpg')
general_14_saved.photo.attach(io: general_photo_file_14, filename: 'general_14.jpg')
general_14_saved.save!

comment_161 = Comment.new({
  profile_id: profile_abstract.id,
  photo_id: general_14_saved.id,
  body: get_comment
})
comment_162 = Comment.new({
  profile_id: profile_jacob.id,
  photo_id: general_14_saved.id,
  body: get_comment
})

general_15 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_13.lenses.split(',').first,
  camera: profile_13.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_13.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_15_saved = Photo.create(general_15)
general_photo_file_15 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/sea-turtles_t20_98OYYY.jpg')
general_15_saved.photo.attach(io: general_photo_file_15, filename: 'general_15.jpg')
general_15_saved.save!

general_16 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_13.lenses.split(',').first,
  camera: profile_13.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_13.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_16_saved = Photo.create(general_16)
general_photo_file_16 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/skateboard-urban-landscape-street-photography-big-city-city-background-people-using-mobile_t20_wLPeOm.jpg')
general_16_saved.photo.attach(io: general_photo_file_16, filename: 'general_16.jpg')
general_16_saved.save!

comment_163 = Comment.new({
  profile_id: profile_14.id,
  photo_id: general_15_saved.id,
  body: get_comment
})
comment_164 = Comment.new({
  profile_id: profile_15.id,
  photo_id: general_16_saved.id,
  body: get_comment
})

# profile_14

general_17 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: 'Toronto',
  lens: profile_14.lenses.split(',').first,
  camera: profile_14.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_14.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_17_saved = Photo.create(general_17)
general_photo_file_17 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/toronto-city_t20_6lAdEo.jpg')
general_17_saved.photo.attach(io: general_photo_file_17, filename: 'general_17.jpg')
general_17_saved.save!

comment_165 = Comment.new({
  profile_id: profile_8.id,
  photo_id: general_17_saved.id,
  body: get_comment
})
comment_166 = Comment.new({
  profile_id: profile_9.id,
  photo_id: general_17_saved.id,
  body: get_comment
})

general_18 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_14.lenses.split(',').first,
  camera: profile_14.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_14.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_18_saved = Photo.create(general_18)
general_photo_file_18 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/under-cave_t20_AV6wgr.jpg')
general_18_saved.photo.attach(io: general_photo_file_18, filename: 'general_18.jpg')
general_18_saved.save!

general_19 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_14.lenses.split(',').first,
  camera: profile_14.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_14.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_19_saved = Photo.create(general_19)
general_photo_file_19 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/urban-scene-silhouette-jumping-street-abstract-jump-darkness-street-photography-lights-and-shadows_t20_wgmr2m.jpg')
general_19_saved.photo.attach(io: general_photo_file_19, filename: 'general_19.jpg')
general_19_saved.save!

comment_167 = Comment.new({
  profile_id: profile_15.id,
  photo_id: general_18_saved.id,
  body: get_comment
})
comment_168 = Comment.new({
  profile_id: profile_11.id,
  photo_id: general_18_saved.id,
  body: get_comment
})

comment_169 = Comment.new({
  profile_id: profile_music.id,
  photo_id: general_19_saved.id,
  body: get_comment
})
comment_170 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: general_19_saved.id,
  body: get_comment
})


# profile_15

general_20 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_15.lenses.split(',').first,
  camera: profile_15.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_15.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_20_saved = Photo.create(general_20)
general_photo_file_20 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/waterfall_t20_wLLyyV.jpg')
general_20_saved.photo.attach(io: general_photo_file_20, filename: 'general_20.jpg')
general_20_saved.save!

comment_171 = Comment.new({
  profile_id: profile_8.id,
  photo_id: general_20_saved.id,
  body: get_comment
})
comment_172 = Comment.new({
  profile_id: profile_animals.id,
  photo_id: general_20_saved.id,
  body: get_comment
})
comment_173 = Comment.new({
  profile_id: profile_sports.id,
  photo_id: general_20_saved.id,
  body: get_comment
})

general_21 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_15.lenses.split(',').first,
  camera: profile_15.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_15.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_21_saved = Photo.create(general_21)
general_photo_file_21 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/winter-wanderlust_t20_x6rlNX.jpg')
general_21_saved.photo.attach(io: general_photo_file_21, filename: 'general_21.jpg')
general_21_saved.save!

general_22 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_15.lenses.split(',').first,
  camera: profile_15.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_15.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_22_saved = Photo.create(general_22)
general_photo_file_22 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/yellow-tramway-in-busy-streets-of-lisbon_t20_xXgY0Q.jpg')
general_22_saved.photo.attach(io: general_photo_file_22, filename: 'general_22.jpg')
general_22_saved.save!

comment_174 = Comment.new({
  profile_id: profile_10.id,
  photo_id: general_21_saved.id,
  body: get_comment
})
comment_175 = Comment.new({
  profile_id: profile_chocolate.id,
  photo_id: general_22_saved.id,
  body: get_comment
})

general_23 = {
  title: Faker::Hipster.sentence(word_count: 2, random_words_to_add: 0),
  description: Faker::Hipster.sentences(number: 1).first,
  location: Faker::Address.city,
  lens: profile_15.lenses.split(',').first,
  camera: profile_15.cameras.split(', ').first,
  taken: Faker::Date.between(from: 5.days.ago, to: Date.today),
  profile_id: profile_15.id,
  category: 'fresh',
  featured: assignFeaturedPage()
}
general_23_saved = Photo.create(general_23)
general_photo_file_23 = open('https://my5000px-seeds.s3.amazonaws.com/seeds/general/young-hipster-smiling-girl-listen-music-walking-on-the-streets-of-the-city-using-mobile-phone_t20_eAj36v.jpg')
general_23_saved.photo.attach(io: general_photo_file_23, filename: 'general_23.jpg')
general_23_saved.save!

comment_176 = Comment.new({
  profile_id: profile_13.id,
  photo_id: general_23_saved.id,
  body: get_comment
})
comment_177 = Comment.new({
  profile_id: profile_12.id,
  photo_id: general_23_saved.id,
  body: get_comment
})




############################################################################

# Follows

### profile_guest
follow_0 = Follow.new({
  followee_id: profile_guest.id,
  follower_id: profile_11.id
})
follow_1 = Follow.new({
  followee_id: profile_guest.id,
  follower_id: profile_jacob.id
})
follow_2 = Follow.new({
  followee_id: profile_guest.id,
  follower_id: profile_abstract.id
})
follow_3 = Follow.new({
  followee_id: profile_guest.id,
  follower_id: profile_music.id
})
follow_4 = Follow.new({
  followee_id: profile_guest.id,
  follower_id: profile_13.id
})
follow_5 = Follow.new({
  followee_id: profile_guest.id, 
  follower_id: profile_8.id
})

### profile_jacob
follow_6 = Follow.new({
  followee_id: profile_jacob.id,
  follower_id: profile_guest.id
})
follow_7 = Follow.new({
  followee_id: profile_jacob.id,
  follower_id: profile_13.id,
})
follow_8 = Follow.new({
  followee_id: profile_jacob.id,
  follower_id: profile_animals.id, 
})
follow_9 = Follow.new({
  followee_id: profile_jacob.id,
  follower_id: profile_14.id, 
})
follow_10 = Follow.new({
  followee_id: profile_jacob.id,
  follower_id: profile_9.id, 
})

### profile_abstract
follow_11 = Follow.new({
  followee_id: profile_abstract.id, 
  follower_id: profile_15.id
})
follow_12 = Follow.new({
  followee_id: profile_abstract.id, 
  follower_id: profile_12.id
})
follow_13 = Follow.new({
  followee_id: profile_abstract.id, 
  follower_id: profile_11.id
})
follow_14 = Follow.new({
  followee_id: profile_abstract.id, 
  follower_id: profile_chocolate.id
})
follow_15 = Follow.new({
  followee_id: profile_abstract.id, 
  follower_id: profile_guest.id
})
follow_16 = Follow.new({
  followee_id: profile_abstract.id, 
  follower_id: profile_jacob.id
})

### profile_animals
follow_17 = Follow.new({
  followee_id: profile_animals.id, 
  follower_id: profile_guest.id
})
follow_18 = Follow.new({
  followee_id: profile_animals.id,
  follower_id: profile_abstract.id
})
follow_19 = Follow.new({
  followee_id: profile_animals.id,
  follower_id: profile_10.id
})
follow_20 = Follow.new({
  followee_id: profile_animals.id,
  follower_id: profile_11.id
})
follow_21 = Follow.new({
  followee_id: profile_animals.id,
  follower_id: profile_8.id
})
follow_22 = Follow.new({
  followee_id: profile_animals.id, 
  follower_id: profile_12.id
})
follow_23 = Follow.new({
  followee_id: profile_animals.id,
  follower_id: profile_14.id
})

### profile_chocolate
follow_24 = Follow.new({
  followee_id: profile_chocolate.id,
  follower_id: profile_guest.id
})
follow_25 = Follow.new({
  followee_id: profile_chocolate.id,
  follower_id: profile_abstract.id
})
follow_26 = Follow.new({
  followee_id: profile_chocolate.id, 
  follower_id: profile_animals.id
})
follow_27 = Follow.new({
  followee_id: profile_chocolate.id, 
  follower_id: profile_music.id
})
follow_28 = Follow.new({
  followee_id: profile_chocolate.id, 
  follower_id: profile_sports.id
})
follow_29 = Follow.new({
  followee_id: profile_chocolate.id, 
  follower_id: profile_jacob.id
})

### profile_music
follow_30 = Follow.new({
  followee_id: profile_music.id, 
  follower_id: profile_8.id
})
follow_31 = Follow.new({
  followee_id: profile_music.id, 
  follower_id: profile_9.id
})
follow_32 = Follow.new({
  followee_id: profile_music.id, 
  follower_id: profile_15.id
})
follow_33 = Follow.new({
  followee_id: profile_music.id, 
  follower_id: profile_guest.id
})
follow_34 = Follow.new({
  followee_id: profile_music.id, 
  follower_id: profile_abstract.id
})
follow_35 = Follow.new({
  followee_id: profile_music.id, 
  follower_id: profile_animals.id
})

### profile_8
follow_36 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_15.id
})
follow_37 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_14.id
})
follow_38 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_13.id
})
follow_39 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_12.id
})
follow_40 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_11.id
})
follow_41 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_10.id
})
follow_42 = Follow.new({
  followee_id: profile_8.id, 
  follower_id: profile_9.id
})

### profile_9
follow_43 = Follow.new({
  followee_id: profile_9.id, 
  follower_id: profile_guest.id
})
follow_44 = Follow.new({
  followee_id: profile_9.id, 
  follower_id: profile_jacob.id
})
follow_45 = Follow.new({
  followee_id: profile_9.id, 
  follower_id: profile_music.id
})
follow_46 = Follow.new({
  followee_id: profile_9.id, 
  follower_id: profile_chocolate.id
})
follow_47 = Follow.new({
  followee_id: profile_9.id, 
  follower_id: profile_abstract.id
})

### profile_10
follow_48 = Follow.new({
  followee_id: profile_10.id, 
  follower_id: profile_guest.id
})
follow_49 = Follow.new({
  followee_id: profile_10.id, 
  follower_id: profile_animals.id
})
follow_50 = Follow.new({
  followee_id: profile_10.id, 
  follower_id: profile_music.id
})
follow_51 = Follow.new({
  followee_id: profile_10.id, 
  follower_id: profile_9.id
})
follow_52 = Follow.new({
  followee_id: profile_10.id, 
  follower_id: profile_13.id
})

### profile_11
follow_53 = Follow.new({
  followee_id: profile_11.id, 
  follower_id: profile_15.id
})
follow_53 = Follow.new({
  followee_id: profile_11.id, 
  follower_id: profile_14.id
})
follow_53 = Follow.new({
  followee_id: profile_11.id, 
  follower_id: profile_13.id
})
follow_53 = Follow.new({
  followee_id: profile_11.id, 
  follower_id: profile_12.id
})
follow_53 = Follow.new({
  followee_id: profile_11.id, 
  follower_id: profile_guest.id
})
follow_53 = Follow.new({
  followee_id: profile_11.id, 
  follower_id: profile_jacob.id
})

### profile_12
follow_54 = Follow.new({
  followee_id: profile_12.id, 
  follower_id: profile_15.id
})
follow_55 = Follow.new({
  followee_id: profile_12.id, 
  follower_id: profile_guest.id
})
follow_56 = Follow.new({
  followee_id: profile_12.id, 
  follower_id: profile_10.id
})
follow_57 = Follow.new({
  followee_id: profile_12.id, 
  follower_id: profile_chocolate.id
})
follow_58 = Follow.new({
  followee_id: profile_12.id, 
  follower_id: profile_abstract.id
})

### profile_13
follow_59 = Follow.new({
  followee_id: profile_13.id, 
  follower_id: profile_jacob.id
})
follow_60 = Follow.new({
  followee_id: profile_13.id, 
  follower_id: profile_guest.id
})
follow_61 = Follow.new({
  followee_id: profile_13.id, 
  follower_id: profile_music.id
})
follow_62 = Follow.new({
  followee_id: profile_13.id, 
  follower_id: profile_animals.id
})
follow_63 = Follow.new({
  followee_id: profile_13.id, 
  follower_id: profile_chocolate.id
})

### profile_14
follow_64 = Follow.new({
  followee_id: profile_14.id, 
  follower_id: profile_abstract.id
})
follow_65 = Follow.new({
  followee_id: profile_14.id, 
  follower_id: profile_12.id
})
follow_66 = Follow.new({
  followee_id: profile_14.id, 
  follower_id: profile_chocolate.id
})
follow_67 = Follow.new({
  followee_id: profile_14.id, 
  follower_id: profile_15.id
})
follow_68 = Follow.new({
  followee_id: profile_14.id, 
  follower_id: profile_music.id
})

### profile_15
follow_69 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_music.id
})
follow_70 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_14.id
})
follow_71 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_13.id
})
follow_72 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_12.id
})
follow_73 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_11.id
})
follow_74 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_10.id
})
follow_75 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_9.id
})
follow_76 = Follow.new({
  followee_id: profile_15.id, 
  follower_id: profile_8.id
})


### save follows and comments

# def save_follows
#   i = 0
#   while i < 62
#     follow_$i.save!
#     i += 1
#   end
# end

# def save_comments
#   i = 0
#   while i < 178
#     comment_i.save!
#   end
# end

follow_1.save!
follow_2.save!
follow_3.save!
follow_4.save!
follow_5.save!
follow_6.save!
follow_7.save!
follow_8.save!
follow_9.save!
follow_10.save!
follow_11.save!
follow_12.save!
follow_13.save!
follow_14.save!
follow_15.save!
follow_16.save!
follow_17.save!
follow_18.save!
follow_19.save!
follow_20.save!
follow_21.save!
follow_22.save!
follow_23.save!
follow_24.save!
follow_25.save!
follow_26.save!
follow_27.save!
follow_28.save!
follow_29.save!
follow_30.save!
follow_31.save!
follow_32.save!
follow_33.save!
follow_34.save!
follow_35.save!
follow_36.save!
follow_37.save!
follow_38.save!
follow_39.save!
follow_40.save!
follow_41.save!
follow_42.save!
follow_43.save!
follow_44.save!
follow_45.save!
follow_46.save!
follow_47.save!
follow_48.save!
follow_49.save!
follow_50.save!
follow_51.save!
follow_52.save!
follow_53.save!
follow_54.save!
follow_55.save!
follow_56.save!
follow_57.save!
follow_58.save!
follow_59.save!
follow_60.save!
follow_61.save!
follow_62.save!
follow_63.save!
follow_64.save!
follow_65.save!
follow_66.save!
follow_67.save!
follow_68.save!
follow_69.save!
follow_70.save!
follow_71.save!
follow_72.save!
follow_73.save!
follow_74.save!
follow_75.save!
follow_76.save!


comment_1.save!
comment_2.save!
comment_3.save!
comment_4.save!
comment_5.save!
comment_6.save!
comment_7.save!
comment_8.save!
comment_9.save!
comment_10.save!
comment_11.save!
comment_12.save!
comment_13.save!
comment_14.save!
comment_15.save!
comment_16.save!
comment_17.save!
comment_18.save!
comment_19.save!
comment_20.save!
comment_21.save!
comment_22.save!
comment_23.save!
comment_24.save!
comment_25.save!
comment_26.save!
comment_27.save!
comment_28.save!
comment_29.save!
comment_30.save!
comment_31.save!
comment_32.save!
comment_33.save!
comment_34.save!
comment_35.save!
comment_36.save!
comment_37.save!
comment_38.save!
comment_39.save!
comment_40.save!
comment_41.save!
comment_42.save!
comment_43.save!
comment_44.save!
comment_45.save!
comment_46.save!
comment_47.save!
comment_48.save!
comment_49.save!
comment_50.save!
comment_51.save!
comment_52.save!
comment_53.save!
comment_54.save!
comment_55.save!
comment_56.save!
comment_57.save!
comment_58.save!
comment_59.save!
comment_60.save!
comment_61.save!
comment_62.save!
comment_63.save!
comment_64.save!
comment_65.save!
comment_66.save!
comment_67.save!
comment_68.save!
comment_69.save!
comment_70.save!
comment_71.save!
comment_72.save!
comment_73.save!
comment_74.save!
comment_75.save!
comment_76.save!
comment_77.save!
comment_78.save!
comment_79.save!
comment_80.save!
comment_81.save!
comment_82.save!
comment_83.save!
comment_84.save!
comment_85.save!
comment_86.save!
comment_87.save!
comment_88.save!
comment_89.save!
comment_90.save!
comment_91.save!
comment_92.save!
comment_93.save!
comment_94.save!
comment_95.save!
comment_96.save!
comment_97.save!
comment_98.save!
comment_99.save!
comment_100.save!
comment_101.save!
comment_102.save!
comment_103.save!
comment_104.save!
comment_105.save!
comment_106.save!
comment_107.save!
comment_108.save!
comment_109.save!
comment_110.save!
comment_111.save!
comment_112.save!
comment_113.save!
comment_114.save!
comment_115.save!
comment_116.save!
comment_117.save!
comment_118.save!
comment_119.save!
comment_120.save!
comment_121.save!
comment_122.save!
comment_123.save!
comment_124.save!
comment_125.save!
comment_126.save!
comment_127.save!
comment_128.save!
comment_129.save!
comment_130.save!
comment_131.save!
comment_132.save!
comment_133.save!
comment_134.save!
comment_135.save!
comment_136.save!
comment_137.save!
comment_138.save!
comment_139.save!
comment_140.save!
comment_141.save!
comment_142.save!
comment_143.save!
comment_144.save!
comment_145.save!
comment_146.save!
comment_147.save!
comment_148.save!
comment_149.save!
comment_150.save!
comment_151.save!
comment_152.save!
comment_153.save!
comment_154.save!
comment_155.save!
comment_156.save!
comment_157.save!
comment_158.save!
comment_159.save!
comment_160.save!
comment_161.save!
comment_162.save!
comment_163.save!
comment_164.save!
comment_165.save!
comment_166.save!
comment_167.save!
comment_168.save!
comment_169.save!
comment_170.save!
comment_171.save!
comment_172.save!
comment_173.save!
comment_174.save!
comment_175.save!
comment_176.save!
comment_177.save!


### save likes

def like_photo(photo_id, liker_id)
  like = Like.new({
    liker_id: liker_id,
    photo_id: photo_id
  })
  like.save!
end

saved_photos = Photo.all
saved_profiles = Profile.all

saved_photos.each do |photo| 
  num_likes = rand(0..10)
  prev_profile_ids = []
  num_likes.times do 
    profile = saved_profiles[rand(0...saved_profiles.length)]
    if prev_profile_ids.exclude?(profile.id)
      prev_profile_ids.push(profile.id)
      like_photo(photo.id, profile.id)
    else
      next
    end
  end
end

### end