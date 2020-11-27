const axios = require('axios')

const musicMatchRoot = 'https://api.musixmatch.com/ws/1.1'

class MusicMatchController {

    static async searchByArtist(req, res, next){

        try {
            const {artist, length, page_number} = req.params
            console.log({artist, length, page_number })
            const response = await axios({
                url: `${musicMatchRoot}/track.search?q_artist=${artist}&page_size=${+length}&page=${+page_number}&s_track_rating=desc&apikey=${process.env.MUSIC_MATCH_API_KEY}`,
                method : 'GET',
                responseType : 'json' 
            })
           
            const data = response.data.message
            const status = data.header.status_code
            //console.log(data)
            
            if (status != 200) {
                throw {status, message : 'sorry, but something wrong just happened'}

            } else {

                res.status(status).json(data.body)
            
            }
            
            //res.status(200).json(data.header)

        } catch(err){
            //console.log(err)
            next(err)
        }
    }

}
module.exports = MusicMatchController