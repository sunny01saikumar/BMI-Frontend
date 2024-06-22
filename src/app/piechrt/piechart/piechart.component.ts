import { Component } from '@angular/core';
import { BmiCalculator } from 'src/app/model/bmi-calculator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// import Chart from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  // constructor(public chart: any){

  // }
  public chart: any
     showFiller = true;

     createChart(){
  
      this.chart = new Chart("MyChart", {
        type: 'pie', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['BMI'], 
           datasets: [
            {
              // label: "BMI Calculator",
              // data: ['Underweight'],
              // backgroundColor: 'blue'

              label: "BMI Calculator",
              data: [18.5, 25, 30, 100], // Example data, you can replace with actual data
              backgroundColor: ['blue', 'green', 'yellow', 'red']
            }, 
          ]
        },
        options: {
          aspectRatio:2.5
        } 
        
      });
    
      
    }

    ngOnInit(): void {
      this.createChart();
    }
   
  }

  
 
//   import {NgIf} from '@angular/common';
//   import {MatSidenavModule} from '@angular/material/sidenav';
// import { Router } from '@angular/router';
  
  /**
   * @title Autosize sidenav
   */
  // @Component({
  //   selector: 'sidenav-autosize-example',
  //   templateUrl: 'sidenav-autosize-example.html',
  //   styleUrls: ['sidenav-autosize-example.css'],
  //   standalone: true,
  //   imports: [MatSidenavModule, NgIf, MatButtonModule],
  // })
  // export class SidenavAutosizeExample {
  //   showFiller = false;
  // }
  
  