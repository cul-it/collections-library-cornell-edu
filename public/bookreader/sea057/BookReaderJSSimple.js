//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 590;
    }
if (index == 1) {
     return 592;
    }
if (index == 2) {
     return 624;
    }
if (index == 3) {
     return 592;
    }
if (index == 4) {
     return 525;
    }
if (index == 5) {
     return 419;
    }
if (index == 6) {
     return 552;
    }
if (index == 7) {
     return 1092;
    }
if (index == 8) {
     return 606;
    }
if (index == 9) {
     return 508;
    }
if (index == 10) {
     return 522;
    }
if (index == 11) {
     return 474;
    }
if (index == 12) {
     return 494;
    }
if (index == 13) {
     return 474;
    }
if (index == 14) {
     return 474;
    }
if (index == 15) {
     return 494;
    }
if (index == 16) {
     return 504;
    }
if (index == 17) {
     return 610;
    }
if (index == 18) {
     return 524;
    }
if (index == 19) {
     return 496;
    }
if (index == 20) {
     return 494;
    }
if (index == 21) {
     return 424;
    }
if (index == 22) {
     return 579;
    }
if (index == 23) {
     return 488;
    }
if (index == 24) {
     return 488;
    }
if (index == 25) {
     return 488;
    }
if (index == 26) {
     return 568;
    }
if (index == 27) {
     return 488;
    }
if (index == 28) {
     return 488;
    }
if (index == 29) {
     return 576;
    }
if (index == 30) {
     return 456;
    }
if (index == 31) {
     return 456;
    }
if (index == 32) {
     return 548;
    }
if (index == 33) {
     return 456;
    }
if (index == 34) {
     return 572;
    }
if (index == 35) {
     return 570;
    }
if (index == 36) {
     return 452;
    }
if (index == 37) {
     return 452;
    }
if (index == 38) {
     return 543;
    }
if (index == 39) {
     return 535;
    }
if (index == 40) {
     return 452;
    }
if (index == 41) {
     return 452;
    }
if (index == 42) {
     return 1086;
    }
if (index == 43) {
     return 540;
    }
if (index == 44) {
     return 540;
    }
if (index == 45) {
     return 496;
    }
if (index == 46) {
     return 496;
    }
if (index == 47) {
     return 496;
    }
if (index == 48) {
     return 496;
    }
if (index == 49) {
     return 440;
    }
if (index == 50) {
     return 440;
    }
if (index == 51) {
     return 440;
    }
if (index == 52) {
     return 472;
    }
if (index == 53) {
     return 472;
    }
if (index == 54) {
     return 472;
    }
if (index == 55) {
     return 464;
    }
if (index == 56) {
     return 557;
    }
if (index == 57) {
     return 464;
    }
if (index == 58) {
     return 428;
    }
if (index == 59) {
     return 591;
    }
if (index == 60) {
     return 440;
    }
if (index == 61) {
     return 440;
    }
if (index == 62) {
     return 440;
    }
if (index == 63) {
     return 440;
    }
if (index == 64) {
     return 440;
    }
if (index == 65) {
     return 436;
    }
if (index == 66) {
     return 557;
    }
if (index == 67) {
     return 476;
    }
if (index == 68) {
     return 476;
    }
if (index == 69) {
     return 476;
    }
if (index == 70) {
     return 476;
    }
if (index == 71) {
     return 598;
    }
if (index == 72) {
     return 500;
    }
if (index == 73) {
     return 444;
    }
if (index == 74) {
     return 444;
    }
if (index == 75) {
     return 444;
    }
if (index == 76) {
     return 444;
    }
if (index == 77) {
     return 540;
    }
if (index == 78) {
     return 444;
    }
if (index == 79) {
     return 444;
    }
if (index == 80) {
     return 444;
    }
if (index == 81) {
     return 444;
    }
if (index == 82) {
     return 596;
    }
if (index == 83) {
     return 496;
    }
if (index == 84) {
     return 581;
    }
