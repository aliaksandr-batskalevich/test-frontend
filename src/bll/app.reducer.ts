export type AppActionsType = ReturnType<typeof setIsAppInit>;

type AppStateType = {
    isAppInit: boolean
};
const appInitState: AppStateType = {
    isAppInit: false,
};

export const appReducer = (state: AppStateType = appInitState, action: AppActionsType): AppStateType => {
    switch (action.type) {
        case "SET_IS_APP_INIT":
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const setIsAppInit = (isAppInit: boolean) => {
    return {
        type: 'SET_IS_APP_INIT',
        payload: {isAppInit}
    } as const;
};