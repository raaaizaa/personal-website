import { clsx, type ClassValue } from 'clsx'
import { NextApiRequest, NextApiResponse } from 'next'
import { twMerge } from 'tailwind-merge'
import querystring from 'querystring'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cond(condition: string, st: string[]) {
  const style: string[] = []

  st.map((data) => {
    style.push(`${condition}:${data}`)
  })

  return style
}

export function generateRandomString(length: number): string {
  const characters =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = ''
  for(let i = 0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}

export function getRefreshToken(req: NextApiRequest, res: NextApiResponse) {
  const client_id = 'ae48728cc28c47c591d5d9eeb5ec9f8c';
  const redirect_uri = 'http://localhost:3000/callback'
  
  
  if(req.method === 'GET'){
    const state = generateRandomString(16)
    const scope = 'user-read-currently-playing'

    res.redirect('https://accounts.spotify.com/authorize?' + 
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
    )
  }else{
    res.status(405).end()
  }

  console.log(getRefreshToken)

}