import styled from "styled-components";

function App() {
  
    const Heading = styled.h1({
    color: "red",
    border: "1px solid green",
    borderRadius: "5px",
    margin: "20px",
    padding: "20px",
  });

  return (
    <>
      <Heading>Hello</Heading>
    </>
  );
}

export default App;
