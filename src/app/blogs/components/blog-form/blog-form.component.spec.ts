import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogFormComponent} from './blog-form.component';
import {ActivatedRoute, convertToParamMap, Data, Params, Router, RouterEvent} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {of, ReplaySubject} from 'rxjs';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FoodBlogService} from '../../services/food-blog.service';
import {DebugElement} from '@angular/core';

describe('BlogFormComponent', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;
  let de: DebugElement;

  let spy: jasmine.Spy;
  let service: FoodBlogService;

  let activatedRouteSpy;

  const eventSubject = new ReplaySubject<RouterEvent>(1);
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject.asObservable(),
    url: 'test/url'
  };

  beforeEach(async () => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: 'ebbc1371-bebe-410c-9df2-0b47528de54e',
        })
      }
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BlogFormComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({}),
            },
            params: {
              subscribe: (fn: (value: Params) => void) => fn({
                id: 'ebbc1371-bebe-410c-9df2-0b47528de54e',
              }),
            },
            snapshot: {}
          }
        },
        {provide: Router, useValue: routerMock},
        {provide: FoodBlogService},
        FormBuilder
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    service = de.injector.get(FoodBlogService);

    spy = spyOn(service, 'fetchById').and.returnValue(of({
        id: 'ebbc1371-bebe-410c-9df2-0b47528de54e',
        title: 'Food blog entry 3',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
        content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
        imageURL: 'https://picsum.photos/200/300',
        author: 'Franz Müller',
        created: '2020-11-14',
        updated: '2020-11-17',
        active: true
      }
    ));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call api for fetching blog by id', () => {
    expect(spy).toHaveBeenCalledWith('ebbc1371-bebe-410c-9df2-0b47528de54e');
    expect(spy.calls.all().length).toEqual(1);
  });
});
