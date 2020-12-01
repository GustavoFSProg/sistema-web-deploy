import styled from 'styled-components'
import { Link } from 'react-router-dom'

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 100vh;
//   background: #e6e6e6;
// `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1180;
  padding: 0 30px;
  margin: 32px auto;
`
export const Forte = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;
`
export const Pragrafo = styled.p`
  color: red;
  line-height: 21px;
  font-size: 16px;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 900px;
`
export const Lista = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  /* 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4px;
  /* display: flex; */
  list-style: none;
  width: 200%;
`
export const UlLista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  display: flex;
  list-style: none;
`

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: gray;
`
