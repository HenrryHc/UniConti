import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './Componentes/main/main';
import { Aside } from './Componentes/aside/aside';
import { Footer } from './Componentes/footer/footer';
import { Header } from './Componentes/header/header';

@Component({
  imports: [RouterOutlet, Main, Aside, Footer,Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('UniConti');
}
