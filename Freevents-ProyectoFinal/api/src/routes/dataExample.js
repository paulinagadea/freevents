const getData = [
    {
        name: "Perla Eventos",
        address: "Copina 2049",
        location: "Ciudad de Códoba, Córdoba",
        postal_code: "X5153",
        cuit: 30-60888953-2,
        email: "perlaeventos@gmail.com",
        phone_number: 3514851949,
        pack_service: [
            {
                name: "EVENTOS GRANDES", 
                description: "Este pack cuenta con todo lo que necesitas para tu gran evento.",
                price: 25000,
                event: ["wedding", 
                        "anniversary", 
                        "15th birthday party", 
                        "birthday party",
                ],
                service:[
                    {
                        name: "catering", 
                        description: "Nuestros excelente servicio de catering a dispocisión de usted. Menúes completos y para todos los gustos (incluye Sin TAC-Vegetarianos y Veganos).", 
                        type_service: "catering",
                    },
                    {
                        name: "mesa dulce", 
                        description: "Las mejores propuestas para armar una mesa dulce perfecta (incluye decoración y motivo)", 
                        type_service: "catering",
                    },
                    {
                        name: "arreglos florales", 
                        description: "Catálogo completo con las mejores propuestas.", 
                        type_service: "arreglos_florales",
                    },
                    {
                        name: "Decoración a gusto del cliente.", 
                        description: "Nuestros profesionales con amplio rango de todo tipo de eventos lograran la decoración de tus sueños.", 
                        type_service: "decoracion",
                    },
                    {
                        name: "Sonido 'Impacto'", 
                        description: "Ofrece una excelente variedad para todo tipo de gustos, también cuenta con un animador para darle chispa a tu fiesta (remix a elección del cliente).", 
                        type_service: "sonido",
                    },
                    {
                        name: "La Quinta Casona, salón de eventos", 
                        description: "Ubicado en Celso Barrios 3490, la belleza y perfección de un espectacular salón para que puedas disfrutar y divertirte.", 
                        type_service: "salon_de_eventos",
                    },
                    {
                        name: "Jessica Biagioni, fotografía.", 
                        description: "Profesional con una extensa experiencia para poder capturar tus mejores momentos.", 
                        type_service: "fotografo",
                    },
                    {
                        name: "Barra de tragos.", 
                        description: "Extensa variedad de bebidas y tragos preparados por nuestro barman, Matias (catálogo con bebias con y sin alcohol).", 
                        type_service: "bar",
                    },
                    {
                        name: "Cotillón y disfraces.", 
                        description: "Contamos con el mejor cotillón y disfraces para adultos y niños. ", 
                        type_service: "disfraz_y_cotillon",
                    },
                    {
                        name: "Traslado", 
                        description: "Tenemos a tu dispocisión de media gama con un chofer matriculado para que puedas trasladarte hasta el lugar del evento.", 
                        type_service: "servicio_de_traslado",
                    },
                    {
                        name: "Mozos y guardia de seguridad.", 
                        description: "La cantidad de mozos y de guardias de seguridad dependerá de la cantidad de invitados.", 
                        type_service: "staff",
                    },
                ]
        },
        {
            name: "EVENTOS MEDIANOS", 
            description: "Este pack cuenta con todo lo que necesitas para tu gran evento.",
            price: 25000,
            event: ["baby", 
                    "anniversary", 
                    "15th birthday party", 
                    "birthday party",
            ],
            service:[
                {
                    name: "catering", 
                    description: "Nuestros excelente servicio de catering a dispocisión de usted. Menúes completos y para todos los gustos (incluye Sin TAC-Vegetarianos y Veganos).", 
                    type_service: "catering",
                },
                {
                    name: "mesa dulce", 
                    description: "Las mejores propuestas para armar una mesa dulce perfecta (incluye decoración y motivo)", 
                    type_service: "catering",
                },
                {
                    name: "arreglos florales", 
                    description: "Catálogo completo con las mejores propuestas.", 
                    type_service: "arreglos_florales",
                },
                {
                    name: "Decoración a gusto del cliente.", 
                    description: "Nuestros profesionales con amplio rango de todo tipo de eventos lograran la decoración de tus sueños.", 
                    type_service: "decoracion",
                },
                {
                    name: "Sonido 'Impacto'", 
                    description: "Ofrece una excelente variedad para todo tipo de gustos, también cuenta con un animador para darle chispa a tu fiesta (remix a elección del cliente).", 
                    type_service: "sonido",
                },
                {
                    name: "La Quinta Casona, salón de eventos", 
                    description: "Ubicado en Celso Barrios 3490, la belleza y perfección de un espectacular salón para que puedas disfrutar y divertirte.", 
                    type_service: "salon_de_eventos",
                },
                {
                    name: "Jessica Biagioni, fotografía.", 
                    description: "Profesional con una extensa experiencia para poder capturar tus mejores momentos.", 
                    type_service: "fotografo",
                },
                {
                    name: "Barra de tragos.", 
                    description: "Extensa variedad de bebidas y tragos preparados por nuestro barman, Matias (catálogo con bebias con y sin alcohol).", 
                    type_service: "bar",
                },
                {
                    name: "Cabina para fotos.", 
                    description: "", 
                    type_service: "decoracion",
                },
                {
                    name: "Revelación de sexo", 
                    description: "Tenemos las mejores opciones para que la revelación de sexo de tu hijo sea inolvidable.", 
                    type_service: "show",
                },
                {
                    name: "Mozos y guardia de seguridad.", 
                    description: "La cantidad de mozos y de guardias de seguridad dependerá de la cantidad de invitados.", 
                    type_service: "staff",
                },

            ]
    }]
},
{
    name: "Luxuty Eventos",
    address: "Av. Juramento 1475 Piso 2",
    location: "CABA",
    postal_code: "C1428",
    cuit: 30-55689777-8,
    email: "luxuryevents@gmail.com",
    phone_number: 1149703266,
    pack_service: [
        {
            name: "COMBO MAYOR", 
            description: "Este pack cuenta con todo lo que necesitas para tu gran evento.",
            price: 25000,
            event: ["wedding", 
                    "anniversary", 
                    "15th birthday party", 
                    "birthday party",
                    "full party"
            ],
            service:[
                {
                    name: "show de drones", 
                    description: "show cuenta con 15 drones.", 
                    type_service: "entretimiento_en_vivo",
                },
                {
                    name: "catering", 
                    description: "Trabajamos con los productos más fresco y te garantizamos un servicio de primera calidad.", 
                    type_service: "catering",
                },
                {
                    name: "arreglos florales", 
                    description: "Nuestros diseñadores cuentan con un excelentísimo catálogo de flores de diferentes tipos y colores para que se adapten a la perfección a tu imaginación.", 
                    type_service: "arreglos_florales",
                },
                {
                    name: "catering vegano y apto para celiacos", 
                    description: "También adaptamos las primeras necesidades de las personas a nuestro completo Menú. Ofrecemos variedad y calidad.", 
                    type_service: "catering",
                },
                {
                    name: "Dj Alex", 
                    description: "El mejor dj para el mejor evento. Adapta su propuesta a los gustos del cliente.", 
                    type_service: "dj",
                },
                {
                    name: "Javu, salón de eventos", 
                    description: "Ubicado en Av. Córdoba 4460, es el perfecto salón para desarrollar tu evento. Cuenta con el espacio suficiente para divertirte como nunca.", 
                    type_service: "salon_de_eventos",
                },
                {
                    name: "Alexis Gonzáles, fotografía.", 
                    description: "Un profesional a la altura de cualquier evento", 
                    type_service: "fotografo",
                },
                {
                    name: "Bar", 
                    description: "Nuesta barra cuenta con variedad de tragos y un bartender de lujo para darte todos tus gustos.", 
                    type_service: "bar",
                },
                {
                    name: "Cotillón.", 
                    description: "Tenemos una divertida propuesta para que a la hora del baile, puedas divertirte con los más variados cotillones.", 
                    type_service: "disfraz_y_cotillon",
                },
                {
                    name: "Decoración.", 
                    description: "Adaptamos todas tus elecciones a la mejor decoración. Excelente calidad (incluye luces, telas, velas, etc. A elección del cliente).", 
                    type_service: "decoracion",
                },
                {
                    name: "Mozos y guardia de seguridad.", 
                    description: "La cantidad de mozos y de guardias de seguridad dependerá de la cantidad de invitados.", 
                    type_service: "staff",
                },
            ]
    }]
}
]

