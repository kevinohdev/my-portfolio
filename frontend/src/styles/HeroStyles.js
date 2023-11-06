import styled from "styled-components";

const HeroStyles = styled.div`

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 80vw;
    margin-left: 1rem;
    text-transform: uppercase;
    white-space: nowrap;
    padding-top: 10rem;
    color: white;

    @media (min-width: 600px) {
      padding-top: 5rem;
    }
  }

  h1 {
    font-size: 10vw;
    font-weight: 900;
  }

  
  h2 {
    font-size: 6vw;
    font-weight: 900;
    color: #efd510;
    padding: 1rem 0;
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 6vw;
    font-weight: 900;
    padding-top: 2rem;
    color: rgba(255,255,255, 0.9);

    @media (min-width: 600px) {
      font-size: 4vw;
    }
  }

  p {
    text-transform: none;
    line-height: 2rem;
    margin: 4rem auto;
  }

  span {
    background-image: linear-gradient(to right, #efbfc6, #c22828, #8a0f0f, #3c0303);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 3rem;
    background-size: 400%;
    background-position: -100%;

    animation: animatedText 1s infinite;
  }

  @keyframes animatedText{
    from {
      background-position: 0%;
    }

    to {
      background-position: 100%;
    }
  }
`;

export default HeroStyles;