//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 482;
    }
if (index == 1) {
     return 443;
    }
if (index == 2) {
     return 443;
    }
if (index == 3) {
     return 409;
    }
if (index == 4) {
     return 420;
    }
if (index == 5) {
     return 399;
    }
if (index == 6) {
     return 409;
    }
if (index == 7) {
     return 379;
    }
if (index == 8) {
     return 407;
    }
if (index == 9) {
     return 397;
    }
if (index == 10) {
     return 396;
    }
if (index == 11) {
     return 413;
    }
if (index == 12) {
     return 401;
    }
if (index == 13) {
     return 410;
    }
if (index == 14) {
     return 394;
    }
if (index == 15) {
     return 410;
    }
if (index == 16) {
     return 397;
    }
if (index == 17) {
     return 412;
    }
if (index == 18) {
     return 390;
    }
if (index == 19) {
     return 385;
    }
if (index == 20) {
     return 380;
    }
if (index == 21) {
     return 377;
    }
if (index == 22) {
     return 396;
    }
if (index == 23) {
     return 360;
    }
if (index == 24) {
     return 393;
    }
if (index == 25) {
     return 380;
    }
if (index == 26) {
     return 395;
    }
if (index == 27) {
     return 348;
    }
if (index == 28) {
     return 376;
    }
if (index == 29) {
     return 378;
    }
if (index == 30) {
     return 372;
    }
if (index == 31) {
     return 397;
    }
if (index == 32) {
     return 393;
    }
if (index == 33) {
     return 377;
    }
if (index == 34) {
     return 394;
    }
if (index == 35) {
     return 396;
    }
if (index == 36) {
     return 383;
    }
if (index == 37) {
     return 380;
    }
if (index == 38) {
     return 377;
    }
if (index == 39) {
     return 406;
    }
if (index == 40) {
     return 377;
    }
if (index == 41) {
     return 382;
    }
if (index == 42) {
     return 377;
    }
if (index == 43) {
     return 391;
    }
if (index == 44) {
     return 373;
    }
if (index == 45) {
     return 394;
    }
if (index == 46) {
     return 391;
    }
if (index == 47) {
     return 393;
    }
if (index == 48) {
     return 376;
    }
if (index == 49) {
     return 391;
    }
if (index == 50) {
     return 365;
    }
if (index == 51) {
     return 382;
    }
if (index == 52) {
     return 377;
    }
if (index == 53) {
     return 364;
    }
if (index == 54) {
     return 389;
    }
if (index == 55) {
     return 402;
    }
if (index == 56) {
     return 391;
    }
if (index == 57) {
     return 354;
    }
if (index == 58) {
     return 392;
    }
if (index == 59) {
     return 402;
    }
if (index == 60) {
     return 394;
    }
if (index == 61) {
     return 411;
    }
if (index == 62) {
     return 398;
    }
if (index == 63) {
     return 392;
    }
if (index == 64) {
     return 399;
    }
if (index == 65) {
     return 389;
    }
if (index == 66) {
     return 393;
    }
if (index == 67) {
     return 390;
    }
if (index == 68) {
     return 390;
    }
if (index == 69) {
     return 393;
    }
if (index == 70) {
     return 397;
    }
if (index == 71) {
     return 395;
    }
if (index == 72) {
     return 397;
    }
if (index == 73) {
     return 391;
    }
if (index == 74) {
     return 401;
    }
if (index == 75) {
     return 371;
    }
if (index == 76) {
     return 400;
    }
if (index == 77) {
     return 393;
    }
if (index == 78) {
     return 405;
    }
if (index == 79) {
     return 401;
    }
if (index == 80) {
     return 405;
    }
if (index == 81) {
     return 408;
    }
if (index == 82) {
     return 411;
    }
if (index == 83) {
     return 389;
    }
if (index == 84) {
     return 387;
    }
if (index == 85) {
     return 391;
    }
if (index == 86) {
     return 391;
    }
if (index == 87) {
     return 390;
    }
if (index == 88) {
     return 387;
    }
if (index == 89) {
     return 387;
    }
if (index == 90) {
     return 391;
    }
if (index == 91) {
     return 393;
    }
if (index == 92) {
     return 389;
    }
if (index == 93) {
     return 391;
    }
if (index == 94) {
     return 393;
    }
if (index == 95) {
     return 393;
    }
if (index == 96) {
     return 395;
    }
if (index == 97) {
     return 392;
    }
if (index == 98) {
     return 387;
    }
if (index == 99) {
     return 387;
    }
if (index == 100) {
     return 391;
    }
if (index == 101) {
     return 392;
    }
if (index == 102) {
     return 392;
    }
if (index == 103) {
     return 392;
    }
if (index == 104) {
     return 393;
    }
if (index == 105) {
     return 394;
    }
if (index == 106) {
     return 387;
    }
