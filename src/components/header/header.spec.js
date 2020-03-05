import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Header from './index'

// Sorry only basic render tests for now.. time crunch
/*
*    [ Header ]
*    [ X ] header wrapper
*    [ X ] logo
*    [ X ] title
*        [ X ] title wrapper
*        [ X ] title text
*    [ X ] search bar
*        [ X ] search bar wrapper
*        [ X ] query box
*        [ X ] search button
*    [ X ] cart icon
*        [ X ] cart icon wrapper
*        [ X ] cart icon
*        [ X ] cart count text
*/ 

describe('Header', () => {
    describe('all components render properly', () => {
        it('wrapper', () =>{
            const { getByTestId } = render(<Header />)
            const wrapper = getByTestId(/header-wrapper/i)
            expect(wrapper).not.toBe(null) 
        })
        it('logo', ()=>{
            const { getByTestId } = render(<Header />)
            const logo = getByTestId(/logo/i)
            expect(logo).not.toBe(null)
        })
        it('title wrapper', ()=>{
            const { getByTestId } = render(<Header />)
            const wrapper = getByTestId(/title-wrapper/i)
            expect(wrapper).not.toBe(null)
        })
        it('title text', ()=>{
            const { getByTestId } = render(<Header />)
            const text = getByTestId(/title-text/i)
            expect(text).not.toBe(null)
        })
        it('search bar wrapper', ()=>{
            const { getByTestId } = render(<Header />)
            const wrapper = getByTestId(/searchbar-wrapper/i)
            expect(wrapper).not.toBe(null)
        })
        it('query box', ()=>{
            const { getByTestId } = render(<Header />)
            const queryBox = getByTestId(/query box/i)
            expect(queryBox).not.toBe(null)
        })
        it('search button', ()=>{
            const { getByTestId } = render(<Header />)
            const button = getByTestId(/search button/i)
            expect(button).not.toBe(null)
        })
        it('cart icon wrapper', ()=>{
            const { getByTestId } = render(<Header />)
            const wrapper = getByTestId(/cart-icon-wrapper/i)
            expect(wrapper).not.toBe(null)
        })
        it('cart icon', ()=>{
            const { getByTestId } = render(<Header />)
            const icon = getByTestId(/cart icon/i)
            expect(icon).not.toBe(null)
        })
        it('cart count text', ()=>{
            const { getByTestId } = render(<Header />)
            const text = getByTestId(/cart count text/i)
            expect(text).not.toBe(null)
        })
    })
})