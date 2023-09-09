import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyExampleComponent } from './formly-example.component';

describe('FormlyExampleComponent', () => {
  let component: FormlyExampleComponent;
  let fixture: ComponentFixture<FormlyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormlyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