if (index == 107) {
     return 392;
    }
if (index == 108) {
     return 387;
    }
if (index == 109) {
     return 389;
    }
if (index == 110) {
     return 389;
    }
if (index == 111) {
     return 391;
    }
if (index == 112) {
     return 390;
    }
if (index == 113) {
     return 391;
    }
if (index == 114) {
     return 387;
    }
if (index == 115) {
     return 387;
    }
if (index == 116) {
     return 392;
    }
if (index == 117) {
     return 387;
    }
if (index == 118) {
     return 391;
    }
if (index == 119) {
     return 387;
    }
if (index == 120) {
     return 392;
    }
if (index == 121) {
     return 391;
    }
if (index == 122) {
     return 394;
    }
if (index == 123) {
     return 392;
    }
if (index == 124) {
     return 657;
    }
if (index == 125) {
     return 387;
    }
if (index == 126) {
     return 392;
    }
if (index == 127) {
     return 392;
    }
if (index == 128) {
     return 387;
    }
if (index == 129) {
     return 398;
    }
if (index == 130) {
     return 387;
    }
if (index == 131) {
     return 405;
    }
if (index == 132) {
     return 390;
    }
if (index == 133) {
     return 396;
    }
if (index == 134) {
     return 390;
    }
if (index == 135) {
     return 396;
    }
if (index == 136) {
     return 380;
    }
if (index == 137) {
     return 406;
    }
if (index == 138) {
     return 391;
    }
if (index == 139) {
     return 402;
    }
if (index == 140) {
     return 386;
    }
if (index == 141) {
     return 408;
    }
if (index == 142) {
     return 394;
    }
if (index == 143) {
     return 401;
    }
if (index == 144) {
     return 387;
    }
if (index == 145) {
     return 405;
    }
if (index == 146) {
     return 387;
    }
if (index == 147) {
     return 405;
    }
if (index == 148) {
     return 387;
    }
if (index == 149) {
     return 410;
    }
if (index == 150) {
     return 387;
    }
if (index == 151) {
     return 407;
    }
if (index == 152) {
     return 379;
    }
if (index == 153) {
     return 406;
    }
if (index == 154) {
     return 395;
    }
if (index == 155) {
     return 396;
    }
if (index == 156) {
     return 390;
    }
if (index == 157) {
     return 400;
    }
if (index == 158) {
     return 393;
    }
if (index == 159) {
     return 396;
    }
if (index == 160) {
     return 387;
    }
if (index == 161) {
     return 401;
    }
if (index == 162) {
     return 389;
    }
if (index == 163) {
     return 396;
    }
if (index == 164) {
     return 388;
    }
if (index == 165) {
     return 396;
    }
if (index == 166) {
     return 382;
    }
if (index == 167) {
     return 402;
    }
if (index == 168) {
     return 657;
    }
if (index == 169) {
     return 396;
    }
if (index == 170) {
     return 384;
    }
if (index == 171) {
     return 407;
    }
if (index == 172) {
     return 376;
    }
if (index == 173) {
     return 408;
    }
if (index == 174) {
     return 382;
    }
if (index == 175) {
     return 409;
    }
if (index == 176) {
     return 379;
    }
if (index == 177) {
     return 403;
    }
if (index == 178) {
     return 382;
    }
if (index == 179) {
     return 372;
    }
if (index == 180) {
     return 380;
    }
if (index == 181) {
     return 384;
    }
if (index == 182) {
     return 379;
    }
if (index == 183) {
     return 396;
    }
if (index == 184) {
     return 382;
    }
if (index == 185) {
     return 399;
    }
if (index == 186) {
     return 379;
    }
if (index == 187) {
     return 401;
    }
if (index == 188) {
     return 384;
    }
if (index == 189) {
     return 396;
    }
if (index == 190) {
     return 378;
    }
if (index == 191) {
     return 406;
    }
if (index == 192) {
     return 376;
    }
if (index == 193) {
     return 398;
    }
if (index == 194) {
     return 378;
    }
if (index == 195) {
     return 396;
    }
if (index == 196) {
     return 378;
    }
if (index == 197) {
     return 407;
    }
if (index == 198) {
     return 657;
    }
if (index == 199) {
     return 396;
    }
if (index == 200) {
     return 380;
    }
if (index == 201) {
     return 396;
    }
if (index == 202) {
     return 657;
    }
if (index == 203) {
     return 396;
    }
if (index == 204) {
     return 381;
    }
if (index == 205) {
     return 396;
    }
if (index == 206) {
     return 657;
    }
if (index == 207) {
     return 396;
    }
if (index == 208) {
     return 380;
    }
if (index == 209) {
     return 398;
    }
if (index == 210) {
     return 378;
    }
if (index == 211) {
     return 399;
    }
if (index == 212) {
     return 378;
    }
if (index == 213) {
     return 399;
    }
