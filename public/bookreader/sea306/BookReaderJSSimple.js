//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 824;
    }
if (index == 1) {
     return 809;
    }
if (index == 2) {
     return 818;
    }
if (index == 3) {
     return 800;
    }
if (index == 4) {
     return 738;
    }
if (index == 5) {
     return 800;
    }
if (index == 6) {
     return 726;
    }
if (index == 7) {
     return 737;
    }
if (index == 8) {
     return 735;
    }
if (index == 9) {
     return 773;
    }
if (index == 10) {
     return 774;
    }
if (index == 11) {
     return 785;
    }
if (index == 12) {
     return 800;
    }
if (index == 13) {
     return 825;
    }
if (index == 14) {
     return 815;
    }
if (index == 15) {
     return 770;
    }
if (index == 16) {
     return 772;
    }
if (index == 17) {
     return 701;
    }
if (index == 18) {
     return 790;
    }
if (index == 19) {
     return 720;
    }
if (index == 20) {
     return 761;
    }
if (index == 21) {
     return 773;
    }
if (index == 22) {
     return 775;
    }
if (index == 23) {
     return 729;
    }
if (index == 24) {
     return 1020;
    }
if (index == 25) {
     return 721;
    }
if (index == 26) {
     return 749;
    }
if (index == 27) {
     return 749;
    }
if (index == 28) {
     return 753;
    }
if (index == 29) {
     return 704;
    }
if (index == 30) {
     return 762;
    }
if (index == 31) {
     return 731;
    }
if (index == 32) {
     return 762;
    }
if (index == 33) {
     return 705;
    }
if (index == 34) {
     return 734;
    }
if (index == 35) {
     return 725;
    }
if (index == 36) {
     return 753;
    }
if (index == 37) {
     return 697;
    }
if (index == 38) {
     return 737;
    }
if (index == 39) {
     return 741;
    }
if (index == 40) {
     return 749;
    }
if (index == 41) {
     return 671;
    }
if (index == 42) {
     return 1034;
    }
if (index == 43) {
     return 731;
    }
if (index == 44) {
     return 769;
    }
if (index == 45) {
     return 733;
    }
if (index == 46) {
     return 743;
    }
if (index == 47) {
     return 704;
    }
if (index == 48) {
     return 738;
    }
if (index == 49) {
     return 762;
    }
if (index == 50) {
     return 1015;
    }
if (index == 51) {
     return 755;
    }
if (index == 52) {
     return 732;
    }
if (index == 53) {
     return 718;
    }
if (index == 54) {
     return 770;
    }
if (index == 55) {
     return 708;
    }
if (index == 56) {
     return 699;
    }
if (index == 57) {
     return 755;
    }
if (index == 58) {
     return 773;
    }
if (index == 59) {
     return 769;
    }
if (index == 60) {
     return 706;
    }
if (index == 61) {
     return 755;
    }
if (index == 62) {
     return 689;
    }
if (index == 63) {
     return 736;
    }
if (index == 64) {
     return 715;
    }
if (index == 65) {
     return 708;
    }
if (index == 66) {
     return 676;
    }
if (index == 67) {
     return 730;
    }
if (index == 68) {
     return 954;
    }
if (index == 69) {
     return 742;
    }
if (index == 70) {
     return 717;
    }
if (index == 71) {
     return 685;
    }
if (index == 72) {
     return 1010;
    }
if (index == 73) {
     return 637;
    }
if (index == 74) {
     return 695;
    }
if (index == 75) {
     return 702;
    }
if (index == 76) {
     return 971;
    }
if (index == 77) {
     return 692;
    }
if (index == 78) {
     return 655;
    }
if (index == 79) {
     return 752;
    }
if (index == 80) {
     return 999;
    }
if (index == 81) {
     return 692;
    }
if (index == 82) {
     return 694;
    }
if (index == 83) {
     return 752;
    }
if (index == 84) {
     return 927;
    }
if (index == 85) {
     return 730;
    }
if (index == 86) {
     return 679;
    }
if (index == 87) {
     return 710;
    }
if (index == 88) {
     return 1064;
    }
if (index == 89) {
     return 755;
    }
if (index == 90) {
     return 743;
    }
if (index == 91) {
     return 750;
    }
if (index == 92) {
     return 732;
    }
