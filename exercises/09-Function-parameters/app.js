// Your code goes here:

function renderPerson(name, DOB, eyeColor, age, gender){
    let sentence = name + " is a " + age + " years old " + gender + " born in " + DOB + " with " + eyeColor + " eyes";
    return sentence;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));