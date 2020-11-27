const axios = require('axios');

class SearchPopular {
    static year (req, res, next) {
        const year = req.body.year
        axios({
            method: 'get',
            url: 'http://musicbrainz.org/ws/2/release/',
            params: {
                query:`date:${year}`,
                fmt:json
                },
            responseType: 'json'
            })
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log(error)
                next(error)
            })
    }


}

module.exports = SearchPopular