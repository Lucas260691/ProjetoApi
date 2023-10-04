// metodos: index, show, update, store, destroy
// index: listagem de sessoes
// store: Criar uma sessao
// show: listar um unica sessao
// update: quando queremos alterar alguam sessao
// destroy: quando queremos deletar uma sessao

class SessionController {
  store(req, res){
    return res.json({ message: 'Minha api'});
  }
}

export default new SessionController();