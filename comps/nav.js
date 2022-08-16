import {LitElement, html, css} from 'lit';
import {styles} from '../backpain/styles';

export class navCls extends LitElement{ 
    static styles = [ css`
    :host{ 
            display: flex;
            justify-content: space-between;
            max-width:   1380px;
            margin:      0 auto;
            color:       var(--theme-primary, black);
            background:  var(--my-element-background-color, white);
            font-family: var(--theme-font-family, Poppins);
    }
    
    `,styles];
    //createRenderRoot() {        return this;      }
    render(){
        return html` 
            <div>CoinBank24</div>
            <div></div>
            <div>
                <a href='/joinBussiness' />Get Payment</a>
                <a href='/joinUs' />Make Payment</a>
                <a href='/Contact' />Contact </a>
            </div> 
        `
    }
}
customElements.define('nav-el', navCls);