
import React from 'react';
import { SmilyButton } from '../../app/components/SmilyButton';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

describe('Smily button test', function () {

    it('should SmilyButton contain Meoew', function () {
        const wrapper = shallow(<SmilyButton />);
        expect(wrapper.text()).to.equal('😸');
    });

    it('should render title with title props', function () {
        const wrapper = shallow(<SmilyButton title={`Happy`} />);
        expect(wrapper.text()).to.equal('😸Happy');
    })
});