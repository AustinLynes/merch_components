import React from 'react';
import Button from './index';
import { render } from '@testing-library/react'

describe('it renders without crashing', () => {
    const __button = {
        name: 'About',
        style: {
            wrapperStyle: {
                background: 'red',
                color: 'white',
                borderRadius: '10px',
                border: 'none'
            }
        }
    }
    it('button', () => {
        const button = render(<Button name={__button.name} style={__button.style} />);
        expect(button.getByText('About')).not.toBe(null)
    })
})

describe('it can be created with dynamic content', () => {
    const __button = {
        name: 'About',
        style: {
            wrapperStyle: {
                background: 'red',
                color: 'white',
                borderRadius: '10px',
                border: 'none'
            }
        }
    }

    it('returns the correct name', () => {
        const button = render(<Button name={__button.name} />)
        expect(button.getByText('About').name).toBe(__button.name)
    })


})