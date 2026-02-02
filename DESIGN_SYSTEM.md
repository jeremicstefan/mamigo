# Mamigo Marketing Design System

Single source of truth for the marketing site (Hero, Services, About, Contact). No raw hex or arbitrary font sizes in marketing components; use Tailwind tokens only.

## Colors

| Token | Value | Use |
|-------|--------|-----|
| `brand-100` | #F3EDE6 | Soft tint (badges, sections) |
| `brand-500` | #B19777 | Primary CTA, highlights, links |
| `brand-600` | #9C8164 | Hover / darker |
| `text-900` | #0B0B0B | Primary text |
| `text-600` | #5E5E5E | Secondary text |
| `surface-0` | #FFFFFF | Cards, page background |
| `surface-50` | #F6F6F6 | Alternate section background |
| `border-200` | #E6E6E6 | Borders |

## Typography

Use `text-ds-h1` through `text-ds-small` in marketing components.

| Token | Size | Line height | Weight |
|-------|------|-------------|--------|
| `ds-h1` | 2.5rem–3.5rem | 1.1 | 700 |
| `ds-h2` | 2rem–2.25rem | 1.2 | 700 |
| `ds-h3` | 1.25rem–1.5rem | 1.3 | 600 |
| `ds-body` | 1rem–1.125rem | 1.6 | 400 |
| `ds-small` | 0.8125rem–0.875rem | 1.5 | 400 |

## Spacing (8px grid)

Use `ds-*` for section padding and gaps: `ds-4`, `ds-6`, `ds-8`, `ds-12`, `ds-16`, `ds-20` (1rem through 5rem).

## Buttons

- All marketing CTAs use the `MarketingButton` component.
- Primary: `bg-brand-500`, hover `bg-brand-600`, white text, height 44–48px, `rounded-button` (12px).
- Secondary: transparent, `border border-border-200`, hover `bg-surface-50`, `text-text-900`.
- No arbitrary `className` overrides for size or color; use a `size` prop if needed.

## Radius & shadows

- `rounded-button`: 12px  
- `rounded-card`: 16px  
- `rounded-input`: 12px  
- `rounded-badge`: 9999px  
- `shadow-card` / `shadow-card-hover`: soft card shadows  

## Container

- `max-w-container`: 1280px, centered with `mx-auto px-4 sm:px-6 lg:px-8`.
