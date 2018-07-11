import {Generator} from '../dist/nerdcreator';


export class BAlertHeading extends Generator{

    create(){
        const div=document.createElement('div');
        const h4=document.createElement('h4');
        const contentH=document.createElement('p');
        const contentF=document.createElement('p');
        const hr=document.createElement('hr');

        h4.classList.add('alert-heading');

        h4.textContent=this.getProps('head');

        contentH.innerHTML=this.innerHTML;

        this.innerHTML=null;

        contentF.textContent=this.getProps('foot');
        contentF.classList.add('mb-0');


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

        div.appendChild(h4);
        div.appendChild(contentH);
        div.appendChild(hr);
        div.appendChild(contentF);
        this.appendChild(div);

    }
}
customElements.define('b-alert-h',BAlertHeading);