if (index == 85) {
     return 460;
    }
if (index == 86) {
     return 460;
    }
if (index == 87) {
     return 460;
    }
if (index == 88) {
     return 460;
    }
if (index == 89) {
     return 460;
    }
if (index == 90) {
     return 554;
    }
if (index == 91) {
     return 420;
    }
if (index == 92) {
     return 420;
    }
if (index == 93) {
     return 583;
    }
if (index == 94) {
     return 420;
    }
if (index == 95) {
     return 420;
    }
if (index == 96) {
     return 519;
    }
if (index == 97) {
     return 420;
    }
if (index == 98) {
     return 420;
    }
if (index == 99) {
     return 420;
    }
if (index == 100) {
     return 539;
    }
if (index == 101) {
     return 420;
    }
if (index == 102) {
     return 420;
    }
if (index == 103) {
     return 420;
    }
if (index == 104) {
     return 522;
    }
if (index == 105) {
     return 420;
    }
if (index == 106) {
     return 420;
    }
if (index == 107) {
     return 420;
    }
if (index == 108) {
     return 420;
    }
if (index == 109) {
     return 420;
    }
if (index == 110) {
     return 420;
    }
if (index == 111) {
     return 420;
    }
if (index == 112) {
     return 555;
    }
if (index == 113) {
     return 420;
    }
if (index == 114) {
     return 420;
    }
if (index == 115) {
     return 420;
    }
if (index == 116) {
     return 420;
    }
if (index == 117) {
     return 616;
    }
if (index == 118) {
     return 420;
    }
if (index == 119) {
     return 524;
    }
if (index == 120) {
     return 1072;
    }
if (index == 121) {
     return 528;
    }
if (index == 122) {
     return 428;
    }
if (index == 123) {
     return 424;
    }
if (index == 124) {
     return 424;
    }
if (index == 125) {
     return 424;
    }
if (index == 126) {
     return 424;
    }
if (index == 127) {
     return 416;
    }
if (index == 128) {
     return 416;
    }
if (index == 129) {
     return 1064;
    }
if (index == 130) {
     return 412;
    }
if (index == 131) {
     return 420;
    }
if (index == 132) {
     return 420;
    }
if (index == 133) {
     return 420;
    }
if (index == 134) {
     return 539;
    }
if (index == 135) {
     return 408;
    }
if (index == 136) {
     return 1066;
    }
if (index == 137) {
     return 472;
    }
if (index == 138) {
     return 432;
    }
if (index == 139) {
     return 432;
    }
if (index == 140) {
     return 432;
    }
if (index == 141) {
     return 601;
    }
if (index == 142) {
     return 448;
    }
if (index == 143) {
     return 412;
    }
if (index == 144) {
     return 1003;
    }
if (index == 145) {
     return 440;
    }
if (index == 146) {
     return 530;
    }
if (index == 147) {
     return 432;
    }
if (index == 148) {
     return 432;
    }
if (index == 149) {
     return 597;
    }
if (index == 150) {
     return 428;
    }
if (index == 151) {
     return 565;
    }
if (index == 152) {
     return 452;
    }
if (index == 153) {
     return 566;
    }
if (index == 154) {
     return 432;
    }
if (index == 155) {
     return 432;
    }
if (index == 156) {
     return 432;
    }
if (index == 157) {
     return 432;
    }
if (index == 158) {
     return 724;
    }
if (index == 159) {
     return 540;
    }
if (index == 160) {
     return 424;
    }
if (index == 161) {
     return 584;
    }
if (index == 162) {
     return 424;
    }
if (index == 163) {
     return 424;
    }
if (index == 164) {
     return 567;
    }
if (index == 165) {
     return 436;
    }
if (index == 166) {
     return 416;
    }
if (index == 167) {
     return 404;
    }
if (index == 168) {
     return 1000;
    }
if (index == 169) {
     return 424;
    }
if (index == 170) {
     return 424;
    }
if (index == 171) {
     return 424;
    }
