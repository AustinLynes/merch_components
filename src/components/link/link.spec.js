import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Link } from './index'
/*
    [ link ]
        [ X ] link
            [ X ] displays correct name on link   
*/

describe('Link', () => {
    it('link', () => {
        const { getByTestId } = render(<Link />)
        const link = getByTestId(/link element/i)
        expect(link).not.toBe(null);
    })
    it('link name is correct', () => {
        const { getByTestId } = render(<Link name='about' />)
        const link = getByTestId(/link element/i)
        expect(link.innerHTML).toBe('about');
    })
})