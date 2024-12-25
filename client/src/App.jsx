import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  Market,
  About,
  Chatbot,
} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className=" gradient-bg-welcome min-h-screen">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/market" element={<Market />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/chatbot" element={<Chatbot />} />
      <Route exact path="/transactions" element={<Transactions />} />
    </Routes>
    <Services />
    <Footer />
  </div>
);

export default App;
