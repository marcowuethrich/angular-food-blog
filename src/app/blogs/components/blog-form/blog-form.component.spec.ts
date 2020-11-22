import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogFormComponent} from './blog-form.component';
import {ActivatedRoute, Data, Params, Router, RouterEvent} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ReplaySubject} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BlogFormComponent', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;

  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  const eventSubject = new ReplaySubject<RouterEvent>(1);
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject.asObservable(),
    url: 'test/url'
  };

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BlogFormComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                company: 'COMPANY',
              }),
            },
            params: {
              subscribe: (fn: (value: Params) => void) => fn({
                tab: 0,
              }),
            },
            snapshot: {}
          }
        },
        {provide: Router, useValue: routerMock},
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
