# JobJam Design Guidelines

## Brand Identity

**Visual Style:** Clean, credible, friendly, and approachable - professional mentorship feel, not corporate or overly fancy.

**Color Palette:**
- Deep Navy: 209 79% 17% (Primary brand)
- Teal: 180 68% 38% (Secondary/accents)
- Warm Golden Yellow: 42 100% 67% (Highlights/CTAs)
- Off-white: 210 33% 98% (Backgrounds)
- Light Grey: 210 43% 92% (Subtle backgrounds)

**Typography:**
- Headings: Poppins or Inter (Bold weights)
- Body: Inter or Source Sans Pro (Regular/Medium)

**Tone:** Warm, encouraging, supportive - like a trusted mentor helping young people.

## Layout Architecture

**Header (Sticky):**
- Logo left with jam jar "m" detail
- Navigation: Home, Courses, FAQ, Testimonials, About, Contact
- Primary CTA button: "Enrol now" (Golden Yellow)

**Hero Section:**
- Layout: Text left (60%), image right (40%)
- Headline: "Get your first job — with real coaching, real confidence, and a 100% guarantee."
- Subheadline: "Over 12 years helping 1,500+ people. Interview practice, salary negotiation, and ongoing support for first-time jobseekers in NZ."
- Two buttons: "Enrol now" (primary yellow), "See courses & prices" (secondary outline)
- Trust strip below: "12+ years experience • 1,500+ people placed • 3,000+ interviews"
- Hero image: Friendly diverse NZ youth in mentorship/interview setting, authentic not corporate

## Core Sections

**Value Proposition (3 benefit cards):**
- Icons with headings and descriptions
- "Interview practice that feels real" | "Salary & negotiation training" | "One-to-one guidance during your job hunt"
- Card style: Light background, subtle shadows, teal accents

**Courses/Pricing (3-column comparison):**
- 2-Hour Intro ($300): Live coaching, CV checklist, mock interview. Button: "Enrol now"
- 12-Month Support ($3,000 - $500 upfront + $500/mo × 5): Weekly check-ins, full support, money-back guarantee. Button: "Sign up" - HIGHLIGHT AS RECOMMENDED
- 6-Month Fast Path ($6,000 - $1,000 upfront + $1,000/mo × 5): Everything + priority support. Button: "Buy now"
- Guarantee banner below: "Our promise: Get a job within your plan's timeframe or your money back."

**How It Works (3-step visual):**
- Step 1: Sign up for the course
- Step 2: Complete training + mock interviews
- Step 3: Ongoing support until you land a job
- Use numbered circles with connecting lines or arrows

**Testimonials Carousel:**
- 3 client story cards with photos
- Authentic quotes about landing first jobs
- Names, roles, subtle testimonial styling

**FAQ (Accordion):**
- 6-7 questions including: "What if I don't get a job?", "Do you offer refunds?", "Online or in-person?", "Can I pay in instalments?", "What results can I expect?"
- Clean expand/collapse interaction

**About Section:**
- Left: Friendly headshot of Rohan Wakefield
- Right: "With 12+ years experience, 3,000+ interviews, and 1,500+ placements, I created JobJam to help young people navigate their first job search with confidence."

**Final CTA Banner:**
- Full-width, bold background (Navy or Teal)
- "Ready to land your first job? Enrol now."
- Large yellow button

**Contact Section:**
- Form fields: Name, Email, Message
- Display email: hello@jobjam.co.nz
- Clean, simple form styling

## Images Strategy

**Hero Section:** Large, prominent image showing diverse young NZ jobseekers in positive, mentorship-focused scenarios (friendly, authentic, not stock-corporate)

**About Section:** Professional but approachable headshot of founder Rohan Wakefield

**Testimonials:** Real client photos (or authentic-looking placeholders)

**Value/Feature Cards:** Icons only (no photos needed)

## Interactive Elements

**Animations:** Subtle only
- Hero fade/slide on load
- Hover effects on course cards (slight lift, shadow increase)
- Smooth scroll to sections
- FAQ accordion transitions

**Forms:**
- Lead capture: Name + Email (simple, inline)
- Sign-up form: Full name, Email, Phone (optional), Course dropdown, Start date (optional), Message textarea, Terms checkbox
- Validation states with helpful messaging

**Payments (Stripe/PayPal):**
- Checkout buttons on each pricing card
- Confirmation page after purchase
- Email confirmation sent to user

## Technical Requirements

**Mobile Responsive:** All sections stack appropriately, touch-friendly buttons, readable text sizes

**Accessibility:** Alt text on all images, WCAG contrast compliance, keyboard navigation, semantic HTML

**SEO:**
- Title: "JobJam — Job Coaching for First-Time Jobseekers in NZ"
- Meta description: "JobJam helps New Zealand's first-time jobseekers land their first role with coaching, interview training, CV help, and salary negotiation skills. 100% guarantee."

**Legal Pages:** Privacy Policy, Refund Policy, Guarantee Terms (linked from footer), Cookie consent notice

**Spacing & Rhythm:** Consistent vertical spacing (py-12 to py-20), max-w-6xl containers for content, generous whitespace for breathing room