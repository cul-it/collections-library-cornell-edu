//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 811;
    }
if (index == 1) {
     return 748;
    }
if (index == 2) {
     return 706;
    }
if (index == 3) {
     return 686;
    }
if (index == 4) {
     return 709;
    }
if (index == 5) {
     return 672;
    }
if (index == 6) {
     return 677;
    }
if (index == 7) {
     return 690;
    }
if (index == 8) {
     return 686;
    }
if (index == 9) {
     return 667;
    }
if (index == 10) {
     return 649;
    }
if (index == 11) {
     return 642;
    }
if (index == 12) {
     return 687;
    }
if (index == 13) {
     return 685;
    }
if (index == 14) {
     return 667;
    }
if (index == 15) {
     return 659;
    }
if (index == 16) {
     return 1248;
    }
if (index == 17) {
     return 685;
    }
if (index == 18) {
     return 668;
    }
if (index == 19) {
     return 661;
    }
if (index == 20) {
     return 1080;
    }
if (index == 21) {
     return 659;
    }
if (index == 22) {
     return 643;
    }
if (index == 23) {
     return 665;
    }
if (index == 24) {
     return 678;
    }
if (index == 25) {
     return 663;
    }
if (index == 26) {
     return 672;
    }
if (index == 27) {
     return 648;
    }
if (index == 28) {
     return 1041;
    }
if (index == 29) {
     return 659;
    }
if (index == 30) {
     return 668;
    }
if (index == 31) {
     return 669;
    }
if (index == 32) {
     return 647;
    }
if (index == 33) {
     return 677;
    }
if (index == 34) {
     return 641;
    }
if (index == 35) {
     return 654;
    }
if (index == 36) {
     return 1052;
    }
if (index == 37) {
     return 641;
    }
if (index == 38) {
     return 646;
    }
if (index == 39) {
     return 662;
    }
if (index == 40) {
     return 1055;
    }
if (index == 41) {
     return 641;
    }
if (index == 42) {
     return 636;
    }
if (index == 43) {
     return 659;
    }
if (index == 44) {
     return 1049;
    }
if (index == 45) {
     return 641;
    }
if (index == 46) {
     return 620;
    }
if (index == 47) {
     return 641;
    }
if (index == 48) {
     return 1051;
    }
if (index == 49) {
     return 641;
    }
if (index == 50) {
     return 617;
    }
if (index == 51) {
     return 641;
    }
if (index == 52) {
     return 642;
    }
if (index == 53) {
     return 664;
    }
if (index == 54) {
     return 640;
    }
if (index == 55) {
     return 636;
    }
if (index == 56) {
     return 626;
    }
if (index == 57) {
     return 654;
    }
if (index == 58) {
     return 643;
    }
if (index == 59) {
     return 636;
    }
if (index == 60) {
     return 1048;
    }
if (index == 61) {
     return 641;
    }
if (index == 62) {
     return 669;
    }
if (index == 63) {
     return 662;
    }
if (index == 64) {
     return 1057;
    }
if (index == 65) {
     return 641;
    }
if (index == 66) {
     return 675;
    }
if (index == 67) {
     return 680;
    }
if (index == 68) {
     return 661;
    }
if (index == 69) {
     return 649;
    }
if (index == 70) {
     return 663;
    }
if (index == 71) {
     return 659;
    }
if (index == 72) {
     return 664;
    }
if (index == 73) {
     return 654;
    }
if (index == 74) {
     return 667;
    }
if (index == 75) {
     return 647;
    }
if (index == 76) {
     return 1073;
    }
if (index == 77) {
     return 641;
    }
if (index == 78) {
     return 665;
    }
if (index == 79) {
     return 641;
    }
if (index == 80) {
     return 645;
    }
if (index == 81) {
     return 641;
    }
if (index == 82) {
     return 1068;
    }
if (index == 83) {
     return 667;
    }
if (index == 84) {
     return 675;
    }
if (index == 85) {
     return 670;
    }
if (index == 86) {
     return 650;
    }
if (index == 87) {
     return 641;
    }
if (index == 88) {
     return 1077;
    }
if (index == 89) {
     return 667;
    }
if (index == 90) {
     return 684;
    }
if (index == 91) {
     return 681;
    }
