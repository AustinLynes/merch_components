import React from 'react'
import LinkBar from './index'
import { render } from '@testing-library/react'

/*
    [ Link Bar ]
    Link bar No Links
    [ X ] wrapper
    [ X ] Placeholder

    Link with Links
    [ X ] wrapper
    [ X ] link cards
        [ X ] correct amount 
    [ X ] icons 
        [ X ] correct amount 
  
*/

describe('Link Bar', () => {
    describe('no links', () => {
        it('wrapper', () => {
            const { getByTestId } = render(<LinkBar />)
            const wrapper = getByTestId(/wrapper/i)
            expect(wrapper).not.toBe(null)
        })
        it('placeholder', () => {
            // NOTE => Placeholder is its own component thus needs its own id.. cant add it to where its 
            // called in the actual link bar
            const { getByTestId } = render(<LinkBar />)
            const placeholder = getByTestId(/placeholder/i)
            expect(placeholder).not.toBe(null)
        })
    })
    describe('links', () => {
        const mock_links = [{ name: 'facebook' }, { name: 'github' }, { name: 'twitter' }]
       
        it('wrapper', () => {
            const { getByTestId } = render(<LinkBar links={mock_links} />)
            const wrapper = getByTestId(/wrapper/i)
            expect(wrapper).not.toBe(null)
        })
        it('link cards', () => {
            const { getAllByTestId } = render(<LinkBar links={mock_links} />)
            const linkCards = getAllByTestId(/link-card/i)
            expect(linkCards.length).toBeGreaterThan(0)
        })
        it('correct amount of link cards', () => {
            const { getAllByTestId } = render(<LinkBar links={mock_links} />)
            const linkCards = getAllByTestId(/link-cards/i)
            expect(linkCards).toHaveLength(mock_links.length)
        })
        it('icon', () => {
            const { getAllByTestId } = render(<LinkBar links={mock_links} />)
            const icons = getAllByTestId(/link-card-icon/i)
            expect(icons).toHaveLength(mock_links.length)
        })
        
    })
})