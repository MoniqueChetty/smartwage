import "./css/SurveyTable.css";

function Tableheader() {
  return (
    <div className="table__header">
      <div className="table__content">Survey Name</div>
      <div className="table__content">Created By</div>
      <div className="table__content">Responses</div>
      <div className="table__content">Launch Date</div>
      <div className="table__content">Close Date</div>
      <div className="table__content">Status</div>
    </div>
  );
}

export default Tableheader;
