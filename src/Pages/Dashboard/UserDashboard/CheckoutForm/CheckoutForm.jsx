import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './checkout.css'
import useAuth from '../../../../HOOKS/useAuth';
import { useParams } from 'react-router-dom';
import useCart from '../../../../HOOKS/useCart';
import useAxiosSecure from '../../../../HOOKS/useAxiosSecure';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('');
    const [proccesing, setProccesing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [error, setError] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [cart] = useCart();
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure()
    // console.log(id);
    const filter = cart.find(item => item._id == id);
    // console.log(price);
    const price = filter.price;

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", {price: price})
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
        }
    },[price, axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error.message);
        } else {
            console.log('[paymentMethod]', paymentMethod);
        }

        setProccesing(true)

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user.email || 'unknown',
                        name: user.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProccesing(false);

        if (paymentIntent?.status == 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                name: user.displayName,
                email: user.email,
                price: price,
                date: new Date(),
                itemId: filter._id
            };
            if (payment) {
                axiosSecure.post("/payment", payment)
                .then(res => {
                    if (res.data.insertedResult.insertedId) {
                        
                    }
                })
            }
            console.log(payment);
            console.log(transactionId);
        }

    }


    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Book</h1>
                <h1 className='text-2xl font-bold'>{user?.displayName}</h1>
            </div>
            <div className=' font-semibold mt-10'>
                <input disabled type="text" defaultValue={user?.displayName}  className='mt-4 input'/>
                <input disabled type="text" defaultValue={user?.email}  className='mt-4 input'/>
                <input disabled type="text" defaultValue={filter?.name}  className='mt-4 input'/>
            </div>
            <form className='form mt-4' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btnp hover:bg-rose-400 btn' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {transactionId && <p className='mt-4'>TransactionId : {transactionId}</p>}
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default CheckoutForm;