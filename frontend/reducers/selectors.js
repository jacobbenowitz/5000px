
export const selectProfilePhotos = ({ photos }, photoIds) => {
  debugger
  if (photoIds) {
    return photoIds.map(photoId => photos[photoId])
  }
};

export const asArray = ({ photos }) => {
  debugger
  return Object.keys(photos).map(id => photos[id])
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