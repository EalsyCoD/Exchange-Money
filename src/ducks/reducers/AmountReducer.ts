import { AmountRootState, AmountAction } from "../../types";

const initialState: AmountRootState = {
  amount: 1,
  wallet: "",
};

const amountReducer = (
  state: AmountRootState = initialState,
  action: AmountAction
): AmountRootState => {
  switch (action.type) {
    case "SET-AMOUNT":
      return {
        ...state,
        amount: action.payload.amount,
      };
    default:
      return state;
  }
};

export default amountReducer;
