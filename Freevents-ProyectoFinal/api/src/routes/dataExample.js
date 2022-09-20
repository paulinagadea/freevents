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
            services: []
    }]
}
]

const getEvent = [
        {
            id: "tab14552-f977-4e48-802b-e59c7e2c17e8",
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
        // logotype: https://dkljpmattbvly.cloudfront.net/5d48d98c324598923d908b93/img-1.jpg|,
        // background_image: https://www.eventosgrandia.com.mx/wp-content/uploads/2017/12/2-1280x720.jpg,
        // gallery_image: https://www.elmueble.com/medio/2021/04/06/baby-shower-de-miguel-futuro-hijo-de-paula-echevarria-y-migue-torres_af723482_1740x2000.jpeg,

        // (2) id: ef2671c2-58eb-4acc-831e-d50e8d2aacd9
        // name: "Luxury Eventos",
        // address: "Av. Juramento 1475 Piso 2",
        // location: "CABA",
        // postal_code: "C1428",
        // cuit: 30-55689777-8,
        // email: "luxuryevents@gmail.com",
        // phone_number: 1149703266,
        // logotype: https://cdn0.casamientos.com.ar/vendor/7395/3_2/960/jpg/280617-pista_7_67395.jpeg,
        // background_image: http://quintotiempo.com/media/k2/items/cache/d61d44254608dd06ccdd2ff02982d14d_XL.jpg,
        // gallery_image: https://cdn0.bodas.com.mx/vendor/2978/3_2/960/jpg/con-13_5_112978.jpeg,

        // (3) id: 5ce3e6ec-fb35-401c-abf5-14612c4cbeb1 
        // name: "Épico eventos",
        // address: "Mendoza 3019",
        // location: "Mar del Plata, Buenos Aires",
        // postal_code: "B7602",
        // cuit: 30-57890534-1,
        // email: "epicoeventos@gmail.com",
        // phone_number: 2235890765,
        // logotype: https://cdn.ciudad.com.ar/sites/default/files/nota/2018/07/27/eventos.jpg ,
        // background_image: https://cdn0.casamientos.com.ar/vendor/5674/3_2/960/jpg/interior%20salon2_7_65674.jpeg,
        // gallery_image: https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1442510411/content-items/001/402/073/12003024_884898498259258_6130636717072031986_n-original.jpg?1442510411,

        // (4) id: 5a6ca913-d299-41a3-b476-fd3ae0114cb8
        // name: "Twenty Eventos",
        // address: "Av. Arquitecto Jorge Bunge 1230",
        // location: "Pinamar, Buenos Aires",
        // postal_code: "B7167",
        // cuit: 30-61789567-2,
        // email: "mejoreseventos@gmail.com",
        // phone_number: 2254678901,
        // logotype: https://www.eclipseeventos.com/wp-content/uploads/2018/10/INICIO2.jpg,
        // background_image: https://static2.eventsip.com/uploads/arpilar/uploads/attachments/arpilar_128a18e8-1065-4354-9ff3-b412325c26a5_065854fa8a137d2b175e_26500af7b6a86a8a7b10.jpg,
        // gallery_image: https://cdn0.casamientos.com.ar/vendor/4045/3_2/960/jpg/44491733-606917989724941-4013791919028043776-n_7_144045-1556018665.jpeg,

        // (5) id: dbaf37b2-deec-4254-a324-6a41233898fd
        // name: "HDS Sónido",
        // address: "Av. Constitución 299",
        // location: "Pinamar, Buenos Aires",
        // postal_code: "B7167",
        // cuit: 30-58761253-0,
        // email: "hdssonido@gmail.com",
        // phone_number: 2254780911,
        // logotype: https://www.listadiscoteca.net/wp-content/uploads/2020/01/mejores-dj-techno.jpg,
        // background_image: https://www.top10listas.com/archivos/i8s/5d839a81bf44b1331e9ec97b333d945f28372208.jpg,
        // gallery_image: https://www.top10listas.com/archivos/i8s/5d839a81bf44b1331e9ec97b333d945f28372208.jpg,

        // (6) id: 465ffeb9-d892-4ac7-90f8-e31d99b994cd
        // name: "Manuel Coronado, fotografía",
        // address: "Av. Juan B. Justo 4700",
        // location: "CABA",
        // postal_code: "C1428",
        // cuit: 30-60987123-9,
        // email: "manuelcoronado@gmail.com",
        // phone_number: 1189641133,
        // logotype: https://cursos.com/wp-content/uploads/2021/02/funciones-fotografo.jpg.webp,
        // background_image: https://thumbs.dreamstime.com/b/concepto-del-fondo-de-las-vacaciones-viaje-con-fotos-fin-semana-en-el-contexto-madera-visi%C3%B3n-superior-espacio-la-copia-endecha-131521453.jpg,
        // gallery_image: https://www.blogdelfotografo.com/wp-content/uploads/2015/01/fotografo.jpg,






// date: 2022-09-09T03:24:00


    // UUIDS EJEMPLOS: 
    // 95899037-1a6c-48ea-8f5a-0cd5be02f36a

    // "name": "LA VIDA Eventos",
    // "address": "Esperanza 1200",
    // "location": "Ciudad de Córdoba, Córdoba",
    // "postal_code": "X5153",
    // "cuit": "30-56789423-2",
    // "email": "lavida@gmail.com",   
    // "phone_number": "3514851949",
    // "logotype": "https://dkljpmattbvly.cloudfront.net/5d48d98c324598923d908b93/img-1.jpg",
    // "background_image": "https://www.top10listas.com/archivos/i8s/5d839a81bf44b1331e9ec97b333d945f28372208.jpg",
    // "galery_event": "https://www.blogdelfotografo.com/wp-content/uploads/2015/01/fotografo.jpg",



// module.exports = {
//     getEvent
// }