import React, {useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import menuObject from '../../util/Menu-Content/menuObject';
import Footer from '../../util/Footer/Footer';
import ButtonTypes from '../../util/Button/ButtonObject';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increase, decrease} from '../../redux/feature/cartSlice'
import Cart from '../modal/CartModal';
import { Logo } from '../../theme/theme';
import AddressEdit from '../modal/ModalEdit/AddressEdit';
import AddressEditSlider from '../modal/ModalEdit/AddressEditSlider';
import AddAddress from './Address';
import PaymentModal from '../modal/PaymentModal';
import CheckoutModal from '../modal/CheckoutModal';
import BillingModal from '../modal/ModalEdit/BillingAddressModal';
import BillingEditSlider from '../modal/ModalEdit/BillingAddressEditSlider';
import CreditCredentialsModal from '../modal/CreditCredentialsModal';
import CreditCardEditSlider from '../modal/ModalEdit/CreditCredentialEditSlider';
import CheckoutModalUI from '../../FetchAPI/CheckoutModalAPI';
import BankListModal from '../modal/ModalEdit/BankListModal';
import Login from '../Auth/Login';
import Signup from '../Auth/Sign_up';
import AddressUI from '../../FetchAPI/AddressAPI';
import BillingAddressUI from '../../FetchAPI/BillingAddressAPI';


const OrderConfirm = ()=>{
        const [selectedItem,setSelectedItem] = useState([])
        const [selectedCategory, setSelectedCategory] = useState('Main')
        const {cartItems, amount , total,setCategory,isOpen } = useSelector((store) => store.cart)
        const [hideModal,setHideModal] = useState(false)
        const {AuthLoad,RecordSummLoad,AddressLoad,BillingAddressLoad,CreditCardLoad} = useSelector((store) => store.load);
        const { isFormOpen, isSignUpFormOpen} = useSelector((store) => store.auth);
        const {RecordSummary,AddressPost,BillingAddressPost} = useSelector((store)=> store.post);
        const {Receipt} = useSelector((store) => store.receipt);
        const dispatch = useDispatch()
        const {BillingAddress} = useSelector((store) => store.billing)
        const {Address} = useSelector((store) => store.address)

     

        useEffect(()=>{

                if(AddressLoad.openForm || AddressLoad.openSliderForm || 
                        BillingAddressLoad.openForm || BillingAddressLoad.openSliderForm || isOpen||
                   CreditCardLoad.openForm || CreditCardLoad.openSliderForm || CreditCardLoad.openBankListForm){
                             setHideModal(true)
     
                     }else{
                             setHideModal(false)
                     }

        },[AddressLoad.openForm,AddressLoad.openSliderForm,BillingAddressLoad.openForm, 
                BillingAddressLoad.openSliderForm,isOpen,CreditCardLoad.openForm,
                CreditCardLoad.openSliderForm,CreditCardLoad.openBankListForm])
                
        

        

    

        
      

        const handleIncreaseAmount = (itemId) =>{
                dispatch(increase(itemId))
        }

        const handleDecreaseAmount = (itemId) =>{
                dispatch(decrease(itemId))
        }


        const handleRemoveItem = (itemId) =>{
                dispatch(removeItem(itemId))
        }


      

      


        const menuSort = (Menu=[]) =>{
                const sort = Menu.map(item =>{
                        return {...item}
                })
                return sort
        }

      

     

              useEffect(() => {
                if (selectedCategory) {
                  const itemCategory = menuSort(menuObject[selectedCategory]);
                  setSelectedItem(itemCategory);
                }

              
              }, [selectedCategory]);



        
              

  



    return(
        
     <>

{isFormOpen == true ?  <Login/> : null }
          {isSignUpFormOpen == true ?  <Signup/> : null }


   
     <Logo/>
     {AddressPost.AddressPostStatus ? <AddressUI form={Address}/> : null}
     {BillingAddressPost.BillingAddressPostStatus ? <BillingAddressUI billingAddressForm={BillingAddress}/> : null}
     {RecordSummary.UserRecordSummPostStatus ? <CheckoutModalUI userReceipt={Receipt}/> : null }
     

{cartItems.length == 0 ?


<>



<Cart/>
<CheckOutWrapper empty_message>
  Cart is Empty
</CheckOutWrapper>   
<PageWrapper blur  isFormOpen={isFormOpen} isSignUpFormOpen={isSignUpFormOpen} >


 
 


   
   <Footer/>
   </PageWrapper>

   </>
   
   
   :

        <PageWrapper isFormOpen={isFormOpen} isSignUpFormOpen={isSignUpFormOpen}>
             
        <Cart/>
        

        <OverlayWrapper isCartOpen={
                AddressLoad.openForm || AddressLoad.openSliderForm || 
                BillingAddressLoad.openForm || BillingAddressLoad.openSliderForm ||
                CreditCardLoad.openForm || CreditCardLoad.openSliderForm ||
                CreditCardLoad.openBankListForm
                }/>
        
        {AddressLoad.openForm ? <AddAddress/> : null}
        {AddressLoad.openForm ? null : <AddressEditSlider  isHidden={AddressLoad.openSliderForm}/>}
        {BillingAddressLoad.openForm ? <BillingModal/> : null}
        {BillingAddressLoad.openForm ? null : <BillingEditSlider  isHidden={BillingAddressLoad.openSliderForm}/>}
        {CreditCardLoad.openForm ? <CreditCredentialsModal/> : null}
        {CreditCardLoad.openForm ? null : <CreditCardEditSlider  isHidden={CreditCardLoad.openSliderForm}/>}
        {CreditCardLoad.openBankListForm ? <BankListModal/> : null}

    
<OrderConfirmFlexBox>
<OrderConfirmContainer>

      <AddressEdit/>
      <PaymentModal/>
      
  
      <FormWrapper>
 <CheckOutContainer>
        <CheckOutWrapper>
                {cartItems.map( items =>{
                            return(
                            <ItemContainer key={items.id}>
                               <img src={items.Image}/>
                               <DescriptionWrapper>
                               <p1>{items.name}</p1>
                               <p2>{items.Price}</p2>
                               <p3>{items.Amount}</p3>
                               </DescriptionWrapper>
                               <IncrementButtonWrapper>
                <ButtonTypes.Increment handleDecreaseCount={() => handleDecreaseAmount(items.id)} handleIncreaseCount={() => handleIncreaseAmount(items.id)} count={items.Amount}/>
              
        </IncrementButtonWrapper>
        
        <ButtonWrapper>

                <ButtonTypes.Remove handleRemove={() => handleRemoveItem(items.id)}/>

        </ButtonWrapper>
                            </ItemContainer>
                            )
                        })}


                       
        </CheckOutWrapper>    
 </CheckOutContainer>

 

     </FormWrapper>

     
</OrderConfirmContainer>    
</OrderConfirmFlexBox>
                                <CheckoutModal isHidden={hideModal}/>

        <Footer/>
        </PageWrapper>
}
</>
        
    )
}


