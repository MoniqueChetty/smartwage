import "./css/Rightside.css";
import SurveyTable from "./SurveyTable";
import TableFooter from "./TableFooter";
import Tableheader from "./Tableheader";
import { useRecoilValue } from "recoil";
import { dataState } from "../atoms/DataAtom";

interface rightsideprops {
  surveydata: survey[];
  currentPage?: number;
}
interface DataAtomProps {
  productId?: number;
  surveyName?: string;
  createdby?: string;
  launchdate?: string;
  closedate?: string;
  status?: string;
}
type survey = {
  productId: number;
  surveyName?: string;
  createdby?: string;
  launchdate?: string;
  closedate?: string;
  status?: string;
};

function Rightside(props: DataAtomProps) {
  const surveydata = useRecoilValue(dataState);

  return (
    <div className="rightside">
      <div className="rightside__text-avatar">
        <div className="text1">
          <b className="heading-b">Surveys</b>
        </div>
      </div>
      <div className="table__setting">
        <Tableheader />
        {surveydata.length > 0 &&
          surveydata.map<JSX.Element>((survey: survey) => (
            <SurveyTable key={survey.productId} survey={survey} />
          ))}
        <TableFooter />
      </div>
    </div>
  );
}

export default Rightside;

// Fetch Request option
// useEffect(() => {
//   const getSurveydata = async () => {
//     const res = await fetch(`http://localhost:3006/survey?_page=1&_limit=10`);
//     const data = await res.json();
//     setSurveydata(data);
//     console.log("Right side", data);
//   };
//   getSurveydata();
// }, []);

// Get Request option
// Retrieve data from API
// const retrieveSurveysdata = async () => {
//   const response = api.get("/survey");
//   return response;
// };

// useEffect(() => {
//   const getAllSurveysdata = async () => {
//     const allSurveysdata = await retrieveSurveysdata();
//     if (allSurveysdata) setSurveydata(allSurveysdata.data);
//     console.log(allSurveysdata);
//   };
//   getAllSurveysdata();
// }, []);
