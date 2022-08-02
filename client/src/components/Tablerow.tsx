import React, { useEffect, useState } from "react";
import "./css/Rightside.css";

function Tablerow({
  servicestatus,
  tablerow,
}: {
  servicestatus: string;
  tablerow: string;
}) {
  const [linecolour, setLinecolour] = useState({ tablerow });
  const [chipscolour, setChipscolour] = useState("chipsgreen chips");

  useEffect(() => {
    servicestatus === "Live"
      ? setChipscolour("chipsgreen chips")
      : setChipscolour("chipsred chips");
  }, [servicestatus]);

  //   setLinecolour("table-rows1");
  return (
    <div className={tablerow}>
      <div className="checkbox">
        <div className="stateunchecked" />
      </div>
      <div className="headings1">
        <div className="name">
          <div className="avatar1">
            <div className="mm">MM</div>
          </div>
          <div className="table__textElements6">
            <div className="title">This is the survey’s name</div>
          </div>
        </div>
        <div className="name1">
          <div className="avatar1">
            <div className="mm">MM</div>
          </div>
          <div className="table__textElements7">
            <div className="title">Name Surname</div>
          </div>
        </div>
        <div className="table__textElements8">
          <div className="title">135823975</div>
        </div>
        <div className="table__textElements8">
          <div className="title">18/05/22 11:35</div>
        </div>
        <div className="table__textElements8">
          <div className="title">21/06/22 23:59</div>
        </div>
        <div className="status">
          <div className={chipscolour}>
            <div className="mm">{servicestatus}</div>
          </div>
        </div>
        <div className="icons">
          <div className="heading">
            <img className="chart-line-icon" alt="" src="/svg/chart.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablerow;
