import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import UserList from "../../Components/UserList/UserList";
import UserPosition from "../../Components/UserPosition/UserPosition";
import NewPost from "../../Components/NewPost/NewPost";

import { changeSelectedUser } from "../../redux/users/usersSlice";
import { changePostData, resetPostData } from "../../redux/post/postSlice";

import classes from "./Home.module.scss";

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
    <div className={classes.Home}>
      <FulscrnWrpr
        className={classes.header}
        containerClassName={classes.container}
      >
        <h1 className={classes.headerRow}>
          AdMyBrand Coding Challenge for Front-End
        </h1>
      </FulscrnWrpr>
      <FulscrnWrpr>
        <div className={classes.pageRow}>
          <h2 className={classes.sectionRow}>Users List</h2>
          <div className={classes.sectionRow}>
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
          </div>
        </div>
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
            if (validateFormData()) {
              submitNewPost(e, post.title, post.body, users.selected);
              dispatch(resetPostData());
            }
          }}
        />
      </FulscrnWrpr>
      <FulscrnWrpr
        className={classes.footer}
        containerClassName={classes.container}
      >
        <p>
          Copyright © 2021{" "}
          <a
            href="https://bftawfik.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            bftawfik.github.io
          </a>{" "}
          All rights reserved
        </p>
      </FulscrnWrpr>
    </div>
  );
};

export default Home;
