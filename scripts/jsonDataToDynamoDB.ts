// Helper: https://basarat.gitbook.io/typescript/main

import dynamoDBHandler from '../dynamodb'
import { v4 as uuidv4 } from 'uuid'
import { photos as photoData } from '../private-data/photos'
import { cars as carData } from '../private-data/cars'
import { news as newsData } from '../private-data/news'
import { members as memberData } from '../private-data/members'
import { importPhotoAlbumsFromJsonFile, importCarsFromJsonFile, importMembersFromJsonFile } from '../data-import/importDataFormatter'
import { outputItemToDynamoDB } from '../data-import/outputObjectToDynamoDB'

export const processPhotoAlbums = () => {
    const pk = "photoAlbum"
    const skProducer = () => { return uuidv4() }
    const importItems = importPhotoAlbumsFromJsonFile(photoData)
    outputItemToDynamoDB({ pk, skProducer, dynamoDBHandler, importItems })
}

export const processCars = () => {
    const pk = "car"
    const skProducer = () => { return uuidv4() }
    const importItems = importCarsFromJsonFile(carData)
    outputItemToDynamoDB({ pk, skProducer, dynamoDBHandler, importItems })
}

export const processMembers = () => {
    const pk = "member"
    const skProducer = () => { return uuidv4() }
    const importItems = importMembersFromJsonFile(memberData)    
    outputItemToDynamoDB({ pk, skProducer, dynamoDBHandler, importItems })
}

export const processNews = () => {
    const pk = "news"
    const skProducer = (newsItem) => { return newsItem.date }
    const importItems = newsData
    outputItemToDynamoDB({ pk, skProducer, dynamoDBHandler, importItems })
}