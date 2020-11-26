const axios = require('axios');
const { response } = require('express');

class QuoteController {

    static async getRandom(req, res, next){
        
        try {
            let response = await axios({
                url: 'https://quote-garden.herokuapp.com/api/v2/quotes/random',
                method : 'GET',
                responseType : 'json'
            })

            //console.log(response)
            res.status(200).json(response.data.quote)
        
        } catch (err){
            next(err)
        }
        
    }

    //static async getAllGenres(req, res){
    //    try {

    //    } catch (err){
    //        next(err)
    //    }
    //}
}
module.exports = QuoteController