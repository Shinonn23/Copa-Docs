import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-docs or nextra-theme-blog

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
  };
}
