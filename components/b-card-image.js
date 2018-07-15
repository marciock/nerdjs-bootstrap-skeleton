import {Generator} from '../dist/nerdcreator';

export class BCardImage extends Generator{

    create(){

        const card=document.createElement('div');
        const img=document.createElement('img');
        const cardBody=document.createElement('div');
        const cardText=document.createElement('p');

        card.classList.add('card');
        card.style.width='18rem';
        
        img.classList.add('card-img-top');
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        cardBody.classList.add('card-body');
        cardText.classList.add('card-text');

        cardText.innerHTML=this.innerHTML;
        this.innerHTML=null;

        card.appendChild(img);
        card.appendChild(cardBody);

        cardBody.appendChild(cardText);

        this.appendChild(card);

        


    }
}
customElements.define('b-card-img',BCardImage);