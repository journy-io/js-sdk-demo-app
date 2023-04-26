import { Analytics } from "@segment/analytics-node";

export const analytics = new Analytics({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
  maxEventsInBatch: 1,
});
