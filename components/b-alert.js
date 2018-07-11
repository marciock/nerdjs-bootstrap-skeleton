import {Generator} from '../dist/nerdcreator';


export class BAlert extends Generator{

    create(){
        const div=document.createElement('div');

        div.role='alert';
        
        switch (this.getProps('type')) {
            case 'primary':
                div.classList.add('alert','alert-primary')
                break;
            case 'secondary':
                div.classList.add('alert','alert-secondary')
                break;
            case 'success':
                div.classList.add('alert','alert-success')
                break;
            case 'danger':
                div.classList.add('alert','alert-danger')
                break;
            case 'warning':
                div.classList.add('alert','alert-warning')
                break;
            case 'info':
                div.classList.add('alert','alert-info')
                break;
            case 'light':
                div.classList.add('alert','alert-light')
                break;
            case 'dark':
                div.classList.add('alert','alert-dark')
                break;
            case 'undefined':
                div.classList.add('alert','alert-primary')
                break;
        
            default:
            div.classList.add('alert','alert-primary')
                break;
        }

        div.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(div);

    }
}
customElements.define('b-alert',BAlert);