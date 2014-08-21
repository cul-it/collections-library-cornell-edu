//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 921;
    }
if (index == 1) {
     return 530;
    }
if (index == 2) {
     return 532;
    }
if (index == 3) {
     return 494;
    }
if (index == 4) {
     return 790;
    }
if (index == 5) {
     return 761;
    }
if (index == 6) {
     return 523;
    }
if (index == 7) {
     return 764;
    }
if (index == 8) {
     return 509;
    }
if (index == 9) {
     return 766;
    }
if (index == 10) {
     return 762;
    }
if (index == 11) {
     return 500;
    }
if (index == 12) {
     return 784;
    }
if (index == 13) {
     return 512;
    }
if (index == 14) {
     return 775;
    }
if (index == 15) {
     return 472;
    }
if (index == 16) {
     return 747;
    }
if (index == 17) {
     return 478;
    }
if (index == 18) {
     return 500;
    }
if (index == 19) {
     return 495;
    }
if (index == 20) {
     return 512;
    }
if (index == 21) {
     return 473;
    }
if (index == 22) {
     return 488;
    }
if (index == 23) {
     return 469;
    }
if (index == 24) {
     return 1200;
    }
if (index == 25) {
     return 513;
    }
if (index == 26) {
     return 542;
    }
if (index == 27) {
     return 504;
    }
if (index == 28) {
     return 561;
    }
if (index == 29) {
     return 511;
    }
if (index == 30) {
     return 532;
    }
if (index == 31) {
     return 506;
    }
if (index == 32) {
     return 530;
    }
if (index == 33) {
     return 533;
    }
if (index == 34) {
     return 525;
    }
if (index == 35) {
     return 521;
    }
if (index == 36) {
     return 566;
    }
if (index == 37) {
     return 523;
    }
if (index == 38) {
     return 521;
    }
if (index == 39) {
     return 522;
    }
if (index == 40) {
     return 782;
    }
if (index == 41) {
     return 512;
    }
if (index == 42) {
     return 524;
    }
if (index == 43) {
     return 524;
    }
if (index == 44) {
     return 517;
    }
if (index == 45) {
     return 534;
    }
if (index == 46) {
     return 523;
    }
if (index == 47) {
     return 522;
    }
if (index == 48) {
     return 553;
    }
if (index == 49) {
     return 523;
    }
if (index == 50) {
     return 517;
    }
if (index == 51) {
     return 520;
    }
if (index == 52) {
     return 510;
    }
if (index == 53) {
     return 515;
    }
if (index == 54) {
     return 497;
    }
if (index == 55) {
     return 517;
    }
if (index == 56) {
     return 500;
    }
if (index == 57) {
     return 535;
    }
if (index == 58) {
     return 539;
    }
if (index == 59) {
     return 533;
    }
if (index == 60) {
     return 548;
    }
if (index == 61) {
     return 521;
    }
if (index == 62) {
     return 524;
    }
if (index == 63) {
     return 520;
    }
if (index == 64) {
     return 1242;
    }
if (index == 65) {
     return 526;
    }
if (index == 66) {
     return 529;
    }
if (index == 67) {
     return 524;
    }
if (index == 68) {
     return 537;
    }
if (index == 69) {
     return 529;
    }
if (index == 70) {
     return 537;
    }
if (index == 71) {
     return 524;
    }
if (index == 72) {
     return 519;
    }
if (index == 73) {
     return 529;
    }
if (index == 74) {
     return 498;
    }
if (index == 75) {
     return 531;
    }
if (index == 76) {
     return 542;
    }
if (index == 77) {
     return 536;
    }
if (index == 78) {
     return 516;
    }
if (index == 79) {
     return 524;
    }
if (index == 80) {
     return 511;
    }
if (index == 81) {
     return 521;
    }
if (index == 82) {
     return 1256;
    }
if (index == 83) {
     return 505;
    }
if (index == 84) {
     return 511;
    }
if (index == 85) {
     return 541;
    }
if (index == 86) {
     return 526;
    }
if (index == 87) {
     return 511;
    }
if (index == 88) {
     return 519;
    }
if (index == 89) {
     return 501;
    }
if (index == 90) {
     return 1251;
    }
if (index == 91) {
     return 536;
    }
if (index == 92) {
     return 530;
    }
if (index == 93) {
     return 524;
    }
if (index == 94) {
     return 521;
    }
if (index == 95) {
     return 512;
    }
if (index == 96) {
     return 532;
    }
