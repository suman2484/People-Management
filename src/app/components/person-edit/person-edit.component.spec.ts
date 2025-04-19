import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PersonEditComponent } from './person-edit.component';
import { PersonService } from '../../services/person.service';
import { of } from 'rxjs';

describe('PersonEditComponent', () => {
  let component: PersonEditComponent;
  let fixture: ComponentFixture<PersonEditComponent>;
  let personService: jasmine.SpyObj<PersonService>;

  beforeEach(() => {
    const personServiceSpy = jasmine.createSpyObj('PersonService', ['getPersonById', 'updatePerson']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PersonEditComponent],
      providers: [{ provide: PersonService, useValue: personServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService) as jasmine.SpyObj<PersonService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch person details on init', () => {
    const mockPerson = { id: 1, name: 'John Doe', age: 30 };
    personService.getPersonById.and.returnValue(of(mockPerson));

    component.ngOnInit();

    expect(personService.getPersonById).toHaveBeenCalledWith(1);
    expect(component.person).toEqual(mockPerson);
  });

  it('should update person details', () => {
    const mockPerson = { id: 1, name: 'John Doe', age: 30 };
    component.person = mockPerson;
    personService.updatePerson.and.returnValue(of(mockPerson));

    component.save();

    expect(personService.updatePerson).toHaveBeenCalledWith(mockPerson);
  });
});