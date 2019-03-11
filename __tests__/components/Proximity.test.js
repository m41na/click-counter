import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Proximity from '#/components/Proximity';

const initialProps = {
    distance: {'value': 100},
    increment(){
        console.log('increment');
    },
    decrement(){
        console.log('decrement');
    }
};

describe('AwayView behavior', () => {
    describe('render()', () => {        
        it('should render the component with two buttons', () => {
            const component = shallow(<Proximity {...initialProps} />);
            expect(component).toMatchSnapshot();        

            //assert list has two tasks
            const list = component.find("button");
            expect(list).toHaveLength(2);
        });
    });
});