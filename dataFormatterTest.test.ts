// import { expect } from 'chai';
// import 'mocha';
// //import { hello } from './hello-world';

// // describe('Hello function', () => {

// //   it('should return hello world', () => {
// //     const result = hello();
// //     expect(result).to.equal('Hello world!');
// //   });

// // });


// describe('calculate', function() {
//   it('add', function() {
//     let result = 5 + 2;
//     expect(result).equal(7);
//   }); 
// });

import { expect } from "chai";
import "mocha";

describe("This", () => {
  describe("should", () => {
    it("always pass", () => {
      expect(true).to.equal(true);
    });
  });
});
