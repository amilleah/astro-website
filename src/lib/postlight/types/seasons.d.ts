/**
 * Gets the start date and time for the Astronomical season's start
 * The next nearest solstice/equinox is returned if the month index doesn't have one
 * The month index begins at 0, so January=0, February=1, and so on
 *
 * Which season each equinox or solstice represents the start of depends on your hemisphere
 *
 * Below calculations from Astronomical Algorithms, p.177-182
 */
export declare function getSeasonStart(monthIndex: number, year: number): Date;
export declare function getSeasonStartJulianDay(
  monthIndex: number,
  year: number,
): number;
export declare function getCurrentSeason(
  date: Date,
  isNorthernHemisphere?: boolean,
): string;
/**
 * Gets a list of all the seasons in a given year
 * Returns each season as a UTC date in order March to December
 *   [march-equinox, june-solstice, september-equinox, december-solstice]
 */
export declare function getSeasons(year: number): Date[];
declare const _default: {
  getSeasonStart: typeof getSeasonStart;
  getCurrentSeason: typeof getCurrentSeason;
  getSeasons: typeof getSeasons;
};
export default _default;
//# sourceMappingURL=seasons.d.ts.map
