import React from 'react';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 step4 />
      <h1>Place Order</h1>
    </FormContainer>
  );
};

export default PlaceOrderScreen;
