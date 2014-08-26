//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 396;
    }
if (index == 1) {
     return 352;
    }
if (index == 2) {
     return 338;
    }
if (index == 3) {
     return 311;
    }
if (index == 4) {
     return 298;
    }
if (index == 5) {
     return 309;
    }
if (index == 6) {
     return 313;
    }
if (index == 7) {
     return 519;
    }
if (index == 8) {
     return 312;
    }
if (index == 9) {
     return 320;
    }
if (index == 10) {
     return 322;
    }
if (index == 11) {
     return 345;
    }
if (index == 12) {
     return 321;
    }
if (index == 13) {
     return 308;
    }
if (index == 14) {
     return 322;
    }
if (index == 15) {
     return 316;
    }
if (index == 16) {
     return 324;
    }
if (index == 17) {
     return 316;
    }
if (index == 18) {
     return 292;
    }
if (index == 19) {
     return 316;
    }
if (index == 20) {
     return 318;
    }
if (index == 21) {
     return 323;
    }
if (index == 22) {
     return 319;
    }
if (index == 23) {
     return 328;
    }
if (index == 24) {
     return 295;
    }
if (index == 25) {
     return 316;
    }
if (index == 26) {
     return 324;
    }
if (index == 27) {
     return 327;
    }
if (index == 28) {
     return 309;
    }
if (index == 29) {
     return 321;
    }
if (index == 30) {
     return 323;
    }
if (index == 31) {
     return 319;
    }
if (index == 32) {
     return 311;
    }
if (index == 33) {
     return 323;
    }
if (index == 34) {
     return 295;
    }
if (index == 35) {
     return 537;
    }
if (index == 36) {
     return 303;
    }
if (index == 37) {
     return 312;
    }
if (index == 38) {
     return 317;
    }
if (index == 39) {
     return 319;
    }
if (index == 40) {
     return 315;
    }
if (index == 41) {
     return 319;
    }
if (index == 42) {
     return 310;
    }
if (index == 43) {
     return 322;
    }
if (index == 44) {
     return 310;
    }
if (index == 45) {
     return 328;
    }
if (index == 46) {
     return 285;
    }
if (index == 47) {
     return 306;
    }
if (index == 48) {
     return 325;
    }
if (index == 49) {
     return 325;
    }
if (index == 50) {
     return 324;
    }
if (index == 51) {
     return 322;
    }
if (index == 52) {
     return 319;
    }
if (index == 53) {
     return 324;
    }
if (index == 54) {
     return 325;
    }
if (index == 55) {
     return 318;
    }
if (index == 56) {
     return 332;
    }
if (index == 57) {
     return 333;
    }
if (index == 58) {
     return 325;
    }
if (index == 59) {
     return 330;
    }
if (index == 60) {
     return 315;
    }
if (index == 61) {
     return 329;
    }
if (index == 62) {
     return 531;
    }
if (index == 63) {
     return 321;
    }
if (index == 64) {
     return 329;
    }
if (index == 65) {
     return 327;
    }
if (index == 66) {
     return 318;
    }
if (index == 67) {
     return 323;
    }
if (index == 68) {
     return 326;
    }
if (index == 69) {
     return 320;
    }
if (index == 70) {
     return 323;
    }
if (index == 71) {
     return 325;
    }
if (index == 72) {
     return 322;
    }
if (index == 73) {
     return 313;
    }
if (index == 74) {
     return 320;
    }
if (index == 75) {
     return 319;
    }
if (index == 76) {
     return 315;
    }
if (index == 77) {
     return 332;
    }
if (index == 78) {
     return 328;
    }
if (index == 79) {
     return 326;
    }
if (index == 80) {
     return 322;
    }
if (index == 81) {
     return 325;
    }
if (index == 82) {
     return 525;
    }
if (index == 83) {
     return 334;
    }
if (index == 84) {
     return 332;
    }
if (index == 85) {
     return 328;
    }
if (index == 86) {
     return 308;
    }
if (index == 87) {
     return 325;
    }
if (index == 88) {
     return 317;
    }
if (index == 89) {
     return 329;
    }
if (index == 90) {
     return 318;
    }
if (index == 91) {
     return 340;
    }
if (index == 92) {
     return 526;
    }
if (index == 93) {
     return 312;
    }
if (index == 94) {
     return 317;
    }
if (index == 95) {
     return 327;
    }
if (index == 96) {
     return 317;
    }
