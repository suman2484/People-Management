import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonListComponent } from './person-list.component';
import { PersonService } from '../../services/person.service';
import { of } from 'rxjs';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;
  let personService: jasmine.SpyObj<PersonService>;

  beforeEach(() => {
    const personServiceSpy = jasmine.createSpyObj('PersonService', ['getAllPeople']);
    
    TestBed.configureTestingModule({
      declarations: [ PersonListComponent ],
      providers: [
        { provide: PersonService, useValue: personServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService) as jasmine.SpyObj<PersonService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch people on init', () => {
    const mockPeople = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    personService.getAllPeople.and.returnValue(of(mockPeople));

    component.ngOnInit();

    expect(personService.getAllPeople).toHaveBeenCalled();
    expect(component.people).toEqual(mockPeople);
  });
});