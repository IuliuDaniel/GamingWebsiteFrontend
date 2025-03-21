import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable
({
    providedIn: 'root',
})

export class ApiService
{
    constructor(private http: HttpClient) {} 

    private apiUrl = "https://gamingwebsitebeproject.azurewebsites.net/api/";
    getData<T>(apiEndpoint: string): Observable<T>
    {
        return this.http.get<T>(this.apiUrl + apiEndpoint);
    }
}