//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 512;
    }
if (index == 1) {
     return 435;
    }
if (index == 2) {
     return 483;
    }
if (index == 3) {
     return 445;
    }
if (index == 4) {
     return 416;
    }
if (index == 5) {
     return 426;
    }
if (index == 6) {
     return 398;
    }
if (index == 7) {
     return 399;
    }
if (index == 8) {
     return 379;
    }
if (index == 9) {
     return 377;
    }
if (index == 10) {
     return 391;
    }
if (index == 11) {
     return 375;
    }
if (index == 12) {
     return 374;
    }
if (index == 13) {
     return 365;
    }
if (index == 14) {
     return 371;
    }
if (index == 15) {
     return 394;
    }
if (index == 16) {
     return 368;
    }
if (index == 17) {
     return 387;
    }
if (index == 18) {
     return 367;
    }
if (index == 19) {
     return 381;
    }
if (index == 20) {
     return 396;
    }
if (index == 21) {
     return 380;
    }
if (index == 22) {
     return 380;
    }
if (index == 23) {
     return 383;
    }
if (index == 24) {
     return 392;
    }
if (index == 25) {
     return 352;
    }
if (index == 26) {
     return 369;
    }
if (index == 27) {
     return 362;
    }
if (index == 28) {
     return 389;
    }
if (index == 29) {
     return 367;
    }
if (index == 30) {
     return 378;
    }
if (index == 31) {
     return 366;
    }
if (index == 32) {
     return 355;
    }
if (index == 33) {
     return 370;
    }
if (index == 34) {
     return 364;
    }
if (index == 35) {
     return 361;
    }
if (index == 36) {
     return 385;
    }
if (index == 37) {
     return 365;
    }
if (index == 38) {
     return 379;
    }
if (index == 39) {
     return 365;
    }
if (index == 40) {
     return 361;
    }
if (index == 41) {
     return 363;
    }
if (index == 42) {
     return 411;
    }
if (index == 43) {
     return 361;
    }
if (index == 44) {
     return 374;
    }
if (index == 45) {
     return 381;
    }
if (index == 46) {
     return 385;
    }
if (index == 47) {
     return 390;
    }
if (index == 48) {
     return 390;
    }
if (index == 49) {
     return 361;
    }
if (index == 50) {
     return 367;
    }
if (index == 51) {
     return 361;
    }
if (index == 52) {
     return 361;
    }
if (index == 53) {
     return 388;
    }
if (index == 54) {
     return 360;
    }
if (index == 55) {
     return 355;
    }
if (index == 56) {
     return 366;
    }
if (index == 57) {
     return 357;
    }
if (index == 58) {
     return 351;
    }
if (index == 59) {
     return 356;
    }
if (index == 60) {
     return 357;
    }
if (index == 61) {
     return 365;
    }
if (index == 62) {
     return 362;
    }
if (index == 63) {
     return 373;
    }
if (index == 64) {
     return 378;
    }
if (index == 65) {
     return 376;
    }
if (index == 66) {
     return 378;
    }
if (index == 67) {
     return 374;
    }
if (index == 68) {
     return 365;
    }
if (index == 69) {
     return 364;
    }
if (index == 70) {
     return 372;
    }
if (index == 71) {
     return 355;
    }
if (index == 72) {
     return 404;
    }
if (index == 73) {
     return 421;
    }
if (index == 74) {
     return 362;
    }
if (index == 75) {
     return 387;
    }
if (index == 76) {
     return 359;
    }
if (index == 77) {
     return 368;
    }
if (index == 78) {
     return 355;
    }
if (index == 79) {
     return 377;
    }
if (index == 80) {
     return 357;
    }
if (index == 81) {
     return 357;
    }
if (index == 82) {
     return 367;
    }
if (index == 83) {
     return 376;
    }
if (index == 84) {
     return 372;
    }
if (index == 85) {
     return 377;
    }
if (index == 86) {
     return 379;
    }
if (index == 87) {
     return 377;
    }
if (index == 88) {
     return 379;
    }
if (index == 89) {
     return 378;
    }
if (index == 90) {
     return 352;
    }
if (index == 91) {
     return 370;
    }
if (index == 92) {
     return 369;
    }
if (index == 93) {
     return 366;
    }
