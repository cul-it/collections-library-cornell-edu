//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 457;
    }
if (index == 1) {
     return 865;
    }
if (index == 2) {
     return 854;
    }
if (index == 3) {
     return 746;
    }
if (index == 4) {
     return 746;
    }
if (index == 5) {
     return 746;
    }
if (index == 6) {
     return 603;
    }
if (index == 7) {
     return 746;
    }
if (index == 8) {
     return 415;
    }
if (index == 9) {
     return 409;
    }
if (index == 10) {
     return 419;
    }
if (index == 11) {
     return 392;
    }
if (index == 12) {
     return 392;
    }
if (index == 13) {
     return 392;
    }
if (index == 14) {
     return 399;
    }
if (index == 15) {
     return 392;
    }
if (index == 16) {
     return 388;
    }
if (index == 17) {
     return 392;
    }
if (index == 18) {
     return 393;
    }
if (index == 19) {
     return 399;
    }
if (index == 20) {
     return 383;
    }
if (index == 21) {
     return 400;
    }
if (index == 22) {
     return 372;
    }
if (index == 23) {
     return 389;
    }
if (index == 24) {
     return 392;
    }
if (index == 25) {
     return 388;
    }
if (index == 26) {
     return 380;
    }
if (index == 27) {
     return 394;
    }
if (index == 28) {
     return 641;
    }
if (index == 29) {
     return 382;
    }
if (index == 30) {
     return 371;
    }
if (index == 31) {
     return 399;
    }
if (index == 32) {
     return 376;
    }
if (index == 33) {
     return 391;
    }
if (index == 34) {
     return 383;
    }
if (index == 35) {
     return 385;
    }
if (index == 36) {
     return 371;
    }
if (index == 37) {
     return 390;
    }
if (index == 38) {
     return 644;
    }
if (index == 39) {
     return 383;
    }
if (index == 40) {
     return 392;
    }
if (index == 41) {
     return 398;
    }
if (index == 42) {
     return 644;
    }
if (index == 43) {
     return 374;
    }
if (index == 44) {
     return 374;
    }
if (index == 45) {
     return 387;
    }
if (index == 46) {
     return 390;
    }
if (index == 47) {
     return 392;
    }
if (index == 48) {
     return 383;
    }
if (index == 49) {
     return 396;
    }
if (index == 50) {
     return 387;
    }
if (index == 51) {
     return 387;
    }
if (index == 52) {
     return 381;
    }
if (index == 53) {
     return 392;
    }
if (index == 54) {
     return 628;
    }
if (index == 55) {
     return 387;
    }
if (index == 56) {
     return 389;
    }
if (index == 57) {
     return 394;
    }
if (index == 58) {
     return 384;
    }
if (index == 59) {
     return 387;
    }
if (index == 60) {
     return 378;
    }
if (index == 61) {
     return 387;
    }
if (index == 62) {
     return 388;
    }
if (index == 63) {
     return 392;
    }
if (index == 64) {
     return 380;
    }
if (index == 65) {
     return 390;
    }
if (index == 66) {
     return 644;
    }
if (index == 67) {
     return 387;
    }
if (index == 68) {
     return 382;
    }
if (index == 69) {
     return 402;
    }
if (index == 70) {
     return 378;
    }
if (index == 71) {
     return 394;
    }
if (index == 72) {
     return 383;
    }
if (index == 73) {
     return 399;
    }
if (index == 74) {
     return 644;
    }
if (index == 75) {
     return 387;
    }
if (index == 76) {
     return 380;
    }
if (index == 77) {
     return 387;
    }
if (index == 78) {
     return 380;
    }
if (index == 79) {
     return 387;
    }
if (index == 80) {
     return 409;
    }
if (index == 81) {
     return 387;
    }
if (index == 82) {
     return 382;
    }
if (index == 83) {
     return 390;
    }
if (index == 84) {
     return 381;
    }
if (index == 85) {
     return 383;
    }
if (index == 86) {
     return 390;
    }
if (index == 87) {
     return 381;
    }
