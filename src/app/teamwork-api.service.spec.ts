import { TestBed, inject } from '@angular/core/testing';
import { TeamworkApiService } from './teamwork-api.service';

describe('TeamworkApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamworkApiService]
    });
  });

  it('should ...', inject([TeamworkApiService], (service: TeamworkApiService) => {
    expect(service).toBeTruthy();
  }));
});
