function hasDupVal(array) {
  var steps = 0;
  for(var i=0; i<array.length; i++){
    for(var j=0; j<array.length; j++){
      steps++;
      if(i!==j && array[i]== array[j]){
        return true;
      }
    }
  }
  console.log('Wow ', steps, ' steps!');
  return false;
}

hasDupVal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);

function hasDupVal1(array) {
  var steps = 0;
  var existingNumbers= [];
  for(var i=0; i<array.length; i++){
    
    steps++;
    if(existingNumbers[array[i]]=== undefined){
        existingNumbers[array[i]] = 1;
      
    }else {
      return true;
    }
  }
  console.log('Wow ', steps, ' steps!');
  return false;
}

hasDupVal1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);

function InsertSort(array) {
  step =0;
  remove =0;
  compare =0;
  compare1 =0;
  compare2 =0;
  shift =0;
  insert =0;
  for(index =1; index<array.length; index++){
    position= index;
    remove++;
    tempVal = array[index];
    compare++;

    while(position>0 && array[position -1]> tempVal){
      compare1++;
      array[position]=array[position -1];
      compare2++;
      position=position -1;
      shift++;
    }
    insert++;
    array[position]=tempVal;
    //step = compare+shift;
  }
  //console.log(remove);
  console.log('Comparisons ' ,compare);
  console.log(compare1);
  console.log(compare2);
  console.log('Shifts ',shift);
  console.log(insert);
  //console.log('Total Steps ' ,step);
}

InsertSort([10,9,8,7,6,5,4,3,2,1]);
InsertSort([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]);
console.log('Best Case')
InsertSort([1,2,3,4]);
console.log('Worst Case');
InsertSort([4,3,2,1]);
console.log('Avg Case');
InsertSort([1,3,4,2]);

function intersection(first_array,second_array){
  var compare = 0;
  var insert =0;
  var result = [];

  for(var i =0; i<first_array.length; i++){
    for(var j =0; j<second_array.length; j++){
      compare++;
      if(first_array[i]==second_array[j]){
        insert++;
        result.push(first_array[i]);
      }
    }
  }
  console.log('Comparisons ' ,compare);
  console.log('Insertions' ,insert);
  return result;

}
intersection([2,8,1],[5,8,3]);


function intersection1(first_array,second_array){
  var compare = 0;
  var insert =0;
  var result = [];

  for(var i =0; i<first_array.length; i++){
    for(var j =0; j<second_array.length; j++){
      compare++;
      if(first_array[i]==second_array[j]){
        insert++;
        result.push(first_array[i]);
        break;
      }
    }
  }
  console.log('Comparisons ' ,compare);
  console.log('Insertions' ,insert);
  console.log('Intersection ', result);
  return result;


}
intersection1([2,8,1],[5,8,3]);
intersection1([2,7,1],[5,8,1]);
intersection1([2,8,1,4,6,8,10,17],[5,8,3,1,7,4,11,14]);