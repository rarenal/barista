import { Component } from '@angular/core';

@Component({
  selector: 'docs-app',
  styleUrls: ['docs.component.scss'],
  templateUrl: 'docs.component.html',
})
export class Docs {
  navItems = [
    {name: 'Start', route: '/'},
    {name: 'Button', route: '/button'},
    {name: 'Button Group', route: '/button-group'},
    {name: 'Card', route: '/card'},
    {name: 'Chart', route: '/chart'},
    {name: 'Context dialog', route: '/context-dialog'},
    {name: 'Expandable panel', route: '/expandable-panel'},
    {name: 'Expandable section', route: '/expandable-section'},
    {name: 'Inline Editor', route: '/inline-editor'},
    {name: 'Form field', route: '/form-field'},
    {name: 'Input', route: '/input'},
    {name: 'Links', route: '/links'},
    {name: 'Loading distractor', route: '/loading-distractor'},
    {name: 'Table', route: '/table'},
    {name: 'Tile', route: '/tile'},
  ];
}