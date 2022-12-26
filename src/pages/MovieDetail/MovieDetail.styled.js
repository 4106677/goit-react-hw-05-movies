import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* display: flex; */
  margin: 20px;
`;

export const MainInfo = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: calc(100% / 3);
  margin-right: 20px;
`;

export const Links = styled(Link)`
  background-color: blueviolet;
  padding: 10px;
  color: white;
  border-radius: 5px;
  display: inline-flex;
  margin-right: 10px;
  min-width: 100px;

  justify-content: center;

  /* flex-direction: column; */
`;

export const BtnList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
