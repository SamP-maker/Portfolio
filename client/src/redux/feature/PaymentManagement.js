import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {saveAddressToLocalStorage} from '../actions/actionCreator';





const initialState ={

        PaymentSelection:{

            Type:{
                Bank:{
                    BankName:'',
                    Status:false,
                    

                },
                TouchNGo:{
                    Number:'',
                    Status:false,
                    

                },
                CreditCard:{
                    Last4DigitNumber:'',
                    Status:false,
                   
                    
                },
                CashOnDelivery:{
                    Name:'',
                    Status:false,
            
                },
            },

            PrevType:{
                Bank:{
                    BankName:'',
                    Status:false,
                    

                },
                TouchNGo:{
                    Number:'',
                    Status:false,
                    

                },
                CreditCard:{
                    Last4DigitNumber:'',
                    Status:false,
                   
                    
                },
                CashOnDelivery:{
                    Name:'',
                    Status:false,
            
                },
            },
            

        },


    
}




const PaymentMethodSlice = createSlice({
    name:'PaymentMethod',
    initialState:initialState.PaymentSelection,
    reducers:{

       
        setPaymentTypeStatus:(state,action)=>{
           const { PaymentType} = action.payload;

           const outerKey = Object.keys(PaymentType)[0];
           const innerKey = Object.keys(PaymentType[outerKey])[0];
           const value = PaymentType[outerKey][innerKey];


           const statusKey = Object.keys(PaymentType[outerKey])[1];
           const Status = PaymentType[outerKey][statusKey];

          
           
           for (const paymentType in state.Type) {
            state.Type[paymentType].Status = false;
        }
          
          
            
            state.Type={
                ...state.Type,
                [outerKey]:{
                    ...state.Type[outerKey],
                    [innerKey]:value,
                    Status:Status
                    
                },
            };
           

            
           },

           setPrevPaymentStatusType:(state,action)=>{

            const { PaymentType} = action.payload;

           const outerKey = Object.keys(PaymentType)[0];
           const innerKey = Object.keys(PaymentType[outerKey])[0];
           const value = PaymentType[outerKey][innerKey];


           const statusKey = Object.keys(PaymentType[outerKey])[1];
           const Status = PaymentType[outerKey][statusKey];

          
           
           for (const paymentType in state.Type) {
            state.Type[paymentType].Status = false;
        }
          
          
            
            state.Type={
                ...state.Type,
                [outerKey]:{
                    ...state.Type[outerKey],
                    [innerKey]:value,
                    Status:Status
                    
                },
            };

           }
          



           
           
            
           }

    }
)



export const {setPaymentTypeStatus,clearPaymentTypeStatus,setPrevPaymentStatusType} = PaymentMethodSlice.actions;
export const PaymentReducer = PaymentMethodSlice.reducer;