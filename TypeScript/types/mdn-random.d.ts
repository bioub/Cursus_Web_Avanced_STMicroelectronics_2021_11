declare module 'mdn-random' {
  // export default any;
  export function getRandom(): number;
  export function getRandomArbitrary(min: number, max: number): number;
  export function getRandomInt(min: number, max: number): number;
  export function getRandomIntInclusive(min: number, max: number): number;
}