if (index == 97) {
     return 522;
    }
if (index == 98) {
     return 547;
    }
if (index == 99) {
     return 516;
    }
if (index == 100) {
     return 1245;
    }
if (index == 101) {
     return 507;
    }
if (index == 102) {
     return 521;
    }
if (index == 103) {
     return 515;
    }
if (index == 104) {
     return 1231;
    }
if (index == 105) {
     return 529;
    }
if (index == 106) {
     return 534;
    }
if (index == 107) {
     return 520;
    }
if (index == 108) {
     return 537;
    }
if (index == 109) {
     return 526;
    }
if (index == 110) {
     return 545;
    }
if (index == 111) {
     return 514;
    }
if (index == 112) {
     return 534;
    }
if (index == 113) {
     return 538;
    }
if (index == 114) {
     return 527;
    }
if (index == 115) {
     return 535;
    }
if (index == 116) {
     return 1242;
    }
if (index == 117) {
     return 498;
    }
if (index == 118) {
     return 503;
    }
if (index == 119) {
     return 527;
    }
if (index == 120) {
     return 528;
    }
if (index == 121) {
     return 522;
    }
if (index == 122) {
     return 531;
    }
if (index == 123) {
     return 523;
    }
if (index == 124) {
     return 532;
    }
if (index == 125) {
     return 521;
    }
if (index == 126) {
     return 814;
    }
if (index == 127) {
     return 510;
    }
if (index == 128) {
     return 560;
    }
if (index == 129) {
     return 506;
    }
if (index == 130) {
     return 537;
    }
if (index == 131) {
     return 514;
    }
if (index == 132) {
     return 1251;
    }
if (index == 133) {
     return 528;
    }
if (index == 134) {
     return 526;
    }
if (index == 135) {
     return 521;
    }
if (index == 136) {
     return 513;
    }
if (index == 137) {
     return 534;
    }
if (index == 138) {
     return 532;
    }
if (index == 139) {
     return 529;
    }
if (index == 140) {
     return 812;
    }
if (index == 141) {
     return 382;
    }
if (index == 142) {
     return 391;
    }
if (index == 143) {
     return 403;
    }
if (index == 144) {
     return 401;
    }
if (index == 145) {
     return 403;
    }
if (index == 146) {
     return 820;
    }
if (index == 147) {
     return 402;
    }
if (index == 148) {
     return 403;
    }
if (index == 149) {
     return 398;
    }
if (index == 150) {
     return 410;
    }
if (index == 151) {
     return 398;
    }
if (index == 152) {
     return 817;
    }
if (index == 153) {
     return 414;
    }
if (index == 154) {
     return 388;
    }
if (index == 155) {
     return 404;
    }
if (index == 156) {
     return 408;
    }
if (index == 157) {
     return 413;
    }
if (index == 158) {
     return 393;
    }
if (index == 159) {
     return 404;
    }
if (index == 160) {
     return 395;
    }
if (index == 161) {
     return 392;
    }
if (index == 162) {
     return 812;
    }
if (index == 163) {
     return 394;
    }
if (index == 164) {
     return 387;
    }
if (index == 165) {
     return 396;
    }
if (index == 166) {
     return 401;
    }
if (index == 167) {
     return 407;
    }
if (index == 168) {
     return 802;
    }
if (index == 169) {
     return 386;
    }
if (index == 170) {
     return 393;
    }
if (index == 171) {
     return 405;
    }
if (index == 172) {
     return 410;
    }
if (index == 173) {
     return 397;
    }
if (index == 174) {
     return 794;
    }
if (index == 175) {
     return 406;
    }
if (index == 176) {
     return 403;
    }
if (index == 177) {
     return 392;
    }
if (index == 178) {
     return 404;
    }
if (index == 179) {
     return 398;
    }
if (index == 180) {
     return 407;
    }
if (index == 181) {
     return 398;
    }
if (index == 182) {
     return 406;
    }
if (index == 183) {
     return 397;
    }
if (index == 184) {
     return 409;
    }
if (index == 185) {
     return 397;
    }
if (index == 186) {
     return 398;
    }
if (index == 187) {
     return 396;
    }
if (index == 188) {
     return 430;
    }
if (index == 189) {
     return 395;
    }
if (index == 190) {
     return 398;
    }
if (index == 191) {
     return 420;
    }
if (index == 192) {
     return 398;
    }
if (index == 193) {
     return 405;
    }
if (index == 194) {
     return 396;
    }
