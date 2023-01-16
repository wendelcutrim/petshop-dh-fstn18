const db = require('../database/db.json');

const Service = {
    findAll: () => {
        const services = [];

        db.services.map(service => {
            services.push({
                id: service.id,
                nome: service.name,
                imagem: service.image,
                preco: `R$ ${service.price.toLocaleString("pt-BR", { currency: "BRL", minimumFractionDigits: 2 })}`,
                descricao: service.description,
            })
        });

        return services;
    }
}

module.exports = Service;