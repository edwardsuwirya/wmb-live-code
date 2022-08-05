export const RequestHelper = async (dispatch, request) => {
    dispatch({type: 'loading'})
    try {
        return await request()
    } catch (e) {
        dispatch({type: 'error', payload: {error: e.message}})
    }
}