import {Generator} from '../dist/nerdcreator';

export class BPanelHeader extends Generator{

    create(){
        const cardHeader=document.createElement('div');
        const cardTitle=document.createElement('h5');

        cardHeader.classList.add('card-header');
       

        cardHeader.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(cardHeader);
    }
}
customElements.define('b-panel-header', BPanelHeader);