// Helper: https://basarat.gitbook.io/typescript/main

import { PhotoAlbum } from './interfaces'
import DynamoDB from './dynamodb'
import {v4 as uuidv4} from 'uuid'


let photoAlbum: PhotoAlbum = {
    pk: "album#12345",
    sk: "date#2010",
    albumName: "Tatton Park",
}

let photoAlbum2: PhotoAlbum = {
    pk: "album#1234567",
    sk: "date#2010",
    albumName: "Didsbury town center",
}

let id = Math.round((new Date()).getTime())

let car1 = {
    pk: "car",
    sk: `${uuidv4()}`,
    make: "Volkswagen",
    model: "Golf GTI",
    engine: "2.0",
    type: "car"
}

DynamoDB.filterQuery().then(res=>console.log(JSON.stringify(res)))

//DynamoDB.putItem(car1)

//DynamoDB.queryCars().then(res => console.log(sortCarsByMakeModel(res.Items)))



function sortCarsByMakeModel(cars: []) {
    return cars
        .sort((a:any, b:any) => (a.make > b.make) ? 1 : (a.make === b.make) ? ((a.model > b.model) ? 1 : -1) : -1)
}

// DynamoDB.putItem(photoAlbum).then(success => console.log("Putitem work?", success))
// DynamoDB.updateItem(photoAlbum2).then(success => console.log('updateItem work?', success))

// DynamoDB.getItem({ pk: 'album#1234567', sk: 'date#2010' }).then(data => console.log('getItem work?', data))