import axios from 'axios';

import BASE_URL from '../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// };

const getUserDataOperation = async userToken => {
  // if (typeof userToken === 'string') {
  //   token.set(userToken);
  // } else {
  //   return;
  // }

  try {
    // const response = await axios.get('api/users/getUserData');
    // return response.data;
  } catch (error) {
    return error.message;
  }
};

export default getUserDataOperation;
