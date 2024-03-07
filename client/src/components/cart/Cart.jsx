import React from 'react'
import {useSelector} from "react-redux"
import {Box, Grid, Typography, styled, Button} from "@mui/material"
import CartItem from './CartItem'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom'

const Container = styled(Grid)(({theme}) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")] : {
    padding: "15px 0"
  }
}))
  

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background-color: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15
  }
}));

const Cart = () => {

  const {cartItems } = useSelector(state => state.cart)
  const navigate = useNavigate()
  const tokenHandler = (token) => {
    console.log(token)
    navigate("/")
    window.location.reload(false);
  }
  const priceL = localStorage.getItem("price")

  return (
    <>
      {
        cartItems.length ? 
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {
              cartItems.map(item => (
                <CartItem item={item} />
              ))
            }
            <ButtonWrapper>
            <StripeCheckout 
              amount={priceL * 100}
              shippingAddress
              token={tokenHandler}
              stripeKey="pk_test_51MZ9bISGTZPRy0ITwN3x8ZkDXgbVWROwPgJh7hidWbEOY03AszvFyJAYDTK6d9PNOMolou1tfR3zfgl45YzJ1GXT00uvziX3YW"
              currency="INR"
            >
              <StyledButton>Place Order</StyledButton>
            </StripeCheckout>  
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems}/>
          </Grid>
        </Container>
        : <EmptyCart />
      }
    </>
  )
}

export default Cart