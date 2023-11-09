import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { jwt } from '../utils'

export async function middleware(request: NextRequest, ev: NextFetchEvent) {

  const token = request.cookies.get("token")?.value || ''
  console.log(token)
  // console.log(res)
  try {
    await jwt.isValidToken(token)
    return NextResponse.next();
  } catch (error) {
    // console.log(error)
    let url = request.nextUrl
    url.pathname = '/auth/login'
    return NextResponse.rewrite(url);

  }
  // try {


  // } catch (error) {
  //   console.log(error)
  //   let url = request.nextUrl
  //   url.pathname= '/auth/login'
  //   // console.log(url)
  //   // return Response.redirect('/auth/login');
  //   // const requestedPage = request.url;
  //   return NextResponse.rewrite(url);
  // }

}

export const config = {
  matcher: '/checkout/address',
}