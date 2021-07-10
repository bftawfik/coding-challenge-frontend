import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedUser } from "../../redux/users/usersSlice";
import { changePostData } from "../../redux/post/postSlice";
import UserList from "../../Components/UserList/UserList";
import UserPosition from "../../Components/UserPosition/UserPosition";
import NewPost from "../../Components/NewPost/NewPost";

const Home = ({ submitNewPost }) => {
  const dispatch = useDispatch();

  const { users, post } = useSelector((state) => state);

  const {
    address: { geo },
  } = users.selected || { address: {} };

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
          onDataChange={(data) => {
            dispatch(changePostData(data));
          }}
          post={post}
          onSubmit={(e) => submitNewPost(e, post.title, post.body, users.selected)}
        />
      </main>
      <footer>Home footer</footer>
    </div>
  );
};

export default Home;