if (index == 195) {
     return 497;
    }
if (index == 196) {
     return 509;
    }
if (index == 197) {
     return 507;
    }
if (index == 198) {
     return 522;
    }
if (index == 199) {
     return 511;
    }
if (index == 200) {
     return 523;
    }
if (index == 201) {
     return 494;
    }
if (index == 202) {
     return 521;
    }
if (index == 203) {
     return 496;
    }
if (index == 204) {
     return 522;
    }
if (index == 205) {
     return 489;
    }
if (index == 206) {
     return 518;
    }
if (index == 207) {
     return 489;
    }
if (index == 208) {
     return 514;
    }
if (index == 209) {
     return 511;
    }
if (index == 210) {
     return 518;
    }
if (index == 211) {
     return 520;
    }
if (index == 212) {
     return 532;
    }
if (index == 213) {
     return 488;
    }
if (index == 214) {
     return 515;
    }
if (index == 215) {
     return 481;
    }
if (index == 216) {
     return 510;
    }
if (index == 217) {
     return 482;
    }
if (index == 218) {
     return 517;
    }
if (index == 219) {
     return 509;
    }
if (index == 220) {
     return 512;
    }
if (index == 221) {
     return 502;
    }
if (index == 222) {
     return 524;
    }
if (index == 223) {
     return 498;
    }
if (index == 224) {
     return 521;
    }
if (index == 225) {
     return 490;
    }
if (index == 226) {
     return 526;
    }
if (index == 227) {
     return 496;
    }
if (index == 228) {
     return 524;
    }
if (index == 229) {
     return 507;
    }
if (index == 230) {
     return 525;
    }
if (index == 231) {
     return 498;
    }
if (index == 232) {
     return 520;
    }
if (index == 233) {
     return 493;
    }
if (index == 234) {
     return 524;
    }
if (index == 235) {
     return 506;
    }
if (index == 236) {
     return 516;
    }
if (index == 237) {
     return 489;
    }
if (index == 238) {
     return 514;
    }
if (index == 239) {
     return 880;
    }
if (index > 239) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1339;
    }
if (index == 1) {
     return 819;
    }
if (index == 2) {
     return 834;
    }
if (index == 3) {
     return 835;
    }
if (index == 4) {
     return 1244;
    }
if (index == 5) {
     return 1244;
    }
if (index == 6) {
     return 830;
    }
if (index == 7) {
     return 1238;
    }
if (index == 8) {
     return 828;
    }
if (index == 9) {
     return 1232;
    }
if (index == 10) {
     return 1242;
    }
if (index == 11) {
     return 827;
    }
if (index == 12) {
     return 1245;
    }
if (index == 13) {
     return 812;
    }
if (index == 14) {
     return 1242;
    }
if (index == 15) {
     return 817;
    }
if (index == 16) {
     return 1240;
    }
if (index == 17) {
     return 808;
    }
if (index == 18) {
     return 807;
    }
if (index == 19) {
     return 803;
    }
if (index == 20) {
     return 816;
    }
if (index == 21) {
     return 792;
    }
if (index == 22) {
     return 817;
    }
if (index == 23) {
     return 773;
    }
if (index == 24) {
     return 769;
    }
if (index == 25) {
     return 814;
    }
if (index == 26) {
     return 838;
    }
if (index == 27) {
     return 828;
    }
if (index == 28) {
     return 849;
    }
if (index == 29) {
     return 824;
    }
if (index == 30) {
     return 825;
    }
if (index == 31) {
     return 819;
    }
if (index == 32) {
     return 826;
    }
if (index == 33) {
     return 823;
    }
if (index == 34) {
     return 821;
    }
if (index == 35) {
     return 815;
    }
if (index == 36) {
     return 852;
    }
if (index == 37) {
     return 816;
    }
if (index == 38) {
     return 828;
    }
if (index == 39) {
     return 830;
    }
if (index == 40) {
     return 1248;
    }
if (index == 41) {
     return 820;
    }
if (index == 42) {
     return 821;
    }
if (index == 43) {
     return 823;
    }
if (index == 44) {
     return 831;
    }
if (index == 45) {
     return 827;
    }
if (index == 46) {
     return 825;
    }
if (index == 47) {
     return 828;
    }
if (index == 48) {
     return 855;
    }
if (index == 49) {
     return 830;
    }
if (index == 50) {
     return 827;
    }
if (index == 51) {
     return 827;
    }
if (index == 52) {
     return 826;
    }
if (index == 53) {
     return 830;
    }
