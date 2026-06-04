/**
 * Single source of truth for the event date.
 *
 * 👉 To change the event date, edit ONLY the line below, then redeploy.
 *    Months are 0-indexed (0 = January, 7 = August).
 *    Everything in the UI (countdown, hero, founding, waitlist modal,
 *    FAQ, page metadata) derives from this value automatically.
 */
export const EVENT_DATE = new Date(Date.UTC(2027, 0, 1, 0, 0, 0));

/** Epoch milliseconds — used by the countdown timer. */
export const EVENT_DATE_MS = EVENT_DATE.getTime();

/** Human-readable label, e.g. "August 1, 2026". Derived, never hardcode it. */
export const EVENT_LABEL = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
}).format(EVENT_DATE);

/** Month + year only, e.g. "August 2026". */
export const EVENT_MONTH_YEAR = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(EVENT_DATE);