if (index == 214) {
     return 378;
    }
if (index == 215) {
     return 396;
    }
if (index == 216) {
     return 378;
    }
if (index == 217) {
     return 396;
    }
if (index == 218) {
     return 383;
    }
if (index == 219) {
     return 396;
    }
if (index == 220) {
     return 657;
    }
if (index == 221) {
     return 396;
    }
if (index == 222) {
     return 371;
    }
if (index == 223) {
     return 371;
    }
if (index == 224) {
     return 382;
    }
if (index == 225) {
     return 374;
    }
if (index == 226) {
     return 373;
    }
if (index == 227) {
     return 394;
    }
if (index == 228) {
     return 375;
    }
if (index == 229) {
     return 401;
    }
if (index == 230) {
     return 377;
    }
if (index == 231) {
     return 396;
    }
if (index == 232) {
     return 647;
    }
if (index == 233) {
     return 396;
    }
if (index == 234) {
     return 369;
    }
if (index == 235) {
     return 407;
    }
if (index == 236) {
     return 395;
    }
if (index == 237) {
     return 396;
    }
if (index == 238) {
     return 395;
    }
if (index == 239) {
     return 389;
    }
if (index == 240) {
     return 382;
    }
if (index == 241) {
     return 399;
    }
if (index == 242) {
     return 392;
    }
if (index == 243) {
     return 398;
    }
if (index == 244) {
     return 404;
    }
if (index == 245) {
     return 398;
    }
if (index == 246) {
     return 397;
    }
if (index == 247) {
     return 396;
    }
if (index == 248) {
     return 405;
    }
if (index == 249) {
     return 383;
    }
if (index == 250) {
     return 392;
    }
if (index == 251) {
     return 396;
    }
if (index == 252) {
     return 392;
    }
if (index == 253) {
     return 398;
    }
if (index == 254) {
     return 392;
    }
if (index == 255) {
     return 396;
    }
if (index == 256) {
     return 399;
    }
if (index == 257) {
     return 402;
    }
if (index == 258) {
     return 399;
    }
if (index == 259) {
     return 405;
    }
if (index == 260) {
     return 399;
    }
if (index == 261) {
     return 387;
    }
if (index == 262) {
     return 373;
    }
if (index == 263) {
     return 403;
    }
if (index == 264) {
     return 398;
    }
if (index == 265) {
     return 392;
    }
if (index == 266) {
     return 388;
    }
if (index == 267) {
     return 381;
    }
if (index == 268) {
     return 383;
    }
if (index == 269) {
     return 393;
    }
if (index == 270) {
     return 389;
    }
if (index == 271) {
     return 399;
    }
if (index == 272) {
     return 383;
    }
if (index == 273) {
     return 401;
    }
if (index == 274) {
     return 371;
    }
if (index == 275) {
     return 398;
    }
if (index == 276) {
     return 375;
    }
if (index == 277) {
     return 394;
    }
if (index == 278) {
     return 389;
    }
if (index == 279) {
     return 389;
    }
if (index == 280) {
     return 383;
    }
if (index == 281) {
     return 373;
    }
if (index == 282) {
     return 388;
    }
if (index == 283) {
     return 399;
    }
if (index == 284) {
     return 387;
    }
if (index == 285) {
     return 402;
    }
if (index == 286) {
     return 383;
    }
if (index == 287) {
     return 395;
    }
if (index == 288) {
     return 383;
    }
if (index == 289) {
     return 399;
    }
if (index == 290) {
     return 390;
    }
if (index == 291) {
     return 395;
    }
if (index == 292) {
     return 657;
    }
if (index == 293) {
     return 388;
    }
if (index == 294) {
     return 383;
    }
if (index == 295) {
     return 399;
    }
if (index == 296) {
     return 657;
    }
if (index == 297) {
     return 388;
    }
if (index == 298) {
     return 383;
    }
if (index == 299) {
     return 397;
    }
if (index == 300) {
     return 385;
    }
if (index == 301) {
     return 399;
    }
if (index == 302) {
     return 383;
    }
if (index == 303) {
     return 398;
    }
if (index == 304) {
     return 386;
    }
if (index == 305) {
     return 402;
    }
if (index == 306) {
     return 383;
    }
if (index == 307) {
     return 399;
    }
if (index == 308) {
     return 383;
    }
if (index == 309) {
     return 388;
    }
if (index == 310) {
     return 383;
    }
if (index == 311) {
     return 381;
    }
if (index == 312) {
     return 385;
    }
if (index == 313) {
     return 385;
    }
if (index == 314) {
     return 383;
    }
if (index == 315) {
     return 383;
    }
if (index == 316) {
     return 627;
    }
if (index == 317) {
     return 388;
    }
if (index == 318) {
     return 383;
    }
if (index == 319) {
     return 388;
    }
if (index == 320) {
     return 378;
    }
