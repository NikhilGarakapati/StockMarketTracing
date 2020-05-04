import { iex } from '../config/iex.js';

export const stock = {

    latestPrice: (ticker, callback) => {
        const url = stock.latestPriceURL(ticker);
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))
            .catch(err => console.log(err));
    },

    latestPriceURL: (ticker)=>{
        return `${iex.url}/stock/${ticker}/intraday-prices?token=${iex.token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length -1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label 
        return formattedData
    },

    getYesterdaysClose:(ticker, lastTradingDate, callback) =>{

        if(lastTradingDate !== "" && lastTradingDate !== undefined){
            console.log('here')
            const url = stock.getYesterdaysCloseURL(ticker, stock.formatDate(lastTradingDate))
    
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => callback(stock.formatPriceData(data)))
                    .catch(err => console.log(err));
            } 
    },

    getLastTradingDate: () => {  
        const today =  new Date().toISOString().split('T')[0].replace(/-/g, '');

        const url =  `${iex.url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.token}`;

        return fetch(url)
            .then((response) => response.json())
        
    },

    getYesterdaysCloseURL: (ticker, lastTradingDate) =>{
        return `${iex.url}/stock/${ticker}/intraday-prices?exactDate=${lastTradingDate}&token=${iex.token}`
    },


    formatDate:(date) => {
        return new Date(date).toISOString().split('T')[0].replace(/-/g, '');
    }
}


// Issues:
// Late Response by calling getLastingTrade
// Alternate: Call them in HTML