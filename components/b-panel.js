import {Generator} from '../dist/nerdcreator';

export class BPanel extends Generator{

    create(){

        const card=document.createElement('div');
        card.classList.add('card');
        card.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(card);
    }
}
customElements.define('b-panel',BPanel);