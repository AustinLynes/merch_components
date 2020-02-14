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
        {items && items.map((item, i)=>(<Item {...item} ></Item>))}
      </Container>
    </div>
  );
}

export default App;

```