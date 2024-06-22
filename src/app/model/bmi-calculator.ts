export class BmiCalculator {
    public id:number;
    public empName:string;
    public age:number;
    public gender:string;
    public weight:number;
    public height:number;
    public bmi:number;
    // public password:string;
    public mail:string;

    constructor(id:number, empName:string, age:number, gender:string, weight:number, height:number, bmi:number, mail:string){
       this.id=id;
       this.empName=empName;
       this.age=age;
       this.gender=gender;
       this.weight=weight;
       this.height=height;
       this.bmi=bmi;
    //    this.password=password;
       this.mail=mail;
    }
}
