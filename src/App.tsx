import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GroupCreateFirstPage } from "./pages/group/create/first";
import { GroupCreateSecondPage } from "./pages/group/create/second";
import { CategoryPage } from "./pages/category";
import { DonePage } from "./pages/done";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/group/create/1" element={<GroupCreateFirstPage />} />
        <Route path="/group/create/2" element={<GroupCreateSecondPage />} />
        <Route path="/group/create/category" element={<CategoryPage />} />
        <Route path="/group/create/done" element={<DonePage />} />
      </Routes>
    </Router>
  );
};

export default App;
