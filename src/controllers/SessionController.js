// metodos: index, show, update, store, destroy
// index: listagem de sessoes
// store: Criar uma sessao
// show: listar um unica sessao
// update: quando queremos alterar alguam sessao
// destroy: quando queremos deletar uma sessao

import User from "../models/User";

class SessionController {
  async store(req, res){

    const { email } = req.body

    //Verificando se o usuario já existe na aplicação
    let user = await User.findOne({ email })

    if(!user){
      user = await User.create({ email })

    }

    return res.json(user);
  }
}

export default new SessionController();