if (index == 88) {
     return 644;
    }
if (index == 89) {
     return 361;
    }
if (index == 90) {
     return 381;
    }
if (index == 91) {
     return 380;
    }
if (index == 92) {
     return 644;
    }
if (index == 93) {
     return 361;
    }
if (index == 94) {
     return 386;
    }
if (index == 95) {
     return 367;
    }
if (index == 96) {
     return 644;
    }
if (index == 97) {
     return 374;
    }
if (index == 98) {
     return 389;
    }
if (index == 99) {
     return 386;
    }
if (index == 100) {
     return 378;
    }
if (index == 101) {
     return 374;
    }
if (index == 102) {
     return 390;
    }
if (index == 103) {
     return 388;
    }
if (index == 104) {
     return 396;
    }
if (index == 105) {
     return 379;
    }
if (index == 106) {
     return 644;
    }
if (index == 107) {
     return 374;
    }
if (index == 108) {
     return 384;
    }
if (index == 109) {
     return 388;
    }
if (index == 110) {
     return 378;
    }
if (index == 111) {
     return 374;
    }
if (index == 112) {
     return 389;
    }
if (index == 113) {
     return 388;
    }
if (index == 114) {
     return 644;
    }
if (index == 115) {
     return 374;
    }
if (index == 116) {
     return 391;
    }
if (index == 117) {
     return 386;
    }
if (index == 118) {
     return 396;
    }
if (index == 119) {
     return 389;
    }
if (index == 120) {
     return 390;
    }
if (index == 121) {
     return 386;
    }
if (index == 122) {
     return 397;
    }
if (index == 123) {
     return 385;
    }
if (index == 124) {
     return 387;
    }
if (index == 125) {
     return 398;
    }
if (index == 126) {
     return 399;
    }
if (index == 127) {
     return 387;
    }
if (index == 128) {
     return 400;
    }
if (index == 129) {
     return 379;
    }
if (index == 130) {
     return 642;
    }
if (index == 131) {
     return 374;
    }
if (index == 132) {
     return 399;
    }
if (index == 133) {
     return 389;
    }
if (index == 134) {
     return 378;
    }
if (index == 135) {
     return 374;
    }
if (index == 136) {
     return 384;
    }
if (index == 137) {
     return 383;
    }
if (index == 138) {
     return 379;
    }
if (index == 139) {
     return 386;
    }
if (index == 140) {
     return 391;
    }
if (index == 141) {
     return 387;
    }
if (index == 142) {
     return 365;
    }
if (index == 143) {
     return 389;
    }
if (index == 144) {
     return 382;
    }
if (index == 145) {
     return 388;
    }
if (index == 146) {
     return 383;
    }
if (index == 147) {
     return 374;
    }
if (index == 148) {
     return 391;
    }
if (index == 149) {
     return 392;
    }
if (index == 150) {
     return 398;
    }
if (index == 151) {
     return 391;
    }
if (index == 152) {
     return 383;
    }
if (index == 153) {
     return 374;
    }
if (index == 154) {
     return 390;
    }
if (index == 155) {
     return 394;
    }
if (index == 156) {
     return 389;
    }
if (index == 157) {
     return 391;
    }
if (index == 158) {
     return 383;
    }
if (index == 159) {
     return 374;
    }
if (index == 160) {
     return 381;
    }
if (index == 161) {
     return 384;
    }
if (index == 162) {
     return 631;
    }
if (index == 163) {
     return 374;
    }
if (index == 164) {
     return 384;
    }
if (index == 165) {
     return 383;
    }
if (index == 166) {
     return 374;
    }
if (index == 167) {
     return 394;
    }
if (index == 168) {
     return 631;
    }
if (index == 169) {
     return 374;
    }
if (index == 170) {
     return 376;
    }
if (index == 171) {
     return 375;
    }
if (index == 172) {
     return 648;
    }
if (index == 173) {
     return 374;
    }
if (index == 174) {
     return 373;
    }
if (index == 175) {
     return 380;
    }
