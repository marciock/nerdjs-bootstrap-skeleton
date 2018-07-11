import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import BContainer  from '../components/b-container';
import BButtonOutline from '../components/b-button-outline';
import BRow from '../components/b-row';

export class Apps extends Creator{

  
  render(){
    
  
    return (
      `<div>
        <style> img{
          width:10%;
          height:10%;
        }
        </style>
        <b-container>
          
           <b-btn-otl type="danger">TEste</b-btn-otl>
         
        </b-container>
        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  