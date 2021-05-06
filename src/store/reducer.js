import {
    ADD_COUNT,
    SUB_COUNT
} from './contentType';


//创建数据
let initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {
                count: state.count + action.num
            };
        case SUB_COUNT:
            return {
                count: state.count - action.num
            };
        default:
            return state;
    }
}

export default reducer;