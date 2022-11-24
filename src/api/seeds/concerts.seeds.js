const mongoose = require('mongoose');

const Concert = require('../models/concerts.models');

const concerts = [{
    date:"1 Enero",
    hour:"21:00",
    price:"30€",
    halls:'637f9a2c497a6b743cbc01be'
},{
    date:"28 Enero",
    hour:"20:00",
    price:"20€",
    halls:'637f9a2c497a6b743cbc01bf'
},{
    date:"18 Marzo",
    hour:"20:00",
    price:"25€",
    halls:'637f9a2c497a6b743cbc01c0'
},{
    date:"10 Febrero",
    hour:"19:00",
    price:"20€",
    halls:'637f9a2c497a6b743cbc01c1'
}

]

const concertMap = concerts.map((concert) => new Concert(concert));

mongoose.connect("mongodb+srv://root:root@cluster0.xbshs7n.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(async () => {
    const allConcert = await Concert.find();

    if(allConcert.length){
        await Concert.collection.drop();
        console.log("Concert eliminados")
    }

}).catch((error) => console.log("error borrando conciertos", error)).then(async () => {
    await Concert.insertMany(concertMap)
console.log("Concert creados");

}).catch((error) => console.log("error insertando", error))
.finally(() => {mongoose.disconnect()});