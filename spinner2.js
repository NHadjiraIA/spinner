const allCaracter  = "|/-\\|/__ __\|";
let time = 100;
for (let i = 0; i < allCaracter.length - 1; i ++) {
 
    setTimeout(() => {
      // print the char here
      process.stdout.write('\r'+ allCaracter[i] + ' ');
      
    } ,time)
    time = time + 200
   

}
setTimeout(() => {
      // print  here d2 at line 2
      process.stdout.write('\n -> d2\n ');
      
} ,time)
time = time + 200;