if (index == 321) {
     return 383;
    }
if (index == 322) {
     return 383;
    }
if (index == 323) {
     return 401;
    }
if (index == 324) {
     return 393;
    }
if (index == 325) {
     return 401;
    }
if (index == 326) {
     return 657;
    }
if (index == 327) {
     return 387;
    }
if (index == 328) {
     return 383;
    }
if (index == 329) {
     return 394;
    }
if (index == 330) {
     return 385;
    }
if (index == 331) {
     return 799;
    }
if (index == 332) {
     return 794;
    }
if (index == 333) {
     return 395;
    }
if (index == 334) {
     return 389;
    }
if (index == 335) {
     return 401;
    }
if (index == 336) {
     return 657;
    }
if (index == 337) {
     return 387;
    }
if (index == 338) {
     return 383;
    }
if (index == 339) {
     return 393;
    }
if (index == 340) {
     return 390;
    }
if (index == 341) {
     return 393;
    }
if (index == 342) {
     return 386;
    }
if (index == 343) {
     return 395;
    }
if (index == 344) {
     return 383;
    }
if (index == 345) {
     return 398;
    }
if (index == 346) {
     return 383;
    }
if (index == 347) {
     return 401;
    }
if (index == 348) {
     return 392;
    }
if (index == 349) {
     return 397;
    }
if (index == 350) {
     return 383;
    }
if (index == 351) {
     return 394;
    }
if (index == 352) {
     return 383;
    }
if (index == 353) {
     return 395;
    }
if (index == 354) {
     return 383;
    }
if (index == 355) {
     return 387;
    }
if (index == 356) {
     return 384;
    }
if (index == 357) {
     return 395;
    }
if (index == 358) {
     return 383;
    }
if (index == 359) {
     return 396;
    }
if (index == 360) {
     return 386;
    }
if (index == 361) {
     return 401;
    }
if (index == 362) {
     return 383;
    }
if (index == 363) {
     return 387;
    }
if (index == 364) {
     return 383;
    }
if (index == 365) {
     return 383;
    }
if (index == 366) {
     return 373;
    }
if (index == 367) {
     return 383;
    }
if (index == 368) {
     return 383;
    }
if (index == 369) {
     return 394;
    }
if (index == 370) {
     return 383;
    }
if (index == 371) {
     return 392;
    }
if (index == 372) {
     return 386;
    }
if (index == 373) {
     return 364;
    }
if (index == 374) {
     return 389;
    }
if (index == 375) {
     return 387;
    }
if (index == 376) {
     return 391;
    }
if (index == 377) {
     return 387;
    }
if (index == 378) {
     return 383;
    }
if (index == 379) {
     return 389;
    }
if (index == 380) {
     return 390;
    }
if (index == 381) {
     return 394;
    }
if (index == 382) {
     return 394;
    }
if (index == 383) {
     return 389;
    }
if (index == 384) {
     return 383;
    }
if (index == 385) {
     return 390;
    }
if (index == 386) {
     return 388;
    }
if (index == 387) {
     return 396;
    }
if (index == 388) {
     return 383;
    }
if (index == 389) {
     return 392;
    }
if (index == 390) {
     return 393;
    }
if (index == 391) {
     return 387;
    }
if (index == 392) {
     return 390;
    }
if (index == 393) {
     return 387;
    }
if (index == 394) {
     return 383;
    }
if (index == 395) {
     return 387;
    }
if (index == 396) {
     return 657;
    }
if (index == 397) {
     return 387;
    }
if (index == 398) {
     return 392;
    }
if (index == 399) {
     return 396;
    }
if (index == 400) {
     return 389;
    }
if (index == 401) {
     return 397;
    }
if (index == 402) {
     return 388;
    }
if (index == 403) {
     return 389;
    }
if (index == 404) {
     return 383;
    }
if (index == 405) {
     return 387;
    }
if (index == 406) {
     return 383;
    }
if (index == 407) {
     return 389;
    }
if (index == 408) {
     return 387;
    }
if (index == 409) {
     return 387;
    }
if (index == 410) {
     return 387;
    }
if (index == 411) {
     return 370;
    }
if (index == 412) {
     return 390;
    }
if (index == 413) {
     return 375;
    }
if (index == 414) {
     return 383;
    }
if (index == 415) {
     return 387;
    }
if (index == 416) {
     return 376;
    }
if (index == 417) {
     return 387;
    }
if (index == 418) {
     return 354;
    }
if (index == 419) {
     return 486;
    }
if (index > 419) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 709;
    }
if (index == 1) {
     return 677;
    }
if (index == 2) {
     return 665;
    }
if (index == 3) {
     return 678;
    }
if (index == 4) {
     return 670;
    }
if (index == 5) {
     return 679;
    }
if (index == 6) {
     return 667;
    }
