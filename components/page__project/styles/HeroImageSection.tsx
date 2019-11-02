import styled from 'styled-components';

type HeroImageSectionProps = {
  img: string;
}
export default styled.section<HeroImageSectionProps>`
  height: 100vh;
  padding: 0 3rem;

  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;
