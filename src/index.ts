
import { IpAsArray } from './model'

// 192.168.0.1 = 1 + (0 * 256) + (168 * 256 * 256) + (192 * 256 * 256 * 256) = 3232235521

function ipToArray(ip: string): IpAsArray {
    return ip.split('.') as IpAsArray
}

function ipToDecimal(ip: string): number {
    return ipToArray(ip).map((p, i) => 2)[0]
}


// function ipsBetween(ip1: string, ip2: string) {
//     let diff = 0;
//     const ip1range: IpAsArray = ip1.split(".");
//     const ip2range: IpAsArray = ip2.split(".");
  
//     for (let x = 0; x < 4; x += 1) {
//         diff += (ip1range[x] - ip2range[x]) * (256 * (3 - x));
//     }
//     return Math.abs(diff);
//   }

//, "10.0.0.50"
console.log(ipToDecimal("10.0.0.0"))