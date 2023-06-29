function buildToken(): string {
  const random: number = Math.random(),
    rauwToken: string = random.toString( 36 )
  // Erasing '0.' at string init from rauwToken
  const token: string = rauwToken.slice( 2 )
  return token
}

export function createToken( charsAmount?:number ): string {
  if( charsAmount === undefined ) { charsAmount = Math.round( Math.random() * 9 ) + 1 }
  let token = ''
  while( token.length < charsAmount ) { token += buildToken() }
  token = token.slice( 0, charsAmount )
  return token
}

export default createToken