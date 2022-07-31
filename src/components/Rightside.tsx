import "./css/Rightside.css";
import SurveyTable from "./SurveyTable";
import TableFooter from "./TableFooter";
import Tableheader from "./Tableheader";
import Tablerow from "./Tablerow";

function Rightside() {
  return (
    <div className="rightside">
      {/* <div className="rightside__profile"> */}
      <div className="rightside__text-avatar">
        <div className="text1">
          <b className="heading-b">Surveys</b>
        </div>
      </div>
      {/* </div> */}
      <div className="content-area">
        <div className="tables">
          {/* <SurveyTable /> */}
          <Tableheader />
          <div className="rows">
            <Tablerow servicestatus="Live" tablerow="table-rows" />
            <Tablerow servicestatus="Live" tablerow="table-rows1" />
            <Tablerow servicestatus="Live" tablerow="table-rows" />
            <Tablerow servicestatus="Live" tablerow="table-rows1" />
            <Tablerow servicestatus="Live" tablerow="table-rows" />
            <Tablerow servicestatus="Live" tablerow="table-rows1" />
            <Tablerow servicestatus="Live" tablerow="table-rows" />
            <Tablerow servicestatus="Closed" tablerow="table-rows1" />
            <Tablerow servicestatus="Live" tablerow="table-rows" />
            <Tablerow servicestatus="Closed" tablerow="table-rows1" />
          </div>
          <TableFooter />
        </div>
      </div>
    </div>
  );
}

export default Rightside;
