import DataAtom from "../atoms/DataAtom";
import "../components/css/Survey.css";
import ProfileSection from "../components/ProfileSection";
import Rightside from "../components/Rightside";
import TopSection from "../components/TopSection";

const Survey: React.FC = () => {
  return (
    <div className="survey">
      <div className="survey__nav-menu">
        <TopSection />
        <ProfileSection />
      </div>
      <Rightside />
      <DataAtom />;
    </div>
  );
};

export default Survey;
