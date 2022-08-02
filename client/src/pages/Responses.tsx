import { useRecoilValue } from "recoil";
import DataAtom, { dataResponseItem, dataResponseItemheader } from "../atoms/DataAtom";
import "../components/css/Responses.css";
import ProfileSection from "../components/ProfileSection";
import RightsideResponses from "../components/RightsideResponses";
import Submissions from "../components/Submissions";
import TopSection from "../components/TopSection";

interface Resrightsideprops {
  responseItem: response[];
  currentPage?: number;
}
interface ResponsesProps {
  // responses: {
  productId?: number;
  id?: number;
  response?: string;
  createdby?: string;
  date?: string;
  // };
}
type response = {
  productId?: number;
  id?: number;
  response: string;
  createdby?: string;
  date?: string;
};

// function Responses(props: ResponsesProps) {
const Responses: React.FC<ResponsesProps> = (props: ResponsesProps) => {
  const responseItem = useRecoilValue(dataResponseItem);
  const responseItemheader = useRecoilValue(dataResponseItemheader);

  return (
    <div className="responses">
      <div className="res_nav-menu">
        <TopSection />

        <div className="res_nav-menu2 scrollhost">
          <div className="menu__header">Submissions</div>
          {responseItem.length > 0 &&
            responseItem.map<JSX.Element>((response: response) => (
              <Submissions key={response.id} response={response} />
            ))}
        </div>

        <ProfileSection />
      </div>
      <div>
        <div className="profile right-side">
          <b className="heading-b">{responseItemheader}</b>
        </div>
        {responseItem.length > 0 &&
          responseItem.map<JSX.Element>((response: response) => (
            <RightsideResponses key={response.id} response={response} />
          ))}
      </div>
      {/* <DataAtom />; */}
    </div>
  );
};

export default Responses;
