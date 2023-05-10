import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FirstLoading.scss";
import loading from '../../assets/gif/loading.gif'

function Loading() {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);
  return (
    <div className="FirstLoading_wrapper">
        <img src={loading} alt="" />
    </div>
  );
}

export default Loading;
