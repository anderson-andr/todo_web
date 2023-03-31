const jwt = require ('jsonwebtoken')


exports.validaToken = (req, res , next )  => {
    //header -> auth-token  --> token // obter do header o token 

    const token = req.get("x-auth-token");

    //Se não existe token -->  retorna 401 ou 400
    
    //se  existe o  token --> 
    //jwt.verify com a senha de acesso ('Sen@crs') retorna  err ou payload
     // err --> retorna 401 
    if (!token) {
            res.status(401).json({erro:"Token Inválid1"});
    }
    // payload --> next();
    else  {
        jwt.verify(token, 'Todo@App', (err, payload ) => {
            if(err) {
                res.status(401).json({erro:"Token Inválido 2"});

            }
            else  {
                console.log("Payload: ", JSON.stringify(payload))
                next();
            }

        } )
    }
   
}