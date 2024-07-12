import axios from "axios";
export default class AcessoriosApi {
  async buscarTodasOsAcessorios() {
    const { data } = await axios.get("/acessorios/");
    return data.results;
  }
  async adicionarAcessorio(acessorio) {
    const { data } = await axios.post("/acessorios/", acessorios);
    return data.results;
  }
  async atualizarAcessorio(acessorio) {
    const { data } = await axios.put(`/acessorios/${acessorios.id}/`, acessorios);
    return data.results;
  }
  async excluirAcessorios(id) {
    const { data } = await axios.delete(`/acessorios/${id}/`);
    return data.results;
  }
}