if (index == 93) {
     return 700;
    }
if (index == 94) {
     return 700;
    }
if (index == 95) {
     return 782;
    }
if (index == 96) {
     return 718;
    }
if (index == 97) {
     return 774;
    }
if (index == 98) {
     return 732;
    }
if (index == 99) {
     return 744;
    }
if (index == 100) {
     return 1002;
    }
if (index == 101) {
     return 755;
    }
if (index == 102) {
     return 730;
    }
if (index == 103) {
     return 755;
    }
if (index == 104) {
     return 739;
    }
if (index == 105) {
     return 755;
    }
if (index == 106) {
     return 1027;
    }
if (index == 107) {
     return 755;
    }
if (index == 108) {
     return 693;
    }
if (index == 109) {
     return 742;
    }
if (index == 110) {
     return 762;
    }
if (index == 111) {
     return 755;
    }
if (index == 112) {
     return 927;
    }
if (index == 113) {
     return 712;
    }
if (index == 114) {
     return 699;
    }
if (index == 115) {
     return 755;
    }
if (index == 116) {
     return 754;
    }
if (index == 117) {
     return 755;
    }
if (index == 118) {
     return 736;
    }
if (index == 119) {
     return 755;
    }
if (index == 120) {
     return 693;
    }
if (index == 121) {
     return 734;
    }
if (index == 122) {
     return 777;
    }
if (index == 123) {
     return 715;
    }
if (index == 124) {
     return 671;
    }
if (index == 125) {
     return 755;
    }
if (index == 126) {
     return 763;
    }
if (index == 127) {
     return 784;
    }
if (index == 128) {
     return 976;
    }
if (index == 129) {
     return 755;
    }
if (index == 130) {
     return 694;
    }
if (index == 131) {
     return 758;
    }
if (index == 132) {
     return 984;
    }
if (index == 133) {
     return 755;
    }
if (index == 134) {
     return 717;
    }
if (index == 135) {
     return 754;
    }
if (index == 136) {
     return 761;
    }
if (index == 137) {
     return 667;
    }
if (index == 138) {
     return 993;
    }
if (index == 139) {
     return 716;
    }
if (index == 140) {
     return 765;
    }
if (index == 141) {
     return 766;
    }
if (index == 142) {
     return 1007;
    }
if (index == 143) {
     return 755;
    }
if (index == 144) {
     return 704;
    }
if (index == 145) {
     return 732;
    }
if (index == 146) {
     return 999;
    }
if (index == 147) {
     return 755;
    }
if (index == 148) {
     return 661;
    }
if (index == 149) {
     return 745;
    }
if (index == 150) {
     return 993;
    }
if (index == 151) {
     return 755;
    }
if (index == 152) {
     return 775;
    }
if (index == 153) {
     return 687;
    }
if (index == 154) {
     return 675;
    }
if (index == 155) {
     return 708;
    }
if (index == 156) {
     return 737;
    }
if (index == 157) {
     return 767;
    }
if (index == 158) {
     return 676;
    }
if (index == 159) {
     return 755;
    }
if (index == 160) {
     return 734;
    }
if (index == 161) {
     return 747;
    }
if (index == 162) {
     return 728;
    }
if (index == 163) {
     return 765;
    }
if (index == 164) {
     return 764;
    }
if (index == 165) {
     return 668;
    }
if (index == 166) {
     return 941;
    }
if (index == 167) {
     return 728;
    }
if (index == 168) {
     return 741;
    }
if (index == 169) {
     return 694;
    }
if (index == 170) {
     return 664;
    }
if (index == 171) {
     return 712;
    }
if (index == 172) {
     return 731;
    }
if (index == 173) {
     return 726;
    }
if (index == 174) {
     return 693;
    }
if (index == 175) {
     return 755;
    }
if (index == 176) {
     return 757;
    }
if (index == 177) {
     return 726;
    }
if (index == 178) {
     return 740;
    }
if (index == 179) {
     return 661;
    }
if (index == 180) {
     return 909;
    }
if (index == 181) {
     return 755;
    }
if (index == 182) {
     return 746;
    }
if (index == 183) {
     return 703;
    }
if (index == 184) {
     return 957;
    }
if (index == 185) {
     return 764;
    }
if (index == 186) {
     return 734;
    }
if (index == 187) {
     return 780;
    }
