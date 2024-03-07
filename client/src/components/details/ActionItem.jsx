import React from 'react'
import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from "../../redux/actions/cartActions"
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
import StripeCheckout from "react-stripe-checkout"

const LeftContainer = styled(Box)(({theme}) => ({
   minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("lg")] : {
      padding: "20px 40px",
    }
}))
    

const Image = styled("img")({
    padding: "15px 20px",
    width: "95%"
    
})
const StyledButton = styled(Button)(({theme}) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")] : {
    width: "46%"
  },
  [theme.breakpoints.down("sm")] : {
    width: "48%",
  }
}))
   



const ActionItem = ({product}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.cartItems)
  console.log(data);
  const [quantity, setQuantity] = useState(1)

  const {id} = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate("/cart")
  }
  // const buyNow = () => {
  //   let response = payUsingPaytm({ amount: 500, email: "garg.nitika1998@gmail.com"})
  //   let information = {
  //     action: "https://securegw-stage.paytm.in/order/process",
  //     params: response
  //   }
  //   post(information)
  //   localStorage.setItem("buy-price", product.price.cost)
  // }
  const tokenHandler = (token) => {
    console.log(token)
    navigate("/")
  }


  return (
    <LeftContainer>
        <Box style={{padding: "15px 20px", border: "1px solid #f0f0f0", width: "90%"}}>
          <Image src={product.detailUrl} alt="" />
        </Box>
        <StyledButton variant="contained" onClick={() => addItemToCart()} style={{marginRight: 10, background: "#ff9f00"}}><ShoppingCartIcon />Add to Cart</StyledButton>
        <StripeCheckout 
          amount={product.price.cost * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51MZ9bISGTZPRy0ITwN3x8ZkDXgbVWROwPgJh7hidWbEOY03AszvFyJAYDTK6d9PNOMolou1tfR3zfgl45YzJ1GXT00uvziX3YW"
          currency="INR"
        >
          <StyledButton variant="contained" style={{background: "#fb541b"}}><FlashOnIcon />Buy Now</StyledButton></StripeCheckout>
    </LeftContainer>
  )
}

export default ActionItem