if (index == 172) {
     return 536;
    }
if (index == 173) {
     return 444;
    }
if (index == 174) {
     return 444;
    }
if (index == 175) {
     return 444;
    }
if (index == 176) {
     return 444;
    }
if (index == 177) {
     return 566;
    }
if (index == 178) {
     return 440;
    }
if (index == 179) {
     return 440;
    }
if (index == 180) {
     return 1051;
    }
if (index == 181) {
     return 540;
    }
if (index == 182) {
     return 669;
    }
if (index == 183) {
     return 424;
    }
if (index == 184) {
     return 424;
    }
if (index == 185) {
     return 420;
    }
if (index == 186) {
     return 420;
    }
if (index == 187) {
     return 420;
    }
if (index == 188) {
     return 567;
    }
if (index == 189) {
     return 536;
    }
if (index == 190) {
     return 436;
    }
if (index == 191) {
     return 436;
    }
if (index == 192) {
     return 436;
    }
if (index == 193) {
     return 436;
    }
if (index == 194) {
     return 782;
    }
if (index == 195) {
     return 1072;
    }
if (index == 196) {
     return 444;
    }
if (index == 197) {
     return 444;
    }
if (index == 198) {
     return 1031;
    }
if (index == 199) {
     return 500;
    }
if (index == 200) {
     return 460;
    }
if (index == 201) {
     return 456;
    }
if (index == 202) {
     return 570;
    }
if (index == 203) {
     return 444;
    }
if (index == 204) {
     return 444;
    }
if (index == 205) {
     return 634;
    }
if (index == 206) {
     return 408;
    }
if (index == 207) {
     return 416;
    }
if (index == 208) {
     return 416;
    }
if (index == 209) {
     return 609;
    }
if (index == 210) {
     return 448;
    }
if (index == 211) {
     return 448;
    }
if (index == 212) {
     return 404;
    }
if (index == 213) {
     return 424;
    }
if (index == 214) {
     return 1079;
    }
if (index == 215) {
     return 436;
    }
if (index == 216) {
     return 551;
    }
if (index == 217) {
     return 552;
    }
if (index == 218) {
     return 428;
    }
if (index == 219) {
     return 555;
    }
if (index == 220) {
     return 448;
    }
if (index == 221) {
     return 568;
    }
if (index == 222) {
     return 541;
    }
if (index == 223) {
     return 448;
    }
if (index == 224) {
     return 554;
    }
if (index == 225) {
     return 444;
    }
if (index == 226) {
     return 568;
    }
if (index == 227) {
     return 654;
    }
if (index == 228) {
     return 1075;
    }
if (index == 229) {
     return 468;
    }
if (index == 230) {
     return 551;
    }
if (index == 231) {
     return 549;
    }
if (index == 232) {
     return 444;
    }
if (index == 233) {
     return 440;
    }
if (index == 234) {
     return 440;
    }
if (index == 235) {
     return 424;
    }
if (index == 236) {
     return 565;
    }
if (index == 237) {
     return 416;
    }
if (index == 238) {
     return 416;
    }
if (index == 239) {
     return 416;
    }
if (index == 240) {
     return 416;
    }
if (index == 241) {
     return 412;
    }
if (index == 242) {
     return 412;
    }
if (index == 243) {
     return 412;
    }
if (index == 244) {
     return 412;
    }
if (index == 245) {
     return 567;
    }
if (index == 246) {
     return 416;
    }
if (index == 247) {
     return 432;
    }
if (index == 248) {
     return 470;
    }
if (index == 249) {
     return 467;
    }
if (index == 250) {
     return 536;
    }
if (index == 251) {
     return 564;
    }
if (index > 251) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1053;
    }
if (index == 1) {
     return 964;
    }
if (index == 2) {
     return 1072;
    }
if (index == 3) {
     return 1024;
    }
if (index == 4) {
     return 997;
    }
if (index == 5) {
     return 744;
    }
if (index == 6) {
     return 888;
    }
