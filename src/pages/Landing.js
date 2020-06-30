import React from "react";

import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="container-fluid p-0">
      <Header />

      {/* for desktop */}
      <div className="d-none d-lg-block">
        <div className="hero container-fluid p-0">
          <h2 className="slogan text-center my-5">Made For Life</h2>
          <div
            className="container-fluid bg-gray-200"
            style={{ maxHeight: "662px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-5 text-center middle">
                  <div>
                    <h1 className="display-2 font-weight-bold">Montage</h1>
                    <p className="font-weight-light h4 my-5">
                      Beautifully crafted eco-friendly bags to store your
                      treasures through your journey
                    </p>
                    <Button
                      type="link"
                      href="/item"
                      className="btn-primary btn-lg px-4 h4"
                    >
                      BUY IT!
                    </Button>
                  </div>
                </div>
                <div className="hero-img col-7">
                  <img src="/assets/images/hero-image.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="variation container middle">
          <div className="col-12">
            <div className="middle">
              <div className="w-100 text-center">
                <img
                  src="/assets/images/bag-variation.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="box-left bg-primary position-absolute"></div>
              <div className="box-right bg-primary position-absolute"></div>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-7">
              <div className="d-flex justify-content-start">
                <img src="/assets/images/image1.gif" alt="" />
                <div className="box-right bg-primary position-absolute"></div>
              </div>
            </div>
            <div className="col-5">
              <h1 className="font-weight-bold">Versatility &amp; Comfort</h1>
              <p>
                Montage is cleverly constructed for you to be able to hang it
                over your shoulders as a backpack or carry it around like a
                handbag or tote bag. In just a matter of seconds, you can easily
                adjust the bag straps to suit your own lifestyle, effortlessly!
              </p>
              <p className="font-italic">
                A slim and adaptable shape is designed to flatter the small
                silhouette!
              </p>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-5">
              <h1 className="font-weight-bold">Organization &amp; Details</h1>
              <p>
                MONTAGE bag will adapt to your everyday lifestyle with its
                cleverly located pockets and stylish design. We spent 14 months,
                designing and redesigning the perfect bag with women in mind
                first. Whether you are a professional or a student, an
                adventurer or a traveler, a commuter or a freelancer Montage Bag
                was made for you.
              </p>
              <p className="font-italic">
                Thoughtfully designed interior details will allow you to
                organize your treasures and access them easily.
              </p>
            </div>
            <div className="col-7">
              <div className="d-flex justify-content-end">
                <img src="/assets/images/image2.gif" alt="" />
                <div className="box-left bg-primary position-absolute"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-7">
              <div className="d-flex justify-content-start">
                <img src="/assets/images/image3.gif" alt="" />
                <div className="box-right bg-primary position-absolute"></div>
              </div>
            </div>
            <div className="col-5">
              <h1 className="font-weight-bold">Easy Access</h1>
              <p>
                it’s a stylish bag that looks beautiful on the outside with
                quick access pockets. However, we all know that it’s what’s
                inside that counts. Open the bag’s double zipper pulls to find
                multiple compartments, interior pockets and specially designed
                slots for all of your essentials. Slip in your laptop, secure
                your water bottle and safely store your passport while keeping
                all your belongings well-organized. No more digging through a
                bag!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for tablet / mobile */}
      <div className="d-block d-lg-none">
        <div className="hero container-fluid p-0">
          <h2 className="slogan text-center my-3 h5">Made For Life</h2>
          <div
            className="hero-bg container-fluid bg-gray-200"
            style={{
              maxHeight: "662px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.7)), url(/assets/images/hero-image.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 text-center middle">
                  <div>
                    <h1 className="font-weight-bold mt-5">Montage</h1>
                    <p className="font-weight-light mt-3 mb-4">
                      Beautifully crafted eco-friendly bags to store your
                      treasures through your journey
                    </p>
                    <Button
                      type="link"
                      href="/item"
                      className="btn-primary px-4 mb-5"
                    >
                      BUY IT!
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="variation container middle">
          <div className="col-12">
            <div className="middle">
              <div className="w-100 text-center">
                <img
                  src="/assets/images/bag-variation.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="box-left bg-primary position-absolute"></div>
              <div className="box-right bg-primary position-absolute"></div>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="d-flex justify-content-start">
                <img src="/assets/images/image1.gif" alt="" />
                <div className="box-right bg-primary position-absolute"></div>
              </div>
            </div>
            <div className="col-12">
              <h1 className="h5 font-weight-bold">Versatility &amp; Comfort</h1>
              <p>
                Montage is cleverly constructed for you to be able to hang it
                over your shoulders as a backpack or carry it around like a
                handbag or tote bag. In just a matter of seconds, you can easily
                adjust the bag straps to suit your own lifestyle, effortlessly!
              </p>
              <p className="font-italic">
                A slim and adaptable shape is designed to flatter the small
                silhouette!
              </p>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="d-flex justify-content-end">
                <img src="/assets/images/image2.gif" alt="" />
                <div className="box-left bg-primary position-absolute"></div>
              </div>
            </div>
            <div className="col-12">
              <h1 className="h5 font-weight-bold">
                Organization &amp; Details
              </h1>
              <p>
                MONTAGE bag will adapt to your everyday lifestyle with its
                cleverly located pockets and stylish design. We spent 14 months,
                designing and redesigning the perfect bag with women in mind
                first. Whether you are a professional or a student, an
                adventurer or a traveler, a commuter or a freelancer Montage Bag
                was made for you.
              </p>
              <p className="font-italic">
                Thoughtfully designed interior details will allow you to
                organize your treasures and access them easily.
              </p>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-12 mb-3">
              <div className="d-flex justify-content-start">
                <img src="/assets/images/image3.gif" alt="" />
                <div className="box-right bg-primary position-absolute"></div>
              </div>
            </div>
            <div className="col-12">
              <h1 className="h5 font-weight-bold">Easy Access</h1>
              <p>
                it’s a stylish bag that looks beautiful on the outside with
                quick access pockets. However, we all know that it’s what’s
                inside that counts. Open the bag’s double zipper pulls to find
                multiple compartments, interior pockets and specially designed
                slots for all of your essentials. Slip in your laptop, secure
                your water bottle and safely store your passport while keeping
                all your belongings well-organized. No more digging through a
                bag!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
