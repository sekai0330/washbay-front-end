import api from "../services/api";

export function getImageData() {
  return function (dispatch) {
    api.get("/api/home").then((result) => {
      dispatch({
        type: "GET_HOME_IMAGE_DATAS",
        Payload: result.data.data,
      });
    });
  };
}

export function getImageDataById(id) {
  return function (dispatch) {
    api.get(`/api/home/${id}`).then((result) => {
      dispatch({
        type: "GET_HOME_IMAGE_BY_ID",
        Payload: result.data.data,
      });
    });
  };
}
