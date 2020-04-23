import { expect } from "chai";
import "mocha";
import { outputItemToDynamoDB } from '../../data-import/outputObjectToDynamoDB'
import sinon from 'sinon'

describe("Output to DynamoDB", () => {
  describe("Should put item", () => {
    it("into DynamoDB in the right format using putItem", () => {
      const pk = "photoAlbum"
      const importItems = {
        "27": {
          id: "27",
          albumName: "Club Members",
          location: "",
          photos: [
            {
              photoId: "18",
              description: "Test photo 1"
            },
            {
              photoId: "19",
              description: "Test photo 2"
            },
            {
              photoId: "20",
              description: "Test photo 3"
            }
          ]
        },
        28: {
          id: "28",
          albumName: "Llandudo transport festival May 2010",
          location: "",
          photos: [
            {
              photoId: "21",
              description: "Test photo 4"
            }
          ]
        },
        39: {
          id: "39",
          albumName: "Tatton 3,4th july",
          location: "",
          photos: [
            { "photoId": "22", "description": "Test photo 5" }
          ],
        }
      }

      let dynamoDBHandler = {
        putItem: sinon.spy()
      }
      const skProducer = () => {
        return "49130380-e26c-4b30-8b42-75ede4ebddcb"
      }

      const expectedCallObject = {
        pk: "photoAlbum",
        sk: "49130380-e26c-4b30-8b42-75ede4ebddcb",
        id: "27",
        albumName: "Club Members",
        location: "",
        photos: [
          {
            photoId: "18",
            description: "Test photo 1"
          },
          {
            photoId: "19",
            description: "Test photo 2"
          },
          {
            photoId: "20",
            description: "Test photo 3"
          }
        ]
      }

      outputItemToDynamoDB({ pk, skProducer, importItems, dynamoDBHandler })
      expect(dynamoDBHandler.putItem.firstCall.args[0]).to.deep.equal(expectedCallObject)
    });
  });
});