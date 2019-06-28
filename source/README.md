First of all you need to install all develoment dependencies:  
```
> npm i 
```


# development build from source

Will watch any relevant change in the source folder (tests included) and will run the tests all the times.

Run
```
> npm run buildev
```
a test folder will be created in the root; all source file are watched and will trigger the unminified build of the `dist/index.js`

# distribution build
```
> npm run build 
```
this will not go in watch mode and will output the minified version of `dist/index.js`


# tests and coverage
Once the root `test` folder is build run:
```
> npm test
```
or
```
> npm run cover
```