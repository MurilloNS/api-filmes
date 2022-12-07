import { useEffect, useState } from "react";
import { Container } from "./styles.js";

import TitleList from "../../components/TitleList";
import api from "../../apis/api.js";
import List from "../../components/List";

export default function Home() {
  const [listTrending, setListTrending] = useState([]);
  const key = "api_key=accfef7d4a25ed192a0ea4c2444edecd";
  const language = "language=pt-BR";

  useEffect(() => {
    api
      .get(`/trending/movie/week?${key}&${language}`)
      .then((response) => {
        setListTrending(response.data.results);
        console.log(response.data.results)
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro" + err.response.data);
      });
  }, []);

  return (
    <Container>
      <TitleList name={"Trending Movie"} />
      <List list={listTrending}/>
    </Container>
  );
}
