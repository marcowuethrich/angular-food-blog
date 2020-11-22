import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogComponent} from './blog.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.blog = {
      id: 'ebbc1371-bebe-410c-9df2-0b47528de54e',
      title: 'Food blog entry 3',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
      content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
      imageURL: 'https://picsum.photos/200/300',
      author: 'Franz Müller',
      created: '2020-11-14',
      updated: '2020-11-17',
      active: true
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show active badge', () => {
    expect(de.query(By.css('.badge')).nativeElement.innerText).toContain('Active');
  });
});
