//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 577;
    }
if (index == 1) {
     return 557;
    }
if (index == 2) {
     return 575;
    }
if (index == 3) {
     return 555;
    }
if (index == 4) {
     return 567;
    }
if (index == 5) {
     return 586;
    }
if (index == 6) {
     return 536;
    }
if (index == 7) {
     return 575;
    }
if (index == 8) {
     return 543;
    }
if (index == 9) {
     return 542;
    }
if (index == 10) {
     return 576;
    }
if (index == 11) {
     return 551;
    }
if (index == 12) {
     return 596;
    }
if (index == 13) {
     return 1462;
    }
if (index == 14) {
     return 553;
    }
if (index == 15) {
     return 569;
    }
if (index == 16) {
     return 575;
    }
if (index == 17) {
     return 577;
    }
if (index == 18) {
     return 581;
    }
if (index == 19) {
     return 582;
    }
if (index == 20) {
     return 569;
    }
if (index == 21) {
     return 573;
    }
if (index == 22) {
     return 575;
    }
if (index == 23) {
     return 580;
    }
if (index == 24) {
     return 567;
    }
if (index == 25) {
     return 589;
    }
if (index == 26) {
     return 589;
    }
if (index == 27) {
     return 567;
    }
if (index == 28) {
     return 571;
    }
if (index == 29) {
     return 581;
    }
if (index == 30) {
     return 576;
    }
if (index == 31) {
     return 585;
    }
if (index == 32) {
     return 593;
    }
if (index == 33) {
     return 580;
    }
if (index == 34) {
     return 584;
    }
if (index == 35) {
     return 586;
    }
if (index == 36) {
     return 585;
    }
if (index == 37) {
     return 563;
    }
if (index == 38) {
     return 569;
    }
if (index == 39) {
     return 573;
    }
if (index == 40) {
     return 573;
    }
if (index == 41) {
     return 568;
    }
if (index == 42) {
     return 570;
    }
if (index == 43) {
     return 570;
    }
if (index == 44) {
     return 579;
    }
if (index == 45) {
     return 580;
    }
if (index == 46) {
     return 569;
    }
if (index == 47) {
     return 569;
    }
if (index == 48) {
     return 575;
    }
if (index == 49) {
     return 560;
    }
if (index == 50) {
     return 572;
    }
if (index == 51) {
     return 572;
    }
if (index == 52) {
     return 571;
    }
if (index == 53) {
     return 592;
    }
if (index == 54) {
     return 585;
    }
if (index == 55) {
     return 573;
    }
if (index == 56) {
     return 570;
    }
if (index == 57) {
     return 555;
    }
if (index == 58) {
     return 588;
    }
if (index == 59) {
     return 567;
    }
if (index == 60) {
     return 571;
    }
if (index == 61) {
     return 572;
    }
if (index == 62) {
     return 569;
    }
if (index == 63) {
     return 557;
    }
if (index == 64) {
     return 574;
    }
if (index == 65) {
     return 590;
    }
if (index == 66) {
     return 584;
    }
if (index == 67) {
     return 597;
    }
if (index == 68) {
     return 597;
    }
if (index == 69) {
     return 599;
    }
if (index == 70) {
     return 587;
    }
if (index == 71) {
     return 585;
    }
if (index == 72) {
     return 588;
    }
if (index == 73) {
     return 590;
    }
if (index == 74) {
     return 587;
    }
if (index == 75) {
     return 585;
    }
if (index == 76) {
     return 576;
    }
if (index == 77) {
     return 574;
    }
if (index == 78) {
     return 576;
    }
if (index == 79) {
     return 572;
    }
if (index == 80) {
     return 559;
    }
if (index == 81) {
     return 600;
    }
if (index == 82) {
     return 595;
    }
if (index == 83) {
     return 581;
    }
if (index == 84) {
     return 587;
    }
if (index == 85) {
     return 1185;
    }
if (index == 86) {
     return 590;
    }
if (index == 87) {
     return 553;
    }
if (index == 88) {
     return 571;
    }
if (index == 89) {
     return 559;
    }
if (index == 90) {
     return 578;
    }
if (index == 91) {
     return 557;
    }
if (index == 92) {
     return 588;
    }
if (index == 93) {
     return 548;
    }
if (index == 94) {
     return 597;
    }
if (index == 95) {
     return 551;
    }
if (index == 96) {
     return 566;
    }
if (index == 97) {
     return 528;
    }
if (index == 98) {
     return 559;
    }
