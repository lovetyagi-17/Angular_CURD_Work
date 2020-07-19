import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkService {
  configUrl = 'assets/config.json'



// user call
getUsers(): Observable<any>{
  return this.http.get('http://localhost:3000/api/users_all')
}

registerUser(data: any): Observable<any>{
 console.log(data)
  return this.http.post<any>('http://localhost:3000/api/auth/register',data)
}

deleteUser(_id: any): Observable<any>{
  console.log(_id)
  return this.http.delete('http://localhost:3000/api/'+_id)
}



//user call
delprod(_id:any):Observable<any>{
  return this.http.delete('http://localhost:3000/api/products/'+_id);
}

// updateProducts(_id:any) : Observable<any>{
//   console.log(data)
//   return this.http.put('http://localhost:3000/api/products/'+_id);
// }

//product call
getProducts(): Observable<any>{
  return this.http.get('http://localhost:3000/api/all/products')
}

registerProducts(data: any): Observable<any>{
  return this.http.post<any>('http://localhost:3000/api/products',data)
}


//product call
  constructor(private http: HttpClient) { }
}