const getEvent = [
        {
            id: "ab14552-f977-4e48-802b-e59c7e2c17e8",
            name: "wedding",
        },
        {
            id: "2ce7d220-f207-4f2f-bd18-69a113aa7eae",
            name: "anniversary",
        },
        {
            id: "9b008d20-f80a-4eba-a115-1279c6ddc5b9",
            name: "15_birthday_party",
        },
        {
            id: "d05cd97a-e6c0-4d67-8a10-a52b043d7508",
            name: "birthday_party",
        },
        {
            id: "c0767d73-8db9-48fc-9fb8-196f2867f795",
            name: "graduation",
        },
        {
            id: "0916ba66-7616-479a-af7b-095fd0377094",
            name: "bachelor_party",
        },
        {
            id: "8352e6cb-e362-49a8-8473-4e8de297a3e2",
            name: "baby_shower",
        },
        {
            id: "6c06256c-7558-4743-ad3a-99434443294a",
            name: "full_party",
        },
]

        // (1) id: a533aa44-67ed-4521-ad60-1c5d12fc927c
        // name: "Perla Eventos",
        // address: "Copina 2049",
        // location: "Ciudad de Códoba, Córdoba",
        // postal_code: "X5153",
        // cuit: 30-60888953-2,
        // email: "perlaeventos@gmail.com",
        // phone_number: 3514851949,

        // (2) id: ef2671c2-58eb-4acc-831e-d50e8d2aacd9
        // name: "Luxury Eventos",
        // address: "Av. Juramento 1475 Piso 2",
        // location: "CABA",
        // postal_code: "C1428",
        // cuit: 30-55689777-8,
        // email: "luxuryevents@gmail.com",
        // phone_number: 1149703266,

        // (3) id: 5ce3e6ec-fb35-401c-abf5-14612c4cbeb1 
        // name: "Épico eventos",
        // address: "Mendoza 3019",
        // location: "Mar del Plata, Buenos Aires",
        // postal_code: "B7602",
        // cuit: 30-57890534-1,
        // email: "epicoeventos@gmail.com",
        // phone_number: 2235890765,

        // (4) id: 5a6ca913-d299-41a3-b476-fd3ae0114cb8
        // name: "Twenty Eventos",
        // address: "Av. Arquitecto Jorge Bunge 1230",
        // location: "Pinamar, Buenos Aires",
        // postal_code: "B7167",
        // cuit: 30-61789567-2,
        // email: "mejoreseventos@gmail.com",
        // phone_number: 2254678901,

        // (5) id: dbaf37b2-deec-4254-a324-6a41233898fd
        // name: "HDS Sónido",
        // address: "Av. Constitución 299",
        // location: "Pinamar, Buenos Aires",
        // postal_code: "B7167",
        // cuit: 30-58761253-0,
        // email: "hdssonido@gmail.com",
        // phone_number: 2254780911,

        // (6) id: 465ffeb9-d892-4ac7-90f8-e31d99b994cd
        // name: "Manuel Coronado, fotografía",
        // address: "Av. Juan B. Justo 4700",
        // location: "CABA",
        // postal_code: "C1428",
        // cuit: 30-60987123-9,
        // email: "manuelcoronado@gmail.com",
        // phone_number: 1189641133,






// date: 2022-09-09T03:24:00


// UUIDS EJEMPLOS: 
// 
// 
// 
// 
// 
// 
// 6f9ba92b-4c96-4622-860b-26ea841d2f63
// 8f1a09b8-c7c0-46b3-9f34-37827cfc4d7c
// 95899037-1a6c-48ea-8f5a-0cd5be02f36a
// fefb084f-27df-4151-9f48-2d17e9048d81
// 425bd235-0b25-4038-a703-616c206290cb
// 6af2d75d-3e83-4206-87f3-235f8c7e6b05
// 8bec10fd-15d1-4479-a44a-9552611925ad
// efa5f4fd-3ca7-4411-a426-01e51fadc123
// 4a834395-cde1-4aa8-a896-35a2a9f413d9
// 09cd387e-3b4c-47e3-b2fe-17b375ab4c71

module.exports = {
    getEvent
}