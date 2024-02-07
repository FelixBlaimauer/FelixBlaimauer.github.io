import { twJoin } from 'tailwind-merge';
import type { ClassProps } from '../../interfaces/ClassProps';

interface GradientBackgroundProps extends ClassProps {
  color: string;
}

function hexToHsv(hex: string): { h: number; s: number; v: number } | null {
  // Check if the provided hex color has the correct format
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const match = hex.match(hexRegex);

  if (!match) {
    console.error('Invalid hex color format');
    return null;
  }

  // Extract RGB values from the hex color
  const red = parseInt(match[1], 16) / 255;
  const green = parseInt(match[2], 16) / 255;
  const blue = parseInt(match[3], 16) / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let h = 0;
  let s = 0;
  const v = max;

  const delta = max - min;

  // Calculate the hue (H)
  if (delta !== 0) {
    if (max === red) {
      h = ((green - blue) / delta) % 6;
    } else if (max === green) {
      h = (blue - red) / delta + 2;
    } else {
      h = (red - green) / delta + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  // Calculate the saturation (S)
  s = max === 0 ? 0 : delta / max;

  return { h, s, v };
}

function hsvToRgba(
  hsv: { h: number; s: number; v: number },
  alpha: number,
): string {
  const { h, s, v } = hsv;

  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
  } else if (h >= 120 && h < 180) {
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ({ class: className, color }: GradientBackgroundProps) {
  const hsv = hexToHsv(color);
  const inner = hsv ? { ...hsv, v: hsv?.v * 1.2 } : null;
  const outer = hsv ? { ...hsv, v: hsv?.v * 0.8 } : null;

  return (
    hsv &&
    inner &&
    outer && (
      <div
        id="gradient-background"
        class={twJoin(
          'absolute -top-2 -z-10 h-[65vh] w-full opacity-70 sm:h-[42rem] sm:opacity-100',
          className,
        )}
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, ${hsvToRgba(
            inner,
            0.5,
          )} 0%, ${hsvToRgba(hsv, 0.45)} 20%, ${hsvToRgba(outer, 0)} 100%)`,
        }}
      ></div>
    )
  );
}
