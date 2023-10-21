import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const DEFAULT_COUNTRY_CODE = 'US';
export const DEFAULT_GEO = {
  region_code: 'NJ',
  country_code: 'US',
  ip: '1.1.1.1',
};

export default async function middleware(req: NextRequest) {
  const { nextUrl, geo } = req;
  const url = req.nextUrl;
  const ip = req.ip || DEFAULT_GEO.ip;
  let country = geo?.country || DEFAULT_GEO.country_code;
  let region = geo?.region || DEFAULT_GEO.region_code;

  const response = NextResponse.rewrite(nextUrl);
  console.log({ country, region, ip })
  response.cookies.set('country', country);
  response.cookies.set('region', region);
  response.cookies.set('ip', ip);
  
  return response;
}
