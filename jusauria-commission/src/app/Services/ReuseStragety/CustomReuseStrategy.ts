import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  private routeCache = new Map<string|undefined, DetachedRouteHandle>();

  // Determine if a route should be stored
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(route.routeConfig?.path)
    return true; // Always store the route
  }

  // Store the detached route
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.log("store"+ route.routeConfig?.path)
    this.routeCache.set(route.routeConfig?.path, handle);
  }

  // Determine if a route should be reattached
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log("shouldAttach"+ route.routeConfig?.path)
    return this.routeCache.has(route.routeConfig?.path);
  }

  // Retrieve the previously stored route
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.log("retrieve"+ route.routeConfig?.path)
    return this.routeCache.get(route.routeConfig?.path) || null;
  }

  // Determine if a route should be reused
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log("shouldReuseRoute"+ curr.routeConfig?.path)
    return future.routeConfig === curr.routeConfig; // Reuse if the route configs are the same
  }
}
