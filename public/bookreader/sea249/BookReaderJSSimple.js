//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 732;
    }
if (index == 1) {
     return 685;
    }
if (index == 2) {
     return 694;
    }
if (index == 3) {
     return 685;
    }
if (index == 4) {
     return 694;
    }
if (index == 5) {
     return 685;
    }
if (index == 6) {
     return 667;
    }
if (index == 7) {
     return 685;
    }
if (index == 8) {
     return 677;
    }
if (index == 9) {
     return 668;
    }
if (index == 10) {
     return 653;
    }
if (index == 11) {
     return 689;
    }
if (index == 12) {
     return 650;
    }
if (index == 13) {
     return 683;
    }
if (index == 14) {
     return 650;
    }
if (index == 15) {
     return 668;
    }
if (index == 16) {
     return 650;
    }
if (index == 17) {
     return 668;
    }
if (index == 18) {
     return 663;
    }
if (index == 19) {
     return 668;
    }
if (index == 20) {
     return 650;
    }
if (index == 21) {
     return 668;
    }
if (index == 22) {
     return 668;
    }
if (index == 23) {
     return 690;
    }
if (index == 24) {
     return 670;
    }
if (index == 25) {
     return 689;
    }
if (index == 26) {
     return 661;
    }
if (index == 27) {
     return 676;
    }
if (index == 28) {
     return 1030;
    }
if (index == 29) {
     return 668;
    }
if (index == 30) {
     return 668;
    }
if (index == 31) {
     return 695;
    }
if (index == 32) {
     return 650;
    }
if (index == 33) {
     return 720;
    }
if (index == 34) {
     return 632;
    }
if (index == 35) {
     return 975;
    }
if (index == 36) {
     return 632;
    }
if (index == 37) {
     return 714;
    }
if (index == 38) {
     return 632;
    }
if (index == 39) {
     return 715;
    }
if (index == 40) {
     return 652;
    }
if (index == 41) {
     return 659;
    }
if (index == 42) {
     return 632;
    }
if (index == 43) {
     return 659;
    }
if (index == 44) {
     return 632;
    }
if (index == 45) {
     return 641;
    }
if (index == 46) {
     return 632;
    }
if (index == 47) {
     return 641;
    }
if (index == 48) {
     return 632;
    }
if (index == 49) {
     return 647;
    }
if (index == 50) {
     return 649;
    }
if (index == 51) {
     return 663;
    }
if (index == 52) {
     return 615;
    }
if (index == 53) {
     return 1014;
    }
if (index == 54) {
     return 615;
    }
if (index == 55) {
     return 646;
    }
if (index == 56) {
     return 643;
    }
if (index == 57) {
     return 642;
    }
if (index == 58) {
     return 632;
    }
if (index == 59) {
     return 632;
    }
if (index == 60) {
     return 1007;
    }
if (index == 61) {
     return 623;
    }
if (index == 62) {
     return 648;
    }
if (index == 63) {
     return 633;
    }
if (index == 64) {
     return 664;
    }
if (index == 65) {
     return 637;
    }
if (index == 66) {
     return 670;
    }
if (index == 67) {
     return 636;
    }
if (index == 68) {
     return 665;
    }
if (index == 69) {
     return 629;
    }
if (index == 70) {
     return 645;
    }
if (index == 71) {
     return 623;
    }
if (index == 72) {
     return 962;
    }
if (index == 73) {
     return 623;
    }
if (index == 74) {
     return 712;
    }
if (index == 75) {
     return 623;
    }
if (index == 76) {
     return 721;
    }
if (index == 77) {
     return 629;
    }
if (index == 78) {
     return 725;
    }
if (index == 79) {
     return 628;
    }
if (index == 80) {
     return 729;
    }
if (index == 81) {
     return 623;
    }
if (index == 82) {
     return 726;
    }
if (index == 83) {
     return 623;
    }
if (index == 84) {
     return 740;
    }
if (index == 85) {
     return 623;
    }
if (index == 86) {
     return 705;
    }
if (index == 87) {
     return 623;
    }
if (index == 88) {
     return 708;
    }
