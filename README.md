# create-token
`create-token` is an open source library created to generate random tokens with an specific size.

## API
The API provided by this library is too simple. The only available function is `createToken( charsAmount?:number ): string`; it receives an argument that represent the size of the returned token<sup>[1]</sup>
``` typescript
import createToken from 'create-token'

const token: string = createToken( 10 )
console.log( token )  // '0a8po1f4r8'
```
<sub>*This code is only an example <sup>[2]</sup>*</sub>

## Scripts

### npm run dev
`nodemon src/test.ts`. This script is for set up a development environment. It uses **nodemon** and **ts-node** as *developement dependencies* to listen the project changes and autoupdate the output.

### npm run build
`tsc`. This script run the **typescript compiler**, spliting javascript code and **typescript declarations** (`*.d.ts` files) inside `./dist` directory.

## Testing
In the file `./src/test.ts` you can find the testing instructions; this code can provide an output with the following format
```
Testing:
 - npnnnoaj0gkgiou8m7yb
 - 5k10dri7huin0jt5a1qv
 - lynrzacqw2b02wfgj0za
 - kk9kvnme11854qt9irfy
 - cwe606hnjfintmwl8o6q
 - qcg00x97g45o2fjbzeyk
 - c2994d16kafrav10yv2a

 [ Duration ]: 0mls 
```
You can edit this file to test specific cases<sup>[3]<sup>

> 1. If it is not provided the size of the returned token will be between 3 and 10
> 2. The code output will be different, because... it's random XD
> 3. This is the script executed by `npm run dev`