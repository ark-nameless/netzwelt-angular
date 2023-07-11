import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent {
  @Input() data: { items: any[] } | undefined;

  toggleNode(item: any): void {
    item.expanded = !item.expanded;
  }
}
