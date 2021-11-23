import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { add } from 'lodash';
import cypress from 'cypress';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
  // add 1 to 4 and get 5
  it ('should add 1 to 4 and get 5',()=>{
    const runningTotal = container.find('#running-total')
    const button1 = container.find('#number1');
    const addB = container.find('#operator-add');
    const button4 = container.find('#number4');
    const equalB = container.find('#operator-equals');
    button1.simulate('click');
    addB.simulate('click')
    button4.simulate('click');
    equalB.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
  it('should subtract 4 from 7 and get 3',()=>{
    const runningTotal = container.find('#running-total');
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const subtractB = container.find('#operator-subtract');
    const equalB = container.find('#operator-equals');
    button7.simulate('click');
    subtractB.simulate('click');
    button4.simulate('click');
    equalB.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });
  it ('should be able to divide 21 by 7',()=>{
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const divideB = container.find('#operator-divide');
    const equalB = container.find('#operator-equals');
    const button7 = container.find('#number7');

    button2.simulate('click');
    button1.simulate('click');
    divideB.simulate('click');
    button7.simulate('click');
    equalB.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })
  it('should concatenate mulitple button clicks',()=>{
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('217')
  })
  it ('should be able to chain mulitple operators',()=>{
    const runningTotal = container.find('#running-total')
    const button5 = container.find('#number5')
    const addB = container.find('#operator-add')
    const divideB = container.find("#operator-divide")
    const equalB = container.find('#operator-equals');

    button5.simulate('click')
    addB.simulate('click')
    button5.simulate('click')
    divideB.simulate('click')
    button5.simulate('click');
    equalB.simulate('click')
    expect(runningTotal.text()).toEqual('2');
  })
  it('should clear running total without not affecting calculation',()=>{
    const runningTotal = container.find('#running-total')
    const button2 = container.find('#number2')
    const addB = container.find('#operator-add')
    const equals = container.find('#operator-equals')
    const clearB = container.find('#clear')
    button2.simulate('click')
    addB.simulate('click')
    button2.simulate('click')
    addB.simulate('click')
    button2.simulate('click')
    clearB.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('4')

  })
})

