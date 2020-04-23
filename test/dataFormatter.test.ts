import { expect } from "chai"
import "mocha"
import {importPhotoAlbumsFromJsonFile} from '../data-import/dataFormatter'

const inputItems = [
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "18", "description": "Test photo 1" },
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "19", "description": "Test photo 2" },
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "20", "description": "Test photo 3" },
  { "id": "28", "name": "Llandudo transport festival May 2010", "location": "", "deleted": "0", "photo_id": "21", "description": "Test photo 4" },
  { "id": "39", "name": "Tatton 3,4th july", "location": "", "deleted": "0", "photo_id": "22", "description": "Test photo 5" },
]

describe("Data Formatter", () => {
  describe("Should format ", () => {
    it("Photo albums into right shape", () => {
      
      const expected = {
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

      const res = importPhotoAlbumsFromJsonFile(inputItems)
      expect(res).to.deep.equal(expected);
    });
  });
});
