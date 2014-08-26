//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 337;
    }
if (index == 1) {
     return 341;
    }
if (index == 2) {
     return 331;
    }
if (index == 3) {
     return 334;
    }
if (index == 4) {
     return 322;
    }
if (index == 5) {
     return 465;
    }
if (index == 6) {
     return 311;
    }
if (index == 7) {
     return 308;
    }
if (index == 8) {
     return 320;
    }
if (index == 9) {
     return 306;
    }
if (index == 10) {
     return 316;
    }
if (index == 11) {
     return 304;
    }
if (index == 12) {
     return 304;
    }
if (index == 13) {
     return 297;
    }
if (index == 14) {
     return 295;
    }
if (index == 15) {
     return 288;
    }
if (index == 16) {
     return 288;
    }
if (index == 17) {
     return 301;
    }
if (index == 18) {
     return 292;
    }
if (index == 19) {
     return 292;
    }
if (index == 20) {
     return 302;
    }
if (index == 21) {
     return 299;
    }
if (index == 22) {
     return 278;
    }
if (index == 23) {
     return 288;
    }
if (index == 24) {
     return 293;
    }
if (index == 25) {
     return 300;
    }
if (index == 26) {
     return 304;
    }
if (index == 27) {
     return 287;
    }
if (index == 28) {
     return 289;
    }
if (index == 29) {
     return 292;
    }
if (index == 30) {
     return 429;
    }
if (index == 31) {
     return 296;
    }
if (index == 32) {
     return 291;
    }
if (index == 33) {
     return 302;
    }
if (index == 34) {
     return 286;
    }
if (index == 35) {
     return 303;
    }
if (index == 36) {
     return 303;
    }
if (index == 37) {
     return 288;
    }
if (index == 38) {
     return 441;
    }
if (index == 39) {
     return 302;
    }
if (index == 40) {
     return 289;
    }
if (index == 41) {
     return 296;
    }
if (index == 42) {
     return 293;
    }
if (index == 43) {
     return 286;
    }
if (index == 44) {
     return 304;
    }
if (index == 45) {
     return 292;
    }
if (index == 46) {
     return 844;
    }
if (index == 47) {
     return 844;
    }
if (index == 48) {
     return 298;
    }
if (index == 49) {
     return 295;
    }
if (index == 50) {
     return 294;
    }
if (index == 51) {
     return 290;
    }
if (index == 52) {
     return 305;
    }
if (index == 53) {
     return 297;
    }
if (index == 54) {
     return 314;
    }
if (index == 55) {
     return 302;
    }
if (index == 56) {
     return 296;
    }
if (index == 57) {
     return 277;
    }
if (index == 58) {
     return 298;
    }
if (index == 59) {
     return 296;
    }
if (index == 60) {
     return 281;
    }
if (index == 61) {
     return 235;
    }
if (index == 62) {
     return 278;
    }
if (index == 63) {
     return 304;
    }
if (index == 64) {
     return 421;
    }
if (index == 65) {
     return 282;
    }
if (index == 66) {
     return 285;
    }
if (index == 67) {
     return 286;
    }
if (index == 68) {
     return 295;
    }
if (index == 69) {
     return 278;
    }
if (index == 70) {
     return 315;
    }
if (index == 71) {
     return 307;
    }
if (index == 72) {
     return 433;
    }
if (index == 73) {
     return 258;
    }
if (index == 74) {
     return 296;
    }
if (index == 75) {
     return 297;
    }
if (index == 76) {
     return 844;
    }
if (index == 77) {
     return 844;
    }
if (index == 78) {
     return 280;
    }
if (index == 79) {
     return 299;
    }
if (index == 80) {
     return 426;
    }
if (index == 81) {
     return 263;
    }
if (index == 82) {
     return 286;
    }
if (index == 83) {
     return 284;
    }
if (index == 84) {
     return 425;
    }
if (index == 85) {
     return 280;
    }
if (index == 86) {
     return 298;
    }
if (index == 87) {
     return 285;
    }
if (index == 88) {
     return 288;
    }
if (index == 89) {
     return 266;
    }
if (index == 90) {
     return 288;
    }
if (index == 91) {
     return 286;
    }
