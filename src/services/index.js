import axios from "axios";

const domainUrl = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  return await axios.get(domainUrl).then((res) => {
    return res.data;
  });
};

export { getUsers };