if (index == 97) {
     return 322;
    }
if (index == 98) {
     return 312;
    }
if (index == 99) {
     return 322;
    }
if (index == 100) {
     return 298;
    }
if (index == 101) {
     return 312;
    }
if (index == 102) {
     return 319;
    }
if (index == 103) {
     return 328;
    }
if (index == 104) {
     return 319;
    }
if (index == 105) {
     return 325;
    }
if (index == 106) {
     return 320;
    }
if (index == 107) {
     return 317;
    }
if (index == 108) {
     return 314;
    }
if (index == 109) {
     return 312;
    }
if (index == 110) {
     return 321;
    }
if (index == 111) {
     return 322;
    }
if (index == 112) {
     return 316;
    }
if (index == 113) {
     return 334;
    }
if (index == 114) {
     return 319;
    }
if (index == 115) {
     return 335;
    }
if (index == 116) {
     return 321;
    }
if (index == 117) {
     return 331;
    }
if (index == 118) {
     return 520;
    }
if (index == 119) {
     return 325;
    }
if (index == 120) {
     return 321;
    }
if (index == 121) {
     return 339;
    }
if (index == 122) {
     return 324;
    }
if (index == 123) {
     return 335;
    }
if (index == 124) {
     return 312;
    }
if (index == 125) {
     return 325;
    }
if (index == 126) {
     return 321;
    }
if (index == 127) {
     return 332;
    }
if (index == 128) {
     return 328;
    }
if (index == 129) {
     return 336;
    }
if (index == 130) {
     return 522;
    }
if (index == 131) {
     return 325;
    }
if (index == 132) {
     return 331;
    }
if (index == 133) {
     return 319;
    }
if (index == 134) {
     return 311;
    }
if (index == 135) {
     return 336;
    }
if (index == 136) {
     return 301;
    }
if (index == 137) {
     return 335;
    }
if (index == 138) {
     return 326;
    }
if (index == 139) {
     return 327;
    }
if (index == 140) {
     return 331;
    }
if (index == 141) {
     return 335;
    }
if (index == 142) {
     return 526;
    }
if (index == 143) {
     return 325;
    }
if (index == 144) {
     return 327;
    }
if (index == 145) {
     return 345;
    }
if (index == 146) {
     return 327;
    }
if (index == 147) {
     return 333;
    }
if (index == 148) {
     return 328;
    }
if (index == 149) {
     return 332;
    }
if (index == 150) {
     return 322;
    }
if (index == 151) {
     return 330;
    }
if (index == 152) {
     return 327;
    }
if (index == 153) {
     return 328;
    }
if (index == 154) {
     return 322;
    }
if (index == 155) {
     return 325;
    }
if (index == 156) {
     return 316;
    }
if (index == 157) {
     return 325;
    }
if (index == 158) {
     return 526;
    }
if (index == 159) {
     return 325;
    }
if (index == 160) {
     return 329;
    }
if (index == 161) {
     return 328;
    }
if (index == 162) {
     return 326;
    }
if (index == 163) {
     return 328;
    }
if (index == 164) {
     return 329;
    }
if (index == 165) {
     return 331;
    }
if (index == 166) {
     return 330;
    }
if (index == 167) {
     return 327;
    }
if (index == 168) {
     return 331;
    }
if (index == 169) {
     return 325;
    }
if (index == 170) {
     return 331;
    }
if (index == 171) {
     return 325;
    }
if (index == 172) {
     return 330;
    }
if (index == 173) {
     return 340;
    }
if (index == 174) {
     return 316;
    }
if (index == 175) {
     return 340;
    }
if (index == 176) {
     return 316;
    }
if (index == 177) {
     return 343;
    }
if (index == 178) {
     return 526;
    }
if (index == 179) {
     return 325;
    }
if (index == 180) {
     return 319;
    }
if (index == 181) {
     return 345;
    }
if (index == 182) {
     return 318;
    }
if (index == 183) {
     return 340;
    }
if (index == 184) {
     return 316;
    }
if (index == 185) {
     return 339;
    }
if (index == 186) {
     return 323;
    }
if (index == 187) {
     return 344;
    }
if (index == 188) {
     return 326;
    }
if (index == 189) {
     return 334;
    }
if (index == 190) {
     return 324;
    }
if (index == 191) {
     return 336;
    }
if (index == 192) {
     return 327;
    }
if (index == 193) {
     return 335;
    }
