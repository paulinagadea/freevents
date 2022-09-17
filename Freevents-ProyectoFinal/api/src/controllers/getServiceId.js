const { Service } = require('../db')

const getServiceId = async () => {
    
    try {
          const services = await Service.findOne({
                where: { id: id },
        
            });
            return services;
     } 
     catch (error) {
        console.log(error);
    };
};

module.exports = { getServiceId }