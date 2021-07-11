import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import Home from "./Pages/Home/Home";

import { getUsers, postNewPost } from "./services";

import { addLoadedData } from "./redux/users/usersSlice";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const stateUsers = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const notify = (msg) => toast(msg);

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
    try {
      const response = await postNewPost(
        postTitle,
        postBody,
        stateSelectedUser.id
      );

      notify("Successfully added a new post !");
      // console.log(response);
    } catch (error) {
      notify("Somthing went wrong !");
      // console.error(error.response);
    }
  };

  useEffect(() => {
    fetchData(dispatch, addLoadedData, stateUsers);
  });

  return (
    <div className="App">
      <ToastContainer />
      <Home submitNewPost={submitNewPost} />
    </div>
  );
};

export default App;
