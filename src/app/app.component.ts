import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt1';

  Tekst = 'Tekst';
  Data = new Date();
}


var arr=[];

class Liczby {
    constructor(
        public a: number,
        public b: number
    ) { }
}
class Tekst {
    constructor(public tekst: string, public x) {
        console.log(x + tekst);
   }
Tekst_do_konsoli(tekst) {
    console.log(tekst);
}
Alert(tekst: string): void {
    window.alert(tekst);
}
Tekst_na_strone(tekst) {
    document.write(tekst);
}
TworzTabele(dlugosc) {
    console.log(arr);
    for (let i = 0; i < dlugosc; i++) {
        arr.push(i);
        this.Tekst_na_strone("<p>arr["+i+"]="+arr[i]+"</p>");
    }
}

    Licz: Array<Liczby> = [];

TworzLiczby(dlugosc, razy) {
    for (let i = 0; i < dlugosc; i++) {
        this.Licz.push(new Liczby(i, i * razy));
        this.Tekst_na_strone("<p>Licz["+i+"]="+this.Licz[i].a+", "+this.Licz[i].b+"</p>");
    }
}
    Konweruj(typ) {
// typ=1 łączy dwie liczny w kolnejności ab
// typ=2 łączy dwie liczny w kolnejności ba
// domyślnie (np.typ="lol") wypisuje {wartosć a}*x={wartość b}
    var tpl;
        switch (typ) {
            case 1:
                for (let i = 0; i < this.Licz.length; i++) {
                    tpl = `${this.Licz[i].a}${this.Licz[i].b}`;
                    this.Tekst_na_strone("<p>" + tpl + "</p>");
                }
            break;
            case 2:
                for (let i = 0; i < this.Licz.length; i++) {
                    tpl = `${this.Licz[i].b}${this.Licz[i].a}`;
                    this.Tekst_na_strone("<p>" + tpl + "</p>");
                }
            break;
            default:
                for (let i = 0; i < this.Licz.length; i++) {
                    tpl = `${this.Licz[i].a}*x=${this.Licz[i].b}`;
                    this.Tekst_na_strone("<p>" + tpl + "</p>");
                }
    }
    }
}