if (index == 176) {
     return 369;
    }
if (index == 177) {
     return 377;
    }
if (index == 178) {
     return 648;
    }
if (index == 179) {
     return 374;
    }
if (index == 180) {
     return 388;
    }
if (index == 181) {
     return 385;
    }
if (index == 182) {
     return 383;
    }
if (index == 183) {
     return 374;
    }
if (index == 184) {
     return 394;
    }
if (index == 185) {
     return 394;
    }
if (index == 186) {
     return 648;
    }
if (index == 187) {
     return 370;
    }
if (index == 188) {
     return 403;
    }
if (index == 189) {
     return 378;
    }
if (index == 190) {
     return 645;
    }
if (index == 191) {
     return 379;
    }
if (index == 192) {
     return 391;
    }
if (index == 193) {
     return 402;
    }
if (index == 194) {
     return 645;
    }
if (index == 195) {
     return 379;
    }
if (index == 196) {
     return 396;
    }
if (index == 197) {
     return 402;
    }
if (index == 198) {
     return 648;
    }
if (index == 199) {
     return 379;
    }
if (index == 200) {
     return 381;
    }
if (index == 201) {
     return 392;
    }
if (index == 202) {
     return 648;
    }
if (index == 203) {
     return 379;
    }
if (index == 204) {
     return 386;
    }
if (index == 205) {
     return 393;
    }
if (index == 206) {
     return 648;
    }
if (index == 207) {
     return 361;
    }
if (index == 208) {
     return 392;
    }
if (index == 209) {
     return 388;
    }
if (index == 210) {
     return 387;
    }
if (index == 211) {
     return 392;
    }
if (index == 212) {
     return 392;
    }
if (index == 213) {
     return 375;
    }
if (index == 214) {
     return 648;
    }
if (index == 215) {
     return 379;
    }
if (index == 216) {
     return 386;
    }
if (index == 217) {
     return 386;
    }
if (index == 218) {
     return 386;
    }
if (index == 219) {
     return 385;
    }
if (index == 220) {
     return 380;
    }
if (index == 221) {
     return 374;
    }
if (index == 222) {
     return 647;
    }
if (index == 223) {
     return 396;
    }
if (index == 224) {
     return 380;
    }
if (index == 225) {
     return 387;
    }
if (index == 226) {
     return 377;
    }
if (index == 227) {
     return 389;
    }
if (index == 228) {
     return 377;
    }
if (index == 229) {
     return 386;
    }
if (index == 230) {
     return 368;
    }
if (index == 231) {
     return 368;
    }
if (index == 232) {
     return 374;
    }
if (index == 233) {
     return 386;
    }
if (index == 234) {
     return 370;
    }
if (index == 235) {
     return 384;
    }
if (index == 236) {
     return 369;
    }
if (index == 237) {
     return 373;
    }
if (index == 238) {
     return 371;
    }
if (index == 239) {
     return 396;
    }
if (index == 240) {
     return 373;
    }
if (index == 241) {
     return 396;
    }
if (index == 242) {
     return 376;
    }
if (index == 243) {
     return 379;
    }
if (index == 244) {
     return 370;
    }
if (index == 245) {
     return 396;
    }
if (index == 246) {
     return 384;
    }
if (index == 247) {
     return 372;
    }
if (index == 248) {
     return 370;
    }
if (index == 249) {
     return 393;
    }
if (index == 250) {
     return 648;
    }
if (index == 251) {
     return 396;
    }
if (index == 252) {
     return 374;
    }
if (index == 253) {
     return 389;
    }
if (index == 254) {
     return 376;
    }
if (index == 255) {
     return 398;
    }
if (index == 256) {
     return 368;
    }
if (index == 257) {
     return 394;
    }
if (index == 258) {
     return 363;
    }
if (index == 259) {
     return 394;
    }
if (index == 260) {
     return 356;
    }
if (index == 261) {
     return 383;
    }
if (index == 262) {
     return 385;
    }
if (index == 263) {
     return 387;
    }
