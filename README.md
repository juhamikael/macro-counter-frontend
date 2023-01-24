
# Getting Started
> ### MAKE SURE YOU HAVE REQUIRED TOOLS INSTALLED
- NodeJS: https://nodejs.org/en/
- npm : npm is included with Node.js installation
- Python: https://www.python.org/downloads/ (Developed with version 3.9.13)
- PostgreSQL : https://www.postgresql.org/download

This application has been developed using the Windows 10. Therefore, the project build guide and commands are specific to this platform.
 
## Installation
`git clone https://github.com/juhamikael/macro-counter-react-fastapi-postgre.git`

Navigate to the root folder by running the following command:
```
cd macro-counter-react-fastapi-postgre
```
### 1 Build /frontend
1.  Open the Terminal
2.  Navigate to the frontend folder by running the following command:

```
cd frontend
``` 

3.  Run the command `npm install` to install the required dependencies for the project. This may take a moment.
4.  Once the dependencies have been installed, start the frontend by running the command `npm start`.
5.  The frontend should now be running and accessible through a web browser at [http://localhost:3000/](http://localhost:3000/)

### 2 Build database
1. Open pgAdmin
2. Right click servers -> Choose `Create` -> `Server`  
![image](https://user-images.githubusercontent.com/83360104/214409868-14dcf6a7-59c8-443a-afb3-ca9842e440c7.png)

3. Give General name, that doesn't really matter
![image](https://user-images.githubusercontent.com/83360104/214408829-65384175-187b-40ed-95d9-2255f8fb1bb2.png)
![image](https://user-images.githubusercontent.com/83360104/214410279-2d45ef05-35c8-4a97-bb67-4595856b5a16.png)  
4. Fill with following
```
Host name / address = localhost
Port = 5432 (default) 
Maintenance database = postgres (default)
Username = postgres (default)
Password = <!YOUR MASTER PASSWORD YOU USE WHEN YOU OPEN pgADMIN) 
```