if (index == 94) {
     return 379;
    }
if (index == 95) {
     return 377;
    }
if (index == 96) {
     return 377;
    }
if (index == 97) {
     return 362;
    }
if (index == 98) {
     return 384;
    }
if (index == 99) {
     return 353;
    }
if (index == 100) {
     return 366;
    }
if (index == 101) {
     return 364;
    }
if (index == 102) {
     return 374;
    }
if (index == 103) {
     return 375;
    }
if (index == 104) {
     return 373;
    }
if (index == 105) {
     return 363;
    }
if (index == 106) {
     return 371;
    }
if (index == 107) {
     return 381;
    }
if (index == 108) {
     return 372;
    }
if (index == 109) {
     return 380;
    }
if (index == 110) {
     return 372;
    }
if (index == 111) {
     return 363;
    }
if (index == 112) {
     return 379;
    }
if (index == 113) {
     return 357;
    }
if (index == 114) {
     return 368;
    }
if (index == 115) {
     return 383;
    }
if (index == 116) {
     return 429;
    }
if (index == 117) {
     return 455;
    }
if (index == 118) {
     return 377;
    }
if (index == 119) {
     return 382;
    }
if (index == 120) {
     return 414;
    }
if (index == 121) {
     return 450;
    }
if (index == 122) {
     return 371;
    }
if (index == 123) {
     return 372;
    }
if (index == 124) {
     return 384;
    }
if (index == 125) {
     return 386;
    }
if (index == 126) {
     return 380;
    }
if (index == 127) {
     return 379;
    }
if (index == 128) {
     return 375;
    }
if (index == 129) {
     return 373;
    }
if (index == 130) {
     return 378;
    }
if (index == 131) {
     return 381;
    }
if (index == 132) {
     return 383;
    }
if (index == 133) {
     return 376;
    }
if (index == 134) {
     return 384;
    }
if (index == 135) {
     return 375;
    }
if (index == 136) {
     return 363;
    }
if (index == 137) {
     return 373;
    }
if (index == 138) {
     return 365;
    }
if (index == 139) {
     return 361;
    }
if (index == 140) {
     return 364;
    }
if (index == 141) {
     return 368;
    }
if (index == 142) {
     return 369;
    }
if (index == 143) {
     return 353;
    }
if (index == 144) {
     return 383;
    }
if (index == 145) {
     return 372;
    }
if (index == 146) {
     return 377;
    }
if (index == 147) {
     return 378;
    }
if (index == 148) {
     return 354;
    }
if (index == 149) {
     return 378;
    }
if (index == 150) {
     return 391;
    }
if (index == 151) {
     return 373;
    }
if (index == 152) {
     return 373;
    }
if (index == 153) {
     return 372;
    }
if (index == 154) {
     return 386;
    }
if (index == 155) {
     return 386;
    }
if (index == 156) {
     return 377;
    }
if (index == 157) {
     return 393;
    }
if (index == 158) {
     return 378;
    }
if (index == 159) {
     return 382;
    }
if (index == 160) {
     return 382;
    }
if (index == 161) {
     return 376;
    }
if (index == 162) {
     return 384;
    }
if (index == 163) {
     return 370;
    }
if (index == 164) {
     return 379;
    }
if (index == 165) {
     return 374;
    }
if (index == 166) {
     return 369;
    }
if (index == 167) {
     return 383;
    }
if (index == 168) {
     return 375;
    }
if (index == 169) {
     return 387;
    }
if (index == 170) {
     return 382;
    }
if (index == 171) {
     return 377;
    }
if (index == 172) {
     return 373;
    }
if (index == 173) {
     return 362;
    }
if (index == 174) {
     return 375;
    }
if (index == 175) {
     return 360;
    }
if (index == 176) {
     return 373;
    }
if (index == 177) {
     return 357;
    }
if (index == 178) {
     return 382;
    }
if (index == 179) {
     return 365;
    }
if (index == 180) {
     return 373;
    }
if (index == 181) {
     return 360;
    }
if (index == 182) {
     return 378;
    }
if (index == 183) {
     return 382;
    }
if (index == 184) {
     return 383;
    }
if (index == 185) {
     return 362;
    }
if (index == 186) {
     return 370;
    }
