import React, { useEffect, useState } from "react";
import "./css/TableFooter.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dataCurrentPage, dataPagelimit } from "../atoms/DataAtom";

interface ITableFooterProps {
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  // currentPage: number;
  // handleClickNext: () => void;
  // handleClickPrev: () => void;
}

function TableFooter(props: ITableFooterProps) {
  const currentPage = useRecoilValue(dataCurrentPage);
  const setCurrentPage = useSetRecoilState(dataCurrentPage);
  const pagelimit = useRecoilValue(dataPagelimit);
  const setDataPagelimit = useSetRecoilState(dataPagelimit);
  const [visible, setVisible] = useState("table__listbottom");

  const handleClickNext = () => {
    currentPage < 9 ? setCurrentPage(currentPage + 1) : setCurrentPage(9);
    console.log("footer page next", currentPage);
  };
  const handleClickPrev = () => {
    currentPage > 0 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
    console.log("footer page prev", currentPage);
  };
  const handleRowsperpage = (e: number) => {
    e > 0 && e < 100 ? setDataPagelimit(e) : setDataPagelimit(10);
    console.log("footer page prev", currentPage);
  };
  const handlePageRowVisible = () => {
    visible == "table__listbottom"
      ? setVisible("table__listbottomvisible")
      : setVisible("table__listbottom");
  };

  const handlelimitchange = (e: number) => {
    setVisible("table__listbottom");
    setDataPagelimit(e);
  };

  return (
    <div className="table__footer">
      <div className="separator1" />
      <div className="content6">
        <div className="rows-per-page">
          <div className="text2 table__footerRowsPerPage">
            <div className="heading ">
              <div className="filters">Rows per page:</div>
            </div>
            <div className="heading table__dropdownmenu">
              <ul className="table__list">
                <li
                  className="table__lista table__listtop"
                  onClick={() => handlelimitchange(10)}
                >
                  10
                </li>
                <li className={visible} onClick={() => handlelimitchange(30)}>
                  30
                </li>
                <li className={visible} onClick={() => handlelimitchange(50)}>
                  50
                </li>
              </ul>
            </div>
          </div>
          <div className="icon11" onClick={() => handlePageRowVisible()}>
            <img
              className="chart-line-icon"
              alt=""
              src="/svg/chevrondown.svg"
            />
          </div>
        </div>
        <div className="rows-per-page">
          <div className="heading">
            <div className="filters">{currentPage} of 9</div>
          </div>
          <div className="icons10">
            <div className="icon-111">
              <img
                className="chart-line-icon"
                alt=""
                src="/svg/chevronleft.svg"
                onClick={() => handleClickPrev()}
              />
            </div>
            <div className="icon-111">
              <img
                className="chart-line-icon"
                alt=""
                src="/svg/chevronright.svg"
                onClick={() => handleClickNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableFooter;