if (index == 92) {
     return 410;
    }
if (index == 93) {
     return 265;
    }
if (index == 94) {
     return 292;
    }
if (index == 95) {
     return 290;
    }
if (index == 96) {
     return 277;
    }
if (index == 97) {
     return 270;
    }
if (index == 98) {
     return 292;
    }
if (index == 99) {
     return 303;
    }
if (index == 100) {
     return 413;
    }
if (index == 101) {
     return 255;
    }
if (index == 102) {
     return 293;
    }
if (index == 103) {
     return 295;
    }
if (index == 104) {
     return 425;
    }
if (index == 105) {
     return 242;
    }
if (index == 106) {
     return 275;
    }
if (index == 107) {
     return 292;
    }
if (index == 108) {
     return 297;
    }
if (index == 109) {
     return 298;
    }
if (index == 110) {
     return 283;
    }
if (index == 111) {
     return 264;
    }
if (index == 112) {
     return 292;
    }
if (index == 113) {
     return 296;
    }
if (index == 114) {
     return 280;
    }
if (index == 115) {
     return 224;
    }
if (index == 116) {
     return 287;
    }
if (index == 117) {
     return 282;
    }
if (index == 118) {
     return 273;
    }
if (index == 119) {
     return 290;
    }
if (index == 120) {
     return 290;
    }
if (index == 121) {
     return 288;
    }
if (index == 122) {
     return 299;
    }
if (index == 123) {
     return 283;
    }
if (index == 124) {
     return 302;
    }
if (index == 125) {
     return 289;
    }
if (index == 126) {
     return 304;
    }
if (index == 127) {
     return 283;
    }
if (index == 128) {
     return 276;
    }
if (index == 129) {
     return 309;
    }
if (index == 130) {
     return 283;
    }
if (index == 131) {
     return 302;
    }
if (index == 132) {
     return 278;
    }
if (index == 133) {
     return 292;
    }
if (index == 134) {
     return 297;
    }
if (index == 135) {
     return 302;
    }
if (index == 136) {
     return 290;
    }
if (index == 137) {
     return 296;
    }
if (index == 138) {
     return 283;
    }
if (index == 139) {
     return 250;
    }
if (index == 140) {
     return 277;
    }
if (index == 141) {
     return 304;
    }
if (index == 142) {
     return 259;
    }
if (index == 143) {
     return 270;
    }
if (index == 144) {
     return 293;
    }
if (index == 145) {
     return 285;
    }
if (index == 146) {
     return 283;
    }
if (index == 147) {
     return 290;
    }
if (index == 148) {
     return 292;
    }
if (index == 149) {
     return 292;
    }
if (index == 150) {
     return 305;
    }
if (index == 151) {
     return 286;
    }
if (index == 152) {
     return 431;
    }
if (index == 153) {
     return 246;
    }
if (index == 154) {
     return 283;
    }
if (index == 155) {
     return 292;
    }
if (index == 156) {
     return 295;
    }
if (index == 157) {
     return 296;
    }
if (index == 158) {
     return 285;
    }
if (index == 159) {
     return 295;
    }
if (index == 160) {
     return 284;
    }
if (index == 161) {
     return 295;
    }
if (index == 162) {
     return 306;
    }
if (index == 163) {
     return 291;
    }
if (index == 164) {
     return 422;
    }
if (index == 165) {
     return 228;
    }
if (index == 166) {
     return 317;
    }
if (index == 167) {
     return 281;
    }
if (index == 168) {
     return 435;
    }
if (index == 169) {
     return 271;
    }
if (index == 170) {
     return 308;
    }
if (index == 171) {
     return 291;
    }
if (index == 172) {
     return 302;
    }
if (index == 173) {
     return 304;
    }
if (index == 174) {
     return 441;
    }
if (index == 175) {
     return 219;
    }
if (index == 176) {
     return 286;
    }
if (index == 177) {
     return 297;
    }
if (index == 178) {
     return 302;
    }
if (index == 179) {
     return 288;
    }
if (index == 180) {
     return 290;
    }
if (index == 181) {
     return 299;
    }
if (index == 182) {
     return 289;
    }
