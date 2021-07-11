import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedUser } from "../../redux/users/usersSlice";
import { changePostData } from "../../redux/post/postSlice";
import UserList from "../../Components/UserList/UserList";
import UserPosition from "../../Components/UserPosition/UserPosition";
import NewPost from "../../Components/NewPost/NewPost";

const Home = ({ submitNewPost }) => {
  const [msgId, setMmsgId] = useState(-1);

  const dispatch = useDispatch();
  const { users, post } = useSelector((state) => state);
  const {
    address: { geo },
  } = users.selected || { address: {} };
  const newPostFields = [
    {
      type: "input",
      label: "title",
    },
    {
      type: "textarea",
      label: "body",
      alias: "post",
    },
    {
      type: "submit",
      label: "submit",
    },
  ];

  const validationMsgs = [
    "Please enter a valid title.",
    "Please enter a valid post.",
    "Please select a user from the list.",
  ];

  const validateFormData = () => {
    if (post.title.trim().length === 0) {
      setMmsgId(0);
      return false;
    }
    if (post.body.trim().length === 0) {
      setMmsgId(1);
      return false;
    }
    if (!users.selected) {
      setMmsgId(2);
      return false;
    }
    setMmsgId(-1);
    return true;
  };

  return (
    <div>
      <header>Home header</header>
      <main>
        <UserList
          users={users.value}
          selectedUser={users.selected}
          changeUser={(user) => dispatch(changeSelectedUser(user))}
        />
        <UserPosition
          markerData={
            geo && { lat: parseFloat(geo.lat), lng: parseFloat(geo.lng) }
          }
        />
        <NewPost
          newPostFields={newPostFields}
          validationMsgs={validationMsgs}
          msgId={msgId}
          onDataChange={(data) => {
            dispatch(changePostData(data));
          }}
          post={post}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("99");
            if (validateFormData()) {
              submitNewPost(e, post.title, post.body, users.selected);
            }
          }}
        />
      </main>
      <footer>Home footer</footer>
    </div>
  );
};

export default Home;
