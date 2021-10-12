import {Component} from "@angular/core";

@Component({
  selector: 'some-tag',
  template: `
    <div>
      <h1>Hello World</h1>
      <h2 class="mx-lg-5">Nova-Poshta</h2>
      <div class="row">
        <div class="col-3">
          <app-nova-poshta></app-nova-poshta>
        </div>
        <div class="col-3">
          <app-nova-poshta-city></app-nova-poshta-city>
        </div>
      </div>
    </div>`
})

export class myComponent {
  name = ``;
}
