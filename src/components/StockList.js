import React, {Component} from 'react';
import {stock} from '../resources/stock'; 
import StockRow from './StockRow';


class StockList extends Component{

    constructor(props){
        super(props)
        this.state = {
            lastTradingDate : null
        }
    }

    componentDidMount(){
        stock.getLastTradingDate()
            .then((data) => {
                this.setState({
                    lastTradingDate: data[0].date
                })
            })
    }

    render(){
        const lastTradingDate = this.state.lastTradingDate;

        return(
                <ul className="list-group list-group-flush">
                    <StockRow ticker = "abt"   lastTradingDate= {lastTradingDate} />
                    <StockRow ticker = "grub"  lastTradingDate= {lastTradingDate} />
                    <StockRow ticker = "googl" lastTradingDate= {lastTradingDate} />
                    <StockRow ticker = "msft"  lastTradingDate= {lastTradingDate} />
                    <StockRow ticker = "tsla"  lastTradingDate= {lastTradingDate} />
                </ul>
        )
    } 
}



export default StockList;