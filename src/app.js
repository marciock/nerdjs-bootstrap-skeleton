import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import BContainer  from '../components/b-container';
import BRow from '../components/b-row';
import BCol from '../components/b-col';


export class Apps extends Creator{

  
  render(){
    
  
    return (
      `<div>
        <b-container>
          <b-row>
            <b-col>
            <h1>teste</h1>
            </b-col>
            <b-col>
            <h1>teste</h1>
            </b-col>
          </b-row>
        </b-container>
        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  