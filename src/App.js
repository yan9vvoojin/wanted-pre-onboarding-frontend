import { Route, Routes } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

import { SIGNIN, SIGNUP, TODO } from "./constants/routes";

const App = () => {
  return (
    <Routes>
      <Route path={SIGNIN} element={<Signin />} />
      <Route path={SIGNUP} element={<Signup />} />
      <Route path={TODO} element={<Todo />} />
    </Routes>
  );
};

export default App;
