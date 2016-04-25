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
     distanceAve = 32.09; //In miles based on three Los Angeles testing routes
     speedAve = 31.94; //In miles per hour based on three Los angeles testing routes
     elevationAve = 1288.88; //Feet above sea level
     tempAve = 30;
   else{             // pasat
     distanceAve = 32.09 ;
     speedAve = 31.94;
     elevationAve = 1288.88;
     tempAve = 30;
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