if (index == 183) {
     return 293;
    }
if (index == 184) {
     return 302;
    }
if (index == 185) {
     return 288;
    }
if (index == 186) {
     return 291;
    }
if (index == 187) {
     return 292;
    }
if (index == 188) {
     return 284;
    }
if (index == 189) {
     return 302;
    }
if (index == 190) {
     return 283;
    }
if (index == 191) {
     return 303;
    }
if (index == 192) {
     return 290;
    }
if (index == 193) {
     return 293;
    }
if (index == 194) {
     return 292;
    }
if (index == 195) {
     return 289;
    }
if (index == 196) {
     return 292;
    }
if (index == 197) {
     return 291;
    }
if (index == 198) {
     return 295;
    }
if (index == 199) {
     return 295;
    }
if (index == 200) {
     return 277;
    }
if (index == 201) {
     return 294;
    }
if (index == 202) {
     return 295;
    }
if (index == 203) {
     return 281;
    }
if (index == 204) {
     return 282;
    }
if (index == 205) {
     return 292;
    }
if (index == 206) {
     return 283;
    }
if (index == 207) {
     return 288;
    }
if (index == 208) {
     return 290;
    }
if (index == 209) {
     return 293;
    }
if (index == 210) {
     return 293;
    }
if (index == 211) {
     return 294;
    }
if (index == 212) {
     return 296;
    }
if (index == 213) {
     return 237;
    }
if (index == 214) {
     return 283;
    }
if (index == 215) {
     return 292;
    }
if (index == 216) {
     return 429;
    }
if (index == 217) {
     return 237;
    }
if (index == 218) {
     return 281;
    }
if (index == 219) {
     return 297;
    }
if (index == 220) {
     return 287;
    }
if (index == 221) {
     return 299;
    }
if (index == 222) {
     return 285;
    }
if (index == 223) {
     return 289;
    }
if (index == 224) {
     return 447;
    }
if (index == 225) {
     return 267;
    }
if (index == 226) {
     return 292;
    }
if (index == 227) {
     return 298;
    }
if (index == 228) {
     return 271;
    }
if (index == 229) {
     return 240;
    }
if (index == 230) {
     return 300;
    }
if (index == 231) {
     return 297;
    }
if (index == 232) {
     return 310;
    }
if (index == 233) {
     return 294;
    }
if (index == 234) {
     return 290;
    }
if (index == 235) {
     return 299;
    }
if (index == 236) {
     return 285;
    }
if (index == 237) {
     return 297;
    }
if (index == 238) {
     return 641;
    }
if (index == 239) {
     return 678;
    }
if (index == 240) {
     return 292;
    }
if (index == 241) {
     return 292;
    }
if (index == 242) {
     return 295;
    }
if (index == 243) {
     return 296;
    }
if (index == 244) {
     return 286;
    }
if (index == 245) {
     return 311;
    }
if (index == 246) {
     return 303;
    }
if (index == 247) {
     return 325;
    }
if (index == 248) {
     return 316;
    }
if (index == 249) {
     return 303;
    }
if (index == 250) {
     return 290;
    }
if (index == 251) {
     return 305;
    }
if (index == 252) {
     return 310;
    }
if (index == 253) {
     return 305;
    }
if (index == 254) {
     return 304;
    }
if (index == 255) {
     return 299;
    }
if (index == 256) {
     return 316;
    }
if (index == 257) {
     return 303;
    }
if (index == 258) {
     return 294;
    }
if (index == 259) {
     return 295;
    }
if (index == 260) {
     return 302;
    }
if (index == 261) {
     return 318;
    }
if (index == 262) {
     return 309;
    }
if (index == 263) {
     return 314;
    }
if (index == 264) {
     return 296;
    }
if (index == 265) {
     return 263;
    }
if (index == 266) {
     return 274;
    }
if (index == 267) {
     return 310;
    }
if (index > 267) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 509;
    }
if (index == 1) {
     return 511;
    }
if (index == 2) {
     return 491;
    }
if (index == 3) {
     return 480;
    }
if (index == 4) {
     return 476;
    }
if (index == 5) {
     return 298;
    }
if (index == 6) {
     return 479;
    }
