const INITIAL_STATE = {
    a: 0,
    b: 0,
    op: 0,
    total: 'Escolha uma operação'
}

export default (state = INITIAL_STATE, action) => {

    const calc = (a, op, b) => {
        let total = 0
        switch (op) {
            case 1: total = a + b; break
            case 2: total = a - b; break
            case 3: total = a * b; break
            case 4:
                if (b !== 0)
                    total = a / b
                else
                    total = 'Segundo valor não pode ser zero para divisão'
                break
            default: total = 'Escolha uma operação'
        }
        return total
    }

    switch (action.type) {
        case 'A_CHANGED':
            {
                const total = calc(+action.payload, state.op, state.b)
                return { ...state, a: +action.payload, total }
            }
        case 'B_CHANGED':
            {
                const total = calc(state.a, state.op, +action.payload)
                return { ...state, b: +action.payload, total }
            }
        case 'OP_CHANGED':
            {
                const total = calc(state.a, +action.payload, state.b)
                return { ...state, op: +action.payload, total }
            }
        case 'A_FOCUSED':
            action.payload.select()
            return state
        case 'B_FOCUSED':
            action.payload.select()
            return state
        default:
            return state
    }
}