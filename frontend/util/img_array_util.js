export const imgArrayBuilder = (imgs) => {
  imgs.map(img => {
    return [img.photoUrl]
  })
}