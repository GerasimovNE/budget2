import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --color-completed:#0864a1;
    --color-active:#608d39;
    --color-aborted:#787878;
    --color-deadline:#6a0808;
    --color-border-line:#656c9b;
    font-family: nunito;
    font-weight: bold;

    
}

@media (prefers-color-scheme: dark){
    :root{
    --color-navButtonDis:#505062;
    --color-primary:#0a0a15;
    --color-background:#121522;
    --color-text:#d0e3f4;
    --color-hover:#111219;
    --color-tag:#193655;
}
}
@media (prefers-color-scheme: light){
    :root{
    --color-primary:#f7f7f7;
    --color-background:#ffffff;
    --color-text:#283949;
    --color-hover:#f3f3f3;
     --color-tag:#d5e9fd;
     --color-navButtonDis:#c9c9d5;
}


}
  ::-webkit-scrollbar{
       width:0px;
    }
   `;
