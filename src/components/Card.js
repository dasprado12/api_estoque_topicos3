import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import {
  CardContainer,
  Title,
  Description,
  Row,
  Col,
  InfoContainer,
  Label,
  EditButton,
  DataContainter,
} from "./styles";
import EditModal from "./EditModal";

const Card = ({ item }) => {
  const { nome, descricao, tipo, quantidade } = item;
  const [isOpen, setOpen] = useState(null);

  return (
    <CardContainer>
      <Row>
        <DataContainter>
          <Col>
            <Title>{nome}</Title>
            <Description>{descricao}</Description>
          </Col>
        </DataContainter>
        <InfoContainer>
          <Col>
            <Label>Tipo: {tipo}</Label>
            <Label>Quantidade: {quantidade}</Label>
            <EditButton onClick={() => setOpen(true)}>
              <AiFillEdit /> Editar
            </EditButton>
          </Col>
        </InfoContainer>
      </Row>
      <EditModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        item={item}
      />
    </CardContainer>
  );
};

export default Card;
