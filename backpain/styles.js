import {css} from 'lit';
export const styles = css`

* {
    --theme-text: #333;
    --theme-background-color: #f5f5f5;
    --theme-primary: green;
    --theme-secondary: aliceblue;
    --theme-warning: red;
    --theme-font-family:Poppins, Parisienne;
  }
a{color: var(--theme-primary); 
    text-decoration:none}
a:hover{color:var(--theme-warning);
    }  
`;