if (index == 54) {
     return 825;
    }
if (index == 55) {
     return 828;
    }
if (index == 56) {
     return 824;
    }
if (index == 57) {
     return 819;
    }
if (index == 58) {
     return 828;
    }
if (index == 59) {
     return 823;
    }
if (index == 60) {
     return 830;
    }
if (index == 61) {
     return 820;
    }
if (index == 62) {
     return 820;
    }
if (index == 63) {
     return 829;
    }
if (index == 64) {
     return 816;
    }
if (index == 65) {
     return 819;
    }
if (index == 66) {
     return 827;
    }
if (index == 67) {
     return 827;
    }
if (index == 68) {
     return 822;
    }
if (index == 69) {
     return 823;
    }
if (index == 70) {
     return 824;
    }
if (index == 71) {
     return 823;
    }
if (index == 72) {
     return 824;
    }
if (index == 73) {
     return 821;
    }
if (index == 74) {
     return 815;
    }
if (index == 75) {
     return 814;
    }
if (index == 76) {
     return 829;
    }
if (index == 77) {
     return 831;
    }
if (index == 78) {
     return 825;
    }
if (index == 79) {
     return 827;
    }
if (index == 80) {
     return 818;
    }
if (index == 81) {
     return 827;
    }
if (index == 82) {
     return 791;
    }
if (index == 83) {
     return 834;
    }
if (index == 84) {
     return 818;
    }
if (index == 85) {
     return 826;
    }
if (index == 86) {
     return 820;
    }
if (index == 87) {
     return 821;
    }
if (index == 88) {
     return 825;
    }
if (index == 89) {
     return 825;
    }
if (index == 90) {
     return 764;
    }
if (index == 91) {
     return 830;
    }
if (index == 92) {
     return 829;
    }
if (index == 93) {
     return 821;
    }
if (index == 94) {
     return 829;
    }
if (index == 95) {
     return 830;
    }
if (index == 96) {
     return 827;
    }
if (index == 97) {
     return 819;
    }
if (index == 98) {
     return 825;
    }
if (index == 99) {
     return 832;
    }
if (index == 100) {
     return 801;
    }
if (index == 101) {
     return 821;
    }
if (index == 102) {
     return 823;
    }
if (index == 103) {
     return 825;
    }
if (index == 104) {
     return 792;
    }
if (index == 105) {
     return 822;
    }
if (index == 106) {
     return 831;
    }
if (index == 107) {
     return 825;
    }
if (index == 108) {
     return 822;
    }
if (index == 109) {
     return 825;
    }
if (index == 110) {
     return 834;
    }
if (index == 111) {
     return 831;
    }
if (index == 112) {
     return 826;
    }
if (index == 113) {
     return 828;
    }
if (index == 114) {
     return 817;
    }
if (index == 115) {
     return 821;
    }
if (index == 116) {
     return 818;
    }
if (index == 117) {
     return 828;
    }
if (index == 118) {
     return 826;
    }
if (index == 119) {
     return 813;
    }
if (index == 120) {
     return 821;
    }
if (index == 121) {
     return 833;
    }
if (index == 122) {
     return 822;
    }
if (index == 123) {
     return 826;
    }
if (index == 124) {
     return 828;
    }
if (index == 125) {
     return 821;
    }
if (index == 126) {
     return 1245;
    }
if (index == 127) {
     return 826;
    }
if (index == 128) {
     return 827;
    }
if (index == 129) {
     return 820;
    }
if (index == 130) {
     return 825;
    }
if (index == 131) {
     return 832;
    }
if (index == 132) {
     return 780;
    }
if (index == 133) {
     return 828;
    }
if (index == 134) {
     return 822;
    }
if (index == 135) {
     return 821;
    }
if (index == 136) {
     return 814;
    }
if (index == 137) {
     return 818;
    }
if (index == 138) {
     return 822;
    }
if (index == 139) {
     return 822;
    }
if (index == 140) {
     return 1239;
    }
if (index == 141) {
     return 621;
    }
if (index == 142) {
     return 615;
    }
if (index == 143) {
     return 624;
    }
if (index == 144) {
     return 615;
    }
if (index == 145) {
     return 616;
    }
if (index == 146) {
     return 1236;
    }
if (index == 147) {
     return 617;
    }
if (index == 148) {
     return 626;
    }
if (index == 149) {
     return 618;
    }
if (index == 150) {
     return 617;
    }
if (index == 151) {
     return 623;
    }
