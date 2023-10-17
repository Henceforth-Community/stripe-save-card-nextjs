import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkoutform';
import React from 'react';

// ''pk_test_51NbGHiFD7Ln7fs7IGktBEJDqhuCvFSljkc5jSMzbr1iCyHnuRbz2CAvQXzLSZp8V27dcBvUnDUGWb2qf8wbTwt6R00qhkZwF2v''

const StripeConnect = (props: any) => {
  const [valid, setValid] = React.useState(false)

  React.useEffect(() => {
    console.log(props.apiKey);

    loadStripe(props.apiKey, {

    }).then((res: any) => {
      console.log(res);

      if (res?._keyMode === "unknown") {
        console.log(res);
        setValid(false)
      } else {
        setValid(true)
        props.setHide(false)
      }

    }).catch(err => {
      console.log(err);

    });
  }, [props.apiKey])
  if (valid) {
    const stripePromis = loadStripe(props.apiKey)
    // console.log();

    return (
      <>
        <Elements stripe={stripePromis} ><CheckoutForm /> </Elements>
      </>

    )
  } else {
    return <></>
  };
};
export default React.memo(StripeConnect);