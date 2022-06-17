require 'faker'

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

profile_guest.avatar.attach(io: File.open(
  image_url('guest_avatar.webp'), filename: 'guest_avatar.webp'))

profile_jacob.avatar.attach(io: File.open(
  image_url('jacob_avatar.jpg'), filename: 'jacob_avatar.jpg'))

profile_abstract.avatar.attach(io: File.open(
  image_url('avatar_1.png'), filename: 'abstract_avatar.png'))

profile_animals.avatar.attach(io: File.open(
  image_url('avatar_2.png'), filename: 'animal_avatar.png'))

profile_chocolate.avatar.attach(io: File.open(
  image_url('avatar_3.png'), filename: 'choco_avatar.png'))

profile_music.avatar.attach(io: File.open(
  image_url('avatar_4.png'), filename: 'music_avatar.png'))

profile_sports.avatar.attach(io: File.open(
  image_url('avatar_5.png'), filename: 'sport_avatar.png'))

profile_8.avatar.attach(io: File.open(
  image_url('avatar_6.png'), filename: '8_avatar.png'))

profile_9.avatar.attach(io: File.open(
  image_url('avatar_7.png'), filename: '9_avatar.png'))

profile_10.avatar.attach(io: File.open(
  image_url('avatar_8.png'), filename: '10_avatar.png'))

profile_11.avatar.attach(io: File.open(
  image_url('avatar_9.png'), filename: '11_avatar.png'))

profile_12.avatar.attach(io: File.open(
  image_url('avatar_10.png'), filename: '12_avatar.png'))

profile_13.avatar.attach(io: File.open(
  image_url('avatar_11.png'), filename: '13_avatar.png'))

profile_14.avatar.attach(io: File.open(
  image_url('avatar_12.png'), filename: '14_avatar.png'))

profile_15.avatar.attach(io: File.open(
  image_url('avatar_13.png'), filename: '15_avatar.png'))



################################################################################

## cover photos

profile_guest.cover.attach(io: File.open(
  image_url('minimalist_cover.jpg'), filename: 'guest_cover.jpg'))
profile_jacob.cover.attach(io: File.open(
  image_url('jacob_cover.jpg'), filename: 'malibu.jpg'))
profile_abstract.cover.attach(io: File.open(
  image_url('abstract_cover.jpg'), filename: 'abstract_cover'))
profile_animals.cover.attach(io: File.open(
  image_url('animals_cover.jpg'), filename: 'animals_cover.jpg'))
profile_chocolate.cover.attach(io: File.open(
  image_url('chocolate_cover.jpg'), filename: 'chocolate_cover.jpg'))
profile_music.cover.attach(io: File.open(
  image_url('music_cover.jpg'), filename: 'music_cover.jpg'))
profile_sports.cover.attach(io: File.open(
  image_url('sports_cover.jpg'), filename: 'sports_cover.jpg'))

profile_8.cover.attach(io: File.open(
  image_url('8_cover.jpg'), filename: '8_cover.jpg'))
profile_9.cover.attach(io: File.open(
  image_url('9_cover.jpg'), filename: '9_cover.jpg'))
profile_10.cover.attach(io: File.open(
  image_url('10_cover.jpg'), filename: '10_cover.jpg'))
profile_11.cover.attach(io: File.open(
  image_url('11_cover.jpg'), filename: '11_cover.jpg'))
profile_12.cover.attach(io: File.open(
  image_url('12_cover.jpg'), filename: '12_cover.jpg'))
profile_13.cover.attach(io: File.open(
  image_url('13_cover.jpg'), filename: '13_cover.jpg'))
profile_14.cover.attach(io: File.open(
  image_url('14_cover.jpg'), filename: '14_cover.jpg'))
profile_15.cover.attach(io: File.open(
  image_url('15_cover.jpg'), filename: '15_cover.jpg'))


