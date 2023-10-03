class AvatarElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    margin: 20px;
                    border-radius: 50%;
                    width: 150px;
                    height: 150px;
                    background-color: ${this.getRandomColor()};
                    color: #fff;
                    font-size: 24px;
                    display: flex;
                    justify-content: center; 
                    align-items: center; 
                }
            </style>
            ${this.initials}
        `;
    }

    getRandomColor() {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    set name(value) {
        this._name = value;
        this.initials = this.getInitials(value);
        this.render();
    }

    get name() {
        return this._name;
    }

    getInitials(name) {
        const parts = name.split(' ');
        if (parts.length === 2) {
            return parts[0][0] + parts[1][0];
        } else if (parts.length === 1) {
            return parts[0][0];
        } else {
            return '';
        }
    }
}

customElements.define('avatar-element', AvatarElement);


const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const avatarElement = document.querySelector('avatar-element');
        avatarElement.name = nameInput.value;
    }
});









