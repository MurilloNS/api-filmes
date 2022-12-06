import { Container } from "./styles.js";

import TitleList from "../../components/TitleList";
import List from "../../components/List/index.jsx";

export default function Home() {
  return (
    <Container>
      <TitleList name={"Trending Movie"} />
      <List></List>
    </Container>
  );
}
