import Script from "next/script";
import React, { useEffect, useState } from "react";
import useEffectOnce from "../hooks/useEffectOnce";
import { useRouter } from "next/router";
import usePrevious from "../hooks/usePrevious";

function sendScreenView({ account, screenName }) {
  if (account) {
    journy("screen", { name: screenName, accountId: account.id });
  } else {
    journy("screen", { name: screenName });
  }
}

export default function Journy({ account, user, screenName }) {
  const router = useRouter();
  const [changes, setChanges] = useState(0);

  useEffectOnce(() => {
    if (user) {
      journy("identify", { userId: user.id });
    }

    sendScreenView({ account, screenName });
  });

  const previousChanges = usePrevious(changes);
  useEffect(() => {
    if (previousChanges && changes !== previousChanges) {
      sendScreenView({ account, screenName });
    }
  });

  useEffect(() => {
    function handleRouteChangeCompleted() {
      setChanges((changes) => changes + 1);
    }

    router.events.on("routeChangeComplete", handleRouteChangeCompleted);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeCompleted);
    };
  }, []);

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
    </>
  );
}