if (index == 194) {
     return 326;
    }
if (index == 195) {
     return 331;
    }
if (index == 196) {
     return 309;
    }
if (index == 197) {
     return 316;
    }
if (index == 198) {
     return 324;
    }
if (index == 199) {
     return 334;
    }
if (index == 200) {
     return 327;
    }
if (index == 201) {
     return 329;
    }
if (index == 202) {
     return 524;
    }
if (index == 203) {
     return 316;
    }
if (index == 204) {
     return 318;
    }
if (index == 205) {
     return 327;
    }
if (index == 206) {
     return 316;
    }
if (index == 207) {
     return 321;
    }
if (index == 208) {
     return 325;
    }
if (index == 209) {
     return 324;
    }
if (index == 210) {
     return 325;
    }
if (index == 211) {
     return 330;
    }
if (index == 212) {
     return 325;
    }
if (index == 213) {
     return 333;
    }
if (index == 214) {
     return 309;
    }
if (index == 215) {
     return 321;
    }
if (index == 216) {
     return 339;
    }
if (index == 217) {
     return 321;
    }
if (index == 218) {
     return 526;
    }
if (index == 219) {
     return 321;
    }
if (index == 220) {
     return 318;
    }
if (index == 221) {
     return 322;
    }
if (index == 222) {
     return 320;
    }
if (index == 223) {
     return 327;
    }
if (index == 224) {
     return 320;
    }
if (index == 225) {
     return 322;
    }
if (index == 226) {
     return 320;
    }
if (index == 227) {
     return 321;
    }
if (index == 228) {
     return 333;
    }
if (index == 229) {
     return 321;
    }
if (index == 230) {
     return 335;
    }
if (index == 231) {
     return 321;
    }
if (index == 232) {
     return 325;
    }
if (index == 233) {
     return 327;
    }
if (index == 234) {
     return 303;
    }
if (index == 235) {
     return 320;
    }
if (index == 236) {
     return 522;
    }
if (index == 237) {
     return 321;
    }
if (index == 238) {
     return 322;
    }
if (index == 239) {
     return 324;
    }
if (index == 240) {
     return 526;
    }
if (index == 241) {
     return 321;
    }
if (index == 242) {
     return 321;
    }
if (index == 243) {
     return 300;
    }
if (index == 244) {
     return 526;
    }
if (index == 245) {
     return 321;
    }
if (index == 246) {
     return 311;
    }
if (index == 247) {
     return 319;
    }
if (index == 248) {
     return 521;
    }
if (index == 249) {
     return 321;
    }
if (index == 250) {
     return 308;
    }
if (index == 251) {
     return 326;
    }
if (index == 252) {
     return 320;
    }
if (index == 253) {
     return 329;
    }
if (index == 254) {
     return 320;
    }
if (index == 255) {
     return 321;
    }
if (index == 256) {
     return 322;
    }
if (index == 257) {
     return 331;
    }
if (index == 258) {
     return 320;
    }
if (index == 259) {
     return 321;
    }
if (index == 260) {
     return 316;
    }
if (index == 261) {
     return 334;
    }
if (index == 262) {
     return 319;
    }
if (index == 263) {
     return 308;
    }
if (index == 264) {
     return 315;
    }
if (index == 265) {
     return 320;
    }
if (index == 266) {
     return 321;
    }
if (index == 267) {
     return 327;
    }
if (index == 268) {
     return 313;
    }
if (index == 269) {
     return 325;
    }
if (index == 270) {
     return 310;
    }
if (index == 271) {
     return 311;
    }
if (index == 272) {
     return 319;
    }
if (index == 273) {
     return 322;
    }
if (index == 274) {
     return 309;
    }
if (index == 275) {
     return 324;
    }
if (index == 276) {
     return 307;
    }
if (index == 277) {
     return 316;
    }
if (index == 278) {
     return 307;
    }
if (index == 279) {
     return 320;
    }
if (index == 280) {
     return 319;
    }
if (index == 281) {
     return 324;
    }
if (index == 282) {
     return 321;
    }
if (index == 283) {
     return 333;
    }
if (index == 284) {
     return 320;
    }
if (index == 285) {
     return 336;
    }
if (index == 286) {
     return 320;
    }
if (index == 287) {
     return 329;
    }
if (index == 288) {
     return 316;
    }
if (index == 289) {
     return 316;
    }
