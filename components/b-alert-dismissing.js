import {Generator} from '../dist/nerdcreator';


export class BAlertDismissing extends Generator{

    create(){
        const div=document.createElement('div');
        
        const button=document.createElement('button');



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


       let title=`<strong>${this.getProps('title')}</strong> ${this.textContent}`;
       button.type='button';
       button.setAttribute('data-dismiss','alert');
       button.setAttribute('aria-label','Close');
        button.classList.add('close');

        button.innerHTML=`<span aria-hidden="true">&times;</span>`;
        

        div.innerHTML=title;
        div.appendChild(button);

        this.innerHTML=null;

        this.appendChild(div);

    }
}
customElements.define('b-alert-d',BAlertDismissing);