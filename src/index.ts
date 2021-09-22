
import { IpAsArray } from './model'

/**
 * Takes a IP as string, and rturns a series with 4 numbers
 * @param ip IP as string
 * @returns An array containing 4 numbers
 * @example '10.0.0.50' = [10, 0, 0, 50]
 */
export function ipToSeries(ip: string): IpAsArray {
    return ip.split('.').map(n => +n) as IpAsArray
}

/**
 * Takes a IP as string and converts it to 
 * @param ip A string, like '192.168.0.1'
 * @returns number
 * @example 192.168.0.1 = 1 + (0 * 256) + (168 * 256 * 256) + (192 * 256 * 256 * 256) = 3232235521
 */
export function ipToInt32(ip: string): number {
    return ipToSeries(ip).reduce((r, i) => (r * 256) + +i)
}

/**
 * Calculate the number of IP adresses between 2 IP's
 * @param ip1 IP as string
 * @param ip2 IP as string
 * @returns The number of IP adresses between
 * @example ipsBetween("10.0.0.0", "10.0.0.50") = 50
 */
export function ipsBetween(ip1: string, ip2: string): number {
    return Math.abs(ipToInt32(ip1) - ipToInt32(ip2))
}

// takes in a 32-bit unsigned integer and returns its equivalent ipv4 address