if (index == 187) {
     return 382;
    }
if (index == 188) {
     return 373;
    }
if (index == 189) {
     return 383;
    }
if (index == 190) {
     return 379;
    }
if (index == 191) {
     return 370;
    }
if (index == 192) {
     return 372;
    }
if (index == 193) {
     return 381;
    }
if (index == 194) {
     return 383;
    }
if (index == 195) {
     return 361;
    }
if (index == 196) {
     return 373;
    }
if (index == 197) {
     return 364;
    }
if (index == 198) {
     return 422;
    }
if (index == 199) {
     return 410;
    }
if (index == 200) {
     return 421;
    }
if (index == 201) {
     return 370;
    }
if (index == 202) {
     return 376;
    }
if (index == 203) {
     return 375;
    }
if (index == 204) {
     return 377;
    }
if (index == 205) {
     return 359;
    }
if (index == 206) {
     return 363;
    }
if (index == 207) {
     return 444;
    }
if (index == 208) {
     return 439;
    }
if (index == 209) {
     return 377;
    }
if (index == 210) {
     return 468;
    }
if (index == 211) {
     return 412;
    }
if (index == 212) {
     return 384;
    }
if (index == 213) {
     return 380;
    }
if (index == 214) {
     return 371;
    }
if (index == 215) {
     return 370;
    }
if (index == 216) {
     return 375;
    }
if (index == 217) {
     return 364;
    }
if (index == 218) {
     return 373;
    }
if (index == 219) {
     return 368;
    }
if (index == 220) {
     return 366;
    }
if (index == 221) {
     return 363;
    }
if (index == 222) {
     return 357;
    }
if (index == 223) {
     return 361;
    }
if (index == 224) {
     return 391;
    }
if (index == 225) {
     return 356;
    }
if (index == 226) {
     return 383;
    }
if (index == 227) {
     return 377;
    }
if (index == 228) {
     return 373;
    }
if (index == 229) {
     return 387;
    }
if (index == 230) {
     return 446;
    }
if (index == 231) {
     return 437;
    }
if (index == 232) {
     return 370;
    }
if (index == 233) {
     return 355;
    }
if (index == 234) {
     return 364;
    }
if (index == 235) {
     return 363;
    }
if (index == 236) {
     return 367;
    }
if (index == 237) {
     return 365;
    }
if (index == 238) {
     return 382;
    }
if (index == 239) {
     return 370;
    }
if (index == 240) {
     return 401;
    }
if (index == 241) {
     return 375;
    }
if (index == 242) {
     return 389;
    }
if (index == 243) {
     return 375;
    }
if (index == 244) {
     return 460;
    }
if (index == 245) {
     return 435;
    }
if (index == 246) {
     return 393;
    }
if (index == 247) {
     return 379;
    }
if (index == 248) {
     return 370;
    }
if (index == 249) {
     return 379;
    }
if (index == 250) {
     return 367;
    }
if (index == 251) {
     return 365;
    }
if (index == 252) {
     return 386;
    }
if (index == 253) {
     return 387;
    }
if (index == 254) {
     return 495;
    }
if (index == 255) {
     return 436;
    }
if (index == 256) {
     return 367;
    }
if (index == 257) {
     return 378;
    }
if (index == 258) {
     return 443;
    }
if (index == 259) {
     return 438;
    }
if (index == 260) {
     return 372;
    }
if (index == 261) {
     return 377;
    }
if (index == 262) {
     return 361;
    }
if (index == 263) {
     return 368;
    }
if (index == 264) {
     return 371;
    }
if (index == 265) {
     return 374;
    }
if (index == 266) {
     return 376;
    }
if (index == 267) {
     return 377;
    }
if (index == 268) {
     return 370;
    }
if (index == 269) {
     return 370;
    }
if (index == 270) {
     return 367;
    }
if (index == 271) {
     return 387;
    }
if (index == 272) {
     return 393;
    }
if (index == 273) {
     return 369;
    }
if (index == 274) {
     return 379;
    }
if (index == 275) {
     return 378;
    }
if (index == 276) {
     return 374;
    }
if (index == 277) {
     return 372;
    }
if (index == 278) {
     return 399;
    }
if (index == 279) {
     return 364;
    }
if (index == 280) {
     return 400;
    }
