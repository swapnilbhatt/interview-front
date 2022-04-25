class ProfileCard extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('profile-card');
        const templateContent = template.content;

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '../profile-card/profileCard.css');

        const shadow = this.attachShadow({mode: 'open'});

        // Attach the created elements to the shadow dom
        shadow.appendChild(linkElem);

        //  shadow.appendChild(fontAwe);
        shadow.appendChild(
            templateContent.cloneNode(true)
        );
    }
}

customElements.define('profile-card', ProfileCard);

