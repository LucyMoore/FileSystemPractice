# Node.js Filesystem (FS)

## What is it 
 - Node.js filesystem (fs) module provides the ability for working with the file system on your computer. It allows you to read from and write to files, create directories and perform other file-related operations using JavaScript or Typescript code. With fs module, you can interact with files and directories in both synchronous and asynchronous ways.

We are going to read a json file of cat data into our file and have it print a cat object to the console.

Remember to use a ```try``` ``` catch``` block 

The file to read is data.json and we are working in the ```index.js``` file 

 1.  import the FS libraray into index.js 
 ```js
import { readFile } from 'node:fs'
 ```