if (index == 281) {
     return 367;
    }
if (index == 282) {
     return 391;
    }
if (index == 283) {
     return 370;
    }
if (index == 284) {
     return 370;
    }
if (index == 285) {
     return 371;
    }
if (index == 286) {
     return 392;
    }
if (index == 287) {
     return 384;
    }
if (index == 288) {
     return 411;
    }
if (index == 289) {
     return 428;
    }
if (index == 290) {
     return 375;
    }
if (index == 291) {
     return 391;
    }
if (index == 292) {
     return 377;
    }
if (index == 293) {
     return 373;
    }
if (index == 294) {
     return 380;
    }
if (index == 295) {
     return 399;
    }
if (index == 296) {
     return 445;
    }
if (index == 297) {
     return 416;
    }
if (index == 298) {
     return 390;
    }
if (index == 299) {
     return 376;
    }
if (index == 300) {
     return 388;
    }
if (index == 301) {
     return 370;
    }
if (index == 302) {
     return 376;
    }
if (index == 303) {
     return 373;
    }
if (index == 304) {
     return 370;
    }
if (index == 305) {
     return 384;
    }
if (index == 306) {
     return 377;
    }
if (index == 307) {
     return 383;
    }
if (index == 308) {
     return 384;
    }
if (index == 309) {
     return 381;
    }
if (index == 310) {
     return 381;
    }
if (index == 311) {
     return 381;
    }
if (index == 312) {
     return 349;
    }
if (index == 313) {
     return 386;
    }
if (index == 314) {
     return 352;
    }
if (index == 315) {
     return 396;
    }
if (index == 316) {
     return 381;
    }
if (index == 317) {
     return 437;
    }
if (index == 318) {
     return 495;
    }
if (index == 319) {
     return 522;
    }
if (index > 319) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 848;
    }
if (index == 1) {
     return 788;
    }
if (index == 2) {
     return 795;
    }
if (index == 3) {
     return 755;
    }
if (index == 4) {
     return 778;
    }
if (index == 5) {
     return 771;
    }
if (index == 6) {
     return 752;
    }
if (index == 7) {
     return 759;
    }
if (index == 8) {
     return 743;
    }
if (index == 9) {
     return 757;
    }
if (index == 10) {
     return 726;
    }
if (index == 11) {
     return 715;
    }
if (index == 12) {
     return 739;
    }
if (index == 13) {
     return 727;
    }
if (index == 14) {
     return 724;
    }
if (index == 15) {
     return 736;
    }
if (index == 16) {
     return 736;
    }
if (index == 17) {
     return 730;
    }
if (index == 18) {
     return 744;
    }
if (index == 19) {
     return 726;
    }
if (index == 20) {
     return 749;
    }
if (index == 21) {
     return 716;
    }
if (index == 22) {
     return 726;
    }
if (index == 23) {
     return 722;
    }
if (index == 24) {
     return 744;
    }
if (index == 25) {
     return 716;
    }
if (index == 26) {
     return 731;
    }
if (index == 27) {
     return 723;
    }
if (index == 28) {
     return 711;
    }
if (index == 29) {
     return 706;
    }
if (index == 30) {
     return 727;
    }
if (index == 31) {
     return 729;
    }
if (index == 32) {
     return 732;
    }
if (index == 33) {
     return 710;
    }
if (index == 34) {
     return 732;
    }
if (index == 35) {
     return 709;
    }
if (index == 36) {
     return 718;
    }
if (index == 37) {
     return 726;
    }
if (index == 38) {
     return 747;
    }
if (index == 39) {
     return 739;
    }
if (index == 40) {
     return 715;
    }
if (index == 41) {
     return 708;
    }
if (index == 42) {
     return 774;
    }
if (index == 43) {
     return 733;
    }
if (index == 44) {
     return 709;
    }
if (index == 45) {
     return 725;
    }
if (index == 46) {
     return 738;
    }
if (index == 47) {
     return 729;
    }
if (index == 48) {
     return 723;
    }
if (index == 49) {
     return 721;
    }
if (index == 50) {
     return 726;
    }
if (index == 51) {
     return 713;
    }
if (index == 52) {
     return 718;
    }
if (index == 53) {
     return 725;
    }
