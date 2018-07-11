import {Generator} from '../dist/nerdcreator';


export class BButtonOutline extends Generator{

    create(){

        const button=document.createElement('button');

        switch (this.getProps('type')) {
            case 'primary':
                button.classList.add('btn','btn-outline-primary')
                break;
            case 'secondary':
                button.classList.add('btn','btn-outline-secondary')
                break;
            case 'success':
                button.classList.add('btn','btn-outline-success')
                break;
            case 'danger':
                button.classList.add('btn','btn-outline-danger')
                break;
            case 'warning':
                button.classList.add('btn','btn-outline-warning')
                break;
            case 'info':
                button.classList.add('btn','btn-outline-info')
                break;
            case 'light':
                button.classList.add('btn','btn-outline-light')
                break;
            case 'dark':
                button.classList.add('btn','btn-outline-dark')
                break;
             
            case 'undefined':
                button.classList.add('btn','btn-outline-primary')
                break;
        
            default:
            button.classList.add('btn','btn-outline-primary')
                break;
        }

        button.type="button";

        button.innerHTML=this.innerHTML;
        this.innerHTML=null;

        this.appendChild(button);
    }
}
customElements.define('b-btn-otl',BButtonOutline);