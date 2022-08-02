import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import api from "../api/surveysdata";

export const dataState = atom({
  key: "dataState",
  default: [],
});
export const dataCurrentPage = atom({
  key: "dataCurrentPage",
  default: 1,
});
export const dataPagelimit = atom({
  key: "dataPagelimit",
  default: 10,
});
export const dataResponseItem = atom({
  key: "dataResponseItem",
  default: [],
});
export const dataResponseId = atom({
  key: "dataResponseId",
  default: 0,
});
export const dataResponseItemheader = atom({
  key: "dataResponseItemheader",
  default: "",
});

function DataAtom() {
  const [dataset, setDataset] = useRecoilState(dataState);
  const [datasetResponse, setDatasetResponse] =
    useRecoilState(dataResponseItem);
  const [datasetResponseId, setDatasetResponseId] =
    useRecoilState(dataResponseId);
  const [currentPage, setCurrentPage] = useRecoilState(dataCurrentPage);
  const [pagelimit, setPagelimit] = useRecoilState(dataPagelimit);
  const [responseItemheader, setResponseItemheader] = useRecoilState(
    dataResponseItemheader
  );

  useEffect(() => {
    const getSurveydata = async () => {
      const res = await fetch(
        `http://localhost:3006/survey?_page=${currentPage}&_limit=${pagelimit}`
      );
      const data = await res.json();
      setDataset(data);
      console.log("Atom data", data);
      console.log("Atom page", currentPage);
      console.log("Atom pagelimit", pagelimit);
    };
    getSurveydata();
  }, [currentPage, pagelimit]);

  useEffect(() => {
    const getSurveydata = async () => {
      const res = await fetch(
        `http://localhost:3006/responses?productId=${datasetResponseId}`
      );
      const data = await res.json();
      setDatasetResponse(data);
      console.log("Atom dataRes", data);
      console.log("Atom dataResID", datasetResponseId);
    };
    getSurveydata();
  }, [datasetResponseId]);

  return <div></div>;
}

export default DataAtom;