if (index == 54) {
     return 727;
    }
if (index == 55) {
     return 699;
    }
if (index == 56) {
     return 694;
    }
if (index == 57) {
     return 697;
    }
if (index == 58) {
     return 687;
    }
if (index == 59) {
     return 693;
    }
if (index == 60) {
     return 689;
    }
if (index == 61) {
     return 728;
    }
if (index == 62) {
     return 706;
    }
if (index == 63) {
     return 708;
    }
if (index == 64) {
     return 720;
    }
if (index == 65) {
     return 724;
    }
if (index == 66) {
     return 733;
    }
if (index == 67) {
     return 732;
    }
if (index == 68) {
     return 729;
    }
if (index == 69) {
     return 722;
    }
if (index == 70) {
     return 741;
    }
if (index == 71) {
     return 726;
    }
if (index == 72) {
     return 736;
    }
if (index == 73) {
     return 738;
    }
if (index == 74) {
     return 716;
    }
if (index == 75) {
     return 729;
    }
if (index == 76) {
     return 708;
    }
if (index == 77) {
     return 713;
    }
if (index == 78) {
     return 715;
    }
if (index == 79) {
     return 720;
    }
if (index == 80) {
     return 755;
    }
if (index == 81) {
     return 736;
    }
if (index == 82) {
     return 736;
    }
if (index == 83) {
     return 741;
    }
if (index == 84) {
     return 740;
    }
if (index == 85) {
     return 727;
    }
if (index == 86) {
     return 727;
    }
if (index == 87) {
     return 717;
    }
if (index == 88) {
     return 724;
    }
if (index == 89) {
     return 741;
    }
if (index == 90) {
     return 708;
    }
if (index == 91) {
     return 734;
    }
if (index == 92) {
     return 728;
    }
if (index == 93) {
     return 731;
    }
if (index == 94) {
     return 747;
    }
if (index == 95) {
     return 705;
    }
if (index == 96) {
     return 696;
    }
if (index == 97) {
     return 715;
    }
if (index == 98) {
     return 714;
    }
if (index == 99) {
     return 727;
    }
if (index == 100) {
     return 731;
    }
if (index == 101) {
     return 732;
    }
if (index == 102) {
     return 727;
    }
if (index == 103) {
     return 718;
    }
if (index == 104) {
     return 722;
    }
if (index == 105) {
     return 722;
    }
if (index == 106) {
     return 726;
    }
if (index == 107) {
     return 713;
    }
if (index == 108) {
     return 706;
    }
if (index == 109) {
     return 695;
    }
if (index == 110) {
     return 708;
    }
if (index == 111) {
     return 701;
    }
if (index == 112) {
     return 707;
    }
if (index == 113) {
     return 715;
    }
if (index == 114) {
     return 722;
    }
if (index == 115) {
     return 724;
    }
if (index == 116) {
     return 738;
    }
if (index == 117) {
     return 759;
    }
if (index == 118) {
     return 755;
    }
if (index == 119) {
     return 736;
    }
if (index == 120) {
     return 759;
    }
if (index == 121) {
     return 750;
    }
if (index == 122) {
     return 742;
    }
if (index == 123) {
     return 734;
    }
if (index == 124) {
     return 759;
    }
if (index == 125) {
     return 760;
    }
if (index == 126) {
     return 762;
    }
if (index == 127) {
     return 731;
    }
if (index == 128) {
     return 718;
    }
if (index == 129) {
     return 731;
    }
if (index == 130) {
     return 734;
    }
if (index == 131) {
     return 736;
    }
if (index == 132) {
     return 737;
    }
if (index == 133) {
     return 740;
    }
if (index == 134) {
     return 741;
    }
if (index == 135) {
     return 735;
    }
if (index == 136) {
     return 727;
    }
if (index == 137) {
     return 732;
    }
if (index == 138) {
     return 728;
    }
if (index == 139) {
     return 724;
    }
if (index == 140) {
     return 731;
    }
if (index == 141) {
     return 736;
    }
if (index == 142) {
     return 739;
    }
if (index == 143) {
     return 732;
    }
if (index == 144) {
     return 770;
    }
if (index == 145) {
     return 731;
    }
if (index == 146) {
     return 739;
    }
if (index == 147) {
     return 735;
    }
