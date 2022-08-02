import "./css/Responses.css";
import RightsideResponsesTable from "./RightsideResponsesTable";
import TableFooter from "./TableFooter";

interface ResponsesProps {
  response: {
    productId?: number;
    id?: number;
    response?: string;
    createdby?: string;
    date?: string;
  };
}
type response = {
  productId?: number;
  id?: number;
  response?: string;
  createdby?: string;
  date?: string;
};

function RightsideResponses(props: ResponsesProps) {
  return (
    <div className="response__display">
      {/* <div className="profile">
        <b className="heading-b">This is the survey name</b>
      </div> */}
      <div className="content-area">
        <div className="tables">
          <RightsideResponsesTable response={props.response} />

          {/* <TableFooter /> */}
        </div>
      </div>
    </div>
  );
}

export default RightsideResponses;
