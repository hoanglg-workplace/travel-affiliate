import React, { useEffect } from "react";
import "./ComingSoon.scss";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

const ComingSoon = ({ handleVisibleGuideModal }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/home");
    }, 50000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  function handleContextMenu(event) {
    event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
  }

  return (
    <div className="ComingSoon_wrapper" onContextMenu={handleContextMenu}>
      <Menu handleVisibleGuideModal={handleVisibleGuideModal} />

      <div className="coming_soon">
        <div className="coming_soon_404">COMING SOON</div>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <div className="coming_soon_1">TÍNH NĂNG SẼ SỚM RA MẮT</div>
        <br />
        {/* <div className="coming_soon_2">TÍNH NĂNG SẼ SỚM RA MẮT</div> */}
        <br />
        <br />
        <br />
        <a className="coming_soon_err_btn" href="/the-sea-class/tour" target=""> 
          XEM CÁC TÍNH NĂNG KHÁC
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
