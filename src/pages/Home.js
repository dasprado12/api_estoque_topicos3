import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { Button } from "./styles";

import Card from "../components/Card";
import EditModal from "../components/EditModal";

import api from "../api";

const Home = () => {
  const arrayTest = [
    {
      name: "Produto1",
      type: "Livro",
      description:
        "badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
    {
      name: "Produto1",
      type: "Livro",
      description: "badsaldasdkasdwqsidqwhisa",
      quantity: 10,
    },
  ];

  const [items, setItems] = useState(null);
  const [isOpen, setOpen] = useState(null);

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
      <EditModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        isCreate={true}
      />
      {/* Trocar arrayTest por items e verificar nome das chaves no json */}
      {arrayTest ? (
        arrayTest.map((item) => (
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
