import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Photo } from "./photo.interface";

const API = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private http: HttpClient) {   
    }

    listFromUser(userName: string = 'flavio'): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${API}${userName}/photos`);
    }
}