import { Component, Input } from '@angular/core';

@Component({
    selector: 'v-message',
    template: `
    <small
        class="text-danger d-block mt-2">
        ${this.text}
    </small>`
})
export class VMessageComponent {
    @Input() text: string;

    constructor() {

    }
}