import styled from "styled-components";

interface Props {
  $isVisible: boolean;
};

export const RevealContent = styled.div<{ $isVisible: Props }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(50px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;