if (index == 7) {
     return 665;
    }
if (index == 8) {
     return 663;
    }
if (index == 9) {
     return 674;
    }
if (index == 10) {
     return 667;
    }
if (index == 11) {
     return 676;
    }
if (index == 12) {
     return 668;
    }
if (index == 13) {
     return 681;
    }
if (index == 14) {
     return 669;
    }
if (index == 15) {
     return 664;
    }
if (index == 16) {
     return 666;
    }
if (index == 17) {
     return 666;
    }
if (index == 18) {
     return 669;
    }
if (index == 19) {
     return 658;
    }
if (index == 20) {
     return 665;
    }
if (index == 21) {
     return 654;
    }
if (index == 22) {
     return 675;
    }
if (index == 23) {
     return 653;
    }
if (index == 24) {
     return 673;
    }
if (index == 25) {
     return 653;
    }
if (index == 26) {
     return 676;
    }
if (index == 27) {
     return 651;
    }
if (index == 28) {
     return 660;
    }
if (index == 29) {
     return 650;
    }
if (index == 30) {
     return 661;
    }
if (index == 31) {
     return 652;
    }
if (index == 32) {
     return 663;
    }
if (index == 33) {
     return 653;
    }
if (index == 34) {
     return 664;
    }
if (index == 35) {
     return 668;
    }
if (index == 36) {
     return 667;
    }
if (index == 37) {
     return 670;
    }
if (index == 38) {
     return 662;
    }
if (index == 39) {
     return 661;
    }
if (index == 40) {
     return 660;
    }
if (index == 41) {
     return 657;
    }
if (index == 42) {
     return 669;
    }
if (index == 43) {
     return 653;
    }
if (index == 44) {
     return 665;
    }
if (index == 45) {
     return 661;
    }
if (index == 46) {
     return 668;
    }
if (index == 47) {
     return 653;
    }
if (index == 48) {
     return 667;
    }
if (index == 49) {
     return 659;
    }
if (index == 50) {
     return 665;
    }
if (index == 51) {
     return 662;
    }
if (index == 52) {
     return 668;
    }
if (index == 53) {
     return 653;
    }
if (index == 54) {
     return 666;
    }
if (index == 55) {
     return 653;
    }
if (index == 56) {
     return 666;
    }
if (index == 57) {
     return 653;
    }
if (index == 58) {
     return 678;
    }
if (index == 59) {
     return 673;
    }
if (index == 60) {
     return 677;
    }
if (index == 61) {
     return 677;
    }
if (index == 62) {
     return 671;
    }
if (index == 63) {
     return 669;
    }
if (index == 64) {
     return 669;
    }
if (index == 65) {
     return 666;
    }
if (index == 66) {
     return 670;
    }
if (index == 67) {
     return 660;
    }
if (index == 68) {
     return 669;
    }
if (index == 69) {
     return 654;
    }
if (index == 70) {
     return 669;
    }
if (index == 71) {
     return 662;
    }
if (index == 72) {
     return 670;
    }
if (index == 73) {
     return 659;
    }
if (index == 74) {
     return 669;
    }
if (index == 75) {
     return 653;
    }
if (index == 76) {
     return 665;
    }
if (index == 77) {
     return 655;
    }
if (index == 78) {
     return 669;
    }
if (index == 79) {
     return 655;
    }
if (index == 80) {
     return 669;
    }
if (index == 81) {
     return 657;
    }
if (index == 82) {
     return 662;
    }
if (index == 83) {
     return 654;
    }
if (index == 84) {
     return 661;
    }
if (index == 85) {
     return 655;
    }
if (index == 86) {
     return 663;
    }
if (index == 87) {
     return 655;
    }
if (index == 88) {
     return 661;
    }
if (index == 89) {
     return 653;
    }
if (index == 90) {
     return 663;
    }
if (index == 91) {
     return 656;
    }
if (index == 92) {
     return 662;
    }
if (index == 93) {
     return 655;
    }
if (index == 94) {
     return 664;
    }
if (index == 95) {
     return 656;
    }
if (index == 96) {
     return 666;
    }
if (index == 97) {
     return 656;
    }
if (index == 98) {
     return 661;
    }
if (index == 99) {
     return 653;
    }
if (index == 100) {
     return 663;
    }
if (index == 101) {
     return 656;
    }
if (index == 102) {
     return 664;
    }
if (index == 103) {
     return 655;
    }
if (index == 104) {
     return 664;
    }
if (index == 105) {
     return 657;
    }
if (index == 106) {
     return 661;
    }
if (index == 107) {
     return 655;
    }
if (index == 108) {
     return 661;
    }
if (index == 109) {
     return 654;
    }
if (index == 110) {
     return 662;
    }
if (index == 111) {
     return 655;
    }
if (index == 112) {
     return 659;
    }
if (index == 113) {
     return 655;
    }