# save profiles one last time after attaching images

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
photo_1_saved = Photo.new(photo_1)
photo_1_saved.photo.attach(io: File.open(image_url('architecture-building-black-and-white-staircase-staircase-steps-spiral-london-spiral-staircase_t20_Amw31y.jpg'), filename: 'minimal_1.jpg'))
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
photo_2_saved = Photo.new(photo_2)
photo_2_saved.photo.attach(io: File.open(image_url('big-surf-off-the-coast-of-southern-africa_t20_K6EEyE.jpg'), filename: 'minimal_2.jpg'))
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
photo_3_saved = Photo.new(photo_3)
photo_3_saved.photo.attach(io: File.open(image_url('cabalgata-en-el-mar_t20_gLlABx.jpg'), filename: 'minimal_3.jpg'))
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
photo_4_saved = Photo.new(photo_4)
photo_4_saved.photo.attach(io: File.open(image_url('capture-light_t20_ZnBxYY.jpg'), filename: 'minimal_4.jpg'))
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
photo_5_saved = Photo.new(photo_5)
photo_5_saved.photo.attach(io: File.open(image_url('cat-cat-s-eye-minimal-minimalist-minimalistic-minimalism_t20_7yN4Kk.jpg'), filename: 'minimal_5.jpg'))
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
photo_6_saved = Photo.new(photo_6)
photo_6_saved.photo.attach(io: File.open(image_url('city-architecture-bridge-uk-landmark-london-fog-monochrome-mist-millennium-bridge_t20_A321Py.jpg'), filename: 'minimal_6.jpg'))
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
photo_7_saved = Photo.new(photo_7)
photo_7_saved.photo.attach(io: File.open(image_url('city-architecture-people-business-adult-sign-hand-iron-minimal-desktop_t20_kRRmzE.jpg'), filename: 'minimal_7.jpg'))
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
photo_8_saved = Photo.new(photo_8)
photo_8_saved.photo.attach(io: File.open(image_url('door-outside-that-leads-to-the-ocean_t20_ZJJRn0.jpg'), filename: 'minimal_8.jpg'))
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
photo_9_saved = Photo.new(photo_9)
photo_9_saved.photo.attach(io: File.open(image_url('frame-mock-up-canvas-white-poster-blank-template-background-wall-design-mock-up-mockup-empty-copy_t20_nLZw6P.jpg'), filename: 'minimal_9.jpg'))
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
photo_10_saved = Photo.new(photo_10)
photo_10_saved.photo.attach(io: File.open(image_url('green-spiral-vine-macro-curly-spirals-minimal-green-plants-natural-spirals-plant-spirals_t20_kz3kkX.jpg'), filename: 'minimal_10.jpg'))
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
photo_11_saved = Photo.new(photo_11)
photo_11_saved.photo.attach(io: File.open(image_url('minimal_t20_PJjN97.jpg'), filename: 'minimal_11.jpg'))
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
photo_12_saved = Photo.new(photo_12)
photo_12_saved.photo.attach(io: File.open(image_url('minimalistic-orange-corridor-with-arched-ceiling-in-egyptian-architecture_t20_4230d2.jpg'), filename: 'minimal_12.jpg'))
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
photo_13_saved = Photo.new(photo_13)
photo_13_saved.photo.attach(io: File.open(image_url('minimalistic-vibe_t20_VW10N1.jpg'), filename: 'minimal_13.jpg'))
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
photo_14_saved = Photo.new(photo_14)
photo_14_saved.photo.attach(io: File.open(image_url('nature-fog-bench-dock-minimalism-neutrals_t20_onn1E8.jpg'), filename: 'minimal_14.jpg'))
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
photo_15_saved = Photo.new(photo_15)
photo_15_saved.photo.attach(io: File.open(image_url('nature-outdoors-sky-night-adventure-male-landscape-star-impact-earth-milky-way-minimalism-epic_t20_nR7L9A.jpg'), filename: 'minimal_15.jpg'))
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
guest_photo_16_saved = Photo.new(guest_photo_16)
guest_photo_16_saved.photo.attach(io: File.open(image_url('nature-sky-sunset-mountain-mountain-landscape-extreme-sports-mountains-paragliding-neutral-airy_t20_nRk8Kn.jpg'), filename: 'minimal_16.jpg'))
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
guest_photo_17_saved = Photo.new(guest_photo_17)
guest_photo_17_saved.photo.attach(io: File.open(image_url('scandinavian-modern-white-cozy-eco-interior-white-table-and-mirror-in-bed-room-minimalism-cactus_t20_Jzvvp4.jpg'), filename: 'minimal_17.jpg'))
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
guest_photo_18_saved = Photo.new(guest_photo_18)
guest_photo_18_saved.photo.attach(io: File.open(image_url('silhouettes-of-mountains-in-the-mist-and-bird-flying-light-blue-color-minimal-landscape-adventure_t20_lLlXvQ.jpg'), filename: 'minimal_18.jpg'))
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
guest_photo_19_saved = Photo.new(guest_photo_19)
guest_photo_19_saved.photo.attach(io: File.open(image_url('sky-architecture-sunset-yellow-window-love-edifice-apartment_t20_8gZPwj.jpg'), filename: 'minimal_19.jpg'))
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
guest_photo_20_saved = Photo.new(guest_photo_20)
guest_photo_20_saved.photo.attach(io: File.open(image_url('summer-purple-lavender-running-freedom-girl-flowers-lavender-farm_t20_jjlOVd.jpg'), filename: 'minimal_20.jpg'))
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
guest_photo_21_saved = Photo.new(guest_photo_21)
guest_photo_21_saved.photo.attach(io: File.open(image_url('travel-landscape-desert-dunes-orange-color-sand-dunes-minimalism-neutral-colors-tiny-human_t20_E0GePJ.jpg'), filename: 'minimal_21.jpg'))
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
guest_photo_22_saved = Photo.new(guest_photo_22)
guest_photo_22_saved.photo.attach(io: File.open(image_url('windows-on-windows_t20_knrmR4.jpg'), filename: 'minimal_22.jpg'))
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
photo_16_saved = Photo.new(photo_16)
photo_16_saved.photo.attach(io: File.open(image_url('Benowitz Jacob - Eyes.jpg'), filename: 'jacob_16.jpg'))
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
photo_17_saved = Photo.new(photo_17)
photo_17_saved.photo.attach(io: File.open(image_url('Benowitz Jacob - LampSkyColor.jpg'), filename: 'jacob_17.jpg'))
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
photo_18_saved = Photo.new(photo_18)
photo_18_saved.photo.attach(io: File.open(image_url('DSC_Creative_0214.jpg'), filename: 'jacob_18.jpg'))
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
photo_18_1_saved = Photo.new(photo_18_1)
photo_18_1_saved.photo.attach(io: File.open(image_url('DSC_Creative_0232.jpg'), filename: 'jacob_18_1.jpg'))
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
photo_19_saved = Photo.new(photo_19)
photo_19_saved.photo.attach(io: File.open(image_url('IMG_1453.jpg'), filename: 'jacob_19.jpg'))
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
photo_20_saved = Photo.new(photo_20)
photo_20_saved.photo.attach(io: File.open(image_url('IMG_9052.jpg'), filename: 'jacob_20.jpg'))
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
photo_21_saved = Photo.new(photo_21)
photo_21_saved.photo.attach(io: File.open(image_url('IMG_Creative_0443.jpg'), filename: 'jacob_21.jpg'))
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
photo_22_saved = Photo.new(photo_22)
photo_22_saved.photo.attach(io: File.open(image_url('IMG_Creative_0794.jpg'), filename: 'jacob_22.jpg'))
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
photo_23_saved = Photo.new(photo_23)
photo_23_saved.photo.attach(io: File.open(image_url('IMG_Creative_0885.jpg'), filename: 'jacob_23.jpg'))
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
photo_24_saved = Photo.new(photo_24)
photo_24_saved.photo.attach(io: File.open(image_url('IMG_Creative_2774.jpg'), filename: 'jacob_24.jpg'))
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
photo_25_saved = Photo.new(photo_25)
photo_25_saved.photo.attach(io: File.open(image_url('Sunset.jpg'), filename: 'jacob_25.jpg'))
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
photo_26_saved = Photo.new(photo_26)
photo_26_saved.photo.attach(io: File.open(image_url('Upside.jpg'), filename: 'jacob_26.jpg'))
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
jacob_photo_27_saved = Photo.new(jacob_photo_27)
jacob_photo_27_saved.photo.attach(io: File.open(image_url('IMG_Creative_2789.jpg'), filename: 'jacob_27.jpg'))
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
jacob_photo_28_saved = Photo.new(jacob_photo_28)
jacob_photo_28_saved.photo.attach(io: File.open(image_url('IMG_Creative_6565.jpg'), filename: 'jacob_28.jpg'))
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
jacob_photo_29_saved = Photo.new(jacob_photo_29)
jacob_photo_29_saved.photo.attach(io: File.open(image_url('IMG_Creative_6576.jpg'), filename: 'jacob_29.jpg'))
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
jacob_photo_30_saved = Photo.new(jacob_photo_30)
jacob_photo_30_saved.photo.attach(io: File.open(image_url('JacobBenowitz_Contact_Fallback.jpg'), filename: 'jacob_30.jpg'))
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
jacob_photo_31_saved = Photo.new(jacob_photo_31)
jacob_photo_31_saved.photo.attach(io: File.open(image_url('JacobBenowitz_Cove_Fallback.jpg'), filename: 'jacob_31.jpg'))
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
jacob_photo_32_saved = Photo.new(jacob_photo_32)
jacob_photo_32_saved.photo.attach(io: File.open(image_url('JacobBenowitz_Home_Fallback.jpg'), filename: 'jacob_32.jpg'))
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
photo_27_saved = Photo.new(photo_27)
photo_27_saved.photo.attach(io: File.open(image_url('abstract-background_t20_E4387Z.jpg'), filename: 'abstract_27.jpg'))
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
photo_28_saved = Photo.new(photo_28)
photo_28_saved.photo.attach(io: File.open(image_url('abstract-net-museum-lines-threads-polygon-cobweb-contemporary-art-pentagon-geometries_t20_JJVOvl.jpg'), filename: 'abstract_28.jpg'))
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
photo_28_1_saved = Photo.new(photo_28_1)
photo_28_1_saved.photo.attach(io: File.open(image_url('acrylic-abstract-art_t20_RJokzv.jpg'), filename: 'abstract_28_1.jpg'))
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
photo_29_saved = Photo.new(photo_29)
photo_29_saved.photo.attach(io: File.open(image_url('ferris-wheel-upside-down-evening-neon-colors-attraction-carousel-crystal-ball_t20_rB8vBo.jpg'), filename: 'abstract_29.jpg'))
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
photo_30_saved = Photo.new(photo_30)
photo_30_saved.photo.attach(io: File.open(image_url('motions-3-3_t20_BAP4Nv.jpg'), filename: 'abstract_30.jpg'))
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
photo_31_saved = Photo.new(photo_31)
photo_31_saved.photo.attach(io: File.open(image_url('nominated-digital-experiment_t20_XQNjXR.jpg'), filename: 'abstract_31.jpg'))
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
abs_photo_32_saved = Photo.new(abs_photo_32)
abs_photo_32_saved.photo.attach(io: File.open(image_url('people-come-and-go-that-s-life_t20_dzRGY9.jpg'), filename: 'abstract_32.jpg'))
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
abs_photo_33_saved = Photo.new(abs_photo_33)
abs_photo_33_saved.photo.attach(io: File.open(image_url('reflection-pattern-sphere-abstract-bubble-texture-macro-creative-closeup-soap-bubble_t20_OJevlE.jpg'), filename: 'abstract_33.jpg'))
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
abs_photo_34_saved = Photo.new(abs_photo_34)
abs_photo_34_saved.photo.attach(io: File.open(image_url('the-roof-of-the-building-esplanade-theatres-on-the-bay_t20_kzAoRp.jpg'), filename: 'abstract_34.jpg'))
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
abs_photo_35_saved = Photo.new(abs_photo_35)
abs_photo_35_saved.photo.attach(io: File.open(image_url('through-tiny-lens_t20_loK6db.jpg'), filename: 'abstract_35.jpg'))
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
abs_photo_36_saved = Photo.new(abs_photo_36)
abs_photo_36_saved.photo.attach(io: File.open(image_url('urban-scene-silhouette-jumping-street-abstract-jump-darkness-street-photography-lights-and-shadows_t20_wgmr2m.jpg'), filename: 'abstract_36.jpg'))
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
abs_photo_37_saved = Photo.new(abs_photo_37)
abs_photo_37_saved.photo.attach(io: File.open(image_url('warm-city-1-3_t20_aO1a6Q.jpg'), filename: 'abstract_37.jpg'))
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
photo_32_saved = Photo.new(photo_32)
photo_32_saved.photo.attach(io: File.open(image_url('_t20_kLZ3zr.jpg'), filename: 'animals_32.jpg'))
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
photo_33_saved = Photo.new(photo_33)
photo_33_saved.photo.attach(io: File.open(image_url('_t20_YamEaR.jpg'), filename: 'animals_33.jpg'))
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
photo_34_saved = Photo.new(photo_34)
photo_34_saved.photo.attach(io: File.open(image_url('a-monkey-sat-in-a-human-pose-in-loro-park-tenerife_t20_98LvYA.jpg'), filename: 'animals_34.jpg'))
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
photo_36_saved = Photo.new(photo_36)
photo_36_saved.photo.attach(io: File.open(image_url('animal-animal-nature-animals-green-wild-exotic-fox-wild-nature-foxy_t20_rL13QJ.jpg'), filename: 'animals_36.jpg'))
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
photo_37_saved = Photo.new(photo_37)
photo_37_saved.photo.attach(io: File.open(image_url('animal-nature-nature-animals-animals-wild-exotic-owls_t20_XNVzor.jpg'), filename: 'animals_37.jpg'))
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
photo_38_saved = Photo.new(photo_38)
photo_38_saved.photo.attach(io: File.open(image_url('happy-elephant_t20_kLWQ24.jpg'), filename: 'animals_38.jpg'))
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
photo_39_saved = Photo.new(photo_39)
photo_39_saved.photo.attach(io: File.open(image_url('humans-in-monkeys-body-everyone-is-a-human-kind-just-living-in-different-dimension-and-different-life_t20_yne8zp.jpg'), filename: 'animals_39.jpg'))
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
photo_40_saved = Photo.new(photo_40)
photo_40_saved.photo.attach(io: File.open(image_url('red-fox-having-a-good-stretch-in-the-dunes-around-kijkduin-in-the-hague-netherlands-details-of-fur_t20_mLZJx3.jpg'), filename: 'animals_40.jpg'))
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
animal_photo_41_saved = Photo.new(animal_photo_41)
animal_photo_41_saved.photo.attach(io: File.open(image_url('reindeers-in-a-winter-landscape-with-a-glow-on-snowy-mountains-the-reindeer-looks-directly-into-the_t20_3d2j4o.jpg'), filename: 'animals_41.jpg'))
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
animal_photo_42_saved = Photo.new(animal_photo_42)
animal_photo_42_saved.photo.attach(io: File.open(image_url('the-baby-monkey-sits-on-a-stone-and-eats-tropical-animals-in-their-natural-habitat_t20_0X38rw.jpg'), filename: 'animals_42.jpg'))
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
animal_photo_43_saved = Photo.new(animal_photo_43)
animal_photo_43_saved.photo.attach(io: File.open(image_url('together-forever_t20_1J8k41.jpg'), filename: 'animals_43.jpg'))
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
animal_photo_44_saved = Photo.new(animal_photo_44)
animal_photo_44_saved.photo.attach(io: File.open(image_url('twenty20_600e29d6-776e-479a-b0e6-7dce00962a7c.jpg'), filename: 'animals_44.jpg'))
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
animal_photo_45_saved = Photo.new(animal_photo_45)
animal_photo_45_saved.photo.attach(io: File.open(image_url('wild-beautiful-giant-iguana-reminding-prehistoric-reptiles-close-up-portrait_t20_kL86B4.jpg'), filename: 'animals_45.jpg'))
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
photo_40_choc_saved = Photo.new(photo_40_choc)
photo_40_choc_saved.photo.attach(io: File.open(image_url('chocolate-brownie-batter-on-beaters_t20_yvjYVx.jpg'), filename: 'chocolate_40_choc.jpg'))
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
photo_41_saved = Photo.new(photo_41)
photo_41_saved.photo.attach(io: File.open(image_url('chocolate-cake_t20_yvZNpx.jpg'), filename: 'chocolate_41.jpg'))
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
photo_42_saved = Photo.new(photo_42)
photo_42_saved.photo.attach(io: File.open(image_url('chocolate-chia-seed-pudding_t20_PoPbdR.jpg'), filename: 'chocolate_42.jpg'))
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
photo_43_saved = Photo.new(photo_43)
photo_43_saved.photo.attach(io: File.open(image_url('chocolate-curls_t20_4ENQOy.jpg'), filename: 'chocolate_43.jpg'))
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
photo_44_saved = Photo.new(photo_44)
photo_44_saved.photo.attach(io: File.open(image_url('chocolate-donuts-with-sprinkles_t20_e3nJQW.jpg'), filename: 'chocolate_44.jpg'))
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
photo_45_saved = Photo.new(photo_45)
photo_45_saved.photo.attach(io: File.open(image_url('chocolate-truffles_t20_JlPK14.jpg'), filename: 'chocolate_45.jpg'))
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
photo_46_saved = Photo.new(photo_46)
photo_46_saved.photo.attach(io: File.open(image_url('chocolates_t20_1Je2dx.jpg'), filename: 'chocolate_46.jpg'))
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
photo_47_saved = Photo.new(photo_47)
photo_47_saved.photo.attach(io: File.open(image_url('cocoa-powder-spilled-out-on-a-white-table_t20_kjEgYE.jpg'), filename: 'chocolate_47.jpg'))
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
chocolate_photo_48_saved = Photo.new(chocolate_photo_48)
chocolate_photo_48_saved.photo.attach(io: File.open(image_url('marzipan-balls_t20_rKv67g.jpg'), filename: 'chocolate_48.jpg'))
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
chocolate_photo_49_saved = Photo.new(chocolate_photo_49)
chocolate_photo_49_saved.photo.attach(io: File.open(image_url('my-idea-of-heaven_t20_pld4n8.jpg'), filename: 'chocolate_49.jpg'))
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
chocolate_photo_50_saved = Photo.new(chocolate_photo_50)
chocolate_photo_50_saved.photo.attach(io: File.open(image_url('photography-flower-sun-travel-sea-yellow-beach-light-vacations-pattern-sphere-still-life-business-my_t20_dpe4XR.jpg'), filename: 'chocolate_50.jpg'))
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
chocolate_photo_51_saved = Photo.new(chocolate_photo_51)
chocolate_photo_51_saved.photo.attach(io: File.open(image_url('raw-dessert_t20_YXx6VW.jpg'), filename: 'chocolate_51.jpg'))
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
chocolate_photo_52_saved = Photo.new(chocolate_photo_52)
chocolate_photo_52_saved.photo.attach(io: File.open(image_url('the-right-cake_t20_EPgrWJ.jpg'), filename: 'chocolate_52.jpg'))
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
chocolate_photo_53_saved = Photo.new(chocolate_photo_53)
chocolate_photo_53_saved.photo.attach(io: File.open(image_url('tiramis_t20_yvAYoO.jpg'), filename: 'chocolate_53.jpg'))
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
chocolate_photo_54_saved = Photo.new(chocolate_photo_54)
chocolate_photo_54_saved.photo.attach(io: File.open(image_url('white-chocolate-with-hazelnuts_t20_bkjGzg.jpg'), filename: 'chocolate_54.jpg'))
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
chocolate_photo_55_saved = Photo.new(chocolate_photo_55)
chocolate_photo_55_saved.photo.attach(io: File.open(image_url('white-rose_t20_7OYOKN.jpg'), filename: 'chocolate_55.jpg'))
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
photo_48_saved = Photo.new(photo_48)
photo_48_saved.photo.attach(io: File.open(image_url('a-guitarist-with-long-hair-performing-at-a-concert-with-pyro_t20_vLVAaG.jpg'), filename: 'music_48.jpg'))
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
photo_49_saved = Photo.new(photo_49)
photo_49_saved.photo.attach(io: File.open(image_url('behind-the-djs_t20_pY9gdO.jpg'), filename: 'music_49.jpg'))
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
photo_50_saved = Photo.new(photo_50)
photo_50_saved.photo.attach(io: File.open(image_url('close-up-drum-sticks-drumming-hit-beat-rhythm-on-drum-surface-with-splash-water-drops_t20_QJQ99y.jpg'), filename: 'music_50.jpg'))
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
photo_51_saved = Photo.new(photo_51)
photo_51_saved.photo.attach(io: File.open(image_url('defocus-young-woman-playing-guitar-on-sunset-in-autumn-field-candid-silhouette-woman-in-hat-chill_t20_NlWYyQ.jpg'), filename: 'music_51.jpg'))
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
photo_52_saved = Photo.new(photo_52)
photo_52_saved.photo.attach(io: File.open(image_url('dnepropetrovsk-ukraine-04-05-2017-a-musician-on-a-city-street-after-a-successful-concert_t20_WJEmmz.jpg'), filename: 'music_52.jpg'))
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
photo_53_saved = Photo.new(photo_53)
photo_53_saved.photo.attach(io: File.open(image_url('happy-accordion-player_t20_rorAaJ.jpg'), filename: 'music_53.jpg'))
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
photo_54_saved = Photo.new(photo_54)
photo_54_saved.photo.attach(io: File.open(image_url('illuminated-neon-words-on-the-wall_t20_yRbZAL.jpg'), filename: 'music_54.jpg'))
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
photo_55_saved = Photo.new(photo_55)
photo_55_saved.photo.attach(io: File.open(image_url('music_t20_mxbEml.jpg'), filename: 'music_55.jpg'))
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
photo_56_saved = Photo.new(photo_56)
photo_56_saved.photo.attach(io: File.open(image_url('music-concert-musician-drummer-drums-live-drummer_t20_4dmEEl.jpg'), filename: 'music_56.jpg'))
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
music_photo_57_saved = Photo.new(music_photo_57)
music_photo_57_saved.photo.attach(io: File.open(image_url('music-music-musical-instrument-classic-playing-music-saksophone_t20_K8Lrk9.jpg'), filename: 'music_57.jpg'))
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
music_photo_58_saved = Photo.new(music_photo_58)
music_photo_58_saved.photo.attach(io: File.open(image_url('music-musical-instrument-musician-music-festival-woman-play-sound-musical-instruments-harp_t20_pW9lvk.jpg'), filename: 'music_58.jpg'))
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
music_photo_59_saved = Photo.new(music_photo_59)
music_photo_59_saved.photo.attach(io: File.open(image_url('outdoors-sunset-beach-beach-decoration-celebration-music-concert-party-party-craft-chill-vibes_t20_9JAlwB.jpg'), filename: 'music_59.jpg'))
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
music_photo_60_saved = Photo.new(music_photo_60)
music_photo_60_saved.photo.attach(io: File.open(image_url('piano-hands-woman-piano-keys-pianist-playing-piano-playing-the-piano-vintage-piano_t20_LX7Jxo.jpg'), filename: 'music_60.jpg'))
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
music_photo_61_saved = Photo.new(music_photo_61)
music_photo_61_saved.photo.attach(io: File.open(image_url('playing-the-mandolin_t20_P3WEmR.jpg'), filename: 'music_61.jpg'))
music_photo_61_saved.save!

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
music_photo_62_saved = Photo.new(music_photo_62)
music_photo_62_saved.photo.attach(io: File.open(image_url('selective-focus-music-acoustic-guitar-guitar-musical-instrument-musician-acoustic-musicians_t20_vOvpXE.jpg'), filename: 'music_62.jpg'))
music_photo_62_saved.save!

