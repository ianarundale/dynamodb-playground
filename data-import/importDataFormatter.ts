// Helper: https://basarat.gitbook.io/typescript/main

/**
 * Import data from file system format to PhotoAlbum format
 * @param inputAlbums 
 */
export const importPhotoAlbumsFromJsonFile = (inputAlbums: Array<any>) => {
    const reducer = (photoAlbums: any, currentAlbum: any) => {
        if (photoAlbums[currentAlbum.id] == undefined) {
            photoAlbums[currentAlbum.id] = {
                id: currentAlbum.id,
                albumName: currentAlbum.name,
                location: currentAlbum.location,
                photos: []
            }
        }

        photoAlbums[currentAlbum.id].photos.push({
            photoId: currentAlbum.photo_id,
            description: currentAlbum.description
        })

        return photoAlbums
    }

    const result = inputAlbums.reduce(reducer, {})

    return result
}

export const importCarsFromJsonFile = (inputCars: Array<any>) => {
    const formatter = (inputCar: any) => {
        let car = { ...inputCar}
        car.firstName = car["first_name"]
        car.lastName = car["last_name"]
        car.membershipNo = car["membership_no"]

        delete car["first_name"]
        delete car["last_name"]
        delete car["membership_no"]

        return car
    }

    const result = inputCars.map(formatter)

    return result
}