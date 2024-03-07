import React from 'react'
import {Segment} from "semantic-ui-react"
import ChatBot from "react-simple-chatbot"
const Chatbot = () => {
    const steps=[
        {
            id:'Greet',
            message:'Hello,welcome to Flipkart',
            trigger:'Ask name'
        },
        {
            id:"Ask name",
            message:'Please enter your name',
            trigger:'waiting1'
        },
        {
            id:'waiting1',
            user:true,
            trigger:'Name'
        },{
            id:'Name',
            message:'Hi, {previousValue},Please select your issue',
            trigger:'issues'
        },{
            id:'issues',
            options:[{value:'Order Details',label:"Order Details",trigger:"Order Details"},
            {value:'Cancel Order',label:"Cancel Order",trigger:"Cancel Order"}]
        },{
            id:"Order Details",
            message:"Your Order Detail is send to your provided mobile number and also gmail.Thankyou!!",
            end:true
        }
        ,{
            id:"Cancel Order",
            message:"Thanks for telling issue we will provide your update on registered mobile number.Thankyou",
            end:true
        }

    ]
  return (
    <div>
       <Segment zIndex="1" float={"right"}  >
        <ChatBot  steps={steps} />
       </Segment>
    </div>
  )
}

export default Chatbot