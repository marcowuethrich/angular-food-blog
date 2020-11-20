import {Component, OnInit} from '@angular/core';
import {Blog} from '../../model/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [
    {
      id: '46298cd9-1ed4-40e5-8dd3-29da5b86c3bb',
      title: 'Food blog entry 1',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
      content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
      imageURL: 'https://picsum.photos/200/300',
      author: 'Marco Wuethrich',
      created: new Date(Date.now()).toLocaleDateString(),
      updated: new Date(Date.now()).toLocaleDateString(),
      inactive: false
    }, {
      id: '42b5a050-42dc-4112-9520-e477e6fc7398',
      title: 'Food blog entry 2',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
      content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
      imageURL: 'https://picsum.photos/200/300',
      author: 'Max Foobar',
      created: new Date(Date.now()).toLocaleDateString(),
      updated: new Date(Date.now()).toLocaleDateString(),
      inactive: false
    }, {
      id: 'ebbc1371-bebe-410c-9df2-0b47528de54e',
      title: 'Food blog entry 3',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
      content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
      imageURL: 'https://picsum.photos/200/300',
      author: 'Franz Müller',
      created: new Date(Date.now()).toLocaleDateString(),
      updated: new Date(Date.now()).toLocaleDateString(),
      inactive: false
    }, {
      id: '662682b7-5d8f-45bf-9ad6-ef629f9c7651',
      title: 'Food blog entry 4',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
      content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
      imageURL: 'https://picsum.photos/200/300',
      author: 'Hegword Einstein',
      created: new Date(Date.now()).toLocaleDateString(),
      updated: new Date(Date.now()).toLocaleDateString(),
      inactive: false
    }, {
      id: '8e95e589-0010-4b60-b3d6-0c2a8467fc39',
      title: 'Food blog entry 5',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur cupiditate doloremque impedit iste odio',
      content: '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis doloribus ducimus enim fugit, laboriosam laborum laudantium magni natus nihil nobis nostrum officia, quidem reiciendis repellendus repudiandae, soluta ullam voluptatum.</div><div>Aliquam architecto asperiores aspernatur aut commodi corporis cupiditate delectus est fugit incidunt magnam nemo nisi obcaecati, officiis, perferendis quae quod quos suscipit, ullam vero? Consequuntur est hic repudiandae totam voluptate!</div><div>Consequatur corporis esse facilis impedit molestiae porro praesentium? Consectetur eveniet facere fuga neque omnis optio, voluptatum? Accusantium, dolore eveniet illum laborum magni odio qui sapiente sequi sit. Eveniet iste, voluptatibus?</div><div>A dicta eos fuga illum in laudantium minus officia perferendis praesentium, rerum sequi tenetur vel. Dignissimos, neque quis. Accusamus distinctio dolor facilis harum nam officia optio quam sint tempora voluptate.</div><div>Accusantium animi corporis dolore ipsa minus, ratione sapiente tempora! Alias amet beatae dignissimos dolor dolorem dolores doloribus dolorum, eos fugiat id, iusto molestias necessitatibus odit officiis porro praesentium quia veniam.</div>',
      imageURL: 'https://picsum.photos/200/300',
      author: 'Peter Rauder',
      created: new Date(Date.now()).toLocaleDateString(),
      updated: new Date(Date.now()).toLocaleDateString(),
      inactive: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
