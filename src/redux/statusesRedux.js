import {API_URL} from "../config";

export const getAllStatuses = ({statuses}) => statuses;

const createActionName = (actionName) => `app/statuses/${actionName}`;
const UPDATE_STATUSES = createActionName("UPDATE_STATUSES");

export const updateStatuses = (payload) => ({type: UPDATE_STATUSES, payload});
export const fetchStatuses = () => {
  console.log("fetchStatuses");
  return (dispatch) => {
    fetch(`${API_URL}/statuses`)
      .then((res) => res.json())
      .then((statuses) => dispatch(updateStatuses(statuses)));
  };
};

const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUSES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default statusesReducer;
