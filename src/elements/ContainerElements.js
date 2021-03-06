import styled from "styled-components"

export const ContainerWrapper = styled.div`
  background-color: ${props => props.theme.colors.main2};
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(10, minmax(auto, 7rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 2 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
