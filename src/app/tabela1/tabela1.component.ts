import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela1',
  template: '<p> Tabela1</p>',
  styles: ['p{color:red}']
})
export class Tabela1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
var templateMac= [[1, 2], [3, 4, 11], [5, 6]];
function Mac_na_strone(mac1) {
    document.write("<table border='1'>");
    for (let i = 0; i < mac1.length; i++) {
        let wiersz = mac1[i];
        document.write("<tr>");
        for (let j = 0; j < wiersz.length; j++){
            document.write("<td>"+ mac1[i][j] + "</td>");
        } document.write("</tr>");
    }
    document.write("</table>");
}
function SumaWierszy(mac1) {
    document.write("<p>");
    let sum = 0;
    for (let i = 0; i < mac1.length; i++) {
        let wiersz = mac1[i];
        for (let j = 0; j < wiersz.length; j++) {
           sum=sum+ mac1[i][j];
        }
        document.write("suma wiersza" + i + "=" + sum + "</br>");
        sum = 0;
    }
    document.write("</p>");
}
Mac_na_strone(templateMac);
SumaWierszy(templateMac);