const OrderConfirmFlexBox = styled.div`
display:flex;
justify-content:center;


`


const FormWrapper = styled.form`
grid-column-start:1;
  grid-column-end:1;
  grid-row-start:2;
  grid-row-end:2;
  width:680px;
`


const OverlayWrapper = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
  display: ${(props) => (props.isCartOpen ? 'block' : 'none')};


`

const OrderConfirmContainer = styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,250px);
margin-bottom:20rem;
gap:2rem;
height:100%;
`

const CheckOutContainer = styled.div`
top: 0;
left: 0;
height: 100%;
  grid-column-start:1;
  grid-column-end:1;
  width:100%;
  
 
`

const PageWrapper = styled.div`
overflow-x:hidden;
filter: ${props => (props.isFormOpen || props.isSignUpFormOpen ? 'blur(10px)' : 'none')};
    /* Adjust the blur radius as needed */
    pointer-events: ${props => (props.isFormOpen || props.isSignUpFormOpen? 'none' : 'auto')};



${(props)=> props.blur && css`
filter:blur(100px);


`}
`



const CheckOutWrapper = styled.div`
padding-bottom:2rem;
background-color: ${Theme.colors.white};

display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(auto,1fr);


${(props) => props.empty_message && css`

background-color: ${Theme.colors.white};
display:flex;
border:.15rem solid ${Theme.colors.white};
align-content:center;
justify-content:center;
width:15vw;
margin-top:20rem;
margin-bottom:25rem;
margin-left:42.5vw;
margin-right:42.5vw;
font-family: 'Work Sans', sans-serif;
font-size:24px;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
z-index:999;
padding:1rem 1rem;
text-shadow:0 1px 4px rgba(0, 0, 0, 0.2);
`}

`





const IncrementButtonWrapper = styled.div`
border:1px solid black;
height:1.5rem;
width:80px;
border-radius:4px;
display:flex;
justify-content:space-between;
justify-items:right;
justify-self:right;
align-content:right;
align-items:center;
font-size:10px;
grid-column-start:2;
grid-column-end:2;
grid-row-start:4;
grid-row-end:4;
margin-right:3.5rem;


`



const ButtonWrapper = styled.div`
grid-column-start:3;
grid-column-end:3;
grid-row-start:4;
grid-row-end:4;
padding-left:2rem;padding-right:2rem;
`




const DescriptionWrapper = styled.div`
display:grid;
grid-template-rows: repeat( 2, 1fr);
grid-template-columns: repeat( 3, 1fr);
column-gap:1rem;
grid-column-start:2;
grid-column-end:4;
padding-left:8rem;
justify-items:center;
justify-self:center;
align-content:center;




p1{
        font-size:15px;
        width:10rem;
        gap:10rem;
        grid-column-start:1;
        grid-column-end:1; 
        
}

p2{
  
        font-size:15px;
        grid-column-start:2;
        grid-column-end:2;  

}

p3{
  
    font-size:15px;
    grid-column-start:3;
    grid-column-end:3;  

}

`




const ItemContainer = styled.div`
display:grid;
position:relative;
grid-template-rows: repeat( 4, 2.5rem);
grid-template-columns: repeat( 2, 1fr);
position:relative;
justify-items:center;
background-color: ${Theme.colors.white};
padding:2rem 1rem;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
font-family: 'Work Sans', sans-serif;








img{
        height:150px;
        width:150px;
        border-radius:20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
       
}



`





export default OrderConfirm




