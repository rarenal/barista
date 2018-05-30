import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <button dt-button><dt-icon name="agent"></dt-icon>Primary with icon</button>
    <button dt-button variant="secondary"><dt-icon name="agent"></dt-icon>Secondary with icon</button>
  `,
})
export class IconsButtonExampleComponent { }