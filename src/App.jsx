import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetails from "./pages/VideoDetails";
import Searchresults from "./pages/SearchResults";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch" element={<VideoDetails />} />
          <Route path="/results" element={<Searchresults />} />
        </Routes>
      </BrowserRouter>
      <h1 className=" font-bold"></h1>
    </>
  );
}

export default App;
