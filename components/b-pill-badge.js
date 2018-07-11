import {Generator} from '../dist/nerdcreator';

export class BPillBadge extends Generator{

    create(){
      
        const span=document.createElement('span');

        switch (this.getProps('type')) {
            case 'primary':
                span.classList.add('badge','badge-pill','badge-primary')
                break;
            case 'secondary':
                span.classList.add('badge','badge-pill','badge-secondary')
                break;
            case 'success':
                span.classList.add('badge','badge-pill','badge-success')
                break;
            case 'danger':
                span.classList.add('badge','badge-pill','badge-danger')
                break;
            case 'warning':
                span.classList.add('badge','badge-pill','badge-warning')
                break;
            case 'info':
                span.classList.add('badge','badge-pill','badge-info')
                break;
            case 'light':
                span.classList.add('badge','badge-pill','badge-light')
                break;
            case 'dark':
                span.classList.add('badge','badge-pill','badge-dark')
                break;
            case 'undefined':
                span.classList.add('badge','badge-pill','badge-primary')
                break;
        
            default:
            span.classList.add('badge','badge-pill','badge-primary')
                break;
        }
       

        span.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(span);

    }
}

customElements.define('b-pill-badge',BPillBadge);