if (index == 264) {
     return 388;
    }
if (index == 265) {
     return 388;
    }
if (index == 266) {
     return 648;
    }
if (index == 267) {
     return 398;
    }
if (index == 268) {
     return 383;
    }
if (index == 269) {
     return 393;
    }
if (index == 270) {
     return 648;
    }
if (index == 271) {
     return 409;
    }
if (index == 272) {
     return 383;
    }
if (index == 273) {
     return 389;
    }
if (index == 274) {
     return 383;
    }
if (index == 275) {
     return 398;
    }
if (index == 276) {
     return 380;
    }
if (index == 277) {
     return 385;
    }
if (index == 278) {
     return 648;
    }
if (index == 279) {
     return 404;
    }
if (index == 280) {
     return 364;
    }
if (index == 281) {
     return 386;
    }
if (index == 282) {
     return 648;
    }
if (index == 283) {
     return 385;
    }
if (index == 284) {
     return 386;
    }
if (index == 285) {
     return 386;
    }
if (index == 286) {
     return 648;
    }
if (index == 287) {
     return 382;
    }
if (index == 288) {
     return 391;
    }
if (index == 289) {
     return 372;
    }
if (index == 290) {
     return 648;
    }
if (index == 291) {
     return 392;
    }
if (index == 292) {
     return 383;
    }
if (index == 293) {
     return 371;
    }
if (index == 294) {
     return 383;
    }
if (index == 295) {
     return 392;
    }
if (index == 296) {
     return 383;
    }
if (index == 297) {
     return 398;
    }
if (index == 298) {
     return 389;
    }
if (index == 299) {
     return 371;
    }
if (index == 300) {
     return 648;
    }
if (index == 301) {
     return 392;
    }
if (index == 302) {
     return 386;
    }
if (index == 303) {
     return 398;
    }
if (index == 304) {
     return 365;
    }
if (index == 305) {
     return 392;
    }
if (index == 306) {
     return 385;
    }
if (index == 307) {
     return 388;
    }
if (index == 308) {
     return 389;
    }
if (index == 309) {
     return 382;
    }
if (index == 310) {
     return 386;
    }
if (index == 311) {
     return 392;
    }
if (index == 312) {
     return 383;
    }
if (index == 313) {
     return 381;
    }
if (index == 314) {
     return 386;
    }
if (index == 315) {
     return 382;
    }
if (index == 316) {
     return 383;
    }
if (index == 317) {
     return 392;
    }
if (index == 318) {
     return 394;
    }
if (index == 319) {
     return 392;
    }
if (index == 320) {
     return 388;
    }
if (index == 321) {
     return 374;
    }
if (index == 322) {
     return 391;
    }
if (index == 323) {
     return 380;
    }
if (index == 324) {
     return 648;
    }
if (index == 325) {
     return 392;
    }
if (index == 326) {
     return 383;
    }
if (index == 327) {
     return 400;
    }
if (index == 328) {
     return 390;
    }
if (index == 329) {
     return 383;
    }
if (index == 330) {
     return 648;
    }
if (index == 331) {
     return 392;
    }
if (index == 332) {
     return 389;
    }
if (index == 333) {
     return 379;
    }
if (index == 334) {
     return 374;
    }
if (index == 335) {
     return 374;
    }
if (index == 336) {
     return 382;
    }
if (index == 337) {
     return 379;
    }
if (index == 338) {
     return 385;
    }
if (index == 339) {
     return 397;
    }
if (index == 340) {
     return 383;
    }
if (index == 341) {
     return 397;
    }
if (index == 342) {
     return 385;
    }
if (index == 343) {
     return 392;
    }
if (index == 344) {
     return 383;
    }
if (index == 345) {
     return 446;
    }
if (index > 345) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 693;
    }
if (index == 1) {
     return 1334;
    }
if (index == 2) {
     return 1364;
    }
if (index == 3) {
     return 1272;
    }
if (index == 4) {
     return 1272;
    }
if (index == 5) {
     return 1272;
    }
