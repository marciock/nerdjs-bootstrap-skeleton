import {Generator} from '../dist/nerdcreator';
import BButton from './b-button';


export class BCard extends Generator{

    create(){

        const card=document.createElement('div');
        const img=document.createElement('img');
        const cardBody=document.createElement('div');
        const cardTitle=document.createElement('h5');
        const cardText=document.createElement('p');
        const btn=document.createElement('b-btn');

        card.classList.add('card');
        card.style.width='18rem';

        img.classList.add('card-img-top');
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        cardBody.classList.add('card-body');
        cardTitle.classList.add('card-title');
        cardText.classList.add('card-text');

        cardTitle.textContent=this.getProps('title');
        cardText.textContent=this.textContent;
        this.textContent=null;
        btn.type=this.getProps('type');
        btn.innerHTML=this.getProps('btn');


        card.appendChild(img);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(btn);
        card.appendChild(cardBody);


        this.appendChild(card);



    }
}
customElements.define('b-card',BCard);