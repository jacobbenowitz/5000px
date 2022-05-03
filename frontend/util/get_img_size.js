// credit: https://dev.to/detoner777/how-to-gets-uploaded-image-metadata-on-the-front-end-2h1k


// modified function

export const getImgSize = async (File) => {
  const file = File;

  async function getImageParams(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const image = new Image()
        image.src = e.target.result
        await image.decode()

        resolve({ width: image.width, height: image.height })
      }
      reader.readAsDataURL(file)
    })
  }
  const { width, height } = await getImageParams(file)

  return { width, height };
}


// orginal function
// Function takes single uploaded img file, and returns width, height, fileSize and fileExtension

// export const getImageMeta = async (
//     file: File
// ): Promise<{
//     width: number,
//     height: number,
//     fileSize: number,
//     fileExtension: string,
//     localUrl: string,
// }> => {
//     const { name } = file
//     const fileExtension = name.split('.').pop()
//     const localUrl = URL.createObjectURL(file)
//     // reading a file to get height and width
//     async function getImageParams(file: File) {
//         return new Promise((resolve, reject) => {
//             var reader = new FileReader()

//             reader.onload = async (e: any) => {
//                 var image = new Image()
//                 image.src = e.target.result
//                 await image.decode()

//                 resolve({ width: image.width, height: image.height })
//             }
//             reader.readAsDataURL(file)
//         })
//     }
//     const { width, height } = await getImageParams(file)

//     return { width, height, fileSize: file.size, fileExtension, localUrl }