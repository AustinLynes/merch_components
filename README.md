# merch_components
Welcome to merch components a component library for building web-stores<br/> 
## simplistic use for a simplistic app.. <br/>
**Components** <br/>
***
[Basic Usage](#usage)<br/>
[Container](#container)<br/>
[Header](#header)<br/>
[Item](#item)<br/>
[Navigation](#navigation)<br/>
[Carousel](#carousel)<br/>
[Image](#image)<br/>
[Button](#button)<br/>
[Button Group](#button-group)<br/>
[Link Bar](#link-bar)<br/>
[Placeholder](#placeholder)<br/>
[Footer](#footer)<br/>

<a name='usage'></a>

***
```js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Item, Container } from 'merch_components'
import {data} from './__mock/data'  // ?? or.. 

function App() {
  const [items, setItems] = useState(data);
  
  const styleOverrides = {
    wrapperStyle:{
      width:'100%',
      {...}
    },
    {...}
  }
  handleClick = (e) =>{
    // e.preventDefault() is called by default inside the components...
    clickLogic(...)
  }
  handleChange = (e) =>{
    // e.preventDefault() is called by default inside the components...
    changeLogic(...)
  }
  return (
    <div className="App">
      <Container>
        {/* as you can see all you have to do is pass in the data shape style and cbs */}
        {items && items.map((item, i)=>(<Item item={item} style={styleOverrides} onClickCallback={handleClick} onChangeCallback={handleChange}/>))}
      </Container>
    </div>
  );
}

export default App;
```

<a name='container'></a>

# **Container**
  The Container is used mostly for wrapping multiple components.. <br/> 
  there are exceptions.. <br/>
  the `<Button/>` component for instance would be wrapped inside a `<ButtonGroup/>`.. 
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
***
**CSS AVALABLE TO OVERRIDE**<br/>
   none... sorry.. 
***
<a name='header'></a>

# **Header**
the `<Header/>` is a static component that doesn't move <br/>
it takes in a title, a path to a logo and any style overrides. <br/>
it comes stock with, a search bar and a cart component.
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
***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***
<a name='item'></a>

# **Item**
the `<Item/>` is by far the most complex pre built component. it acceptes an object `{}` for an item <br/>
that will build an item based on the information you pass in. for instance an item thats on sale <br/>
will have a sale flag on the top of it while an item that does not. simply doesnt.. <br/> 
all items accept an image inside the object. if the image isnt found however if one isn't found then<br/> 
the placeholder will show in the place of any image.. all text areas on the item are able to be swapped with<br/>
an input to take in user input and change the item on the fly from the 'builder'<br/>
the `onClickCallback` and `onChangeCallback` respectivly utalize their in built `onChange` and `onClick` events.. just have <br/>
to pass in the method you want to do.
  ```json
  { 
    "id" : 0,
    "itemName": "Item",
    "itemCost": 0.00,
    "imageSrc": "src/to/item-image",
    "saleCost": 0.00,
    "onSale":   false,
    "onClickCallback",
    "onChangeCallback",
  }
   ```
`^^^` the object structure for the item itself <br/>
`vvv` how to use an Item 
```js
import {Container, Item}from 'merch_components';

const Component = ()=>{
  
  const [data, setData] = ({...^})
  const style = {
    ...someStyles
    }
  
  handleClick = (e) =>{
    // add something ?? delete something.. your choice.. your app
    setData({...})
  }
  handleChange = (e) =>{
    // update something ?? 
    setData({...})
  }
  return (
    <Container>
      <Item item={data} style={style} onClickCallback={handleClick} onChangeCallback={handleChange}/>
    </Container>
  )
}
```
***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***

<a name='navigation'></a>

# **Navigation**
```json
{ "links": "[]" }
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
where buttons is an array of button objects with { id, name, url }

***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***

<a name='carousel'></a>

# **Carousel**

```json
  { 
    "images": "[]" 
  }
```

```javascript
  import { Container, Carousel } from 'merch_components'

  const imgs = [...img, ...img, ...img]
  
  const App = () => {
    return (
      <Container>
        <Carousel images={...imgs}/>
      </Container>
    )

  }
```
where images is an array of images.. will cycle    

***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***

<a name='image'></a>


# **Image** 
```json
{
   "size": "[medium, small, none]",
   "src": "src to image", 
}
``` 

```javascript
  import { Container, Carousel } from 'merch_components'

  const path = '../'
  
  const App = () => {
    return (
        <Image size={'medium'} src={path} />
    )

  }
```

 will result in 3 different sized images aspect ratio scaled accordingly

***
**CSS AVALABLE TO OVERRIDE**<br/>
   none... sorry.. 
***

<a name='button'></a>

# **Button** 

```js
{...}
import{Button, ButtonGroup}from 'merch_components';

const Component = () => {
  {...}
  return (
    <ButtonGroup>
    {...}
       <Button name='name-of-button' style={...optionalStyles} onClickCallback={()=>{...}} />
    </ButtonGroup>
  )
}
```
**name => the text that is displayed on the button**<br/>
**style => any optional styles to override the object, acceptes an object { }** <br/>
**onClickCallback => what you want to happen when this item is called.** <br/>

***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***

<a name='button-group'></a>


# **Button Group**
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
***
**CSS AVALABLE TO OVERRIDE**<br/>
   none... sorry.. 
***


<a name='link-bar'></a>


# **Link Bar**
```js
{...}
import{Linkbar}from 'merch_components';
const links = ['facebook', 'twitter']
const Component = () => {
  {...}
  return (
    <Linkbar links={...links} />
  )
}
```
***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***

<a name='placeholder'></a>


# **Placeholder**
```js
{...}
import{ Placeholder }from 'merch_components';
const Component = () => {
  {...}
  return (
    <Placeholder type={'item'} />
  )
}
```
***
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***


<a name='footer'></a>

# **Footer**
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
**CSS AVALABLE TO OVERRIDE**<br/>
  padding, -> padding<br/>
  border, -> border<br/>
  width, -> width<br/>
  border-radius, -> borderRadius<br/>
  background-color, -> backgroundColor<br/>
  color -> color<br/>
***