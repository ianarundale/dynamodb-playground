interface outPutItem {
    pk:string
    skProducer:Function
    importItems:any
    dynamoDBHandler:any
}

export const outputItemToDynamoDB = ({pk, skProducer, importItems, dynamoDBHandler }:outPutItem) => {    
    for (let key in importItems) {
        let item: Object = {
            pk,
            sk: skProducer(importItems[key]),
            ...importItems[key]
        }        

        console.log(item)
        dynamoDBHandler.putItem(item)        
    }
}
