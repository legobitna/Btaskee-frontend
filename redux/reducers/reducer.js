const initialState = {
  serviceTypes: [],
  orderList: [],
  loading: false,
  route: "ServicePage",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SERVICE_LIST_REQUEST":
    case "REGISTER_ORDER_REQUEST":
    case "GET_ORDER_LIST_REQUEST":
      return { ...state, loading: true };
    case "SERVICE_LIST_REQUEST_SUCCESS":
      return {
        ...state,
        serviceTypes: payload,
        loading: false,
      };
    case "REGISTER_ORDER_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "GET_ORDER_LIST_REQUEST_SUCCESS":
      return {
        ...state,
        orderList: payload,
        loading: false,
      };
    case "CHANGE_ROUTE":
      return {
        ...state,
        route: payload,
      };
    case "SERVICE_LIST_REQUEST_FAILURE":
    case "REGISTER_ORDER_REQUEST_FAILURE":
    case "GET_ORDER_LIST_REQUEST_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default reducer;