if (index == 7) {
     return 484;
    }
if (index == 8) {
     return 1114;
    }
if (index == 9) {
     return 1000;
    }
if (index == 10) {
     return 1000;
    }
if (index == 11) {
     return 1000;
    }
if (index == 12) {
     return 1000;
    }
if (index == 13) {
     return 1000;
    }
if (index == 14) {
     return 1000;
    }
if (index == 15) {
     return 1000;
    }
if (index == 16) {
     return 1000;
    }
if (index == 17) {
     return 1077;
    }
if (index == 18) {
     return 1000;
    }
if (index == 19) {
     return 1000;
    }
if (index == 20) {
     return 1000;
    }
if (index == 21) {
     return 852;
    }
if (index == 22) {
     return 1088;
    }
if (index == 23) {
     return 936;
    }
if (index == 24) {
     return 936;
    }
if (index == 25) {
     return 936;
    }
if (index == 26) {
     return 1094;
    }
if (index == 27) {
     return 936;
    }
if (index == 28) {
     return 936;
    }
if (index == 29) {
     return 1108;
    }
if (index == 30) {
     return 876;
    }
if (index == 31) {
     return 876;
    }
if (index == 32) {
     return 1095;
    }
if (index == 33) {
     return 876;
    }
if (index == 34) {
     return 1094;
    }
if (index == 35) {
     return 1088;
    }
if (index == 36) {
     return 848;
    }
if (index == 37) {
     return 848;
    }
if (index == 38) {
     return 1088;
    }
if (index == 39) {
     return 1036;
    }
if (index == 40) {
     return 848;
    }
if (index == 41) {
     return 848;
    }
if (index == 42) {
     return 599;
    }
if (index == 43) {
     return 916;
    }
if (index == 44) {
     return 916;
    }
if (index == 45) {
     return 888;
    }
if (index == 46) {
     return 888;
    }
if (index == 47) {
     return 888;
    }
if (index == 48) {
     return 888;
    }
if (index == 49) {
     return 864;
    }
if (index == 50) {
     return 864;
    }
if (index == 51) {
     return 864;
    }
if (index == 52) {
     return 1000;
    }
if (index == 53) {
     return 1000;
    }
if (index == 54) {
     return 1000;
    }
if (index == 55) {
     return 852;
    }
if (index == 56) {
     return 1081;
    }
if (index == 57) {
     return 852;
    }
if (index == 58) {
     return 824;
    }
if (index == 59) {
     return 1075;
    }
if (index == 60) {
     return 824;
    }
if (index == 61) {
     return 824;
    }
if (index == 62) {
     return 824;
    }
if (index == 63) {
     return 824;
    }
if (index == 64) {
     return 824;
    }
if (index == 65) {
     return 824;
    }
if (index == 66) {
     return 1081;
    }
if (index == 67) {
     return 812;
    }
if (index == 68) {
     return 812;
    }
if (index == 69) {
     return 812;
    }
if (index == 70) {
     return 812;
    }
if (index == 71) {
     return 1047;
    }
if (index == 72) {
     return 860;
    }
if (index == 73) {
     return 820;
    }
if (index == 74) {
     return 820;
    }
if (index == 75) {
     return 820;
    }
if (index == 76) {
     return 820;
    }
if (index == 77) {
     return 1033;
    }
if (index == 78) {
     return 820;
    }
if (index == 79) {
     return 820;
    }
if (index == 80) {
     return 820;
    }
if (index == 81) {
     return 820;
    }
if (index == 82) {
     return 1077;
    }
if (index == 83) {
     return 816;
    }
if (index == 84) {
     return 1081;
    }
if (index == 85) {
     return 816;
    }
if (index == 86) {
     return 816;
    }
if (index == 87) {
     return 816;
    }
if (index == 88) {
     return 816;
    }
if (index == 89) {
     return 816;
    }
if (index == 90) {
     return 1073;
    }
if (index == 91) {
     return 816;
    }
if (index == 92) {
     return 816;
    }
