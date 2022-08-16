import {LitElement, html, css} from 'lit';
import {styles} from '../../backpain/styles';




export class IndexHero extends LitElement{ 
    properties = {
        
    } 
    static styles = [styles, css`
    :host{
        display:flex; 
        background-image: url(https://images.unsplash.com/photo-1621101452060-a1e421ecb3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=1600);
        justify-content: space-between;
        min-height: 200px;
        border: 1px solid #fff;
        width: 100vw;
        max-width: min(1380px, 100%);
        margin: 2em auto 0 auto;
        flex-direction: column;
        align-items: center;
        font-family: var(--theme-font-family, Poppins);
        font-size: 1.2em;
        border-radius: 10px;
        text-align:right;
    }
    div{
        width:100vw;
        height:200px
    }
    h3{font-size:3em; z-index:10; 
        text-align: right;
        margin:15px}
    h3 i{}
    h3 b{font-size:1.1em; 
        color: rgb(205 5 5);}
    :host p:first-of-type {    z-index:5; 
        text-shadow: white 0px 0px 5px, grey 0px 0px 10px;
        font-size:1.5em;
     }
    :host   img{    height: 100px;
        transform:scale(5) rotate(-8deg) translateX(-70px) translateY(-53px)
    }
    s{    text-decoration: none;
        display: inline-block;
    }
    s:nth-of-type(1 ){transform:rotate(-6deg)}
    s:nth-of-type(2 ){rotate(-12deg) translate(-43px, -10px)}
    s:nth-of-type(3 ){transform:rotate(-3deg)}
    s:nth-of-type(4 ){transform:rotate(5deg)}
    s:nth-of-type(5 ){transform:rotate(-2deg)}
    s:nth-of-type(6 ){transform: rotate(6deg) translate(-58px, -7px)}
    ` ]
    render(){
        return html`
        <h3 class="">Cause you need <br /><b>Crypto</b></h3>
        <p> Regular payment is <s>slow</s> <s>cumbersome</s> <br /> <s>expensive</s> <s>hard</s> <br /> <s>complex</s> <s>bureaucratic</s> 
        </p>
        <img src='/upl/accept cyrpto.webp' /> 

        `
    }
}
customElements.define('index-hero', IndexHero);