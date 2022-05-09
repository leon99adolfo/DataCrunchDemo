import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    // variables
    private _componentRegistry: Map<string, any> = new Map<string, any>();

    // Constructor
    constructor()
    {
    }

    // Methods 

    /**
     * Register navigation component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: any): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister navigation component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get navigation component from the registry
     *
     * @param name
     */
    getComponent(name: string): any
    {
        return this._componentRegistry.get(name);
    }
}