if (index == 99) {
     return 571;
    }
if (index == 100) {
     return 587;
    }
if (index == 101) {
     return 544;
    }
if (index == 102) {
     return 567;
    }
if (index == 103) {
     return 535;
    }
if (index == 104) {
     return 551;
    }
if (index == 105) {
     return 548;
    }
if (index == 106) {
     return 567;
    }
if (index == 107) {
     return 570;
    }
if (index == 108) {
     return 559;
    }
if (index == 109) {
     return 571;
    }
if (index == 110) {
     return 571;
    }
if (index == 111) {
     return 564;
    }
if (index == 112) {
     return 574;
    }
if (index == 113) {
     return 555;
    }
if (index == 114) {
     return 570;
    }
if (index == 115) {
     return 544;
    }
if (index == 116) {
     return 562;
    }
if (index == 117) {
     return 569;
    }
if (index == 118) {
     return 581;
    }
if (index == 119) {
     return 565;
    }
if (index == 120) {
     return 588;
    }
if (index == 121) {
     return 548;
    }
if (index == 122) {
     return 556;
    }
if (index == 123) {
     return 558;
    }
if (index == 124) {
     return 571;
    }
if (index == 125) {
     return 546;
    }
if (index == 126) {
     return 571;
    }
if (index == 127) {
     return 549;
    }
if (index == 128) {
     return 575;
    }
if (index == 129) {
     return 532;
    }
if (index == 130) {
     return 560;
    }
if (index == 131) {
     return 545;
    }
if (index == 132) {
     return 572;
    }
if (index == 133) {
     return 574;
    }
if (index == 134) {
     return 560;
    }
if (index == 135) {
     return 883;
    }
if (index == 136) {
     return 569;
    }
if (index == 137) {
     return 543;
    }
if (index == 138) {
     return 564;
    }
if (index == 139) {
     return 560;
    }
if (index == 140) {
     return 560;
    }
if (index == 141) {
     return 571;
    }
if (index == 142) {
     return 563;
    }
if (index == 143) {
     return 569;
    }
if (index == 144) {
     return 560;
    }
if (index == 145) {
     return 552;
    }
if (index == 146) {
     return 560;
    }
if (index == 147) {
     return 533;
    }
if (index == 148) {
     return 575;
    }
if (index == 149) {
     return 554;
    }
if (index == 150) {
     return 1040;
    }
if (index == 151) {
     return 587;
    }
if (index == 152) {
     return 528;
    }
if (index == 153) {
     return 549;
    }
if (index == 154) {
     return 516;
    }
if (index == 155) {
     return 564;
    }
if (index == 156) {
     return 515;
    }
if (index == 157) {
     return 897;
    }
if (index == 158) {
     return 569;
    }
if (index == 159) {
     return 544;
    }
if (index == 160) {
     return 551;
    }
if (index == 161) {
     return 548;
    }
if (index == 162) {
     return 577;
    }
if (index == 163) {
     return 521;
    }
if (index == 164) {
     return 565;
    }
if (index == 165) {
     return 512;
    }
if (index == 166) {
     return 562;
    }
if (index == 167) {
     return 527;
    }
if (index == 168) {
     return 548;
    }
if (index == 169) {
     return 516;
    }
if (index == 170) {
     return 552;
    }
if (index == 171) {
     return 519;
    }
if (index == 172) {
     return 559;
    }
if (index == 173) {
     return 516;
    }
if (index == 174) {
     return 543;
    }
if (index == 175) {
     return 574;
    }
if (index == 176) {
     return 562;
    }
if (index == 177) {
     return 556;
    }
if (index == 178) {
     return 551;
    }
if (index == 179) {
     return 554;
    }
if (index == 180) {
     return 564;
    }
if (index == 181) {
     return 519;
    }
if (index == 182) {
     return 558;
    }
if (index == 183) {
     return 559;
    }
if (index == 184) {
     return 601;
    }
if (index == 185) {
     return 1101;
    }
if (index == 186) {
     return 549;
    }
if (index == 187) {
     return 565;
    }
if (index == 188) {
     return 596;
    }
if (index == 189) {
     return 577;
    }
if (index == 190) {
     return 564;
    }
if (index == 191) {
     return 573;
    }
if (index == 192) {
     return 560;
    }
if (index == 193) {
     return 562;
    }
if (index == 194) {
     return 570;
    }
if (index == 195) {
     return 547;
    }
if (index == 196) {
     return 560;
    }
