import "./css/Responses.css";
import RightsideResponsesTable from "./RightsideResponsesTable";
import TableFooter from "./TableFooter";

function RightsideResponses() {
  return (
    <div className="right-side">
      <div className="profile">
        <b className="heading-b">This is the survey name</b>
      </div>
      <div className="content-area">
        <div className="tables">
          <RightsideResponsesTable />

          <TableFooter />
        </div>
      </div>
    </div>
  );
}

export default RightsideResponses;
