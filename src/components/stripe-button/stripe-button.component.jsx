import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_odCZ4zEt9kJDBJnpCqi2YV6q00HKsHTEez';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://banner2.cleanpng.com/20180305/dtw/kisspng-ambulance-car-wash-600-vector-crown-vector-crown-5a9d018b94c526.7160460215202389876094.jpg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );

};

export default StripeCheckoutButton;