if (index == 7) {
     return 465;
    }
if (index == 8) {
     return 444;
    }
if (index == 9) {
     return 459;
    }
if (index == 10) {
     return 458;
    }
if (index == 11) {
     return 454;
    }
if (index == 12) {
     return 450;
    }
if (index == 13) {
     return 447;
    }
if (index == 14) {
     return 454;
    }
if (index == 15) {
     return 450;
    }
if (index == 16) {
     return 454;
    }
if (index == 17) {
     return 463;
    }
if (index == 18) {
     return 438;
    }
if (index == 19) {
     return 437;
    }
if (index == 20) {
     return 449;
    }
if (index == 21) {
     return 460;
    }
if (index == 22) {
     return 435;
    }
if (index == 23) {
     return 454;
    }
if (index == 24) {
     return 448;
    }
if (index == 25) {
     return 455;
    }
if (index == 26) {
     return 446;
    }
if (index == 27) {
     return 448;
    }
if (index == 28) {
     return 425;
    }
if (index == 29) {
     return 445;
    }
if (index == 30) {
     return 291;
    }
if (index == 31) {
     return 450;
    }
if (index == 32) {
     return 455;
    }
if (index == 33) {
     return 455;
    }
if (index == 34) {
     return 449;
    }
if (index == 35) {
     return 461;
    }
if (index == 36) {
     return 464;
    }
if (index == 37) {
     return 452;
    }
if (index == 38) {
     return 301;
    }
if (index == 39) {
     return 446;
    }
if (index == 40) {
     return 443;
    }
if (index == 41) {
     return 439;
    }
if (index == 42) {
     return 436;
    }
if (index == 43) {
     return 420;
    }
if (index == 44) {
     return 437;
    }
if (index == 45) {
     return 452;
    }
if (index == 46) {
     return 1286;
    }
if (index == 47) {
     return 1286;
    }
if (index == 48) {
     return 435;
    }
if (index == 49) {
     return 439;
    }
if (index == 50) {
     return 458;
    }
if (index == 51) {
     return 435;
    }
if (index == 52) {
     return 445;
    }
if (index == 53) {
     return 455;
    }
if (index == 54) {
     return 436;
    }
if (index == 55) {
     return 439;
    }
if (index == 56) {
     return 445;
    }
if (index == 57) {
     return 436;
    }
if (index == 58) {
     return 437;
    }
if (index == 59) {
     return 422;
    }
if (index == 60) {
     return 430;
    }
if (index == 61) {
     return 387;
    }
if (index == 62) {
     return 435;
    }
if (index == 63) {
     return 460;
    }
if (index == 64) {
     return 272;
    }
if (index == 65) {
     return 454;
    }
if (index == 66) {
     return 441;
    }
if (index == 67) {
     return 433;
    }
if (index == 68) {
     return 431;
    }
if (index == 69) {
     return 419;
    }
if (index == 70) {
     return 433;
    }
if (index == 71) {
     return 442;
    }
if (index == 72) {
     return 296;
    }
if (index == 73) {
     return 410;
    }
if (index == 74) {
     return 427;
    }
if (index == 75) {
     return 436;
    }
if (index == 76) {
     return 1286;
    }
if (index == 77) {
     return 1286;
    }
if (index == 78) {
     return 434;
    }
if (index == 79) {
     return 452;
    }
if (index == 80) {
     return 276;
    }
if (index == 81) {
     return 421;
    }
if (index == 82) {
     return 441;
    }
if (index == 83) {
     return 425;
    }
if (index == 84) {
     return 286;
    }
if (index == 85) {
     return 397;
    }
if (index == 86) {
     return 443;
    }
if (index == 87) {
     return 443;
    }
if (index == 88) {
     return 434;
    }
if (index == 89) {
     return 388;
    }
if (index == 90) {
     return 455;
    }
if (index == 91) {
     return 432;
    }
if (index == 92) {
     return 291;
    }
if (index == 93) {
     return 397;
    }
if (index == 94) {
     return 422;
    }
if (index == 95) {
     return 454;
    }
if (index == 96) {
     return 421;
    }
if (index == 97) {
     return 413;
    }
