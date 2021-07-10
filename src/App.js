import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Pages/Home/Home";

import { getUsers, postNewPost } from "./services";

import { addLoadedData } from "./redux/users/usersSlice";

const App = () => {
  const stateUsers = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const fetchData = async (dispatch, addLoadedData, stateUsers) => {
    try {
      const response = await getUsers();
      const users = response.data;
      if (stateUsers.length === 0 && users.length !== 0) {
        dispatch(addLoadedData(users));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitNewPost = async (e, postTitle, postBody, stateSelectedUser) => {
    e.preventDefault();
    if (!stateSelectedUser) {
      console.log("Please select a user");
    } else {
      try {
        const response = await postNewPost(
          postTitle,
          postBody,
          stateSelectedUser.id
        );
        console.log(response);
      } catch (error) {
        console.error(error.response);
      }
    }
  };

  useEffect(() => {
    fetchData(dispatch, addLoadedData, stateUsers);
  });

  return (
    <div className="App">
      <Home submitNewPost={submitNewPost} />
    </div>
  );
};

export default App;
