
import { IpAsOctets } from './model'

// eslint-ignore-next-line
const ipv4RexExp = /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/

export function throwInvalidIpv4(ip: string): void {

	if (!ip) {
		throw new Error('UNDEFINED_IP')
	}

	if (!ipv4RexExp.test(ip)) {
		throw new Error('INVALID_IP')
	}
}

/**
 * Takes a IP as string, and rturns a series with 4 numbers
 * @param ip IP as string
 * @returns An array containing 4 numbers
 * @example '10.0.0.50' = [10, 0, 0, 50]
 */
export function ipv4ToOctets(ip: string): IpAsOctets {
	throwInvalidIpv4(ip)
	return ip.split('.').map(n => +n) as IpAsOctets
}

/**
 * Takes a IP as string and converts it to
 * @param ip A string, like '192.168.0.1'
 * @returns number
 * @example 192.168.0.1 = 1 + (0 * 256) + (168 * 256 * 256) + (192 * 256 * 256 * 256) = 3232235521
 */
export function ipv4ToInt32(ip: string): number {
	throwInvalidIpv4(ip)
	return ipv4ToOctets(ip).reduce((ipInt, octet) => (ipInt * 256) + +octet)
}

/**
 * Calculate the number of IP adresses between 2 IP's
 * @param ip1 IP as string
 * @param ip2 IP as string
 * @returns The number of IP adresses between
 * @example ipsBetween("10.0.0.0", "10.0.0.50") = 50
 */
export function ipsBetween(ip1: string, ip2: string): number {
	return Math.abs(ipv4ToInt32(ip1) - ipv4ToInt32(ip2))
}

/**
 * Takes in a 32-bit unsigned integer and returns its equivalent ipv4 address
 * @param int32
 * @returns
 */
export function int32ToIpv4(int32: number): string {
	return [int32 >>> 24 & 0xFF, int32 >>> 16 & 0xFF, int32 >>> 8 & 0xFF, int32 & 0xFF].join('.')
}

