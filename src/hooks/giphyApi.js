import { useReducer, useCallback } from "react";
import { GIPHY_API_KEY } from "../resources/config";
import axios from "axios";

export const initialState = {
  loading: false,
  error: null,
  data: null
};

export const FETCH_GIFS_START = "FETCH_GIFS_START";
export const FETCH_GIFS_SUCCESS = "FETCH_GIFS_SUCCESS";
export const FETCH_GIFS_ERROR = "FETCH_GIFS_ERROR";

export const httpReducer = (currState, action) => {
  switch (action.type) {
    case FETCH_GIFS_START:
      return {
        ...currState,
        loading: true,
        error: null,
        data: null
      };
    case FETCH_GIFS_SUCCESS:
      return {
        ...currState,
        loading: false,
        data: action.data
      };
    case FETCH_GIFS_ERROR:
      return {
        ...currState,
        loading: false,
        error: action.error
      };
    default:
      throw new Error("Action type does not exist!");
  }
};

const useGiphy = path => {
  const url = `https://api.giphy.com/v1/gifs/${path}`;
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const getGif = useCallback(params => {
    dispatchHttp({ type: FETCH_GIFS_START });

    return axios
      .get(url, {
        params: {
          ...params,
          api_key: GIPHY_API_KEY
        }
      })
      .then(response =>
        dispatchHttp({
          type: FETCH_GIFS_SUCCESS,
          data: response.data
        })
      )
      .catch(error =>
        dispatchHttp({
          type: FETCH_GIFS_ERROR,
          error: error.message
        })
      );
  }, [url]);

  return {
    getGif: getGif,
    error: httpState.error,
    data: httpState.data,
    isLoading: httpState.loading    
  };
};

export default useGiphy;
