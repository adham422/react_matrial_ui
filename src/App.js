import { HashRouter, Route, Routes } from "react-router-dom";
import Root from "./Pages/Root";
import Create from "./Pages/Create/Create";
import Home from "./Pages/home/Home";
import NotFound from "./Pages/NotFound";
import Setting from "./Pages/Setting";





function App() {
 
  return (
   <div>
      
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="setting"  element={<Setting />}/>
            <Route path="*"  element={<NotFound />}/>
          </Route>
        </Routes>
      </HashRouter>
      </div>
  );
}

export default App;
