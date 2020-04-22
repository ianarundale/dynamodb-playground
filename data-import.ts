// Helper: https://basarat.gitbook.io/typescript/main

import { PhotoAlbum } from './interfaces'
import photos from './private-data/photos'
import DynamoDB from './dynamodb'
import {v4 as uuidv4} from 'uuid'

const reducer = (albums:any, currentAlbum:any)=>{ 

    if(!albums[currentAlbum.id]){
        
    }
    currentVal[album.id] = {
        'album_name': currentVal.name,
        'location' : currentVal.location,

    }
}

const dedupedAlbums = photos.reduce(reducer, {})


let id = Math.round((new Date()).getTime())
//DynamoDB.putItem(car1)