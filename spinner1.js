
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/     ');

}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
 
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');  
}, 700);

// ... fill in the rest yourself ...
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|    '); 
}, 900);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/  ');  
}, 1100);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r__   ');  
}, 1300);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r__   ');  
}, 1500);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\  ');  
}, 1500);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r| '); 
  process.stdout.write('   \n -> d2\n');
}, 1700);
 
 