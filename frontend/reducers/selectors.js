import { fetchPhoto } from "../actions/photos/photos_actions";

// accepts array of photos, creates proper structure of data for each photo:
// {
//   src: 'https://my5000px.jpg',
//   alt: '<img title>'
//   width: 545,
//   height: 531,
//   showLink: `/photos/${id}`,
// }

import React from "react";

export const buildGalleryArray = ({ photos }) => {
  // debugger
  return photos.map(photo => {
    return {
      src: photo.photoUrl,
      alt: photo.alt,
      title: photo.title,
      width: photo.width,
      height: photo.height,
      key: photo.id,
    }
  })
};

export const buildGridGalleryProps = (photos) => {
  // debugger
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

// for react-grid-gallery
// export const buildGridGalleryProps = ({ photos }) => {
// debugger
//   photos.map(photo => {
//     const name = photo.profileName.length > 1 ?
//       photo.profileName : photo.username;

//     return {
//       src: photo.photoUrl,
//       thumbnail: photo.thumbnailUrl,
//       width: photo.width,
//       height: photo.height,
//       caption: name,
//       link: photo.showLink,
//       alt: photo.title,
//       key: photo.id,
//       profileId: photo.profile_id,
//     }
//   })
// };

export const selectProfilePhotos = ({ photos }, photoIds) => {
  // debugger
  return Object.keys(photos).length > 0 ? (
    photoIds.map(photoId => {
      return photos[photoId]
    })) : []
};

export const selectPhotoById = ({ photos }, photoId) => {
  // debugger
  return photos[photoId]
};

export const asArray = ({ photos }) => {
  // debugger
  return Object.keys(photos).map(id => photos[id])
};

export const selectPhoto = ({ photos }, photoId) => {
  if (Object.keys(photos).length === 0) {
    return {}
  } else {
    // debugger
    return photos[photoId];
  }
}

export const selectUserFromPhoto = ({ users }, photo) => {
  // debugger
  if (Object.keys(photo), length === 0 || typeof photo.user_id === "undefined") {
    return {}
  } else {
    return users[photo.user_id]
  }
}

// export const selectProfileById = 

export const selectProfileById = ({ profiles }, profileId) => {
  // debugger
  if (profiles[profileId]) {
    return profiles[profileId];
  } else {
    return {};
  }
};

export const selectUserById = ({ users }, userId) => {
  // debugger
  return users[userId]
}


// export const selectPhotos

///////
// refactored with jbuilder user.profile.id -> added to user slice

// export const selectPhotoProfile = ({ profiles }, userId) => {
//   for (let i = 0; i < profiles.length; i++) {
// debugger
//     const profile = profiles[i];
//     if (profile.user_id === userId) return profile;
//   }
// }