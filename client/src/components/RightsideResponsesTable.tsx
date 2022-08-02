import "./css/Responses.css";
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
  response?: string;
};
function RightsideResponsesTable(props: ResponsesProps) {
  return (
    <div className="responsesTable">
      <div className="content">Response by: {props.response.createdby}</div>
      <div className="title">{props.response.response}</div>
    </div>
  );
}

export default RightsideResponsesTable;
