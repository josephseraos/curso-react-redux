import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props => {

    function handleKey(e) {
        if (e.key === 'Enter') {
            props.handleAdd(e)
        } else if (e.key == 'Escape') {
            props.handleClear(e)
        } else {
            props.handleSearch(e)
        }


        // if (e.key === 'Enter') {
        //     if (e.shiftKey) {
        //         props.handleSearch(e)
        //     } else {
        //         props.handleAdd(e)
        //     }
        // } else if (e.key === 'Escape') {
        //     props.handleClear(e)
        // }
    }
    
    return (
        <div className="form-row todo-form">
            <Grid cols={[12, 7, 8, 10]}>
                <input type="text" value={props.description} className="form-control"
                    onChange={props.handleChange} placeholder="Nome" autoFocus
                    onKeyUp={handleKey}
                />
            </Grid>

            <Grid cols={[12, 5, 4, 2]}>
                <IconButton icon='plus' estilo='primary' onClick={props.handleAdd} />
                <IconButton icon='search' estilo='info' onClick={props.handleSearch} />
                <IconButton icon='times' estilo='default' onClick={props.handleClear} />
            </Grid>
        </div>
    )
}