if (index == 197) {
     return 541;
    }
if (index == 198) {
     return 547;
    }
if (index == 199) {
     return 524;
    }
if (index == 200) {
     return 559;
    }
if (index == 201) {
     return 546;
    }
if (index == 202) {
     return 577;
    }
if (index == 203) {
     return 544;
    }
if (index == 204) {
     return 567;
    }
if (index == 205) {
     return 552;
    }
if (index == 206) {
     return 546;
    }
if (index == 207) {
     return 546;
    }
if (index == 208) {
     return 544;
    }
if (index == 209) {
     return 571;
    }
if (index == 210) {
     return 552;
    }
if (index == 211) {
     return 557;
    }
if (index == 212) {
     return 551;
    }
if (index == 213) {
     return 555;
    }
if (index == 214) {
     return 571;
    }
if (index == 215) {
     return 541;
    }
if (index == 216) {
     return 561;
    }
if (index == 217) {
     return 545;
    }
if (index == 218) {
     return 555;
    }
if (index == 219) {
     return 535;
    }
if (index == 220) {
     return 557;
    }
if (index == 221) {
     return 548;
    }
if (index == 222) {
     return 552;
    }
if (index == 223) {
     return 540;
    }
if (index == 224) {
     return 574;
    }
if (index == 225) {
     return 540;
    }
if (index == 226) {
     return 548;
    }
if (index == 227) {
     return 540;
    }
if (index == 228) {
     return 535;
    }
if (index == 229) {
     return 573;
    }
if (index == 230) {
     return 574;
    }
if (index == 231) {
     return 572;
    }
if (index == 232) {
     return 576;
    }
if (index == 233) {
     return 570;
    }
if (index == 234) {
     return 565;
    }
if (index == 235) {
     return 577;
    }
if (index == 236) {
     return 567;
    }
if (index == 237) {
     return 587;
    }
if (index == 238) {
     return 578;
    }
if (index == 239) {
     return 566;
    }
if (index == 240) {
     return 569;
    }
if (index == 241) {
     return 573;
    }
if (index == 242) {
     return 588;
    }
if (index == 243) {
     return 574;
    }
if (index == 244) {
     return 579;
    }
if (index == 245) {
     return 580;
    }
if (index == 246) {
     return 550;
    }
if (index == 247) {
     return 575;
    }
if (index == 248) {
     return 560;
    }
if (index == 249) {
     return 583;
    }
if (index == 250) {
     return 551;
    }
if (index == 251) {
     return 576;
    }
if (index == 252) {
     return 564;
    }
if (index == 253) {
     return 578;
    }
if (index == 254) {
     return 570;
    }
if (index == 255) {
     return 571;
    }
if (index == 256) {
     return 567;
    }
if (index == 257) {
     return 566;
    }
if (index == 258) {
     return 572;
    }
if (index == 259) {
     return 556;
    }
if (index == 260) {
     return 568;
    }
if (index == 261) {
     return 547;
    }
if (index == 262) {
     return 571;
    }
if (index == 263) {
     return 571;
    }
if (index == 264) {
     return 622;
    }
if (index == 265) {
     return 555;
    }
if (index == 266) {
     return 571;
    }
if (index == 267) {
     return 566;
    }
if (index == 268) {
     return 584;
    }
if (index == 269) {
     return 572;
    }
if (index == 270) {
     return 579;
    }
if (index == 271) {
     return 580;
    }
if (index == 272) {
     return 579;
    }
if (index == 273) {
     return 579;
    }
if (index == 274) {
     return 570;
    }
if (index == 275) {
     return 596;
    }
if (index == 276) {
     return 573;
    }
if (index == 277) {
     return 584;
    }
if (index == 278) {
     return 567;
    }
if (index == 279) {
     return 558;
    }
if (index == 280) {
     return 561;
    }
if (index == 281) {
     return 589;
    }
if (index == 282) {
     return 563;
    }
if (index == 283) {
     return 561;
    }
if (index == 284) {
     return 561;
    }
if (index == 285) {
     return 569;
    }
if (index == 286) {
     return 621;
    }
if (index == 287) {
     return 640;
    }
if (index > 287) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 914;
    }
if (index == 1) {
     return 917;
    }
if (index == 2) {
     return 945;
    }
if (index == 3) {
     return 908;
    }
if (index == 4) {
     return 935;
    }
if (index == 5) {
     return 908;
    }
if (index == 6) {
     return 896;
    }
