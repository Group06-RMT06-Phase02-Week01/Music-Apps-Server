const axios = require('axios');

class QuoteController {

    static async getRandomQuote(req, res, next){
        
        try {
            let response = await axios({
                url: 'https://quote-garden.herokuapp.com/api/v2/quotes/random',
                method : 'GET',
                responseType : 'json'
            })

            //console.log(response)
            res.status(200).json(response.data.quote.quoteText)
        
        } catch (err){
            next(err)
        }
        
    }

    static async getRandomInsult(req, res, next){
        try {
            let response = await axios({
                url: 'https://evilinsult.com/generate_insult.php?lang=en&type=json',
                method : 'GET',
                responseType: 'json'
            })
            //console.log(response)
            res.status(200).json(response.data.insult)

        } catch (err){
            next(err)
        }
    }

}
module.exports = QuoteController