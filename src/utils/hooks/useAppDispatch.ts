import {useDispatch} from "react-redux";
import {ThunkDispatch} from 'redux-thunk';
import {RootActionsType, RootStateType} from "../../bll/store";

export type ThunkDispatchType = ThunkDispatch<RootStateType, any, RootActionsType>

export const useAppDispatch = () => useDispatch<ThunkDispatchType>();