if (index == 188) {
     return 712;
    }
if (index == 189) {
     return 764;
    }
if (index == 190) {
     return 735;
    }
if (index == 191) {
     return 726;
    }
if (index == 192) {
     return 758;
    }
if (index == 193) {
     return 672;
    }
if (index == 194) {
     return 947;
    }
if (index == 195) {
     return 764;
    }
if (index == 196) {
     return 761;
    }
if (index == 197) {
     return 746;
    }
if (index == 198) {
     return 751;
    }
if (index == 199) {
     return 762;
    }
if (index == 200) {
     return 998;
    }
if (index == 201) {
     return 764;
    }
if (index == 202) {
     return 729;
    }
if (index == 203) {
     return 713;
    }
if (index == 204) {
     return 708;
    }
if (index == 205) {
     return 764;
    }
if (index == 206) {
     return 747;
    }
if (index == 207) {
     return 637;
    }
if (index == 208) {
     return 946;
    }
if (index == 209) {
     return 764;
    }
if (index == 210) {
     return 765;
    }
if (index == 211) {
     return 647;
    }
if (index == 212) {
     return 773;
    }
if (index == 213) {
     return 647;
    }
if (index == 214) {
     return 958;
    }
if (index == 215) {
     return 764;
    }
if (index == 216) {
     return 754;
    }
if (index == 217) {
     return 636;
    }
if (index == 218) {
     return 976;
    }
if (index == 219) {
     return 764;
    }
if (index == 220) {
     return 754;
    }
if (index == 221) {
     return 689;
    }
if (index == 222) {
     return 960;
    }
if (index == 223) {
     return 764;
    }
if (index == 224) {
     return 762;
    }
if (index == 225) {
     return 621;
    }
if (index == 226) {
     return 730;
    }
if (index == 227) {
     return 621;
    }
if (index == 228) {
     return 773;
    }
if (index == 229) {
     return 668;
    }
if (index == 230) {
     return 682;
    }
if (index == 231) {
     return 729;
    }
if (index == 232) {
     return 675;
    }
if (index == 233) {
     return 652;
    }
if (index == 234) {
     return 679;
    }
if (index == 235) {
     return 625;
    }
if (index == 236) {
     return 989;
    }
if (index == 237) {
     return 729;
    }
if (index == 238) {
     return 675;
    }
if (index == 239) {
     return 623;
    }
if (index == 240) {
     return 715;
    }
if (index == 241) {
     return 668;
    }
if (index == 242) {
     return 684;
    }
if (index == 243) {
     return 729;
    }
if (index == 244) {
     return 697;
    }
if (index == 245) {
     return 663;
    }
if (index == 246) {
     return 718;
    }
if (index == 247) {
     return 630;
    }
if (index == 248) {
     return 936;
    }
if (index == 249) {
     return 729;
    }
if (index == 250) {
     return 676;
    }
if (index == 251) {
     return 644;
    }
if (index == 252) {
     return 695;
    }
if (index == 253) {
     return 623;
    }
if (index == 254) {
     return 964;
    }
if (index == 255) {
     return 729;
    }
if (index == 256) {
     return 652;
    }
if (index == 257) {
     return 605;
    }
if (index == 258) {
     return 689;
    }
if (index == 259) {
     return 642;
    }
if (index == 260) {
     return 694;
    }
if (index == 261) {
     return 729;
    }
if (index == 262) {
     return 684;
    }
if (index == 263) {
     return 635;
    }
if (index == 264) {
     return 695;
    }
if (index == 265) {
     return 612;
    }
if (index == 266) {
     return 994;
    }
if (index == 267) {
     return 729;
    }
if (index == 268) {
     return 679;
    }
if (index == 269) {
     return 610;
    }
if (index == 270) {
     return 733;
    }
if (index == 271) {
     return 611;
    }
if (index == 272) {
     return 946;
    }
if (index == 273) {
     return 729;
    }
if (index == 274) {
     return 720;
    }
if (index == 275) {
     return 631;
    }
if (index == 276) {
     return 689;
    }
if (index == 277) {
     return 651;
    }
if (index == 278) {
     return 922;
    }
if (index == 279) {
     return 676;
    }
if (index == 280) {
     return 618;
    }
if (index == 281) {
     return 651;
    }
