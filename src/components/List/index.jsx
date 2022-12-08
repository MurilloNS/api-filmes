import { useState, useEffect, useRef } from "react";
import { ImgBox, ListFilms, Slider, Inner } from "./styles.js";

export default function List({ list }) {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <ListFilms ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <Inner
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {list.map((item) => {
          return (
            <Slider key={item.id}>
              <ImgBox
                src={`${image_path}${item.poster_path}`}
                alt={`${item.title}`}
              ></ImgBox>
            </Slider>
          );
        })}
      </Inner>
    </ListFilms>
  );
}