if (index == 114) {
     return 657;
    }
if (index == 115) {
     return 653;
    }
if (index == 116) {
     return 660;
    }
if (index == 117) {
     return 653;
    }
if (index == 118) {
     return 659;
    }
if (index == 119) {
     return 653;
    }
if (index == 120) {
     return 660;
    }
if (index == 121) {
     return 655;
    }
if (index == 122) {
     return 661;
    }
if (index == 123) {
     return 656;
    }
if (index == 124) {
     return 387;
    }
if (index == 125) {
     return 653;
    }
if (index == 126) {
     return 660;
    }
if (index == 127) {
     return 655;
    }
if (index == 128) {
     return 657;
    }
if (index == 129) {
     return 654;
    }
if (index == 130) {
     return 657;
    }
if (index == 131) {
     return 658;
    }
if (index == 132) {
     return 659;
    }
if (index == 133) {
     return 653;
    }
if (index == 134) {
     return 659;
    }
if (index == 135) {
     return 653;
    }
if (index == 136) {
     return 657;
    }
if (index == 137) {
     return 659;
    }
if (index == 138) {
     return 659;
    }
if (index == 139) {
     return 656;
    }
if (index == 140) {
     return 654;
    }
if (index == 141) {
     return 660;
    }
if (index == 142) {
     return 661;
    }
if (index == 143) {
     return 656;
    }
if (index == 144) {
     return 657;
    }
if (index == 145) {
     return 658;
    }
if (index == 146) {
     return 657;
    }
if (index == 147) {
     return 658;
    }
if (index == 148) {
     return 657;
    }
if (index == 149) {
     return 661;
    }
if (index == 150) {
     return 657;
    }
if (index == 151) {
     return 659;
    }
if (index == 152) {
     return 654;
    }
if (index == 153) {
     return 658;
    }
if (index == 154) {
     return 662;
    }
if (index == 155) {
     return 653;
    }
if (index == 156) {
     return 659;
    }
if (index == 157) {
     return 655;
    }
if (index == 158) {
     return 660;
    }
if (index == 159) {
     return 653;
    }
if (index == 160) {
     return 657;
    }
if (index == 161) {
     return 655;
    }
if (index == 162) {
     return 658;
    }
if (index == 163) {
     return 653;
    }
if (index == 164) {
     return 663;
    }
if (index == 165) {
     return 653;
    }
if (index == 166) {
     return 659;
    }
if (index == 167) {
     return 656;
    }
if (index == 168) {
     return 379;
    }
if (index == 169) {
     return 653;
    }
if (index == 170) {
     return 660;
    }
if (index == 171) {
     return 659;
    }
if (index == 172) {
     return 652;
    }
if (index == 173) {
     return 660;
    }
if (index == 174) {
     return 659;
    }
if (index == 175) {
     return 660;
    }
if (index == 176) {
     return 657;
    }
if (index == 177) {
     return 657;
    }
if (index == 178) {
     return 659;
    }
if (index == 179) {
     return 654;
    }
if (index == 180) {
     return 658;
    }
if (index == 181) {
     return 655;
    }
if (index == 182) {
     return 657;
    }
if (index == 183) {
     return 653;
    }
if (index == 184) {
     return 659;
    }
if (index == 185) {
     return 654;
    }
if (index == 186) {
     return 657;
    }
if (index == 187) {
     return 655;
    }
if (index == 188) {
     return 660;
    }
if (index == 189) {
     return 653;
    }
if (index == 190) {
     return 657;
    }
if (index == 191) {
     return 658;
    }
if (index == 192) {
     return 655;
    }
if (index == 193) {
     return 654;
    }
if (index == 194) {
     return 657;
    }
if (index == 195) {
     return 653;
    }
if (index == 196) {
     return 657;
    }
if (index == 197) {
     return 659;
    }
if (index == 198) {
     return 378;
    }
if (index == 199) {
     return 653;
    }
if (index == 200) {
     return 658;
    }
if (index == 201) {
     return 653;
    }
if (index == 202) {
     return 378;
    }
if (index == 203) {
     return 653;
    }
if (index == 204) {
     return 659;
    }
if (index == 205) {
     return 653;
    }
if (index == 206) {
     return 378;
    }
if (index == 207) {
     return 653;
    }
if (index == 208) {
     return 658;
    }
if (index == 209) {
     return 654;
    }
if (index == 210) {
     return 657;
    }
if (index == 211) {
     return 655;
    }
if (index == 212) {
     return 657;
    }
if (index == 213) {
     return 655;
    }
if (index == 214) {
     return 657;
    }
if (index == 215) {
     return 653;
    }
if (index == 216) {
     return 657;
    }
if (index == 217) {
     return 653;
    }
if (index == 218) {
     return 660;
    }
if (index == 219) {
     return 653;
    }
if (index == 220) {
     return 392;
    }
