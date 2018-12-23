const INITIAL_STATE = { step: 1, value: 0 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INC': return {...state, value: state.value + state.step}
        case 'DEC': return {...state, value: state.value - state.step}
        case 'STEP_CHANGED': return {...state, step: action.payload}
        default: return state
    }
}
