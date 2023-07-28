import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from '@/pages/Home/Home';
import Error from '@/pages/Not404/Not404';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
