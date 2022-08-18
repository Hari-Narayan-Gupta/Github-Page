import React, { useState, useEffect } from "react";
// import React from "react";
import Spinner from "./Spinner";

export default function Main(props) {

  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchInfo = async () => {
    const url = await fetch(`https://api.github.com/users/${props.user}`);
    setLoading(true);
    const actualInfo = await url.json();
    // console.log(actualInfo);
    setLoading(false);
    setInfo(actualInfo);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
    {loading === true ? <Spinner /> : null}
      <div className="container d-flex my-3">
        <div className="img_div">
          <img
            src={info.avatar_url}
            alt=""
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <div className="my-3 ml-3">
            <a href={info.url}>{info.url}</a>
          </div>
        </div>
        <div className="small my-5">
          <h2>{info.login}</h2>
          <br />
          <p>{info.bio}</p>
          <p>{info.location}</p>
        </div>
      </div>
    </>
  );
}
