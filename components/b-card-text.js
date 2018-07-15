import {Generator} from '../dist/nerdcreator';

export class BCardText extends Generator{

    create(){
        const card=document.createElement('div');
        const cardBody=document.createElement('div');
        const cardTitle=document.createElement('h5');
        const cardSubTitle=document.createElement('h6');
        const textCard=document.createElement('p');
        const link=document.createElement('a');
        const otherLink=document.createElement('a');

        card.classList.add('card');
        cardBody.classList.add('card-body');
        cardTitle.classList.add('card-title');
        cardSubTitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
        textCard.classList.add('card-text');
        link.classList.add('card-link');
        otherLink.classList.add('card-link');

        card.style.width='18rem';

        cardTitle.textContent=this.getProps('title');
        cardSubTitle.textContent=this.getProps('subtitle');
        textCard.innerHTML=this.innerHTML;

        this.innerHTML=null;
        link.textContent=this.getProps('text-link');
        link.href=this.getProps('url');
        otherLink.textContent=this.getProps('text-outher-link');
        otherLink.href=this.getProps('outher-url');


        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubTitle);
        cardBody.appendChild(textCard);
        cardBody.appendChild(link);
        cardBody.appendChild(otherLink);

        card.appendChild(cardBody);

        this.appendChild(card);


    }
}

customElements.define('b-card-text',BCardText);