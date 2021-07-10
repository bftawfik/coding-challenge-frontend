const UserList = ({ users, selectedUser, changeUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.id === selectedUser?.id ? (
            <span>{user.name}</span>
          ) : (
            <button onClick={()=> changeUser(user)}>{user.name}</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
