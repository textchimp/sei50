// ...and because you can only export ONE default,
// the name is irrelevant, and you can name it whatever
// you want when you import it
// import add from '@/lib/utils';

// import add, {subber, bigNum as num} from '@/lib/utils';

// import ALL named exports from utils.js into
// a local object called 'utils'
import * as utils from '@/lib/utils';

xdescribe('Utils library', () => {

  describe('adder()', () => {

    let result;
    beforeEach(() => {
      result = utils.adder( 5, 8 );
    });

    it('should add two numbers correctly', () => {
      // console.log('Does this work?', adder);
      // console.log('utils:', utils);
      // console.log('subber:', utils.subber);
      // console.log('bigNum:', utils.bigNum);
      expect( result ).to.equal( 13 );
    }); // it()

    it('should return a number', () => {
      expect( typeof result ).to.equal( 'number' );
    });

  }); // describe adder()

  describe('subber()', () => {

    it('should subtract two numbers correctly', () => {
      const result = utils.subber(100, 30);
      expect( result ).to.equal( 70 );
    });

  }); // describe subber()


}); // describe Utils
