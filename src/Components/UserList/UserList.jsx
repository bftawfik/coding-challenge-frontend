import classes from "./UserList.module.scss";

const UserList = ({ users, selectedUser, changeUser }) => {
  return (
    <div className={classes.UserList}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id === selectedUser?.id ? (
              <span>{user.name}</span>
            ) : (
              <button onClick={() => changeUser(user)}>{user.name}</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
