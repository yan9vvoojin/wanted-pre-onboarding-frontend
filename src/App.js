import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

import { HOME, SIGNIN, SIGNUP, TODO } from "./constants/routes";

const App = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={SIGNIN} element={<Signin />} />
      <Route path={SIGNUP} element={<Signup />} />
      <Route path={TODO} element={<Todo />} />
    </Routes>
  );
};

export default App;
