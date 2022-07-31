import "./css/Table.css";

function Tableheader() {
  return (
    <div className="table__header">
      <div className="checkbox">
        <div className="stateunchecked" />
      </div>
      <div className="headings">
        <div className="table__textElements">
          <div className="table__content">Survey Name</div>
        </div>
        <div className="table__textElements1">
          <div className="table__content">Created By</div>
        </div>
        <div className="table__textElements2">
          <div className="table__content">Responses</div>
        </div>
        <div className="table__textElements2">
          <div className="table__content">Launch Date</div>
        </div>
        <div className="table__textElements2">
          <div className="table__content">Close Date</div>
        </div>
        <div className="table__textElements5">
          <div className="table__content">Status</div>
        </div>
        <div className="icons-used-for-a-spacer"></div>
      </div>
    </div>
  );
}

export default Tableheader;
