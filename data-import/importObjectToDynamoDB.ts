export const importPhotoAlbumsToDynamoDB = (albumsToImport: any, DynamoDBHandler: any, uuidHandler: any) => {

    for (let key in albumsToImport) {
        let album: Object = {
            pk: "photoAlbum",
            sk: uuidHandler(),
            ...albumsToImport[key]
        }        

        console.log(album)

        DynamoDBHandler.putItem(album)        
    }
}

