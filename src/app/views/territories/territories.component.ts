import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Stack from 'src/app/dsa/stack';
import { TerritoriesService } from 'src/app/services/territories.service';

@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.css'],
})
export class TerritoriesComponent implements OnInit {
  territories: any = [];
  userDisplayName: any = {};

  constructor(
    private router: Router,
    private territoriesService: TerritoriesService
  ) {
    this.userDisplayName = localStorage.getItem('name');
  }

  ngOnInit() {
    this.territoriesService.getAllTeritories().subscribe((data: any) => {
      let response = data.data;

      const buildTree = (parentId:any) => (item:any) => {
        const children = data.data.filter((child:any) => child.parent === item.id);
        return {
          ...item,
          ...(children.length > 0 && { children: children.map(buildTree(item.id)) }),
        };
      };

      const nestedData = {
        items: data.data.filter((item:any) => !item.parent).map(buildTree(undefined)),
      };
      
      this.territories = nestedData;
    });
  }

  toggleNode(item: any): void {
    item.expanded = !item.expanded;
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }

}
