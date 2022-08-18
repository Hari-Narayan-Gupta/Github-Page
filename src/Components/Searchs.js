import React, { useState } from "react";
import Spinner from "./Spinner";

export default function Searchs(props) {
  const [path, setPath] = useState("");

  const handleSearch = (e) => {
    setPath(e.target.value);
  };
  const find = () => {
    props.username(path);
    setPath("");
  };
  return (
    <>
      <div className="container search">
        <div className="center">
          <div className="small">
            <small>Search valid username</small>
          </div>
          <input
            type="search"
            value={path}
            onChange={handleSearch}
            placeholder="Enter-username"
          />
          <button type="submit" className="btn btn-success" onClick={find}>
            Find
          </button>
          <br />
        </div>
        {props.loading === true ? <Spinner /> : null}
      </div>
    </>
  );
}
