import createToken from './index'

const startTime: number = Date.now()
const resultList: string[] = []
for( let _this = 0; _this < 7; _this++ ) {
  const result: string = createToken( 20 )
  resultList.push( result )
}
const duration: number = Date.now() - startTime
console.log( 'Testing:' )
for( const result of resultList ) { console.log( ` - ${ result }` ) }
console.log( `\n [ Duration ]: ${ duration }mls \n` )