import styled, { css } from 'styled-components'

export const ButtonDisabled = css`
   opacity: .4;
   filter: grayscale(1);

   &:hover {
      cursor: default;
   }
`

export const Button = styled.button`
   user-select: none;

   height: 3em;
   width: ${ ({ width }) => width? width : 'max-content' };
   padding: 0 3em;
   
   display: flex;
   align-items: center;
   justify-content: center;
   
   border-radius: 2em;
   background: ${ props => props.theme.name === 'light' ? props.theme.colors.primary : '#231A75'};
   border: 0;

   font-size: 1em;
   color: white;

   &:hover {
      cursor: pointer;
      filter: brightness(130%);
   }

   @media screen and (max-width: 768px) {
      width: 100%;
   }

   transition: .3s;

   ${ props => props.disabled ? ButtonDisabled : '' }
`