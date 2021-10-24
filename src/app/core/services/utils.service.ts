import { Router } from "@angular/router";

export function getUrlParams(router: Router) {
  let params = {};
  let route = !!router.routerState.snapshot.root ? router.routerState.snapshot.root : null;
  do {
    Object.assign(params, route?.params);
    route = !!route?.firstChild ? route?.firstChild : null;
  } while (route);
  return params;
}