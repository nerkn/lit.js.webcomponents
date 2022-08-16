import {LitElement, html, css} from 'lit';
import { navCls } from "./comps/nav";
import { IndexHero } from './comps/index/hero';



export class SiteCls extends LitElement{ 
    properties = {
        
    }
    styles = css`
    :host{
        display: flex;
        justify-content: space-between;}
    `
    createRenderRoot() {
        return this;
      }
    render(){
        return html`
        <nav-el class='navel' ></nav-el>
        <index-hero ></index-hero>
        `
    }
}
customElements.define('site-m', SiteCls);