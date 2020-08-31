/*Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
*/

let n = 5;
let outPut = "";

for (let i = 0; i < n; i += 1){
    for (let j = 0; j < n; j += 1){
        if (j < (n - i) - 1){
            outPut += " ";
        }
        else {
            outPut += "*";
        }        
    }
    console.log(outPut);
    outPut = "";
    console.log("\n");
}