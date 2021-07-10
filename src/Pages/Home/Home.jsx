import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedUser } from "../../redux/users/usersSlice";
import UserList from "../../Components/UserList/UserList";

const Home = () => {
  const dispatch = useDispatch();

  const stateUsers = useSelector((state) => state.users.value);
  const stateSelectedUser = useSelector((state) => state.users.selected);
  
  return (
    <div>
      <header>Home header</header>
      <main>
        <UserList
          users={stateUsers}
          selectedUser={stateSelectedUser}
          changeUser={(user) => dispatch(changeSelectedUser(user))}
        />
      </main>
      <footer>Home footer</footer>
    </div>
  );
};

export default Home;
