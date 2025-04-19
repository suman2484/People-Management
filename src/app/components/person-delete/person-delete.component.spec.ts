import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonDeleteComponent } from './person-delete.component';
import { PersonService } from '../../services/person.service';
import { of } from 'rxjs';

describe('PersonDeleteComponent', () => {
  let component: PersonDeleteComponent;
  let fixture: ComponentFixture<PersonDeleteComponent>;
  let personService: jasmine.SpyObj<PersonService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PersonService', ['deletePerson']);

    await TestBed.configureTestingModule({
      declarations: [ PersonDeleteComponent ],
      providers: [
        { provide: PersonService, useValue: spy }
      ]
    })
    .compileComponents();
    
    personService = TestBed.inject(PersonService) as jasmine.SpyObj<PersonService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deletePerson on confirmDelete', () => {
    const personId = 1;
    component.personId = personId;
    personService.deletePerson.and.returnValue(of({}));

    component.confirmDelete();

    expect(personService.deletePerson).toHaveBeenCalledWith(personId);
  });
});