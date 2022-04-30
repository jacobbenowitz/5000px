
export const selectProfilePhotos = ({ photos }, photoIds) => {
  debugger
  if (photoIds) {
    return photoIds.map(photoId => photos[photoId])
  }
};

export const asArray = ({ photos }) => {
  return Object.keys(photos).map(id => photos[id])
}