if (index == 89) {
     return 623;
    }
if (index == 90) {
     return 686;
    }
if (index == 91) {
     return 718;
    }
if (index == 92) {
     return 689;
    }
if (index == 93) {
     return 629;
    }
if (index == 94) {
     return 1002;
    }
if (index == 95) {
     return 623;
    }
if (index == 96) {
     return 686;
    }
if (index == 97) {
     return 623;
    }
if (index == 98) {
     return 686;
    }
if (index == 99) {
     return 623;
    }
if (index == 100) {
     return 686;
    }
if (index == 101) {
     return 637;
    }
if (index == 102) {
     return 686;
    }
if (index == 103) {
     return 633;
    }
if (index == 104) {
     return 707;
    }
if (index == 105) {
     return 639;
    }
if (index == 106) {
     return 686;
    }
if (index == 107) {
     return 636;
    }
if (index == 108) {
     return 686;
    }
if (index == 109) {
     return 635;
    }
if (index == 110) {
     return 1005;
    }
if (index == 111) {
     return 623;
    }
if (index == 112) {
     return 725;
    }
if (index == 113) {
     return 628;
    }
if (index == 114) {
     return 719;
    }
if (index == 115) {
     return 623;
    }
if (index == 116) {
     return 712;
    }
if (index == 117) {
     return 1016;
    }
if (index == 118) {
     return 684;
    }
if (index == 119) {
     return 649;
    }
if (index == 120) {
     return 686;
    }
if (index == 121) {
     return 656;
    }
if (index == 122) {
     return 688;
    }
if (index == 123) {
     return 658;
    }
if (index == 124) {
     return 685;
    }
if (index == 125) {
     return 668;
    }
if (index == 126) {
     return 686;
    }
if (index == 127) {
     return 661;
    }
if (index == 128) {
     return 685;
    }
if (index == 129) {
     return 672;
    }
if (index == 130) {
     return 676;
    }
if (index == 131) {
     return 649;
    }
if (index == 132) {
     return 676;
    }
if (index == 133) {
     return 654;
    }
if (index == 134) {
     return 676;
    }
if (index == 135) {
     return 665;
    }
if (index == 136) {
     return 695;
    }
if (index == 137) {
     return 667;
    }
if (index == 138) {
     return 683;
    }
if (index == 139) {
     return 666;
    }
if (index == 140) {
     return 676;
    }
if (index == 141) {
     return 649;
    }
if (index == 142) {
     return 676;
    }
if (index == 143) {
     return 649;
    }
if (index == 144) {
     return 676;
    }
if (index == 145) {
     return 662;
    }
if (index == 146) {
     return 676;
    }
if (index == 147) {
     return 657;
    }
if (index == 148) {
     return 1007;
    }
if (index == 149) {
     return 650;
    }
if (index == 150) {
     return 668;
    }
if (index == 151) {
     return 671;
    }
if (index == 152) {
     return 677;
    }
if (index == 153) {
     return 655;
    }
if (index == 154) {
     return 668;
    }
if (index == 155) {
     return 642;
    }
if (index == 156) {
     return 677;
    }
if (index == 157) {
     return 656;
    }
if (index == 158) {
     return 650;
    }
if (index == 159) {
     return 653;
    }
if (index == 160) {
     return 650;
    }
if (index == 161) {
     return 650;
    }
if (index == 162) {
     return 650;
    }
if (index == 163) {
     return 650;
    }
if (index == 164) {
     return 650;
    }
if (index == 165) {
     return 650;
    }
if (index == 166) {
     return 650;
    }
if (index == 167) {
     return 657;
    }
if (index == 168) {
     return 664;
    }
if (index == 169) {
     return 661;
    }
if (index == 170) {
     return 670;
    }
if (index == 171) {
     return 642;
    }
if (index == 172) {
     return 663;
    }
if (index == 173) {
     return 645;
    }
if (index == 174) {
     return 668;
    }
if (index == 175) {
     return 640;
    }
if (index == 176) {
     return 662;
    }
if (index == 177) {
     return 632;
    }
if (index == 178) {
     return 659;
    }
