
import { throwInvalidIpv4, ipv4ToOctets, ipv4ToInt32, ipsBetween, int32ToIpv4 } from './';


describe('throwInvalidIpv4:', () => {

    it('throws an error when the input ipv4 is empty', () => {
        expect(() => throwInvalidIpv4('')).toThrow('UNDEFINED_IP')
    })

    it('throws an error when the input ipv4 is invalid', () => {
        expect(() => throwInvalidIpv4('1.2.3')).toThrow('INVALID_IP')
        expect(() => throwInvalidIpv4('5.4.3.2.1')).toThrow('INVALID_IP')
        expect(() => throwInvalidIpv4('22')).toThrow('INVALID_IP')
    })

    it('does not throw when th ipv4 is valid', () => {
        expect(() => throwInvalidIpv4('192.168.0.1')).not.toThrow()
    })
})

describe('ipv4ToOctets: ', () => {

    it('simply converts an IP to an array of 4 numbers', () => {
        expect(ipv4ToOctets('10.0.0.0')).toStrictEqual([10, 0, 0, 0])
    })
})

describe('ipv4ToInt32:', () => {
    
    it('converts an IP to a decimal', () => {
        expect(ipv4ToInt32('192.168.0.1')).toBe(3232235521)
        expect(ipv4ToInt32('10.0.0.50')).toBe(167772210)
        expect(ipv4ToInt32('10.0.0.0')).toBe(167772160)
    })
})

describe('ipsBetween:', () => {

    it('calculates the number of IP adresses between 2 IP\'s', () => {
        expect(ipsBetween('10.0.0.0', '10.0.0.50')).toBe(50)
        expect(ipsBetween('20.0.1.0', '20.0.0.10')).toBe(246)
    })

    it('always returns a positive number', () => {
        expect(ipsBetween('10.0.0.0', '10.0.0.50')).toBeGreaterThan(0)
        expect(ipsBetween('20.0.0.10', '20.0.1.0')).toBeGreaterThan(0)
    })
})

describe('int32ToIpv4:', () => {

    it('generates a valid ipv4 from a number', () => {
        expect(int32ToIpv4(2149583361)).toBe('128.32.10.1')
        expect(int32ToIpv4(32)).toBe('0.0.0.32')
        expect(int32ToIpv4(0)).toBe('0.0.0.0')
    })
})