if (index == 92) {
     return 625;
    }
if (index == 93) {
     return 656;
    }
if (index == 94) {
     return 646;
    }
if (index == 95) {
     return 639;
    }
if (index == 96) {
     return 662;
    }
if (index == 97) {
     return 661;
    }
if (index == 98) {
     return 655;
    }
if (index == 99) {
     return 659;
    }
if (index == 100) {
     return 645;
    }
if (index == 101) {
     return 649;
    }
if (index == 102) {
     return 624;
    }
if (index == 103) {
     return 659;
    }
if (index == 104) {
     return 644;
    }
if (index == 105) {
     return 659;
    }
if (index == 106) {
     return 620;
    }
if (index == 107) {
     return 652;
    }
if (index == 108) {
     return 651;
    }
if (index == 109) {
     return 645;
    }
if (index == 110) {
     return 639;
    }
if (index == 111) {
     return 645;
    }
if (index == 112) {
     return 661;
    }
if (index == 113) {
     return 662;
    }
if (index == 114) {
     return 635;
    }
if (index == 115) {
     return 705;
    }
if (index == 116) {
     return 666;
    }
if (index == 117) {
     return 694;
    }
if (index == 118) {
     return 659;
    }
if (index == 119) {
     return 656;
    }
if (index == 120) {
     return 640;
    }
if (index == 121) {
     return 629;
    }
if (index == 122) {
     return 1067;
    }
if (index == 123) {
     return 669;
    }
if (index == 124) {
     return 659;
    }
if (index == 125) {
     return 659;
    }
if (index == 126) {
     return 659;
    }
if (index == 127) {
     return 636;
    }
if (index == 128) {
     return 1073;
    }
if (index == 129) {
     return 694;
    }
if (index == 130) {
     return 647;
    }
if (index == 131) {
     return 653;
    }
if (index == 132) {
     return 659;
    }
if (index == 133) {
     return 665;
    }
if (index == 134) {
     return 663;
    }
if (index == 135) {
     return 662;
    }
if (index == 136) {
     return 659;
    }
if (index == 137) {
     return 658;
    }
if (index == 138) {
     return 653;
    }
if (index == 139) {
     return 669;
    }
if (index == 140) {
     return 656;
    }
if (index == 141) {
     return 659;
    }
if (index == 142) {
     return 638;
    }
if (index == 143) {
     return 644;
    }
if (index == 144) {
     return 643;
    }
if (index == 145) {
     return 625;
    }
if (index == 146) {
     return 627;
    }
if (index == 147) {
     return 681;
    }
if (index == 148) {
     return 665;
    }
if (index == 149) {
     return 632;
    }
if (index == 150) {
     return 643;
    }
if (index == 151) {
     return 641;
    }
if (index == 152) {
     return 623;
    }
if (index == 153) {
     return 636;
    }
if (index == 154) {
     return 634;
    }
if (index == 155) {
     return 618;
    }
if (index == 156) {
     return 1068;
    }
if (index == 157) {
     return 637;
    }
if (index == 158) {
     return 650;
    }
if (index == 159) {
     return 636;
    }
if (index == 160) {
     return 1061;
    }
if (index == 161) {
     return 658;
    }
if (index == 162) {
     return 657;
    }
if (index == 163) {
     return 634;
    }
if (index == 164) {
     return 642;
    }
if (index == 165) {
     return 659;
    }
if (index == 166) {
     return 667;
    }
if (index == 167) {
     return 659;
    }
if (index == 168) {
     return 1026;
    }
if (index == 169) {
     return 659;
    }
if (index == 170) {
     return 667;
    }
if (index == 171) {
     return 668;
    }
if (index == 172) {
     return 674;
    }
if (index == 173) {
     return 659;
    }
if (index == 174) {
     return 667;
    }
if (index == 175) {
     return 673;
    }
if (index == 176) {
     return 641;
    }
if (index == 177) {
     return 653;
    }
if (index == 178) {
     return 1063;
    }
if (index == 179) {
     return 659;
    }
if (index == 180) {
     return 667;
    }
if (index == 181) {
     return 673;
    }
if (index == 182) {
     return 679;
    }
if (index == 183) {
     return 677;
    }
if (index == 184) {
     return 1077;
    }
