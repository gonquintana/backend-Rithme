const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const concertsSchema = new Schema({

    date : {type : String, required: true},
    hour : {type : Number, required: true},
    price: {type : String, required: true},
    halls : {type: Schema.Types.ObjectId, ref : 'halls'}



},{
    timestamps : true
})

const Concerts = mongoose.model('concerts', concertsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Concerts; //Para exportar el modelo.