if (index == 282) {
     return 663;
    }
if (index == 283) {
     return 702;
    }
if (index == 284) {
     return 1015;
    }
if (index == 285) {
     return 682;
    }
if (index == 286) {
     return 639;
    }
if (index == 287) {
     return 705;
    }
if (index == 288) {
     return 995;
    }
if (index == 289) {
     return 728;
    }
if (index == 290) {
     return 659;
    }
if (index == 291) {
     return 713;
    }
if (index == 292) {
     return 706;
    }
if (index == 293) {
     return 694;
    }
if (index == 294) {
     return 665;
    }
if (index == 295) {
     return 700;
    }
if (index == 296) {
     return 672;
    }
if (index == 297) {
     return 728;
    }
if (index == 298) {
     return 694;
    }
if (index == 299) {
     return 687;
    }
if (index == 300) {
     return 737;
    }
if (index == 301) {
     return 690;
    }
if (index == 302) {
     return 635;
    }
if (index == 303) {
     return 697;
    }
if (index == 304) {
     return 687;
    }
if (index == 305) {
     return 706;
    }
if (index == 306) {
     return 979;
    }
if (index == 307) {
     return 728;
    }
if (index == 308) {
     return 648;
    }
if (index == 309) {
     return 716;
    }
if (index == 310) {
     return 757;
    }
if (index == 311) {
     return 705;
    }
if (index == 312) {
     return 1021;
    }
if (index == 313) {
     return 747;
    }
if (index == 314) {
     return 707;
    }
if (index == 315) {
     return 720;
    }
if (index == 316) {
     return 772;
    }
if (index == 317) {
     return 695;
    }
if (index == 318) {
     return 940;
    }
if (index == 319) {
     return 747;
    }
if (index == 320) {
     return 721;
    }
if (index == 321) {
     return 709;
    }
if (index == 322) {
     return 768;
    }
if (index == 323) {
     return 711;
    }
if (index == 324) {
     return 702;
    }
if (index == 325) {
     return 734;
    }
if (index == 326) {
     return 747;
    }
if (index == 327) {
     return 715;
    }
if (index == 328) {
     return 752;
    }
if (index == 329) {
     return 723;
    }
if (index == 330) {
     return 931;
    }
if (index == 331) {
     return 728;
    }
if (index == 332) {
     return 733;
    }
if (index == 333) {
     return 701;
    }
if (index == 334) {
     return 1059;
    }
if (index == 335) {
     return 747;
    }
if (index == 336) {
     return 731;
    }
if (index == 337) {
     return 773;
    }
if (index == 338) {
     return 752;
    }
if (index == 339) {
     return 766;
    }
if (index == 340) {
     return 1042;
    }
if (index == 341) {
     return 747;
    }
if (index == 342) {
     return 696;
    }
if (index == 343) {
     return 725;
    }
if (index == 344) {
     return 743;
    }
if (index == 345) {
     return 696;
    }
if (index == 346) {
     return 742;
    }
if (index == 347) {
     return 714;
    }
if (index == 348) {
     return 721;
    }
if (index == 349) {
     return 699;
    }
if (index == 350) {
     return 734;
    }
if (index == 351) {
     return 691;
    }
if (index == 352) {
     return 742;
    }
if (index == 353) {
     return 690;
    }
if (index == 354) {
     return 733;
    }
if (index == 355) {
     return 678;
    }
if (index == 356) {
     return 711;
    }
if (index == 357) {
     return 640;
    }
if (index == 358) {
     return 712;
    }
if (index == 359) {
     return 764;
    }
if (index == 360) {
     return 807;
    }
if (index == 361) {
     return 726;
    }
if (index == 362) {
     return 747;
    }
if (index == 363) {
     return 791;
    }
if (index > 363) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1269;
    }
if (index == 1) {
     return 1243;
    }
if (index == 2) {
     return 1260;
    }
if (index == 3) {
     return 1260;
    }
if (index == 4) {
     return 1234;
    }
if (index == 5) {
     return 1251;
    }
if (index == 6) {
     return 1204;
    }
if (index == 7) {
     return 1215;
    }
if (index == 8) {
     return 1276;
    }
if (index == 9) {
     return 1234;
    }
if (index == 10) {
     return 1234;
    }
if (index == 11) {
     return 1244;
    }
