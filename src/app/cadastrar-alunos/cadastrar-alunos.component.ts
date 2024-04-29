import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';


@Component({
  selector: 'app-cadastrar-alunos',
  templateUrl: './cadastrar-alunos.component.html',
  styleUrl: './cadastrar-alunos.component.css'
})
export class CadastrarAlunosComponent implements OnInit {
 students: Student[] = [];

 formGroupStudent : FormGroup;

 constructor(private formBuilder: FormBuilder, private service: AlunoService){
  this.formGroupStudent = formBuilder.group({
    id : [''],
    name : [''],
    course : ['']
});
 }
  ngOnInit(): void {
    this.loadstudents();
  }
  loadstudents(){
 this.service.getStudents().subscribe({
  next: data => this.students = data
 });
}

 save(){
  this.service.save(this.formGroupStudent.value).subscribe({
    next: data => this.students.push(data)
  })
 }
}
