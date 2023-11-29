import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckoutForm = () => {

     const stripe = useStripe();
     const elements = useElements();
    const [erorr,setErorr] = useState('')

    const [clintSecret,setClintSecret] = useState('')


    const axiosSercure = useAxiosSecure();
    

    useEffect(() => {
      try{
        axiosSercure
        .post('/create-payment-intent', { price: 5000 })
        .then((res) => {
          setClintSecret(res.data.clientSecret);
          console.log(res.data.clientSecret);
        });
      }catch(erorr){
        console.log(erorr)
      }
    },[axiosSercure])

    
    const handleSubmit  = async (e) => {
        e.preventDefault();

            if (!stripe || !elements) {
              return;
            }

            const card = elements.getElement(CardElement);

            if (card === null) {
              return;
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
              type : 'card',
              card
            });

            if (error) {
              setErorr(error.message)
            } else {
              setErorr('')
              console.log(paymentMethod)
            }
        
            

       


    }

    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-green-600 text-white px-3 py-2 rounded-md"
          disabled={!stripe || !clintSecret}
        >
          Pay
        </button>
        <p>{erorr}</p>
      </form>
    );
};

export default CheckoutForm;