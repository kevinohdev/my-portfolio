import styled from "styled-components";

const ProjectsStyles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-height: 100vh;
    width: 100%;
    background-color: #27296d; //light purple
    padding-bottom: 1rem;
  
    h1 {
      margin: 0 auto;
      font-size: 2rem;
      color: #eeeeee;
      font-weight: 800;
      padding: 1rem;
    }
  }

  h2 {
    color: #eeeeee;
    font-size: 2rem;
    font-weight: 800;
    padding: 0 1rem;
  }

  hr {
    width: 90vw;
    color: #eeeeee;

    @media(max-width: 900px) {
        width: 70vw;
      }
  }

  .card-list {
    width: 90vw;
    max-width: 700px;
  }

  .card {
    background-color: #5f5dbd; //light purple
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border: 5px solid black;
    max-width: 800px;
    max-height: 800px;
  }

  .image {
    border-bottom: 5px solid black;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    width: 100%;

    a {
      text-decoration: none;
      border: 5px solid black;
      border-radius: 1rem;
      padding: 1rem;
      background-color: #8dc6ff; //light blue
    }

    a:hover {
      background-color: #5f5dbd; // light purple
    }
  }

  .tech {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 1rem;
    font-size: 1.2rem;
    color: #edb1f1; //pink
  }
`;

export default ProjectsStyles