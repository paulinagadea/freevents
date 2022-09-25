const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
    const authorization = request.get('authorization') //recuperamos la cabecera authorization
    let token = ''

    //idicamos el esquema que en este casoes bearer y despues pasarle payload
    // token => bearer .384n38djwkwebhd...
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7) //recuperamos unicamente el token sin la cabecera
    }

    //decodificamos el token ya que es un string
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) { // si no tenemos token o el token no tiene el id del usuario
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const { id: userId } = decodedToken // sacamos el id del usuario

    request.userId = userId //en el objeto request se puede guardar informacion y la recuperamos despues en la ruta

    next()
}