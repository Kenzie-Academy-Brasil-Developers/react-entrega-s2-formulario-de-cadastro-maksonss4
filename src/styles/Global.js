import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
export default createGlobalStyle`
:root{
    --pink-1: #FF577F;
    --pink-2: #FF427F;
    --brown: #59323F;
    --gray-1: #121214;
    --gray-2: #212529;
    --gray-3: #343B41;
    --gray-4: #868E96;
    --gray-5: #F8F9FA;
    --green: #3FE864;
    --red: #E83F5B;
    --white: #FFFFFF;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
}

body{
    width: 100vw;
    height: 100vh;
    background-color: var(--gray-1);
}

button{
    cursor: pointer;
}
`;