if (index == 221) {
     return 653;
    }
if (index == 222) {
     return 658;
    }
if (index == 223) {
     return 653;
    }
if (index == 224) {
     return 660;
    }
if (index == 225) {
     return 651;
    }
if (index == 226) {
     return 657;
    }
if (index == 227) {
     return 653;
    }
if (index == 228) {
     return 659;
    }
if (index == 229) {
     return 656;
    }
if (index == 230) {
     return 660;
    }
if (index == 231) {
     return 653;
    }
if (index == 232) {
     return 367;
    }
if (index == 233) {
     return 653;
    }
if (index == 234) {
     return 657;
    }
if (index == 235) {
     return 659;
    }
if (index == 236) {
     return 659;
    }
if (index == 237) {
     return 653;
    }
if (index == 238) {
     return 665;
    }
if (index == 239) {
     return 662;
    }
if (index == 240) {
     return 660;
    }
if (index == 241) {
     return 654;
    }
if (index == 242) {
     return 657;
    }
if (index == 243) {
     return 654;
    }
if (index == 244) {
     return 664;
    }
if (index == 245) {
     return 654;
    }
if (index == 246) {
     return 660;
    }
if (index == 247) {
     return 653;
    }
if (index == 248) {
     return 665;
    }
if (index == 249) {
     return 656;
    }
if (index == 250) {
     return 657;
    }
if (index == 251) {
     return 653;
    }
if (index == 252) {
     return 657;
    }
if (index == 253) {
     return 654;
    }
if (index == 254) {
     return 657;
    }
if (index == 255) {
     return 653;
    }
if (index == 256) {
     return 662;
    }
if (index == 257) {
     return 656;
    }
if (index == 258) {
     return 661;
    }
if (index == 259) {
     return 658;
    }
if (index == 260) {
     return 662;
    }
if (index == 261) {
     return 654;
    }
if (index == 262) {
     return 657;
    }
if (index == 263) {
     return 657;
    }
if (index == 264) {
     return 661;
    }
if (index == 265) {
     return 655;
    }
if (index == 266) {
     return 660;
    }
if (index == 267) {
     return 658;
    }
if (index == 268) {
     return 657;
    }
if (index == 269) {
     return 656;
    }
if (index == 270) {
     return 661;
    }
if (index == 271) {
     return 659;
    }
if (index == 272) {
     return 657;
    }
if (index == 273) {
     return 660;
    }
if (index == 274) {
     return 659;
    }
if (index == 275) {
     return 659;
    }
if (index == 276) {
     return 659;
    }
if (index == 277) {
     return 657;
    }
if (index == 278) {
     return 661;
    }
if (index == 279) {
     return 654;
    }
if (index == 280) {
     return 657;
    }
if (index == 281) {
     return 653;
    }
if (index == 282) {
     return 660;
    }
if (index == 283) {
     return 659;
    }
if (index == 284) {
     return 659;
    }
if (index == 285) {
     return 661;
    }
if (index == 286) {
     return 657;
    }
if (index == 287) {
     return 657;
    }
if (index == 288) {
     return 657;
    }
if (index == 289) {
     return 659;
    }
if (index == 290) {
     return 661;
    }
if (index == 291) {
     return 657;
    }
if (index == 292) {
     return 383;
    }
if (index == 293) {
     return 653;
    }
if (index == 294) {
     return 657;
    }
if (index == 295) {
     return 659;
    }
if (index == 296) {
     return 383;
    }
if (index == 297) {
     return 653;
    }
if (index == 298) {
     return 657;
    }
if (index == 299) {
     return 658;
    }
if (index == 300) {
     return 658;
    }
if (index == 301) {
     return 659;
    }
if (index == 302) {
     return 657;
    }
if (index == 303) {
     return 659;
    }
if (index == 304) {
     return 659;
    }
if (index == 305) {
     return 661;
    }
if (index == 306) {
     return 657;
    }
if (index == 307) {
     return 659;
    }
if (index == 308) {
     return 657;
    }
if (index == 309) {
     return 653;
    }
if (index == 310) {
     return 657;
    }
if (index == 311) {
     return 662;
    }
if (index == 312) {
     return 658;
    }
if (index == 313) {
     return 660;
    }
if (index == 314) {
     return 657;
    }
if (index == 315) {
     return 661;
    }
if (index == 316) {
     return 383;
    }
if (index == 317) {
     return 653;
    }
if (index == 318) {
     return 657;
    }
if (index == 319) {
     return 661;
    }
if (index == 320) {
     return 660;
    }
if (index == 321) {
     return 660;
    }
if (index == 322) {
     return 657;
    }
if (index == 323) {
     return 660;
    }
if (index == 324) {
     return 663;
    }
if (index == 325) {
     return 661;
    }
if (index == 326) {
     return 383;
    }
