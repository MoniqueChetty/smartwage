import React from "react";

function TableFooter() {
  return (
    <div className="table-footer">
      <div className="separator1" />
      <div className="content6">
        <div className="rows-per-page">
          <div className="text2">
            <div className="heading">
              <div className="filters">Rows per page:</div>
            </div>
            <div className="heading">
              <div className="filters">10</div>
            </div>
          </div>
          <div className="icon11">
            <img
              className="chart-line-icon"
              alt=""
              src="/svg/chevrondown.svg"
            />
          </div>
        </div>
        <div className="rows-per-page">
          <div className="heading">
            <div className="filters">1 of 1</div>
          </div>
          <div className="icons10">
            <div className="icon-111">
              <img
                className="chart-line-icon"
                alt=""
                src="/svg/chevronleft.svg"
              />
            </div>
            <div className="icon-111">
              <img
                className="chart-line-icon"
                alt=""
                src="/svg/chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableFooter;
