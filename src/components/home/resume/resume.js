import React from 'react'

class Resume extends React.Component {
    render(){
        return(
            <React.Fragment>
                <section ref={this.props.resume} className="resume">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Resume</h4>
                            {/* <p className="card-text">Marca: {this.props.marcaTxt}<br/>Año: {this.props.ano}<br/>Tipo: {this.props.tipo}<br/>Total: {this.props.total}</p> */}
                            <p className="card-text">Total: {this.props.total}</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Resume
