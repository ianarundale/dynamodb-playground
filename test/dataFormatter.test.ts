import { expect } from "chai";
import "mocha";
import { importPhotoAlbums } from '../data-import'

const inputItems = [
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "18", "description": "Test photo 1" },
  // { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "19", "description": "Test photo 2" },
  // { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "20", "description": "Test photo 3" },
  // { "id": "28", "name": "Llandudo transport festival May 2010", "location": "", "deleted": "0", "photo_id": "21", "description": "Test photo 4" },
  // { "id": "39", "name": "Tatton 3,4th july", "location": "", "deleted": "0", "photo_id": "22", "description": "Test photo 5" },
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
            }
          ]
        }
      }

      const res = importPhotoAlbums(inputItems)

      console.log(res)

      expect(res).to.deep.equal(expected);
    });
  });
});
