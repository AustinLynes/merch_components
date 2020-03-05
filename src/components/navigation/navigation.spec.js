import React from 'react'
import Navigation from './'
import { render } from '@testing-library/react'

/*
    [ Navigation ]
    Navigation No Links
    [ X ] wrapper

    Navigation with Links
    [ X ] wrapper
    [ X ] links
        [ X ] correct amount 
        [ X ] correct names for each  
*/

describe('Navigation no Links', () => {
    it('wrapper', () => {
        const { getByTestId } = render(<Navigation />)
        const wrapper = getByTestId(/wrapper/i);
        expect(wrapper).not.toBe(null);
    })

})
describe('Navigation with Links', () => {
    it('wrapper', () => {
        const { getByTestId } = render(<Navigation />)
        const wrapper = getByTestId(/wrapper/i);
        expect(wrapper).not.toBe(null);
    })
    it('links', () => {
        const mock_links = [
            { name: 'link_a', url: 'a.b.com' },
            { name: 'link_b', url: 'b.a.com' },
            { name: 'link_c', url: 'c.a.bom' }
        ]
        const { getAllByText } = render(<Navigation links={mock_links} />)
        const links = getAllByText(/link/i);
        expect(links.length).toBeGreaterThan(0);
    })
    it('Correct Amount', () => {
        const mock_links = [
            { name: 'link_a', url: 'a.b.com' },
            { name: 'link_b', url: 'b.a.com' },
            { name: 'link_c', url: 'c.a.bom' }
        ]
        const { getAllByText } = render(<Navigation links={mock_links} />)
        const links = getAllByText(/link/i);
        expect(links).toHaveLength(mock_links.length);
    })
    it('Correct Names for each', () => {
        const mock_links = [
            { name: 'link_a', url: 'a.b.com' },
            { name: 'link_b', url: 'b.a.com' },
            { name: 'link_c', url: 'c.a.bom' }
        ]
        const { getAllByText } = render(<Navigation links={mock_links} />)
        const links = getAllByText(/link/i);
        links.forEach((link, i) => {
            expect(link.innerHTML).toBe(mock_links[i].name);
        });
    })
})