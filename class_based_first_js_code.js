class life{
    constructor(category, ntype,lifespan){
        this.name=category;
        this.type=ntype;
        this.span=lifespan;
    }
    what(){
      if(this.span>=80){
        return 'wow you are great'
      }
      else{
       return 'it is some thing bad'
     }
    }
    how(){
        return `as i know, it have ${this.type} and thy live for ${this .span}year`
    }

}
class mankind extends life{
    constructor(category,ntype,lifespan,property){
        super(category,ntype,lifespan);
        this.property=property;
    }
    looking(){
        return `they are looking very ${this.property}`
    }
}
let sohan=new mankind('aniaml',2,90,'black');
console.log(sohan.looking())
console.log(sohan.what())
