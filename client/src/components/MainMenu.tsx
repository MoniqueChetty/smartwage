import React from "react";

function MainMenu() {
  return (
    // Hidden items request removal
    <div>
      <div className="main-menu">
        <div className="menu-item-1">
          <img className="menu-icon" alt="" src="frame.svg" />
          <div className="dashboard">Dashboard</div>
        </div>
        <div className="menu-item-1">
          <img className="menu-icon" alt="" src="frame1.svg" />
          <div className="dashboard">Announcements</div>
        </div>
        <div className="menu-item-3">
          <img className="menu-icon" alt="" src="frame2.svg" />
          <div className="dashboard">Surveys</div>
        </div>
        <div className="menu-item-1">
          <img className="menu-icon" alt="" src="frame3.svg" />
          <div className="dashboard">Payslips</div>
        </div>
        <div className="menu-item-1">
          <img className="menu-icon" alt="" src="frame4.svg" />
          <div className="dashboard">Leave</div>
          <div className="notofication-circle">
            <div className="div">10</div>
          </div>
        </div>
        <div className="menu-item-1">
          <img className="menu-icon" alt="" src="frame5.svg" />
          <div className="dashboard">Employees</div>
        </div>
      </div>
      <div className="separator" />
      <div className="radio-button-section">
        <div className="heading-section">
          <div className="heading">
            <div className="filters">Filters</div>
          </div>
          <div className="asterisk">
            <div className="div1">*</div>
          </div>
          <div className="description">
            <div className="this-is-a-description">This is a description</div>
          </div>
        </div>
        <div className="filters1">
          <div className="frame">
            <div className="radio-button">
              <div className="radio-button-active">
                <img className="ellipse-icon" alt="" src="ellipse-1.svg" />
                <img className="ellipse-icon1" alt="" src="ellipse-2.svg" />
              </div>
            </div>
            <div className="all-announcements">All Announcements</div>
          </div>
          <div className="frame">
            <div className="radio-button">
              <div className="heading">
                <img className="x-icon" alt="" src="ellipse-11.svg" />
                <img className="ellipse-icon3" alt="" src="ellipse-2.svg" />
              </div>
            </div>
            <div className="all-announcements">Open</div>
          </div>
          <div className="frame">
            <div className="radio-button">
              <div className="heading">
                <img className="x-icon" alt="" src="ellipse-11.svg" />
                <img className="ellipse-icon3" alt="" src="ellipse-2.svg" />
              </div>
            </div>
            <div className="all-announcements">Scheduled</div>
          </div>
          <div className="frame">
            <div className="radio-button">
              <div className="heading">
                <img className="x-icon" alt="" src="ellipse-11.svg" />
                <img className="ellipse-icon3" alt="" src="ellipse-2.svg" />
              </div>
            </div>
            <div className="all-announcements">Closed</div>
          </div>
          <div className="frame">
            <div className="radio-button">
              <div className="heading">
                <img className="x-icon" alt="" src="ellipse-11.svg" />
                <img className="ellipse-icon3" alt="" src="ellipse-2.svg" />
              </div>
            </div>
            <div className="all-announcements">Draft</div>
          </div>
        </div>
        <div className="error">
          <img className="alert-circle-icon" alt="" src="alertcircle.svg" />
          <div className="filters">You did something wrong!</div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
