import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { State } from "../../types";

const setAmount = (
  amount: string
): ThunkAction<void, State, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch({
      type: "SET-AMOUNT",
      payload: {
        amount,
      },
    });
  };
};

export { setAmount };