if (index == 93) {
     return 1066;
    }
if (index == 94) {
     return 816;
    }
if (index == 95) {
     return 816;
    }
if (index == 96) {
     return 1053;
    }
if (index == 97) {
     return 816;
    }
if (index == 98) {
     return 816;
    }
if (index == 99) {
     return 816;
    }
if (index == 100) {
     return 1075;
    }
if (index == 101) {
     return 816;
    }
if (index == 102) {
     return 816;
    }
if (index == 103) {
     return 816;
    }
if (index == 104) {
     return 1028;
    }
if (index == 105) {
     return 816;
    }
if (index == 106) {
     return 816;
    }
if (index == 107) {
     return 816;
    }
if (index == 108) {
     return 816;
    }
if (index == 109) {
     return 816;
    }
if (index == 110) {
     return 816;
    }
if (index == 111) {
     return 816;
    }
if (index == 112) {
     return 1070;
    }
if (index == 113) {
     return 848;
    }
if (index == 114) {
     return 848;
    }
if (index == 115) {
     return 848;
    }
if (index == 116) {
     return 848;
    }
if (index == 117) {
     return 1068;
    }
if (index == 118) {
     return 840;
    }
if (index == 119) {
     return 1046;
    }
if (index == 120) {
     return 594;
    }
if (index == 121) {
     return 924;
    }
if (index == 122) {
     return 908;
    }
if (index == 123) {
     return 832;
    }
if (index == 124) {
     return 832;
    }
if (index == 125) {
     return 832;
    }
if (index == 126) {
     return 832;
    }
if (index == 127) {
     return 824;
    }
if (index == 128) {
     return 824;
    }
if (index == 129) {
     return 607;
    }
if (index == 130) {
     return 736;
    }
if (index == 131) {
     return 816;
    }
if (index == 132) {
     return 816;
    }
if (index == 133) {
     return 816;
    }
if (index == 134) {
     return 1066;
    }
if (index == 135) {
     return 816;
    }
if (index == 136) {
     return 522;
    }
if (index == 137) {
     return 844;
    }
if (index == 138) {
     return 824;
    }
if (index == 139) {
     return 824;
    }
if (index == 140) {
     return 824;
    }
if (index == 141) {
     return 1070;
    }
if (index == 142) {
     return 828;
    }
if (index == 143) {
     return 812;
    }
if (index == 144) {
     return 542;
    }
if (index == 145) {
     return 788;
    }
if (index == 146) {
     return 1025;
    }
if (index == 147) {
     return 836;
    }
if (index == 148) {
     return 836;
    }
if (index == 149) {
     return 1048;
    }
if (index == 150) {
     return 844;
    }
if (index == 151) {
     return 1042;
    }
if (index == 152) {
     return 848;
    }
if (index == 153) {
     return 1038;
    }
if (index == 154) {
     return 808;
    }
if (index == 155) {
     return 808;
    }
if (index == 156) {
     return 808;
    }
if (index == 157) {
     return 808;
    }
if (index == 158) {
     return 1166;
    }
if (index == 159) {
     return 916;
    }
if (index == 160) {
     return 832;
    }
if (index == 161) {
     return 1073;
    }
if (index == 162) {
     return 832;
    }
if (index == 163) {
     return 832;
    }
if (index == 164) {
     return 1081;
    }
if (index == 165) {
     return 832;
    }
if (index == 166) {
     return 828;
    }
if (index == 167) {
     return 828;
    }
if (index == 168) {
     return 1489;
    }
if (index == 169) {
     return 832;
    }
if (index == 170) {
     return 768;
    }
if (index == 171) {
     return 808;
    }
if (index == 172) {
     return 1072;
    }
if (index == 173) {
     return 832;
    }
if (index == 174) {
     return 832;
    }
if (index == 175) {
     return 832;
    }
if (index == 176) {
     return 832;
    }
if (index == 177) {
     return 1079;
    }
if (index == 178) {
     return 832;
    }
