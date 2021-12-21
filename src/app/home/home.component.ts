import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  userCount = 0;
  userDataEndPoint = 'https://jsonplaceholder.typicode.com/users';
  selectedUserId = 0;
  selectedUser: User;
  closeResult = '';

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
    ) {
  }

  /**
   * On Init
   */
  ngOnInit(){
    this.fetchUserData();
  }

  /**
   * Fetches data from external end point
   */
   fetchUserData(){
    this.http.get(this.userDataEndPoint).subscribe((data: User[]) => {
      this.users = data;
      this.userCount = this.users.length;
    });
  }

  /**
   * Open popup when User Card is selected
   * {param} content -- content to show in modal
   * {param} user -- Selected User object
   */
  openModal(content, user: User) {
    this.selectedUser = this.users.filter((x) => x.id === user.id)[0];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  /**
   * Removes User when delete button clicked
   * {param} user -- Selected User object
   */
  deleteUser(id: number) {
    this.users = this.users.filter((x) => x.id !== id);
    this.userCount = this.users.length;
  }
}
