import {Generator} from '../dist/nerdcreator';

export class BPanelFooter extends Generator{

    create(){
        const cardFooter=document.createElement('div');
        
        cardFooter.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(cardFooter);


    }
}
customElements.define('b-panel-footer',BPanelFooter);