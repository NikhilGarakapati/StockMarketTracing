import React, {Component} from 'react';
//import {iex} from '../config/iex';
import {stock} from '../resources/stock';

class StockRow extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }

    applyData(data){
        this.setState({
            data: data[data.length -1]
        })
    }

    componentDidMount(){
        // quering the API
        stock.latestPrice(this.props.ticker , this.applyData.bind(this))
    }

    render(){
        return(
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.close}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.label}</td>
            </tr>
        )
    } 
}



export default StockRow;