if (index == 185) {
     return 659;
    }
if (index == 186) {
     return 667;
    }
if (index == 187) {
     return 675;
    }
if (index == 188) {
     return 675;
    }
if (index == 189) {
     return 683;
    }
if (index == 190) {
     return 645;
    }
if (index == 191) {
     return 659;
    }
if (index == 192) {
     return 1028;
    }
if (index == 193) {
     return 659;
    }
if (index == 194) {
     return 667;
    }
if (index == 195) {
     return 671;
    }
if (index == 196) {
     return 671;
    }
if (index == 197) {
     return 626;
    }
if (index == 198) {
     return 1061;
    }
if (index == 199) {
     return 631;
    }
if (index == 200) {
     return 639;
    }
if (index == 201) {
     return 646;
    }
if (index == 202) {
     return 682;
    }
if (index == 203) {
     return 629;
    }
if (index == 204) {
     return 667;
    }
if (index == 205) {
     return 633;
    }
if (index == 206) {
     return 625;
    }
if (index == 207) {
     return 646;
    }
if (index == 208) {
     return 641;
    }
if (index == 209) {
     return 638;
    }
if (index == 210) {
     return 636;
    }
if (index == 211) {
     return 639;
    }
if (index == 212) {
     return 638;
    }
if (index == 213) {
     return 644;
    }
if (index == 214) {
     return 633;
    }
if (index == 215) {
     return 648;
    }
if (index == 216) {
     return 1067;
    }
if (index == 217) {
     return 625;
    }
if (index == 218) {
     return 658;
    }
if (index == 219) {
     return 659;
    }
if (index == 220) {
     return 654;
    }
if (index == 221) {
     return 660;
    }
if (index == 222) {
     return 650;
    }
if (index == 223) {
     return 659;
    }
if (index == 224) {
     return 637;
    }
if (index == 225) {
     return 648;
    }
if (index == 226) {
     return 1062;
    }
if (index == 227) {
     return 622;
    }
if (index == 228) {
     return 632;
    }
if (index == 229) {
     return 665;
    }
if (index == 230) {
     return 657;
    }
if (index == 231) {
     return 659;
    }
if (index == 232) {
     return 648;
    }
if (index == 233) {
     return 649;
    }
if (index == 234) {
     return 1054;
    }
if (index == 235) {
     return 634;
    }
if (index == 236) {
     return 637;
    }
if (index == 237) {
     return 648;
    }
if (index == 238) {
     return 644;
    }
if (index == 239) {
     return 660;
    }
if (index == 240) {
     return 657;
    }
if (index == 241) {
     return 640;
    }
if (index == 242) {
     return 1051;
    }
if (index == 243) {
     return 634;
    }
if (index == 244) {
     return 647;
    }
if (index == 245) {
     return 644;
    }
if (index == 246) {
     return 1056;
    }
if (index == 247) {
     return 645;
    }
if (index == 248) {
     return 657;
    }
if (index == 249) {
     return 654;
    }
if (index == 250) {
     return 1039;
    }
if (index == 251) {
     return 685;
    }
if (index == 252) {
     return 664;
    }
if (index == 253) {
     return 642;
    }
if (index == 254) {
     return 641;
    }
if (index == 255) {
     return 635;
    }
if (index == 256) {
     return 643;
    }
if (index == 257) {
     return 623;
    }
if (index == 258) {
     return 643;
    }
if (index == 259) {
     return 640;
    }
if (index == 260) {
     return 643;
    }
if (index == 261) {
     return 641;
    }
if (index == 262) {
     return 1059;
    }
if (index == 263) {
     return 642;
    }
if (index == 264) {
     return 633;
    }
if (index == 265) {
     return 642;
    }
if (index == 266) {
     return 640;
    }
if (index == 267) {
     return 652;
    }
if (index == 268) {
     return 638;
    }
if (index == 269) {
     return 634;
    }
if (index == 270) {
     return 622;
    }
if (index == 271) {
     return 641;
    }
if (index == 272) {
     return 631;
    }
if (index == 273) {
     return 648;
    }
if (index == 274) {
     return 634;
    }
if (index == 275) {
     return 653;
    }
if (index == 276) {
     return 638;
    }
if (index == 277) {
     return 634;
    }
