# merch_components
Labs Lib for merch store default components

simplistic use for a simplistic app..
all you have to do is pass in your data shape to an Component like Item and it will create the item dynamicly
also you can pass in callbacks to toggle the state of the actual card. 

```js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Item, Container } from 'merch_components'
import {data} from './__mock/data'  // ?? or.. 

function App() {
  const [items, setItems] = useState(data);
  


  return (
    <div className="App">
      <Container>
        {items && items.map((item, i)=>(<Item item={item} />))}
      </Container>
    </div>
  );
}

export default App;
```
**Container**
*** 
```js
{...}
import{ Container }from 'merch_components';

const Component = () => {
  {...}
  return (
    <Container>{..wraps most components}</Container>
  )
}
```


**Header**
***
```js
{...}
import{Header}from 'merch_components';

const Component = () => {
  {...}
  return (
    <Header title='title of store' logoSrc='url-or-path/to/src' style={...anyOverridingStyles}/>
  )
}
```
**Item**
***  
  ```json
  { 
    "id" : 0,
    "itemName": "Item",
    "itemCost": 0.00,
    "imageSrc": "src/to/item-image",
    "saleCost": 0.00,
    "onSale":   false,
    "toggleOnSale": "()=>{}",
    "submitCallback",
    "updateItem", 
    "deleteItem"
  }
   ```
    ^^^ the object structure for the item itself
    vvv how to use an Item 
```js
import {Container, Item}from 'merch_components';

const Component = ()=>{
  
  const [data, setData] = ({...^})
  const style = {
    ...someStyles
    }
  
  
  return (
    <Container>
      <Item item={data} style={style}/>
    </Container>
  )
}
```
**Navigation**
*** 
```json
{ "buttons": "[]" }
 ```
 
 ```js
{...}
import{Navigation}from 'merch_components';

const Component = () => {
  {...}  
  return (
    <Navigation buttons={[buttons1, button2]} style={...anyOverridingStyles}/>
  )
}
```


### where buttons is an array of button objects with { id, name, url }

**Carosel**
***
```json
  { 
    "images": "[]" 
  }
```
### where images is an array of images.. will cycle    


**Image** 
```json
{
   "size": "[medium, small, none]",
   "src": "src to image", 
}
``` 
### will result in 3 different sized images aspect ratio scaled accordingly

**Button** 
*** 
```js
{...}
import{Button, ButtonGroup}from 'merch_components';

const Component = () => {
  {...}
  return (
    <ButtonGroup>
    {...}
       <Button name='name-of-button' onClickCallback={()=>{...}} />
    </ButtonGroup>
  )
}
```

**ButtonGroup**
***
```js
{...}
import{Button, ButtonGroup}from 'merch_components';

const Component = () => {
  {...}
  return (
    <ButtonGroup>
    {...}
    <Button />
    </ButtonGroup>
  )
}
```

**Footer**
***
```json
{ "buttons": "[]" }
 ```
 ```js
{...}
import{ Footer }from 'merch_components';

const Component = () => {
  {...}  
  return (
    <Footer buttons={[ {...button1 }, {...button2 } ]} style={{...anyOverridingStyles}}/>
  )
}
```
***
**--/UPDATE LOG/-->**
| Notes                              | completed |
|------------------------------------|-----------|
| updateItem->updateItemCallback     | [NO]      |
| toggleOnSale->toggleOnSaleCallback | [NO]      |
| deleteItem->deleteItemCallback     | [NO]      |
| spelling on Carousel on vers++     | [NO]      |

***