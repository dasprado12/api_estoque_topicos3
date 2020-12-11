import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { Button } from "./styles";

import Card from "../components/Card";
import EditModal from "../components/EditModal";

import api from "../api";

const Home = () => {
  // const arrayTest = [
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao:
  //       "badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  //   {
  //     nome: "Produto1",
  //     tipo: "Livro",
  //     descricao: "badsaldasdkasdwqsidqwhisa",
  //     quantidade: 10,
  //   },
  // ];

  const [items, setItems] = useState(null);
  const [isOpen, setOpen] = useState(null);
  const history = useHistory();

  const requestData = async () => {
    try {
      const response = await api.get("/produtos");
      setItems(response.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <div>
      <h1> Lista de produtos </h1>
      <Button onClick={() => setOpen(true)}> Criar produto </Button>
      <Button onClick={() => this.requestData()}> Atualizar </Button>
      <EditModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        isCreate={true}
      />
      {/* Trocar arrayTest por items e verificar nome das chaves no json */}
      {items ? (
        items.map((item) => (
          <Card item={item} isOpen={isOpen} setOpen={setOpen} isCreate={true} />
        ))
      ) : (
        <>
          <p>
            Carregando <FaSpinner />
          </p>
        </>
      )}
    </div>
  );
};

export default Home;
