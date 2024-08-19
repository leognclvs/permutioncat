import React, { useState, useEffect } from "react";
import "./Reject.css";
import Rejeito from "../../img/rejeito.svg";
import axios from "axios"; // Importar Axios

function Reject() {
  const [formData, setFormData] = useState({
    cat_number: "",
    cliente: "",
    p_in: "",
    p_pos_cart: "",
    p_pre_memb: "",
    p_pos_memb: "",
    vazao_perm: "",
    vazao_rej: "",
  });

  const [availableCats, setAvailableCats] = useState([]);

  useEffect(() => {
    const fetchAvailableCats = async () => {
      try {
        const response = await axios.get("https://permutioncat.fly.dev/catrejeito/");
        setAvailableCats(response.data);
      } catch (error) {
        console.error("Erro ao carregar CATs disponíveis:", error);
      }
    };

    fetchAvailableCats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "cat_number") {
      fetchClientData(value);
    }
  };

  const fetchClientData = async (catNumber) => {
    try {
      const response = await axios.get(
        `https://permutioncat.fly.dev/info/${catNumber}/`
      );
      setFormData((prevState) => ({
        ...prevState,
        cliente: response.data.cliente,
      }));
    } catch (error) {
      console.error("Erro ao carregar informações do cliente:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://permutioncat.fly.dev/recup_rejeito/", formData);
      alert("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      alert("Erro ao salvar dados");
    }
  };

  return (
    <div className="form">
      <div>
        <img
          className="start"
          src={Rejeito}
          alt="Unidade de Recuperação de Rejeito"
        />
      </div>
      <div className="startext">Unidade de Recuperação de Rejeito</div>
      <form onSubmit={handleSubmit} className="inputs">
        <div className="reject">
          <label>Número da CAT:</label>
          <select
            name="cat_number"
            value={formData.cat_number}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            {availableCats.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="reject">
          <label>Cliente:</label>
          <input type="text" name="cliente" value={formData.cliente} readOnly />
        </div>
        <div className="reject">
          <label htmlFor="p_in">Pressão de Entrada:</label>
          <input
            type="text"
            id="p_in"
            name="p_in"
            value={formData.p_in}
            onChange={handleChange}
            required
          />
        </div>
        <div className="reject">
          <label htmlFor="p_pos_cart">Pressão Após Cartucho:</label>
          <input
            type="text"
            id="p_pos_cart"
            name="p_pos_cart"
            value={formData.p_pos_cart}
            onChange={handleChange}
            required
          />
        </div>
        <div className="reject">
          <label htmlFor="p_pre_memb">Pressão Antes da Membrana:</label>
          <input
            type="text"
            id="p_pre_memb"
            name="p_pre_memb"
            value={formData.p_pre_memb}
            onChange={handleChange}
            required
          />
        </div>
        <div className="reject">
          <label htmlFor="p_pos_memb">Pressão Após Membrana:</label>
          <input
            type="text"
            id="p_pos_memb"
            name="p_pos_memb"
            value={formData.p_pos_memb}
            onChange={handleChange}
            required
          />
        </div>
        <div className="reject">
          <label htmlFor="vazao_perm">Vazão do Permeado:</label>
          <input
            type="text"
            id="vazao_perm"
            name="vazao_perm"
            value={formData.vazao_perm}
            onChange={handleChange}
            required
          />
        </div>
        <div className="reject">
          <label htmlFor="vazao_rej">Vazão do Rejeito:</label>
          <input
            type="text"
            id="vazao_rej"
            name="vazao_rej"
            value={formData.vazao_rej}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <div>
        <button className="saveind" onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Reject;
