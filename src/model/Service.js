const gerarIdAleatorio = require('crypto');
const fs = require('fs');
const path = require('path');

const db = require('../database/db.json');

function HandleService(name, image, price, description) {
    this.id = gerarIdAleatorio.randomUUID()
    this.name = name;
    this.image = image;
    this.price = Number(price);
    this.description = description;
}

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
    },

    findByPk: (id) => {
        const service = db.services.find(service => service.id == id);

        return service;
    },

    create: (name, image, price, description) => {
        const service = new HandleService(name, image, price, description)

        db.services.push(service);
        const dbJson = JSON.stringify(db, null, 4);

        fs.writeFileSync(path.resolve("src", "database", "db.json"), dbJson, 'utf8');
        return;
    },

    update: (serviceObj) => {
        const serviceIndex = db.services.findIndex(service => service.id == serviceObj.id);

        if (!serviceIndex) {
            return
        }

        db.services[serviceIndex] = serviceObj;

        const dbJson = JSON.stringify(db, null, 4);
        fs.writeFileSync(path.resolve("src", "database", "db.json"), dbJson, 'utf8');
        return;
    },

    destroy: (id) => {
        const serviceIndex = db.services.findIndex(service => service.id == id);

        if (!serviceIndex) {
            return false;
        }

        db.services.splice(serviceIndex, 1);
        const dbJson = JSON.stringify(db, null, 4);
        fs.writeFileSync(path.resolve("src", "database", "db.json"), dbJson, 'utf8');

        return true

    }
}

module.exports = Service;