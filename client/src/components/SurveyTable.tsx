import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dataResponseId,
  dataResponseItem,
  dataResponseItemheader,
} from "../atoms/DataAtom";
import { Link } from "react-router-dom";
import "./css/SurveyTable.css";

interface SurveyTableProps {
  survey: {
    productId: number;
    surveyName?: string;
    createdby?: string;
    launchdate?: string;
    closedate?: string;
    status?: string;
  };
  // tablerow: () => void;
}

function SurveyTable(props: SurveyTableProps) {
  const responseItem = useRecoilValue(dataResponseItem);
  const setResponseItem = useSetRecoilState(dataResponseItem);
  const responseItemheader = useRecoilValue(dataResponseItemheader);
  const setResponseItemheader = useSetRecoilState(dataResponseItemheader);
  const responseItemId = useRecoilValue(dataResponseId);
  const setResponseItemId = useSetRecoilState(dataResponseId);
  const [chipscolour, setChipscolour] = useState("chipsgreen chips");
  const [tablerow, setTablerow] = useState("table__data table__datacolgray");

  useEffect(() => {
    props.survey.status === "Live"
      ? setChipscolour("table__chipsgreen table__chips")
      : setChipscolour("table__chipsred table__chips");
  }, [props.survey.status]);

  useEffect(() => {
    props.survey.productId % 2 === 0
      ? setTablerow("table__data table__datacolwhite")
      : setTablerow("table__data table__datacolgray");
  }, [props.survey.status]);

  const handleResponses = () => {
    console.log("Survey table res", props.survey.productId);
    setResponseItemId(props.survey.productId);
    // setResponseItemheader(props.survey.surveyName);
  };

  return (
    // <a href="http://localhost:3000/responses" onClick={() => handleResponses()}>
    <Link to="/responses">
      <div className={tablerow} onClick={() => handleResponses()}>
        <div className="table__content2">{props.survey.surveyName}</div>
        <div className="table__content2">{props.survey.createdby}</div>
        <div className="table__content2">{props.survey.productId}</div>
        <div className="table__content2">{props.survey.launchdate}</div>
        <div className="table__content2">{props.survey.closedate}</div>
        <div className={chipscolour}>{props.survey.status}</div>
        <div className="table__content2">
          <img className="" alt="" src="/svg/chart.svg" />
        </div>
      </div>
    </Link>
  );
}

export default SurveyTable;