if (index == 179) {
     return 632;
    }
if (index == 180) {
     return 650;
    }
if (index == 181) {
     return 632;
    }
if (index == 182) {
     return 663;
    }
if (index == 183) {
     return 632;
    }
if (index == 184) {
     return 657;
    }
if (index == 185) {
     return 640;
    }
if (index == 186) {
     return 665;
    }
if (index == 187) {
     return 649;
    }
if (index == 188) {
     return 668;
    }
if (index == 189) {
     return 632;
    }
if (index == 190) {
     return 650;
    }
if (index == 191) {
     return 632;
    }
if (index == 192) {
     return 650;
    }
if (index == 193) {
     return 632;
    }
if (index == 194) {
     return 650;
    }
if (index == 195) {
     return 632;
    }
if (index == 196) {
     return 666;
    }
if (index == 197) {
     return 632;
    }
if (index == 198) {
     return 667;
    }
if (index == 199) {
     return 636;
    }
if (index == 200) {
     return 670;
    }
if (index == 201) {
     return 639;
    }
if (index == 202) {
     return 650;
    }
if (index == 203) {
     return 632;
    }
if (index == 204) {
     return 663;
    }
if (index == 205) {
     return 659;
    }
if (index == 206) {
     return 667;
    }
if (index == 207) {
     return 980;
    }
if (index == 208) {
     return 659;
    }
if (index == 209) {
     return 686;
    }
if (index == 210) {
     return 650;
    }
if (index == 211) {
     return 686;
    }
if (index == 212) {
     return 650;
    }
if (index == 213) {
     return 668;
    }
if (index == 214) {
     return 653;
    }
if (index == 215) {
     return 680;
    }
if (index == 216) {
     return 657;
    }
if (index == 217) {
     return 668;
    }
if (index == 218) {
     return 669;
    }
if (index == 219) {
     return 668;
    }
if (index == 220) {
     return 656;
    }
if (index == 221) {
     return 691;
    }
if (index == 222) {
     return 655;
    }
if (index == 223) {
     return 690;
    }
if (index == 224) {
     return 650;
    }
if (index == 225) {
     return 986;
    }
if (index == 226) {
     return 650;
    }
if (index == 227) {
     return 704;
    }
if (index == 228) {
     return 650;
    }
if (index == 229) {
     return 987;
    }
if (index == 230) {
     return 650;
    }
if (index == 231) {
     return 690;
    }
if (index == 232) {
     return 650;
    }
if (index == 233) {
     return 650;
    }
if (index == 234) {
     return 650;
    }
if (index == 235) {
     return 658;
    }
if (index == 236) {
     return 655;
    }
if (index == 237) {
     return 641;
    }
if (index == 238) {
     return 650;
    }
if (index == 239) {
     return 641;
    }
if (index == 240) {
     return 650;
    }
if (index == 241) {
     return 659;
    }
if (index == 242) {
     return 659;
    }
if (index == 243) {
     return 650;
    }
if (index == 244) {
     return 656;
    }
if (index == 245) {
     return 664;
    }
if (index == 246) {
     return 652;
    }
if (index == 247) {
     return 672;
    }
if (index == 248) {
     return 650;
    }
if (index == 249) {
     return 663;
    }
if (index == 250) {
     return 660;
    }
if (index == 251) {
     return 660;
    }
if (index == 252) {
     return 658;
    }
if (index == 253) {
     return 664;
    }
if (index == 254) {
     return 657;
    }
if (index == 255) {
     return 653;
    }
if (index == 256) {
     return 650;
    }
if (index == 257) {
     return 660;
    }
if (index == 258) {
     return 654;
    }
if (index == 259) {
     return 666;
    }
if (index == 260) {
     return 656;
    }
if (index == 261) {
     return 667;
    }
if (index == 262) {
     return 666;
    }
if (index == 263) {
     return 668;
    }
if (index == 264) {
     return 664;
    }
if (index == 265) {
     return 641;
    }
if (index == 266) {
     return 669;
    }
if (index == 267) {
     return 641;
    }
if (index == 268) {
     return 670;
    }
