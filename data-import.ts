// Helper: https://basarat.gitbook.io/typescript/main

import { PhotoAlbum } from './interfaces'

export const importPhotoAlbums = (inputAlbums: Array<any>) => {
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