if (index == 290) {
     return 327;
    }
if (index == 291) {
     return 325;
    }
if (index == 292) {
     return 328;
    }
if (index == 293) {
     return 325;
    }
if (index == 294) {
     return 322;
    }
if (index == 295) {
     return 327;
    }
if (index == 296) {
     return 322;
    }
if (index == 297) {
     return 328;
    }
if (index == 298) {
     return 323;
    }
if (index == 299) {
     return 324;
    }
if (index == 300) {
     return 308;
    }
if (index == 301) {
     return 316;
    }
if (index == 302) {
     return 324;
    }
if (index == 303) {
     return 330;
    }
if (index == 304) {
     return 321;
    }
if (index == 305) {
     return 330;
    }
if (index == 306) {
     return 513;
    }
if (index == 307) {
     return 316;
    }
if (index == 308) {
     return 316;
    }
if (index == 309) {
     return 327;
    }
if (index == 310) {
     return 311;
    }
if (index == 311) {
     return 324;
    }
if (index == 312) {
     return 513;
    }
if (index == 313) {
     return 316;
    }
if (index == 314) {
     return 321;
    }
if (index == 315) {
     return 325;
    }
if (index == 316) {
     return 314;
    }
if (index == 317) {
     return 326;
    }
if (index == 318) {
     return 320;
    }
if (index == 319) {
     return 326;
    }
if (index == 320) {
     return 318;
    }
if (index == 321) {
     return 326;
    }
if (index == 322) {
     return 332;
    }
if (index == 323) {
     return 321;
    }
if (index == 324) {
     return 315;
    }
if (index == 325) {
     return 328;
    }
if (index == 326) {
     return 333;
    }
if (index == 327) {
     return 321;
    }
if (index == 328) {
     return 319;
    }
if (index == 329) {
     return 332;
    }
if (index == 330) {
     return 315;
    }
if (index == 331) {
     return 346;
    }
if (index == 332) {
     return 317;
    }
if (index == 333) {
     return 340;
    }
if (index == 334) {
     return 312;
    }
if (index == 335) {
     return 328;
    }
if (index == 336) {
     return 503;
    }
if (index == 337) {
     return 330;
    }
if (index == 338) {
     return 312;
    }
if (index == 339) {
     return 334;
    }
if (index == 340) {
     return 310;
    }
if (index == 341) {
     return 331;
    }
if (index == 342) {
     return 319;
    }
if (index == 343) {
     return 331;
    }
if (index == 344) {
     return 328;
    }
if (index == 345) {
     return 330;
    }
if (index == 346) {
     return 323;
    }
if (index == 347) {
     return 332;
    }
if (index == 348) {
     return 314;
    }
if (index == 349) {
     return 340;
    }
if (index == 350) {
     return 324;
    }
if (index == 351) {
     return 333;
    }
if (index == 352) {
     return 324;
    }
if (index == 353) {
     return 335;
    }
if (index == 354) {
     return 333;
    }
if (index == 355) {
     return 323;
    }
if (index == 356) {
     return 332;
    }
if (index == 357) {
     return 321;
    }
if (index == 358) {
     return 322;
    }
if (index == 359) {
     return 330;
    }
if (index == 360) {
     return 312;
    }
if (index == 361) {
     return 322;
    }
if (index == 362) {
     return 280;
    }
if (index == 363) {
     return 389;
    }
if (index > 363) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 567;
    }
if (index == 1) {
     return 537;
    }
if (index == 2) {
     return 535;
    }
if (index == 3) {
     return 536;
    }
if (index == 4) {
     return 533;
    }
if (index == 5) {
     return 544;
    }
if (index == 6) {
     return 536;
    }
if (index == 7) {
     return 272;
    }
if (index == 8) {
     return 535;
    }
if (index == 9) {
     return 526;
    }
if (index == 10) {
     return 536;
    }
if (index == 11) {
     return 533;
    }
if (index == 12) {
     return 531;
    }
if (index == 13) {
     return 526;
    }
if (index == 14) {
     return 531;
    }
if (index == 15) {
     return 526;
    }
if (index == 16) {
     return 533;
    }
if (index == 17) {
     return 531;
    }
if (index == 18) {
     return 526;
    }
if (index == 19) {
     return 526;
    }
if (index == 20) {
     return 531;
    }
if (index == 21) {
     return 523;
    }
if (index == 22) {
     return 522;
    }
