import { expect } from "chai"
import "mocha"
import { importPhotoAlbumsFromJsonFile, importCarsFromJsonFile } from '../../data-import/importDataFormatter'

const inputPhotoItems = [
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "18", "description": "Test photo 1" },
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "19", "description": "Test photo 2" },
  { "id": "27", "name": "Club Members", "location": "", "deleted": "0", "photo_id": "20", "description": "Test photo 3" },
  { "id": "28", "name": "Llandudo transport festival May 2010", "location": "", "deleted": "0", "photo_id": "21", "description": "Test photo 4" },
  { "id": "39", "name": "Tatton 3,4th july", "location": "", "deleted": "0", "photo_id": "22", "description": "Test photo 5" },
]

const inputCarItems = [
  { "id": "2", "make": "Lotus", "model": "Excel", "edition": "SE", "engine": "2.2", "year": "1987", "colour": "Red", "mileage": "48000", "first_name": "Bill", "last_name": "Smith", "membership_no": "42" },
  { "id": "86", "make": "Ford", "model": "Capri", "edition": "mk 2 2.0s", "engine": "2000cc", "year": "1977", "colour": "jupiter red.", "mileage": "17", "first_name": "Stuart", "last_name": "Smith2", "membership_no": "46" },
  { "id": "163", "make": "Triumph", "model": "TR4", "edition": "", "engine": "", "year": "1964", "colour": "", "mileage": "0", "first_name": "Bill", "last_name": "Smith3", "membership_no": "29" }
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

      const res = importPhotoAlbumsFromJsonFile(inputPhotoItems)
      expect(res).to.deep.equal(expected);
    });
    it("Cars into right shape", () => {

      const expected = [
        { "id": "2", "make": "Lotus", "model": "Excel", "edition": "SE", "engine": "2.2", "year": "1987", "colour": "Red", "mileage": "48000", "firstName": "Bill", "lastName": "Smith", "membershipNo": "42" },
        { "id": "86", "make": "Ford", "model": "Capri", "edition": "mk 2 2.0s", "engine": "2000cc", "year": "1977", "colour": "jupiter red.", "mileage": "17", "firstName": "Stuart", "lastName": "Smith2", "membershipNo": "46" },
        { "id": "163", "make": "Triumph", "model": "TR4", "edition": "", "engine": "", "year": "1964", "colour": "", "mileage": "0", "firstName": "Bill", "lastName": "Smith3", "membershipNo": "29" },
      ]

      const res = importCarsFromJsonFile(inputCarItems)
      expect(res).to.deep.equal(expected);
    });
  });
});
