# Signing Order

You have full control over the sequence in which your signatories execute their signatures - from parallel fast-track agreements to strictly gated approval chains. Signing order is configured per request during signatory setup by assigning each person a numerical tier value.

- **Simultaneous mode (tier 0)** - all signatories receive the invitation at the same time and can sign in any order. Best for straightforward agreements where no approval dependency exists. Every party sees the signing link immediately upon dispatch

- **Sequential mode (tiers 1, 2, 3...)** - the platform dispatches invitations tier by tier. Level 2 signers only receive their invitation after all level 1 signers have completed. This is built for approval chains where a manager must sign before a director, or an employee must sign before the countersigning HR lead

- **Mixed mode** - you can combine both in a single request. Place two product managers at tier 1 (they sign simultaneously in any order), then the CEO at tier 2 (invited only after both managers complete). This maps naturally to real organizational structures where committee-level approvals precede executive sign-off

- **Decline or delay** - if any signer in a sequential chain explicitly rejects the document, the entire workflow halts immediately and upper-tier signers are never notified. If a signer simply delays, the chain stalls at their tier while the overall expiry clock continues ticking

- **Interaction with reminders and expiry** - the expiration deadline applies to the entire request, not individual tiers. Automatic reminders target only the currently active signers - upper-tier signers waiting for their turn do not receive confusing reminder emails. If a lower-tier signer delays too long, the remaining tiers may run out of time before the hard deadline

- **Signer visibility** - optionally enable "signatory status view" so each signer can see the real-time status of all other participants, useful for legal workflows where parties want to verify who has already committed
