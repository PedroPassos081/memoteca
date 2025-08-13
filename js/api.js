const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw Error;
    }
  },
  async salvarPensamento() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: post,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Erro ao salvar pensamentos");
      throw Error;
    }
  },
};

export default api;
