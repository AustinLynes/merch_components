import React from 'react'
import TextBanner from './index'
import { render } from '@testing-library/react'

/*
    [ TextBanner ]
        [ X ] wrapper
        [ X ] text
            [ X ] text says correct text
*/

describe('Text Banner', () => {
    it('wrapper', () => {
        const { getByTestId } = render(<TextBanner />)
        const wrapper = getByTestId(/wrapper/i)
        expect(wrapper).not.toBe(null)
    })
    it('text', () => {
        const { getByTestId } = render(<TextBanner />)
        const text = getByTestId(/text/i)
        expect(text).not.toBe(null)
    })
    it('text displays correct text', () => {
        const mock_message = 'This Item is on Sale!!! 25% off!!' 
        const { getByTestId } = render(<TextBanner message={mock_message}/>)
        const text = getByTestId(/text/i)
        expect(text.innerHTML).toBe(mock_message)
    })
})