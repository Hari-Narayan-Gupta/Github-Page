import React, { useState, useEffect } from "react";
import Spinner from './Spinner';
import Card from "./Card";

export default function FetchApi(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    const url = await fetch(`https://api.github.com/users/${props.user}/repos`);
    setLoading(true);
    const actualData = await url.json();
    // console.log(actualData);
    setLoading();
    setData(actualData);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    justifyContent: "space-between",
  };

  return (
    <>
      <div className="container">
        {loading === true ? <Spinner /> : null}
        <div className="row" style={style}>
          {data.map((currEle, indx) => {
            return (
              <>
                <Card
                  key={indx}
                  desc={currEle.description}
                  url={currEle.html_url}
                  repo={currEle.repos_url}
                  name={currEle.name}
                  lang={currEle.language}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
