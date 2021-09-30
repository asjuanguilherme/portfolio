import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
   width: 100%;
   position: relative;
`

const PhotoWrapperLight = css`
   background: -moz-linear-gradient(195deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   background: -webkit-linear-gradient(195deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   background: linear-gradient(195deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);
   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7070ff",endColorstr="#6846b9",GradientType=1);
`

export const PhotoWrapper = styled.div`
   width: 100%;
   padding-top: 100%;
   position: relative;
   border-radius: 50%;
   overflow: hidden;

   background: rgba(255,255,255,.3);

   ${ props => props.theme.name === 'light' ? PhotoWrapperLight : '' }
`

export const Photo = styled.div`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   height: 92%;
   width: 92%;
   background-color: blue;
   border-radius: 50%;
   overflow: hidden;
`

export const PhotoImg = styled.img`
   height: 100%;
   width: 100%;
   object-fit: cover;
   object-position: center;
   background-color: #eee;
`

export const Status = styled.span`
   display: flex;
   width: 12%;
   height: 12%;
   border-radius: 50%;
   border: 3px solid white;
   background-color: #3DE9A9;
   position: absolute;
   right: 8%;
   bottom: 8%;
   box-sizing: content-box;
`