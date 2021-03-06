// import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     'a.gatsby-resp-image-link': {
//       boxShadow: `none`,
//     },
//     'a': {
//       color: `#3b9f56`
//     },
//     'h1.post-title': {
//       fontSize: `1.9rem`
//     }
//   }

// }

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   typography.injectStyles()
// }

// export default typography
// export const rhythm = typography.rhythm
// export const scale = typography.scale
import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale