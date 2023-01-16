const Service = require('../model/Service');

const HomeController = {
    showHome: (req, res) => {
        return res.render("home/");
    },

    showAbout: (req, res) => {
        return res.render("home/sobre");
    },

    showLogin: (req, res) => {
        return res.render("auth/login");
    },

    showContact: (req, res) => {
        return res.render("home/contato");
    },

    showServices: (req, res) => {
        const servicos = Service.findAll();

        return res.render("home/servicos", { servicos });
    },
}

module.exports = HomeController;