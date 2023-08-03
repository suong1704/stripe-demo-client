import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
