import axios from "axios";

const getApiModes = async () => {
  const { data } = await axios.get("http://demo1030918.mockable.io/");
  return data;
};

export default getApiModes;
