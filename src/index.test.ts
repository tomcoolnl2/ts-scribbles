
import { ipToSeries, ipToInt32, ipsBetween } from './';

test('Simply convert an IP to an array of numbers with `ipToSeries`', () => {
    expect(ipToSeries('10.0.0.0')).toStrictEqual([10, 0, 0, 0])
})

test('Convert an IP to a decimal with `ipToInt32`', () => {
  expect(ipToInt32('192.168.0.1')).toStrictEqual(3232235521)
  expect(ipToInt32('10.0.0.50')).toStrictEqual(167772210)
  expect(ipToInt32('10.0.0.0')).toStrictEqual(167772160)
})

test('Calculate the number of IP adresses between 2 IP`s with `ipsBetween`', () => {
  expect(ipsBetween('10.0.0.0', '10.0.0.50')).toStrictEqual(50)
  expect(ipsBetween('10.0.0.50', '10.0.0.0')).toStrictEqual(50)
  expect(ipsBetween('20.0.0.10', '20.0.1.0')).toStrictEqual(246)
  expect(ipsBetween('20.0.1.0', '20.0.0.10')).toStrictEqual(246)
})
