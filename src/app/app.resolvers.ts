import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { InitialData } from './app.types';
import { LayoutNavigationItem } from './layout/navigation/navigation.types';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any>
{
    defaultNavigation: LayoutNavigationItem[] = [
        {
            id: 'overview',
            title: 'Overview',
            type: 'basic',
            icon: 'home',
            link: '/overview'
        },
        {
            id: 'estimators',
            title: 'Estimators',
            type: 'basic',
            icon: 'person',
            link: '/estimators'
        },
        {
            id: 'marketing',
            title: 'Marketing',
            type: 'basic',
            icon: 'lightbulb',
            link: '/marketing'
        },
        {
            id: 'financial',
            title: 'Financial',
            type: 'basic',
            icon: 'paid',
            link: '/financial'
        }
    ];

    // Constructor
    constructor()
    {
    }

    // resolver
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InitialData>
    {
        const objInitialData: InitialData = {
            navigation: this.defaultNavigation
        }
        return of(objInitialData);
    }
}
