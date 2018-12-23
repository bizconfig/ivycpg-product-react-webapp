import React, {Component} from 'react'

import Aux from "../AuxContainer/AuxContainer";
import Modal from "../../components/UI/Modal/Modal";

const errorHandler = (WrappedComponent : any, axios : any) => {
    return class extends Component {
       state:any = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.response.use((req:any)=> {
                this.setState({error: null})
                return req
            })
            axios.interceptors.response.use((res:any)=>res, (error : any) => {
                    this.setState({error: error})
                })
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }
        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    clicked={this.errorConfirmedHandler}>
                      {(this.state.error!=null)?this.state.error.message:null}  
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}
export default errorHandler;