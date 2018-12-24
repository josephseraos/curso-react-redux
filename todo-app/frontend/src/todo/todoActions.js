import axios from 'axios'

const refresh = function(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${baseUrl}?sort=-createdAt${search}`)
        .then(resp => this.setState({ description, list: resp.data }))
}

const baseUrl = 'http://192.168.0.190:3003/api/todos'

const descriptionChanged = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

const addClicked = e => ({
    type: 'ADD_CLICKED'
})

const searchClicked = e => ({
    type: 'SEARCH_CLICKED'
})

const clearClicked = e => ({
    type: 'CLEAR_CLICKED'
})

const removeClicked = e => ({
    type: 'REMOVE_CLICKED'
})

const markAsDoneClicked = e => ({
    type: 'MARKASDONE_CLICKED'
})

const markAsPendingClicked = e => ({
    type: 'MARKASPANDING_CLICKED'
})

export {
    descriptionChanged,
    addClicked,
    searchClicked,
    clearClicked,
    removeClicked,
    markAsDoneClicked,
    markAsPendingClicked
}