if (index == 6) {
     return 644;
    }
if (index == 7) {
     return 1272;
    }
if (index == 8) {
     return 670;
    }
if (index == 9) {
     return 653;
    }
if (index == 10) {
     return 651;
    }
if (index == 11) {
     return 653;
    }
if (index == 12) {
     return 648;
    }
if (index == 13) {
     return 648;
    }
if (index == 14) {
     return 652;
    }
if (index == 15) {
     return 648;
    }
if (index == 16) {
     return 646;
    }
if (index == 17) {
     return 648;
    }
if (index == 18) {
     return 645;
    }
if (index == 19) {
     return 652;
    }
if (index == 20) {
     return 654;
    }
if (index == 21) {
     return 653;
    }
if (index == 22) {
     return 645;
    }
if (index == 23) {
     return 654;
    }
if (index == 24) {
     return 644;
    }
if (index == 25) {
     return 663;
    }
if (index == 26) {
     return 649;
    }
if (index == 27) {
     return 661;
    }
if (index == 28) {
     return 392;
    }
if (index == 29) {
     return 647;
    }
if (index == 30) {
     return 644;
    }
if (index == 31) {
     return 658;
    }
if (index == 32) {
     return 644;
    }
if (index == 33) {
     return 653;
    }
if (index == 34) {
     return 644;
    }
if (index == 35) {
     return 654;
    }
if (index == 36) {
     return 644;
    }
if (index == 37) {
     return 661;
    }
if (index == 38) {
     return 392;
    }
if (index == 39) {
     return 648;
    }
if (index == 40) {
     return 644;
    }
if (index == 41) {
     return 657;
    }
if (index == 42) {
     return 392;
    }
if (index == 43) {
     return 648;
    }
if (index == 44) {
     return 647;
    }
if (index == 45) {
     return 648;
    }
if (index == 46) {
     return 650;
    }
if (index == 47) {
     return 651;
    }
if (index == 48) {
     return 646;
    }
if (index == 49) {
     return 653;
    }
if (index == 50) {
     return 648;
    }
if (index == 51) {
     return 648;
    }
if (index == 52) {
     return 645;
    }
if (index == 53) {
     return 651;
    }
if (index == 54) {
     return 374;
    }
if (index == 55) {
     return 648;
    }
if (index == 56) {
     return 649;
    }
if (index == 57) {
     return 652;
    }
if (index == 58) {
     return 647;
    }
if (index == 59) {
     return 648;
    }
if (index == 60) {
     return 644;
    }
if (index == 61) {
     return 648;
    }
if (index == 62) {
     return 649;
    }
if (index == 63) {
     return 651;
    }
if (index == 64) {
     return 644;
    }
if (index == 65) {
     return 650;
    }
if (index == 66) {
     return 378;
    }
if (index == 67) {
     return 648;
    }
if (index == 68) {
     return 646;
    }
if (index == 69) {
     return 657;
    }
if (index == 70) {
     return 644;
    }
if (index == 71) {
     return 652;
    }
if (index == 72) {
     return 646;
    }
if (index == 73) {
     return 655;
    }
if (index == 74) {
     return 378;
    }
if (index == 75) {
     return 653;
    }
if (index == 76) {
     return 645;
    }
if (index == 77) {
     return 653;
    }
if (index == 78) {
     return 645;
    }
if (index == 79) {
     return 653;
    }
if (index == 80) {
     return 644;
    }
if (index == 81) {
     return 653;
    }
if (index == 82) {
     return 647;
    }
if (index == 83) {
     return 654;
    }
if (index == 84) {
     return 646;
    }
if (index == 85) {
     return 666;
    }
if (index == 86) {
     return 651;
    }
if (index == 87) {
     return 661;
    }
if (index == 88) {
     return 378;
    }
if (index == 89) {
     return 653;
    }
if (index == 90) {
     return 646;
    }
if (index == 91) {
     return 663;
    }
if (index == 92) {
     return 378;
    }
if (index == 93) {
     return 653;
    }
