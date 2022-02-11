function main(){
   turnLeft();
   while (frontIsClear()) move();
   while (frontIsBlocked()){
      if(rightIsClear()){
         turnRight();
         move();
      }
      else {
         turnLeft();
         move();
      }
   }
   repeat (2){
      move();
      turnRight();
   }
   move();
   while (frontIsBlocked()){
      if(rightIsClear()){
         turnRight();
         move();
      }
      else {
         turnLeft();
         move();
      }
   }
   move();
   turnRight();
   move();
   turnLeft();
   move();
   while (frontIsBlocked()){
      if(rightIsClear()){
         turnRight();
         move();
      }
      else {
         turnLeft();
         move();
      }
   }
   move();
   turnLeft();
   while (frontIsClear()) move();
   while (frontIsBlocked()){
      if(rightIsClear()){
         turnRight();
         move();
      }
      else {
         turnLeft();
         move();
      }
      if(frontIsBlocked()){
      turnLeft();
      move();
      }
      else move();
   }
}