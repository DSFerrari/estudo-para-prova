import { Student } from './student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-alunos',
  templateUrl: './cadastrar-alunos.component.html',
  styleUrl: './cadastrar-alunos.component.css'
})
export class CadastrarAlunosComponent {
 students: Student[] = [];
}
