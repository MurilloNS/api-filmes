import { Container } from "./styles.js";

import TitleList from "../../components/TitleList";

export default function Home() {
  return (
    <Container>
      <TitleList name={"Trending Movie"} />
    </Container>
  );
}
