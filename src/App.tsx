import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GroupCreatePage } from "./pages/group/create";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GroupCreatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
