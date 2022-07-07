import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import {
  AuthActionEnum,
  SetIsAuthAction,
  SetErrorAction,
  SetUserAction,
  SetIsLoadingAction,
} from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (isAuth: boolean): SetIsAuthAction => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: isAuth,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        const mockUsers = await axios.get("./users.json");
        console.log(mockUsers);
      } catch (e) {
        dispatch(
          AuthActionCreators.setError("Произошла ошибка при авторизации")
        );
      }
    },
  // logout: () => async (dispatch: AppDispatch) => {
  //   try {
  //   } catch (e) {}
  // },
};
