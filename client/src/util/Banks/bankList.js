import {v4 as  uuidv4 } from 'uuid';


export const BankList = {


    Cimb:{
        id: uuidv4(),
        name: 'Cimb Bank',
        Image:require('../../theme/Icons/cimb-logo.png'),
        API:'',
        
    },
    Maybank:{
        id: uuidv4(),
        name: 'Maybank',
        Image:require('../../theme/Icons/maybank-logo.png'),
        API:'',
    },
    Public:{
        id: uuidv4(),
        name:'Public Bank',
        Image:require('../../theme/Icons/public-logo.png'),
        API:'',

    },
    HongLeong:{
        id: uuidv4(),
        name:'Hong Leong Bank',
        Image:require('../../theme/Icons/Hong-leong-logo.png'),
        API:'',

    },
    BankIslam:{
        id: uuidv4(),
        name:'Bank Islam',
        Image:require('../../theme/Icons/islam-logo.png'),
        API:'',

    },
    RHB:{
        id: uuidv4(),
        name:'RHB Bank',
        Image:require('../../theme/Icons/RHB-logo.png'),
        API:'',


    },
    Ambank:{
        id: uuidv4(),
        name:'Ambank',
        Image:require('../../theme/Icons/ambank-logo.png'),
        API:'',



    },
    HSBC:{
        id: uuidv4(),
        name: 'HSBC Bank',
        Image:require('../../theme/Icons/HSBC-logo.png'),
        API:'',
    },
    UOB:{
        id: uuidv4(),
        name:'UOB Bank',
        Image:require('../../theme/Icons/UOB-logo.png'),
        API:'',

    },
    StandarChartered:{
        id: uuidv4(),
        name:'Standard Chartered Bank',
        Image:require('../../theme/Icons/sc-logo.png'),
        API:'',


    },
    Allianz:{
        id: uuidv4(),
        name:'Allianz Bank',
        Image:require('../../theme/Icons/allianz-logo.png'),
        API:'',
    },
    OCBC:{
        id: uuidv4(),
        name:'OCBC Bank',
        Image:require('../../theme/Icons/OCBC-logo.png'),
        API:'',
    },






}

export default BankList