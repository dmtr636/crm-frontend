const size = {
  tablet: 744,
  tabletL: 1024,
  laptop: 1366,
  desktop: 1920,
  desktopL: 2560
}

export const device = {
  phone: `(max-width: ${size.tablet - 1}px)`,
  tablet: `(min-width: ${size.tablet}px) and (max-width: ${size.tabletL - 1}px)`,
  tabletL: `(min-width: ${size.tabletL}px) and (max-width: ${size.laptop - 1}px)`,
  laptop: `(min-width: ${size.laptop}px) and (max-width: ${size.desktop - 1}px)`,
  desktop: `(min-width: ${size.desktop}px) and (max-width: ${size.desktopL - 1}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
};