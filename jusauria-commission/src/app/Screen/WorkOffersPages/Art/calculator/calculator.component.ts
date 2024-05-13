import { Component, Renderer2 } from '@angular/core';
import { OfferServiceService } from '../../../../Services/ArtService/ArtService.service';
import { CommissionDetails } from '../../../../Pojos/Objects/CommissionDetails';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  typeBasic: CommissionDetails[];
  special: CommissionDetails[];
  
  // --- CALCULATOR --- 
  moneyAmount:number=0;
  calcType:boolean=true; //true = Same; false = Mixed
  amountChar:number=1;
  typeOfComm:string = "";
  specificComm:number=0;
  nsfw=false;
  
  
  charSheet:boolean[]=[false,false,false];
  custBaseAnimal:number=1;
  typeBasicNames:string[]=[];
  
  constructor(private render: Renderer2){
    this.typeBasic= OfferServiceService.basicArtComms;
    this.special = OfferServiceService.specialArtComms;
    //nameArray
    for(let i=0; i<this.typeBasic.length;i++){
      this.typeBasicNames.push(this.typeBasic[i].type);
    }
  }
  startAnimation(): void {  
    this.render.removeClass(document.getElementById("calculatorIcon"),"dropUp")
    this.render.addClass(document.getElementById("calculatorIcon"),"dropDown")
    setTimeout(()=>{
      const checkPosition=setInterval(()=>{
        if ((document.getElementById("calculatorIcon")?.getBoundingClientRect().y as number)- (document.getElementById("calculatorIcon2")?.getBoundingClientRect().y as number) >-4) {
          // Trigger animation when 88% of the target is visible
          this.render.addClass(document.getElementById("calculatorIcon"),"invisible")
          this.render.removeClass(document.getElementById("calculatorIcon2"),"invisible")
          // Disconnect the observer since the animation has been triggered
          clearInterval(checkPosition)
        }
      },10)
      this.render.removeClass(document.getElementById("calculator"),"invisible")
      this.render.addClass(document.getElementById("calculator"),"goUp")
      this.render.removeClass(document.getElementById("calculator"),"goDown")
    },1600)
  }
  EndAnimation(){
    this.render.removeClass(document.getElementById("calculator"),"goUp")
    this.render.addClass(document.getElementById("calculator"),"goDown")
    setTimeout(()=>{
      const checkPosition=setInterval(()=>{
        if ((document.getElementById("calculatorIcon")?.getBoundingClientRect().y as number)- (document.getElementById("calculatorIcon2")?.getBoundingClientRect().y as number) <-4) {
          // Trigger animation when 88% of the target is visible
          this.render.addClass(document.getElementById("calculatorIcon2"),"invisible")
          this.render.removeClass(document.getElementById("calculatorIcon"),"invisible")
          // Disconnect the observer since the animation has been triggered
          setTimeout(()=>{
            this.render.removeClass(document.getElementById("calculatorIcon"),"dropDown")
            this.render.addClass(document.getElementById("calculator"),"invisible")
            this.render.addClass(document.getElementById("calculatorIcon"),"dropUp")
          },200)
          clearInterval(checkPosition)
        }
      },10)
    })
    
  }
  calc(){
    if(this.amountChar<1) this.amountChar=1
    this.moneyAmount=0;
    if(this.calcType){
      if(this.typeBasicNames.includes(this.typeOfComm)){
        this.moneyAmount= this.typeBasic.find(e=>e.type==this.typeOfComm)?.prices[this.specificComm][1];
        this.moneyAmount *= (this.amountChar > 1 ? 1+this.amountChar * 0.5 : 1);
        this.moneyAmount *=(this.nsfw?1.2:1);
      }
      else if(this.typeOfComm=="Charactersheet") {
        this.moneyAmount= this.special.find(e=>e.type==this.typeOfComm)?.prices[this.specificComm][1];
        for(let i=0;i<this.charSheet.length;i++){
          if(this.charSheet[i]) this.moneyAmount+= this.special.find(e=>e.type==this.typeOfComm)?.prices[2+i][1]
        }
        this.moneyAmount *=(this.nsfw?1.2:1);
      }else{
        this.moneyAmount= this.special.find(e=>e.type==this.typeOfComm)?.prices[this.specificComm][1];
        this.moneyAmount+= 1+this.custBaseAnimal;
        this.moneyAmount *=(this.nsfw?1.2:1);
        
      }
    }else {
      
    }
  }
}
