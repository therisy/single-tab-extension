import _ from 'lodash';
import {createCustomTab, getTabs} from './background';

document.addEventListener('DOMContentLoaded', async () => {
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', createCustomTab);
    }

    const totalTabElement = document.getElementById('totalTab');
    if (totalTabElement) {
        const tabs = await getTabs();
        totalTabElement.innerText = _.size(tabs).toString();
    }
});
