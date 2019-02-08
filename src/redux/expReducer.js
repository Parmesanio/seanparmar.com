import axios from "axios";

const initialState = {
  experiences: null,
  isHovering: []
};

const SET_EXPERIENCES = "SET_EXPERIENCES",
  SET_HOVERING = "SET_HOVERING";

export default function expReducer(state = initialState, action) {
  switch (action.type) {
    case `${SET_EXPERIENCES}_FULFILLED`:
      return { ...state, experiences: action.payload };
    case SET_HOVERING:
      let isHovered = [...state.isHovering];
      isHovered[action.payload] = !isHovered[action.payload];
      return { ...state, isHovering: isHovered };
    default:
      return { ...state };
  }
}

export function setExp() {
  return {
    type: SET_EXPERIENCES,
    payload: axios
      .get("/admin/experiences")
      .then(res => res.data)
      .catch(err => console.log("err in SET_EXPERIENCES", err))
  };
}
export function setHovering(id) {
  return {
    type: SET_HOVERING,
    payload: id
  };
}
