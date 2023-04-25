import React from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimationPosts() {
  const animation = keyframes`
 0% {opacity : 0; transform : translateX(400px)  skewX(10deg) ; filter:blur(10px)}
 25% {opacity : 1; transform : translateX(0px)  skewX(0deg) ; filter:blur(0px)}
 75% {opacity : 1; transform : translateX(0px)  skewX(0deg) ; filter:blur(0px)}
 100% {opacity : 1; transform : translateX(-400px)  skewX(10deg) ; filter:blur(10px)}
`;
  const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

    display: inline-block;
    align-items: center;
    margin: 0px 389px;
    color: #3c3a3a;
    font-family: Cedarville cursive;
    font-weight: 700;
    font-size: 54px;
    padding-bottom: 10px;
  `;
  return (
    <div>
      <Wrapper>Success Stories On SOCH</Wrapper>
    </div>
  );
}