if (index == 327) {
     return 653;
    }
if (index == 328) {
     return 657;
    }
if (index == 329) {
     return 657;
    }
if (index == 330) {
     return 658;
    }
if (index == 331) {
     return 1318;
    }
if (index == 332) {
     return 1293;
    }
if (index == 333) {
     return 657;
    }
if (index == 334) {
     return 660;
    }
if (index == 335) {
     return 661;
    }
if (index == 336) {
     return 383;
    }
if (index == 337) {
     return 653;
    }
if (index == 338) {
     return 657;
    }
if (index == 339) {
     return 656;
    }
if (index == 340) {
     return 661;
    }
if (index == 341) {
     return 656;
    }
if (index == 342) {
     return 659;
    }
if (index == 343) {
     return 657;
    }
if (index == 344) {
     return 657;
    }
if (index == 345) {
     return 659;
    }
if (index == 346) {
     return 657;
    }
if (index == 347) {
     return 660;
    }
if (index == 348) {
     return 662;
    }
if (index == 349) {
     return 658;
    }
if (index == 350) {
     return 657;
    }
if (index == 351) {
     return 657;
    }
if (index == 352) {
     return 657;
    }
if (index == 353) {
     return 657;
    }
if (index == 354) {
     return 657;
    }
if (index == 355) {
     return 653;
    }
if (index == 356) {
     return 658;
    }
if (index == 357) {
     return 657;
    }
if (index == 358) {
     return 657;
    }
if (index == 359) {
     return 658;
    }
if (index == 360) {
     return 659;
    }
if (index == 361) {
     return 661;
    }
if (index == 362) {
     return 657;
    }
if (index == 363) {
     return 653;
    }
if (index == 364) {
     return 657;
    }
if (index == 365) {
     return 657;
    }
if (index == 366) {
     return 657;
    }
if (index == 367) {
     return 657;
    }
if (index == 368) {
     return 657;
    }
if (index == 369) {
     return 657;
    }
if (index == 370) {
     return 657;
    }
if (index == 371) {
     return 656;
    }
if (index == 372) {
     return 659;
    }
if (index == 373) {
     return 654;
    }
if (index == 374) {
     return 661;
    }
if (index == 375) {
     return 653;
    }
if (index == 376) {
     return 662;
    }
if (index == 377) {
     return 653;
    }
if (index == 378) {
     return 657;
    }
if (index == 379) {
     return 654;
    }
if (index == 380) {
     return 662;
    }
if (index == 381) {
     return 657;
    }
if (index == 382) {
     return 664;
    }
if (index == 383) {
     return 654;
    }
if (index == 384) {
     return 657;
    }
if (index == 385) {
     return 655;
    }
if (index == 386) {
     return 660;
    }
if (index == 387) {
     return 658;
    }
if (index == 388) {
     return 657;
    }
if (index == 389) {
     return 656;
    }
if (index == 390) {
     return 663;
    }
if (index == 391) {
     return 653;
    }
if (index == 392) {
     return 661;
    }
if (index == 393) {
     return 653;
    }
if (index == 394) {
     return 657;
    }
if (index == 395) {
     return 653;
    }
if (index == 396) {
     return 383;
    }
if (index == 397) {
     return 653;
    }
if (index == 398) {
     return 662;
    }
if (index == 399) {
     return 658;
    }
if (index == 400) {
     return 661;
    }
if (index == 401) {
     return 658;
    }
if (index == 402) {
     return 660;
    }
if (index == 403) {
     return 654;
    }
if (index == 404) {
     return 657;
    }
if (index == 405) {
     return 653;
    }
if (index == 406) {
     return 657;
    }
if (index == 407) {
     return 654;
    }
if (index == 408) {
     return 660;
    }
if (index == 409) {
     return 653;
    }
if (index == 410) {
     return 660;
    }
if (index == 411) {
     return 656;
    }
if (index == 412) {
     return 662;
    }
if (index == 413) {
     return 653;
    }
if (index == 414) {
     return 657;
    }
if (index == 415) {
     return 653;
    }
if (index == 416) {
     return 664;
    }
if (index == 417) {
     return 653;
    }
if (index == 418) {
     return 654;
    }
if (index == 419) {
     return 708;
    }
if (index > 419) {
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
    var url = '/fedora/get/seapage:090_' + imgStr + '/digitalImage';
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
br.numLeafs = 420;

// Book title and the URL used for the book title link
br.bookTitle= "The kingdom of the yellow robe. Being sketches of the domestic and religious rites and ceremonies of the Siamese, by Ernest Young. With illustrations by E. A. Norbury ... and from photographs by the author";
br.bookAuthor= "Young, Ernest";
br.bookPub= "Westminster: A. Constable, 1898";
br.bookKeyword= "Thailand--Social life and customs<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--Religion";
br.bookUrl  = '/catalog/sea:090';

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