if (index == 152) {
     return 1228;
    }
if (index == 153) {
     return 625;
    }
if (index == 154) {
     return 622;
    }
if (index == 155) {
     return 616;
    }
if (index == 156) {
     return 621;
    }
if (index == 157) {
     return 612;
    }
if (index == 158) {
     return 620;
    }
if (index == 159) {
     return 613;
    }
if (index == 160) {
     return 619;
    }
if (index == 161) {
     return 623;
    }
if (index == 162) {
     return 1246;
    }
if (index == 163) {
     return 620;
    }
if (index == 164) {
     return 620;
    }
if (index == 165) {
     return 623;
    }
if (index == 166) {
     return 617;
    }
if (index == 167) {
     return 619;
    }
if (index == 168) {
     return 1236;
    }
if (index == 169) {
     return 625;
    }
if (index == 170) {
     return 616;
    }
if (index == 171) {
     return 620;
    }
if (index == 172) {
     return 613;
    }
if (index == 173) {
     return 620;
    }
if (index == 174) {
     return 1235;
    }
if (index == 175) {
     return 619;
    }
if (index == 176) {
     return 617;
    }
if (index == 177) {
     return 621;
    }
if (index == 178) {
     return 619;
    }
if (index == 179) {
     return 622;
    }
if (index == 180) {
     return 624;
    }
if (index == 181) {
     return 620;
    }
if (index == 182) {
     return 622;
    }
if (index == 183) {
     return 622;
    }
if (index == 184) {
     return 619;
    }
if (index == 185) {
     return 622;
    }
if (index == 186) {
     return 618;
    }
if (index == 187) {
     return 621;
    }
if (index == 188) {
     return 642;
    }
if (index == 189) {
     return 622;
    }
if (index == 190) {
     return 613;
    }
if (index == 191) {
     return 615;
    }
if (index == 192) {
     return 615;
    }
if (index == 193) {
     return 623;
    }
if (index == 194) {
     return 615;
    }
if (index == 195) {
     return 816;
    }
if (index == 196) {
     return 806;
    }
if (index == 197) {
     return 818;
    }
if (index == 198) {
     return 818;
    }
if (index == 199) {
     return 819;
    }
if (index == 200) {
     return 817;
    }
if (index == 201) {
     return 828;
    }
if (index == 202) {
     return 809;
    }
if (index == 203) {
     return 823;
    }
if (index == 204) {
     return 810;
    }
if (index == 205) {
     return 823;
    }
if (index == 206) {
     return 816;
    }
if (index == 207) {
     return 828;
    }
if (index == 208) {
     return 821;
    }
if (index == 209) {
     return 818;
    }
if (index == 210) {
     return 817;
    }
if (index == 211) {
     return 818;
    }
if (index == 212) {
     return 825;
    }
if (index == 213) {
     return 825;
    }
if (index == 214) {
     return 813;
    }
if (index == 215) {
     return 823;
    }
if (index == 216) {
     return 802;
    }
if (index == 217) {
     return 831;
    }
if (index == 218) {
     return 815;
    }
if (index == 219) {
     return 825;
    }
if (index == 220) {
     return 820;
    }
if (index == 221) {
     return 831;
    }
if (index == 222) {
     return 820;
    }
if (index == 223) {
     return 818;
    }
if (index == 224) {
     return 813;
    }
if (index == 225) {
     return 821;
    }
if (index == 226) {
     return 817;
    }
if (index == 227) {
     return 824;
    }
if (index == 228) {
     return 826;
    }
if (index == 229) {
     return 803;
    }
if (index == 230) {
     return 820;
    }
if (index == 231) {
     return 817;
    }
if (index == 232) {
     return 821;
    }
if (index == 233) {
     return 805;
    }
if (index == 234) {
     return 809;
    }
if (index == 235) {
     return 812;
    }
if (index == 236) {
     return 815;
    }
if (index == 237) {
     return 825;
    }
if (index == 238) {
     return 815;
    }
if (index == 239) {
     return 1320;
    }
if (index > 239) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:008_' + imgStr + '/digitalImage';
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
br.numLeafs = 240;

// Book title and the URL used for the book title link
br.bookTitle= "Siam";
br.bookAuthor= "Loti, Pierre";
br.bookPub= "London: T.W.  Laurie ltd, 1913";
br.bookKeyword= "Loti, Pierre,--1850-1923--Journeys--Cambodia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cambodia--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Angkor (Extinct City)";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:008';

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
