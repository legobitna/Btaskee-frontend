import api from "../../api";
const getServiceList = () => async (dispatch) => {
  dispatch({ type: "SERVICE_LIST_REQUEST" });
  try {
    const res = await api.get(`/service-type`);
    dispatch({
      type: "SERVICE_LIST_REQUEST_SUCCESS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: "SERVICE_LIST_REQUEST_FAILURE", payload: error });
  }
};

const registerOrder = (values) => async (dispatch) => {
  dispatch({ type: "REGISTER_ORDER_REQUEST" });
  try {
    const res = await api.post(`/order`, values);
    dispatch({
      type: "REGISTER_ORDER_REQUEST_SUCCESS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: "REGISTER_ORDER_REQUEST_FAILURE", payload: error });
  }
};

const getOrderList = () => async (dispatch) => {
  dispatch({ type: "GET_ORDER_LIST_REQUEST" });
  try {
    const res = await api.get(`/order`);
    dispatch({
      type: "GET_ORDER_LIST_REQUEST_SUCCESS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: "GET_ORDER_LIST_REQUEST_FAILURE", payload: error });
  }
};

export const actions = {
  getServiceList,
  registerOrder,
  getOrderList,
};
