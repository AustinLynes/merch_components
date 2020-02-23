import Item from "./components/item/";// [ X ] isDynamic
import Container from './components/container'// [ NO ] isDynamic   CONTAINER IS A STATIC CONTAINER PLEASE OVERWITE with styled(Continer)
import Carosel from './components/carosel'// [ X ] isDynamic
import Navigation from './components/navigation'// [ X ] isDynamic
import Image from './components/image'// [ NO ] isDynamic IMAGE IS A STATIC ITEM, PLEASE OVERRIDE WITH styled(Image)
import Button from './components/button'  // [ X ] isDynamic
import ButtonGroup from './components/button-group' // [ NO ] isDynamic BUTTON GROUP TAKES IN ALL INTERCHANGEABLE ATTRS
import Header from './components/header' // [ X ] isDynamic
import Footer from './components/footer'// [ X ] isDynamic
import TextBanner from './components/text-banner'
import LinkBar from './components/link-bar'



export {
    Item,
    Container,
    Carosel,
    Navigation,
    Image,
    Button,
    ButtonGroup,
    Header,
    Footer,
    TextBanner,
    LinkBar
};