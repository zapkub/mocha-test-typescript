
import React from 'react';
import App from '../app/index';
import { SmilyButton } from '../app/components/SmilyButton';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

describe('Index test', function () {
    let wrapper;
    beforeEach(function () {
        wrapper = mount(<App />);
    })

    it('should render text Hello word', function () {
        expect(wrapper.text()).to.equal('Hello world😸');
    });

    it('should render SmilyButton inside', function() {
        expect(wrapper.contains(<SmilyButton />)).to.be.true;
    });

});