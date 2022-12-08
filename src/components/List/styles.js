import styled from "styled-components";
import { motion } from "framer-motion";

export const ListFilms = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const Inner = styled(motion.div)`
  display: flex;
`;

export const Slider = styled(motion.div)`
  min-height: 200px;
  min-width: 195px;
`;

export const ImgBox = styled.img`
  width: 11em;
  height: 15em;
  border-radius: 20px;
  pointer-events: none;
`;
