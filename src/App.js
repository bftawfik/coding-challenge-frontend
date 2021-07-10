import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Pages/Home/Home";

import { getUsers } from "./services";

import { addLoadedData } from "./redux/users/usersSlice";

const App = () => {
  const stateUsers = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      if (stateUsers.length === 0 && users.length !== 0) {
        dispatch(addLoadedData(users));
      }
    };
    fetchData();
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
