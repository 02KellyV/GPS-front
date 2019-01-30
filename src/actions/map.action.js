import { mapService } from '../services/map.service';
import { mapConstants } from '../constants/map.constant';

export const mapActions = {
    Actual
};

function Actual(value) {
    return dispatch => {
        dispatch(request());

        mapService.actual(value)
            .then(
                maps => dispatch(success(maps)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: mapConstants.ACTUAL_REQUEST } }
    function success(maps) { return { type: mapConstants.ACTUAL_SUCCESS, maps } }
    function failure(error) { return { type: mapConstants.ACTUAL_FAILURE, error } }
}