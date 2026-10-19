# Horizontal Carousels & Sliders for Skills and Projects

Transform the vertical grid layouts of the **Selected Projects** and **Skills & Technologies** sections into sleek, accessible, responsive horizontal carousels equipped with smooth navigation arrows, touch-drag gestures, visual pagination indicators, and fluid category transitions.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following requirements were confirmed via interactive clarification:
> - **Projects Section**: Interactive carousel with previous/next navigation arrow buttons, pagination indicator, and project modal expansion.
> - **Skills Section**: Horizontal categorized slider with category filtering and navigation arrow buttons.
> - **Navigation & Gestures**: Both tactile arrow buttons and smooth touch/mouse drag-scroll gestures across all devices.

- **Confirmed Decision 1**: Projects carousel will display high-impact showcase cards along an animated horizontal track with slide controls, progress indicator (`01 / 03`), and quick modal view triggers.
- **Confirmed Decision 2**: Skills section will retain the category filter tabs (`all`, `frontend`, `backend`, `database`, `tools`) while rendering skill cards in a horizontally scrollable track with arrow buttons and grab-to-scroll interactivity.
- **Confirmed Decision 3**: Touch-friendly swipe and mouse drag gesture support powered by Framer Motion and CSS scroll snap for buttery-smooth 60fps performance without layout shifting.

---

## 1. Overview & Core Concept

- **What It Does**: Replaces the lengthy vertical card stacks in the Projects and Skills sections with space-efficient horizontal sliding rails. Users can seamlessly browse through Ahmed's full-stack projects and skill stacks using interactive navigation buttons, pagination dots, mouse dragging, or mobile swipe gestures.
- **Target Audience**: Recruiters, engineering managers, and clients viewing the portfolio across desktop monitors, tablets, and smartphones who want a modern, interactive, and uncluttered presentation of portfolio artifacts.
- **Key Value**: Drastically reduces vertical page scroll fatigue, increases engagement with interactive tactile controls, and provides a polished, modern tech showcase experience.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Browsing Projects**:
   - The user scrolls to `#projects` and sees the active project slide with prominent visual preview, tech stack, and description.
   - The user clicks the **Next** arrow button (or swipes left on touch / drags on desktop) to smoothly glide to the next project.
   - Pagination dots and an active numerical index (`01 / 03`) update smoothly.
   - Clicking **"View Project"** opens the comprehensive architectural deep-dive modal, while **"GitHub"** navigates to source code.
2. **Exploring Skills by Category**:
   - The user scrolls to `#skills` and sees skill cards aligned on a horizontal track.
   - The user can click any category filter tab (`all`, `frontend`, `backend`, etc.) to instantly filter cards.
   - The user uses the left/right arrow controls or drags horizontally to inspect specific technologies, badges, and technical tags.

### Visual Identity & Theme
- **Color Palette & Contrast**:
  - Dark Mode: Primary canvas `#080B12`, card background `#0F1523`, subtle borders `rgba(255, 255, 255, 0.08)`, and electric accent blue `#4F8CFF` + violet `#8B5CF6`.
  - Light Mode: Neutral canvas `#F8FAFC`, white cards `#FFFFFF`, borders `#CBD5E1`, and vivid blue `#2563EB`.
- **Typography & Scale**:
  - Display Headers: `Plus Jakarta Sans`, tight tracking, balanced line breaks (`text-wrap: balance`).
  - Monospace Data / Indexes: `JetBrains Mono` with `tabular-nums` for slide counters (`01 / 03`).
