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
  // -same-
  charSheet:boolean[]=[false,false,false];
  custBaseAnimal:number=1;
  typeBasicNames:string[]=[];
  //-mix-
  characterArray:{
    type:string,
    nsfw:boolean,
  }[]=[]
  lineCol:boolean=false;
  
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
    },1500)
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
          },250)
          clearInterval(checkPosition)
        }
      },10)
    })
    
  }
  calc(){
    this.moneyAmount=0;
    if(this.calcType){
      if(this.amountChar<1) this.amountChar=1
      if(this.typeBasicNames.includes(this.typeOfComm)){
        this.moneyAmount= this.typeBasic.find(e=>e.type==this.typeOfComm)?.prices[this.specificComm][1];
        this.moneyAmount *= (this.amountChar > 1 ? 1+(this.amountChar-1) * 0.5 : 1);
        console.log((this.amountChar > 1 ? this.amountChar * 0.5 : 1))
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
        this.moneyAmount+= 1+ Number(this.custBaseAnimal);
        this.moneyAmount *=(this.nsfw?1.2:1);
      }
    }else {
      if(this.specificComm<2)this.specificComm=3
      //sort them
      this.characterArray.sort((a,b)=>a.type.localeCompare(b.type));
      let currentName = this.characterArray[0].type;
      let typeHelp=false;
      for(let i=0;i<this.characterArray.length;i++){
        let moneyHelp= this.typeBasic.find(e=>e.type==this.characterArray[i].type)?.prices[this.specificComm][1];
        console.log(moneyHelp);
        moneyHelp +=(this.lineCol?2:0);
        console.log(moneyHelp);
        moneyHelp *=(this.characterArray[i].nsfw?1.2:1);
        console.log(moneyHelp);
        if(currentName==this.characterArray[i].type && typeHelp){
          moneyHelp/=2;
          console.log("Halfed")
        } 
        else if(currentName!=this.characterArray[i].type){
          console.log("new type")
          currentName = this.characterArray[i].type
          typeHelp = true;
        } 
        else {
          console.log("nex half")
          typeHelp=true;
        }
        console.log(moneyHelp);
        this.moneyAmount+=moneyHelp;
        console.log("-----\n"+this.moneyAmount);
      }
    }
    this.moneyAmount=parseFloat(this.moneyAmount.toFixed(2))
  }
  forArray(){
    if(this.amountChar<1) this.amountChar=1
    if(this.characterArray.length<this.amountChar){
      this.characterArray.push({type:"",nsfw:false});
      return new Array(this.amountChar);
    }else if(this.characterArray.length>this.amountChar){
      this.characterArray.pop();
      return new Array(this.amountChar);
    }else{
      return new Array(this.amountChar);
    }
  }
}
