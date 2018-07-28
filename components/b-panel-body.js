import {Generator} from '../dist/nerdcreator';

export class BPanelBody extends Generator{

    create(){
        const cardBody=document.createElement('div');
        
        cardBody.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(cardBody);


    }
}
customElements.define('b-panel-body',BPanelBody);