const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'SEARCH_CLICKED':
            return { ...state, list: action.payload }
        case 'CLEAR_CLICKED':
            return { ...state, description: '' }
        default: return state
    }
}
