import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Image from './index'
/*
    Image no src
        [ X ] placeholder
        [ X ] icon
        [ X ] text
    Image with src
        [ X ] image   
*/
describe('Image no src', () => {
    it('renders a placeholder', () => {
        const { getByTestId } = render(<Image />)
        const placeholder = getByTestId(/placeholder/i)
        expect(placeholder).not.toBe(null)
    })
    it('renders a icon', () => {
        const { getByTestId } = render(<Image />)
        const icon = getByTestId(/icon/i)
        expect(icon).not.toBe(null)
    })
    it('renders a text element', () => {
        const { getByTestId } = render(<Image />)
        const text = getByTestId(/text/i)
        expect(text).not.toBe(null)
    })
    it('text renders correct text, -> expects -> Tap to add a photo', () => {
        const { getByText } = render(<Image />)
        const text = getByText(/tap to add a photo/i)
        expect(text.innerHTML).toBe("Tap to add a photo");
    })
})
describe('Image with src', () => {
    it('renders a image', () => {
        const mock_image = 'goku.png'
        const { getByTestId } = render(<Image src={mock_image} />)
        const image = getByTestId(/image/i)
        expect(image).not.toBe(null)
    })
})