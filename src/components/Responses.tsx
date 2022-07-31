import "./css/Responses.css";
import ProfileSection from "./ProfileSection";
import Rightside from "./Rightside";
import RightsideResponses from "./RightsideResponses";
import Submissions from "./Submissions";
import TopSection from "./TopSection";

function Responses() {
  return (
    <div className="responses">
      <div className="res_nav-menu">
        <TopSection />

        <div className="res_nav-menu2 scrollhost">
          <Submissions />
          <Submissions />
          <Submissions />
          <Submissions />
          <Submissions />
          <Submissions />
          <Submissions />
          <Submissions />
        </div>

        <ProfileSection />
      </div>
      {/* <div className="right-side"> */}
      <RightsideResponses />
      {/* </div> */}
    </div>
  );
}

export default Responses;
