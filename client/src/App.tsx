import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import DataAtom from "./atoms/DataAtom";
import "./App.css";
import Responses from "./pages/Responses";
import Survey from "./pages/Survey";

type responseType = {
  productId?: number;
  id?: number;
  response: string;
  createdby?: string;
  date?: string;
};
const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Survey />} />
          <Route path="/responses" element={<Responses />} />
        </Routes>
      </BrowserRouter>
      <DataAtom />;
    </RecoilRoot>
  );
};

export default App;
