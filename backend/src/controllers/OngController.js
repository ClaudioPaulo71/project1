const crypto = require('crypto');
const connection = require('../database/connection');

module.exports ={

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },


    async create(request, response){
            //const queryparams = request.query;
    //const routeparams = request.params;
    //const data = request.body;
    const {name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    //console.log(queryparams);
    //console.log(routeparams);
    //console.log(data);

    //return response.send('Hell Word!!!');
    return response.json({ id });
    }
};