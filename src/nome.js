import { useState } from 'react';

export default function Nome(props) {
  const [nome, setNome] = useState(props.default)
  return (
    <div>
        <p>
            {nome}
        </p>
        <button onClick={() => setNome("apsodapsod")}>change name</button>
    </div>
  );
}