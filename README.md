# Steam Hour Query
Do NOT use your actual Steam account username and password.  
Create a new account specifically for security purposes and email spam....

## Install Dependencies
Run the Below command in the same directory as steamHoursQuery  
Run ```npm i```

## Setup .env file
run the below command with your steam username steam password and path to chrome.exe ready  

Run ```npm run setup```

###example Chrome path  
####for windows  
C:\Program Files\Google\Chrome\Application\chrome.exe  
####for linux  
/usr/bin/google-chrome-stable

## Make a Query
Changing the below username arguement to the users username which you want to see their hours in the game arguement.  
Run ```npm run query <username> <game>```