- **Interactive Feedback & Motion**:
  - Spring-damped slider transitions (`stiffness: 300, damping: 30`) preventing jarring stops.
  - Hover micro-interactions on arrows: subtle scale (`scale: 1.08`) and illuminated accent border glow.
  - Touch and mouse cursor states (`cursor-grab` active into `cursor-grabbing`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Carousel Architecture for Projects**
  - *Chosen Approach*: Index-driven animated slider with Framer Motion `AnimatePresence` and horizontal gesture physics.
  - *Why*: Allows crisp slide transitions with customizable slide layouts, active indicators, and keyboard accessibility (arrow keys) without causing overflow issues.
  - *Alternatives Considered*: Native CSS scroll-snap rail only. (Passed over because it lacks fluid programmatic slide transitions, animated numerical counters, and custom next/prev button synchronization).

- **Decision 2: Horizontal Rail for Skills**
  - *Chosen Approach*: Track-based horizontal scroll with CSS scroll-snap (`snap-x snap-mandatory`) plus programmatic scroll controls (`scrollBy` with smooth behavior) and Framer Motion layout animations when filtering categories.
  - *Why*: Allows continuous fluid scanning of multiple skill cards side-by-side on desktop while maintaining native touch swipe on mobile and arrow button jumps.
  - *Alternatives Considered*: Single-item paginated carousel. (Passed over because users want to view multiple related tech stack skills at once without clicking through 8 individual slides).

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                        App.jsx                         │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────────┐ ┌───────────────────────────┐
│       Projects.jsx        │ │        Skills.jsx         │
│ ┌───────────────────────┐ │ │ ┌───────────────────────┐ │
│ │ Carousel Header & Nav │ │ │ │ Category Tabs + Arrows│ │
│ │ (Index, Prev/Next)    │ │ │ └───────────┬───────────┘ │
│ └───────────┬───────────┘ │ │             │             │
│             ▼             │ │             ▼             │
│ ┌───────────────────────┐ │ │ ┌───────────────────────┐ │
│ │ Framer Motion Track   │ │ │ │ Horizontal Snap Track │ │
│ │ - Active Project Card │ │ │ │ - Skill Cards (Flex)  │ │
│ │ - Drag / Swipe Gestures │ │ │ - Drag & Smooth Scroll│ │
│ └───────────┬───────────┘ │ │ └───────────────────────┘ │
│             ▼             │ └───────────────────────────┘
│ ┌───────────────────────┐ │
│ │ ProjectModal.jsx      │ │
│ └───────────────────────┘ │
└───────────────────────────┘
```

### Interactive Component & State Mapping
- `Projects.jsx`:
  - `activeProjectIndex`: tracks current slide ($0$ to $\text{PROJECTS.length} - 1$).
  - `handleNext()` / `handlePrev()`: cyclical or bounded navigation with disabled arrow states.
  - `dragConstraints` / `onDragEnd`: swipe threshold ($\pm 50\text{px}$) detects left/right swipes to advance or rewind slides.
  - `selectedProject`: opens existing detailed `ProjectModal` on demand.
- `Skills.jsx`:
  - `selectedCategory`: filters skills data between `all`, `frontend`, `backend`, `database`, `tools`.
  - `trackRef`: DOM reference to horizontal scrollable container.
  - `scrollTrack(direction)`: scrolls by card step width with smooth behavior.
  - `canScrollLeft` / `canScrollRight`: tracks scroll position via listener to update arrow button disabled/enabled appearance.

---

## 5. Step-by-Step Implementation Plan

1. **Update `src/components/Projects.jsx`**:
   - Re-architect container into an interactive horizontal carousel with prominent left/right chevron navigation buttons and active slide indicators (`01 / 03` counter + pill indicator dots).
   - Add responsive layout where active slide features a 2-column or wide split layout (thumbnail on left/top, detailed copy, tags, and action buttons on right/bottom).
   - Integrate drag gesture listeners (`onDragEnd`) with velocity and offset checks for tactile mobile swiping and desktop mouse dragging.
   - Maintain full connectivity with `ProjectModal.jsx` and GitHub external links.

2. **Update `src/components/Skills.jsx`**:
   - Refactor grid into a horizontal scrolling rail container with custom hidden scrollbars, snap points (`snap-start`), and smooth scroll physics.
   - Add dedicated left and right navigation arrow buttons next to the category filter bar or track.
   - Wire scroll listeners to enable/disable arrow buttons based on scroll bounds.
   - Format cards with consistent horizontal dimensions (`w-[280px]` to `w-[320px]`), ensuring clean card hierarchy with icon, badge, description, and footer tags.

3. **Verify Build & Polish**:
   - Verify layout responsiveness across desktop (1440px), tablet (768px), and mobile (375px).
   - Ensure WCAG accessibility: keyboard navigation on controls, visible focus rings, and proper ARIA labels.
   - Run compilation and lint validation to guarantee error-free deployment.
