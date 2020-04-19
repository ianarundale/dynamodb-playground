// Helper: https://basarat.gitbook.io/typescript/main

import { PhotoAlbum } from './interfaces'
import DynamoDB from './dynamodb'


let photoAlbum: PhotoAlbum = {
    pk: "album#12345",
    sk: "date#2010",
    albumName: "Tatton Park",
    something: "else"
}

let photoAlbum2: PhotoAlbum = {
    pk: "album#1234567",
    sk: "date#2010",
    albumName: "Didsbury town center",
    something: "boom boom boom"
}

DynamoDB.putItem(photoAlbum).then(success => console.log("Putitem work?", success))
DynamoDB.updateItem(photoAlbum2).then(success => console.log('updateItem work?', success))

DynamoDB.getItem({ pk: 'album#1234567', sk: 'date#2010' }).then(data => console.log('getItem work?', data))