comment_114 = Comment.new({
  profile_id: profile_8.id,
  photo_id: music_photo_62_saved.id,
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
music_photo_62_saved = Photo.new(music_photo_62)
music_photo_62_saved.photo.attach(io: File.open(image_url('summer-hand-music-music-antique-vintage-hands-hands-retro-closeup-vinyl-dj-old-school-putting_t20_yp6aa2.jpg'), filename: 'music_62.jpg'))
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
music_photo_63_saved = Photo.new(music_photo_63)
music_photo_63_saved.photo.attach(io: File.open(image_url('two-young-musicians-playing-classic-digital-piano-at-home-during-online-concert-at-home_t20_om9AkW.jpg'), filename: 'music_63.jpg'))
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
music_photo_64_saved = Photo.new(music_photo_64)
music_photo_64_saved.photo.attach(io: File.open(image_url('window-guitar-natural-light-morning-light_t20_PJnaJJ.jpg'), filename: 'music_64.jpg'))
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
photo_57_saved = Photo.new(photo_57)
photo_57_saved.photo.attach(io: File.open(image_url('adrenaline-trail-dirt-man-leg-boot-biker-racer-moto-active-cross-enduro-motorcyclist-boots_t20_KArpK1.jpg'), filename: 'sports_57.jpg'))
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
photo_58_saved = Photo.new(photo_58)
photo_58_saved.photo.attach(io: File.open(image_url('adventure-sports-sports-extreme-sports-action-adrenaline-adventurous-watersports-flyboard_t20_g1bEzz.jpg'), filename: 'sports_58.jpg'))
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
photo_59_saved = Photo.new(photo_59)
photo_59_saved.photo.attach(io: File.open(image_url('adventure-surfing-sports-extreme-sports-extreme-sports-water-sports-life-surf-adrenaline-adventurous_t20_JokERk.jpg'), filename: 'sports_59.jpg'))
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
photo_60_saved = Photo.new(photo_60)
photo_60_saved.photo.attach(io: File.open(image_url('backflip-off-motorbike_t20_eVnelb.jpg'), filename: 'sports_60.jpg'))
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
photo_61_saved = Photo.new(photo_61)
photo_61_saved.photo.attach(io: File.open(image_url('bmx-freestyle_t20_GREW1R.jpg'), filename: 'sports_61.jpg'))
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
photo_62_saved = Photo.new(photo_62)
photo_62_saved.photo.attach(io: File.open(image_url('dune-rider_t20_1WPPev.jpg'), filename: 'sports_62.jpg'))
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
photo_63_saved = Photo.new(photo_63)
photo_63_saved.photo.attach(io: File.open(image_url('going-down_t20_Noelrp.jpg'), filename: 'sports_63.jpg'))
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
photo_64_saved = Photo.new(photo_64)
photo_64_saved.photo.attach(io: File.open(image_url('hot-summer-days-are-just-perfect-for-a-river-cool-down_t20_8ORbGa.jpg'), filename: 'sports_64.jpg'))
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
photo_65_saved = Photo.new(photo_65)
photo_65_saved.photo.attach(io: File.open(image_url('jerrod-skorupski-pontiac-14_t20_VodWQ8.jpg'), filename: 'sports_65.jpg'))
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
photo_66_saved = Photo.new(photo_66)
photo_66_saved.photo.attach(io: File.open(image_url('KokOOx_t20_KokOOx.jpg'), filename: 'sports_66.jpg'))
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
photo_67_saved = Photo.new(photo_67)
photo_67_saved.photo.attach(io: File.open(image_url('MQmDKe_t20_d12GoB.jpg'), filename: 'sports_67.jpg'))
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
photo_68_saved = Photo.new(photo_68)
photo_68_saved.photo.attach(io: File.open(image_url('nominated-austria-kaprun_t20_VWNpQk.jpg'), filename: 'sports_68.jpg'))
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
photo_69_saved = Photo.new(photo_69)
photo_69_saved.photo.attach(io: File.open(image_url('outdoors-people-sport-sports-extreme-sports-motorcycle-racing-race-motorbike-outdoor-activity_t20_QKZobb.jpg'), filename: 'sports_69.jpg'))
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
photo_70_saved = Photo.new(photo_70)
photo_70_saved.photo.attach(io: File.open(image_url('outdoors-winter-cold-snow-adventure-adventure-mountain-sport-recreation-action-outdoor-skier_t20_3Q7P3y.jpg'), filename: 'sports_70.jpg'))
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
photo_71_saved = Photo.new(photo_71)
photo_71_saved.photo.attach(io: File.open(image_url('paragliding-in-the-mountains-extreme-sports-hang-glider-paragliding-sport-extreme-glider-hang-flight_t20_YE62a4.jpg'), filename: 'sports_71.jpg'))
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
photo_72_saved = Photo.new(photo_72)
photo_72_saved.photo.attach(io: File.open(image_url('sport-freedom-fly-blue-sky-paragliders-tandem-bucket-list-sunrise-sunset-skydiving-parachuting_t20_XNRPX3.jpg'), filename: 'sports_72.jpg'))
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
photo_73_saved = Photo.new(photo_73)
photo_73_saved.photo.attach(io: File.open(image_url('sport-surfing-waves-surf-extreme_t20_8OJe9g.jpg'), filename: 'sports_73.jpg'))
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
photo_74_saved = Photo.new(photo_74)
photo_74_saved.photo.attach(io: File.open(image_url('twenty20_f345d99e-cfaa-4ce5-99aa-3329c8ee332a.jpg'), filename: 'sports_74.jpg'))
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
photo_75_saved = Photo.new(photo_75)
photo_75_saved.photo.attach(io: File.open(image_url('view-from-above-flying-happiness-girl-above-blue-sky-paradise-happy-paragliding-happy-girl_t20_e9Z9ko.jpg'), filename: 'sports_75.jpg'))
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
photo_76_saved = Photo.new(photo_76)
photo_76_saved.photo.attach(io: File.open(image_url('wave-ocean-surf-caribbean-surfer-extreme-sport-ocean-waves-seaspray-sunnyseasand-bvi-apple-bay_t20_rLvzlX.jpg'), filename: 'sports_76.jpg'))
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
general_01_saved = Photo.new(general_01)
general_01_saved.photo.attach(io: File.open(image_url('beautiful-jellyfish-or-medusa-in-the-neon-light-in-aquarium-in-new-opened-prague-medusarium-czech_t20_GJEL7E.jpg'), filename: 'general_01.jpg'))
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
general_02_saved = Photo.new(general_02)
general_02_saved.photo.attach(io: File.open(image_url('bike-in-urban-area_t20_ZV18zj.jpg'), filename: 'general_02.jpg'))
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
general_03_saved = Photo.new(general_03)
general_03_saved.photo.attach(io: File.open(image_url('bright-and-colorful-jump_t20_B80RmO.jpg'), filename: 'general_03.jpg'))
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
general_04_saved = Photo.new(general_04)
general_04_saved.photo.attach(io: File.open(image_url('chifogo_t20_dxRlJA.jpg'), filename: 'general_04.jpg'))
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
general_05_saved = Photo.new(general_05)
general_05_saved.photo.attach(io: File.open(image_url('city-bridge-woman-at-the-bridge-winter-snow-glasses-weather-eyes-hands-scarf-gloves-city-life-style_t20_Kvn8n9.jpg'), filename: 'general_05.jpg'))
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
general_06_saved = Photo.new(general_06)
general_06_saved.photo.attach(io: File.open(image_url('city-street-vietnam-street-photography-hanoi-vietnam_t20_lxmznZ.jpg'), filename: 'general_06.jpg'))
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
general_07_saved = Photo.new(general_07)
general_07_saved.photo.attach(io: File.open(image_url('female-hand-with-palm-leaves-on-a-black-dark-background-dark-light-stylish-beauty-composition_t20_rRBBgw.jpg'), filename: 'general_07.jpg'))
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
general_08_saved = Photo.new(general_08)
general_08_saved.photo.attach(io: File.open(image_url('fresh-plant-minimal-background_t20_x27K1Q.jpg'), filename: 'general_08.jpg'))
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
general_09_saved = Photo.new(general_09)
general_09_saved.photo.attach(io: File.open(image_url('jumping-for-joy-in-canada_t20_0AEgkV.jpg'), filename: 'general_09.jpg'))
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
general_10_saved = Photo.new(general_10)
general_10_saved.photo.attach(io: File.open(image_url('monkeys-in-ubud-monkey-forest-bali_t20_kRzb3R.jpg'), 
filename: 'general_10.jpg'))
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
general_11_saved = Photo.new(general_11)
general_11_saved.photo.attach(io: File.open(image_url('outdoors-adventure-summer-surfboard-surfing-recreation-extreme-sports-water-sports-outdoor-surf_t20_GJGOQo.jpg'), filename: 'general_11.jpg'))
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
general_12_saved = Photo.new(general_12)
general_12_saved.photo.attach(io: File.open(image_url('palm-leave-from-real-close-abstract-texture-with-pastel-colors_t20_2JPnKK.jpg'), filename: 'general_12.jpg'))
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
general_13_saved = Photo.new(general_13)
general_13_saved.photo.attach(io: File.open(image_url('QQgekN_t20_mvLBQn.jpg'), filename: 'general_13.jpg'))
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
general_14_saved = Photo.new(general_14)
general_14_saved.photo.attach(io: File.open(image_url('reflections_t20_XQ84wV.jpg'), filename: 'general_14.jpg'))
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
general_15_saved = Photo.new(general_15)
general_15_saved.photo.attach(io: File.open(image_url('sea-turtles_t20_98OYYY.jpg'), filename: 'general_15.jpg'))
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
general_16_saved = Photo.new(general_16)
general_16_saved.photo.attach(io: File.open(image_url('skateboard-urban-landscape-street-photography-big-city-city-background-people-using-mobile_t20_wLPeOm.jpg'), filename: 'general_16.jpg'))
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
general_17_saved = Photo.new(general_17)
general_17_saved.photo.attach(io: File.open(image_url('toronto-city_t20_6lAdEo.jpg'), filename: 'general_17.jpg'))
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
general_18_saved = Photo.new(general_18)
general_18_saved.photo.attach(io: File.open(image_url('under-cave_t20_AV6wgr.jpg'), filename: 'general_18.jpg'))
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
general_19_saved = Photo.new(general_19)
general_19_saved.photo.attach(io: File.open(image_url('urban-scene-silhouette-jumping-street-abstract-jump-darkness-street-photography-lights-and-shadows_t20_wgmr2m.jpg'), filename: 'general_19.jpg'))
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
general_20_saved = Photo.new(general_20)
general_20_saved.photo.attach(io: File.open(image_url('waterfall_t20_wLLyyV.jpg'), filename: 'general_20.jpg'))
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
general_21_saved = Photo.new(general_21)
general_21_saved.photo.attach(io: File.open(image_url('winter-wanderlust_t20_x6rlNX.jpg'), filename: 'general_21.jpg'))
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
general_22_saved = Photo.new(general_22)
general_22_saved.photo.attach(io: File.open(image_url('yellow-tramway-in-busy-streets-of-lisbon_t20_xXgY0Q.jpg'), filename: 'general_22.jpg'))
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
general_23_saved = Photo.new(general_23)
general_23_saved.photo.attach(io: File.open(image_url('young-hipster-smiling-girl-listen-music-walking-on-the-streets-of-the-city-using-mobile-phone_t20_eAj36v.jpg'), filename: 'general_23.jpg'))
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