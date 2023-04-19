import styled from 'styled-components';

export const Section = styled.section`
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const ElementCards = styled.li`
  text-align: center;
  flex-basis: calc((100% - 60px) / 4);
`;