if (index == 278) {
     return 1036;
    }
if (index == 279) {
     return 641;
    }
if (index == 280) {
     return 640;
    }
if (index == 281) {
     return 628;
    }
if (index == 282) {
     return 655;
    }
if (index == 283) {
     return 618;
    }
if (index == 284) {
     return 631;
    }
if (index == 285) {
     return 649;
    }
if (index == 286) {
     return 640;
    }
if (index == 287) {
     return 657;
    }
if (index == 288) {
     return 648;
    }
if (index == 289) {
     return 656;
    }
if (index == 290) {
     return 640;
    }
if (index == 291) {
     return 647;
    }
if (index == 292) {
     return 1049;
    }
if (index == 293) {
     return 685;
    }
if (index == 294) {
     return 638;
    }
if (index == 295) {
     return 648;
    }
if (index == 296) {
     return 643;
    }
if (index == 297) {
     return 633;
    }
if (index == 298) {
     return 640;
    }
if (index == 299) {
     return 629;
    }
if (index == 300) {
     return 660;
    }
if (index == 301) {
     return 643;
    }
if (index == 302) {
     return 633;
    }
if (index == 303) {
     return 646;
    }
if (index == 304) {
     return 1052;
    }
if (index == 305) {
     return 617;
    }
if (index == 306) {
     return 646;
    }
if (index == 307) {
     return 654;
    }
if (index == 308) {
     return 645;
    }
if (index == 309) {
     return 640;
    }
if (index == 310) {
     return 628;
    }
if (index == 311) {
     return 649;
    }
if (index == 312) {
     return 1049;
    }
if (index == 313) {
     return 626;
    }
if (index == 314) {
     return 643;
    }
if (index == 315) {
     return 641;
    }
if (index == 316) {
     return 1078;
    }
if (index == 317) {
     return 629;
    }
if (index == 318) {
     return 641;
    }
if (index == 319) {
     return 642;
    }
if (index == 320) {
     return 640;
    }
if (index == 321) {
     return 645;
    }
if (index == 322) {
     return 636;
    }
if (index == 323) {
     return 642;
    }
if (index == 324) {
     return 644;
    }
if (index == 325) {
     return 647;
    }
if (index == 326) {
     return 647;
    }
if (index == 327) {
     return 636;
    }
if (index == 328) {
     return 681;
    }
if (index == 329) {
     return 629;
    }
if (index == 330) {
     return 643;
    }
if (index == 331) {
     return 659;
    }
if (index == 332) {
     return 640;
    }
if (index == 333) {
     return 639;
    }
if (index == 334) {
     return 632;
    }
if (index == 335) {
     return 657;
    }
if (index == 336) {
     return 639;
    }
if (index == 337) {
     return 648;
    }
if (index == 338) {
     return 638;
    }
if (index == 339) {
     return 652;
    }
if (index == 340) {
     return 1034;
    }
if (index == 341) {
     return 685;
    }
if (index == 342) {
     return 655;
    }
if (index == 343) {
     return 651;
    }
if (index == 344) {
     return 640;
    }
if (index == 345) {
     return 662;
    }
if (index == 346) {
     return 684;
    }
if (index == 347) {
     return 637;
    }
if (index == 348) {
     return 674;
    }
if (index == 349) {
     return 672;
    }
if (index == 350) {
     return 665;
    }
if (index == 351) {
     return 683;
    }
if (index == 352) {
     return 650;
    }
if (index == 353) {
     return 675;
    }
if (index == 354) {
     return 651;
    }
if (index == 355) {
     return 642;
    }
if (index == 356) {
     return 620;
    }
if (index == 357) {
     return 983;
    }
if (index > 357) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1178;
    }
if (index == 1) {
     return 1134;
    }
if (index == 2) {
     return 1115;
    }
if (index == 3) {
     return 1132;
    }
if (index == 4) {
     return 1128;
    }
if (index == 5) {
     return 1111;
    }
if (index == 6) {
     return 1090;
    }
if (index == 7) {
     return 1090;
    }
if (index == 8) {
     return 1115;
    }
if (index == 9) {
     return 1115;
    }
if (index == 10) {
     return 1119;
    }
if (index == 11) {
     return 1078;
    }
if (index == 12) {
     return 1125;
    }