if (index == 148) {
     return 713;
    }
if (index == 149) {
     return 725;
    }
if (index == 150) {
     return 716;
    }
if (index == 151) {
     return 709;
    }
if (index == 152) {
     return 731;
    }
if (index == 153) {
     return 741;
    }
if (index == 154) {
     return 714;
    }
if (index == 155) {
     return 737;
    }
if (index == 156) {
     return 744;
    }
if (index == 157) {
     return 739;
    }
if (index == 158) {
     return 735;
    }
if (index == 159) {
     return 738;
    }
if (index == 160) {
     return 751;
    }
if (index == 161) {
     return 714;
    }
if (index == 162) {
     return 738;
    }
if (index == 163) {
     return 737;
    }
if (index == 164) {
     return 729;
    }
if (index == 165) {
     return 736;
    }
if (index == 166) {
     return 729;
    }
if (index == 167) {
     return 745;
    }
if (index == 168) {
     return 751;
    }
if (index == 169) {
     return 742;
    }
if (index == 170) {
     return 742;
    }
if (index == 171) {
     return 748;
    }
if (index == 172) {
     return 742;
    }
if (index == 173) {
     return 730;
    }
if (index == 174) {
     return 729;
    }
if (index == 175) {
     return 715;
    }
if (index == 176) {
     return 726;
    }
if (index == 177) {
     return 736;
    }
if (index == 178) {
     return 745;
    }
if (index == 179) {
     return 720;
    }
if (index == 180) {
     return 745;
    }
if (index == 181) {
     return 732;
    }
if (index == 182) {
     return 746;
    }
if (index == 183) {
     return 722;
    }
if (index == 184) {
     return 726;
    }
if (index == 185) {
     return 724;
    }
if (index == 186) {
     return 725;
    }
if (index == 187) {
     return 715;
    }
if (index == 188) {
     return 718;
    }
if (index == 189) {
     return 732;
    }
if (index == 190) {
     return 712;
    }
if (index == 191) {
     return 723;
    }
if (index == 192) {
     return 738;
    }
if (index == 193) {
     return 728;
    }
if (index == 194) {
     return 712;
    }
if (index == 195) {
     return 723;
    }
if (index == 196) {
     return 723;
    }
if (index == 197) {
     return 720;
    }
if (index == 198) {
     return 762;
    }
if (index == 199) {
     return 723;
    }
if (index == 200) {
     return 718;
    }
if (index == 201) {
     return 690;
    }
if (index == 202) {
     return 706;
    }
if (index == 203) {
     return 727;
    }
if (index == 204) {
     return 728;
    }
if (index == 205) {
     return 709;
    }
if (index == 206) {
     return 734;
    }
if (index == 207) {
     return 755;
    }
if (index == 208) {
     return 773;
    }
if (index == 209) {
     return 728;
    }
if (index == 210) {
     return 754;
    }
if (index == 211) {
     return 719;
    }
if (index == 212) {
     return 724;
    }
if (index == 213) {
     return 703;
    }
if (index == 214) {
     return 707;
    }
if (index == 215) {
     return 704;
    }
if (index == 216) {
     return 713;
    }
if (index == 217) {
     return 705;
    }
if (index == 218) {
     return 735;
    }
if (index == 219) {
     return 733;
    }
if (index == 220) {
     return 741;
    }
if (index == 221) {
     return 728;
    }
if (index == 222) {
     return 733;
    }
if (index == 223) {
     return 734;
    }
if (index == 224) {
     return 746;
    }
if (index == 225) {
     return 728;
    }
if (index == 226) {
     return 717;
    }
if (index == 227) {
     return 732;
    }
if (index == 228) {
     return 736;
    }
if (index == 229) {
     return 747;
    }
if (index == 230) {
     return 745;
    }
if (index == 231) {
     return 720;
    }
if (index == 232) {
     return 722;
    }
if (index == 233) {
     return 710;
    }
if (index == 234) {
     return 708;
    }
if (index == 235) {
     return 739;
    }
if (index == 236) {
     return 756;
    }
if (index == 237) {
     return 752;
    }
if (index == 238) {
     return 733;
    }
if (index == 239) {
     return 734;
    }
if (index == 240) {
     return 730;
    }
