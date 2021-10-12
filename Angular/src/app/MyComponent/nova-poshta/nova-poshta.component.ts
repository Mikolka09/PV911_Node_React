import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nova-poshta',
  templateUrl: './nova-poshta.component.html',
  styleUrls: ['./nova-poshta.component.css']
})
export class NovaPoshtaComponent implements OnInit {

  itemsReg = [];

  constructor() {
  }

  ngOnInit(): void {
    fetch(
      "https://api.novaposhta.ua/v2.0/json/",
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "apiKey": "3c81d19dc6c4375bc278f4c329fb03cb",
          "modelName": "Address",
          "calledMethod": "getAreas",
          "methodProperties": {
          },
        })
      }
    )
      .then(response => {
        if (response.status !== 200) {
          console.log(response.status);
          console.log(response.statusText);
          console.log("error");
        }
        return response.json();
      })
      .then(json => {
        if (!json['success']) {
          console.log("Error: ");
          return;
        }
        console.log(json.data);
        this.itemsReg = json.data;
      })
      .catch(err => {
        console.log(err);
        console.log(err);
      })
  }



}
