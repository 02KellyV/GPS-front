import { mapConstants } from '../constants/map.constant';

export function maps(state = {}, action) {
    switch (action.type) {
        case mapConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case mapConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: {
                    maps: action.maps,
                    map: {}
                }
            };
        case mapConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case mapConstants.ACTUAL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case mapConstants.ACTUAL_SUCCESS:
            state.items.maps.unshift(action.map);
            state.items.maps.pop();
            state.loading = false;
            return {
                ...state,
                items: {maps: state.items.maps, map: action.map}
            };
        case mapConstants.ACTUAL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}