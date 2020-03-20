import {makeRequest} from "./authHelpers.js";
import {Auth} from "./auth.js";

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

const auth = new Auth();

let submit = document.getElementById('submitButton');
submit.addEventListener('click', auth.login);
