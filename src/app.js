import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import BContainer  from '../components/b-container';

import BRow from '../components/b-row';
import BCardImage from '../components/b-card-image';

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
          
        <b-card-img src="./img/img1.jpg" alt="teste">
        Some quick example text to build on the card title and make up the bulk of the card's conten
        </b-card-img>
         
        </b-container>
        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  