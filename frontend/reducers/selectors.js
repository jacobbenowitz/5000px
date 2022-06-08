import React from "react";
import { fetchPhoto } from "../actions/photos/photos_actions";

// react-photo-album photo props //

// key	string	  - Optional key attribute.
// src	string	  - Image source.
// width	number  - Image width in pixels.
// height	number  -	Image height in pixels.
// alt	string	  - Optional image alt attribute.
// title	string  - Optional image title attribute.

export const buildProfileGalleryArray = ({ photos }) => {
  return photos.map(photo => {
    let name = photo.profileName.length > 1 ?
      photo.profileName : photo.username
    
    return {
      key: photo.id,
      src: photo.photoUrl,
      width: photo.width,
      height: photo.height,
      alt: photo.title,
      title: photo.showLink,
    }
  })
};
export const buildDiscoverGalleryArray = ({ photos }) => {
  return photos.map(photo => {
    let name = photo.profileName.length > 1 ?
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

export const selectProfilePhotos = (photos, photoIds) => {
  debugger
  if (Object.keys(photos).length) {
    return photoIds.map(photoId => photos[photoId])
  }
};

export const selectPhotoById = ({ photos }, photoId) => {
  // debugger
  return photos[photoId]
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