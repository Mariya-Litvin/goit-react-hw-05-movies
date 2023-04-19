import styled from 'styled-components';

export const ListReview = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;

export const ElementReviews = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
`;

export const ReviewContent = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;
