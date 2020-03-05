import React from 'react'
import Item from './'
import { render } from '@testing-library/react'
/*
///////////////////////////////////////////////
///// Item ///////////////////////////////////
//////////////////////////////////////////////
 with item_data
        L> [ X ] wrapper
        L> [ X ] item name
            L> [ X ] displays correct name
        L> [ X ] Item Description
            L>[ X ] displays correct description
        L> [ X ] Placeholder
                L> [ X ] wrapper
                L> [ X ] plus icon
                L> [ X ] text
        L> [ X ] Item Cost
            L>[ X ] displays correct cost
        L> [ X ] Close Button

item image with image
     L> [ X ] wrapper
        L> [ X ] item name
            L> [ X ] displays correct name
        L>[ X ] Image
            L> [ X ] image
        L> [ X ] Item Cost
            L>[ X ] displays correct cost
        L> [ X ] Item Description
            L>[ X ] displays correct description
        L> [ ] Close Button

item on sale
        L> [ X ] wrapper
        L> [ X ] item name
            L> [ X ] displays correct name
        L> [ X ] Item Description
            L>[ X ] displays correct description
        L>[ X ] Image
            L> [ X ] image
        L> [ X ] Item Cost
            L>[ X ] displays correct cost
        L> [ X ] Item Sale Cost
            L>[ X ] displays correct cost
        L> [ X ] Item Sale Flag
        L> [ X ] Close Button

no item_data
        L> [ X ] placeholder
                L> [ X ] wrapper
                L> [ X ] plus icon
                L> [ X ] text
*/

