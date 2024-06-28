export default function () {
  return (
    <>
      <div className="container-fluid row mt-5">
        <div className="col-12 col-md-6">
          <h3 className="text-wrap">
            OUR CAMPUS FORM IS APPROPRIATELY DONE FOR STUDENTS
          </h3>
          <div className="border border-primary col-2 mt-0"></div>
          <p className="text-wrap mt-2">
            With our forms, your can register online from where you are and have
            access to the courses offered for both science and art classes and
            more about the course plus the time of study and enrollment.
          </p>
          <p className="text-wrap">
            As time goes on. One can specialize according to the point of
            interest for as the course taken is concerned. For time, a special
            and monitoring guide is provided for students to make a future they
            would need.
          </p>
          <a href="./register" className="btn btn-outline-secondary mb-2">
            REGISTAR NOW
          </a>
        </div>
        <div className=" col-12 col-md-6">
          <img
            src="./computer-programmer.jpg"
            alt="Programmer"
            className=" img-fluid rounded d-block w-100 col-md object-fit-cover"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </>
  );
}
