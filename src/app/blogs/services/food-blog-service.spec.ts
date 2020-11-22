import {TestBed} from '@angular/core/testing';

import {FoodBlogService} from './food-blog.service';

describe('FoodBlogServiceService', () => {
  let service: FoodBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
