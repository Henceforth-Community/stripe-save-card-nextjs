import {
    CardElement, useStripe, useElements
} from "@stripe/react-stripe-js"; 1
import { Button } from "antd";
import { FormEvent, useState } from "react";
import stripe from "stripe";

const CheckoutForm = (props: any) => {
    const[payment_id,setpaymentId]=useState<any>('')
    const stripe = useStripe();
    const elements: any = useElements();


    const handlesubmit = async (e: any) => {
        e.preventDefault()
        const cardElement = elements.getElement(CardElement)
        const payload: any = await stripe?.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        let Payment_id = payload.paymentMethod?.id
        console.log('payment_id', Payment_id)
        setpaymentId(Payment_id)
    }

  
    

    return (<>
    
      <form onSubmit={(e) => handlesubmit(e)}>
            <CardElement className="border p-3 rounded col-4" />
            <div className="col-6 d-flex mt-5 ">
                <div className="availabel-btn mt-4">
                    <Button size='large' htmlType='submit' type='primary' >Make Payment </Button>
                </div>
                <div className="availabel-btn mt-4">
                    <Button size='large' type='primary'>Cancel</Button>
                </div>
            </div>
        </form>

{(payment_id!=null &&payment_id.trim()!='')&&<input type="text" value={payment_id} />}

    </>)
}
export default CheckoutForm;
// 'pk_test_51NbGHiFD7Ln7fs7IGktBEJDqhuCvFSljkc5jSMzbr1iCyHnuRbz2CAvQXzLSZp8V27dcBvUnDUGWb2qf8wbTwt6R00qhkZwF2v'