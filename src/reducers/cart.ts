import { ICartItem } from "../components/Cart/CartItem";
import { CartActionKind } from "../types/CartActionKind";

export const cartInitialState =  JSON.parse(window.localStorage.getItem('cart') as string) as ICartItem[]  || []

interface CartAction {
    type: CartActionKind;
    payload: ICartItem; 
}

export const updateLocalStorage = (state: ICartItem[]) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}


function addItem(state: ICartItem[], action: CartAction): ICartItem[] {
  const id = action.payload?.id

  const productInCartIndex = state.findIndex(item => item.id === id)

  if (productInCartIndex >= 0) {
    const newState = [
      ...state.slice(0, productInCartIndex),
      { ...state[productInCartIndex], 
          quantity: state[productInCartIndex].quantity + 1 },
      ...state.slice(productInCartIndex + 1)
    ]

    updateLocalStorage(newState)
    return newState
  } 
  
  const newCartItem: ICartItem = {
    ...action.payload,
    quantity: 1
  };

  const newState = [...state, newCartItem];
  updateLocalStorage(newState)
  return newState
}

function deleteItem(state: ICartItem[], action: CartAction): ICartItem[] {
  const id  = action.payload?.id ?? action.payload?.id
  const newState = state.filter(item => item.id !== id)

  updateLocalStorage(newState)
  return newState
}

function clear() {
  updateLocalStorage([])
  return []
}

export const cartReducer = (state: ICartItem[], action: CartAction) => {
    const { type } = action;

    switch (type) {
      case CartActionKind.ADD_TO_CART:
          return addItem(state, action)
      case CartActionKind.REMOVE_FROM_CART:
          return deleteItem(state, action)
      case CartActionKind.CLEAR_CART:
          return clear()
      default:
          return state;
  }
}