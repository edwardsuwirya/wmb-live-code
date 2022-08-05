const uiInitialState = {
    isLoading: false,
    error: null,
    data: null
}

export function UIReducer(state = uiInitialState, action) {
    switch (action.type) {
        case 'loading':
            return {isLoading: true, error: null, data: null}
        case 'success':
            return {isLoading: false, data: action.payload.data, error: null}
        case 'finish':
            return {isLoading: false, error: null, data: null}
        case 'error':
            return {isLoading: false, error: action.payload.error, data: null}
        default:
            return state;
    }
}