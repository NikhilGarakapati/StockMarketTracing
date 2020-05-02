import { iex } from '../config/iex.js';


export const stock = {

    latestPrice: (ticker, callback) => {
        const url = `${iex.url}/stock/${ticker}/intraday-prices?&token=${iex.token}`;
        
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                callback(data)
            })
    }
}