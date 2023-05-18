import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/board" element={}/>
      <Route path="/board" element={}/>
      <Route path="/board/write" element={}/>
      <Route path="/board/list" element={}/>
      <Route path="/board/list/:id" element={}/>
      <Route path="/board/delete" element={}/>
      <Route path="/auth/signup" element={}/>
      <Route path="/auth/signin" element={}/>
      <Route path="/auth/user/get" element={}/>
      <Route path="/auth/admin/get" element={}/>
      <Route path="/*" element={}/> */}
    </Routes>
    </>
  );
}


export default App;

