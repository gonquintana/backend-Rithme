const mongoose = require('mongoose');

const Hall = require('../models/halls.models');

const halls = [{
    name:"Fabrik",
    address:"Av. de la Industria, 82, 28970 Humanes de Madrid, Madrid",
    image:"https://www.elfest.es/files/places/7/image_746_1_large.jpg"
},{
    name:"WiZink Center",
    address:"Av. Felipe II, s/n, 28009 Madrid",
    image:"https://lh3.googleusercontent.com/p/AF1QipPF7QVezGiiJ-Po6Mc0glcbGRRc1bhnNLRvmwET=s1360-w1360-h1020"
},{
    name:"La Riviera",
    address:"P.º Bajo de la Virgen del Puerto, S/N, 28005 Madrid",
    image:"https://estaticos.esmadrid.com/cdn/farfuture/h5ZoKnzam_MeJhRjdvMA-zXJN9vyv2Pzt9lEISheNPA/mtime:1646730361/sites/default/files/styles/content_type_full/public/recursosturisticos/noche/riviera.jpg?itok=gBsnfmH0"
},{
    name:"Teatro Eslava",
    address:"C. del Arenal, 11, 28013 Madrid",
    image:"https://media.timeout.com/images/105858974/750/422/image.jpg"
}

]