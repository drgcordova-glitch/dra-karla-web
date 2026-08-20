import Script from "next/script";
import { site } from "@/data/site";

// Microsoft Clarity — solo en producción, cargado de forma diferida (afterInteractive)
// para no bloquear el render ni afectar el LCP.
export default function Clarity() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=nextjs";
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${site.clarityId}");`}
    </Script>
  );
}
