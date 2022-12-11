import axios from "axios";

export const client = (url: string) => {
  return axios
    .get(url)
    .then((data) => data.data)
    .catch((e) => console.log(e));
};
