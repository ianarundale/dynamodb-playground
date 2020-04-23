// Helper: https://basarat.gitbook.io/typescript/main

import { PhotoAlbum } from '../interfaces'
import DynamoDB from '../dynamodb'
import { v4 as uuidv4 } from 'uuid'
import { photos as photoData } from '../private-data/photos'
import { cars as carData } from '../private-data/cars'
import { importPhotoAlbumsFromJsonFile } from '../data-import/importDataFormatter'
import { outputPhotoAlbumsToDynamoDB } from '../data-import/outputObjectToDynamoDB'

const processPhotoAlbums = () => {
    const uuidHandler = () => { return uuidv4() }
    const photoAlbums = importPhotoAlbumsFromJsonFile(photoData)
    outputPhotoAlbumsToDynamoDB(photoAlbums, DynamoDB, uuidHandler)
}

const processCars = () =>{
    const uuidHandler = () => { return uuidv4() }
    const cars = importPhotoAlbumsFromJsonFile(carData)
    outputPhotoAlbumsToDynamoDB(cars, DynamoDB, uuidHandler)
}