if (index == 179) {
     return 832;
    }
if (index == 180) {
     return 583;
    }
if (index == 181) {
     return 916;
    }
if (index == 182) {
     return 1110;
    }
if (index == 183) {
     return 836;
    }
if (index == 184) {
     return 836;
    }
if (index == 185) {
     return 836;
    }
if (index == 186) {
     return 836;
    }
if (index == 187) {
     return 836;
    }
if (index == 188) {
     return 1073;
    }
if (index == 189) {
     return 792;
    }
if (index == 190) {
     return 828;
    }
if (index == 191) {
     return 828;
    }
if (index == 192) {
     return 828;
    }
if (index == 193) {
     return 828;
    }
if (index == 194) {
     return 489;
    }
if (index == 195) {
     return 572;
    }
if (index == 196) {
     return 868;
    }
if (index == 197) {
     return 868;
    }
if (index == 198) {
     return 581;
    }
if (index == 199) {
     return 800;
    }
if (index == 200) {
     return 848;
    }
if (index == 201) {
     return 848;
    }
if (index == 202) {
     return 1066;
    }
if (index == 203) {
     return 844;
    }
if (index == 204) {
     return 844;
    }
if (index == 205) {
     return 1090;
    }
if (index == 206) {
     return 852;
    }
if (index == 207) {
     return 836;
    }
if (index == 208) {
     return 836;
    }
if (index == 209) {
     return 1083;
    }
if (index == 210) {
     return 844;
    }
if (index == 211) {
     return 844;
    }
if (index == 212) {
     return 836;
    }
if (index == 213) {
     return 836;
    }
if (index == 214) {
     return 578;
    }
if (index == 215) {
     return 816;
    }
if (index == 216) {
     return 1059;
    }
if (index == 217) {
     return 1075;
    }
if (index == 218) {
     return 848;
    }
if (index == 219) {
     return 1024;
    }
if (index == 220) {
     return 840;
    }
if (index == 221) {
     return 1072;
    }
if (index == 222) {
     return 1086;
    }
if (index == 223) {
     return 840;
    }
if (index == 224) {
     return 1083;
    }
if (index == 225) {
     return 872;
    }
if (index == 226) {
     return 1083;
    }
if (index == 227) {
     return 1099;
    }
if (index == 228) {
     return 565;
    }
if (index == 229) {
     return 776;
    }
if (index == 230) {
     return 1068;
    }
if (index == 231) {
     return 1062;
    }
if (index == 232) {
     return 876;
    }
if (index == 233) {
     return 876;
    }
if (index == 234) {
     return 876;
    }
if (index == 235) {
     return 868;
    }
if (index == 236) {
     return 1075;
    }
if (index == 237) {
     return 832;
    }
if (index == 238) {
     return 832;
    }
if (index == 239) {
     return 832;
    }
if (index == 240) {
     return 832;
    }
if (index == 241) {
     return 832;
    }
if (index == 242) {
     return 832;
    }
if (index == 243) {
     return 832;
    }
if (index == 244) {
     return 836;
    }
if (index == 245) {
     return 1106;
    }
if (index == 246) {
     return 812;
    }
if (index == 247) {
     return 820;
    }
if (index == 248) {
     return 824;
    }
if (index == 249) {
     return 817;
    }
if (index == 250) {
     return 960;
    }
if (index == 251) {
     return 958;
    }
if (index > 251) {
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
    var url = '/fedora/get/seapage:057_' + imgStr + '/digitalImage';
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
br.numLeafs = 252;

// Book title and the URL used for the book title link
br.bookTitle= "The French in Tonkin and South China";
br.bookAuthor= "Cunningham, Alfred";
br.bookPub= "Hongkong : London: Printed at the office of the Hongkong daily press ; Low, Marston, 1902";
br.bookKeyword= "French--China<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;France--Colonies--Vietnam, Northern<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tonkin--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;China--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guangdong Sheng (China)--Description and travel";
br.bookUrl  = '/catalog/sea:057';

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
