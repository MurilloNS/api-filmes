import { Container, Title } from "./styles";

export default function TitleList({ name }) {
  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  );
}
