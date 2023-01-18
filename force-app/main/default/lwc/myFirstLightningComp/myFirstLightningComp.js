import { LightningElement, track } from 'lwc';

export default class MyFirstLightningComp extends LightningElement {

    @track titleVaule = document.getElementById('test-track');
}