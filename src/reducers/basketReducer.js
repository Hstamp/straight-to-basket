const basketReducer = (state, action) => {
  console.log('STATE', state);
  switch (action.type) {
    case 'item': {
      return {
        // Overwrite item to be ordered with each dispatch call
        ...state,
        ...action.value,
      };
    }
    case 'basket': {
      return {
        ...state,
        // Add to the basket array with each selection
        basket: [
          ...state.basket,
          {
            ...action.value,
            // Don't focus on accurate totalQty for this exercise
            totalQty: Number.parseFloat(action.value.menuItemPrice) * action.value.qty,
          },
        ],
      };
    }
    default: return state;
  }
};

export default basketReducer;
