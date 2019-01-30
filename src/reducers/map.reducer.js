import { mapConstants } from '../constants/map.constant';

export function maps(state = {}, action) {
    switch (action.type) {
        case mapConstants.ACTUAL_REQUEST:
            return {
                loading: true
            };
        case mapConstants.ACTUAL_SUCCESS:
            return {
                ...state,
                items: action.maps
            };
        case mapConstants.ACTUAL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}