import {Generator}  from '../dist/nerdcreator';

export class BCol extends Generator{

    create(){
        let div=document.createElement('div');

        div.classList.add('col');
        console.log(div.classList);
        div.innerHTML=this.innerHTML;
        this.innerHTML="";
        this.appendChild(div);
        

    }
   

}
customElements.define('b-col',BCol);