# Cursor UI Clone

A pixel-perfect clone of the [Cursor](https://cursor.com) landing page, showcasing the AI-powered code editor's modern and sleek interface.

## 📋 Sections Recreated

### 1. **Navigation Header**

- Fixed navbar with Cursor logo
- Navigation links: Features, Examples, Pricing, Resources
- CTA buttons: "Sign in" (outline) and "Download" (primary)
- Sticky positioning with clean typography

### 2. **Hero Section**

- Main headline: "Built to make you extraordinarily productive, Cursor is the best way to code with AI."
- "Download for Windows" call-to-action button
- Hero showcase area

### 3. **Trusted Companies Section**

- "Trusted every day by millions of professional developers" subtitle
- Partner company logos including Stripe, OpenAI, Linear, Datadog, NVIDIA, Figma, Ramp, and Adobe

### 4. **Feature Cards**

- **Agent Card:** "Agent turns ideas into code" — highlighting the human-AI programmer experience
- **Autocomplete Card:** "Magically accurate autocomplete" — showcasing the custom Tab model
- **Ecosystem Card:** "Everywhere software gets built" — Cursor in GitHub, Slack, and beyond

### 5. **Testimonials Grid**

- 6 testimonial cards from industry leaders:
  - Diana Hu — General Partner, Y Combinator
  - shadcn — Creator of shadcn/ui
  - Andrej Karpathy — CEO, Eureka Labs
  - Patrick Collison — Co-Founder & CEO, Stripe
  - ThePrimeagen — @ThePrimeagen
  - Greg Brockman — President, OpenAI
- Each card includes avatar, name, title, and quote

### 6. **Models Section**

- "Stay on the frontier" heading
- 3 model cards showcasing access to cutting edge models from OpenAI, Anthropic, Gemini, and xAI
- "Explore models" links with card images

### 7. **Changelog Section**

- Recent changelog entries (v2.3, v2.4)
- Entries include version number, date, and description
- "See what's new in Cursor" link

### 8. **Call-to-Action Section**

- "Cursor is an applied team focused on building the future of coding."
- "Join Us" CTA button

### 9. **Recent Highlights Section**

- 3 highlight cards featuring blog posts:
  - Introducing Cursor 2.0 and Composer
  - Improving Cursor Tab with online RL
  - 1.5x faster MoE training with custom MXFP8 kernels
- Each card includes title, description, category, and date

### 10. **Try Now Section**

- "Try Cursor Now." headline
- "Download for Windows" CTA button

### 11. **Footer**

- 5-column footer navigation:
  - Product (Features, Enterprise, Web Agents, Bugbot, CLI, Pricing)
  - Resources (Download, Changelog, Docs, Learn, Forum, Status)
  - Company (Careers, Blog, Community, Workshops, Students, Brand)
  - Legal (Terms of Service, Privacy Policy, Data Use, Security)
  - Connect (X, LinkedIn, YouTube)
- Copyright information (© 2026 Cursor)
- SOC 2 certified badge
- Theme toggle (System, Light, Dark)
- Language selector (English, 简体中文, 日本語, 繁體中文)

---

## 🎨 Design System

### **Fonts**

- **Font Family:** `"CursorGothic"` (Custom font loaded via `@font-face`)
- **Font Variants:**
  - Regular
  - Italic
  - Bold
  - Bold Italic

### **Color Palette**

| Element                  | Color Code  | Usage                                   |
| ------------------------ | ----------- | --------------------------------------- |
| **Background**           | `#14120b`   | Main page background                    |
| **Text Primary**         | `#edecec`   | Body text, headings                     |
| **Background Secondary** | `#1b1913`   | Card backgrounds, secondary sections    |
| **Accent Color**         | `#F54E00`   | Links, highlights, interactive elements |
| **Text Muted**           | `#edecec99` | Captions, secondary text                |
| **Border Color**         | `#edecec`   | Subtle borders and separators           |
| **Button Dark**          | Dark tones  | Download and CTA buttons                |

### **Key Color Usage**

- **Orange Accent (`#F54E00`):** Used for:
  - "View more posts" link
  - Interactive hover states
  - Feature card links

- **Dark Background (`#14120b`):** Used for:
  - Main page background
  - Creating the dark, professional aesthetic

- **Secondary Background (`#1b1913`):** Used for:
  - Card backgrounds
  - Section differentiation

---

## 🎯 Design Features

- **Dark Theme:** Sleek dark UI matching Cursor's brand identity
- **Custom Typography:** CursorGothic font family for brand consistency
- **CSS Grid Layout:** Grid-based main section layout
- **Card Components:** Feature cards, testimonial cards, and model cards with clean design
- **Fixed Navigation:** Sticky navbar with backdrop effects
- **CSS Custom Properties:** Variables for consistent theming
- **Interactive Elements:** Hover effects on buttons and links

---

## 📁 File Structure

```
Cursor-UI/
├── index.html              # Main HTML structure
├── README.md               # This file
├── css/
│   ├── style.css           # Complete styling (546 lines)
│   └── cursor-gothic.css   # Custom font declarations
├── fonts/
│   ├── CursorGothic-Regular.woff2
│   ├── CursorGothic-Italic.woff2
│   ├── CursorGothic-Bold.woff2
│   └── CursorGothic-BoldItalic.woff2
└── assets/
    ├── LOCKUP_HORIZONTAL_2D_DARK.png   # Cursor logo
    ├── card-img.png
    ├── card-img-2.png
    ├── card-img-3.png
    ├── homepage-team-photo.jpg
    ├── stipe.svg
    ├── openai.svg
    ├── linear.svg
    ├── figma.svg
    ├── ramp.svg
    ├── adobe.svg
    ├── datadog.png
    ├── nvidia.png
    └── avatars/
        ├── diana-hu-avatar.png
        ├── shadcn-avatar.png
        ├── andrej-karpathy-avatar.png
        ├── patrick-collison-avatar.png
        ├── theprimeagen-avatar.png
        └── greg-brockman-avatar.jpg
```

---

## 🚀 Key Implementation Details

- **CSS Custom Properties:** `:root` variables for consistent theming across the project
- **CSS Grid:** Main section uses `grid-template-rows` for layout structure
- **Flexbox Layouts:** Responsive flex-based component layouts
- **Custom Fonts:** `@font-face` declarations for CursorGothic font family (woff2 format)
- **Fixed Positioning:** Navbar stays fixed at top with `z-index` layering
- **Semantic HTML:** Clean, well-structured HTML with proper sectioning elements

---

## 💡 Notes

This is a static HTML/CSS clone focusing on visual fidelity and modern design principles. It demonstrates:

- Professional dark-themed UI/UX design
- Modern CSS styling techniques (Grid, Flexbox, Custom Properties)
- Clean semantic HTML structure
- Custom font integration
- Component-based design patterns

**Created by:** Vivek Yadav  
**Created:** February 2026
