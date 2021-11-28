import React from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import "../css/MainPage.css";

function WindowContaactNumber() {
  return (
    <div className="contact-number d-none d-sm-none d-lg-block d-fixed">
      <a
        href="tel:+44-088-333-1212"
        className="contact-number-link"
        data-toggle="tooltip"
        data-placement="top"
        title="Phone Number:+34-088-333-1212"
      >
        <BsFillPhoneVibrateFill style={{ marginRight: 10, fontSize: 25 }} />
      </a>
    </div>
  );
}

export default WindowContaactNumber;
