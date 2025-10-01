import { useState } from "react";

function Home() {
  const [like, setLike] = useState(0);

  return (
    <>
      <h1>Desafio (Curso Dev)!</h1>
      <button
        onClick={() => {
          setLike(like + 1);
          alert("Obrigado pelo apoio!");
        }}
      >
        Curtir
      </button>

      <h3>
        Total de amigos: <strong>{like}</strong>
      </h3>
    </>
  );
}

export default Home;
