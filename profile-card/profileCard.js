class ProfileCard extends HTMLElement {
    toggle = false;

    constructor() {
        super();

        const template = document.getElementById('profile-card');
        const templateContent = template.content;

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '../profile-card/profileCard.css');

        this.shadow = this.attachShadow({mode: 'open'});

        // Attach the created elements to the shadow dom
        this.shadow.appendChild(linkElem);

        //  shadow.appendChild(fontAwe);
        this.shadow.appendChild(
            templateContent.cloneNode(true)
        );

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    connectedCallback() {
        const toggleEle = this.shadowRoot.getElementById('toggle');
        toggleEle.addEventListener('click', this.toggleDetails, false);
    }

    toggleDetails(e){
        this.toggle = !this.toggle;
        const details = this.shadowRoot.getElementById('details');

        if(this.toggle){
            details.classList.remove('hide-details');
            details.classList.add('show-details');
        }
        else{
            details.classList.add('hide-details');
            details.classList.remove('show-details');
        }
    }
}

customElements.define('profile-card', ProfileCard);