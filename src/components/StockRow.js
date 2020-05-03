import React, {Component} from 'react';
//import {iex} from '../config/iex';
import {stock} from '../resources/stock';

const changeStyle = {
    color: '#006400',
    fontSize: '0.8rem',
    marginLeft: 5
  }
  

class StockRow extends Component{

    constructor(props){
        super(props)
        this.state = {
            price: null,
            date: null,
            time: null,
            dollar_change: 0,
            percent_change: null
        }
    }

    applyData(data){
        console.log(data)
        this.setState({
            price: data.price,
            date: data.date,
            time: data.time
        })
    }

    componentDidMount(){
        // quering the API
        stock.latestPrice(this.props.ticker , this.applyData.bind(this))
    }

    render(){
        return(
            <li className="list-group-item">
                <b>{this.props.ticker}</b> ${this.state.price}
                <span className= "change" style={changeStyle}>
                    {this.state.dollar_change}
                    {this.state.percent_change}
                </span>
            </li>
        )
    } 
}



export default StockRow;