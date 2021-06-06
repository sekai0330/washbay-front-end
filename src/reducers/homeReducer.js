const initialState = [];
export default function homeDataReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_HOME_IMAGE_DATAS":
      return { ...state, imageData: action.Payload };
    default:
      return state;
  }
}
