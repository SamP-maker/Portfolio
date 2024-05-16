import React,{useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { setPaymentTypeStatus } from "../../redux/feature/PaymentManagement";







const Testing = ()=>{

    const dispatch = useDispatch();
    const { Type, Status} = useSelector(store => store.Payment)

    const [paymentMethod, setPaymentMethod] = useState({

        PaymentType:{
            Bank:{
                BankName:'',
            },


        },
        Status:false,





    })

    const handleSetMethod = ()=>{
        
        setPaymentMethod({
            PaymentType:{
                Bank:{
                    BankName:'HSBC'

                },
    
    
            },
            Status:true,
        })

        
    }


    useEffect(() => {
        dispatch(setPaymentTypeStatus(paymentMethod));
        console.log(Type);
        console.log(Status);
    }, [paymentMethod, dispatch]);


    

    



    return(
      
        <button onClick={handleSetMethod}>
click me im safe
        </button>

    )
}





export default Testing


