import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ TableModule, ChartModule, CardModule ],
})
export class HomeComponent {
  products: any = [];
  data: any;
  options: any;

  constructor() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
  }
}
