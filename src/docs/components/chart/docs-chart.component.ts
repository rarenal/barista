import { Component, ViewChild } from '@angular/core';
import { DtChart, ViewportResizer, Colors } from '@dynatrace/angular-components';
import { ChartService } from './docs-chart.service';
import { Observable } from 'rxjs/Observable';
import { ChartDefaultExampleComponent } from './examples/chart-default-example.component';
import { ChartStreamExampleComponent } from './examples/chart-stream-example.component';
import { ChartThemingExampleComponent } from './examples/chart-theming-example.component';
import { ChartLoadingExampleComponent } from './examples/chart-loading-example.component';

@Component({
  moduleId: module.id,
  selector: 'docs-chart',
  templateUrl: './docs-chart.component.html',
})
export class DocsChartComponent {

  examples = {
    default: ChartDefaultExampleComponent,
    stream: ChartStreamExampleComponent,
    theming: ChartThemingExampleComponent,
    loading: ChartLoadingExampleComponent,
  };

}