if (index == 98) {
     return 425;
    }
if (index == 99) {
     return 446;
    }
if (index == 100) {
     return 291;
    }
if (index == 101) {
     return 405;
    }
if (index == 102) {
     return 437;
    }
if (index == 103) {
     return 442;
    }
if (index == 104) {
     return 281;
    }
if (index == 105) {
     return 366;
    }
if (index == 106) {
     return 406;
    }
if (index == 107) {
     return 421;
    }
if (index == 108) {
     return 432;
    }
if (index == 109) {
     return 440;
    }
if (index == 110) {
     return 438;
    }
if (index == 111) {
     return 390;
    }
if (index == 112) {
     return 430;
    }
if (index == 113) {
     return 434;
    }
if (index == 114) {
     return 439;
    }
if (index == 115) {
     return 330;
    }
if (index == 116) {
     return 439;
    }
if (index == 117) {
     return 435;
    }
if (index == 118) {
     return 426;
    }
if (index == 119) {
     return 435;
    }
if (index == 120) {
     return 434;
    }
if (index == 121) {
     return 424;
    }
if (index == 122) {
     return 436;
    }
if (index == 123) {
     return 425;
    }
if (index == 124) {
     return 435;
    }
if (index == 125) {
     return 435;
    }
if (index == 126) {
     return 440;
    }
if (index == 127) {
     return 436;
    }
if (index == 128) {
     return 444;
    }
if (index == 129) {
     return 452;
    }
if (index == 130) {
     return 434;
    }
if (index == 131) {
     return 443;
    }
if (index == 132) {
     return 421;
    }
if (index == 133) {
     return 448;
    }
if (index == 134) {
     return 441;
    }
if (index == 135) {
     return 451;
    }
if (index == 136) {
     return 420;
    }
if (index == 137) {
     return 453;
    }
if (index == 138) {
     return 426;
    }
if (index == 139) {
     return 389;
    }
if (index == 140) {
     return 449;
    }
if (index == 141) {
     return 455;
    }
if (index == 142) {
     return 430;
    }
if (index == 143) {
     return 367;
    }
if (index == 144) {
     return 442;
    }
if (index == 145) {
     return 428;
    }
if (index == 146) {
     return 458;
    }
if (index == 147) {
     return 444;
    }
if (index == 148) {
     return 425;
    }
if (index == 149) {
     return 424;
    }
if (index == 150) {
     return 448;
    }
if (index == 151) {
     return 428;
    }
if (index == 152) {
     return 279;
    }
if (index == 153) {
     return 380;
    }
if (index == 154) {
     return 419;
    }
if (index == 155) {
     return 444;
    }
if (index == 156) {
     return 436;
    }
if (index == 157) {
     return 451;
    }
if (index == 158) {
     return 429;
    }
if (index == 159) {
     return 445;
    }
if (index == 160) {
     return 431;
    }
if (index == 161) {
     return 440;
    }
if (index == 162) {
     return 457;
    }
if (index == 163) {
     return 433;
    }
if (index == 164) {
     return 291;
    }
if (index == 165) {
     return 350;
    }
if (index == 166) {
     return 437;
    }
if (index == 167) {
     return 433;
    }
if (index == 168) {
     return 299;
    }
if (index == 169) {
     return 430;
    }
if (index == 170) {
     return 444;
    }
if (index == 171) {
     return 436;
    }
if (index == 172) {
     return 435;
    }
if (index == 173) {
     return 440;
    }
if (index == 174) {
     return 299;
    }
if (index == 175) {
     return 349;
    }
if (index == 176) {
     return 398;
    }
if (index == 177) {
     return 443;
    }
if (index == 178) {
     return 443;
    }
if (index == 179) {
     return 438;
    }
if (index == 180) {
     return 432;
    }
if (index == 181) {
     return 447;
    }
if (index == 182) {
     return 434;
    }
if (index == 183) {
     return 450;
    }
if (index == 184) {
     return 445;
    }
if (index == 185) {
     return 438;
    }
if (index == 186) {
     return 432;
    }
if (index == 187) {
     return 466;
    }
if (index == 188) {
     return 433;
    }
if (index == 189) {
     return 449;
    }
