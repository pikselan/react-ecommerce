import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="hero container-fluid p-0">
        <h2 className="slogan text-center my-5">Made For Life</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <h1 className="font-weight-bold">Montage</h1>
                <h4>Los Angeles, CA</h4>
                <h5 className="mb-5">
                  Montage is a brand created for life and all the beautiful
                  craziness surrounding it.
                </h5>
                <p className="font-weight-bold">
                  MONTAGE – fashionability, and practicality come together in
                  this eco-friendly backpack
                </p>
                <p>
                  Fashionability and practicality are two terms that define the
                  latest direction that the fashion industry is taking. Seeing
                  the need of its consumers to have something that will serve a
                  purpose rather than just be fashionable has been a novelty in
                  the last few years. Many fashion trends have explored this
                  direction in their collections, regarding both the garments
                  and accessories.
                </p>
                <p>
                  One of the accessories that have made a big comeback from the
                  ‘90s is the backpack. Today, the accessories department cannot
                  be imagined without having a backpack in their lines. That is
                  why we are proud to introduce the MONTAGE – the practical and
                  fashionable backpack that will serve its purpose more than you
                  have ever expected.
                </p>
                <p className="font-weight-bold"> Why MONTAGE?</p>
                <p>
                  Fashionable, stylish, and practical, Montage will be your
                  faithful companion wherever you go. The fabulous and soft
                  finish comes in three different and unique colors – black,
                  maroon, and petroleum. Its handles are great for carrying it
                  as a regular backpack and it has an additional handle to carry
                  it as a handbag. Going to work, riding a bicycle, strolling
                  the city and any other activity will be much easier when you
                  can store your belongings in this excellent bag. Another great
                  benefit is the opening it provides for a suitcase handle – you
                  can travel with style! The inside compartments are carefully
                  designed to keep everything neat and safe, without the
                  possibility to fall out when opening. The golden zip creates
                  an additional detail to the elegance of the montage backpack.
                </p>
                <p className="font-weight-bold">
                  {" "}
                  MONTAGE &amp; sustainability
                </p>
                <p>
                  MONTAGE backpack is made of premium polished cork, which makes
                  it very soft and resilient, just like the leather. It is a
                  sort of vegan leather, but lighter and as durable as the real
                  leather. It is water repellent, eco-friendly, and safe for
                  use. The cork is harvested in an organic and completely
                  ethical way that supports the environment and the entire
                  process of sustainability. It does not harm the trees; in
                  fact, it contributes to their development. The cork tree’s
                  full regeneration period is about 7 to 9 years after the
                  harvest which makes can extend the life of the tree up to 200
                  years.
                </p>
                <p>
                  If you have ever thought of getting a backpack, now is a great
                  time. Choose out Montage backpack and let it complete your
                  outfit and style with its unique elegant and chic design and
                  color. And above all of that, you will support the sustainable
                  and ethical fashion!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
