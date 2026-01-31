# How to Update Your JobJam Website

This guide explains how to easily update the text, testimonials, and FAQs on your website.

## 1. Updating Testimonials
To change the success stories or add new ones:
- **File location:** `client/src/components/Testimonials.tsx`
- **What to do:** Look for the `testimonials` list at the top of the file. Each testimonial has a `name`, `role`, `image`, and `quote`. Just replace the text inside the quotation marks.

## 2. Updating Pricing & Courses
To change course prices, names, or features:
- **File location:** `client/src/components/PricingSection.tsx`
- **What to do:** Look for the `courses` list at the top. You can update the `name`, `price`, `description`, and the list of `features`.

## 3. Updating FAQs
To change the frequently asked questions:
- **File location:** `client/src/components/FAQ.tsx`
- **What to do:** Look for the `faqs` list at the top. Each item has a `question` and an `answer`.

## 4. Updating the "About" Section
To change Rohan's story or details:
- **File location:** `client/src/components/About.tsx`
- **What to do:** Edit the text inside the `<p>` tags in the middle of the file.

## 5. Updating Contact Information
To change the email address or contact details:
- **File location:** `client/src/components/Contact.tsx`
- **What to do:** Look for the email link (search for `hello@jobjam.co.nz`) and replace it with your new email.

---
**Note:** When editing, make sure to keep the text inside the quotation marks `""` or backticks ` `` ` to ensure the website continues to run smoothly.
