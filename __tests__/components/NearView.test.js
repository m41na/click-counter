import React from 'react';
import { shallow } from 'enzyme';
import NearView from '#/components/NearView';

const initialProps = {
    value: 20,
    reset(){
        console.log('reset distance');
    }
};

describe('NearView behavior', () => {
    describe('render()', () => {        
        it('should render with correct initial value', () => {
            const component = shallow(<NearView {...initialProps} />);
            expect(component).toMatchSnapshot();        

            //assert span has initial value of 100
            const span = component.find("span.value");
            console.log('span value', span.text());
            expect(span.text()).toEqual('20');
        });
    });
});