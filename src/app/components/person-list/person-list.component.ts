import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(): void {
    this.personService.getAllPeople().subscribe(
      (data: Person[]) => {
        this.people = data;
      },
      (error) => {
        console.error('Error fetching people:', error);
      }
    );
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id).subscribe(
      () => {
        this.fetchPeople(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }
}