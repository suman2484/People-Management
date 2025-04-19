export class PersonDeleteComponent {
  personId: number;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    // Logic to get the person ID from route parameters can be added here
  }

  confirmDelete() {
    this.personService.deletePerson(this.personId).subscribe(() => {
      // Navigate back to the person list after deletion
      this.router.navigate(['/people']);
    });
  }
}