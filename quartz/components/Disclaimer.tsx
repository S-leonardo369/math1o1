import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Disclaimer — renders a short note at the bottom of every post
 * reminding readers these are personal notes, not a textbook replacement.
 * Styled via the .post-disclaimer class in custom.scss.
 */
const Disclaimer: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="post-disclaimer">
      These notes are for understanding concepts only and are not a replacement for your
      textbook or school classes.
    </div>
  )
}

export default (() => Disclaimer) satisfies QuartzComponentConstructor
