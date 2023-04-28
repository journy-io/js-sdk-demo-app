import Script from "next/script";
import React, { useEffect, useState } from "react";
import useEffectOnce from "../hooks/useEffectOnce";
import { useRouter } from "next/router";
import usePrevious from "../hooks/usePrevious";

function sendScreenView({ account, screenName }) {
  if (account) {
    window.analytics.page(screenName, {}, { groupId: account.id });
  } else {
    window.analytics.page(screenName);
  }
}

export default function Analytics({ account, user, screenName }) {
  const router = useRouter();
  const [changes, setChanges] = useState(0);

  useEffectOnce(() => {
    if (user) {
      window.analytics.identify(user.id);
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
        id="segment_analytics"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY}";;analytics.SNIPPET_VERSION="4.15.3";
            analytics.load("${process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY}");
            }}();
          `,
        }}
      />
    </>
  );
}
