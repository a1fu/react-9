import React from 'react'
import './home.scss'

import Form from './form/form'
import Resume from './resume/resume';

class Home extends React.Component {
    constructor(){
        super()
        this.max = new Date().getFullYear()
        this.min = this.max - 20
        this.valid = React.createRef()
        this.invalid = React.createRef()
        this.state = {
            marca: '1',
            ano: this.max.toString(),
            anos: [],
            tipo: 'basico',
            total: 0,
        }
    }

    componentWillMount(){
        this.handleGetAno()
        this.setStateTotal(this.cotizarSeguro())
        this.mostrarInfo()
    }

    // state

    setStateTotal = (item) => {
        this.setState({
            total: item
        })
    }

    // funciones

    // funcion que carga años
    handleGetAno = () => {
        for(let i = this.max; i >=  this.min; i--){ 
            this.state.anos.push(i)
        }
    }

    // funcion que actualiza info marca
    handleChangeMarca = (e) => {
        this.setState({marca: e.target.value})
    }

    // funcion que actualiza info año
    handleChangeAno = (e) => {
        this.setState({ano: e.target.value})
    }

    // funcion que actualiza info tipo
    handleChangeTipo = (e) => {
        if(e.target.checked){
            this.setState({tipo: e.target.value})
        }
    }

    // funcion click formulario
    handleClickForm = () => {
        if(this.state.marca === '' || this.state.ano === '' || this.state.tipo === ''){
            this.invalid.current.style.display = 'block'
            setTimeout(() => {
                this.invalid.current.style.display = 'none'
            }, 3000)
        }else{
            this.valid.current.style.display = 'block'
            setTimeout(() => {
                this.valid.current.style.display = 'none'
            }, 3000)
            
            this.setStateTotal(this.cotizarSeguro())
            this.mostrarInfo()
        }
    }

    // funcion cotizar seguro
    cotizarSeguro = () => {
        /*
            1 = americano 1.25
            2 = asiatico 1.05
            1 = europeo 1.35
        */
        let cantidad
        const base = 2000;
        switch(this.state.marca){
            case '1':
                cantidad = base * 1.15
                break
            case '2':
                cantidad = base * 1.05
                break
            case '3':
                cantidad = base * 1.35
                break
        }

        // leer año
        const diferencia = new Date().getFullYear() - this.state.ano
        // cada año e diferencia hay que reducir 3% el valor del seguro
        cantidad -= ( (diferencia * 3) * cantidad ) / 100

        /* 
            si el seguro es basico se multiplica la cantidad 30% mas
            si el seguro es completo se multiplica la cantidad 50% mas
        */

        if(this.state.tipo === 'basico'){
            cantidad *= 1.30
        }else{
            cantidad *= 1.50
        }

        return(cantidad)
    }

    mostrarInfo = () => {
        switch(this.state.marca){
            case '1':
                this.setState({marcaTxt: 'Americano'})
                break
            case '2':
                this.setState({marcaTxt: 'Asiatico'})
                break
            case '3':
                this.setState({marcaTxt: 'Europeo'})
                break
        }
    }

    render(){
        return(
            <React.Fragment>
                <section className="home">
                    <Form
                        marca={this.state.marca}
                        ano={this.state.ano}
                        anos={this.state.anos}

                        valid={this.valid}
                        invalid={this.invalid}

                        handleChangeMarca={this.handleChangeMarca}
                        handleChangeAno={this.handleChangeAno}
                        handleChangeTipo={this.handleChangeTipo}

                        handleClickForm={this.handleClickForm}
                    />
                    <Resume
                        total={this.state.total}
                    />
                </section>
            </React.Fragment>
        )
    }
}

export default Home