if (index == 12) {
     return 1234;
    }
if (index == 13) {
     return 1266;
    }
if (index == 14) {
     return 1244;
    }
if (index == 15) {
     return 1252;
    }
if (index == 16) {
     return 1251;
    }
if (index == 17) {
     return 1154;
    }
if (index == 18) {
     return 1250;
    }
if (index == 19) {
     return 1232;
    }
if (index == 20) {
     return 1241;
    }
if (index == 21) {
     return 1234;
    }
if (index == 22) {
     return 1241;
    }
if (index == 23) {
     return 1238;
    }
if (index == 24) {
     return 773;
    }
if (index == 25) {
     return 1216;
    }
if (index == 26) {
     return 1243;
    }
if (index == 27) {
     return 1245;
    }
if (index == 28) {
     return 1234;
    }
if (index == 29) {
     return 1236;
    }
if (index == 30) {
     return 1222;
    }
if (index == 31) {
     return 1186;
    }
if (index == 32) {
     return 1263;
    }
if (index == 33) {
     return 1246;
    }
if (index == 34) {
     return 1230;
    }
if (index == 35) {
     return 1250;
    }
if (index == 36) {
     return 1243;
    }
if (index == 37) {
     return 1237;
    }
if (index == 38) {
     return 1217;
    }
if (index == 39) {
     return 1184;
    }
if (index == 40) {
     return 1259;
    }
if (index == 41) {
     return 1239;
    }
if (index == 42) {
     return 732;
    }
if (index == 43) {
     return 1180;
    }
if (index == 44) {
     return 1275;
    }
if (index == 45) {
     return 1260;
    }
if (index == 46) {
     return 1252;
    }
if (index == 47) {
     return 1256;
    }
if (index == 48) {
     return 1255;
    }
if (index == 49) {
     return 1229;
    }
if (index == 50) {
     return 739;
    }
if (index == 51) {
     return 1216;
    }
if (index == 52) {
     return 1215;
    }
if (index == 53) {
     return 1216;
    }
if (index == 54) {
     return 1241;
    }
if (index == 55) {
     return 1239;
    }
if (index == 56) {
     return 1190;
    }
if (index == 57) {
     return 1216;
    }
if (index == 58) {
     return 1216;
    }
if (index == 59) {
     return 1225;
    }
if (index == 60) {
     return 1172;
    }
if (index == 61) {
     return 1216;
    }
if (index == 62) {
     return 1216;
    }
if (index == 63) {
     return 1224;
    }
if (index == 64) {
     return 1209;
    }
if (index == 65) {
     return 1201;
    }
if (index == 66) {
     return 1221;
    }
if (index == 67) {
     return 1213;
    }
if (index == 68) {
     return 758;
    }
if (index == 69) {
     return 1187;
    }
if (index == 70) {
     return 1220;
    }
if (index == 71) {
     return 1235;
    }
if (index == 72) {
     return 750;
    }
if (index == 73) {
     return 1175;
    }
if (index == 74) {
     return 1213;
    }
if (index == 75) {
     return 1233;
    }
if (index == 76) {
     return 757;
    }
if (index == 77) {
     return 1171;
    }
if (index == 78) {
     return 1215;
    }
if (index == 79) {
     return 1230;
    }
if (index == 80) {
     return 771;
    }
if (index == 81) {
     return 1185;
    }
if (index == 82) {
     return 1225;
    }
if (index == 83) {
     return 1226;
    }
if (index == 84) {
     return 759;
    }
if (index == 85) {
     return 1215;
    }
if (index == 86) {
     return 1215;
    }
if (index == 87) {
     return 1216;
    }
if (index == 88) {
     return 755;
    }
if (index == 89) {
     return 1216;
    }
if (index == 90) {
     return 1230;
    }
if (index == 91) {
     return 1247;
    }
if (index == 92) {
     return 1183;
    }
if (index == 93) {
     return 1193;
    }
if (index == 94) {
     return 1224;
    }
if (index == 95) {
     return 1234;
    }
if (index == 96) {
     return 1216;
    }
if (index == 97) {
     return 1228;
    }
if (index == 98) {
     return 1224;
    }
if (index == 99) {
     return 1232;
    }
if (index == 100) {
     return 760;
    }
if (index == 101) {
     return 1216;
    }
