import React from 'react'

export default props =>
    <div>
        <div className="form-row">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input type="text" className="form-control" placeholder="Nome" autoFocus />
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2 text-center">
                <button className="btn btn-primary"><i className="fa fa-plus"></i></button>
                {/* <button className="btn btn-default ml-2"><i className="fa fa-search"></i></button> */}
            </div>
        </div>
    </div>