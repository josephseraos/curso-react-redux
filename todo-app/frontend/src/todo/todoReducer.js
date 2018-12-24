const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Reunião',
        done: true
    }, {
        _id: 2,
        description: 'Almoço',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REFRESH_CALLED':
            return { ...state }
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'ADD_CLICKED':
            return { ...state }
        case 'SEARCH_CLICKED':
            return { ...state }
        case 'CLEAR_CLICKED':
            return { ...state }
        case 'REMOVE_CLICKED':
            return { ...state }
        case 'MARKASDONE_CLICKED':
            return { ...state }
        case 'MARKASPANDING_CLICKED':
            return { ...state }
        default: return state
    }
}