if (index == 102) {
     return 1215;
    }
if (index == 103) {
     return 1216;
    }
if (index == 104) {
     return 1220;
    }
if (index == 105) {
     return 1216;
    }
if (index == 106) {
     return 755;
    }
if (index == 107) {
     return 1216;
    }
if (index == 108) {
     return 1215;
    }
if (index == 109) {
     return 1213;
    }
if (index == 110) {
     return 1232;
    }
if (index == 111) {
     return 1216;
    }
if (index == 112) {
     return 755;
    }
if (index == 113) {
     return 1175;
    }
if (index == 114) {
     return 1215;
    }
if (index == 115) {
     return 1216;
    }
if (index == 116) {
     return 1220;
    }
if (index == 117) {
     return 1216;
    }
if (index == 118) {
     return 1194;
    }
if (index == 119) {
     return 1216;
    }
if (index == 120) {
     return 1216;
    }
if (index == 121) {
     return 1215;
    }
if (index == 122) {
     return 1228;
    }
if (index == 123) {
     return 1223;
    }
if (index == 124) {
     return 1188;
    }
if (index == 125) {
     return 1216;
    }
if (index == 126) {
     return 1220;
    }
if (index == 127) {
     return 1234;
    }
if (index == 128) {
     return 755;
    }
if (index == 129) {
     return 1216;
    }
if (index == 130) {
     return 1223;
    }
if (index == 131) {
     return 1227;
    }
if (index == 132) {
     return 755;
    }
if (index == 133) {
     return 1216;
    }
if (index == 134) {
     return 1215;
    }
if (index == 135) {
     return 1226;
    }
if (index == 136) {
     return 1229;
    }
if (index == 137) {
     return 1225;
    }
if (index == 138) {
     return 743;
    }
if (index == 139) {
     return 1201;
    }
if (index == 140) {
     return 1231;
    }
if (index == 141) {
     return 1223;
    }
if (index == 142) {
     return 754;
    }
if (index == 143) {
     return 1216;
    }
if (index == 144) {
     return 1224;
    }
if (index == 145) {
     return 1215;
    }
if (index == 146) {
     return 741;
    }
if (index == 147) {
     return 1216;
    }
if (index == 148) {
     return 1216;
    }
if (index == 149) {
     return 1221;
    }
if (index == 150) {
     return 743;
    }
if (index == 151) {
     return 1216;
    }
if (index == 152) {
     return 1221;
    }
if (index == 153) {
     return 1239;
    }
if (index == 154) {
     return 1157;
    }
if (index == 155) {
     return 1199;
    }
if (index == 156) {
     return 1221;
    }
if (index == 157) {
     return 1223;
    }
if (index == 158) {
     return 1149;
    }
if (index == 159) {
     return 1216;
    }
if (index == 160) {
     return 1225;
    }
if (index == 161) {
     return 1223;
    }
if (index == 162) {
     return 1216;
    }
if (index == 163) {
     return 1232;
    }
if (index == 164) {
     return 1234;
    }
if (index == 165) {
     return 1234;
    }
if (index == 166) {
     return 710;
    }
if (index == 167) {
     return 1159;
    }
if (index == 168) {
     return 1228;
    }
if (index == 169) {
     return 1216;
    }
if (index == 170) {
     return 1154;
    }
if (index == 171) {
     return 1181;
    }
if (index == 172) {
     return 1221;
    }
if (index == 173) {
     return 1215;
    }
if (index == 174) {
     return 1197;
    }
if (index == 175) {
     return 1216;
    }
if (index == 176) {
     return 1217;
    }
if (index == 177) {
     return 1213;
    }
if (index == 178) {
     return 1221;
    }
if (index == 179) {
     return 1221;
    }
if (index == 180) {
     return 720;
    }
if (index == 181) {
     return 1216;
    }
if (index == 182) {
     return 1230;
    }
if (index == 183) {
     return 1234;
    }
if (index == 184) {
     return 728;
    }
if (index == 185) {
     return 1216;
    }
if (index == 186) {
     return 1230;
    }
if (index == 187) {
     return 1229;
    }
if (index == 188) {
     return 1216;
    }
if (index == 189) {
     return 1216;
    }
if (index == 190) {
     return 1231;
    }
if (index == 191) {
     return 1223;
    }
