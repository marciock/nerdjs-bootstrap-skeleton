import {Generator} from '../dist/nerdcreator';

export class BBadge extends Generator{

    create(){
      
        const span=document.createElement('span');

        switch (this.getProps('type')) {
            case 'primary':
                span.classList.add('badge','badge-primary')
                break;
            case 'secondary':
                span.classList.add('badge','badge-secondary')
                break;
            case 'success':
                span.classList.add('badge','badge-success')
                break;
            case 'danger':
                span.classList.add('badge','badge-danger')
                break;
            case 'warning':
                span.classList.add('badge','badge-warning')
                break;
            case 'info':
                span.classList.add('badge','badge-info')
                break;
            case 'light':
                span.classList.add('badge','badge-light')
                break;
            case 'dark':
                span.classList.add('badge','badge-dark')
                break;
            case 'undefined':
                span.classList.add('badge','badge-primary')
                break;
        
            default:
            span.classList.add('badge','badge-primary')
                break;
        }
       

        span.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(span);

    }
}

customElements.define('b-badge',BBadge);