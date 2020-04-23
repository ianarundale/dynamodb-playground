// Helper: https://basarat.gitbook.io/typescript/main

import { PhotoAlbum } from './interfaces'
import DynamoDB from './dynamodb'
import {v4 as uuidv4} from 'uuid'
import {photos} from './private-data/photos'
import {importPhotoAlbumsToDynamoDB} from './importPhotoAlbums'
import {importPhotoAlbumsFromJsonFile} from './data-import'

const uuidHandler = ()=>{ return uuidv4() }
importPhotoAlbumsToDynamoDB(importPhotoAlbumsFromJsonFile(photos), DynamoDB, uuidHandler)