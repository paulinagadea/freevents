const { Admin } = require('../models/Admin.js');

const getAllAdmins = async () => {
    const admin = await Admin.findAll();
    return admin;
};

const getAdminByName = async (name) => {
    const allAdmins = await getAllAdmins();
    if (name) {
        const adminName = allAdmins.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        return adminName;
    };
};

const  getAdminById = async (id) => {
    const adminId = await Admin.findOne({
        where: { id: id }
    })
    console.log('✍', adminId)
    return adminId ? adminId : "Not found"
}



module.exports = { getAllAdmins, getAdminByName, getAdminById };