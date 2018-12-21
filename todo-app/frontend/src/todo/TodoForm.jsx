import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props =>
    <div>
        <div className="form-row">
            <Grid cols={[12, 9, 10]}>
                <input type="text" className="form-control" placeholder="Nome" autoFocus />
            </Grid>

            <Grid cols={[12, 3, 2]}>
                <IconButton icon='plus' estilo='primary' />
                {/* <button className="btn btn-default ml-2"><i className="fa fa-search"></i></button> */}
            </Grid>
        </div>
    </div>