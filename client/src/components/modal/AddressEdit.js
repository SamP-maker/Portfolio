import React, {useState,useEffect, useRef} from 'react';
import styled,{css} from 'styled-components';
import Theme from '../../theme/theme';
import { Link } from 'react-router-dom';
import Input from '../../util/Input/Input';
import ButtonTypes from '../../util/Button/ButtonObject';






const AddressEdit = () =>{


    const [AddressState, setAddressState] = useState([])
    const [recentAddressState, setrecentAddressState] = useState({})
    const [selectedAddresses, setSelectedAddresses] = useState([]);
    const [toggle,setToggle] = useState(false)


    const handleToggle = () =>{

        setToggle((prev) => !prev)
        

    }


    const handleCheckbox = (itemId) =>{

        if (selectedAddresses.length > 1 || !selectedAddresses.includes(itemId)) {
            setSelectedAddresses([itemId]); // Update selection to include only the clicked item
            // If AddressState holds the full details, update recentAddressState directly
            const selectedAddressDetails = AddressState.find((address) => address._id === itemId._id);
            setrecentAddressState(selectedAddressDetails); // Update recentAddressState
          
        
          }

    }




useEffect(()=>{

const fetchAllAddress = async () =>{

    try{
        const response = await fetch('http://localhost:5000/getAddress', {
            method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){

        const result = await response.json()
        setrecentAddressState(result[0])


    }
}catch(err){
    window.alert(err)
}
};


const fetchUserAllAddress = async () =>{

    try{
        const response = await fetch('http://localhost:5000/getAddressHistory', {
            method:'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        });

    if(response.ok){
        
        const result = await response.json()
        setAddressState(result)


    }
}catch(err){
    window.alert(err)
}
};




fetchUserAllAddress()
fetchAllAddress()
}, [])




async function handleSubmit(e){
   
  

    e.preventDefault()
    
     
     try{
       const response = await fetch(`http://localhost:5000/postAddress`,{
         method:'POST',
         credentials: 'include', // Include credentials in the request
         headers:{
           "Content-Type": "application/json",
       },
       body: JSON.stringify(recentAddressState)
       });
  
       if(!response.ok){
         throw new Error(`an Error occured ${response.statusText}`);
     
       }else{
       
       
        console.log('i sent something')
  
       
       }
    
     }catch(error){
       window.alert(error.message);
     }
       
  
   }
  



return(
/*First card */
<>
  
      
  
{!toggle ? 


/*First card */



<Section_Payment_Billing>
<h2>Address</h2>

<EditButton onClick={handleToggle}>Edit</EditButton>

 <Address_Item_Container>
                                                  
                                                    <SingleItemContainer>
                                                       
                                                       <div key={recentAddressState._id}>
                                                       <p1>Surname: {recentAddressState.LastName}</p1>
                                                       <p1>Name: {recentAddressState.FirstName}</p1>
                                                       <p1>Address: {recentAddressState.Address}</p1>
                                                       <p1>Post Code: {recentAddressState.Postal}, District: {recentAddressState.District}</p1>
                                                       </div>
                                                         
                                                   </SingleItemContainer>
                                                 
                                                  
                                     
 </Address_Item_Container>
                         
                         
                           

               

</Section_Payment_Billing>


   :



<Section_Payment_Billing_fetch_All onSubmit={handleSubmit}>

<h2>Address</h2>
<EditButton onClick={handleToggle}>close</EditButton>

 <Billing_Item_Container>
                                                  {AddressState.length > 1 ?   

                                                     AddressState.map( items => (
                                                    
                                                  
                                                    (

                                            <Selection_Wrapper key={items._id}>

                                                <label>
                                            <Input 
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedAddresses.includes(items)}
                                                onChange={() => handleCheckbox(items)}
                                                
                                               
                                            />
                                            </label> 

                                                   <ItemContainer >
                                                   
                                                        <p1>Surname: {items.LastName}</p1>
                                                        <p1>Name: {items.FirstName}</p1>
                                                        <p1>Address: {items.Address}</p1>
                                                        <p1>Phone : {items.Phone}</p1>
                                                        <p1>Post Code: {items.Postal}, District: {items.District}</p1>
                                                     
                                                          
                                                    </ItemContainer>



                                          </Selection_Wrapper>


                                            )))
                                                 
                                                   :
                                                  
                                                
                                           
                                                  (
                                                <ItemContainer>
                                                       <div key={recentAddressState._id}>
                                                       <p1>Surname: {recentAddressState.LastName}</p1>
                                                       <p1>Name: {recentAddressState.FirstName}</p1>
                                                       <p1>Address: {recentAddressState.Address}</p1>
                                                       <p1>Post Code: {recentAddressState.Postal}, District: {recentAddressState.District}</p1>
                                                       </div>
                                                         
                                                   </ItemContainer>

                                                  )
                                               
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   }

                                
                                                 
                                                  
                                     
 </Billing_Item_Container>
 <FinalizeButtonWrapper>
                                                   <ButtonTypes.Confirm type="submit"/>
</FinalizeButtonWrapper>                   
                        
</Section_Payment_Billing_fetch_All>



   

}

</>
)

}


const FinalizeButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
width:250px;
margin-bottom:2rem;
margin-top:2rem;
margin-left:80%;


`




const Address_Item_Container = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
display:flex;
flex-direction:column;
gap:10px;
height:200px;
position:relative;
font-size:1rem;


`


const Selection_Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(1,10rem);
grid-template-rows: repeat(1,10rem);
  
  justify-items:center;
  align-items:center;

  label {
  
    align-items:center;
    justify-items:center;
    grid-column-start: 1;
    grid-column-end: 1;
  }

`


const SingleItemContainer = styled.div`
grid-column-start:1;
grid-column-end:3;
font-size:0.825rem;
height:200px;
position:relative;
font-size:1rem;
margin-top:0;

p1{

  padding: .5rem .5rem;
  display:flex;
}
`




const Billing_Item_Container = styled.div`
margin-top:1%;
display:grid;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(1,1fr);


`

const Section_Payment_Billing_fetch_All = styled.form`
grid-row:4;
margin-top:5%;
height: auto;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;
height: auto;



p1{
  top:0;
  left:0;

}

h2{
    position:absolute;
    top:-20px;
    left:3rem;
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
`



const Section_Payment_Billing = styled.div`
grid-row:4;
margin-top:5%;
height: auto;
padding-top:20px;
padding-bottom:20px;
padding-left:5rem;
grid-column-start:1;
grid-column-end:3;
background-color: ${Theme.colors.white};
border-radius:20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
font-family: 'Work Sans', sans-serif;
position:relative;
height: auto;



p1{
  top:0;
  left:0;

}

h2{
    position:absolute;
    top:-20px;
    left:3rem;
    font-size:36px;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
`



const ItemContainer = styled.div`
  grid-column-start:2;
  grid-column-end:2;
  font-size: 0.825rem;
 
  position: relative;
  font-size: 1rem;
  margin-top: 0;


  p1 {
    padding: 0.5rem 0.5rem;
    display: flex;
  }
`





const EditButton = styled.p`
margin-left:92%;
margin-top:2%;
color:${Theme.colors.Teal};

&:hover{
  cursor:pointer;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

`







export default AddressEdit