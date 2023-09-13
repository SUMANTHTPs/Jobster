import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async(url, user,thunkAPI) => {
    try {
      /**
       * @param endpoint
       * @param data
       */
      const response = await customFetch.post(url, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const loginUserThunk = async(url, user,thunkAPI) => {
    try {
      const response = await customFetch.post(url, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const updateUserThunk = async(url, user,thunkAPI) => {
    try {
      const response = await customFetch.patch(url, user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          // authorization: `Bearer`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}