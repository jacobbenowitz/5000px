
export const buildProfileGalleryArray = ({ photos }) => {
  return photos.map(photo => {
    let name = photo?.profileName.length > 1 ?
      photo.profileName : photo?.username

    return {
      key: photo?.id,
      src: photo?.photoUrl,
      width: photo?.width,
      height: photo?.height,
      alt: photo?.title,
      title: photo?.showLink,
    }
  })
};

export const buildDiscoverGalleryArray = ({ photos }) => {
  let discoverPhotos = photos.map(photo => {
    let name = photo?.profileName.length > 1 ?
      photo.profileName : photo.username

    return {
      key: photo.id,
      src: photo.thumbnailUrl,
      width: photo.width,
      height: photo.height,
      alt: name,
      title: photo.showLink,
    }
  })
  return discoverPhotos;
};

export const buildFeaturedGalleryArray = photos => {
  return photos.map(photo => {
    return {
      key: photo.id,
      src: photo.photoUrl,
      width: photo.width,
      height: photo.height,
      alt: photo.title,
    }
  })
};

export const buildGridGalleryProps = (photos) => {
  return photos.map(photo => {
    return {
      src: photo.photoUrl,
      thumbnail: photo.thumbnailUrl,
      caption: photo.profileName.length > 1 ?
        photo.profileName : photo.username,
      tags: [{ value: <a href={photo.showLink}>View photo</a>, title: 'View photo' }],
      thumbnailWidth: photo.width,
      thumbnailHeight: photo.height,
    }
  })
};

export const selectProfilePhotos = (photos, photoIds) => {
  if (photos && photoIds) {
    return photoIds.map(photoId => photos[photoId])
  } else return []
};

export const selectPhotoById = ({ photos }, photoId) => {
  return photos[photoId]
};

export const selectPhoto = ({ photos }, photoId) => {
  if (Object.keys(photos).length === 0) {
    return {}
  } else {
    return photos[photoId];
  }
}

export const selectUserFromPhoto = ({ users }, photo) => {
  if (Object.keys(photo), length === 0 || typeof photo.user_id === "undefined") {
    return {}
  } else {
    return users[photo.user_id]
  }
}

export const selectProfileById = ({ profiles }, profileId) => {
  if (profiles[profileId]) {
    return profiles[profileId];
  } else {
    return {};
  }
};

export const selectUserById = ({ users }, userId) => {
  return users[userId]
}

// return array [{photos: [], profile: {name: '', location: '', id: ''}}]
export const selectFeaturedPhotographers = (profiles, users) => {
  // select 5 profiles
  const featured = selectFeaturedProfiles(profiles)
  const featuredPhotoIds = [];
  const formattedProfiles = featured.map(profile => {
    let name;

    if (profile.first_name) {
      name = profile.first_name + " " + profile.last_name
    } else {
      name = users[profile.user_id].username
    }
    // get all profile photos
    const profilePhotos = profile.photoIds

    // get 3 random photos from each
    const threeSelectedPhotos = selectThreeRandomPhotos(profilePhotos)
    featuredPhotoIds.push(threeSelectedPhotos)
    return {
      photoIds: threeSelectedPhotos,
      profile: {
        id: profile.id,
        name: name,
        location: profile.city,
        followers: profile.followers,
        following: profile.following,
        avatar: profile.avatar
      }
    }
  })

  let photoIds = featuredPhotoIds.flat()

  return {profiles: formattedProfiles, photoIds: photoIds};
}

export const selectFeaturedProfiles = (profiles) => {
  let featured = Object.values(profiles).filter(
    profile => profile.featured
  )
  // shuffle order of profiles
  return featured.sort(() => Math.random() - 0.5);
}

export const selectThreeRandomPhotos = (photos) => {
  let maxPhotos = photos.length;
  let randomPhotos = [];
  let prevInts = [];

  if (maxPhotos < 3) {
    return photos
  } else {
    for (let i = 0; i < 3; i++) {
      let randomInt = getUniqueRandomInt(1, maxPhotos, prevInts)
      prevInts.push(randomInt)
      let photo = photos[randomInt]
      randomPhotos.push(photo)
    }
    return randomPhotos;
  }
}

export const selectFourRandomPhotos = (photos) => {
  let maxPhotos = photos.length;
  let randomPhotos = [];
  let prevInts = [];

  if (maxPhotos < 4) {
    return photos
  } else {
    for (let i = 0; i < 4; i++) {
      let randomInt = getUniqueRandomInt(1, maxPhotos, prevInts)
      prevInts.push(randomInt)
      let photo = photos[randomInt]
      randomPhotos.push(photo)
    }
    return randomPhotos;
  }
}


/**
 * @param  {integer} min
 * @param  {integer} max
 * @param  {array} prevInts => array of previous numbers
 * @param  {max} => Math.floor to ensure integer
 */
export const getUniqueRandomInt = (min, max, prevInts) => {
  max = Math.floor(max);
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min - 1;
  if (prevInts.includes(randomInt)) {
    return getUniqueRandomInt(min, max, prevInts)
  } else return randomInt;
}

// return object {photos: [], profile: {name: '', id: ''}}
export const selectCollectionPhotos = (profiles, collection) => {
  let featured = selectFeaturedProfiles(profiles)

  let formattedCollection = {};

  featured.forEach(profile => {
    if (profile.category === collection) {
      formattedCollection.photos = selectFourRandomPhotos(profile.photoIds)
      formattedCollection.profile = {
        name: profile.first_name + " " + profile.last_name,
        id: profile.id
      }
    }
  })
  return formattedCollection;
};

export const divideArrayIntoGroups = (array, length) => {
  let groups = [], i = 0, max = array.length
  while (i < max) {
    groups.push(array.slice(i, i += length))
  }
  return groups;
}

export const selectPhotosByIds = (allPhotos, photoIds) => {
  return photoIds.map(id => allPhotos[id])
}

export const sortPhotosByRecent = (photos) => {
  return photos.sort(orderByDate)
}

export const sortCommentsByRecent = comments => {
  return comments.sort(orderByDate)
}

export const sortByRecent = array => {
  return array.sort(orderByDate)
}

function orderByDate(a, b) {
  if (a?.created_at > b?.created_at) {
    return -1;
  }
  if (a?.created_at < b?.created_at) {
    return 1;
  }
  return 0;
}

export const selectFollowsById = (ids, allFollows) => {
  let follows = ids.map(id => allFollows[id])
  return sortByRecent(follows)
}

export const selectFollowersById = (ids, allFollows) => {
  let followers = Object.values(allFollows).map(follow => 
    ids.includes(follow.followee_id))
  return sortByRecent(followers)
}


export const selectFollowersPhotoIds = (
  followingIds, allFollows, allProfiles) => {
  let followerIds = selectFollowsById(followingIds, allFollows).map(follow => 
    follow?.followee_id)
      
  let followers = followerIds.map(id => allProfiles[id])
  debugger
  return followers.map(follower => follower.photoIds).flat()
}