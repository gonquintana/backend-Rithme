const mongoose = require('mongoose');

const Artist = require('../models/artists.models');

const artists = [{
    name:"Carl Cox",
    genre:'637f9e73b4fa4641d945a691',
    description:"Carl Andrew Cox (Oldham, Gran Mánchester, 29 de julio de 1962) es un DJ y productor británico.​ Fue nombrado DJ #1 en 1996 y 1997 por la revista DJmag y, según expertos en música electrónica, Cox ocupa el puesto número 1 a nivel mundial en calidad musical y técnica.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/CarlCox.jpg/330px-CarlCox.jpg",
    concerts:'637fa9a2b9ecbd0b54b655ff'
},{
    name:"Maluma",
    genre:'637f9e73b4fa4641d945a692',
    description:"Juan Luis Londoño Arias (Medellín, 28 de enero de 1994), conocido por su nombre artístico Maluma, es un cantante colombiano. Saltó a la fama en su país natal en 2011, gracias a los sencillos «Farandulera», «Obsesión», y «La temperatura»; y con «Carnaval» (2014), en el resto de América Latina. Su álbum debut Magia (2012) tuvo éxito comercial en Colombia y un año después fue nominado al Grammy Latino como mejor artista nuevo​",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Maluma_-_Espa%C3%A7o_das_Am%C3%A9ricas_%2837591053894%29.jpg/330px-Maluma_-_Espa%C3%A7o_das_Am%C3%A9ricas_%2837591053894%29.jpg",
    concerts:'637fa9a2b9ecbd0b54b65600'
},{
    name:"Hombres G",
    genre:'637f9e73b4fa4641d945a693',
    description:"Hombres G es una banda musical española. Esta banda fue fundada en Madrid en 1982 por su vocalista y bajista David Summers y uno de sus guitarristas, Rafa Gutiérrez, junto con Javier Molina (batería) y Daniel Mezquita (guitarra). A mediados de los años 80 se popularizó en España con su primer álbum, para después ser conocidos internacionalmente, principalmente en Hispanoamérica.",
    image:"https://www.todomusica.org/imagenes/680x380/hombres_g.jpg",
    concerts:'637fa9a2b9ecbd0b54b65601'
},{
    name:"Leiva",
    genre:'637f9e73b4fa4641d945a693',
    description:"José Miguel Conejo Torres (Madrid, 30 de abril de 1980), más conocido como Leiva, es un músico, cantautor español y multiinstrumentista de rock. En 1999, formó junto a Rubén Pozo la banda de rock en español Pereza, con la que grabó seis discos hasta su separación en 2011. Tras la disolución del grupo, inició una carrera en solitario en la que lleva cinco discos grabados.",
    image:"https://www.todomusica.org/imagenes/680x380/leiva.jpg",
    concerts:'637fa9a2b9ecbd0b54b65602'
}

]

const artistMap = artists.map((artist) => new Artist(artist));

mongoose.connect("mongodb+srv://root:root@cluster0.xbshs7n.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(async () => {
    const allArtist = await Artist.find();

    if(allArtist.length){
        await Artist.collection.drop();
        console.log("Artist eliminados")
    }

}).catch((error) => console.log("error borrando artistas", error)).then(async () => {
    await Artist.insertMany(artistMap)
console.log("Artist creados");

}).catch((error) => console.log("error insertando", error))
.finally(() => {mongoose.disconnect()});