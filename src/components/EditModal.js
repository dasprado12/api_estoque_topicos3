import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";

import api from "../api";

import { Input, Label, Button, ErrorMsg } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EditModal = ({ isOpen, onRequestClose, item = {}, isCreate = false }) => {
  const [msg, setMsg] = useState(null);
  // Se a chave não for ID trocar
  const { name, description, quantity, type, id } = item;
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    try {
      if (isCreate) {
        const response = await api.post(`/product`, data);

        onRequestClose();
      } else {
        // Se a chave não for ID trocar

        const response = await api.put(`/product/${id}`, data);

        onRequestClose();
      }
    } catch (error) {
      setMsg(error);
    }
  };

  const handleDelete = async (data) => {
    try {
      // data = {email, pwd}
      const response = await api.delete(`/product/${id}`);
    } catch (error) {
      setMsg(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Título</Label>
        <Input defaultValue={name} name="name" ref={register} />
        <Label>Descrição</Label>
        <Input defaultValue={description} name="description" ref={register} />
        <Label>Quantidade</Label>
        <Input defaultValue={quantity} name="quantity" ref={register} />
        <Label>Tipo</Label>
        <Input defaultValue={type} name="type" ref={register} />
        <p />
        <Button>Editar</Button>
        {msg && <ErrorMsg>{msg}</ErrorMsg>}
      </form>
      <Button onClick={handleDelete} marginTop="5vh" color="red">
        <AiFillDelete />
        Deletar
      </Button>
    </Modal>
  );
};

export default EditModal;