if (index == 192) {
     return 1216;
    }
if (index == 193) {
     return 1227;
    }
if (index == 194) {
     return 729;
    }
if (index == 195) {
     return 1216;
    }
if (index == 196) {
     return 1233;
    }
if (index == 197) {
     return 1229;
    }
if (index == 198) {
     return 1225;
    }
if (index == 199) {
     return 1233;
    }
if (index == 200) {
     return 737;
    }
if (index == 201) {
     return 1216;
    }
if (index == 202) {
     return 1219;
    }
if (index == 203) {
     return 1238;
    }
if (index == 204) {
     return 1117;
    }
if (index == 205) {
     return 1216;
    }
if (index == 206) {
     return 1217;
    }
if (index == 207) {
     return 1220;
    }
if (index == 208) {
     return 740;
    }
if (index == 209) {
     return 1216;
    }
if (index == 210) {
     return 1223;
    }
if (index == 211) {
     return 1211;
    }
if (index == 212) {
     return 1216;
    }
if (index == 213) {
     return 1225;
    }
if (index == 214) {
     return 729;
    }
if (index == 215) {
     return 1216;
    }
if (index == 216) {
     return 1216;
    }
if (index == 217) {
     return 1236;
    }
if (index == 218) {
     return 715;
    }
if (index == 219) {
     return 1216;
    }
if (index == 220) {
     return 1215;
    }
if (index == 221) {
     return 1231;
    }
if (index == 222) {
     return 732;
    }
if (index == 223) {
     return 1216;
    }
if (index == 224) {
     return 1224;
    }
if (index == 225) {
     return 1216;
    }
if (index == 226) {
     return 1213;
    }
if (index == 227) {
     return 1215;
    }
if (index == 228) {
     return 1216;
    }
if (index == 229) {
     return 1205;
    }
if (index == 230) {
     return 1101;
    }
if (index == 231) {
     return 1199;
    }
if (index == 232) {
     return 1199;
    }
if (index == 233) {
     return 1200;
    }
if (index == 234) {
     return 1208;
    }
if (index == 235) {
     return 1199;
    }
if (index == 236) {
     return 720;
    }
if (index == 237) {
     return 1199;
    }
if (index == 238) {
     return 1208;
    }
if (index == 239) {
     return 1198;
    }
if (index == 240) {
     return 1208;
    }
if (index == 241) {
     return 1209;
    }
if (index == 242) {
     return 1075;
    }
if (index == 243) {
     return 1199;
    }
if (index == 244) {
     return 1214;
    }
if (index == 245) {
     return 1216;
    }
if (index == 246) {
     return 1216;
    }
if (index == 247) {
     return 1198;
    }
if (index == 248) {
     return 715;
    }
if (index == 249) {
     return 1199;
    }
if (index == 250) {
     return 1206;
    }
if (index == 251) {
     return 1202;
    }
if (index == 252) {
     return 1203;
    }
if (index == 253) {
     return 1198;
    }
if (index == 254) {
     return 721;
    }
if (index == 255) {
     return 1199;
    }
if (index == 256) {
     return 1203;
    }
if (index == 257) {
     return 1199;
    }
if (index == 258) {
     return 1199;
    }
if (index == 259) {
     return 1206;
    }
if (index == 260) {
     return 1127;
    }
if (index == 261) {
     return 1199;
    }
if (index == 262) {
     return 1202;
    }
if (index == 263) {
     return 1204;
    }
if (index == 264) {
     return 1204;
    }
if (index == 265) {
     return 1205;
    }
if (index == 266) {
     return 716;
    }
if (index == 267) {
     return 1199;
    }
if (index == 268) {
     return 1204;
    }
if (index == 269) {
     return 1211;
    }
if (index == 270) {
     return 1213;
    }
if (index == 271) {
     return 1199;
    }
if (index == 272) {
     return 706;
    }
if (index == 273) {
     return 1199;
    }
if (index == 274) {
     return 1196;
    }
if (index == 275) {
     return 1198;
    }
if (index == 276) {
     return 1200;
    }
if (index == 277) {
     return 1199;
    }
if (index == 278) {
     return 723;
    }
if (index == 279) {
     return 1188;
    }
if (index == 280) {
     return 1205;
    }
if (index == 281) {
     return 1205;
    }
