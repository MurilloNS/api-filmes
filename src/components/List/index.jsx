import { Container, ImgBox } from "./styles.js";

export default function List(){
  return(
    <Container>
      <ImgBox src={require("../../assets/miranha.png")} alt="miranha" />
      <ImgBox />
      <ImgBox />
      <ImgBox />
      <ImgBox />
    </Container>
  )
}