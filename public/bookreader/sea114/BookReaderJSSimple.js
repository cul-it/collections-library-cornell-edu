//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 658;
    }
if (index == 1) {
     return 677;
    }
if (index == 2) {
     return 685;
    }
if (index == 3) {
     return 677;
    }
if (index == 4) {
     return 685;
    }
if (index == 5) {
     return 677;
    }
if (index == 6) {
     return 685;
    }
if (index == 7) {
     return 1068;
    }
if (index == 8) {
     return 686;
    }
if (index == 9) {
     return 650;
    }
if (index == 10) {
     return 668;
    }
if (index == 11) {
     return 650;
    }
if (index == 12) {
     return 677;
    }
if (index == 13) {
     return 650;
    }
if (index == 14) {
     return 668;
    }
if (index == 15) {
     return 683;
    }
if (index == 16) {
     return 668;
    }
if (index == 17) {
     return 663;
    }
if (index == 18) {
     return 668;
    }
if (index == 19) {
     return 650;
    }
if (index == 20) {
     return 674;
    }
if (index == 21) {
     return 685;
    }
if (index == 22) {
     return 668;
    }
if (index == 23) {
     return 712;
    }
if (index == 24) {
     return 696;
    }
if (index == 25) {
     return 694;
    }
if (index == 26) {
     return 714;
    }
if (index == 27) {
     return 703;
    }
if (index == 28) {
     return 694;
    }
if (index == 29) {
     return 694;
    }
if (index == 30) {
     return 694;
    }
if (index == 31) {
     return 706;
    }
if (index == 32) {
     return 709;
    }
if (index == 33) {
     return 707;
    }
if (index == 34) {
     return 694;
    }
if (index == 35) {
     return 694;
    }
if (index == 36) {
     return 702;
    }
if (index == 37) {
     return 705;
    }
if (index == 38) {
     return 702;
    }
if (index == 39) {
     return 703;
    }
if (index == 40) {
     return 694;
    }
if (index == 41) {
     return 704;
    }
if (index == 42) {
     return 701;
    }
if (index == 43) {
     return 706;
    }
if (index == 44) {
     return 1060;
    }
if (index == 45) {
     return 694;
    }
if (index == 46) {
     return 694;
    }
if (index == 47) {
     return 701;
    }
if (index == 48) {
     return 705;
    }
if (index == 49) {
     return 694;
    }
if (index == 50) {
     return 705;
    }
if (index == 51) {
     return 705;
    }
if (index == 52) {
     return 701;
    }
if (index == 53) {
     return 694;
    }
if (index == 54) {
     return 694;
    }
if (index == 55) {
     return 694;
    }
if (index == 56) {
     return 697;
    }
if (index == 57) {
     return 699;
    }
if (index == 58) {
     return 702;
    }
if (index == 59) {
     return 721;
    }
if (index == 60) {
     return 694;
    }
if (index == 61) {
     return 694;
    }
if (index == 62) {
     return 703;
    }
if (index == 63) {
     return 717;
    }
if (index == 64) {
     return 694;
    }
if (index == 65) {
     return 728;
    }
if (index == 66) {
     return 694;
    }
if (index == 67) {
     return 715;
    }
if (index == 68) {
     return 694;
    }
if (index == 69) {
     return 721;
    }
if (index == 70) {
     return 694;
    }
if (index == 71) {
     return 694;
    }
if (index == 72) {
     return 694;
    }
if (index == 73) {
     return 716;
    }
if (index == 74) {
     return 709;
    }
if (index == 75) {
     return 714;
    }
if (index == 76) {
     return 713;
    }
if (index == 77) {
     return 705;
    }
if (index == 78) {
     return 718;
    }
if (index == 79) {
     return 703;
    }
if (index == 80) {
     return 706;
    }
if (index == 81) {
     return 694;
    }
if (index == 82) {
     return 707;
    }
if (index == 83) {
     return 715;
    }
if (index == 84) {
     return 694;
    }
if (index == 85) {
     return 703;
    }