if (index == 269) {
     return 698;
    }
if (index == 270) {
     return 650;
    }
if (index == 271) {
     return 987;
    }
if (index == 272) {
     return 683;
    }
if (index == 273) {
     return 676;
    }
if (index == 274) {
     return 972;
    }
if (index == 275) {
     return 676;
    }
if (index == 276) {
     return 665;
    }
if (index == 277) {
     return 676;
    }
if (index == 278) {
     return 650;
    }
if (index == 279) {
     return 984;
    }
if (index == 280) {
     return 666;
    }
if (index == 281) {
     return 676;
    }
if (index == 282) {
     return 660;
    }
if (index == 283) {
     return 676;
    }
if (index == 284) {
     return 667;
    }
if (index == 285) {
     return 682;
    }
if (index == 286) {
     return 666;
    }
if (index == 287) {
     return 676;
    }
if (index == 288) {
     return 659;
    }
if (index == 289) {
     return 676;
    }
if (index == 290) {
     return 658;
    }
if (index == 291) {
     return 676;
    }
if (index == 292) {
     return 650;
    }
if (index == 293) {
     return 696;
    }
if (index == 294) {
     return 650;
    }
if (index == 295) {
     return 676;
    }
if (index == 296) {
     return 682;
    }
if (index == 297) {
     return 1047;
    }
if (index == 298) {
     return 1060;
    }
if (index == 299) {
     return 662;
    }
if (index == 300) {
     return 650;
    }
if (index == 301) {
     return 650;
    }
if (index == 302) {
     return 650;
    }
if (index == 303) {
     return 703;
    }
if (index > 303) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1099;
    }
if (index == 1) {
     return 1042;
    }
if (index == 2) {
     return 1051;
    }
if (index == 3) {
     return 1042;
    }
if (index == 4) {
     return 1051;
    }
if (index == 5) {
     return 1042;
    }
if (index == 6) {
     return 1029;
    }
if (index == 7) {
     return 1042;
    }
if (index == 8) {
     return 1051;
    }
if (index == 9) {
     return 1042;
    }
if (index == 10) {
     return 1053;
    }
if (index == 11) {
     return 1055;
    }
if (index == 12) {
     return 1051;
    }
if (index == 13) {
     return 1051;
    }
if (index == 14) {
     return 1051;
    }
if (index == 15) {
     return 1042;
    }
if (index == 16) {
     return 1051;
    }
if (index == 17) {
     return 1042;
    }
if (index == 18) {
     return 1059;
    }
if (index == 19) {
     return 1042;
    }
if (index == 20) {
     return 1051;
    }
if (index == 21) {
     return 1042;
    }
if (index == 22) {
     return 1062;
    }
if (index == 23) {
     return 1056;
    }
if (index == 24) {
     return 1054;
    }
if (index == 25) {
     return 1055;
    }
if (index == 26) {
     return 1049;
    }
if (index == 27) {
     return 1047;
    }
if (index == 28) {
     return 645;
    }
if (index == 29) {
     return 1042;
    }
if (index == 30) {
     return 1053;
    }
if (index == 31) {
     return 1059;
    }
if (index == 32) {
     return 1042;
    }
if (index == 33) {
     return 1059;
    }
if (index == 34) {
     return 1042;
    }
if (index == 35) {
     return 677;
    }
if (index == 36) {
     return 1007;
    }
if (index == 37) {
     return 1029;
    }
if (index == 38) {
     return 1007;
    }
if (index == 39) {
     return 1030;
    }
if (index == 40) {
     return 1019;
    }
if (index == 41) {
     return 1016;
    }
if (index == 42) {
     return 1007;
    }
if (index == 43) {
     return 1016;
    }
if (index == 44) {
     return 1007;
    }
if (index == 45) {
     return 1016;
    }
if (index == 46) {
     return 1007;
    }
if (index == 47) {
     return 1016;
    }
if (index == 48) {
     return 1007;
    }
if (index == 49) {
     return 1019;
    }
if (index == 50) {
     return 1027;
    }
if (index == 51) {
     return 1030;
    }