if (index == 13) {
     return 1085;
    }
if (index == 14) {
     return 1121;
    }
if (index == 15) {
     return 1112;
    }
if (index == 16) {
     return 1584;
    }
if (index == 17) {
     return 1094;
    }
if (index == 18) {
     return 1112;
    }
if (index == 19) {
     return 1105;
    }
if (index == 20) {
     return 663;
    }
if (index == 21) {
     return 1094;
    }
if (index == 22) {
     return 1105;
    }
if (index == 23) {
     return 1098;
    }
if (index == 24) {
     return 1096;
    }
if (index == 25) {
     return 1070;
    }
if (index == 26) {
     return 1086;
    }
if (index == 27) {
     return 1075;
    }
if (index == 28) {
     return 631;
    }
if (index == 29) {
     return 1068;
    }
if (index == 30) {
     return 1086;
    }
if (index == 31) {
     return 1076;
    }
if (index == 32) {
     return 1089;
    }
if (index == 33) {
     return 1081;
    }
if (index == 34) {
     return 1068;
    }
if (index == 35) {
     return 1070;
    }
if (index == 36) {
     return 621;
    }
if (index == 37) {
     return 1060;
    }
if (index == 38) {
     return 1071;
    }
if (index == 39) {
     return 1072;
    }
if (index == 40) {
     return 625;
    }
if (index == 41) {
     return 1060;
    }
if (index == 42) {
     return 1074;
    }
if (index == 43) {
     return 1071;
    }
if (index == 44) {
     return 613;
    }
if (index == 45) {
     return 1060;
    }
if (index == 46) {
     return 1071;
    }
if (index == 47) {
     return 1060;
    }
if (index == 48) {
     return 623;
    }
if (index == 49) {
     return 1060;
    }
if (index == 50) {
     return 1068;
    }
if (index == 51) {
     return 1060;
    }
if (index == 52) {
     return 1069;
    }
if (index == 53) {
     return 1074;
    }
if (index == 54) {
     return 1068;
    }
if (index == 55) {
     return 1068;
    }
if (index == 56) {
     return 1069;
    }
if (index == 57) {
     return 1074;
    }
if (index == 58) {
     return 1073;
    }
if (index == 59) {
     return 1073;
    }
if (index == 60) {
     return 622;
    }
if (index == 61) {
     return 1060;
    }
if (index == 62) {
     return 1072;
    }
if (index == 63) {
     return 1090;
    }
if (index == 64) {
     return 629;
    }
if (index == 65) {
     return 1078;
    }
if (index == 66) {
     return 1088;
    }
if (index == 67) {
     return 1100;
    }
if (index == 68) {
     return 1090;
    }
if (index == 69) {
     return 1097;
    }
if (index == 70) {
     return 1097;
    }
if (index == 71) {
     return 1106;
    }
if (index == 72) {
     return 1101;
    }
if (index == 73) {
     return 1096;
    }
if (index == 74) {
     return 1107;
    }
if (index == 75) {
     return 1097;
    }
if (index == 76) {
     return 640;
    }
if (index == 77) {
     return 1078;
    }
if (index == 78) {
     return 1103;
    }
if (index == 79) {
     return 1078;
    }
if (index == 80) {
     return 1093;
    }
if (index == 81) {
     return 1090;
    }
if (index == 82) {
     return 638;
    }
if (index == 83) {
     return 1078;
    }
if (index == 84) {
     return 1087;
    }
if (index == 85) {
     return 1080;
    }
if (index == 86) {
     return 1087;
    }
if (index == 87) {
     return 1088;
    }
if (index == 88) {
     return 658;
    }
if (index == 89) {
     return 1078;
    }
if (index == 90) {
     return 1092;
    }
if (index == 91) {
     return 1087;
    }
if (index == 92) {
     return 1077;
    }
if (index == 93) {
     return 1096;
    }
if (index == 94) {
     return 1087;
    }
if (index == 95) {
     return 1079;
    }
if (index == 96) {
     return 1079;
    }
if (index == 97) {
     return 1084;
    }
if (index == 98) {
     return 1088;
    }
if (index == 99) {
     return 1085;
    }
if (index == 100) {
     return 1070;
    }
if (index == 101) {
     return 1078;
    }