if (index == 86) {
     return 701;
    }
if (index == 87) {
     return 706;
    }
if (index == 88) {
     return 706;
    }
if (index == 89) {
     return 694;
    }
if (index == 90) {
     return 718;
    }
if (index == 91) {
     return 702;
    }
if (index == 92) {
     return 714;
    }
if (index == 93) {
     return 694;
    }
if (index == 94) {
     return 709;
    }
if (index == 95) {
     return 705;
    }
if (index == 96) {
     return 713;
    }
if (index == 97) {
     return 716;
    }
if (index == 98) {
     return 711;
    }
if (index == 99) {
     return 702;
    }
if (index == 100) {
     return 703;
    }
if (index == 101) {
     return 696;
    }
if (index == 102) {
     return 706;
    }
if (index == 103) {
     return 700;
    }
if (index == 104) {
     return 716;
    }
if (index == 105) {
     return 694;
    }
if (index == 106) {
     return 722;
    }
if (index == 107) {
     return 706;
    }
if (index == 108) {
     return 694;
    }
if (index == 109) {
     return 694;
    }
if (index == 110) {
     return 697;
    }
if (index == 111) {
     return 694;
    }
if (index == 112) {
     return 694;
    }
if (index == 113) {
     return 694;
    }
if (index == 114) {
     return 694;
    }
if (index == 115) {
     return 694;
    }
if (index == 116) {
     return 703;
    }
if (index == 117) {
     return 698;
    }
if (index == 118) {
     return 709;
    }
if (index == 119) {
     return 694;
    }
if (index == 120) {
     return 694;
    }
if (index == 121) {
     return 694;
    }
if (index == 122) {
     return 694;
    }
if (index == 123) {
     return 694;
    }
if (index == 124) {
     return 694;
    }
if (index == 125) {
     return 694;
    }
if (index == 126) {
     return 694;
    }
if (index == 127) {
     return 730;
    }
if (index == 128) {
     return 729;
    }
if (index == 129) {
     return 730;
    }
if (index == 130) {
     return 720;
    }
if (index == 131) {
     return 730;
    }
if (index == 132) {
     return 720;
    }
if (index == 133) {
     return 712;
    }
if (index == 134) {
     return 702;
    }
if (index == 135) {
     return 717;
    }
if (index == 136) {
     return 702;
    }
if (index == 137) {
     return 712;
    }
if (index == 138) {
     return 702;
    }
if (index == 139) {
     return 720;
    }
if (index == 140) {
     return 702;
    }
if (index == 141) {
     return 747;
    }
if (index == 142) {
     return 702;
    }
if (index == 143) {
     return 727;
    }
if (index == 144) {
     return 712;
    }
if (index == 145) {
     return 754;
    }
if (index == 146) {
     return 702;
    }
if (index == 147) {
     return 667;
    }
if (index == 148) {
     return 693;
    }
if (index == 149) {
     return 695;
    }
if (index == 150) {
     return 704;
    }
if (index == 151) {
     return 701;
    }
if (index == 152) {
     return 686;
    }
if (index == 153) {
     return 667;
    }
if (index == 154) {
     return 706;
    }
if (index == 155) {
     return 694;
    }
if (index == 156) {
     return 707;
    }
if (index == 157) {
     return 688;
    }
if (index == 158) {
     return 686;
    }
if (index == 159) {
     return 667;
    }
if (index == 160) {
     return 695;
    }
if (index == 161) {
     return 677;
    }
if (index == 162) {
     return 699;
    }
if (index == 163) {
     return 679;
    }
if (index == 164) {
     return 686;
    }
if (index == 165) {
     return 672;
    }
if (index == 166) {
     return 686;
    }
if (index == 167) {
     return 671;
    }
if (index == 168) {
     return 686;
    }
if (index == 169) {
     return 667;
    }
if (index == 170) {
     return 695;
    }
if (index == 171) {
     return 672;
    }
if (index == 172) {
     return 686;
    }
if (index == 173) {
     return 677;
    }