if (index == 7) {
     return 911;
    }
if (index == 8) {
     return 897;
    }
if (index == 9) {
     return 870;
    }
if (index == 10) {
     return 884;
    }
if (index == 11) {
     return 880;
    }
if (index == 12) {
     return 901;
    }
if (index == 13) {
     return 1667;
    }
if (index == 14) {
     return 884;
    }
if (index == 15) {
     return 903;
    }
if (index == 16) {
     return 907;
    }
if (index == 17) {
     return 901;
    }
if (index == 18) {
     return 901;
    }
if (index == 19) {
     return 903;
    }
if (index == 20) {
     return 901;
    }
if (index == 21) {
     return 899;
    }
if (index == 22) {
     return 901;
    }
if (index == 23) {
     return 904;
    }
if (index == 24) {
     return 900;
    }
if (index == 25) {
     return 907;
    }
if (index == 26) {
     return 900;
    }
if (index == 27) {
     return 897;
    }
if (index == 28) {
     return 894;
    }
if (index == 29) {
     return 886;
    }
if (index == 30) {
     return 888;
    }
if (index == 31) {
     return 885;
    }
if (index == 32) {
     return 885;
    }
if (index == 33) {
     return 888;
    }
if (index == 34) {
     return 890;
    }
if (index == 35) {
     return 889;
    }
if (index == 36) {
     return 890;
    }
if (index == 37) {
     return 898;
    }
if (index == 38) {
     return 880;
    }
if (index == 39) {
     return 894;
    }
if (index == 40) {
     return 891;
    }
if (index == 41) {
     return 887;
    }
if (index == 42) {
     return 885;
    }
if (index == 43) {
     return 901;
    }
if (index == 44) {
     return 901;
    }
if (index == 45) {
     return 908;
    }
if (index == 46) {
     return 898;
    }
if (index == 47) {
     return 905;
    }
if (index == 48) {
     return 904;
    }
if (index == 49) {
     return 891;
    }
if (index == 50) {
     return 902;
    }
if (index == 51) {
     return 886;
    }
if (index == 52) {
     return 885;
    }
if (index == 53) {
     return 876;
    }
if (index == 54) {
     return 881;
    }
if (index == 55) {
     return 891;
    }
if (index == 56) {
     return 894;
    }
if (index == 57) {
     return 887;
    }
if (index == 58) {
     return 890;
    }
if (index == 59) {
     return 890;
    }
if (index == 60) {
     return 893;
    }
if (index == 61) {
     return 893;
    }
if (index == 62) {
     return 884;
    }
if (index == 63) {
     return 882;
    }
if (index == 64) {
     return 897;
    }
if (index == 65) {
     return 907;
    }
if (index == 66) {
     return 909;
    }
if (index == 67) {
     return 905;
    }
if (index == 68) {
     return 908;
    }
if (index == 69) {
     return 893;
    }
if (index == 70) {
     return 893;
    }
if (index == 71) {
     return 900;
    }
if (index == 72) {
     return 896;
    }
if (index == 73) {
     return 889;
    }
if (index == 74) {
     return 910;
    }
if (index == 75) {
     return 895;
    }
if (index == 76) {
     return 900;
    }
if (index == 77) {
     return 890;
    }
if (index == 78) {
     return 903;
    }
if (index == 79) {
     return 883;
    }
if (index == 80) {
     return 881;
    }
if (index == 81) {
     return 892;
    }
if (index == 82) {
     return 888;
    }
if (index == 83) {
     return 888;
    }
if (index == 84) {
     return 883;
    }
if (index == 85) {
     return 1594;
    }
if (index == 86) {
     return 903;
    }
if (index == 87) {
     return 902;
    }
if (index == 88) {
     return 906;
    }
if (index == 89) {
     return 890;
    }
if (index == 90) {
     return 905;
    }
if (index == 91) {
     return 900;
    }
if (index == 92) {
     return 908;
    }
if (index == 93) {
     return 899;
    }
if (index == 94) {
     return 908;
    }
if (index == 95) {
     return 898;
    }
if (index == 96) {
     return 902;
    }
if (index == 97) {
     return 891;
    }
if (index == 98) {
     return 910;
    }
if (index == 99) {
     return 904;
    }
if (index == 100) {
     return 901;
    }
if (index == 101) {
     return 896;
    }
if (index == 102) {
     return 908;
    }
if (index == 103) {
     return 892;
    }
if (index == 104) {
     return 877;
    }
