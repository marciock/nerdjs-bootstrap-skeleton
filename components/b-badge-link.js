import {Generator} from '../dist/nerdcreator';

export class BBadgeLink extends Generator{

    create(){
      
        const a=document.createElement('a');

        switch (this.getProps('type')) {
            case 'primary':
                a.classList.add('badge','badge-primary')
                break;
            case 'secondary':
                a.classList.add('badge','badge-secondary')
                break;
            case 'success':
                a.classList.add('badge','badge-success')
                break;
            case 'danger':
                a.classList.add('badge','badge-danger')
                break;
            case 'warning':
                a.classList.add('badge','badge-warning')
                break;
            case 'info':
                a.classList.add('badge','badge-info')
                break;
            case 'light':
                a.classList.add('badge','badge-light')
                break;
            case 'dark':
                a.classList.add('badge','badge-dark')
                break;
            case 'undefined':
                a.classList.add('badge','badge-primary')
                break;
        
            default:
            a.classList.add('badge','badge-primary')
                break;
        }
       
        a.href=this.getProps('href');
        a.innerHTML=this.innerHTML;
        this.innerHTML=null;
        
        this.appendChild(a);

    }
}

customElements.define('b-badge-link',BBadgeLink);