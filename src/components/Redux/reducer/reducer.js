import { USERNAME,EMAIL,ID,CARTCOUNT,PRODUCT,CART,CHECKOUTAMOUNT} from '../constant';

const initialState = {
    email: '',
    username:'',
    id:'',
    count:0,
    checkout_amount:0,
    product_arr:[],
    cart_arr:[],    
};

export const peReducer = (state = initialState, action) => {
    switch (action.type) {        
        case EMAIL:
            return {  ...state,email:action.payload}; 
        case USERNAME:
            return {  ...state,username:action.payload}; 
        case ID:
            return {  ...state,id:action.payload}; 
        case CARTCOUNT:
            return {  ...state,count:action.payload}; 
        case PRODUCT:
            return {  ...state,product_arr:action.payload}; 
        case CART:
            return {  ...state,cart_arr:action.payload}; 
        case CHECKOUTAMOUNT:
                return {  ...state,checkout_amount:action.payload}; 
        default:
            return state;    
    }
};