import React, {useEffect, useState} from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import {Box, Dialog, styled} from "@mui/material"
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import FirstFooter from '../footer/FirstFooter'
import MidFooter from '../footer/MidFooter'
import Chatbot from '../Chatbot/Chatbot'

const Component = styled(Box)`
    padding: 10px 10px;
    background: #f2f2f2;
`

const Home = () => {
  const [open, setOpen] = useState(false)
  const {products} = useSelector(state => state.getProducts)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
        <Navbar />
        <Component>
            <Banner />
            <MidSlide products={products} title="Deals of the Day" timer={true} />
            <MidSection />
            <Slide products={products} title="Discounts for You" timer={false} slideImg="" />
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Top Selections" timer={false}/>
            <Slide products={products} title="Trending offers" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
        </Component>
        <FirstFooter />
        <MidFooter />
        <img src="https://assets.gallabox.com/gb-home/footer_robot.gif" alt="" onClick={handleOpen} style={{
          width: "120px",
          cursor: "pointer",
          height: "120px",
          position: "fixed",
          zIndex: "1000",
          bottom: "10%",
          right: "8%",
        }} />
        <Dialog open={open} onClose={handleClose}>
          <Chatbot />
        </Dialog>
    </>
  )
}

export default Home