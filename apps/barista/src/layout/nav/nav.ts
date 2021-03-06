/**
 * @license
 * Copyright 2019 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaLocationService } from '../../shared/location.service';
import { map, distinctUntilChanged, shareReplay } from 'rxjs/operators';

const CONTENT_PATH_PREFIX = 'data/';

@Component({
  selector: 'ba-nav',
  templateUrl: 'nav.html',
  styleUrls: ['nav.scss'],
  host: {
    class: 'ba-nav',
  },
})
export class BaNav {
  /** Data needed to render the navigation. */
  _navData$: Observable<any>;

  /** @internal the current root url */
  _pathRoot$ = this._locationService.currentPath$.pipe(
    map(path => this._getUrlRootPath(path)),
    distinctUntilChanged(),
    shareReplay(),
  );

  constructor(http: HttpClient, private _locationService: BaLocationService) {
    const requestPath = `${environment.dataHost}${CONTENT_PATH_PREFIX}nav.json`;
    this._navData$ = http.get(requestPath, { responseType: 'json' });
  }

  /** @internal returns the root url of the given path */
  _getUrlRootPath(url: string): string {
    const path = url.length && url[0] === '/' ? url.slice(1) : url;
    const parts = path.split('/');
    return parts.length ? parts[0] : '';
  }
}