if (index == 52) {
     return 1007;
    }
if (index == 53) {
     return 678;
    }
if (index == 54) {
     return 1008;
    }
if (index == 55) {
     return 1007;
    }
if (index == 56) {
     return 1014;
    }
if (index == 57) {
     return 1004;
    }
if (index == 58) {
     return 1007;
    }
if (index == 59) {
     return 998;
    }
if (index == 60) {
     return 632;
    }
if (index == 61) {
     return 998;
    }
if (index == 62) {
     return 1017;
    }
if (index == 63) {
     return 1004;
    }
if (index == 64) {
     return 1026;
    }
if (index == 65) {
     return 1007;
    }
if (index == 66) {
     return 1030;
    }
if (index == 67) {
     return 1006;
    }
if (index == 68) {
     return 1027;
    }
if (index == 69) {
     return 1002;
    }
if (index == 70) {
     return 1015;
    }
if (index == 71) {
     return 998;
    }
if (index == 72) {
     return 674;
    }
if (index == 73) {
     return 998;
    }
if (index == 74) {
     return 1007;
    }
if (index == 75) {
     return 998;
    }
if (index == 76) {
     return 1013;
    }
if (index == 77) {
     return 1002;
    }
if (index == 78) {
     return 1016;
    }
if (index == 79) {
     return 1001;
    }
if (index == 80) {
     return 1019;
    }
if (index == 81) {
     return 998;
    }
if (index == 82) {
     return 1017;
    }
if (index == 83) {
     return 998;
    }
if (index == 84) {
     return 1027;
    }
if (index == 85) {
     return 998;
    }
if (index == 86) {
     return 1019;
    }
if (index == 87) {
     return 998;
    }
if (index == 88) {
     return 1022;
    }
if (index == 89) {
     return 998;
    }
if (index == 90) {
     return 1007;
    }
if (index == 91) {
     return 1066;
    }
if (index == 92) {
     return 1046;
    }
if (index == 93) {
     return 1002;
    }
if (index == 94) {
     return 663;
    }
if (index == 95) {
     return 998;
    }
if (index == 96) {
     return 1007;
    }
if (index == 97) {
     return 998;
    }
if (index == 98) {
     return 1007;
    }
if (index == 99) {
     return 998;
    }
if (index == 100) {
     return 1007;
    }
if (index == 101) {
     return 1007;
    }
if (index == 102) {
     return 1007;
    }
if (index == 103) {
     return 1004;
    }
if (index == 104) {
     return 1021;
    }
if (index == 105) {
     return 1008;
    }
if (index == 106) {
     return 1007;
    }
if (index == 107) {
     return 1006;
    }
if (index == 108) {
     return 1007;
    }
if (index == 109) {
     return 1005;
    }
if (index == 110) {
     return 701;
    }
if (index == 111) {
     return 998;
    }
if (index == 112) {
     return 1016;
    }
if (index == 113) {
     return 1001;
    }
if (index == 114) {
     return 1012;
    }
if (index == 115) {
     return 998;
    }
if (index == 116) {
     return 1007;
    }
if (index == 117) {
     return 649;
    }
if (index == 118) {
     return 1012;
    }
if (index == 119) {
     return 1016;
    }
if (index == 120) {
     return 1014;
    }
if (index == 121) {
     return 1021;
    }
if (index == 122) {
     return 1015;
    }
if (index == 123) {
     return 1022;
    }
if (index == 124) {
     return 1013;
    }
if (index == 125) {
     return 1028;
    }
if (index == 126) {
     return 1014;
    }
if (index == 127) {
     return 1023;
    }
if (index == 128) {
     return 1013;
    }
if (index == 129) {
     return 1030;
    }
if (index == 130) {
     return 1007;
    }
if (index == 131) {
     return 1016;
    }
if (index == 132) {
     return 1007;
    }
if (index == 133) {
     return 1019;
    }
if (index == 134) {
     return 1007;
    }
if (index == 135) {
     return 1026;
    }
if (index == 136) {
     return 1019;
    }
if (index == 137) {
     return 1027;
    }
if (index == 138) {
     return 1012;
    }
