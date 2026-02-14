# Implementation Guide: High-Performance Expanding Menu with GSAP Flip

## 1. Project Context

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm
- **Animation Library:** GSAP (GreenSock Animation Platform)

## 2. Technical Approach

We will use the **GSAP Flip Plugin** technique. This is superior to standard CSS transitions for this specific UI because:

1.  **Layout Projection:** It eliminates layout thrashing when animating from `width: auto` (button) to `width: 300px` (menu).
2.  **Border Radius Interpolation:** It smoothly morphs the shape from a "Pill" (`rounded-full`) to a "Card" (`rounded-2xl` or similar).
3.  **Performance:** It calculates the start/end states and applies simple transforms, keeping the animation at 60fps.

## 3. Step-by-Step Implementation

### Step 1: Install Dependencies

Execute the following command to install GSAP and the official React hook helper.

```bash
pnpm add gsap @gsap/react

Step 2: Component Implementation
Create a new file: components/ExpandingMenu.tsx.

This component uses useGSAP for safe React integration and Flip for the layout transition.

TypeScript

'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import { X, Menu as MenuIcon } from 'lucide-react'; // Assuming lucide-react for icons

// Register plugins immediately
gsap.registerPlugin(Flip, useGSAP);

export default function ExpandingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    // 1. Record the Initial State
    // We capture the state of the container BEFORE any state updates change the DOM.
    const state = Flip.getState(containerRef.current);

    // 2. Update React State
    // This triggers a re-render, changing styles from "closed" to "open" instantly in the DOM.
    setIsOpen((prev) => !prev);

    // 3. Animate from Initial State (Flip)
    // We use the useGSAP hook to handle the animation lifecycle safely.
    // The animation logic is handled inside the useGSAP hook below, triggered by the dependency change.
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    // Retrieve the state saved in the custom property (see handleToggle below)
    const state = (containerRef.current as any)._flipState;
    if (!state) return;

    // Clear the saved state
    (containerRef.current as any)._flipState = null;

    const timeline = gsap.timeline();

    // FLIP Animation
    timeline.add(
      Flip.from(state, {
        targets: containerRef.current,
        duration: 0.6,
        ease: "power4.inOut", // "High-end" easing (slow start, fast middle, slow end)
        absolute: true, // Crucial: Takes element out of flow during flip to prevent layout jumps
        zIndex: 50,
        props: "borderRadius,backgroundColor", // Explicitly animate these props
        onStart: () => {
             // Optional: visual tweaks when starting
        }
      })
    );

    // Content Entry Animation (Staggered)
    if (isOpen && itemsRef.current) {
      timeline.fromTo(
        ".menu-link", // Target class name
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.4" // Overlap with the end of the Flip
      );
    }

  }, { dependencies: [isOpen], scope: containerRef }); // Scope is important for selector scoping

  // The wrapper to handle state capture before render
  const handleToggle = () => {
    if (containerRef.current) {
      // Save state directly to the DOM element property (or a ref) to access it inside useGSAP
      (containerRef.current as any)._flipState = Flip.getState(containerRef.current);
    }
    toggleMenu();
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <div
        ref={containerRef}
        onClick={handleToggle}
        className={`
          relative cursor-pointer overflow-hidden border border-white/10 backdrop-blur-md
          transition-colors duration-300
          ${isOpen
            ? 'w-[300px] bg-neutral-900/90 rounded-[20px] p-6' // Open Styles
            : 'w-auto h-12 bg-white/10 hover:bg-white/20 rounded-full px-5 flex items-center gap-3' // Closed Styles
          }
        `}
      >
        {/* Header / Toggle Row */}
        <div className={`flex items-center justify-between ${isOpen ? 'mb-8' : ''}`}>
          <span className={`text-sm font-medium text-white ${isOpen ? '' : 'mr-2'}`}>
            Menu
          </span>
          <div className="relative w-5 h-5 flex items-center justify-center">
             {/* Icon Morphing / Rotation */}
             <div className={`absolute transition-all duration-500 ${isOpen ? 'rotate-90 opacity-100' : 'rotate-0 opacity-0'}`}>
                <X size={20} color="white"/>
             </div>
             <div className={`absolute transition-all duration-500 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <MenuIcon size={20} color="white"/>
             </div>
          </div>
        </div>

        {/* Menu Items (Only rendered when open) */}
        {isOpen && (
          <div ref={itemsRef} className="flex flex-col gap-4">
            {['Projects', 'Agency', 'Expertise', 'Careers', 'Contact'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="menu-link text-2xl font-light text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
4. Key Technical Considerations for "High-End" Feel
The absolute: true Property
This is the secret sauce. When animating layout changes, especially from position: static (normal flow) to a larger size, surrounding elements might jump. absolute: true in Flip.from() temporarily forces the element to position: absolute during the animation, ensuring a silky smooth transition without affecting the document flow, then snaps it back (if needed) or keeps it seamless.

Easing Choice
Avoid linear or basic ease-in.

Recommended: power4.inOut or expo.inOut.

Why: It creates a "snappy" start and a very slow, elegant finish (friction feel), common in Apple/Vercel designs.

Handling Border Radius
Tailwind uses utility classes. Flip automatically detects the computed style change from rounded-full (9999px) to rounded-[20px] (20px) and interpolates the pixel value perfectly.
```
