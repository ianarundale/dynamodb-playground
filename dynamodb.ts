// DynamoDB cheat sheet: https://github.com/dabit3/dynamodb-documentclient-cheat-sheet/blob/master/README.md

import { SharedIniFileCredentials, DynamoDB, config } from 'aws-sdk'
import { DynamoDBItem } from './interfaces'

config.update({
    region: "eu-west-1",
});

var credentials = new SharedIniFileCredentials({ profile: 'personal-account' });
config.credentials = credentials;

var docClient = new DynamoDB.DocumentClient();

var table = "cccc_test";

const isDynamoKey = (key: String) => {
    return key == "pk" || key == "sk"
}

// https://stackoverflow.com/questions/55825544/how-to-update-a-single-attribute-in-a-dynamodb-item
const generateUpdateQuery = (fields: DynamoDBItem) => {
    debugger;
    let exp = {
        UpdateExpression: 'set',
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {}
    }
    Object.entries(fields)
        .forEach(([key, item]) => {
            if (!isDynamoKey(key)) {
                exp.UpdateExpression += ` #${key} = :${key},`;
                exp.ExpressionAttributeNames[`#${key}`] = key;
                exp.ExpressionAttributeValues[`:${key}`] = item
            }
        })
    exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
    return exp
}

async function updateItem(dynamoItem: DynamoDBItem): Promise<Boolean> {
    const expression = generateUpdateQuery(dynamoItem)
    let data
    var params: DynamoDB.DocumentClient.UpdateItemInput = {
        TableName: table,
        Key: {
            "pk": dynamoItem.pk,
            "sk": dynamoItem.sk
        },
        ...expression,
        ReturnValues: "UPDATED_NEW"
    };

    console.log("Updating item...");

    try {
        data = await docClient.update(params).promise()
    } catch (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        return false
    }

    console.log("Updated item:", JSON.stringify(data, null, 2));
    return true
}


async function putItem(dynamoDBItem: DynamoDBItem): Promise<Boolean> {
    var params = {
        TableName: table,
        Item: dynamoDBItem,
        ReturnValues: 'ALL_OLD'
    };
    let data
    console.log("Adding a new item...");

    try {
        data = await docClient.put(params).promise()
    } catch (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        return false
    }

    console.log(data)
    return true
}


async function getItem(keys) {
    var params = {
        TableName: table,
        Key: keys
    }
    try {
        const data = await docClient.get(params).promise()
        return data
    } catch (err) {
        return err
    }
}


// function readItem() {

//     var params = {
//         TableName: table,
//         Key: {
//             "pk": "album#1234",
//             "sk": "date#2010"
//         }
//     };

//     docClient.get(params, function (err, data) {
//         if (err) {
//             console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//             console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
//         }
//     });
// }



// function deleteItem(){
//     var params = {
//         TableName:table,
//         Key: {
//             "pk": "album#1234",
//             "sk": "date#2010"
//         },
//         ConditionExpression:"info.rating <= :val",
//         ExpressionAttributeValues: {
//             ":val": 5.0
//         }
//     };

//     console.log("Attempting a conditional delete...");
//     docClient.delete(params, function(err, data) {
//         if (err) {
//             console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
//         } else {
//             console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
//         }
//     });
// }


export default { putItem, updateItem, getItem }






// Explained: https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
// function hasKey<O>(obj: O, key: keyof any): key is keyof O {
//     return key in obj
// }

// let updateItems = Object.keys(photoAlbum)
// .filter((key: string) => { return key !== "pk" && key !== "sk" })
// .reduce((expressionSet: ExpressionSet, key: string) => {
//     expressionSet.updateExpression += `${key} = :${key}`

//     if (hasKey(photoAlbum, key)) {
//         let expressionKey: string = `:${key}`
//         expressionSet.expressionAttributes[expressionKey] = photoAlbum[key]
//     }

//     return expressionSet
// }, expressionSet)

// console.log(updateItems);