import styled from "styled-components";

export const CardContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 25px 12px 18px;
`;

export const Title = styled.h2`
  color: black;
  font-weight: 300;
`;
export const Description = styled.p`
  color: black;
  font-weight: 300;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  margin: auto auto 0 auto;
`;

export const Label = styled.p`
  color: black;
  margin: 0;
`;

export const DataContainter = styled.div`
  width: 50vw;
`;

export const EditButton = styled.button`
  background-color: lightblue;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 40vw;
  height: 30px;
  margin: 5px 0px 20px 0px;
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  margin-left: auto;
  margin-right: auto;
  width: 255px;
  height: 30px;
  background-color: ${(props) => props.color || "lightblue"};
  margin-top: ${(props) => props.marginTop};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonC = styled.button.attrs({
  type: "submit",
})`
  margin-left: auto;
  margin-right: auto;
  width: 255px;
  height: 30px;
  background-color: ${(props) => props.color || "green"};
  margin-top: ${(props) => props.marginTop};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export const ErrorMsg = styled.p`
  color: red;
`;
