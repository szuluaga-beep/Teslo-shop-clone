import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { jwt } from '../utils'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  // console.log(session)
  if (!session) {
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/auth/login`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next()

  // const token = request.cookies.get("token")?.value || ''
  // console.log(token)
  // // console.log(res)
  // try {
    // await jwt.isValidToken(token)
  //   return NextResponse.next();
  // } catch (error) {
  //   // console.log(error)
  //   let url = request.nextUrl
  //   url.pathname = '/auth/login'
  //   return NextResponse.rewrite(url);

  // }

}

export const config = {
  matcher: '/checkout/address',
}