import { Container, ImgBox } from "./styles.js";

export default function List({ list }) {
  const image_path = "https://image.tmdb.org/t/p/w500";
  
  return (
    <Container>
      {list.filter((item, idx) => idx < 5).map(item => {
        return(
          <ImgBox key={item.id} src={`${image_path}${item.poster_path}`} alt={`${item.title}`}></ImgBox>
        )
      })}
    
    </Container>
  );
}