if (index == 23) {
     return 524;
    }
if (index == 24) {
     return 521;
    }
if (index == 25) {
     return 526;
    }
if (index == 26) {
     return 528;
    }
if (index == 27) {
     return 527;
    }
if (index == 28) {
     return 523;
    }
if (index == 29) {
     return 529;
    }
if (index == 30) {
     return 527;
    }
if (index == 31) {
     return 527;
    }
if (index == 32) {
     return 529;
    }
if (index == 33) {
     return 530;
    }
if (index == 34) {
     return 526;
    }
if (index == 35) {
     return 315;
    }
if (index == 36) {
     return 533;
    }
if (index == 37) {
     return 548;
    }
if (index == 38) {
     return 544;
    }
if (index == 39) {
     return 545;
    }
if (index == 40) {
     return 543;
    }
if (index == 41) {
     return 542;
    }
if (index == 42) {
     return 545;
    }
if (index == 43) {
     return 542;
    }
if (index == 44) {
     return 543;
    }
if (index == 45) {
     return 543;
    }
if (index == 46) {
     return 525;
    }
if (index == 47) {
     return 548;
    }
if (index == 48) {
     return 535;
    }
if (index == 49) {
     return 550;
    }
if (index == 50) {
     return 539;
    }
if (index == 51) {
     return 546;
    }
if (index == 52) {
     return 543;
    }
if (index == 53) {
     return 543;
    }
if (index == 54) {
     return 541;
    }
if (index == 55) {
     return 546;
    }
if (index == 56) {
     return 542;
    }
if (index == 57) {
     return 545;
    }
if (index == 58) {
     return 544;
    }
if (index == 59) {
     return 546;
    }
if (index == 60) {
     return 544;
    }
if (index == 61) {
     return 545;
    }
if (index == 62) {
     return 300;
    }
if (index == 63) {
     return 552;
    }
if (index == 64) {
     return 548;
    }
if (index == 65) {
     return 551;
    }
if (index == 66) {
     return 549;
    }
if (index == 67) {
     return 546;
    }
if (index == 68) {
     return 546;
    }
if (index == 69) {
     return 548;
    }
if (index == 70) {
     return 543;
    }
if (index == 71) {
     return 545;
    }
if (index == 72) {
     return 527;
    }
if (index == 73) {
     return 545;
    }
if (index == 74) {
     return 543;
    }
if (index == 75) {
     return 534;
    }
if (index == 76) {
     return 529;
    }
if (index == 77) {
     return 545;
    }
if (index == 78) {
     return 542;
    }
if (index == 79) {
     return 548;
    }
if (index == 80) {
     return 548;
    }
if (index == 81) {
     return 526;
    }
if (index == 82) {
     return 321;
    }
if (index == 83) {
     return 526;
    }
if (index == 84) {
     return 531;
    }
if (index == 85) {
     return 533;
    }
if (index == 86) {
     return 526;
    }
if (index == 87) {
     return 533;
    }
if (index == 88) {
     return 528;
    }
if (index == 89) {
     return 536;
    }
if (index == 90) {
     return 530;
    }
if (index == 91) {
     return 537;
    }
if (index == 92) {
     return 305;
    }
if (index == 93) {
     return 526;
    }
if (index == 94) {
     return 528;
    }
if (index == 95) {
     return 535;
    }
if (index == 96) {
     return 529;
    }
if (index == 97) {
     return 532;
    }
if (index == 98) {
     return 526;
    }
if (index == 99) {
     return 532;
    }
if (index == 100) {
     return 526;
    }
if (index == 101) {
     return 526;
    }
if (index == 102) {
     return 530;
    }
if (index == 103) {
     return 535;
    }
if (index == 104) {
     return 530;
    }
if (index == 105) {
     return 533;
    }
if (index == 106) {
     return 528;
    }
if (index == 107) {
     return 529;
    }
if (index == 108) {
     return 523;
    }
if (index == 109) {
     return 526;
    }
if (index == 110) {
     return 529;
    }
if (index == 111) {
     return 532;
    }
if (index == 112) {
     return 526;
    }
if (index == 113) {
     return 531;
    }
if (index == 114) {
     return 527;
    }
if (index == 115) {
     return 532;
    }
if (index == 116) {
     return 529;
    }
if (index == 117) {
     return 529;
    }
if (index == 118) {
     return 316;
    }
if (index == 119) {
     return 526;
    }
