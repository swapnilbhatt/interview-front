class ProfileCard extends HTMLElement {
    toggle = false;
    profile;

    constructor() {
        super();
        this.profile = JSON.parse(this.getAttribute('profile'));
        console.log(this.getAttribute('profile'));
        const container = document.createElement('div');
        container.innerHTML = `
                 <div class="profile-card">
                    <img id="profile-pic" src="./profile-card/img/${this.profile.profilePic}" alt="${this.profile.name}" class="profile-pic">
                    <div class="details">
                            <div class="name-container">
                                <h1 id="name" class="name">${this.profile.name}</h1>
                                <div class="toggle">
                                    <img src="profile-card/img/angle-small-down.png" id="toggle" class="arrow-down"
                                      alt="expand" />
                                </div>
                            </div>
                            <div id="details" class="details hide-details">
                                <div class="title">${this.profile.title}</div>
                                <div class="social-container">
                                    <a href="${this.profile.contact.twitter}" target="_blank">
                                        <img src="./profile-card/img/twitter.png" alt="Twitter" class="social"/>
                                    </a>
                                    <a href="${this.profile.contact.linkedin}" target="_blank">
                                        <img src="./profile-card/img/linkedin.png" alt="linkedin" class="social" />
                                    </a>
                                    <a href="${this.profile.contact.fb}" target="_blank">
                                        <img src="./profile-card/img/facebook.png" alt="facebook" class="social" />
                                    </a>
                                </div>
                            </div>
                    </div>
                 </div>
        `;

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '../profile-card/profileCard.css');

        this.shadow = this.attachShadow({mode: 'open'});

        // Attach the created elements to the shadow dom
        this.shadow.appendChild(linkElem);

        //  shadow.appendChild(fontAwe);
        this.shadow.appendChild(container);

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    connectedCallback() {
        const toggleEle = this.shadowRoot.getElementById('toggle');
        toggleEle.addEventListener('click', this.toggleDetails, false);
    }

    toggleDetails() {
        this.toggle = !this.toggle;
        const details = this.shadowRoot.getElementById('details');
        const toggle = this.shadowRoot.getElementById('toggle');

        if (this.toggle) {
            details.classList.remove('hide-details');
            details.classList.add('show-details');

            toggle.classList.add('profile-pic-rotate');
        } else {
            details.classList.add('hide-details');
            details.classList.remove('show-details');

            toggle.classList.remove('profile-pic-rotate');
        }
    }
}

customElements.define('profile-card', ProfileCard);