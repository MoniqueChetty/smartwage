import "./css/Survey.css";
import ProfileSection from "./ProfileSection";
import Rightside from "./Rightside";
import TopSection from "./TopSection";

function Survey() {
  return (
    <div className="survey">
      <div className="survey__nav-menu">
        <TopSection />
        <ProfileSection />
      </div>
      {/* <div className="right-side"> */}
      <Rightside />
      {/* </div> */}
    </div>
  );
}

export default Survey;