if (index == 120) {
     return 529;
    }
if (index == 121) {
     return 534;
    }
if (index == 122) {
     return 530;
    }
if (index == 123) {
     return 532;
    }
if (index == 124) {
     return 521;
    }
if (index == 125) {
     return 526;
    }
if (index == 126) {
     return 529;
    }
if (index == 127) {
     return 530;
    }
if (index == 128) {
     return 533;
    }
if (index == 129) {
     return 532;
    }
if (index == 130) {
     return 308;
    }
if (index == 131) {
     return 526;
    }
if (index == 132) {
     return 535;
    }
if (index == 133) {
     return 534;
    }
if (index == 134) {
     return 530;
    }
if (index == 135) {
     return 532;
    }
if (index == 136) {
     return 528;
    }
if (index == 137) {
     return 531;
    }
if (index == 138) {
     return 531;
    }
if (index == 139) {
     return 527;
    }
if (index == 140) {
     return 534;
    }
if (index == 141) {
     return 532;
    }
if (index == 142) {
     return 316;
    }
if (index == 143) {
     return 526;
    }
if (index == 144) {
     return 532;
    }
if (index == 145) {
     return 538;
    }
if (index == 146) {
     return 532;
    }
if (index == 147) {
     return 530;
    }
if (index == 148) {
     return 533;
    }
if (index == 149) {
     return 530;
    }
if (index == 150) {
     return 529;
    }
if (index == 151) {
     return 529;
    }
if (index == 152) {
     return 532;
    }
if (index == 153) {
     return 527;
    }
if (index == 154) {
     return 529;
    }
if (index == 155) {
     return 526;
    }
if (index == 156) {
     return 526;
    }
if (index == 157) {
     return 526;
    }
if (index == 158) {
     return 316;
    }
if (index == 159) {
     return 526;
    }
if (index == 160) {
     return 533;
    }
if (index == 161) {
     return 527;
    }
if (index == 162) {
     return 531;
    }
if (index == 163) {
     return 527;
    }
if (index == 164) {
     return 533;
    }
if (index == 165) {
     return 529;
    }
if (index == 166) {
     return 534;
    }
if (index == 167) {
     return 527;
    }
if (index == 168) {
     return 534;
    }
if (index == 169) {
     return 526;
    }
if (index == 170) {
     return 534;
    }
if (index == 171) {
     return 526;
    }
if (index == 172) {
     return 534;
    }
if (index == 173) {
     return 535;
    }
if (index == 174) {
     return 526;
    }
if (index == 175) {
     return 534;
    }
if (index == 176) {
     return 526;
    }
if (index == 177) {
     return 536;
    }
if (index == 178) {
     return 316;
    }
if (index == 179) {
     return 526;
    }
if (index == 180) {
     return 527;
    }
if (index == 181) {
     return 538;
    }
if (index == 182) {
     return 527;
    }
if (index == 183) {
     return 534;
    }
if (index == 184) {
     return 526;
    }
if (index == 185) {
     return 534;
    }
if (index == 186) {
     return 530;
    }
if (index == 187) {
     return 537;
    }
if (index == 188) {
     return 532;
    }
if (index == 189) {
     return 536;
    }
if (index == 190) {
     return 530;
    }
if (index == 191) {
     return 537;
    }
if (index == 192) {
     return 532;
    }
if (index == 193) {
     return 537;
    }
if (index == 194) {
     return 531;
    }
if (index == 195) {
     return 534;
    }
if (index == 196) {
     return 522;
    }
if (index == 197) {
     return 526;
    }
if (index == 198) {
     return 530;
    }
if (index == 199) {
     return 536;
    }
if (index == 200) {
     return 532;
    }
if (index == 201) {
     return 533;
    }
if (index == 202) {
     return 313;
    }
if (index == 203) {
     return 526;
    }
if (index == 204) {
     return 527;
    }
if (index == 205) {
     return 532;
    }
if (index == 206) {
     return 526;
    }
if (index == 207) {
     return 526;
    }
if (index == 208) {
     return 526;
    }
if (index == 209) {
     return 528;
    }
if (index == 210) {
     return 526;
    }
if (index == 211) {
     return 526;
    }
if (index == 212) {
     return 526;
    }
if (index == 213) {
     return 528;
    }
if (index == 214) {
     return 526;
    }
if (index == 215) {
     return 526;
    }
if (index == 216) {
     return 534;
    }
