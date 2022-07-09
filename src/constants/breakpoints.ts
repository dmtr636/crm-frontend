const size = {
  tablet: '768px',
  laptop: '1366px',
  desktop: '1920px',
  desktopL: '2560px'
}

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`
};