import { fetchPhoto } from "../actions/photos/photos_actions";

export const selectGalleryDetails = (photos, photoIds) => {
  Object.keys(photos).length > 0 ? (
    photoIds.map(id => {
      let photo = photos[id]
      return {
        src: photo.photoUrl,
        width: photo.width,
        height: photo.height
      }
    })) : []
};

export const selectProfilePhotos = ({ photos }, photoIds) => {
  debugger
  return Object.keys(photos).length > 0 ? (
    photoIds.map(photoId => {
      return photos[photoId]
    })) : []
};

export const selectPhotoById = ({ photos }, photoId) => {
  debugger
  return photos[photoId]
};

export const asArray = ({ photos }) => {
  debugger
  return Object.keys(photos).map(id => photos[id])
};

export const selectPhoto = ({ photos }, photoId) => {
  if (Object.keys(photos).length === 0) {
    return {}
  } else {
    debugger
    return photos[photoId];
  }
}

export const selectUserFromPhoto = ({ users }, photo) => {
  debugger
  if (Object.keys(photo), length === 0 || typeof photo.user_id === "undefined") {
    return {}
  } else {
    return users[photo.user_id]
  }
}

// export const selectProfileById = 

export const selectProfileById = ({ profiles }, profileId) => {
  debugger
  if (profiles[profileId]) {
    return profiles[profileId];
  } else {
    return {};
  }
};

export const selectUserById = ({ users }, userId) => {
  debugger
  return users[userId]
}


// export const selectPhotos

///////
// refactored with jbuilder user.profile.id -> added to user slice

// export const selectPhotoProfile = ({ profiles }, userId) => {
//   for (let i = 0; i < profiles.length; i++) {
//     debugger
//     const profile = profiles[i];
//     if (profile.user_id === userId) return profile;
//   }
// }