if (index == 217) {
     return 526;
    }
if (index == 218) {
     return 320;
    }
if (index == 219) {
     return 526;
    }
if (index == 220) {
     return 528;
    }
if (index == 221) {
     return 527;
    }
if (index == 222) {
     return 526;
    }
if (index == 223) {
     return 529;
    }
if (index == 224) {
     return 526;
    }
if (index == 225) {
     return 526;
    }
if (index == 226) {
     return 526;
    }
if (index == 227) {
     return 526;
    }
if (index == 228) {
     return 533;
    }
if (index == 229) {
     return 526;
    }
if (index == 230) {
     return 534;
    }
if (index == 231) {
     return 526;
    }
if (index == 232) {
     return 529;
    }
if (index == 233) {
     return 529;
    }
if (index == 234) {
     return 526;
    }
if (index == 235) {
     return 531;
    }
if (index == 236) {
     return 307;
    }
if (index == 237) {
     return 526;
    }
if (index == 238) {
     return 527;
    }
if (index == 239) {
     return 527;
    }
if (index == 240) {
     return 306;
    }
if (index == 241) {
     return 526;
    }
if (index == 242) {
     return 526;
    }
if (index == 243) {
     return 526;
    }
if (index == 244) {
     return 303;
    }
if (index == 245) {
     return 526;
    }
if (index == 246) {
     return 528;
    }
if (index == 247) {
     return 532;
    }
if (index == 248) {
     return 305;
    }
if (index == 249) {
     return 526;
    }
if (index == 250) {
     return 523;
    }
if (index == 251) {
     return 521;
    }
if (index == 252) {
     return 521;
    }
if (index == 253) {
     return 522;
    }
if (index == 254) {
     return 521;
    }
if (index == 255) {
     return 517;
    }
if (index == 256) {
     return 522;
    }
if (index == 257) {
     return 523;
    }
if (index == 258) {
     return 521;
    }
if (index == 259) {
     return 517;
    }
if (index == 260) {
     return 527;
    }
if (index == 261) {
     return 525;
    }
if (index == 262) {
     return 520;
    }
if (index == 263) {
     return 521;
    }
if (index == 264) {
     return 517;
    }
if (index == 265) {
     return 517;
    }
if (index == 266) {
     return 522;
    }
if (index == 267) {
     return 521;
    }
if (index == 268) {
     return 517;
    }
if (index == 269) {
     return 520;
    }
if (index == 270) {
     return 514;
    }
if (index == 271) {
     return 517;
    }
if (index == 272) {
     return 517;
    }
if (index == 273) {
     return 521;
    }
if (index == 274) {
     return 509;
    }
if (index == 275) {
     return 522;
    }
if (index == 276) {
     return 508;
    }
if (index == 277) {
     return 517;
    }
if (index == 278) {
     return 508;
    }
if (index == 279) {
     return 525;
    }
if (index == 280) {
     return 514;
    }
if (index == 281) {
     return 527;
    }
if (index == 282) {
     return 516;
    }
if (index == 283) {
     return 527;
    }
if (index == 284) {
     return 515;
    }
if (index == 285) {
     return 529;
    }
if (index == 286) {
     return 515;
    }
if (index == 287) {
     return 525;
    }
if (index == 288) {
     return 513;
    }
if (index == 289) {
     return 517;
    }
if (index == 290) {
     return 519;
    }
if (index == 291) {
     return 522;
    }
if (index == 292) {
     return 520;
    }
if (index == 293) {
     return 523;
    }
if (index == 294) {
     return 516;
    }
if (index == 295) {
     return 524;
    }
if (index == 296) {
     return 516;
    }
if (index == 297) {
     return 524;
    }
if (index == 298) {
     return 517;
    }
if (index == 299) {
     return 522;
    }
if (index == 300) {
     return 510;
    }
if (index == 301) {
     return 517;
    }
if (index == 302) {
     return 517;
    }
if (index == 303) {
     return 525;
    }
if (index == 304) {
     return 516;
    }
if (index == 305) {
     return 525;
    }
if (index == 306) {
     return 306;
    }
if (index == 307) {
     return 517;
    }
if (index == 308) {
     return 513;
    }
if (index == 309) {
     return 524;
    }
if (index == 310) {
     return 515;
    }
if (index == 311) {
     return 522;
    }
if (index == 312) {
     return 304;
    }
if (index == 313) {
     return 517;
    }
