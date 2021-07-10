import axios from "axios";

const domainUrl = "https://jsonplaceholder.typicode.com";

const getUsers = async () => {
  return await axios.get(`${domainUrl}/users`);
};

const postNewPost = async (title, body, userId) => {
  return await axios
    .post(`${domainUrl}/posts`, {
      title: title,
      body: body,
      userId: userId,
    })
    .then(function (response) {
      console.log(response);
    });
};

export { getUsers, postNewPost };
