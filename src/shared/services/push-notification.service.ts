import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  pushNotifications: string[] = [];
  constructor() { }

  showNotification$ = new Subject<string>();

  // Push new Toasts to array with content and options
  show(pushNotification: string) {
    this.pushNotifications.push(pushNotification);
  }

   // Callback method to remove Toast DOM element from view
   remove(toast) {
    this.pushNotifications = this.pushNotifications.filter(t => t !== toast);
  }
}
