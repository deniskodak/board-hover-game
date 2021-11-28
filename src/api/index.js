import axios from "axios";

const URL = " https://demo1030918.mockable.io/";

const getApiModes = async () => {
  const { data } = await axios.get(URL);
  return data;
};

export default getApiModes;
