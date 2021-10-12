import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-poshta-city',
  templateUrl: './nova-poshta-city.component.html',
  styleUrls: ['./nova-poshta-city.component.css']
})
export class NovaPoshtaCityComponent implements OnInit {

  itemsCity = [];

  constructor() { }

  ngOnInit(): void {
    fetch(
      "https://api.novaposhta.ua/v2.0/json/",
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "apiKey": "3c81d19dc6c4375bc278f4c329fb03cb",
          "modelName": "Address",
          "calledMethod": "getCities",
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
        this.itemsCity = json.data;
      })
      .catch(err => {
        console.log(err);
        console.log(err);
      })
  }

}
