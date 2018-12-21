import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props =>
    <div>
        <div className="form-row">
            <Grid cols={[12, 7, 8, 10]}>
                <input type="text" value={props.description} className="form-control" onChange={props.handleChange} placeholder="Nome" autoFocus />
            </Grid>

            <Grid cols={[12, 5, 4, 2]}>
                <IconButton icon='plus' estilo='primary' onClick={props.handleAdd} />
                <IconButton icon='search' estilo='info' onClick={props.handleSearch} />
                <IconButton icon='eraser' estilo='default' onClick={props.handleClear} />
            </Grid>
        </div>
    </div>