const { expect } = require('chai');
const wrap = require('./wrap')

describe('Wrap', () => {
    it('returns empty string if emptry string was provided', () => {
        expect(wrap('', 10)).to.equal('');
    });
    it('should handle words longer than col, by allocating a full line', () => {
        expect(wrap('it', 1)).to.equal('it');
        expect(wrap('doubledecker bus', 6)).to.equal('doubledecker/nbus'); 
    });
    
    xit('handles short strings under the length of col', () => {
        expect(wrap('hello world', 12)).to.equal('hello world');
    });
    xit('should add line breaks where words are shorter than col', () => {
        expect(wrap('hello world', 5)).to.equal('hello/nworld ');
    });
   

});