if (index == 94) {
     return 649;
    }
if (index == 95) {
     return 656;
    }
if (index == 96) {
     return 378;
    }
if (index == 97) {
     return 653;
    }
if (index == 98) {
     return 650;
    }
if (index == 99) {
     return 660;
    }
if (index == 100) {
     return 644;
    }
if (index == 101) {
     return 653;
    }
if (index == 102) {
     return 651;
    }
if (index == 103) {
     return 660;
    }
if (index == 104) {
     return 654;
    }
if (index == 105) {
     return 655;
    }
if (index == 106) {
     return 378;
    }
if (index == 107) {
     return 653;
    }
if (index == 108) {
     return 648;
    }
if (index == 109) {
     return 660;
    }
if (index == 110) {
     return 644;
    }
if (index == 111) {
     return 653;
    }
if (index == 112) {
     return 650;
    }
if (index == 113) {
     return 660;
    }
if (index == 114) {
     return 378;
    }
if (index == 115) {
     return 653;
    }
if (index == 116) {
     return 651;
    }
if (index == 117) {
     return 659;
    }
if (index == 118) {
     return 654;
    }
if (index == 119) {
     return 661;
    }
if (index == 120) {
     return 651;
    }
if (index == 121) {
     return 659;
    }
if (index == 122) {
     return 655;
    }
if (index == 123) {
     return 658;
    }
if (index == 124) {
     return 649;
    }
if (index == 125) {
     return 666;
    }
if (index == 126) {
     return 656;
    }
if (index == 127) {
     return 659;
    }
if (index == 128) {
     return 656;
    }
if (index == 129) {
     return 655;
    }
if (index == 130) {
     return 371;
    }
if (index == 131) {
     return 652;
    }
if (index == 132) {
     return 656;
    }
if (index == 133) {
     return 661;
    }
if (index == 134) {
     return 644;
    }
if (index == 135) {
     return 652;
    }
if (index == 136) {
     return 655;
    }
if (index == 137) {
     return 657;
    }
if (index == 138) {
     return 648;
    }
if (index == 139) {
     return 659;
    }
if (index == 140) {
     return 654;
    }
if (index == 141) {
     return 659;
    }
if (index == 142) {
     return 647;
    }
if (index == 143) {
     return 661;
    }
if (index == 144) {
     return 641;
    }
if (index == 145) {
     return 660;
    }
if (index == 146) {
     return 631;
    }
if (index == 147) {
     return 652;
    }
if (index == 148) {
     return 635;
    }
if (index == 149) {
     return 662;
    }
if (index == 150) {
     return 640;
    }
if (index == 151) {
     return 662;
    }
if (index == 152) {
     return 631;
    }
if (index == 153) {
     return 652;
    }
if (index == 154) {
     return 635;
    }
if (index == 155) {
     return 664;
    }
if (index == 156) {
     return 634;
    }
if (index == 157) {
     return 662;
    }
if (index == 158) {
     return 631;
    }
if (index == 159) {
     return 652;
    }
if (index == 160) {
     return 640;
    }
if (index == 161) {
     return 658;
    }
if (index == 162) {
     return 369;
    }
if (index == 163) {
     return 652;
    }
if (index == 164) {
     return 640;
    }
if (index == 165) {
     return 657;
    }
if (index == 166) {
     return 640;
    }
if (index == 167) {
     return 663;
    }
if (index == 168) {
     return 361;
    }
if (index == 169) {
     return 652;
    }
if (index == 170) {
     return 636;
    }
if (index == 171) {
     return 653;
    }
if (index == 172) {
     return 383;
    }
if (index == 173) {
     return 653;
    }
if (index == 174) {
     return 654;
    }
if (index == 175) {
     return 656;
    }
if (index == 176) {
     return 650;
    }
if (index == 177) {
     return 655;
    }
if (index == 178) {
     return 383;
    }
if (index == 179) {
     return 653;
    }
if (index == 180) {
     return 651;
    }
if (index == 181) {
     return 659;
    }
