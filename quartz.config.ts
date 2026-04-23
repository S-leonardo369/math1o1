import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Math101",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "math101.pages.dev", // update after Cloudflare deploy
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // DM Serif Display only ships in weight 400 (regular + italic)
        header: { name: "DM Serif Display", weights: [400], includeItalic: true },
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FAF8F5",      // warm parchment off-white
          lightgray: "#E3D9D1",  // borders, dividers
          gray: "#9A8C85",       // text-muted, placeholders
          darkgray: "#6B5E57",   // text-secondary, captions
          dark: "#2A201C",       // text-primary, headings
          secondary: "#0C7075",  // teal accent
          tertiary: "#5BB3B7",   // accent-mid (graph edges, badges)
          highlight: "rgba(12, 112, 117, 0.10)",
          textHighlight: "#D6EFEF88",
        },
        darkMode: {
          light: "#252019",      // bg-surface (sidebars, panels)
          lightgray: "#352E28",  // borders
          gray: "#6E6460",       // text-muted
          darkgray: "#A89E96",   // text-secondary
          dark: "#EDE8E2",       // text-primary
          secondary: "#4BBFC4",  // teal accent (dark)
          tertiary: "#2A8F93",   // accent-mid (dark)
          highlight: "rgba(75, 191, 196, 0.12)",
          textHighlight: "#1A333588",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