if (index == 314) {
     return 516;
    }
if (index == 315) {
     return 522;
    }
if (index == 316) {
     return 518;
    }
if (index == 317) {
     return 523;
    }
if (index == 318) {
     return 515;
    }
if (index == 319) {
     return 523;
    }
if (index == 320) {
     return 511;
    }
if (index == 321) {
     return 523;
    }
if (index == 322) {
     return 512;
    }
if (index == 323) {
     return 528;
    }
if (index == 324) {
     return 510;
    }
if (index == 325) {
     return 524;
    }
if (index == 326) {
     return 509;
    }
if (index == 327) {
     return 520;
    }
if (index == 328) {
     return 512;
    }
if (index == 329) {
     return 518;
    }
if (index == 330) {
     return 510;
    }
if (index == 331) {
     return 527;
    }
if (index == 332) {
     return 511;
    }
if (index == 333) {
     return 524;
    }
if (index == 334) {
     return 508;
    }
if (index == 335) {
     return 527;
    }
if (index == 336) {
     return 300;
    }
if (index == 337) {
     return 517;
    }
if (index == 338) {
     return 508;
    }
if (index == 339) {
     return 520;
    }
if (index == 340) {
     return 513;
    }
if (index == 341) {
     return 518;
    }
if (index == 342) {
     return 512;
    }
if (index == 343) {
     return 518;
    }
if (index == 344) {
     return 518;
    }
if (index == 345) {
     return 517;
    }
if (index == 346) {
     return 515;
    }
if (index == 347) {
     return 518;
    }
if (index == 348) {
     return 509;
    }
if (index == 349) {
     return 524;
    }
if (index == 350) {
     return 515;
    }
if (index == 351) {
     return 519;
    }
if (index == 352) {
     return 516;
    }
if (index == 353) {
     return 516;
    }
if (index == 354) {
     return 521;
    }
if (index == 355) {
     return 511;
    }
if (index == 356) {
     return 520;
    }
if (index == 357) {
     return 510;
    }
if (index == 358) {
     return 525;
    }
if (index == 359) {
     return 510;
    }
if (index == 360) {
     return 508;
    }
if (index == 361) {
     return 511;
    }
if (index == 362) {
     return 508;
    }
if (index == 363) {
     return 571;
    }
if (index > 363) {
    return 1200;
    }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = '/fedora/get/seapage:107_' + imgStr + '/digitalImage';
    return url;
}

// Return which side, left or right, that a given page should be displayed on
br.getPageSide = function(index) {
    if (0 == (index & 0x1)) {
        return 'R';
    } else {
        return 'L';
    }
}

// This function returns the left and right indices for the user-visible
// spread that contains the given index.  The return values may be
// null if there is no facing page or the index is invalid.
br.getSpreadIndices = function(pindex) {
    var spreadIndices = [null, null];
    if ('rl' == this.pageProgression) {
        // Right to Left
        if (this.getPageSide(pindex) == 'R') {
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex + 1;
        } else {
            // Given index was LHS
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex - 1;
        }
    } else {
        // Left to right
        if (this.getPageSide(pindex) == 'L') {
            spreadIndices[0] = pindex;
            spreadIndices[1] = pindex + 1;
        } else {
            // Given index was RHS
            spreadIndices[1] = pindex;
            spreadIndices[0] = pindex - 1;
        }
    }
    
    return spreadIndices;
}

// For a given "accessible page index" return the page number in the book.
//
// For example, index 5 might correspond to "Page 1" if there is front matter such
// as a title page and table of contents.
br.getPageNum = function(index) {
    return index+1;
}

// Total number of leafs
br.numLeafs = 372;

// Book title and the URL used for the book title link
br.bookTitle= "Java, the garden of the East";
br.bookAuthor= "Scidmore, Eliza Ruhamah";
br.bookPub= "New York: Century, 1897";
br.bookKeyword= "Java (Indonesia)--Description and travel";
br.bookUrl  = '/catalog/sea:107';

// Override the path used to find UI images
br.imagesBaseURL = '../BookReader/images/';

br.getEmbedCode = function(frameWidth, frameHeight, viewParams) {
    return "Embed code not supported in bookreader demo.";
}

// Let's go!
br.init();

// read-aloud and search need backend compenents and are not supported in the demo
$('#BRtoolbar').find('.read').hide();
$('#textSrch').hide();
$('#btnSrch').hide();
