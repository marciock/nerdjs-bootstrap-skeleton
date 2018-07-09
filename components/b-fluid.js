import {Creator} from '../dist/nerdcreator';

export class BFluid extends Creator{

    render(){
        return(
            `<div class="container-fluid">
                ${
                    this.innerHTML
                }
             </div>
            `
        )
    }
}

customElements.define('b-fluid',BFluid);