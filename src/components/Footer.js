import React from "react";
import Fade from "react-reveal/Fade";

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
          <Fade>
            <Button
              type="link"
              href="https://www.kickstarter.com/projects/montage/montage-designed-for-all-your-moments-of-life"
              isExternal
              className="btn-primary btn-lg font-weight-bold"
              target="_blank"
            >
              View On Kickstarter
            </Button>
            <span className="copyright position-absolute text-white">
              Montage, © {new Date().getFullYear()}
            </span>
          </Fade>
        </div>
      </div>
    </div>
  );
}
