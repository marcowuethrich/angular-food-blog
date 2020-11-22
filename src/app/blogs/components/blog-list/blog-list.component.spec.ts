import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogListComponent} from './blog-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {FoodBlogService} from '../../services/food-blog.service';

describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;
  let serviceStub: any;

  beforeEach(async () => {

    serviceStub = {
      fetch: () => of(
        [
          {
            title: 'Food blog entry 1',
            subTitle: 'blakdjfaksdflkasjdfkasjd fask fdjaskdf. asdfjaslf ',
            author: 'Marco Wuethrich',
            content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
            imageURL: 'https://picsum.photos/200/300',
            created: '2020-11-11',
            updated: '22/11/2020',
            id: '46298cd9-1ed4-40e5-8dd3-29da5b86c3bb',
            active: false
          },
          {
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
        ]
      ),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BlogListComponent],
      providers: [{provide: FoodBlogService, useValue: serviceStub}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load food blog entries', () => {
    expect(component.blogs.length).toBe(2);
  });
});
