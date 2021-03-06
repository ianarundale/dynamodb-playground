// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';


export type DynamoDBItem = {
    pk: String,
    sk: String
}

type Photo = {
    url: String
    description: String
}

export type PhotoAlbum  = {
    pk: string
    sk: string
    albumName?: string
    location?: String
    photos: Array<Photo>
}