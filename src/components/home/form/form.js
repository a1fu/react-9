import React from 'react'

class Form extends React.Component {
    render(){
        return(
            <React.Fragment>
                <form className="form-cotizador">
                    <div className="form-group">
                        <label htmlFor="marca">Marca</label>
                        <select className="form-control" value={this.props.marca} onChange={this.props.handleChangeMarca} id="marca">
                            <option value="1">Americano</option>
                            <option value="2">Asiatico</option>
                            <option value="3">Europeo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ano">Año</label>
                        <select className="form-control" value={this.props.ano} onChange={this.props.handleChangeAno} id="ano">
                            {
                                this.props.anos.map( e => {
                                    return( <option key={e}>{e}</option> )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radioTipo" id="tipoSeguro1" value="basico" defaultChecked={true} onChange={this.props.handleChangeTipo}/>
                        <label className="form-check-label" htmlFor="tipoSeguro1">
                            Básico
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radioTipo" id="tipoSeguro2" value="completo" defaultChecked={false} onChange={this.props.handleChangeTipo}/>
                        <label className="form-check-label" htmlFor="tipoSeguro2">
                            Completo
                        </label>
                    </div>
                    <div className="valid-feedback" ref={this.props.valid}>Looks good!</div>
                    <div className="invalid-feedback" ref={this.props.invalid}>Error!</div>
                    <button type="button" className="btn btn-primary mt-3" onClick={this.props.handleClickForm}>Cotizar</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form