if (index == 182) {
     return 648;
    }
if (index == 183) {
     return 653;
    }
if (index == 184) {
     return 655;
    }
if (index == 185) {
     return 649;
    }
if (index == 186) {
     return 362;
    }
if (index == 187) {
     return 641;
    }
if (index == 188) {
     return 660;
    }
if (index == 189) {
     return 665;
    }
if (index == 190) {
     return 367;
    }
if (index == 191) {
     return 653;
    }
if (index == 192) {
     return 659;
    }
if (index == 193) {
     return 666;
    }
if (index == 194) {
     return 368;
    }
if (index == 195) {
     return 653;
    }
if (index == 196) {
     return 656;
    }
if (index == 197) {
     return 666;
    }
if (index == 198) {
     return 364;
    }
if (index == 199) {
     return 653;
    }
if (index == 200) {
     return 656;
    }
if (index == 201) {
     return 668;
    }
if (index == 202) {
     return 365;
    }
if (index == 203) {
     return 653;
    }
if (index == 204) {
     return 666;
    }
if (index == 205) {
     return 667;
    }
if (index == 206) {
     return 383;
    }
if (index == 207) {
     return 653;
    }
if (index == 208) {
     return 666;
    }
if (index == 209) {
     return 667;
    }
if (index == 210) {
     return 667;
    }
if (index == 211) {
     return 669;
    }
if (index == 212) {
     return 664;
    }
if (index == 213) {
     return 661;
    }
if (index == 214) {
     return 356;
    }
if (index == 215) {
     return 653;
    }
if (index == 216) {
     return 664;
    }
if (index == 217) {
     return 653;
    }
if (index == 218) {
     return 663;
    }
if (index == 219) {
     return 658;
    }
if (index == 220) {
     return 666;
    }
if (index == 221) {
     return 655;
    }
if (index == 222) {
     return 355;
    }
if (index == 223) {
     return 653;
    }
if (index == 224) {
     return 663;
    }
if (index == 225) {
     return 664;
    }
if (index == 226) {
     return 657;
    }
if (index == 227) {
     return 662;
    }
if (index == 228) {
     return 654;
    }
if (index == 229) {
     return 663;
    }
if (index == 230) {
     return 655;
    }
if (index == 231) {
     return 655;
    }
if (index == 232) {
     return 652;
    }
if (index == 233) {
     return 666;
    }
if (index == 234) {
     return 648;
    }
if (index == 235) {
     return 667;
    }
if (index == 236) {
     return 659;
    }
if (index == 237) {
     return 667;
    }
if (index == 238) {
     return 658;
    }
if (index == 239) {
     return 653;
    }
if (index == 240) {
     return 648;
    }
if (index == 241) {
     return 653;
    }
if (index == 242) {
     return 656;
    }
if (index == 243) {
     return 651;
    }
if (index == 244) {
     return 648;
    }
if (index == 245) {
     return 653;
    }
if (index == 246) {
     return 649;
    }
if (index == 247) {
     return 643;
    }
if (index == 248) {
     return 648;
    }
if (index == 249) {
     return 645;
    }
if (index == 250) {
     return 368;
    }
if (index == 251) {
     return 652;
    }
if (index == 252) {
     return 649;
    }
if (index == 253) {
     return 651;
    }
if (index == 254) {
     return 648;
    }
if (index == 255) {
     return 654;
    }
if (index == 256) {
     return 649;
    }
if (index == 257) {
     return 653;
    }
if (index == 258) {
     return 647;
    }
if (index == 259) {
     return 628;
    }
if (index == 260) {
     return 648;
    }
if (index == 261) {
     return 643;
    }
if (index == 262) {
     return 650;
    }
if (index == 263) {
     return 643;
    }
if (index == 264) {
     return 651;
    }
if (index == 265) {
     return 640;
    }
if (index == 266) {
     return 383;
    }
if (index == 267) {
     return 640;
    }
if (index == 268) {
     return 648;
    }
if (index == 269) {
     return 643;
    }
if (index == 270) {
     return 383;
    }
