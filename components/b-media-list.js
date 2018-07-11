import {Generator} from '../dist/nerdcreator';

export class BMediaList extends Generator{


   
    create(){
        const media=document.createElement('li');
        const img=document.createElement('img');
        const mediaBody=document.createElement('div');
        const mediaHead=document.createElement('h5');
        const textMedia=document.createElement('span');

        media.classList.add('media');

        
       
        
        mediaBody.classList.add('media-body');
        mediaHead.classList.add('mt-0','mb-1');
        
        img.src=this.getProps('src');
        img.alt=this.getProps('alt');

        mediaHead.textContent=this.getProps('title');

        textMedia.textContent=this.textContent;

        this.textContent="";

        media.appendChild(img);
        media.appendChild(mediaBody);
        mediaBody.appendChild(mediaHead);
        mediaBody.appendChild(textMedia);

        this.appendChild(media);
      
        

    }
}
customElements.define('b-media-list',BMediaList);