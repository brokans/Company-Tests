import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted pt-1 mt-5">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Arhitektuuribüroo Perspektiiv OÜ
                </h6>
                <p>"Meie loome teekonna eesmärkideni"</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Kasulikud lingid</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Instagram
                  </a>
                </p>
                {/* <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p> */}
                {/* <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p> */}
                {/* <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p> */}
              </div>

              {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div> */}

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
                <p>Lai 19, Valga</p>
                <p>angeelika.saaron@linestuudio.com</p>
                <p>+372 5170440</p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">© 2024 Copyright</div>
      </footer>
    </div>
  );
}

export default Footer;