if (index == 271) {
     return 637;
    }
if (index == 272) {
     return 648;
    }
if (index == 273) {
     return 644;
    }
if (index == 274) {
     return 648;
    }
if (index == 275) {
     return 640;
    }
if (index == 276) {
     return 653;
    }
if (index == 277) {
     return 641;
    }
if (index == 278) {
     return 383;
    }
if (index == 279) {
     return 640;
    }
if (index == 280) {
     return 650;
    }
if (index == 281) {
     return 640;
    }
if (index == 282) {
     return 383;
    }
if (index == 283) {
     return 637;
    }
if (index == 284) {
     return 650;
    }
if (index == 285) {
     return 643;
    }
if (index == 286) {
     return 383;
    }
if (index == 287) {
     return 640;
    }
if (index == 288) {
     return 653;
    }
if (index == 289) {
     return 640;
    }
if (index == 290) {
     return 383;
    }
if (index == 291) {
     return 640;
    }
if (index == 292) {
     return 648;
    }
if (index == 293) {
     return 646;
    }
if (index == 294) {
     return 648;
    }
if (index == 295) {
     return 640;
    }
if (index == 296) {
     return 648;
    }
if (index == 297) {
     return 643;
    }
if (index == 298) {
     return 652;
    }
if (index == 299) {
     return 640;
    }
if (index == 300) {
     return 383;
    }
if (index == 301) {
     return 640;
    }
if (index == 302) {
     return 650;
    }
if (index == 303) {
     return 644;
    }
if (index == 304) {
     return 650;
    }
if (index == 305) {
     return 635;
    }
if (index == 306) {
     return 650;
    }
if (index == 307) {
     return 637;
    }
if (index == 308) {
     return 652;
    }
if (index == 309) {
     return 641;
    }
if (index == 310) {
     return 650;
    }
if (index == 311) {
     return 636;
    }
if (index == 312) {
     return 648;
    }
if (index == 313) {
     return 646;
    }
if (index == 314) {
     return 650;
    }
if (index == 315) {
     return 640;
    }
if (index == 316) {
     return 648;
    }
if (index == 317) {
     return 640;
    }
if (index == 318) {
     return 655;
    }
if (index == 319) {
     return 640;
    }
if (index == 320) {
     return 651;
    }
if (index == 321) {
     return 643;
    }
if (index == 322) {
     return 653;
    }
if (index == 323) {
     return 636;
    }
if (index == 324) {
     return 383;
    }
if (index == 325) {
     return 640;
    }
if (index == 326) {
     return 648;
    }
if (index == 327) {
     return 645;
    }
if (index == 328) {
     return 653;
    }
if (index == 329) {
     return 638;
    }
if (index == 330) {
     return 372;
    }
if (index == 331) {
     return 640;
    }
if (index == 332) {
     return 652;
    }
if (index == 333) {
     return 638;
    }
if (index == 334) {
     return 648;
    }
if (index == 335) {
     return 641;
    }
if (index == 336) {
     return 649;
    }
if (index == 337) {
     return 644;
    }
if (index == 338) {
     return 650;
    }
if (index == 339) {
     return 643;
    }
if (index == 340) {
     return 648;
    }
if (index == 341) {
     return 639;
    }
if (index == 342) {
     return 644;
    }
if (index == 343) {
     return 640;
    }
if (index == 344) {
     return 648;
    }
if (index == 345) {
     return 700;
    }
if (index > 345) {
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
    var url = '/fedora/get/seapage:088_' + imgStr + '/digitalImage';
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
br.numLeafs = 346;

// Book title and the URL used for the book title link
br.bookTitle= "Siam : on the Meinam from the gulf to Ayuthia : together with three romances illustrative of Siamese life and customs";
br.bookAuthor= "Sommerville, Maxwell";
br.bookPub= "London: S. Low, Marston and Co., Ltd, 1897";
br.bookKeyword= "Thailand--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thailand--Social life and customs";
br.bookUrl  = '/catalog/sea:088';

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
