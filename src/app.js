import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import BContainer  from '../components/b-container';

import BRow from '../components/b-row';

import {BButtom} from '../components/b-buttons';

export class Apps extends Creator{

  
  render(){
    
  
    return (
      `
        <b-container>
          
        
        <b-btn type="warning">Tapita</b-btn>
         
        </b-container>
        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  