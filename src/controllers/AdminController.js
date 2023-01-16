const Service = require('../model/Service');

const AdminController = {
    getServices: (req, res) => {
        const servicos = Service.findAll();
        const pageTitle = "Serviços"

        return res.render('admin/services', { servicos, pageTitle })
    },

    getCreateService: (req, res) => {
        return res.render('admin/services/cadastro')
    },

    storeService: (req, res) => {
        const { name, price, description, image } = req.body;
        Service.create(name, image, price, description);

        return res.redirect("/admin/services")
    },

    deleteService: (req, res) => {
        const { id } = req.params;

        const service = Service.destroy(id);

        if (service) {
            return res.redirect("/admin/services")
        }

        return res.send("Serviço não encontrado")

    },

    showEditService: (req, res) => {
        const { id } = req.params;
        const servico = Service.findByPk(id);

        if (servico !== undefined) {
            return res.render("admin/services/editar", { servico })
        }
    },

    editService: (req, res) => {
        const { id } = req.params;
        const { name, price, description, image } = req.body;

        const servico = Service.findByPk(id);
        console.log(servico)

        if (servico == undefined) {
            return res.send("Serviço não encontrado")
        }

        const servicoEditado = { id, name, price, description, image }

        Service.update(servicoEditado)
        return res.redirect("/admin/services");
    },
}

module.exports = AdminController;