import Script from "next/script";
import React from "react";

export default function Journy({ account, user, screenName }) {
  return (
    <>
      <Script
        src={`${process.env.NEXT_PUBLIC_JOURNY_DOMAIN}/analytics.js`}
        async={true}
      />
      <Script
        id="journy_init"
        dangerouslySetInnerHTML={{
          __html: `
            window.journy=window.journy||function(_,n,o){window.__journy_queue__||(window.__journy_queue__=[]),window.__journy_queue__.push({command:_,args:n,date:Date.now(),callback:o})};
            journy("init", { trackerId: "${process.env.NEXT_PUBLIC_JOURNY_TRACKER_ID}", domain: "${process.env.NEXT_PUBLIC_JOURNY_DOMAIN}", siteId: "${process.env.NEXT_PUBLIC_JOURNY_SITE_ID}" });
          `,
        }}
      />
      {user ? (
        <Script
          id="journy_identify"
          dangerouslySetInnerHTML={{
            __html: `journy("identify", { userId: "${user.id}" });`,
          }}
        />
      ) : null}
      {screenName ? (
        <Script
          id="journy_screen"
          dangerouslySetInnerHTML={{
            __html: account
              ? `journy("screen", { name: "${screenName}", accountId: ${account.id} });`
              : `journy("screen", { name: "${screenName}" });`,
          }}
        />
      ) : null}
    </>
  );
}
