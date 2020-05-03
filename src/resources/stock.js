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
        const url = stock.getYesterdaysCloseURL(ticker, date);
        fetch(url)
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))
            .catch(err => console.log(err));
    },

    getYesterdaysCloseURL: (ticker) =>{
        return `${iex.url}/stock/${ticker}/intraday-prices?exactDate=20190501&token=${iex.token}`

    }

}