export default function News() {
  // const images = [
  //   {
  //     id: 1,
  //     url: "./teacher.jpg",
  //     name: "Teacher in className",
  //   },
  //   {
  //     id: 2,
  //     url: "./lab.jpg",
  //     name: "liboratory",
  //   },
  //   {
  //     id: 3,
  //     url: "./children.jpg",
  //     name: "Children in Class",
  //   },
  //   {
  //     id: 4,
  //     url: "./lecture room.jpg",
  //     name: "Lecture room",
  //   },
  // ];

  // const imageHandler = images.map(image => <figure className="figure container-fluid col col-md-3" key={image.id}>
  //   <i className="bx bx-bookmark"></i>
  //   <img
  //    src={image.url}
  //    className="figure-img img-fluid rounded"
  //    alt={image.name}
  //   />
  //   <figcaption className="figure-caption">
  //           {image.para}
  //         </figcaption>
  //         <div className="btn btn-outline-secondary border-0 px-3 btn-sm">
  //           {image.button} {image.id}
  //         </div>
  //         <div className="btn btn-outline-secondary border-0 px-3 float-end btn-sm">{image.button} {image.id}</div>
  // </figure>)

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h4 className="col mt-3 p-2">LATEST NEWS</h4>
          <button className="btn btn-outline-dark col-md-2 m-3 col-4">
            ADD NEWS
          </button>
        </div>
      </div>

      <figure className="figure container-fluid col col-md-3">
        <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
          <i className="bx bx-bookmark"></i>
          <img
            src="./teacher.jpg"
            className="figure-img img-fluid rounded-top"
            alt="Teacher in className"
            style={{ height: "190px", width: "100%" }}
          />
          <figcaption className="figure-caption mx-2">
            Plenty of class hours with both physical and online lessons.
          </figcaption>
          <div className="btn btn-outline-secondary border-0 px-3 btn-sm mx-2 my-2">
            <i className="bx bx-share-alt" title="share"></i>
          </div>
          <div className="btn btn-outline-secondary border-0 px-3 float-end btn-sm mx-2 my-2">
            <i className="bx bxs-like" title="like"></i>
          </div>
        </div>
      </figure>
      <figure className="figure container-fluid col col-md-3">
        <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
          <i className="bx bx-bookmark"></i>
          <img
            src="./lab.jpg"
            className="figure-img img-fluid rounded-top d-block w-100 object-fit-cover"
            alt="Laboratory"
            style={{ height: "190px", width: "100%" }}
          />
          <figcaption className="figure-caption mx-2">
            For Science classes, Plenty of Science and computer Laboratories.
          </figcaption>
          <div className="btn btn-outline-secondary border-0 px-3 btn-sm mx-2 my-2">
            <i className="bx bx-share-alt" title="share"></i>
          </div>
          <div className="btn btn-outline-secondary border-0 px-3 float-end btn-sm mx-2 my-2">
            <i className="bx bxs-like" title="like"></i>
          </div>
        </div>
      </figure>
      <figure className="figure container-fluid col col-md-3">
        <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
          <i className="bx bx-bookmark"></i>
          <img
            src="./children.jpg"
            className="figure-img img-fluid rounded-top d-block w-100 object-fit-cover"
            alt="children in Class"
            style={{ height: "190px", width: "100%" }}
          />
          <figcaption className="figure-caption mx-2">
            Class hours are essential for both levels of understandig. Improve
            with practice.
          </figcaption>
          <div className="btn btn-outline-secondary border-0 px-3 btn-sm mx-2 my-2">
            <i className="bx bx-share-alt" title="share"></i>
          </div>
          <div className="btn btn-outline-secondary border-0 px-3 float-end btn-sm mx-2 my-2">
            <i className="bx bxs-like" title="like"></i>
          </div>
        </div>
      </figure>
      <figure className="figure container-fluid col col-md-3">
        <div className="rounded" style={{ backgroundColor: "#c8cccf" }}>
          <i className="bx bx-bookmark"></i>
          <img
            src="./lecture room.jpg"
            className="figure-img img-fluid rounded-top d-block w-100 object-fit-cover"
            alt="Lecture room"
            style={{ height: "190px", width: "100%" }}
          />
          <figcaption className="figure-caption mx-2">
            Lecture rooms are handy of convinience. Take your time for classes.
          </figcaption>
          <div className="btn btn-outline-secondary border-0 px-3 btn-sm mx-2 my-2">
            <i className="bx bx-share-alt" title="share"></i>
          </div>
          <div className="btn btn-outline-secondary border-0 px-3 float-end btn-sm mx-2 my-2">
            <i className="bx bxs-like" title="like"></i>
          </div>
        </div>
      </figure>
    </>
  );
}

/* 


 
*/
