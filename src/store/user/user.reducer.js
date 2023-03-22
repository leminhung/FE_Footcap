import { AuthActionsEnum } from "./user.action";

const initState = {
  loading: false,
  user: {},
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AuthActionsEnum.LOADING:
      return {
        ...state,
        loading: true,
      };

    case AuthActionsEnum.SET_DATA:
      return {
        ...state,
        loading: false,
        user: { ...state.user, ...action.payload },
      };

    case AuthActionsEnum.FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case AuthActionsEnum.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    case AuthActionsEnum.LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    // case LOGOUT_AUTO_SUCCESS:
    case AuthActionsEnum.LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };

    // case CLEAR_ERRORS:
    //   return {
    //     ...state,
    //     error: null,
    //   };

    default:
      return state;
  }
};
