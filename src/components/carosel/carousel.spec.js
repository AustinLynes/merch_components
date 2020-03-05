import React from 'react';
import { render, fireEvent } from '@testing-library/react'
/*
///////////////////////////////////////////////
// COVERAGE  //////////////////////////////////
///////////////////////////////////////////////
    ## Carousel
    [ SOME ] should consist up of
        [ X ] 1 wrapper... 
        [ X ] 2 icons...
        [ X ] 1 image..
    [ NONE ] should consist up of
        [ X ] 1 wrapper... 
        [ X ] 3 icons...
            [ X ] 1 unique icon among them
        [ X ] 1 placeholder.. 
    ## can hold images.. the image component takes in an array of strings.
        [ ] given these... i can grab a certain index by passing in an id.
    ## Functions
        [ X ] increment ++
            [ X ] 0 => 1 => 2 => 3 => 0
        [ X ] decrement --  
            [ X ] 3 => 2 => 1 => 1 => 3
 
*/
///////////////////////////////////////////////
//LOCAL IMPORTS FOR TESTING  //////////////////
///////////////////////////////////////////////

import Carousel from './index'
import { increment as mockIncrement, decrement as mockDecrement } from './index'

//////////////////////////////////////////////
//////////////////////////////////////////////

describe('Carousel with images', () => {

  //#region mock carousel data
  const images = [
    'mock_image_data0.png',
    'mock_image_data1.png',
    'mock_image_data2.png',
    'mock_image_data3.png',
    'mock_image_data4.png'
  ];
  //#endregion

  it('displays wrapper', () => {
    const { getByTestId } = render(<Carousel images={images} />);
    const wrapper = getByTestId(/wrapper/i);
    expect(wrapper).not.toBe(null);
  })
  it('displays one image', () => {
    const { getAllByTestId } = render(<Carousel images={images} />);
    expect(getAllByTestId(/image/i)).toHaveLength(1);
  })
  it('displays two icons', () => {
    const { getAllByTestId } = render(<Carousel images={images} />)
    expect(getAllByTestId(/icon/i)).toHaveLength(2);
  })

})
describe('Carousel no images', () => {

  it('displays wrapper', () => {
    const { getByTestId } = render(<Carousel images={[]} />);
    const wrapper = getByTestId(/wrapper/i);
    expect(wrapper).not.toBe(null);
  })
  it('displays a placeholder', () => {
    const { getByTestId } = render(<Carousel images={[]} />);
    const placeholder = getByTestId(/placeholder/i);
    expect(placeholder).not.toBe(null);
  })
  it('displays three icons', () => {
    const { getAllByTestId } = render(<Carousel images={[]} />);
    const icons = getAllByTestId(/icon/i);
    expect(icons).toHaveLength(3);
  })
  it('displays a unique plus icon', () => {
    const { getByTestId } = render(<Carousel images={[]} />);
    const plus_icon = getByTestId(/icon plus/i)
    expect(plus_icon).not.toBe(null);
  })
})
describe('Functions()', () => {
  describe('increment function()', () => {
    it('can increment properly', () => {
      // create a set of data that represents images
      let mock_images = ['a.png', 'b.png', 'c.png']; // - 0, 1, 2
      // create a counter that starts anywhere technically... i picked zero { 0 } because im 
      // incrementing a counter so best place to start is the begining.. 
      let mock_count = 0;
      // the mock_repeatVal is the value on which the increment value should reset back to zero { 0 }
      let mock_repeatVal = mock_images.length;
      // after the first call of the mock function we expect the value to be { 1 }
      expect(mock_count = mockIncrement(mock_count, mock_repeatVal)).toBe(1) // => 1
      // after a second call of the mock function we expect the value to be { 2 }
      expect(mock_count = mockIncrement(mock_count, mock_repeatVal)).toBe(2) // =>  2
      // after a last call of the mock function we expect the value to NOT be { 3 } which
      // is incrementally after 2..
      expect(mock_count = mockIncrement(mock_count, mock_repeatVal)).not.toBe(3) // => 0
      // we expect the count to now be zero because with the built in functionality of 
      // the increment function we are mocking.. the given _count will check against _repeatVal
      // and reset to { 0 } if it matches that value.
      expect(mock_count).toBe(0); // => 0
    })
  })
  describe('decrement function()', () => {
    // create a set of data that represents images
    let mock_images = ['a.png', 'b.png', 'c.png']; // - 0, 1, 2
    // create a counter that starts anywhere technically... i picked (arr.len - 1) because im 
    // decrementing a counter so best place to start is the end.. 
    // in this case our mock images have a length of three.. and to get the proper index of those 
    // we subtract 1 { -1 }
    // the mock_repeatVal is the value on which the value should reset back to
    let mock_repeatVal = mock_images.length - 1;
    let mock_count = mock_repeatVal; // => 2
    // we expect the mock_count to be 2 ?? => 3 - 1 === 2 { true } 
    expect(mock_count).toBe(2)
    // after the first call we expect the value to be { 1 }
    expect(mock_count = mockDecrement(mock_count, mock_repeatVal)).toBe(1)
    // after the second call we expect the value to be { 0 }
    expect(mock_count = mockDecrement(mock_count, mock_repeatVal)).toBe(0)
    // after the third call we expect the value to NOT be { -1 }
    expect(mock_count = mockDecrement(mock_count, mock_repeatVal)).not.toBe(-1)
    // we actually expect the value of the mock_count now to be what the mock_repeatVal is
    expect(mock_count).toBe(mock_repeatVal)
  })
})

