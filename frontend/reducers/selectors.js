import { fetchPhoto } from "../actions/photos/photos_actions";

export const selectProfilePhotos = ({ photos }, photoIds) => {
  debugger
  if (photoIds) {
    return photoIds.map(photoId => photos[photoId])
  }
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

export const selectProfileFromUser = ({ profiles }, user) => {
  debugger
  if (Object.keys(user), length === 0) {
    return profiles[user.profileId];
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