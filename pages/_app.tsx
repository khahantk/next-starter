import type { AppProps } from "next/app";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const countryCookie = Cookies.get("country");
  const regionCookie = Cookies.get("region");
  const ipCookie = Cookies.get("ip");

  const geoData = useMemo(() => {
    return {
      region_code: regionCookie,
      country_code: countryCookie,
      ip: ipCookie,
    };
  }, [countryCookie, regionCookie, ipCookie]);

  useEffect(() => {
    console.log(
      JSON.stringify({
        geoMiddleware: {
          country: countryCookie,
          region: regionCookie,
          ip: ipCookie,
          geoData
        },
      })
    );
  }, [countryCookie, ipCookie, regionCookie, geoData]);
  return <Component {...pageProps} />;
}

export default MyApp;