if (index == 174) {
     return 686;
    }
if (index == 175) {
     return 667;
    }
if (index == 176) {
     return 686;
    }
if (index == 177) {
     return 702;
    }
if (index == 178) {
     return 686;
    }
if (index == 179) {
     return 667;
    }
if (index == 180) {
     return 686;
    }
if (index == 181) {
     return 667;
    }
if (index == 182) {
     return 686;
    }
if (index == 183) {
     return 680;
    }
if (index == 184) {
     return 686;
    }
if (index == 185) {
     return 667;
    }
if (index == 186) {
     return 686;
    }
if (index == 187) {
     return 667;
    }
if (index == 188) {
     return 686;
    }
if (index == 189) {
     return 667;
    }
if (index == 190) {
     return 686;
    }
if (index == 191) {
     return 679;
    }
if (index == 192) {
     return 686;
    }
if (index == 193) {
     return 667;
    }
if (index == 194) {
     return 699;
    }
if (index == 195) {
     return 677;
    }
if (index == 196) {
     return 686;
    }
if (index == 197) {
     return 693;
    }
if (index == 198) {
     return 686;
    }
if (index == 199) {
     return 659;
    }
if (index == 200) {
     return 688;
    }
if (index == 201) {
     return 686;
    }
if (index == 202) {
     return 686;
    }
if (index == 203) {
     return 692;
    }
if (index == 204) {
     return 686;
    }
if (index == 205) {
     return 659;
    }
if (index == 206) {
     return 686;
    }
if (index == 207) {
     return 690;
    }
if (index == 208) {
     return 686;
    }
if (index == 209) {
     return 693;
    }
if (index == 210) {
     return 697;
    }
if (index == 211) {
     return 681;
    }
if (index == 212) {
     return 691;
    }
if (index == 213) {
     return 692;
    }
if (index == 214) {
     return 686;
    }
if (index == 215) {
     return 659;
    }
if (index == 216) {
     return 694;
    }
if (index == 217) {
     return 689;
    }
if (index == 218) {
     return 686;
    }
if (index == 219) {
     return 691;
    }
if (index == 220) {
     return 686;
    }
if (index == 221) {
     return 659;
    }
if (index == 222) {
     return 695;
    }
if (index == 223) {
     return 667;
    }
if (index == 224) {
     return 686;
    }
if (index == 225) {
     return 679;
    }
if (index == 226) {
     return 686;
    }
if (index == 227) {
     return 689;
    }
if (index == 228) {
     return 686;
    }
if (index == 229) {
     return 686;
    }
if (index == 230) {
     return 686;
    }
if (index == 231) {
     return 659;
    }
if (index == 232) {
     return 686;
    }
if (index == 233) {
     return 677;
    }
if (index == 234) {
     return 686;
    }
if (index == 235) {
     return 674;
    }
if (index == 236) {
     return 697;
    }
if (index == 237) {
     return 692;
    }
if (index == 238) {
     return 667;
    }
if (index == 239) {
     return 685;
    }
if (index == 240) {
     return 669;
    }
if (index == 241) {
     return 694;
    }
if (index == 242) {
     return 667;
    }
if (index == 243) {
     return 710;
    }
if (index == 244) {
     return 674;
    }
if (index == 245) {
     return 690;
    }
if (index == 246) {
     return 699;
    }
if (index == 247) {
     return 695;
    }
if (index == 248) {
     return 658;
    }
if (index == 249) {
     return 658;
    }
if (index > 249) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1042;
    }
if (index == 1) {
     return 1086;
    }
if (index == 2) {
     return 1068;
    }
if (index == 3) {
     return 1086;
    }
if (index == 4) {
     return 1068;
    }
if (index == 5) {
     return 1086;
    }
if (index == 6) {
     return 1068;
    }
if (index == 7) {
     return 650;
    }
if (index == 8) {
     return 1079;
    }
if (index == 9) {
     return 1068;
    }
if (index == 10) {
     return 1068;
    }
