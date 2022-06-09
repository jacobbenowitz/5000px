
export const buildProfileGalleryArray = ({photos}) => {
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
  return photos.map(photo => {
    let name = photo?.profileName.length > 1 ?
      photo.profileName : photo.username
    
    return {
      key: photo.id,
      src: photo.photoUrl,
      width: photo.width,
      height: photo.height,
      alt: name,
      title: photo.showLink,
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
  if (Object.keys(photos).length && photoIds.length) {
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

export const selectFeaturedPhotographers = (photos, profiles) => {
  // select 5 profiles
  
  // get 3 random photos from each
  // return array [{photos: [], profile: {name: '', location: '', id: ''}}]
}