# Node.js Filesystem (FS)

## What is it 
 - Node.js filesystem (fs) module provides the ability for working with the file system on your computer. It allows you to read from and write to files, create directories and perform other file-related operations using JavaScript or Typescript code. With fs module, you can interact with files and directories in both synchronous and asynchronous ways.

We are going to read a json file of cat data into our code and have it print a cat object to the console.
We are doing it in the simplest form first. No try catch no async. just file reading and printing to the console
we will be using the filesystem built in method: **readFile**

When you clone/fork the repo 
run ```npm i``` in your terminal  
to run your file type ```node index.js``` and you will see "where are all the cats?"
then you will know its running 

The file we are reading is ```data.json``` and we are working in the ```index.js``` file 

#### In index.js ->

 1.  Import the FS libraray into index.js 
 ```js
import * as fs from 'node:fs'
 ```

 2. Create a let variable called catData. This will hold the cat data after we have successfully read it from the file and converted it 

 ```js
 let catData
 ``` 

 3. Now we will read the data from the file and load it straight into ```catData```,  
 Since we are not using promises here we need to use a call back function in our ReadFile function call.
the anatomy of the readFile function:

```fs.readFile(filepath, encoding type, callback function)```
example:
```js
const exampleData = fs.readFile('./thisFile.json', 'utf8', (err, data) => {
  //prepare and return your data here 
  })
```


```./thisFile.json```':  this is the file path 

 ```'utf8'``` this is the encoding type, utf8 will load the data as a long string 

 ```(err, data) => {} ```  this is the callback function
- if the file read fails the error will be contained in the *err* parameter 
- if the file is read successfully the file data will be contained in the *data* parameter

Go ahead and set up the readFile function to read the *data.json* file. use the ```=``` to have its response be assigned to ```catData```

5. We can access the err and data parameters inside the callback function only, if you console.log what is inside data right now it will be a string type. it might look like an object but if you put ```typeof data``` inside a ```console.log``` it will print out ```string```

6. Lets turn it into a json object: Inside your call back function put in ```const temp = JSON.parse(data)```

```JSON.parse()``` will convert the string to json (as long as it doesnt include any unusual characters)

What we did there,  was converted the string data into json and saved it in a new const ```temp```

if you try ```console.log(typeof temp)``` right under this line of code  it will say 'object'

7. in that lastline remove the ```typeof temp``` and put in ```temp[1]```
you will see a black cat called  Mr Mittens


If you try to return temp to the main code and console.log ```catData``` it will returned undefined. 

This is because the code moves on before the file has  finished reading. See if you can wrap your code in an async function and get it to wait untill the file has finished reading for it to console log all the cats.