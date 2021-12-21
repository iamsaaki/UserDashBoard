import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { mockUsers } from '../../shared/mocks';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  const userDataEndPoint = 'https://jsonplaceholder.typicode.com/users';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls api to fetch data', () => {
    const req = httpMock.expectOne(userDataEndPoint);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUsers);
  });

  it('delete User - positive case', () => {
    component.users = mockUsers;
    component.deleteUser(1);
    expect(component.users.length).toEqual(mockUsers.length - 1);
  });

  it('delete User - negative case', () => {
    component.users = mockUsers;
    component.deleteUser(2);
    expect(component.users.length).toEqual(mockUsers.length);
  });
});
