import axios from 'axios';
//import queryString from 'query-string';

export const loginCall = async (userCredential, dispatch, setMessage) => {
  // dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post(
      'http://localhost:3000/login',
      userCredential
    );
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    setMessage('Invalid email or password');
    //dispatch({ type: 'LOGIN_FAILURE', payload: error });
  }
};
