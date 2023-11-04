import { Route, Routes } from "react-router-dom";
import Template from "./components/Template/Template";

function App() {
  return (
    <Routes>
      <Route index element={<Template />} />
    </Routes>
  );
}

export default App;
