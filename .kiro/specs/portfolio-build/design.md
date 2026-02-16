# Design System Analysis - m1ke.co

## Overview
This document captures the existing design patterns, styling conventions, and component structure of the m1ke.co website to ensure consistency during the portfolio transformation.

---

## Color Scheme

### Primary Colors
- **Background**: `bg-black` (pure black)
- **Text Primary**: `text-white`
- **Text Secondary**: `text-gray-200`
- **Text Tertiary**: `text-gray-400`

### Accent Colors
- **Primary Accent**: `text-purple-500`, `text-purple-400`, `text-purple-300`
- **Borders**: `border-purple-500/60` (with opacity)
- **Hover States**: `hover:text-purple-100`, `hover:text-purple-400`

### Semantic Colors
- Purple gradient/vaporwave aesthetic
- Sepia filter effects on images

---

## Typography

### Font Families
- **Display Font**: `font-offbit-dots` (custom font for name)
- **Body Font**: System default (not explicitly defined)

### Font Sizes
- **Hero Name**: `text-4xl sm:text-5xl` (responsive)
- **Subtitle**: `text-md sm:text-lg`
- **Body Text**: `text-md`
- **Small Text**: `text-sm`
- **Section Headers**: `text-lg font-bold`

### Font Weights
- **Extra Bold**: `font-extrabold` (hero name)
- **Bold**: `font-bold` (section headers)
- **Semibold**: `font-semibold` (subtitles)
- **Regular**: Default

---

## Spacing System

### Container
- **Max Width**: `max-w-6xl`
- **Horizontal Padding**: `px-4`
- **Vertical Padding**: `pb-8`

### Gaps
- **Large Gap**: `gap-8`
- **Medium Gap**: `gap-4`
- **Small Gap**: `gap-1`, `gap-2`

### Margins
- **Section Spacing**: `space-y-12`
- **Top Margin**: `mt-2 sm:mt-12` (responsive)
- **Negative Margin**: `-mt-2 sm:mt-0`

### Padding
- **Top Padding**: `pt-12`
- **Sticky Element**: `top-8`

---

## Layout Patterns

### Grid System
- **Main Grid**: `grid gap-8`
- **Responsive**: Mobile-first approach with `sm:` breakpoints

### Flexbox Patterns
- **Horizontal Layout**: `flex items-center gap-8`
- **Vertical Layout**: `flex flex-col justify-center`

### Responsive Breakpoints
- **Mobile**: Default (no prefix)
- **Small**: `sm:` (640px+)
- Hidden on mobile: `hidden sm:block`
- Hidden on desktop: `sm:hidden`

---

## Component Patterns

### Avatar/Image
```tsx
<Image
  src="..."
  alt="..."
  width={180}
  height={180}
  className="rounded-lg border-3 border-purple-500/60"
  style={{ filter: `sepia(100%) saturate(175%) brightness(95%) hue-rotate(222deg)` }}
/>
```

### Section Structure
```tsx
<div className="space-y-12">
  {/* Section content */}
</div>
```

### Links/Buttons
- **Base**: `text-purple-300`
- **Hover**: `hover:text-purple-100`
- **Transition**: `transition-all duration-250`

### Icons
- **Size**: `h-5.5 w-5.5`, `h-6 w-6`
- **Spacing**: `mr-1` for icon-text combinations

---

## Animation & Transitions

### Transition Durations
- **Fast**: `duration-250`
- **Medium**: `duration-500`

### Hover Effects
- Color transitions on links
- Opacity changes
- Width animations (arrow indicators)

### Backdrop Effects
- `backdrop-blur-md backdrop-filter blur-md`

---

## Component Inventory

### Existing Components
1. **Banner** (`~/components/ui/banner`)
   - Vaporwave variant
   - Configurable height

2. **WorkSection** (`~/components/work`)
   - Work experience display

3. **ProjectSection** (`~/components/project`)
   - Project showcase

4. **EducationSection** (`~/components/education`)
   - Education history

5. **AwardSection** (`~/components/award`)
   - Honors and awards

6. **UI Components**:
   - Separator
   - ScrollArea
   - Icons (Send, Github, Linkedin)

### Component Structure Pattern
- Sections are self-contained
- Data likely stored in separate files
- Components imported from `~/components/`

---

## Accessibility Patterns

### Image Alt Text
- Descriptive alt attributes on images

### Semantic HTML
- Proper use of nav, section elements

### Interactive Elements
- Proper link structure with href attributes
- Icon buttons with accessible labels

---

## Styling Conventions

### Class Ordering Pattern
1. Layout (flex, grid)
2. Spacing (gap, margin, padding)
3. Sizing (width, height)
4. Typography (text size, weight, color)
5. Borders
6. Effects (transitions, filters)
7. Responsive modifiers

### Naming Conventions
- Utility-first approach (Tailwind)
- No custom CSS classes in main page
- Component-specific styles in component files

---

## Key Design Principles

1. **Minimalism**: Clean, uncluttered layout
2. **Dark Theme**: Black background with purple accents
3. **Responsive**: Mobile-first with desktop enhancements
4. **Vaporwave Aesthetic**: Purple gradients, retro filters
5. **Typography-Focused**: Clear hierarchy, readable text
6. **Subtle Animations**: Smooth transitions, no heavy effects

---

## Notes for Transformation

### Must Preserve
- Black background with purple accent scheme
- Vaporwave banner aesthetic
- Responsive layout patterns
- Typography hierarchy
- Transition durations and effects

### Can Modify
- Content within sections
- Section order (with care)
- Add new sections following existing patterns

### Should Avoid
- Introducing new color schemes
- Heavy animations or effects
- Breaking responsive patterns
- Changing core layout structure
