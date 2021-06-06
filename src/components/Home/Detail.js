import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getImageDataById } from "../../actions/home";

function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getImageDataById(id));
  }, []);

  return <div>Detail</div>;
}

export default Detail;
