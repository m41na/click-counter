import React from 'react';
import { shallow } from 'enzyme';
import AwayView from '#/components/AwayView';

const initialProps = {
    value: 20,
    reset(){
        console.log('reset distance');
    }
};

describe('AwayView behavior', () => {
    describe('render()', () => {        
        it('should render with correct initial value', () => {
            const component = shallow(<AwayView {...initialProps} />);
            expect(component).toMatchSnapshot();        

            //assert span has initial value of 100
            const span = component.find("span.value");
            console.log('span value', span.text());
            expect(span.text()).toEqual('20');
        });
    });
});