import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Dashboard } from './pages/dashboard/dashboard';
import { NameEditor } from './components/name-editor/name-editor';
import { ProfileEditor } from './components/profile-editor/profile-editor';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Header, Dashboard, NameEditor, ProfileEditor, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