if (index == 282) {
     return 1214;
    }
if (index == 283) {
     return 1214;
    }
if (index == 284) {
     return 731;
    }
if (index == 285) {
     return 1174;
    }
if (index == 286) {
     return 1196;
    }
if (index == 287) {
     return 1198;
    }
if (index == 288) {
     return 737;
    }
if (index == 289) {
     return 1199;
    }
if (index == 290) {
     return 1204;
    }
if (index == 291) {
     return 1200;
    }
if (index == 292) {
     return 1184;
    }
if (index == 293) {
     return 1186;
    }
if (index == 294) {
     return 1198;
    }
if (index == 295) {
     return 1208;
    }
if (index == 296) {
     return 1108;
    }
if (index == 297) {
     return 1199;
    }
if (index == 298) {
     return 1209;
    }
if (index == 299) {
     return 1200;
    }
if (index == 300) {
     return 1143;
    }
if (index == 301) {
     return 1198;
    }
if (index == 302) {
     return 1199;
    }
if (index == 303) {
     return 1198;
    }
if (index == 304) {
     return 1205;
    }
if (index == 305) {
     return 1207;
    }
if (index == 306) {
     return 724;
    }
if (index == 307) {
     return 1199;
    }
if (index == 308) {
     return 1210;
    }
if (index == 309) {
     return 1209;
    }
if (index == 310) {
     return 1214;
    }
if (index == 311) {
     return 1198;
    }
if (index == 312) {
     return 744;
    }
if (index == 313) {
     return 1198;
    }
if (index == 314) {
     return 1204;
    }
if (index == 315) {
     return 1205;
    }
if (index == 316) {
     return 1216;
    }
if (index == 317) {
     return 1198;
    }
if (index == 318) {
     return 736;
    }
if (index == 319) {
     return 1198;
    }
if (index == 320) {
     return 1211;
    }
if (index == 321) {
     return 1208;
    }
if (index == 322) {
     return 1215;
    }
if (index == 323) {
     return 1198;
    }
if (index == 324) {
     return 1158;
    }
if (index == 325) {
     return 1193;
    }
if (index == 326) {
     return 1222;
    }
if (index == 327) {
     return 1202;
    }
if (index == 328) {
     return 1208;
    }
if (index == 329) {
     return 1208;
    }
if (index == 330) {
     return 710;
    }
if (index == 331) {
     return 1169;
    }
if (index == 332) {
     return 1197;
    }
if (index == 333) {
     return 1209;
    }
if (index == 334) {
     return 765;
    }
if (index == 335) {
     return 1198;
    }
if (index == 336) {
     return 1198;
    }
if (index == 337) {
     return 1217;
    }
if (index == 338) {
     return 1206;
    }
if (index == 339) {
     return 1225;
    }
if (index == 340) {
     return 770;
    }
if (index == 341) {
     return 1198;
    }
if (index == 342) {
     return 1213;
    }
if (index == 343) {
     return 1213;
    }
if (index == 344) {
     return 1205;
    }
if (index == 345) {
     return 1213;
    }
if (index == 346) {
     return 1211;
    }
if (index == 347) {
     return 1223;
    }
if (index == 348) {
     return 1198;
    }
if (index == 349) {
     return 1218;
    }
if (index == 350) {
     return 1195;
    }
if (index == 351) {
     return 1209;
    }
if (index == 352) {
     return 1208;
    }
if (index == 353) {
     return 1206;
    }
if (index == 354) {
     return 1209;
    }
if (index == 355) {
     return 1205;
    }
if (index == 356) {
     return 1195;
    }
if (index == 357) {
     return 1197;
    }
if (index == 358) {
     return 1200;
    }
if (index == 359) {
     return 1207;
    }
if (index == 360) {
     return 1218;
    }
if (index == 361) {
     return 1206;
    }
if (index == 362) {
     return 1199;
    }
if (index == 363) {
     return 1295;
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:306_' + imgStr + '/digitalImage';
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
br.numLeafs = 364;

// Book title and the URL used for the book title link
br.bookTitle= "The romantic East : Burma, Assam, and Kashmir";
br.bookAuthor= "Del Mar, Walter";
br.bookPub= "London: A. and C. Black, 1906";
br.bookKeyword= "Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assam (India)--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jammu and Kashmir (India)--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:306';

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
