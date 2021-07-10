import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeSelectedUser } from "../../redux/users/usersSlice";
import UserList from "../../Components/UserList/UserList";
import UserPosition from "../../Components/UserPosition/UserPosition";

const Home = () => {
  const dispatch = useDispatch();

  const stateUsers = useSelector((state) => state.users.value);
  const stateSelectedUser = useSelector((state) => state.users.selected);
  const {
    address: { geo },
  } = stateSelectedUser || { address: {} };
  return (
    <div>
      <header>Home header</header>
      <main>
        <UserList
          users={stateUsers}
          selectedUser={stateSelectedUser}
          changeUser={(user) => dispatch(changeSelectedUser(user))}
        />
        <UserPosition
          markerData={
            geo && { lat: parseFloat(geo.lat), lng: parseFloat(geo.lng) }
          }
        />
      </main>
      <footer>Home footer</footer>
    </div>
  );
};

export default Home;
