import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {  SignUpInfo} from '../../models/user/signup-info';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UserService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';

  dataChange: BehaviorSubject<SignUpInfo[]> = new BehaviorSubject<SignUpInfo[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): SignUpInfo[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllUsers(): void {
    this.httpClient.get<SignUpInfo[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addUser (user: SignUpInfo): void {
    this.dialogData = user;
  }

  updateUser ( user: SignUpInfo): void {
    this.dialogData = user;
  }

  deleteUser (id: number): void {
    console.log(id);
  }
}
