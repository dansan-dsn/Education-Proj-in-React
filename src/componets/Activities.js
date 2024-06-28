export default function Activity() {
  return (
    <>
      <div className="container-fluid mt-4">
        <figure className="figure container-fluid col-12 col-md-4">
          <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
            <img
              src="./basketball.jpg"
              className="figure-img img-fluid rounded-top d-block w-100 object-fit-cover"
              alt="Basket Ball Junkers"
              style={{ height: "200px" }}
            />
            <h4 className="mx-3">Basket Ball Junkers</h4>
            <figcaption className="figure-caption mx-3 text-primary ">
              Kinds of sports and soccer are availble for students to
              participate.
            </figcaption>
            <div className="btn">
              <a href="#" className="btn btn-success btn-n">
                See more
              </a>
              <span className="btn-span">
                <i class="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </figure>
        <figure className="figure container-fluid col-12 col-md-4">
          <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
            <img
              src="./grad.jpg"
              className="figure-img img-fluid rounded-top d-block w-100 object-fit-cover"
              alt="Campurs Graduates"
              style={{ height: "200px" }}
            />
            <h4 className="mx-3">Student Graduation</h4>
            <figcaption className="figure-caption mx-3 text-primary ">
              All students graduate after their study and are provided with
              certificates.
            </figcaption>
            <div className="btn">
              <a href="#" className="btn btn-primary btn-n">
                See more
              </a>
              <span className="btn-span">
                <i class="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </figure>
        <figure className="figure container-fluid col-12 col-md-4">
          <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
            <img
              src="./church.jpg"
              className="figure-img img-fluid rounded-top d-block w-100 object-fit-cover"
              alt="Basket Ball Junkers"
              style={{ height: "200px" }}
            />
            <h4>Time For Prayer</h4>
            <figcaption className="figure-caption mx-3 text-primary ">
              We are a religious campus, so we accomodate all kinds of religion
              world wide.
            </figcaption>
            <div className="btn">
              <a href="#" className="btn btn-warning btn-n">
                See more
              </a>
              <span className="btn-span">
                <i class="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
}