describe('Item', () => {
    const mock_item = {
        itemName: 'shirt 01',
        itemDescription: 'Soft Shirt',
        itemCost: 12.49,
        onSale: false
    }

    it('wrapper', () => {
        const { getByTestId } = render(<Item item={mock_item} />)
        const wrapper = getByTestId(/wrapper/i);
        expect(wrapper).not.toBe(null)
    })
    describe('itemName', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemName = getByTestId(/item-name/i);
            expect(itemName).not.toBe(null)
        })
        it('renders correct name', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemName = getByTestId(/item-name/i);
            expect(itemName.innerHTML).toBe(mock_item.itemName)
        })
    })
    describe('no image means it should have a placeholder', () => {
        it('placeholder', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const placeholder = getByTestId(/placeholder/i);
            expect(placeholder).not.toBe(null)
        })
        it('plus icon', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const plusIcon = getByTestId(/plus-icon/i);
            expect(plusIcon).not.toBe(null)
        })
        it('text', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const text = getByTestId(/text/i);
            expect(text).not.toBe(null)
        })
    })
    describe('itemDescription', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemDescription = getByTestId(/item-description/i);
            expect(itemDescription).not.toBe(null)
        })
        it('renders correct description', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemDescription = getByTestId(/item-description/i);
            expect(itemDescription.innerHTML).toBe(mock_item.itemDescription)
        })
    })
    describe('itemCost', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemCost = getByTestId(/item-cost/i);
            expect(itemCost).not.toBe(null)
        })
        it('renders correct cost', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemCost = getByTestId(/item-cost/i);
            expect(parseFloat(itemCost.innerHTML)).toBe(mock_item.itemCost)
        })
    })
    it('close button', () => {
        const { getByTestId } = render(<Item item={mock_item} />)
        const closeButton = getByTestId(/close-button/i);
        expect(closeButton).not.toBe(null)
    })
})
describe('Item with Image', () => {
    const mock_item = {
        itemName: 'shirt 01',
        itemDescription: 'Soft Shirt',
        imageSrc: 'shirt.png',
        itemCost: 12.49,
        onSale: false
    }
    it('wrapper', () => {
        const { getByTestId } = render(<Item item={mock_item} />)
        const wrapper = getByTestId(/wrapper/i);
        expect(wrapper).not.toBe(null)
    })
    describe('itemName', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemName = getByTestId(/item-name/i);
            expect(itemName).not.toBe(null)
        })
        it('renders correct name', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemName = getByTestId(/item-name/i);
            expect(itemName.innerHTML).toBe(mock_item.itemName)
        })
    })
    describe('itemSrc', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const imageSrc = getByTestId(/item-image/i);
            expect(imageSrc).not.toBe(null)
        })
        it('renders correct image', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const imageSrc = getByTestId(/item-image/i);
            expect(imageSrc.src).toBe(`http://localhost/${mock_item.imageSrc}`)
        })
    })
    describe('itemDescription', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemDescription = getByTestId(/item-description/i);
            expect(itemDescription).not.toBe(null)
        })
        it('renders correct name', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemDescription = getByTestId(/item-description/i);
            expect(itemDescription.innerHTML).toBe(mock_item.itemDescription)
        })
    })
    describe('itemCost', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemCost = getByTestId(/item-cost/i);
            expect(itemCost).not.toBe(null)
        })
        it('renders correct cost', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemCost = getByTestId(/item-cost/i);
            expect(parseFloat(itemCost.innerHTML)).toBe(mock_item.itemCost)
        })
    })
    it('close button', () => {
        const { getByTestId } = render(<Item item={mock_item} />)
        const closeButton = getByTestId(/close-button/i);
        expect(closeButton).not.toBe(null)
    })
})
describe('Sale Item', () => {
    const mock_item = {
        itemName: 'shirt 01',
        itemDescription: 'Soft Shirt',
        imageSrc: 'shirt.png',
        itemCost: 12.49,
        onSale: true,
        saleCost: 5.55
    }
    it('wrapper', () => {
        const { getByTestId } = render(<Item item={mock_item} />)
        const wrapper = getByTestId(/wrapper/i);
        expect(wrapper).not.toBe(null)
    })
    describe('itemName', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemName = getByTestId(/item-name/i);
            expect(itemName).not.toBe(null)
        })
        it('renders correct name', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemName = getByTestId(/item-name/i);
            expect(itemName.innerHTML).toBe(mock_item.itemName)
        })
    })
    describe('itemSrc', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const imageSrc = getByTestId(/item-image/i);
            expect(imageSrc).not.toBe(null)
        })
        it('renders correct image', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const imageSrc = getByTestId(/item-image/i);
            expect(imageSrc.src).toBe(`http://localhost/${mock_item.imageSrc}`)
        })
    })
    describe('itemDescription', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemDescription = getByTestId(/item-description/i);
            expect(itemDescription).not.toBe(null)
        })
        it('renders correct description', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemDescription = getByTestId(/item-description/i);
            expect(itemDescription.innerHTML).toBe(mock_item.itemDescription)
        })
    })
    describe('itemCost', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemCost = getByTestId(/item-cost/i);
            expect(itemCost).not.toBe(null)
        })
        it('renders correct cost', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemCost = getByTestId(/item-cost/i);
            expect(parseFloat(itemCost.innerHTML)).toBe(mock_item.itemCost)
        })
    })
    describe('itemSaleCost', () => {
        it('renders properly', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const itemSaleCost = getByTestId(/item-sale-cost/i);
            expect(itemSaleCost).not.toBe(null)
        })
        it('renders correct cost', () => {
            const { getByTestId } = render(<Item item={mock_item} />)
            const saleCost = getByTestId(/item-sale-cost/i);
            expect(parseFloat(saleCost.innerHTML)).toBe(mock_item.saleCost)
        })
    })
    it('item Sale Flag', ()=>{
        const { getByTestId } = render(<Item item={mock_item} />)
        const saleFlag = getByTestId(/item-sale-flag/i);
        expect(saleFlag).not.toBe(null)
    })
    it('close button', () => {
        const { getByTestId } = render(<Item item={mock_item} />)
        const closeButton = getByTestId(/close-button/i);
        expect(closeButton).not.toBe(null)
    })
})
describe('Item no Data => Placeholder', () => {
    it('placeholder', () => {
        const { getByTestId } = render(<Item />)
        const placeholder = getByTestId(/placeholder/i);
        expect(placeholder).not.toBe(null)
    })
    it('plus icon', () => {
        const { getByTestId } = render(<Item  />)
        const plusIcon = getByTestId(/plus-icon/i);
        expect(plusIcon).not.toBe(null)
    })
    it('text', () => {
        const { getByTestId } = render(<Item  />)
        const text = getByTestId(/text/i);
        expect(text).not.toBe(null)
    })
})