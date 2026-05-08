import { GoogleAnalyticsRouteTracker } from "./GoogleAnalyticsRouteTracker";

const COLLEGE_GA4_DEFAULTS: Record<string, string> = {
  ahs: "G-JN8HFZC3RG",
};

const COLLEGE_ID = process.env.NEXT_PUBLIC_COLLEGE_ID;
const GA4_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ||
  (COLLEGE_ID ? COLLEGE_GA4_DEFAULTS[COLLEGE_ID] : undefined);

export function GAScript() {
  if (!GA4_ID) return null;
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}',{send_page_view:false});`,
        }}
      />
    </>
  );
}

export function GARouteTracker() {
  if (!GA4_ID) return null;
  return <GoogleAnalyticsRouteTracker measurementId={GA4_ID} />;
}
