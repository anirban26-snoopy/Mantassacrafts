# Prompt for Google AI Studio — Mantassa Crafts End-to-End Workflow Design

You are an operations/process consultant for a small D2C handmade jewelry
business. Design a complete, practical end-to-end workflow — from a
customer discovering the brand to the order being fulfilled and the
relationship continuing after delivery. Do NOT address visual design or
UI — focus entirely on process, steps, decision points, tools, and
information flow.

## Business context

- Brand: Mantassa Crafts (মানতাসা ক্রাফটস), a women-owned handmade jewelry
  studio in Kolkata, India, run largely by one person (the owner) with
  possibly informal help, being revived from a small home-based operation
  into a more structured online business.
- Signature product: personalized, made-to-order jhumka earrings
  (customer's name hand-painted in Bengali or English on a hand-crafted
  base), plus an expanding line of fine jewelry, watches/accessories, and
  home/gifting items.
- Every item is handmade to order after the customer confirms design —
  nothing is mass-produced or held in large ready stock (though some
  standard/non-personalized items may have limited ready stock).
- Website exists (built in Next.js) as a **catalog + customizer**, not a
  full checkout system: customers browse, personalize a product, add it
  to a cart, and enter their name/phone/email/address/pincode — the cart
  then opens a pre-filled WhatsApp message to the business with the full
  order and customer details. There is no online payment gateway.
- The owner currently manages everything manually over WhatsApp and
  presumably a notebook or basic spreadsheet — there is no order
  management system, inventory tracker, or CRM yet.

## What I need you to produce

### 1. Full customer-facing journey (step by step)

Map every step from first discovering the brand (Instagram, Google Maps,
word of mouth, the website) through to becoming a repeat customer:
discovery → browsing → customizing a product → adding to cart → sending
the WhatsApp order → design/price confirmation conversation → payment
collection (how, given no online gateway — e.g. UPI link, bank transfer,
COD?) → production time communication → shipping/tracking → delivery →
post-delivery follow-up (review request, reorder nudge, referral ask).

For each step, specify: what the customer does, what the business must do
in response, what information must be captured or confirmed, and how long
that step should reasonably take before it becomes a risk (e.g. "if no
response to a WhatsApp order within X hours, do Y").

### 2. Order lifecycle & states (the operational backbone)

Define a clear order status pipeline (e.g. New Inquiry → Design Confirmed
→ Payment Received → In Production → Ready to Ship → Shipped → Delivered
→ Closed/Reviewed), including:
- What triggers a transition between each state
- Who is responsible for updating it
- What could go wrong at each state (customer goes silent, wants to
  change the design after confirming, payment not received, production
  delay, wrong address) and how to handle it
- Whether/how this should be tracked (even simply — e.g. a shared
  spreadsheet or lightweight order-tracking tool) given it's currently a
  single-person operation

### 3. Payment & trust workflow

Since there's no payment gateway on the site, design a clear workflow for
collecting payment safely and transparently once a customer confirms an
order over WhatsApp: what payment methods to offer (UPI, bank transfer,
partial advance + balance on delivery, full COD, etc.), how to confirm
receipt, what to send the customer as proof/confirmation, and how to
handle disputes or non-payment after design work has started (especially
relevant since personalized items can't be resold).

### 4. Production & fulfillment workflow

Outline the internal steps from "order confirmed" to "item shipped":
sourcing materials for that specific customization, production queue
management (especially once order volume grows beyond what one person can
track from memory), quality check, packaging (with brand touch — e.g. a
thank-you note, given the personal nature of the brand), and choice of
shipping/courier partner with tracking handoff to the customer.

### 5. Inventory & catalog workflow

Since items are made-to-order, define how raw materials (fabric,
terracotta, beads, findings, metal stock) should be tracked so the owner
doesn't accept orders she can't fulfill, and how the website's product
catalog should be kept in sync with what's actually offerable (e.g. a
lightweight process for marking a customization option "temporarily
unavailable" if a material runs out).

### 6. Customer communication & automation opportunities

Identify where AI/automation (e.g. a Gemini-powered WhatsApp assistant,
auto-reply templates, order-summary parsing from the pre-filled WhatsApp
message into a structured record) could reasonably reduce manual load for
a solo or small-team operation — e.g. auto-acknowledging new orders,
generating a production checklist from the customization details, sending
shipping-status nudges, or drafting review-request messages — without
making the brand feel impersonal. Be specific about what should stay human
(e.g. design discussion, price negotiation, apology handling) versus what
can be safely automated.

### 7. Growth/scale considerations

Briefly note what breaks first as order volume grows (e.g. WhatsApp alone
becomes unmanageable, production queue gets lost, no visibility into
which materials are low) and what the next tool/process upgrade should be
at each rough volume milestone (e.g. ~10 orders/week, ~50 orders/week),
without assuming a large budget — this is still a small Kolkata-based
craft business.

## Output format

Produce the workflow as a clearly numbered, stage-by-stage document (not
code, not UI mockups) that the business owner could literally follow or
hand to a new hire. Use short paragraphs and bullet points, and call out
explicit decision rules (if X happens, do Y) wherever relevant.
