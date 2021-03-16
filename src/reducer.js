export const initialState ={
    basket: [],
    user:null
}
export const getBasketTotal =(basket) =>(
    basket?.reduce((amount,item)=> item.price+amount,0)
)
function reducer(state,action) {

    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let oldBasket = [...state.basket]
            
            const index =state.basket.findIndex((basketItem)=> basketItem.id === action.id)
            if(index>=0){
                oldBasket.splice(index,1);

            }else{
                console.warn("can't remove")
            }
            
            
            return{...state, basket:oldBasket}
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }
        default:
            return state;
    }
}

export default reducer;