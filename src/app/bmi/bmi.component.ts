// import { Component, OnInit } from '@angular/core';
// import { BmiCalculator } from '../model/bmi-calculator';
// import { Router } from '@angular/router';
// import { BmiCalculatorServiceService } from '../service/bmi-calculator-service.service';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-bmi',
//   templateUrl: './bmi.component.html',
//   styleUrls: ['./bmi.component.css']
// })
// export class BmiComponent implements OnInit {

//   bmiCalci: BmiCalculator = new BmiCalculator(0, '', 0, '', 0, 0, 0, '', '');
//   bmiCal = this.formBuilder.group({
//     id: [0],
//     empName: ['', [Validators.required]],
//     age: [0, [Validators.required]],
//     gender: ['', [Validators.required]],
//     weight: [0, [Validators.required]],
//     height: [0, [Validators.required]],
//     bmi: [0, [Validators.required]],
//     password: ['', [Validators.required]],
//     mail: ['', [Validators.required, Validators.email]],
//   });
//   chart: any;

//   constructor(
//     private service: BmiCalculatorServiceService,
//     private router: Router,
//     private formBuilder: FormBuilder,
//     private toastr: ToastrService
//   ) { }

//   ngOnInit(): void {
//     this.createChart();
//   }

//   getBmiCategory(bmi: number): string {
//     if (bmi < 18.5) {
//       return "Underweight";
//     } else if (bmi < 25) {
//       return "Normal Weight";
//     } else if (bmi < 30) {
//       return "Overweight";
//     } else {
//       return "Obesity";
//     }
//   }

//   postBMI(): void {
//     console.log("I'm executing 1")
//     if (this.bmiCal.valid) {
//       console.log("I'm executing 2")
//       const emp: BmiCalculator = this.bmiCal.value;
//       this.service.postData(emp).subscribe(
//         (res: BmiCalculator) => {
//           this.bmiCalci = res;
//           const bmiCategory = this.getBmiCategory(this.bmiCalci.bmi);
//           this.toastr.success(`Your BMI is: ${this.bmiCalci.bmi} (${bmiCategory})`);
//           // Update chart data based on BMI category information (replace with actual logic)
//           this.chart.data.datasets[0].data = [ // Update data based on BMI category
//             res.bmi < 18.5 ? 1 : 0,
//             res.bmi < 25 ? 1 : 0,
//             res.bmi < 30 ? 1 : 0,
//             res.bmi >= 30 ? 1 : 0,
//           ];
//           this.chart.update();
//         },
//         (error) => {
//           this.toastr.warning('Error while calculating BMI. Please provide proper details.');
//         }
//       );
//     }
//   }

//   createChart(): void {
//     this.chart = new Chart("MyChart", {
//       type: 'pie',
//       data: {
//         labels: ['Underweight', 'Normal Weight', 'Overweight', 'Obesity'],
//         datasets: [
//           {
//             label: "BMI Categories",
//             data: [18.5, 25, 30, 40], // Replace with actual data
//             backgroundColor: ['blue', 'green', 'yellow', 'red']
//           },
//         ]
//       },
//       options: {
//         aspectRatio: 2.5
//       }
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { BmiCalculator } from '../model/bmi-calculator';
import { Router } from '@angular/router';
import { BmiCalculatorServiceService } from '../service/bmi-calculator-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  bmiCalci: BmiCalculator = new BmiCalculator(0, '', 0, '', 0, 0, 0, '');
  bmiCal = this.formBuilder.group({
    id: [0],
    empName: ['', [Validators.required]],
    age: [0, [Validators.required]],
    gender: ['', [Validators.required]],
    weight: [0, [Validators.required]],
    height: [0, [Validators.required]],
    bmi: [0, [Validators.required]],
    // password: [''],
    mail: ['', [Validators.required, Validators.email]],
  });
  chart: any;

  constructor(
    private service: BmiCalculatorServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createChart();
  }

  getBmiCategory(bmi: number): string {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal Weight";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }

  postBMI(event:any): void {
    console.log("I'm executing 1")
    event.preventDefault()
    if (this.bmiCal.invalid) {
      console.log("I'm executing 2")
  return 
    }
    console.log("I'm executing 3")
      const emp: BmiCalculator = {
        id: this.bmiCal.value.id || 0,
        empName: this.bmiCal.value.empName || '',
        age: this.bmiCal.value.age || 0,
        gender: this.bmiCal.value.gender || '',
        weight: this.bmiCal.value.weight || 0,
        height: this.bmiCal.value.height || 0,
        bmi: this.bmiCal.value.bmi || 0,
        // password: this.bmiCal.value.password || '',
        mail: this.bmiCal.value.mail || '',
      };
      this.service.postData(emp).subscribe({
       next: (res: any) => {
          this.bmiCalci = res;
          const bmiCategory = this.getBmiCategory(this.bmiCalci.bmi);
          this.toastr.success(`Your BMI is: <span class="math-inline">\{this\.bmiCalci\.bmi\} \(</span>{bmiCategory})`);
          // Update chart data based on BMI category information (replace with actual logic)
          this.chart.data.datasets[0].data = [ // Update data based on BMI category
            res.bmi < 18.5 ? 1 : 0,
            res.bmi < 25 ? 1 : 0,
            res.bmi < 30 ? 1 : 0,
            res.bmi >= 30 ? 1 : 0,
          ];
          this.chart.update();
        },
        error: (error) => {
          console.log(error,'error error')
          this.toastr.warning('Error while calculating BMI. Please provide proper details.');
        }
      }
      );
  }

  createChart(): void {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: ['Underweight', 'Normal Weight', 'Overweight', 'Obesity'],
        datasets: [
          {
            label: "BMI Categories",
            data: [18.5, 25, 30, 40], // Replace with actual data
            backgroundColor: ['blue', 'green', 'yellow', 'red']
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
