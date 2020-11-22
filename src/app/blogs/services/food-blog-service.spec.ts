import {TestBed} from '@angular/core/testing';

import {FoodBlogService} from './food-blog.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FoodBlogService', () => {
  let service: FoodBlogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