if (index == 102) {
     return 1079;
    }
if (index == 103) {
     return 1078;
    }
if (index == 104) {
     return 1083;
    }
if (index == 105) {
     return 1078;
    }
if (index == 106) {
     return 1077;
    }
if (index == 107) {
     return 1078;
    }
if (index == 108) {
     return 1084;
    }
if (index == 109) {
     return 1060;
    }
if (index == 110) {
     return 1082;
    }
if (index == 111) {
     return 1075;
    }
if (index == 112) {
     return 1088;
    }
if (index == 113) {
     return 1102;
    }
if (index == 114) {
     return 1091;
    }
if (index == 115) {
     return 1093;
    }
if (index == 116) {
     return 1090;
    }
if (index == 117) {
     return 1086;
    }
if (index == 118) {
     return 1086;
    }
if (index == 119) {
     return 1095;
    }
if (index == 120) {
     return 1089;
    }
if (index == 121) {
     return 1086;
    }
if (index == 122) {
     return 643;
    }
if (index == 123) {
     return 1070;
    }
if (index == 124) {
     return 1086;
    }
if (index == 125) {
     return 1082;
    }
if (index == 126) {
     return 1086;
    }
if (index == 127) {
     return 1079;
    }
if (index == 128) {
     return 636;
    }
if (index == 129) {
     return 1086;
    }
if (index == 130) {
     return 1075;
    }
if (index == 131) {
     return 1084;
    }
if (index == 132) {
     return 1086;
    }
if (index == 133) {
     return 1070;
    }
if (index == 134) {
     return 1088;
    }
if (index == 135) {
     return 1095;
    }
if (index == 136) {
     return 1086;
    }
if (index == 137) {
     return 1077;
    }
if (index == 138) {
     return 1090;
    }
if (index == 139) {
     return 1095;
    }
if (index == 140) {
     return 1089;
    }
if (index == 141) {
     return 1095;
    }
if (index == 142) {
     return 1081;
    }
if (index == 143) {
     return 1091;
    }
if (index == 144) {
     return 1075;
    }
if (index == 145) {
     return 1086;
    }
if (index == 146) {
     return 1070;
    }
if (index == 147) {
     return 1094;
    }
if (index == 148) {
     return 1072;
    }
if (index == 149) {
     return 1085;
    }
if (index == 150) {
     return 1076;
    }
if (index == 151) {
     return 1074;
    }
if (index == 152) {
     return 1066;
    }
if (index == 153) {
     return 1078;
    }
if (index == 154) {
     return 1071;
    }
if (index == 155) {
     return 1070;
    }
if (index == 156) {
     return 659;
    }
if (index == 157) {
     return 1053;
    }
if (index == 158) {
     return 1067;
    }
if (index == 159) {
     return 1075;
    }
if (index == 160) {
     return 654;
    }
if (index == 161) {
     return 1086;
    }
if (index == 162) {
     return 1079;
    }
if (index == 163) {
     return 1088;
    }
if (index == 164) {
     return 1066;
    }
if (index == 165) {
     return 1095;
    }
if (index == 166) {
     return 1077;
    }
if (index == 167) {
     return 1095;
    }
if (index == 168) {
     return 619;
    }
if (index == 169) {
     return 1095;
    }
if (index == 170) {
     return 1077;
    }
if (index == 171) {
     return 1100;
    }
if (index == 172) {
     return 1081;
    }
if (index == 173) {
     return 1095;
    }
if (index == 174) {
     return 1077;
    }
if (index == 175) {
     return 1103;
    }
if (index == 176) {
     return 1085;
    }
if (index == 177) {
     return 1114;
    }
if (index == 178) {
     return 637;
    }
if (index == 179) {
     return 1095;
    }
if (index == 180) {
     return 1077;
    }
if (index == 181) {
     return 1103;
    }
if (index == 182) {
     return 1084;
    }
if (index == 183) {
     return 1105;
    }
if (index == 184) {
     return 667;
    }
if (index == 185) {
     return 1095;
    }
if (index == 186) {
     return 1077;
    }
if (index == 187) {
     return 1104;
    }
if (index == 188) {
     return 1082;
    }
if (index == 189) {
     return 1109;
    }
if (index == 190) {
     return 1085;
    }