if (index == 11) {
     return 1068;
    }
if (index == 12) {
     return 1073;
    }
if (index == 13) {
     return 1068;
    }
if (index == 14) {
     return 1068;
    }
if (index == 15) {
     return 1087;
    }
if (index == 16) {
     return 1068;
    }
if (index == 17) {
     return 1076;
    }
if (index == 18) {
     return 1068;
    }
if (index == 19) {
     return 1068;
    }
if (index == 20) {
     return 1072;
    }
if (index == 21) {
     return 1088;
    }
if (index == 22) {
     return 1068;
    }
if (index == 23) {
     return 1071;
    }
if (index == 24) {
     return 1069;
    }
if (index == 25) {
     return 1060;
    }
if (index == 26) {
     return 1080;
    }
if (index == 27) {
     return 1066;
    }
if (index == 28) {
     return 1060;
    }
if (index == 29) {
     return 1060;
    }
if (index == 30) {
     return 1060;
    }
if (index == 31) {
     return 1068;
    }
if (index == 32) {
     return 1070;
    }
if (index == 33) {
     return 1068;
    }
if (index == 34) {
     return 1060;
    }
if (index == 35) {
     return 1060;
    }
if (index == 36) {
     return 1065;
    }
if (index == 37) {
     return 1067;
    }
if (index == 38) {
     return 1065;
    }
if (index == 39) {
     return 1066;
    }
if (index == 40) {
     return 1060;
    }
if (index == 41) {
     return 1066;
    }
if (index == 42) {
     return 1064;
    }
if (index == 43) {
     return 1068;
    }
if (index == 44) {
     return 694;
    }
if (index == 45) {
     return 1060;
    }
if (index == 46) {
     return 1060;
    }
if (index == 47) {
     return 1064;
    }
if (index == 48) {
     return 1067;
    }
if (index == 49) {
     return 1060;
    }
if (index == 50) {
     return 1067;
    }
if (index == 51) {
     return 1067;
    }
if (index == 52) {
     return 1064;
    }
if (index == 53) {
     return 1060;
    }
if (index == 54) {
     return 1060;
    }
if (index == 55) {
     return 1060;
    }
if (index == 56) {
     return 1062;
    }
if (index == 57) {
     return 1063;
    }
if (index == 58) {
     return 1065;
    }
if (index == 59) {
     return 1077;
    }
if (index == 60) {
     return 1060;
    }
if (index == 61) {
     return 1060;
    }
if (index == 62) {
     return 1066;
    }
if (index == 63) {
     return 1075;
    }
if (index == 64) {
     return 1060;
    }
if (index == 65) {
     return 1082;
    }
if (index == 66) {
     return 1060;
    }
if (index == 67) {
     return 1073;
    }
if (index == 68) {
     return 1060;
    }
if (index == 69) {
     return 1077;
    }
if (index == 70) {
     return 1060;
    }
if (index == 71) {
     return 1060;
    }
if (index == 72) {
     return 1060;
    }
if (index == 73) {
     return 1074;
    }
if (index == 74) {
     return 1070;
    }
if (index == 75) {
     return 1073;
    }
if (index == 76) {
     return 1072;
    }
if (index == 77) {
     return 1067;
    }
if (index == 78) {
     return 1076;
    }
if (index == 79) {
     return 1066;
    }
if (index == 80) {
     return 1068;
    }
if (index == 81) {
     return 1060;
    }
if (index == 82) {
     return 1068;
    }
if (index == 83) {
     return 1073;
    }
if (index == 84) {
     return 1060;
    }
if (index == 85) {
     return 1066;
    }
if (index == 86) {
     return 1064;
    }
if (index == 87) {
     return 1068;
    }
if (index == 88) {
     return 1068;
    }
if (index == 89) {
     return 1060;
    }
if (index == 90) {
     return 1076;
    }
if (index == 91) {
     return 1065;
    }
if (index == 92) {
     return 1073;
    }
if (index == 93) {
     return 1060;
    }
