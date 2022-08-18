import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-11 col-lg-3 mx-3">
        <div className="card my-3 mx-3" style={{ width: "20pc" }}>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p className="card-text">
              {props.desc}
            </p>
            <div className="card-link btn btn-primary">
              {props.lang}
            </div>
            <a href={props.url} className="card-link">
              URL Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
