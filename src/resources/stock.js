import { iex } from '../config/iex.js';


export const stock = {

    latestPrice: (ticker, callback) => {
        const url = stock.latestPriceURL(ticker);
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

    getYesterdaysClose:(ticker, date, callback) =>{

        stock.getLastTradingDate(date).then((data) => {
            const url = stock.getYesterdaysCloseURL(ticker, data[0].date)
            fetch(url)
                .then((response) => response.json())
                .then((data) => callback(stock.formatPriceData(data)))
                .catch(err => console.log(err));
        })    
    },

    getLastTradingDate: (date) => {
        var today = stock.formatDate(date);

        const url =  `${iex.url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.token}`;

        return fetch(url)
            .then((response) => response.json())
        
    },

    getYesterdaysCloseURL: (ticker, date) =>{
        var lastTradingDate = stock.formatDate(date);
        return `${iex.url}/stock/${ticker}/intraday-prices?exactDate=${lastTradingDate}&token=${iex.token}`
    },

    // Date format YYYY-MM-DD

    formatDate:(date) => {
        return new Date(date).toISOString().split('T')[0].replace(/-/g, '');
    }
}