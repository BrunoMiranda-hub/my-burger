import React, {Component} from "react";
import Button from "../../../componentes/UI/Button/Button";
import clases from "./ContactData.css";
import axios from "../../../axios-orders"
import Spinner from "../../../componentes/UI/Spinner/Spinner"


class ContactData extends Component{

    state={
        name :"",
        email : "",
        address : {
            street : "",
            postalCode : ""
        },
        loading :false,
    }

    orderHandler = (event) => {
        //el metodo preventDefault anula el comportamiento de un formulario que recarga la pagina cada vez que envia los datos.
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({loading : true})
        const order ={
            ingredients : this.props.ingredients,
            cliente:{
                      nombre:"Homero Simpsons",
                      direccion:{
                              calle:"Avenida Siempreviva",
                              numero:"742",
                              pais:"Estados Unidos"
                              },
                      email:"homersimpsons@gmail.com"  
          },
  
            deliveryMethod:"fastest",
            
      }
        axios.post(`/orders.json`, order)
             .then((response)=>{
                  this.setState({loading : false, purchasing:false})
                  this.props.history.push("/")
                  
             })
             .catch((error)=>{
                  this.setState({loading : false,purchasing:false})
             })
             
    }

    render(){
        let form = (<form>
            <input className ={clases.input} type="text" name="name" placeholder="Your Name" onChange = {(cambio)=> {this.setState({name:cambio})}}/>
            <input className ={clases.input} type="email" name="email" placeholder="Your Mail"/>
            <input className ={clases.input} type="text" name="street" placeholder="Your Street"/>
            <input className ={clases.input} type="text" name="postalCode" placeholder="Your Postal Code"/>
            <Button btn = "Success" clicked = {this.orderHandler}> ORDER</Button>
        </form>);
        if(this.state.loading){
            form = <Spinner/>

        }
        return (
            <div className = {clases.contactData}>
                <h4>Ingrese sus datos por favor </h4>
                {form}

            </div>
        )
    }
}
export default ContactData