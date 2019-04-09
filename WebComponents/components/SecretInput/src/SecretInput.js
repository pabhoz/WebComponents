//SecretInput.js
class SecretInput extends HTMLElement {

    constructor() {
        super();//Constructor del padre
        this._shadow = this.attachShadow({ mode: 'open' });
        this._masked = true;
        this._color = "#000";
    }

    get shadow() {
        return this._shadow;
    }

    set shadow(val) {
        this._shadow = val;
    }

    get masked() {
        return this._masked;
    }

    set masked(val) {
        this._masked = val;
    }
    
    get color() {
        return this._color;
    }

    set color(val) {
        this._color = val;
    }

    static get observedAttributes() {
        return ['masked', 'color'];
    }

    /**
     * attributeChangedCallback
     * 
     * Se ejecuta cuando el valor de cualquier atributo declarado dentro del arreglo de los 
     * observedAttributes cambia.
     * 
     * @param {string} name nombre del atributo que cambia
     * @param {mixed} oldVal valor anterior del atributo
     * @param {mixed} newValue nuevo valor del atributo
     */
    attributeChangedCallback(name, oldVal, newValue) {
        this[`update${name.charAt(0).toUpperCase() + name.slice(1)}`](oldVal,newValue);
    }
    

    updateMasked(oldVal, newValue) {
        //Su lógica acá para mostrar o no el texto original
    }
    
    updateColor(oldVal, newValue) {
        var input = this.shadow.querySelector('.sinput');
        input.style.color = newValue;
    }

    connectedCallback() {
        var template = `
            <style>
                .sinput {
                    padding: 15px;
                    font-size: 120%;
                    border-radius: 5px;
                    width: 300px;
                }
            </style>
            <input class="sinput" placeholder="I'm not a secret input for sure"/>
        `;

        this.shadow.innerHTML = template;
    }

}