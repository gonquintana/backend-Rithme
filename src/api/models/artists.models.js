const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const artistsSchema = new Schema({

    name : {type : String, required: true},
    genre : [{ 
        type : {type : String, required: true},
        image : {type : String, required: true},
    }],
    description: {type : String, required: true},
    image : {type : String, required: true},
    concerts : [{type: Schema.Types.ObjectId, ref : 'concerts'}]

    // city: {type : String},
    // tvs : [{type: Schema.Types.ObjectId, ref : 'televisions'}],
    // mobiles : [{type: Schema.Types.ObjectId, ref : 'mobiles'}]

},{
    timestamps : true
})

const Artists = mongoose.model('artists', artistsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Artists; //Para exportar el modelo.