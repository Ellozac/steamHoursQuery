# Steam Hour Query
Do NOT use your actual Steam account username and password.  
Create a new account specifically for security purposes and email spam....

## Install Dependencies
Run the Below command in the same directory as steamHoursQuery  
Run ```npm i```

## Setup .env file
run the below command with your steam username steam password and path to chrome.exe ready  

Run ```npm run setup```

### example Chrome path  
#### for windows  
C:\Program Files\Google\Chrome\Application\chrome.exe  
#### for linux  
/usr/bin/google-chrome-stable

## Make a Query
Changing the below username arguement to the users id which you want to see their hours in the game arguement.  
to find userid navigate to their profile and it can be seen as shown in the image (top left of your screen)
![image](https://github.com/Ellozac/steamHoursQuery/assets/104737752/84ae19db-8039-4c7c-9252-2431f128954b)
note: steam userid Differs from username
Run ```npm run query <steamuserid> <game>```

