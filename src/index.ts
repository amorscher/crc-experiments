import * as fs from 'fs';
import * as crc from 'crc';
import { fileURLToPath } from 'url';


const content = fs.readFileSync('./src/testfile.bin');


//hex
// console.log("FileContent Hex:"+content.toString('hex'));
fs.writeFileSync('./out.hex.txt',content.toString('hex'));
const hexContent = content.toString('hex');
const crcString  = crc.crc32(hexContent).toString(16);
console.log("CRC Hex Checksum:"+ crcString);


//buffer
const crcStringByte  = crc.crc32(content).toString(16);
// console.log("FileContent Rax:"+content);
fs.writeFileSync('./out.raw.txt',content);
console.log("CRC Buffer Checksum:"+ crcStringByte);


//buffer with crc-32
const crc32 = require("crc-32");
const byteArray = Uint8Array.from(content);
// console.log("FileContent ByteArray:"+byteArray);
fs.writeFileSync('./out.bytearry.txt',byteArray);
console.log("CRC Bytearray Checksum:"+crc32.buf(byteArray).toString(16));