if (index == 139) {
     return 1027;
    }
if (index == 140) {
     return 1007;
    }
if (index == 141) {
     return 1016;
    }
if (index == 142) {
     return 1007;
    }
if (index == 143) {
     return 1016;
    }
if (index == 144) {
     return 1007;
    }
if (index == 145) {
     return 1023;
    }
if (index == 146) {
     return 1012;
    }
if (index == 147) {
     return 1020;
    }
if (index == 148) {
     return 668;
    }
if (index == 149) {
     return 1016;
    }
if (index == 150) {
     return 1007;
    }
if (index == 151) {
     return 1029;
    }
if (index == 152) {
     return 1013;
    }
if (index == 153) {
     return 1019;
    }
if (index == 154) {
     return 1007;
    }
if (index == 155) {
     return 1014;
    }
if (index == 156) {
     return 1013;
    }
if (index == 157) {
     return 1019;
    }
if (index == 158) {
     return 1007;
    }
if (index == 159) {
     return 1018;
    }
if (index == 160) {
     return 1007;
    }
if (index == 161) {
     return 1016;
    }
if (index == 162) {
     return 1007;
    }
if (index == 163) {
     return 1016;
    }
if (index == 164) {
     return 1007;
    }
if (index == 165) {
     return 1016;
    }
if (index == 166) {
     return 1007;
    }
if (index == 167) {
     return 1020;
    }
if (index == 168) {
     return 1016;
    }
if (index == 169) {
     return 1023;
    }
if (index == 170) {
     return 1019;
    }
if (index == 171) {
     return 1022;
    }
if (index == 172) {
     return 1015;
    }
if (index == 173) {
     return 1024;
    }
if (index == 174) {
     return 1018;
    }
if (index == 175) {
     return 1021;
    }
if (index == 176) {
     return 1014;
    }
if (index == 177) {
     return 1016;
    }
if (index == 178) {
     return 1013;
    }
if (index == 179) {
     return 1016;
    }
if (index == 180) {
     return 1007;
    }
if (index == 181) {
     return 1016;
    }
if (index == 182) {
     return 1015;
    }
if (index == 183) {
     return 1016;
    }
if (index == 184) {
     return 1011;
    }
if (index == 185) {
     return 1021;
    }
if (index == 186) {
     return 1017;
    }
if (index == 187) {
     return 1026;
    }
if (index == 188) {
     return 1018;
    }
if (index == 189) {
     return 1016;
    }
if (index == 190) {
     return 1007;
    }
if (index == 191) {
     return 1016;
    }
if (index == 192) {
     return 1007;
    }
if (index == 193) {
     return 1016;
    }
if (index == 194) {
     return 1007;
    }
if (index == 195) {
     return 1016;
    }
if (index == 196) {
     return 1017;
    }
if (index == 197) {
     return 1016;
    }
if (index == 198) {
     return 1018;
    }
if (index == 199) {
     return 1018;
    }
if (index == 200) {
     return 1020;
    }
if (index == 201) {
     return 1020;
    }
if (index == 202) {
     return 1007;
    }
if (index == 203) {
     return 1016;
    }
if (index == 204) {
     return 1015;
    }
if (index == 205) {
     return 1025;
    }
if (index == 206) {
     return 999;
    }
if (index == 207) {
     return 681;
    }
if (index == 208) {
     return 999;
    }
if (index == 209) {
     return 998;
    }
if (index == 210) {
     return 990;
    }
if (index == 211) {
     return 998;
    }
if (index == 212) {
     return 990;
    }
if (index == 213) {
     return 989;
    }
if (index == 214) {
     return 974;
    }
if (index == 215) {
     return 997;
    }
if (index == 216) {
     return 977;
    }
if (index == 217) {
     return 989;
    }
if (index == 218) {
     return 984;
    }
if (index == 219) {
     return 989;
    }
if (index == 220) {
     return 976;
    }
if (index == 221) {
     return 1005;
    }
if (index == 222) {
     return 975;
    }
if (index == 223) {
     return 1003;
    }
if (index == 224) {
     return 972;
    }
