// take input values and find how many of them are with the cheat window.
// return the number of values which are with in the cheat window.

function notAcheat(driveType, carType, distance, speed, elevation, temp){
   
   var checkMarks = 0;
   var distanceAve;
   var speedAve;
   var elevationAve;
   var tempAve;
   var distanceDev;
   var speedDev;
   var elevationDev;
   var tempDev;
   // set deviation window
   if(driveType == 0){// straight
	 distanceDev = ;
	 speedDev = ;
	 elevationDev = ;
	 tempDev = ;
	 checkMarks++;
   }
   else{              // curvey
	 distanceDev = ;
	 speedDev = ;
	 elevationDev = ;
	 tempDev = ;
   }
   // set average starting values
   if(carType == 0){ // jetta
     distanceAve = ;
     speedAve = ;
     elevationAve = ;
     tempAve = ;
   else{             // pasat
	 distanceAve = ;
     speedAve = ;
     elevationAve = ;
     tempAve = ;
   }
   if(distance >= (distanceAve - distanceDev) && distance <= (distanceAve + distanceDev)){
	 checkMarks++;  
   }
   if(speed >= (speedAve - speedDev) && speed <= (speedAve + speedDev)){
	 checkMarks++;
   }
   if(elevation >= (elevationAve - elevationDev) && elevation <= (elevationAve + elevationDev)){
	 checkMarks++;
   }
   if(temp >= 30){
	 checkMarks++;	 
   }
   // 5 total checkmarks possible
   return checkMarks;
}