if (index == 241) {
     return 743;
    }
if (index == 242) {
     return 729;
    }
if (index == 243) {
     return 732;
    }
if (index == 244) {
     return 768;
    }
if (index == 245) {
     return 753;
    }
if (index == 246) {
     return 736;
    }
if (index == 247) {
     return 738;
    }
if (index == 248) {
     return 740;
    }
if (index == 249) {
     return 734;
    }
if (index == 250) {
     return 738;
    }
if (index == 251) {
     return 729;
    }
if (index == 252) {
     return 734;
    }
if (index == 253) {
     return 742;
    }
if (index == 254) {
     return 764;
    }
if (index == 255) {
     return 766;
    }
if (index == 256) {
     return 698;
    }
if (index == 257) {
     return 717;
    }
if (index == 258) {
     return 771;
    }
if (index == 259) {
     return 745;
    }
if (index == 260) {
     return 731;
    }
if (index == 261) {
     return 729;
    }
if (index == 262) {
     return 739;
    }
if (index == 263) {
     return 714;
    }
if (index == 264) {
     return 736;
    }
if (index == 265) {
     return 727;
    }
if (index == 266) {
     return 730;
    }
if (index == 267) {
     return 728;
    }
if (index == 268) {
     return 719;
    }
if (index == 269) {
     return 718;
    }
if (index == 270) {
     return 716;
    }
if (index == 271) {
     return 729;
    }
if (index == 272) {
     return 713;
    }
if (index == 273) {
     return 707;
    }
if (index == 274) {
     return 720;
    }
if (index == 275) {
     return 729;
    }
if (index == 276) {
     return 738;
    }
if (index == 277) {
     return 711;
    }
if (index == 278) {
     return 722;
    }
if (index == 279) {
     return 706;
    }
if (index == 280) {
     return 726;
    }
if (index == 281) {
     return 717;
    }
if (index == 282) {
     return 707;
    }
if (index == 283) {
     return 726;
    }
if (index == 284) {
     return 722;
    }
if (index == 285) {
     return 716;
    }
if (index == 286) {
     return 698;
    }
if (index == 287) {
     return 741;
    }
if (index == 288) {
     return 763;
    }
if (index == 289) {
     return 753;
    }
if (index == 290) {
     return 738;
    }
if (index == 291) {
     return 732;
    }
if (index == 292) {
     return 745;
    }
if (index == 293) {
     return 729;
    }
if (index == 294) {
     return 715;
    }
if (index == 295) {
     return 708;
    }
if (index == 296) {
     return 745;
    }
if (index == 297) {
     return 748;
    }
if (index == 298) {
     return 724;
    }
if (index == 299) {
     return 729;
    }
if (index == 300) {
     return 736;
    }
if (index == 301) {
     return 741;
    }
if (index == 302) {
     return 735;
    }
if (index == 303) {
     return 720;
    }
if (index == 304) {
     return 731;
    }
if (index == 305) {
     return 737;
    }
if (index == 306) {
     return 739;
    }
if (index == 307) {
     return 712;
    }
if (index == 308) {
     return 732;
    }
if (index == 309) {
     return 721;
    }
if (index == 310) {
     return 724;
    }
if (index == 311) {
     return 733;
    }
if (index == 312) {
     return 724;
    }
if (index == 313) {
     return 729;
    }
if (index == 314) {
     return 716;
    }
if (index == 315) {
     return 735;
    }
if (index == 316) {
     return 717;
    }
if (index == 317) {
     return 752;
    }
if (index == 318) {
     return 764;
    }
if (index == 319) {
     return 851;
    }
if (index > 319) {
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
    var url = '/fedora/get/seapage:052b_' + imgStr + '/digitalImage';
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
br.numLeafs = 320;

// Book title and the URL used for the book title link
br.bookTitle= "The World in miniature : the Asiatic islands and New Holland : being a description of the manners, customs, characters and state of society of the various tribes by which they are inhabited, vol.2";
br.bookAuthor= "Shoberl, Frederic";
br.bookPub= "London: Printed for R. Ackermann, Repository of Arts, Strand, 1824";
br.bookKeyword= "Southeast Asia--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Southeast Asia--Social life and customs";
br.bookUrl  = '/catalog/sea:052b';

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
