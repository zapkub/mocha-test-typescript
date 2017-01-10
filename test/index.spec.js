import { squreRootOf } from '../app/index';
import { expect } from 'chai';

describe('Index test', function() {
    it('should result correctly', function() {
        expect(squreRootOf(4)).to.be.equal(2);
    });
})