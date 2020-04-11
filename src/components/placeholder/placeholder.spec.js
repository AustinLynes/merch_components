import React from 'react'
import { Placeholder } from './index'
import { render } from '@testing-library/react'

/*
    [ Placeholder ]
        [ X ] wrapper
        [ X ] icon
        [ X ] text
            [ X ] text says correct text
*/

describe('Placeholder', () => {
    it('placeholder', () => {
        const { getByTestId } = render(<Placeholder />)
        const wrapper = getByTestId(/placeholder/i)
        expect(wrapper).not.toBe(null)
    })
    it('text', () => {
        const { getByTestId } = render(<Placeholder />)
        const text = getByTestId(/text/i)
        expect(text).not.toBe(null)
    })
    it('text should say', () => {
        const { getByTestId } = render(<Placeholder type='Item'/>)
        const text = getByTestId(/text/i)
        expect(text.innerHTML).toBe('Add an Item')
    })
})