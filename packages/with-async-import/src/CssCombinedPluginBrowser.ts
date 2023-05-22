export const getCombinedCss = (modulePath: string) => `.combined_css_${modulePath} {}`

export type CssModule = {
  default: string
}

export const getCombinedCssPromise = (modulePath: string) => Promise.resolve({default: `.combined_css_${modulePath} {}`})
