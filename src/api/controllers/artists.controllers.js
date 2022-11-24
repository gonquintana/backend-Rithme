const Artist = require('../models/artists.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllArtists = async (request, response) => {
    try {
        
        const allArtists = await Artist.find().populate('tvs mobiles'); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(allArtists);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllArtists};