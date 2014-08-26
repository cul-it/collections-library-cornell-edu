//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 524;
    }
if (index == 1) {
     return 433;
    }
if (index == 2) {
     return 458;
    }
if (index == 3) {
     return 471;
    }
if (index == 4) {
     return 471;
    }
if (index == 5) {
     return 392;
    }
if (index == 6) {
     return 430;
    }
if (index == 7) {
     return 431;
    }
if (index == 8) {
     return 422;
    }
if (index == 9) {
     return 384;
    }
if (index == 10) {
     return 384;
    }
if (index == 11) {
     return 377;
    }
if (index == 12) {
     return 375;
    }
if (index == 13) {
     return 480;
    }
if (index == 14) {
     return 445;
    }
if (index == 15) {
     return 399;
    }
if (index == 16) {
     return 435;
    }
if (index == 17) {
     return 377;
    }
if (index == 18) {
     return 400;
    }
if (index == 19) {
     return 402;
    }
if (index == 20) {
     return 408;
    }
if (index == 21) {
     return 388;
    }
if (index == 22) {
     return 368;
    }
if (index == 23) {
     return 398;
    }
if (index == 24) {
     return 421;
    }
if (index == 25) {
     return 389;
    }
if (index == 26) {
     return 400;
    }
if (index == 27) {
     return 386;
    }
if (index == 28) {
     return 388;
    }
if (index == 29) {
     return 391;
    }
if (index == 30) {
     return 393;
    }
if (index == 31) {
     return 387;
    }
if (index == 32) {
     return 399;
    }
if (index == 33) {
     return 372;
    }
if (index == 34) {
     return 389;
    }
if (index == 35) {
     return 370;
    }
if (index == 36) {
     return 407;
    }
if (index == 37) {
     return 374;
    }
if (index == 38) {
     return 405;
    }
if (index == 39) {
     return 391;
    }
if (index == 40) {
     return 388;
    }
if (index == 41) {
     return 391;
    }
if (index == 42) {
     return 402;
    }
if (index == 43) {
     return 407;
    }
if (index == 44) {
     return 395;
    }
if (index == 45) {
     return 378;
    }
if (index == 46) {
     return 385;
    }
if (index == 47) {
     return 400;
    }
if (index == 48) {
     return 404;
    }
if (index == 49) {
     return 378;
    }
if (index == 50) {
     return 400;
    }
if (index == 51) {
     return 444;
    }
if (index == 52) {
     return 398;
    }
if (index == 53) {
     return 378;
    }
if (index == 54) {
     return 384;
    }
if (index == 55) {
     return 352;
    }
if (index == 56) {
     return 370;
    }
if (index == 57) {
     return 387;
    }
if (index == 58) {
     return 388;
    }
if (index == 59) {
     return 410;
    }
if (index == 60) {
     return 385;
    }
if (index == 61) {
     return 372;
    }
if (index == 62) {
     return 378;
    }
if (index == 63) {
     return 379;
    }
if (index == 64) {
     return 375;
    }
if (index == 65) {
     return 359;
    }
if (index == 66) {
     return 382;
    }
if (index == 67) {
     return 389;
    }
if (index == 68) {
     return 381;
    }
if (index == 69) {
     return 376;
    }
if (index == 70) {
     return 462;
    }
if (index == 71) {
     return 367;
    }
if (index == 72) {
     return 396;
    }
if (index == 73) {
     return 376;
    }
if (index == 74) {
     return 328;
    }
if (index == 75) {
     return 426;
    }
if (index == 76) {
     return 376;
    }
if (index == 77) {
     return 385;
    }
if (index == 78) {
     return 386;
    }
if (index == 79) {
     return 395;
    }
if (index == 80) {
     return 380;
    }
if (index == 81) {
     return 375;
    }
if (index == 82) {
     return 373;
    }
if (index == 83) {
     return 374;
    }
if (index == 84) {
     return 378;
    }
if (index == 85) {
     return 379;
    }
if (index == 86) {
     return 384;
    }
if (index == 87) {
     return 374;
    }
if (index == 88) {
     return 371;
    }
if (index == 89) {
     return 366;
    }
if (index == 90) {
     return 377;
    }
if (index == 91) {
     return 370;
    }
if (index == 92) {
     return 381;
    }
if (index == 93) {
     return 375;
    }
if (index == 94) {
     return 372;
    }
if (index == 95) {
     return 369;
    }
if (index == 96) {
     return 362;
    }
if (index == 97) {
     return 357;
    }
if (index == 98) {
     return 377;
    }
if (index == 99) {
     return 361;
    }
if (index == 100) {
     return 663;
    }
if (index == 101) {
     return 430;
    }
if (index == 102) {
     return 381;
    }
if (index == 103) {
     return 371;
    }
if (index == 104) {
     return 373;
    }
if (index == 105) {
     return 376;
    }
if (index == 106) {
     return 369;
    }
if (index == 107) {
     return 379;
    }
if (index == 108) {
     return 379;
    }
if (index == 109) {
     return 354;
    }
if (index == 110) {
     return 365;
    }
if (index == 111) {
     return 373;
    }
if (index == 112) {
     return 371;
    }
if (index == 113) {
     return 386;
    }
if (index == 114) {
     return 435;
    }
if (index == 115) {
     return 413;
    }
if (index == 116) {
     return 373;
    }
if (index == 117) {
     return 373;
    }
if (index == 118) {
     return 367;
    }
if (index == 119) {
     return 383;
    }
if (index == 120) {
     return 362;
    }
if (index == 121) {
     return 378;
    }
if (index == 122) {
     return 388;
    }
if (index == 123) {
     return 367;
    }
if (index == 124) {
     return 381;
    }
if (index == 125) {
     return 373;
    }
if (index == 126) {
     return 368;
    }
if (index == 127) {
     return 359;
    }
if (index == 128) {
     return 371;
    }
if (index == 129) {
     return 365;
    }
if (index == 130) {
     return 370;
    }
if (index == 131) {
     return 362;
    }
if (index == 132) {
     return 381;
    }
if (index == 133) {
     return 366;
    }
if (index == 134) {
     return 369;
    }
if (index == 135) {
     return 366;
    }
if (index == 136) {
     return 367;
    }
if (index == 137) {
     return 375;
    }
if (index == 138) {
     return 347;
    }
if (index == 139) {
     return 375;
    }
if (index == 140) {
     return 363;
    }
if (index == 141) {
     return 392;
    }
if (index == 142) {
     return 383;
    }
if (index == 143) {
     return 361;
    }
if (index == 144) {
     return 368;
    }
if (index == 145) {
     return 369;
    }
if (index == 146) {
     return 377;
    }
if (index == 147) {
     return 367;
    }
if (index == 148) {
     return 380;
    }
if (index == 149) {
     return 385;
    }
if (index == 150) {
     return 386;
    }
if (index == 151) {
     return 380;
    }
if (index == 152) {
     return 374;
    }
if (index == 153) {
     return 373;
    }
if (index == 154) {
     return 360;
    }
if (index == 155) {
     return 370;
    }
if (index == 156) {
     return 362;
    }
if (index == 157) {
     return 374;
    }
if (index == 158) {
     return 376;
    }
if (index == 159) {
     return 381;
    }
if (index == 160) {
     return 378;
    }
if (index == 161) {
     return 381;
    }
if (index == 162) {
     return 405;
    }
if (index == 163) {
     return 382;
    }
if (index == 164) {
     return 389;
    }
if (index == 165) {
     return 378;
    }
if (index == 166) {
     return 392;
    }
if (index == 167) {
     return 389;
    }
if (index == 168) {
     return 390;
    }
if (index == 169) {
     return 376;
    }
if (index == 170) {
     return 384;
    }
if (index == 171) {
     return 389;
    }
if (index == 172) {
     return 387;
    }
if (index == 173) {
     return 375;
    }
if (index == 174) {
     return 376;
    }
if (index == 175) {
     return 376;
    }
if (index == 176) {
     return 388;
    }
if (index == 177) {
     return 373;
    }
if (index == 178) {
     return 384;
    }
if (index == 179) {
     return 380;
    }
if (index == 180) {
     return 388;
    }
if (index == 181) {
     return 378;
    }
if (index == 182) {
     return 377;
    }
if (index == 183) {
     return 387;
    }
if (index == 184) {
     return 393;
    }
if (index == 185) {
     return 373;
    }
if (index == 186) {
     return 372;
    }
if (index == 187) {
     return 363;
    }
if (index == 188) {
     return 385;
    }
if (index == 189) {
     return 371;
    }
if (index == 190) {
     return 380;
    }
if (index == 191) {
     return 357;
    }
if (index == 192) {
     return 393;
    }
if (index == 193) {
     return 363;
    }
if (index == 194) {
     return 381;
    }
if (index == 195) {
     return 364;
    }
if (index == 196) {
     return 379;
    }
if (index == 197) {
     return 367;
    }
if (index == 198) {
     return 376;
    }
if (index == 199) {
     return 374;
    }
if (index == 200) {
     return 387;
    }
if (index == 201) {
     return 365;
    }
if (index == 202) {
     return 380;
    }
if (index == 203) {
     return 378;
    }
if (index == 204) {
     return 387;
    }
if (index == 205) {
     return 372;
    }
if (index == 206) {
     return 384;
    }
if (index == 207) {
     return 374;
    }
if (index == 208) {
     return 373;
    }
if (index == 209) {
     return 374;
    }
if (index == 210) {
     return 373;
    }
if (index == 211) {
     return 379;
    }
if (index == 212) {
     return 387;
    }
if (index == 213) {
     return 365;
    }
if (index == 214) {
     return 457;
    }
if (index == 215) {
     return 471;
    }
if (index == 216) {
     return 382;
    }
if (index == 217) {
     return 373;
    }
if (index == 218) {
     return 385;
    }
if (index == 219) {
     return 357;
    }
if (index == 220) {
     return 374;
    }
if (index == 221) {
     return 390;
    }
if (index == 222) {
     return 442;
    }
if (index == 223) {
     return 417;
    }
if (index == 224) {
     return 419;
    }
if (index == 225) {
     return 371;
    }
if (index == 226) {
     return 403;
    }
if (index == 227) {
     return 398;
    }
if (index == 228) {
     return 410;
    }
if (index == 229) {
     return 375;
    }
if (index == 230) {
     return 416;
    }
if (index == 231) {
     return 362;
    }
if (index == 232) {
     return 417;
    }
if (index == 233) {
     return 479;
    }
if (index == 234) {
     return 380;
    }
if (index == 235) {
     return 385;
    }
if (index == 236) {
     return 391;
    }
if (index == 237) {
     return 470;
    }
if (index == 238) {
     return 380;
    }
if (index == 239) {
     return 394;
    }
if (index == 240) {
     return 377;
    }
if (index == 241) {
     return 372;
    }
if (index == 242) {
     return 387;
    }
if (index == 243) {
     return 375;
    }
if (index == 244) {
     return 387;
    }
if (index == 245) {
     return 379;
    }
if (index == 246) {
     return 374;
    }
if (index == 247) {
     return 372;
    }
if (index == 248) {
     return 383;
    }
if (index == 249) {
     return 376;
    }
if (index == 250) {
     return 374;
    }
if (index == 251) {
     return 383;
    }
if (index == 252) {
     return 379;
    }
if (index == 253) {
     return 390;
    }
if (index == 254) {
     return 385;
    }
if (index == 255) {
     return 384;
    }
if (index == 256) {
     return 387;
    }
if (index == 257) {
     return 376;
    }
if (index == 258) {
     return 389;
    }
if (index == 259) {
     return 377;
    }
if (index == 260) {
     return 380;
    }
if (index == 261) {
     return 375;
    }
if (index == 262) {
     return 371;
    }
if (index == 263) {
     return 406;
    }
if (index == 264) {
     return 372;
    }
if (index == 265) {
     return 393;
    }
if (index == 266) {
     return 385;
    }
if (index == 267) {
     return 369;
    }
if (index == 268) {
     return 395;
    }
if (index == 269) {
     return 381;
    }
if (index == 270) {
     return 373;
    }
if (index == 271) {
     return 377;
    }
if (index == 272) {
     return 385;
    }
if (index == 273) {
     return 373;
    }
if (index == 274) {
     return 383;
    }
if (index == 275) {
     return 378;
    }
if (index == 276) {
     return 386;
    }
if (index == 277) {
     return 386;
    }
if (index == 278) {
     return 368;
    }
if (index == 279) {
     return 378;
    }
if (index == 280) {
     return 372;
    }
if (index == 281) {
     return 370;
    }
if (index == 282) {
     return 376;
    }
if (index == 283) {
     return 375;
    }
if (index == 284) {
     return 361;
    }
if (index == 285) {
     return 379;
    }
if (index == 286) {
     return 384;
    }
if (index == 287) {
     return 375;
    }
if (index == 288) {
     return 384;
    }
if (index == 289) {
     return 376;
    }
if (index == 290) {
     return 388;
    }
if (index == 291) {
     return 378;
    }
if (index == 292) {
     return 419;
    }
if (index == 293) {
     return 432;
    }
if (index == 294) {
     return 396;
    }
if (index == 295) {
     return 368;
    }
if (index == 296) {
     return 367;
    }
if (index == 297) {
     return 383;
    }
if (index == 298) {
     return 441;
    }
if (index == 299) {
     return 465;
    }
if (index == 300) {
     return 370;
    }
if (index == 301) {
     return 366;
    }
if (index == 302) {
     return 367;
    }
if (index == 303) {
     return 383;
    }
if (index == 304) {
     return 377;
    }
if (index == 305) {
     return 375;
    }
if (index == 306) {
     return 393;
    }
if (index == 307) {
     return 370;
    }
if (index == 308) {
     return 378;
    }
if (index == 309) {
     return 387;
    }
if (index == 310) {
     return 395;
    }
if (index == 311) {
     return 380;
    }
if (index == 312) {
     return 372;
    }
if (index == 313) {
     return 366;
    }
if (index == 314) {
     return 375;
    }
if (index == 315) {
     return 382;
    }
if (index == 316) {
     return 390;
    }
if (index == 317) {
     return 377;
    }
if (index == 318) {
     return 373;
    }
if (index == 319) {
     return 367;
    }
if (index == 320) {
     return 370;
    }
if (index == 321) {
     return 365;
    }
if (index == 322) {
     return 380;
    }
if (index == 323) {
     return 360;
    }
if (index == 324) {
     return 365;
    }
if (index == 325) {
     return 378;
    }
if (index == 326) {
     return 376;
    }
if (index == 327) {
     return 360;
    }
if (index == 328) {
     return 373;
    }
if (index == 329) {
     return 379;
    }
if (index == 330) {
     return 378;
    }
if (index == 331) {
     return 368;
    }
if (index == 332) {
     return 362;
    }
if (index == 333) {
     return 473;
    }
if (index == 334) {
     return 465;
    }
if (index == 335) {
     return 498;
    }
if (index > 335) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 866;
    }
if (index == 1) {
     return 794;
    }
if (index == 2) {
     return 780;
    }
if (index == 3) {
     return 796;
    }
if (index == 4) {
     return 787;
    }
if (index == 5) {
     return 732;
    }
if (index == 6) {
     return 785;
    }
if (index == 7) {
     return 779;
    }
if (index == 8) {
     return 785;
    }
if (index == 9) {
     return 782;
    }
if (index == 10) {
     return 778;
    }
if (index == 11) {
     return 768;
    }
if (index == 12) {
     return 776;
    }
if (index == 13) {
     return 770;
    }
if (index == 14) {
     return 760;
    }
if (index == 15) {
     return 772;
    }
if (index == 16) {
     return 803;
    }
if (index == 17) {
     return 764;
    }
if (index == 18) {
     return 764;
    }
if (index == 19) {
     return 784;
    }
if (index == 20) {
     return 780;
    }
if (index == 21) {
     return 753;
    }
if (index == 22) {
     return 748;
    }
if (index == 23) {
     return 783;
    }
if (index == 24) {
     return 787;
    }
if (index == 25) {
     return 778;
    }
if (index == 26) {
     return 785;
    }
if (index == 27) {
     return 757;
    }
if (index == 28) {
     return 791;
    }
if (index == 29) {
     return 753;
    }
if (index == 30) {
     return 758;
    }
if (index == 31) {
     return 785;
    }
if (index == 32) {
     return 779;
    }
if (index == 33) {
     return 762;
    }
if (index == 34) {
     return 726;
    }
if (index == 35) {
     return 759;
    }
if (index == 36) {
     return 771;
    }
if (index == 37) {
     return 752;
    }
if (index == 38) {
     return 740;
    }
if (index == 39) {
     return 759;
    }
if (index == 40) {
     return 764;
    }
if (index == 41) {
     return 745;
    }
if (index == 42) {
     return 743;
    }
if (index == 43) {
     return 754;
    }
if (index == 44) {
     return 740;
    }
if (index == 45) {
     return 733;
    }
if (index == 46) {
     return 721;
    }
if (index == 47) {
     return 743;
    }
if (index == 48) {
     return 758;
    }
if (index == 49) {
     return 743;
    }
if (index == 50) {
     return 746;
    }
if (index == 51) {
     return 770;
    }
if (index == 52) {
     return 766;
    }
if (index == 53) {
     return 751;
    }
if (index == 54) {
     return 741;
    }
if (index == 55) {
     return 725;
    }
if (index == 56) {
     return 733;
    }
if (index == 57) {
     return 745;
    }
if (index == 58) {
     return 739;
    }
if (index == 59) {
     return 734;
    }
if (index == 60) {
     return 740;
    }
if (index == 61) {
     return 736;
    }
if (index == 62) {
     return 720;
    }
if (index == 63) {
     return 754;
    }
if (index == 64) {
     return 738;
    }
if (index == 65) {
     return 732;
    }
if (index == 66) {
     return 725;
    }
if (index == 67) {
     return 722;
    }
if (index == 68) {
     return 753;
    }
if (index == 69) {
     return 740;
    }
if (index == 70) {
     return 770;
    }
if (index == 71) {
     return 712;
    }
if (index == 72) {
     return 754;
    }
if (index == 73) {
     return 759;
    }
if (index == 74) {
     return 729;
    }
if (index == 75) {
     return 761;
    }
if (index == 76) {
     return 728;
    }
if (index == 77) {
     return 733;
    }
if (index == 78) {
     return 744;
    }
if (index == 79) {
     return 747;
    }
if (index == 80) {
     return 748;
    }
if (index == 81) {
     return 731;
    }
if (index == 82) {
     return 738;
    }
if (index == 83) {
     return 730;
    }
if (index == 84) {
     return 733;
    }
if (index == 85) {
     return 741;
    }
if (index == 86) {
     return 735;
    }
if (index == 87) {
     return 724;
    }
if (index == 88) {
     return 727;
    }
if (index == 89) {
     return 731;
    }
if (index == 90) {
     return 729;
    }
if (index == 91) {
     return 718;
    }
if (index == 92) {
     return 732;
    }
if (index == 93) {
     return 726;
    }
if (index == 94) {
     return 729;
    }
if (index == 95) {
     return 726;
    }
if (index == 96) {
     return 734;
    }
if (index == 97) {
     return 707;
    }
if (index == 98) {
     return 742;
    }
if (index == 99) {
     return 720;
    }
if (index == 100) {
     return 470;
    }
if (index == 101) {
     return 760;
    }
if (index == 102) {
     return 731;
    }
if (index == 103) {
     return 728;
    }
if (index == 104) {
     return 726;
    }
if (index == 105) {
     return 731;
    }
if (index == 106) {
     return 729;
    }
if (index == 107) {
     return 733;
    }
if (index == 108) {
     return 731;
    }
if (index == 109) {
     return 716;
    }
if (index == 110) {
     return 713;
    }
if (index == 111) {
     return 722;
    }
if (index == 112) {
     return 704;
    }
if (index == 113) {
     return 741;
    }
if (index == 114) {
     return 732;
    }
if (index == 115) {
     return 733;
    }
if (index == 116) {
     return 708;
    }
if (index == 117) {
     return 716;
    }
if (index == 118) {
     return 709;
    }
if (index == 119) {
     return 716;
    }
if (index == 120) {
     return 718;
    }
if (index == 121) {
     return 731;
    }
if (index == 122) {
     return 736;
    }
if (index == 123) {
     return 711;
    }
if (index == 124) {
     return 725;
    }
if (index == 125) {
     return 725;
    }
if (index == 126) {
     return 726;
    }
if (index == 127) {
     return 725;
    }
if (index == 128) {
     return 710;
    }
if (index == 129) {
     return 718;
    }
if (index == 130) {
     return 710;
    }
if (index == 131) {
     return 724;
    }
if (index == 132) {
     return 702;
    }
if (index == 133) {
     return 704;
    }
if (index == 134) {
     return 686;
    }
if (index == 135) {
     return 697;
    }
if (index == 136) {
     return 694;
    }
if (index == 137) {
     return 741;
    }
if (index == 138) {
     return 710;
    }
if (index == 139) {
     return 740;
    }
if (index == 140) {
     return 715;
    }
if (index == 141) {
     return 709;
    }
if (index == 142) {
     return 721;
    }
if (index == 143) {
     return 704;
    }
if (index == 144) {
     return 718;
    }
if (index == 145) {
     return 705;
    }
if (index == 146) {
     return 695;
    }
if (index == 147) {
     return 704;
    }
if (index == 148) {
     return 709;
    }
if (index == 149) {
     return 727;
    }
if (index == 150) {
     return 716;
    }
if (index == 151) {
     return 720;
    }
if (index == 152) {
     return 715;
    }
if (index == 153) {
     return 701;
    }
if (index == 154) {
     return 696;
    }
if (index == 155) {
     return 714;
    }
if (index == 156) {
     return 701;
    }
if (index == 157) {
     return 716;
    }
if (index == 158) {
     return 713;
    }
if (index == 159) {
     return 735;
    }
if (index == 160) {
     return 735;
    }
if (index == 161) {
     return 703;
    }
if (index == 162) {
     return 730;
    }
if (index == 163) {
     return 722;
    }
if (index == 164) {
     return 733;
    }
if (index == 165) {
     return 731;
    }
if (index == 166) {
     return 713;
    }
if (index == 167) {
     return 729;
    }
if (index == 168) {
     return 721;
    }
if (index == 169) {
     return 752;
    }
if (index == 170) {
     return 710;
    }
if (index == 171) {
     return 751;
    }
if (index == 172) {
     return 725;
    }
if (index == 173) {
     return 728;
    }
if (index == 174) {
     return 718;
    }
if (index == 175) {
     return 726;
    }
if (index == 176) {
     return 733;
    }
if (index == 177) {
     return 708;
    }
if (index == 178) {
     return 706;
    }
if (index == 179) {
     return 718;
    }
if (index == 180) {
     return 717;
    }
if (index == 181) {
     return 738;
    }
if (index == 182) {
     return 728;
    }
if (index == 183) {
     return 731;
    }
if (index == 184) {
     return 742;
    }
if (index == 185) {
     return 726;
    }
if (index == 186) {
     return 734;
    }
if (index == 187) {
     return 710;
    }
if (index == 188) {
     return 715;
    }
if (index == 189) {
     return 689;
    }
if (index == 190) {
     return 718;
    }
if (index == 191) {
     return 716;
    }
if (index == 192) {
     return 727;
    }
if (index == 193) {
     return 706;
    }
if (index == 194) {
     return 712;
    }
if (index == 195) {
     return 696;
    }
if (index == 196) {
     return 705;
    }
if (index == 197) {
     return 717;
    }
if (index == 198) {
     return 716;
    }
if (index == 199) {
     return 724;
    }
if (index == 200) {
     return 715;
    }
if (index == 201) {
     return 714;
    }
if (index == 202) {
     return 706;
    }
if (index == 203) {
     return 703;
    }
if (index == 204) {
     return 715;
    }
if (index == 205) {
     return 708;
    }
if (index == 206) {
     return 714;
    }
if (index == 207) {
     return 709;
    }
if (index == 208) {
     return 732;
    }
if (index == 209) {
     return 707;
    }
if (index == 210) {
     return 723;
    }
if (index == 211) {
     return 722;
    }
if (index == 212) {
     return 708;
    }
if (index == 213) {
     return 716;
    }
if (index == 214) {
     return 761;
    }
if (index == 215) {
     return 724;
    }
if (index == 216) {
     return 717;
    }
if (index == 217) {
     return 705;
    }
if (index == 218) {
     return 737;
    }
if (index == 219) {
     return 697;
    }
if (index == 220) {
     return 714;
    }
if (index == 221) {
     return 693;
    }
if (index == 222) {
     return 728;
    }
if (index == 223) {
     return 732;
    }
if (index == 224) {
     return 749;
    }
if (index == 225) {
     return 725;
    }
if (index == 226) {
     return 762;
    }
if (index == 227) {
     return 721;
    }
if (index == 228) {
     return 732;
    }
if (index == 229) {
     return 712;
    }
if (index == 230) {
     return 737;
    }
if (index == 231) {
     return 720;
    }
if (index == 232) {
     return 746;
    }
if (index == 233) {
     return 761;
    }
if (index == 234) {
     return 723;
    }
if (index == 235) {
     return 705;
    }
if (index == 236) {
     return 753;
    }
if (index == 237) {
     return 797;
    }
if (index == 238) {
     return 766;
    }
if (index == 239) {
     return 758;
    }
if (index == 240) {
     return 755;
    }
if (index == 241) {
     return 742;
    }
if (index == 242) {
     return 754;
    }
if (index == 243) {
     return 745;
    }
if (index == 244) {
     return 747;
    }
if (index == 245) {
     return 727;
    }
if (index == 246) {
     return 736;
    }
if (index == 247) {
     return 723;
    }
if (index == 248) {
     return 726;
    }
if (index == 249) {
     return 699;
    }
if (index == 250) {
     return 713;
    }
if (index == 251) {
     return 736;
    }
if (index == 252) {
     return 730;
    }
if (index == 253) {
     return 733;
    }
if (index == 254) {
     return 744;
    }
if (index == 255) {
     return 740;
    }
if (index == 256) {
     return 740;
    }
if (index == 257) {
     return 722;
    }
if (index == 258) {
     return 727;
    }
if (index == 259) {
     return 731;
    }
if (index == 260) {
     return 729;
    }
if (index == 261) {
     return 739;
    }
if (index == 262) {
     return 717;
    }
if (index == 263) {
     return 748;
    }
if (index == 264) {
     return 746;
    }
if (index == 265) {
     return 764;
    }
if (index == 266) {
     return 731;
    }
if (index == 267) {
     return 723;
    }
if (index == 268) {
     return 738;
    }
if (index == 269) {
     return 728;
    }
if (index == 270) {
     return 719;
    }
if (index == 271) {
     return 727;
    }
if (index == 272) {
     return 728;
    }
if (index == 273) {
     return 735;
    }
if (index == 274) {
     return 724;
    }
if (index == 275) {
     return 745;
    }
if (index == 276) {
     return 735;
    }
if (index == 277) {
     return 733;
    }
if (index == 278) {
     return 752;
    }
if (index == 279) {
     return 747;
    }
if (index == 280) {
     return 734;
    }
if (index == 281) {
     return 741;
    }
if (index == 282) {
     return 727;
    }
if (index == 283) {
     return 745;
    }
if (index == 284) {
     return 715;
    }
if (index == 285) {
     return 719;
    }
if (index == 286) {
     return 732;
    }
if (index == 287) {
     return 739;
    }
if (index == 288) {
     return 737;
    }
if (index == 289) {
     return 753;
    }
if (index == 290) {
     return 754;
    }
if (index == 291) {
     return 742;
    }
if (index == 292) {
     return 778;
    }
if (index == 293) {
     return 754;
    }
if (index == 294) {
     return 747;
    }
if (index == 295) {
     return 740;
    }
if (index == 296) {
     return 724;
    }
if (index == 297) {
     return 729;
    }
if (index == 298) {
     return 748;
    }
if (index == 299) {
     return 758;
    }
if (index == 300) {
     return 733;
    }
if (index == 301) {
     return 729;
    }
if (index == 302) {
     return 721;
    }
if (index == 303) {
     return 730;
    }
if (index == 304) {
     return 722;
    }
if (index == 305) {
     return 733;
    }
if (index == 306) {
     return 742;
    }
if (index == 307) {
     return 718;
    }
if (index == 308) {
     return 728;
    }
if (index == 309) {
     return 722;
    }
if (index == 310) {
     return 712;
    }
if (index == 311) {
     return 697;
    }
if (index == 312) {
     return 682;
    }
if (index == 313) {
     return 745;
    }
if (index == 314) {
     return 738;
    }
if (index == 315) {
     return 736;
    }
if (index == 316) {
     return 723;
    }
if (index == 317) {
     return 733;
    }
if (index == 318) {
     return 737;
    }
if (index == 319) {
     return 739;
    }
if (index == 320) {
     return 757;
    }
if (index == 321) {
     return 756;
    }
if (index == 322) {
     return 751;
    }
if (index == 323) {
     return 733;
    }
if (index == 324) {
     return 723;
    }
if (index == 325) {
     return 723;
    }
if (index == 326) {
     return 744;
    }
if (index == 327) {
     return 736;
    }
if (index == 328) {
     return 748;
    }
if (index == 329) {
     return 739;
    }
if (index == 330) {
     return 738;
    }
if (index == 331) {
     return 740;
    }
if (index == 332) {
     return 732;
    }
if (index == 333) {
     return 769;
    }
if (index == 334) {
     return 770;
    }
if (index == 335) {
     return 840;
    }
if (index > 335) {
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
    var url = '/fedora/get/seapage:052a_' + imgStr + '/digitalImage';
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
br.numLeafs = 336;

// Book title and the URL used for the book title link
br.bookTitle= "The World in miniature : the Asiatic islands and New Holland : being a description of the manners, customs, characters and state of society of the various tribes by which they are inhabited, vol.1";
br.bookAuthor= "Shoberl, Frederic";
br.bookPub= "London: Printed for R. Ackermann, Repository of Arts, Strand, 1824";
br.bookKeyword= "Southeast Asia--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Southeast Asia--Social life and customs";
br.bookUrl  = '/catalog/sea:052a';

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
