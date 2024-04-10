// Action creator for saving address to localStorage
export const saveAddressToLocalStorage = (addressData) => ({
    type: 'SAVE_ADDRESS_TO_LOCAL_STORAGE',
    payload: {
      addressData,
    },
  });
  
  // Action creator for saving billing data to localStorage
  export const saveBillingToLocalStorage = (billingData) => ({
    type: 'SAVE_BILLING_TO_LOCAL_STORAGE',
    payload: {
      billingData,
    },
  });
  
  // Action creator for saving credit card data to localStorage
  export const saveCreditToLocalStorage = (creditData) => ({
    type: 'SAVE_CREDIT_TO_LOCAL_STORAGE',
    payload: {
      creditData,
    },
  });


  export const saveNameToLocalStorage = (nameData) => ({
    type: 'SAVE_NAME_TO_LOCAL_STORAGE',
    payload: {
      nameData,
    },
  });