if (index == 105) {
     return 885;
    }
if (index == 106) {
     return 903;
    }
if (index == 107) {
     return 897;
    }
if (index == 108) {
     return 889;
    }
if (index == 109) {
     return 898;
    }
if (index == 110) {
     return 896;
    }
if (index == 111) {
     return 891;
    }
if (index == 112) {
     return 893;
    }
if (index == 113) {
     return 885;
    }
if (index == 114) {
     return 889;
    }
if (index == 115) {
     return 883;
    }
if (index == 116) {
     return 883;
    }
if (index == 117) {
     return 867;
    }
if (index == 118) {
     return 885;
    }
if (index == 119) {
     return 885;
    }
if (index == 120) {
     return 898;
    }
if (index == 121) {
     return 891;
    }
if (index == 122) {
     return 907;
    }
if (index == 123) {
     return 890;
    }
if (index == 124) {
     return 894;
    }
if (index == 125) {
     return 895;
    }
if (index == 126) {
     return 886;
    }
if (index == 127) {
     return 895;
    }
if (index == 128) {
     return 883;
    }
if (index == 129) {
     return 890;
    }
if (index == 130) {
     return 888;
    }
if (index == 131) {
     return 880;
    }
if (index == 132) {
     return 884;
    }
if (index == 133) {
     return 887;
    }
if (index == 134) {
     return 884;
    }
if (index == 135) {
     return 568;
    }
if (index == 136) {
     return 881;
    }
if (index == 137) {
     return 886;
    }
if (index == 138) {
     return 895;
    }
if (index == 139) {
     return 875;
    }
if (index == 140) {
     return 891;
    }
if (index == 141) {
     return 897;
    }
if (index == 142) {
     return 902;
    }
if (index == 143) {
     return 898;
    }
if (index == 144) {
     return 893;
    }
if (index == 145) {
     return 890;
    }
if (index == 146) {
     return 890;
    }
if (index == 147) {
     return 895;
    }
if (index == 148) {
     return 900;
    }
if (index == 149) {
     return 903;
    }
if (index == 150) {
     return 1476;
    }
if (index == 151) {
     return 901;
    }
if (index == 152) {
     return 895;
    }
if (index == 153) {
     return 888;
    }
if (index == 154) {
     return 875;
    }
if (index == 155) {
     return 892;
    }
if (index == 156) {
     return 890;
    }
if (index == 157) {
     return 554;
    }
if (index == 158) {
     return 892;
    }
if (index == 159) {
     return 881;
    }
if (index == 160) {
     return 883;
    }
if (index == 161) {
     return 898;
    }
if (index == 162) {
     return 891;
    }
if (index == 163) {
     return 870;
    }
if (index == 164) {
     return 892;
    }
if (index == 165) {
     return 891;
    }
if (index == 166) {
     return 891;
    }
if (index == 167) {
     return 883;
    }
if (index == 168) {
     return 884;
    }
if (index == 169) {
     return 892;
    }
if (index == 170) {
     return 900;
    }
if (index == 171) {
     return 898;
    }
if (index == 172) {
     return 910;
    }
if (index == 173) {
     return 904;
    }
if (index == 174) {
     return 896;
    }
if (index == 175) {
     return 873;
    }
if (index == 176) {
     return 891;
    }
if (index == 177) {
     return 896;
    }
if (index == 178) {
     return 887;
    }
if (index == 179) {
     return 887;
    }
if (index == 180) {
     return 874;
    }
if (index == 181) {
     return 861;
    }
if (index == 182) {
     return 847;
    }
if (index == 183) {
     return 849;
    }
if (index == 184) {
     return 875;
    }
if (index == 185) {
     return 1002;
    }
if (index == 186) {
     return 890;
    }
if (index == 187) {
     return 894;
    }
if (index == 188) {
     return 902;
    }
if (index == 189) {
     return 897;
    }
if (index == 190) {
     return 890;
    }
if (index == 191) {
     return 892;
    }
if (index == 192) {
     return 889;
    }
if (index == 193) {
     return 894;
    }
if (index == 194) {
     return 902;
    }
if (index == 195) {
     return 878;
    }
if (index == 196) {
     return 897;
    }
if (index == 197) {
     return 876;
    }
if (index == 198) {
     return 893;
    }
if (index == 199) {
     return 883;
    }
if (index == 200) {
     return 881;
    }
if (index == 201) {
     return 887;
    }
if (index == 202) {
     return 884;
    }