if (index == 94) {
     return 1070;
    }
if (index == 95) {
     return 1067;
    }
if (index == 96) {
     return 1072;
    }
if (index == 97) {
     return 1074;
    }
if (index == 98) {
     return 1071;
    }
if (index == 99) {
     return 1065;
    }
if (index == 100) {
     return 1066;
    }
if (index == 101) {
     return 1061;
    }
if (index == 102) {
     return 1068;
    }
if (index == 103) {
     return 1064;
    }
if (index == 104) {
     return 1074;
    }
if (index == 105) {
     return 1060;
    }
if (index == 106) {
     return 1078;
    }
if (index == 107) {
     return 1068;
    }
if (index == 108) {
     return 1060;
    }
if (index == 109) {
     return 1060;
    }
if (index == 110) {
     return 1062;
    }
if (index == 111) {
     return 1060;
    }
if (index == 112) {
     return 1060;
    }
if (index == 113) {
     return 1060;
    }
if (index == 114) {
     return 1060;
    }
if (index == 115) {
     return 1060;
    }
if (index == 116) {
     return 1066;
    }
if (index == 117) {
     return 1063;
    }
if (index == 118) {
     return 1070;
    }
if (index == 119) {
     return 1060;
    }
if (index == 120) {
     return 1060;
    }
if (index == 121) {
     return 1060;
    }
if (index == 122) {
     return 1060;
    }
if (index == 123) {
     return 1060;
    }
if (index == 124) {
     return 1060;
    }
if (index == 125) {
     return 1060;
    }
if (index == 126) {
     return 1060;
    }
if (index == 127) {
     return 1060;
    }
if (index == 128) {
     return 1075;
    }
if (index == 129) {
     return 1060;
    }
if (index == 130) {
     return 1069;
    }
if (index == 131) {
     return 1060;
    }
if (index == 132) {
     return 1069;
    }
if (index == 133) {
     return 1060;
    }
if (index == 134) {
     return 1069;
    }
if (index == 135) {
     return 1063;
    }
if (index == 136) {
     return 1069;
    }
if (index == 137) {
     return 1060;
    }
if (index == 138) {
     return 1069;
    }
if (index == 139) {
     return 1065;
    }
if (index == 140) {
     return 1069;
    }
if (index == 141) {
     return 1083;
    }
if (index == 142) {
     return 1069;
    }
if (index == 143) {
     return 1070;
    }
if (index == 144) {
     return 1075;
    }
if (index == 145) {
     return 1088;
    }
if (index == 146) {
     return 1069;
    }
if (index == 147) {
     return 1051;
    }
if (index == 148) {
     return 1055;
    }
if (index == 149) {
     return 1068;
    }
if (index == 150) {
     return 1062;
    }
if (index == 151) {
     return 1072;
    }
if (index == 152) {
     return 1051;
    }
if (index == 153) {
     return 1051;
    }
if (index == 154) {
     return 1064;
    }
if (index == 155) {
     return 1068;
    }
if (index == 156) {
     return 1056;
    }
if (index == 157) {
     return 1064;
    }
if (index == 158) {
     return 1042;
    }
if (index == 159) {
     return 1051;
    }
if (index == 160) {
     return 1048;
    }
if (index == 161) {
     return 1057;
    }
if (index == 162) {
     return 1050;
    }
if (index == 163) {
     return 1059;
    }
if (index == 164) {
     return 1042;
    }
if (index == 165) {
     return 1054;
    }
if (index == 166) {
     return 1042;
    }
if (index == 167) {
     return 1053;
    }
if (index == 168) {
     return 1042;
    }
if (index == 169) {
     return 1051;
    }
if (index == 170) {
     return 1047;
    }
if (index == 171) {
     return 1054;
    }
if (index == 172) {
     return 1042;
    }
if (index == 173) {
     return 1057;
    }
if (index == 174) {
     return 1042;
    }
if (index == 175) {
     return 1051;
    }
if (index == 176) {
     return 1042;
    }
if (index == 177) {
     return 1073;
    }
