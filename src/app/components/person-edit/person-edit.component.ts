import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  person: Person;
  personId: string;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id');
    this.getPersonDetails();
  }

  getPersonDetails() {
    this.personService.getPersonById(this.personId).subscribe(data => {
      this.person = data;
    });
  }

  savePerson() {
    this.personService.updatePerson(this.personId, this.person).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}