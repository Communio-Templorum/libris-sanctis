yodasws.page('annals').setRoute({
	template: 'pages/annals/annals.html',
	canonicalRoute: '/annals/',
	route: '/annals/?',
}).on('load', () => {
});

const lat = 35.227199;
const lon = -80.843088;
const pos = [lat, lon];

// TODO: Use Google Time Zone API: https://developers.google.com/maps/documentation/timezone/overview
const tzURL = `https://maps.googleapis.com/maps/api/timezone/json?location=${pos.join(',')}&timestamp=${Date.now()}&key=`;

const now = new Date('1 Jan 2010 12:00:00 -0700');
console.log('now:', now.toLocaleString());

const jd30Dec1899 = 2415018.5; // Dec 30, 1899
const UnixEpochOffset = 25569; // Days 31 Dec 1899 – 1 Jan 1970
const jd01Jan2000 = 2451545; // Jan 1, 2000
const JulianDay = jd30Dec1899 + UnixEpochOffset + now.valueOf() / 1000 / 60 / 60 / 24;
const JulianCentury = (JulianDay - jd01Jan2000) / 365.25 / 100;
console.log('Julian Day (F2):', JulianDay);
console.log('Julian Century (G2):', JulianCentury);

const g2 = JulianCentury;

const i2 = (280.46646 + JulianCentury * (36000.76983 + JulianCentury * 0.0003032)) % 360;
console.log('Geom Mean Long Sun (deg) (I2):', i2);

const j2 = 357.52911 + JulianCentury * (35999.05029 - 0.0001537 * JulianCentury);
console.log('Geom Mean Anom Sun (deg) (J2):', j2);

const k2 = 0.016708634 - JulianCentury * (0.00042037 + 0.0000001267 * JulianCentury);
console.log('Eccent Earth Orbit (K2):', k2);

const l2 = Math.sin(j2 * Math.PI / 180) * (1.914602 - g2 * (0.004817 + 0.000014 * g2))
	+ Math.sin(2 * j2 * Math.PI / 180) * (0.019993 - 0.000101 * g2)
	+ Math.sin(3 * j2 * Math.PI / 180) * 0.000289;
console.log('Sun Eq of Ctr (L2):', l2);

const m2 = i2 + l2;
console.log('Sun True Long (deg) (M2):', m2);

const n2 = j2 + l2;
console.log('Sun True Anom (deg) (N2):', n2);

const o2 = (1.000001018 * (1 - k2 * k2)) / (1 + k2 * Math.cos(n2 * Math.PI / 180));
console.log('Sun Rad Vector (AUs) (O2):', o2);

const p2 = m2 - 0.00569 - 0.00478 * Math.sin(125.04 - 1934.136 * g2)
console.log('Sun App Long (deg):', p2);

const q2 = 23 + (26 + (21.448 - g2 * (46.815 + g2 * (0.00059 - g2 * 0.001813))) / 60 ) / 60;
console.log('Mean Obliq Ecliptic (deg):', q2);

const r2 = q2 + 0.00256 * Math.cos(Math.PI / 180 * (125.04 - 1934.136 * g2));
console.log('Obliq Corr (deg):', r2);

const s2 = 180 / Math.PI * Math.atan2(Math.cos(Math.PI / 180 * r2) * Math.sin(Math.PI / 180 * p2), Math.cos(Math.PI / 180 * p2));
console.log('Sun Rt Ascen (deg):', s2);

const t2 = 180 / Math.PI * Math.asin(Math.sin(Math.PI / 180 * r2) * Math.sin(Math.PI / 180 * p2));
console.log('Sun Declin (deg):', t2);
