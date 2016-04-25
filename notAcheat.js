// take input values and find how many of them are with the cheat window.
// return the number of values which are with in the cheat window.
var checkMarks;
function notAcheat(driveType, distance, speed, elevation, temp){
   chechMarks = 0;	
   // set average starting values
   var distanceAve = 32.09; //In miles based on three Los Angeles testing routes
   var speedAve = 31.94; //In miles per hour based on three Los angeles testing routes
   var elevationAve = 1288.88; //Feet above sea level
   var tempAve = 30;
   var distanceDev, speedDev, elevationDev;
   // set deviation window
   if(driveType == 0){// straight
	 distanceDev = 20;
	 speedDev = 20 ;
	 elevationDev = 200;
	 checkMarks++;
   }
   else if(driveType == 1){ // curvey
   	distanceDev = 10;
	speedDev = 15;
	elevationDev = 100;
   }
   else // more curvey
	 distanceDev = 5;
	 speedDev = 10;
	 elevationDev = 50;
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