if (index == 191) {
     return 1103;
    }
if (index == 192) {
     return 624;
    }
if (index == 193) {
     return 1095;
    }
if (index == 194) {
     return 1077;
    }
if (index == 195) {
     return 1092;
    }
if (index == 196) {
     return 1079;
    }
if (index == 197) {
     return 1092;
    }
if (index == 198) {
     return 653;
    }
if (index == 199) {
     return 1084;
    }
if (index == 200) {
     return 1081;
    }
if (index == 201) {
     return 1108;
    }
if (index == 202) {
     return 1086;
    }
if (index == 203) {
     return 1108;
    }
if (index == 204) {
     return 1077;
    }
if (index == 205) {
     return 1087;
    }
if (index == 206) {
     return 1079;
    }
if (index == 207) {
     return 1094;
    }
if (index == 208) {
     return 1081;
    }
if (index == 209) {
     return 1087;
    }
if (index == 210) {
     return 1077;
    }
if (index == 211) {
     return 1080;
    }
if (index == 212) {
     return 1088;
    }
if (index == 213) {
     return 1089;
    }
if (index == 214) {
     return 1077;
    }
if (index == 215) {
     return 1088;
    }
if (index == 216) {
     return 668;
    }
if (index == 217) {
     return 1065;
    }
if (index == 218) {
     return 1088;
    }
if (index == 219) {
     return 1079;
    }
if (index == 220) {
     return 1099;
    }
if (index == 221) {
     return 1084;
    }
if (index == 222) {
     return 1088;
    }
if (index == 223) {
     return 1099;
    }
if (index == 224) {
     return 1086;
    }
if (index == 225) {
     return 1080;
    }
if (index == 226) {
     return 669;
    }
if (index == 227) {
     return 1078;
    }
if (index == 228) {
     return 1089;
    }
if (index == 229) {
     return 1100;
    }
if (index == 230) {
     return 1093;
    }
if (index == 231) {
     return 1107;
    }
if (index == 232) {
     return 1080;
    }
if (index == 233) {
     return 1098;
    }
if (index == 234) {
     return 658;
    }
if (index == 235) {
     return 1078;
    }
if (index == 236) {
     return 1078;
    }
if (index == 237) {
     return 1097;
    }
if (index == 238) {
     return 1078;
    }
if (index == 239) {
     return 1092;
    }
if (index == 240) {
     return 1107;
    }
if (index == 241) {
     return 1078;
    }
if (index == 242) {
     return 659;
    }
if (index == 243) {
     return 1073;
    }
if (index == 244) {
     return 1099;
    }
if (index == 245) {
     return 1086;
    }
if (index == 246) {
     return 664;
    }
if (index == 247) {
     return 1066;
    }
if (index == 248) {
     return 1094;
    }
if (index == 249) {
     return 1092;
    }
if (index == 250) {
     return 637;
    }
if (index == 251) {
     return 1078;
    }
if (index == 252) {
     return 1090;
    }
if (index == 253) {
     return 1080;
    }
if (index == 254) {
     return 1078;
    }
if (index == 255) {
     return 1085;
    }
if (index == 256) {
     return 1086;
    }
if (index == 257) {
     return 1083;
    }
if (index == 258) {
     return 1081;
    }
if (index == 259) {
     return 1087;
    }
if (index == 260) {
     return 1076;
    }
if (index == 261) {
     return 1084;
    }
if (index == 262) {
     return 636;
    }
if (index == 263) {
     return 1077;
    }
if (index == 264) {
     return 1078;
    }
if (index == 265) {
     return 1088;
    }
if (index == 266) {
     return 1078;
    }
if (index == 267) {
     return 1078;
    }
if (index == 268) {
     return 1078;
    }
if (index == 269) {
     return 1077;
    }
if (index == 270) {
     return 1062;
    }
if (index == 271) {
     return 1075;
    }
if (index == 272) {
     return 1078;
    }
if (index == 273) {
     return 1077;
    }
if (index == 274) {
     return 1078;
    }
if (index == 275) {
     return 1084;
    }
if (index == 276) {
     return 1080;
    }
if (index == 277) {
     return 1077;
    }
if (index == 278) {
     return 649;
    }
if (index == 279) {
     return 1077;
    }
