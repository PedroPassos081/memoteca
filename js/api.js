const BASE_URL = "http://localhost:3000/pensamentos";

const api = {
  async buscarPensamentos() {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Erro ao buscar pensamentos: ${response.status}`);
    }
    return response.json();
  },

  async salvarPensamento(pensamento) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pensamento),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`Erro ao salvar pensamento: ${response.status} ${text}`);
    }
    return response.json();
  },

  // opcionais, se for usar depois:
  async atualizarPensamento(id, pensamento) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT", // ou "PATCH"
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pensamento),
    });
    if (!response.ok) throw new Error(`Erro ao atualizar: ${response.status}`);
    return response.json();
  },

  async deletarPensamento(id) {
    const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error(`Erro ao deletar: ${response.status}`);
    return true;
  },
};

export default api;
