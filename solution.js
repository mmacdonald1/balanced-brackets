function balanced(str){
let stack = [];
let opening = ["(","{","["];
let closing = [")","}","]"];
  for(i=0; i< str.length; i++){
    if(opening.indexOf(str[i])!== -1){
      stack.push(str[i]);
    }
   else if(closing.indexOf(str[i]) !== -1){
      if(stack.length === 0){
        return false;
      }
      else if(opening[closing.indexOf(str[i])] === stack[stack.length-1]){
        stack.pop();
      }
      else{
        return false
      }
    } 
  }
  return stack.length === 0;
}
