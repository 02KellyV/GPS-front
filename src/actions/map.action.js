import { mapService } from '../services/map.service';
import { mapConstants } from '../constants/map.constant';

export const mapActions = {
    Actual,
    getAll
};
function getAll() {
    return dispatch => {
        dispatch(request());

        mapService.getAll()
            .then(
                maps => dispatch(success(maps)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: mapConstants.GETALL_REQUEST } }
    function success(maps) { return { type: mapConstants.GETALL_SUCCESS, maps } }
    function failure(error) { return { type: mapConstants.GETALL_FAILURE, error } }
}

function Actual(value) {
    return dispatch => {
        dispatch(request());

        mapService.actual(value)
            .then(
                map => dispatch(success(map)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: mapConstants.ACTUAL_REQUEST } }
    function success(map) { return { type: mapConstants.ACTUAL_SUCCESS, map } }
    function failure(error) { return { type: mapConstants.ACTUAL_FAILURE, error } }
}