if (index == 225) {
     return 684;
    }
if (index == 226) {
     return 972;
    }
if (index == 227) {
     return 996;
    }
if (index == 228) {
     return 972;
    }
if (index == 229) {
     return 666;
    }
if (index == 230) {
     return 972;
    }
if (index == 231) {
     return 998;
    }
if (index == 232) {
     return 972;
    }
if (index == 233) {
     return 995;
    }
if (index == 234) {
     return 972;
    }
if (index == 235) {
     return 1000;
    }
if (index == 236) {
     return 975;
    }
if (index == 237) {
     return 989;
    }
if (index == 238) {
     return 972;
    }
if (index == 239) {
     return 989;
    }
if (index == 240) {
     return 972;
    }
if (index == 241) {
     return 1001;
    }
if (index == 242) {
     return 978;
    }
if (index == 243) {
     return 995;
    }
if (index == 244) {
     return 976;
    }
if (index == 245) {
     return 1004;
    }
if (index == 246) {
     return 973;
    }
if (index == 247) {
     return 1009;
    }
if (index == 248) {
     return 972;
    }
if (index == 249) {
     return 1003;
    }
if (index == 250) {
     return 979;
    }
if (index == 251) {
     return 1001;
    }
if (index == 252) {
     return 977;
    }
if (index == 253) {
     return 1004;
    }
if (index == 254) {
     return 977;
    }
if (index == 255) {
     return 997;
    }
if (index == 256) {
     return 972;
    }
if (index == 257) {
     return 1001;
    }
if (index == 258) {
     return 974;
    }
if (index == 259) {
     return 1005;
    }
if (index == 260) {
     return 976;
    }
if (index == 261) {
     return 1005;
    }
if (index == 262) {
     return 982;
    }
if (index == 263) {
     return 1006;
    }
if (index == 264) {
     return 981;
    }
if (index == 265) {
     return 989;
    }
if (index == 266) {
     return 984;
    }
if (index == 267) {
     return 989;
    }
if (index == 268) {
     return 985;
    }
if (index == 269) {
     return 1004;
    }
if (index == 270) {
     return 972;
    }
if (index == 271) {
     return 646;
    }
if (index == 272) {
     return 994;
    }
if (index == 273) {
     return 989;
    }
if (index == 274) {
     return 650;
    }
if (index == 275) {
     return 989;
    }
if (index == 276) {
     return 982;
    }
if (index == 277) {
     return 989;
    }
if (index == 278) {
     return 972;
    }
if (index == 279) {
     return 658;
    }
if (index == 280) {
     return 982;
    }
if (index == 281) {
     return 989;
    }
if (index == 282) {
     return 978;
    }
if (index == 283) {
     return 989;
    }
if (index == 284) {
     return 983;
    }
if (index == 285) {
     return 993;
    }
if (index == 286) {
     return 982;
    }
if (index == 287) {
     return 989;
    }
if (index == 288) {
     return 978;
    }
if (index == 289) {
     return 989;
    }
if (index == 290) {
     return 977;
    }
if (index == 291) {
     return 989;
    }
if (index == 292) {
     return 972;
    }
if (index == 293) {
     return 1002;
    }
if (index == 294) {
     return 972;
    }
if (index == 295) {
     return 989;
    }
if (index == 296) {
     return 993;
    }
if (index == 297) {
     return 692;
    }
if (index == 298) {
     return 703;
    }
if (index == 299) {
     return 996;
    }
if (index == 300) {
     return 972;
    }
if (index == 301) {
     return 989;
    }
if (index == 302) {
     return 972;
    }
if (index == 303) {
     return 1060;
    }
if (index > 303) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:249_' + imgStr + '/digitalImage';
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
br.numLeafs = 304;

// Book title and the URL used for the book title link
br.bookTitle= "From the Himalayas to the equator; letters, sketches. and addresses, giving some account of a tour in India and Malaysia";
br.bookAuthor= "Foss, Cyrus D. (Cyrus David)";
br.bookPub= "New York and Cincinnati: Eaton and Mains, 1899";
br.bookKeyword= "Missions--India<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:249';

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
