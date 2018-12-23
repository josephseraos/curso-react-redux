const aChanged = e => ({
    type: 'A_CHANGED',
    payload: e.target.value
})

const bChanged = e => ({
    type: 'B_CHANGED',
    payload: e.target.value
})

const opChanged = e => ({
    type: 'OP_CHANGED',
    payload: e.target.value
})

const aFocused = e => ({
    type: 'A_FOCUSED',
    payload: e.target
})

const bFocused = e => ({
    type: 'B_FOCUSED',
    payload: e.target
})

export { aChanged, bChanged, opChanged, aFocused, bFocused }