if (index == 280) {
     return 1078;
    }
if (index == 281) {
     return 1088;
    }
if (index == 282) {
     return 1090;
    }
if (index == 283) {
     return 1084;
    }
if (index == 284) {
     return 1078;
    }
if (index == 285) {
     return 1084;
    }
if (index == 286) {
     return 1078;
    }
if (index == 287) {
     return 1077;
    }
if (index == 288) {
     return 1076;
    }
if (index == 289) {
     return 1087;
    }
if (index == 290) {
     return 1078;
    }
if (index == 291) {
     return 1063;
    }
if (index == 292) {
     return 656;
    }
if (index == 293) {
     return 1077;
    }
if (index == 294) {
     return 1078;
    }
if (index == 295) {
     return 1069;
    }
if (index == 296) {
     return 1078;
    }
if (index == 297) {
     return 1086;
    }
if (index == 298) {
     return 1063;
    }
if (index == 299) {
     return 1077;
    }
if (index == 300) {
     return 1097;
    }
if (index == 301) {
     return 1077;
    }
if (index == 302) {
     return 1078;
    }
if (index == 303) {
     return 1082;
    }
if (index == 304) {
     return 659;
    }
if (index == 305) {
     return 1077;
    }
if (index == 306) {
     return 1089;
    }
if (index == 307) {
     return 1087;
    }
if (index == 308) {
     return 1078;
    }
if (index == 309) {
     return 1088;
    }
if (index == 310) {
     return 1078;
    }
if (index == 311) {
     return 1085;
    }
if (index == 312) {
     return 645;
    }
if (index == 313) {
     return 1077;
    }
if (index == 314) {
     return 1078;
    }
if (index == 315) {
     return 1081;
    }
if (index == 316) {
     return 685;
    }
if (index == 317) {
     return 1077;
    }
if (index == 318) {
     return 1078;
    }
if (index == 319) {
     return 1077;
    }
if (index == 320) {
     return 1078;
    }
if (index == 321) {
     return 1077;
    }
if (index == 322) {
     return 1084;
    }
if (index == 323) {
     return 1086;
    }
if (index == 324) {
     return 1078;
    }
if (index == 325) {
     return 1083;
    }
if (index == 326) {
     return 1081;
    }
if (index == 327) {
     return 1077;
    }
if (index == 328) {
     return 1064;
    }
if (index == 329) {
     return 1068;
    }
if (index == 330) {
     return 1064;
    }
if (index == 331) {
     return 1085;
    }
if (index == 332) {
     return 1050;
    }
if (index == 333) {
     return 1073;
    }
if (index == 334) {
     return 1054;
    }
if (index == 335) {
     return 1068;
    }
if (index == 336) {
     return 1045;
    }
if (index == 337) {
     return 1068;
    }
if (index == 338) {
     return 1037;
    }
if (index == 339) {
     return 1069;
    }
if (index == 340) {
     return 660;
    }
if (index == 341) {
     return 1069;
    }
if (index == 342) {
     return 1045;
    }
if (index == 343) {
     return 1068;
    }
if (index == 344) {
     return 1064;
    }
if (index == 345) {
     return 1059;
    }
if (index == 346) {
     return 1054;
    }
if (index == 347) {
     return 1045;
    }
if (index == 348) {
     return 1040;
    }
if (index == 349) {
     return 1055;
    }
if (index == 350) {
     return 1038;
    }
if (index == 351) {
     return 1065;
    }
if (index == 352) {
     return 1044;
    }
if (index == 353) {
     return 1059;
    }
if (index == 354) {
     return 1042;
    }
if (index == 355) {
     return 1052;
    }
if (index == 356) {
     return 988;
    }
if (index == 357) {
     return 1428;
    }
if (index > 357) {
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
    var url = '/fedora/get/seapage:182_' + imgStr + '/digitalImage';
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
br.numLeafs = 358;

// Book title and the URL used for the book title link
br.bookTitle= "A woman's journey through the Philippines on a cable ship that linked together the strange lands seen en route";
br.bookAuthor= "Russel, Florence Kimball";
br.bookPub= "Boston: L. C. Page and company, 1907";
br.bookKeyword= "Philippines--Description and travel";
br.bookUrl  = '/catalog/sea:182';

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