if (index == 178) {
     return 1042;
    }
if (index == 179) {
     return 1051;
    }
if (index == 180) {
     return 1042;
    }
if (index == 181) {
     return 1051;
    }
if (index == 182) {
     return 1042;
    }
if (index == 183) {
     return 1059;
    }
if (index == 184) {
     return 1042;
    }
if (index == 185) {
     return 1051;
    }
if (index == 186) {
     return 1042;
    }
if (index == 187) {
     return 1051;
    }
if (index == 188) {
     return 1042;
    }
if (index == 189) {
     return 1051;
    }
if (index == 190) {
     return 1042;
    }
if (index == 191) {
     return 1059;
    }
if (index == 192) {
     return 1042;
    }
if (index == 193) {
     return 1051;
    }
if (index == 194) {
     return 1050;
    }
if (index == 195) {
     return 1053;
    }
if (index == 196) {
     return 1042;
    }
if (index == 197) {
     return 1063;
    }
if (index == 198) {
     return 1042;
    }
if (index == 199) {
     return 1042;
    }
if (index == 200) {
     return 1043;
    }
if (index == 201) {
     return 1059;
    }
if (index == 202) {
     return 1042;
    }
if (index == 203) {
     return 1062;
    }
if (index == 204) {
     return 1042;
    }
if (index == 205) {
     return 1042;
    }
if (index == 206) {
     return 1042;
    }
if (index == 207) {
     return 1061;
    }
if (index == 208) {
     return 1042;
    }
if (index == 209) {
     return 1063;
    }
if (index == 210) {
     return 1049;
    }
if (index == 211) {
     return 1056;
    }
if (index == 212) {
     return 1045;
    }
if (index == 213) {
     return 1062;
    }
if (index == 214) {
     return 1042;
    }
if (index == 215) {
     return 1042;
    }
if (index == 216) {
     return 1047;
    }
if (index == 217) {
     return 1061;
    }
if (index == 218) {
     return 1042;
    }
if (index == 219) {
     return 1062;
    }
if (index == 220) {
     return 1042;
    }
if (index == 221) {
     return 1042;
    }
if (index == 222) {
     return 1047;
    }
if (index == 223) {
     return 1047;
    }
if (index == 224) {
     return 1042;
    }
if (index == 225) {
     return 1055;
    }
if (index == 226) {
     return 1042;
    }
if (index == 227) {
     return 1061;
    }
if (index == 228) {
     return 1042;
    }
if (index == 229) {
     return 1058;
    }
if (index == 230) {
     return 1042;
    }
if (index == 231) {
     return 1042;
    }
if (index == 232) {
     return 1042;
    }
if (index == 233) {
     return 1053;
    }
if (index == 234) {
     return 1042;
    }
if (index == 235) {
     return 1051;
    }
if (index == 236) {
     return 1049;
    }
if (index == 237) {
     return 1037;
    }
if (index == 238) {
     return 1042;
    }
if (index == 239) {
     return 1033;
    }
if (index == 240) {
     return 1043;
    }
if (index == 241) {
     return 1039;
    }
if (index == 242) {
     return 1042;
    }
if (index == 243) {
     return 1049;
    }
if (index == 244) {
     return 1046;
    }
if (index == 245) {
     return 1036;
    }
if (index == 246) {
     return 1062;
    }
if (index == 247) {
     return 1040;
    }
if (index == 248) {
     return 1042;
    }
if (index == 249) {
     return 1033;
    }
if (index > 249) {
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
    var url = '/fedora/get/seapage:114_' + imgStr + '/digitalImage';
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
br.numLeafs = 254;

// Book title and the URL used for the book title link
br.bookTitle= "The isle of vanishing men : a narrative of adventure in cannibal-land";
br.bookAuthor= "Alder, William Fisher";
br.bookPub= "New York: Century Co, 1922";
br.bookKeyword= "New Guinea--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ethnology--Indonesia--Papua";
br.bookUrl  = '/catalog/sea:114';

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
