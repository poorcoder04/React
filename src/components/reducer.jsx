import { useReducer } from 'react';

// 1. Reducer – all logic lives in ONE place
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(item => item.id === action.payload.id);

      let newItems;
      if (existing) {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity < 1) return state;

      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }

    case 'CLEAR_CART':
      return { items: [], totalItems: 0, totalPrice: 0 };

    default:
      return state;
  }
}

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export default function ShoppingCartUseReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h2>Cart (useReducer version)</h2>
      <p>Total Items: {state.totalItems}</p>
      <p>Total Price: ${state.totalPrice.toFixed(2)}</p>

      <button onClick={() => dispatch({
        type: 'ADD_ITEM',
        payload: { id: 1, name: 'Laptop', price: 999 }
      })}>
        Add Laptop
      </button>

      <button onClick={() => dispatch({
        type: 'ADD_ITEM',
        payload: { id: 2, name: 'Mouse', price: 25 }
      })}>
        Add Mouse
      </button>

      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear Cart
      </button>

      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} × {item.quantity}
            <button onClick={() => dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: item.quantity + 1 }
            })}>
              +
            </button>
            <button onClick={() => dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: item.quantity - 1 }
            })}>
              -
            </button>
            <button onClick={() => dispatch({
              type: 'REMOVE_ITEM',
              payload: item.id
            })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}