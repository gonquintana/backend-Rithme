const Concert = require('../models/concerts.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllConcerts = async (request, response) => {
    try {
        
        const getAllConcerts = await Concert.find().populate('tvs mobiles'); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(allArtists);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllConcerts};