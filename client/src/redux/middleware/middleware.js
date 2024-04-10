const localStorageMiddleware = (store) => next => action =>{

if(action.type === 'SAVE_ADDRESS_TO_LOCAL_STORAGE'){
    const addressData = action.payload.addressData;
    localStorage.setItem('address', JSON.stringify(addressData));
}else if( action.type === 'SAVE_BILLING_TO_LOCAL_STORAGE'){
    const billingData = action.payload.billingData;
    localStorage.setItem('billing', JSON.stringify(billingData));
}else if( action.type === 'SAVE_CREDIT_TO_LOCAL_STORAGE'){
    const creditData = action.payload.creditData;
    localStorage.setItem('credit', JSON.stringify(creditData));
}
else if( action.type === 'SAVE_NAME_TO_LOCAL_STORAGE'){
    const nameData = action.payload.nameData;
    localStorage.setItem('name', JSON.stringify(nameData));
}

return next(action)
}


export default localStorageMiddleware