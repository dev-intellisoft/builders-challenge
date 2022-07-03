import styled, { css } from "styled-components";

export const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  color: white;
  height: 100%;
  background-color: #f3f3f3;
`;

export const Box = styled.View`
  width: 80%;
  padding: 10px;
  border-radius: 7px;
  background-color: blue;
  color: white;
  margin: 10px;
`;

export const Text = styled.Text`
  font-family: Helvetica;
  color: white;
`;

export const Button = styled.Pressable`
  width: 80%;
  height: 45px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  color: #000;
  border-radius: 7px;
`;
