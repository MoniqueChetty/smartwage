import "./css/Submissions.css";

interface ResponsesProps {
  response: {
    productId?: number;
    id?: number;
    response?: string;
    createdby?: string;
    date?: string;
  };
}

function Submissions(props: ResponsesProps) {
  return (
    <div className="sub_Section">
      <div className="sub_text">{props.response.response}</div>
      <div className="sub_dateSection">
        <div className="">{props.response.date}</div>
      </div>
      <div className="sub_separator" />
    </div>
  );
}

export default Submissions;
