import React from "react";

import Button from "./Button";

export default function Footer(props) {
  return (
    <div
      className="footer container-fluid"
      style={{
        backgroundImage: "url(/assets/images/bg-footer.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="col-12 h-100">
        <div className="middle">
          <Button
            type="link"
            href="https://www.kickstarter.com/projects/montage/montage-designed-for-all-your-moments-of-life"
            isExternal
            className="btn-primary btn-lg font-weight-bold"
          >
            View On Kickstarter
          </Button>
          <span className="copyright position-absolute text-white">
            Montage, © 2020
          </span>
        </div>
      </div>
    </div>
  );
}
