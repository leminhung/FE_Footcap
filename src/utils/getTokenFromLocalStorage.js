const userToken = JSON.parse(localStorage.getItem("jwt"))?.token;
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${userToken}`,
};

export { headers };