if (index == 190) {
     return 425;
    }
if (index == 191) {
     return 433;
    }
if (index == 192) {
     return 431;
    }
if (index == 193) {
     return 416;
    }
if (index == 194) {
     return 450;
    }
if (index == 195) {
     return 426;
    }
if (index == 196) {
     return 434;
    }
if (index == 197) {
     return 447;
    }
if (index == 198) {
     return 427;
    }
if (index == 199) {
     return 447;
    }
if (index == 200) {
     return 434;
    }
if (index == 201) {
     return 436;
    }
if (index == 202) {
     return 432;
    }
if (index == 203) {
     return 440;
    }
if (index == 204) {
     return 437;
    }
if (index == 205) {
     return 448;
    }
if (index == 206) {
     return 432;
    }
if (index == 207) {
     return 430;
    }
if (index == 208) {
     return 423;
    }
if (index == 209) {
     return 327;
    }
if (index == 210) {
     return 422;
    }
if (index == 211) {
     return 452;
    }
if (index == 212) {
     return 433;
    }
if (index == 213) {
     return 374;
    }
if (index == 214) {
     return 451;
    }
if (index == 215) {
     return 428;
    }
if (index == 216) {
     return 299;
    }
if (index == 217) {
     return 396;
    }
if (index == 218) {
     return 433;
    }
if (index == 219) {
     return 443;
    }
if (index == 220) {
     return 437;
    }
if (index == 221) {
     return 439;
    }
if (index == 222) {
     return 441;
    }
if (index == 223) {
     return 433;
    }
if (index == 224) {
     return 299;
    }
if (index == 225) {
     return 405;
    }
if (index == 226) {
     return 450;
    }
if (index == 227) {
     return 442;
    }
if (index == 228) {
     return 413;
    }
if (index == 229) {
     return 378;
    }
if (index == 230) {
     return 438;
    }
if (index == 231) {
     return 432;
    }
if (index == 232) {
     return 452;
    }
if (index == 233) {
     return 436;
    }
if (index == 234) {
     return 449;
    }
if (index == 235) {
     return 435;
    }
if (index == 236) {
     return 428;
    }
if (index == 237) {
     return 427;
    }
if (index == 238) {
     return 955;
    }
if (index == 239) {
     return 961;
    }
if (index == 240) {
     return 451;
    }
if (index == 241) {
     return 450;
    }
if (index == 242) {
     return 451;
    }
if (index == 243) {
     return 439;
    }
if (index == 244) {
     return 437;
    }
if (index == 245) {
     return 429;
    }
if (index == 246) {
     return 426;
    }
if (index == 247) {
     return 435;
    }
if (index == 248) {
     return 458;
    }
if (index == 249) {
     return 449;
    }
if (index == 250) {
     return 450;
    }
if (index == 251) {
     return 456;
    }
if (index == 252) {
     return 452;
    }
if (index == 253) {
     return 440;
    }
if (index == 254) {
     return 452;
    }
if (index == 255) {
     return 453;
    }
if (index == 256) {
     return 450;
    }
if (index == 257) {
     return 440;
    }
if (index == 258) {
     return 438;
    }
if (index == 259) {
     return 439;
    }
if (index == 260) {
     return 440;
    }
if (index == 261) {
     return 434;
    }
if (index == 262) {
     return 439;
    }
if (index == 263) {
     return 435;
    }
if (index == 264) {
     return 407;
    }
if (index == 265) {
     return 395;
    }
if (index == 266) {
     return 436;
    }
if (index == 267) {
     return 465;
    }
if (index > 267) {
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
    var url = '/fedora/get/seapage:050_' + imgStr + '/digitalImage';
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
br.numLeafs = 268;

// Book title and the URL used for the book title link
br.bookTitle= "The French in Indo-China : with a narrative of Garnier's explorations in Cochin-China, Annam, and Tonquin";
br.bookAuthor= "no recorded author";
br.bookPub= "London ; New York: Nelson, 1884";
br.bookKeyword= "Garnier, Francis,--1839-1873.--Voyage d'exploration en Indo-Chine<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indochina--Description and travel";
br.bookUrl  = '/catalog/sea:050';

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