if (index == 203) {
     return 877;
    }
if (index == 204) {
     return 885;
    }
if (index == 205) {
     return 902;
    }
if (index == 206) {
     return 894;
    }
if (index == 207) {
     return 878;
    }
if (index == 208) {
     return 885;
    }
if (index == 209) {
     return 892;
    }
if (index == 210) {
     return 888;
    }
if (index == 211) {
     return 895;
    }
if (index == 212) {
     return 893;
    }
if (index == 213) {
     return 900;
    }
if (index == 214) {
     return 907;
    }
if (index == 215) {
     return 886;
    }
if (index == 216) {
     return 902;
    }
if (index == 217) {
     return 880;
    }
if (index == 218) {
     return 889;
    }
if (index == 219) {
     return 870;
    }
if (index == 220) {
     return 879;
    }
if (index == 221) {
     return 889;
    }
if (index == 222) {
     return 896;
    }
if (index == 223) {
     return 864;
    }
if (index == 224) {
     return 887;
    }
if (index == 225) {
     return 850;
    }
if (index == 226) {
     return 878;
    }
if (index == 227) {
     return 844;
    }
if (index == 228) {
     return 865;
    }
if (index == 229) {
     return 900;
    }
if (index == 230) {
     return 898;
    }
if (index == 231) {
     return 892;
    }
if (index == 232) {
     return 890;
    }
if (index == 233) {
     return 891;
    }
if (index == 234) {
     return 901;
    }
if (index == 235) {
     return 904;
    }
if (index == 236) {
     return 885;
    }
if (index == 237) {
     return 896;
    }
if (index == 238) {
     return 881;
    }
if (index == 239) {
     return 879;
    }
if (index == 240) {
     return 879;
    }
if (index == 241) {
     return 891;
    }
if (index == 242) {
     return 868;
    }
if (index == 243) {
     return 869;
    }
if (index == 244) {
     return 858;
    }
if (index == 245) {
     return 890;
    }
if (index == 246) {
     return 892;
    }
if (index == 247) {
     return 882;
    }
if (index == 248) {
     return 886;
    }
if (index == 249) {
     return 884;
    }
if (index == 250) {
     return 881;
    }
if (index == 251) {
     return 884;
    }
if (index == 252) {
     return 896;
    }
if (index == 253) {
     return 887;
    }
if (index == 254) {
     return 885;
    }
if (index == 255) {
     return 883;
    }
if (index == 256) {
     return 878;
    }
if (index == 257) {
     return 864;
    }
if (index == 258) {
     return 878;
    }
if (index == 259) {
     return 869;
    }
if (index == 260) {
     return 867;
    }
if (index == 261) {
     return 883;
    }
if (index == 262) {
     return 894;
    }
if (index == 263) {
     return 886;
    }
if (index == 264) {
     return 892;
    }
if (index == 265) {
     return 874;
    }
if (index == 266) {
     return 889;
    }
if (index == 267) {
     return 893;
    }
if (index == 268) {
     return 914;
    }
if (index == 269) {
     return 883;
    }
if (index == 270) {
     return 896;
    }
if (index == 271) {
     return 884;
    }
if (index == 272) {
     return 893;
    }
if (index == 273) {
     return 884;
    }
if (index == 274) {
     return 883;
    }
if (index == 275) {
     return 880;
    }
if (index == 276) {
     return 883;
    }
if (index == 277) {
     return 870;
    }
if (index == 278) {
     return 880;
    }
if (index == 279) {
     return 871;
    }
if (index == 280) {
     return 880;
    }
if (index == 281) {
     return 876;
    }
if (index == 282) {
     return 888;
    }
if (index == 283) {
     return 859;
    }
if (index == 284) {
     return 880;
    }
if (index == 285) {
     return 877;
    }
if (index == 286) {
     return 919;
    }
if (index == 287) {
     return 901;
    }
if (index > 287) {
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
    var url = '/fedora/get/seapage:295_' + imgStr + '/digitalImage';
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
br.numLeafs = 288;

// Book title and the URL used for the book title link
br.bookTitle= "India, Burma, Ceylon and South Africa : information for travellers and residents";
br.bookAuthor= "Thomas Cook Ltd";
br.bookPub= "London: T. Cook, 1909";
br.bookKeyword= "India--Guidebooks<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Guidebooks<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sri Lanka--Guidebooks<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;South Africa--Guidebooks";
br.bookUrl  = '/catalog/sea:295';

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
