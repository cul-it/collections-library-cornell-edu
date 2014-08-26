//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 961;
    }
if (index == 1) {
     return 915;
    }
if (index == 2) {
     return 915;
    }
if (index == 3) {
     return 915;
    }
if (index == 4) {
     return 915;
    }
if (index == 5) {
     return 883;
    }
if (index == 6) {
     return 837;
    }
if (index == 7) {
     return 835;
    }
if (index == 8) {
     return 812;
    }
if (index == 9) {
     return 806;
    }
if (index == 10) {
     return 825;
    }
if (index == 11) {
     return 816;
    }
if (index == 12) {
     return 806;
    }
if (index == 13) {
     return 801;
    }
if (index == 14) {
     return 813;
    }
if (index == 15) {
     return 818;
    }
if (index == 16) {
     return 839;
    }
if (index == 17) {
     return 827;
    }
if (index == 18) {
     return 825;
    }
if (index == 19) {
     return 829;
    }
if (index == 20) {
     return 815;
    }
if (index == 21) {
     return 826;
    }
if (index == 22) {
     return 821;
    }
if (index == 23) {
     return 829;
    }
if (index == 24) {
     return 799;
    }
if (index == 25) {
     return 830;
    }
if (index == 26) {
     return 806;
    }
if (index == 27) {
     return 816;
    }
if (index == 28) {
     return 821;
    }
if (index == 29) {
     return 808;
    }
if (index == 30) {
     return 808;
    }
if (index == 31) {
     return 817;
    }
if (index == 32) {
     return 824;
    }
if (index == 33) {
     return 821;
    }
if (index == 34) {
     return 803;
    }
if (index == 35) {
     return 801;
    }
if (index == 36) {
     return 804;
    }
if (index == 37) {
     return 792;
    }
if (index == 38) {
     return 813;
    }
if (index == 39) {
     return 791;
    }
if (index == 40) {
     return 801;
    }
if (index == 41) {
     return 810;
    }
if (index == 42) {
     return 814;
    }
if (index == 43) {
     return 820;
    }
if (index == 44) {
     return 799;
    }
if (index == 45) {
     return 803;
    }
if (index == 46) {
     return 788;
    }
if (index == 47) {
     return 810;
    }
if (index == 48) {
     return 819;
    }
if (index == 49) {
     return 801;
    }
if (index == 50) {
     return 805;
    }
if (index == 51) {
     return 816;
    }
if (index == 52) {
     return 819;
    }
if (index == 53) {
     return 798;
    }
if (index == 54) {
     return 806;
    }
if (index == 55) {
     return 812;
    }
if (index == 56) {
     return 795;
    }
if (index == 57) {
     return 782;
    }
if (index == 58) {
     return 788;
    }
if (index == 59) {
     return 803;
    }
if (index == 60) {
     return 808;
    }
if (index == 61) {
     return 818;
    }
if (index == 62) {
     return 823;
    }
if (index == 63) {
     return 812;
    }
if (index == 64) {
     return 819;
    }
if (index == 65) {
     return 795;
    }
if (index == 66) {
     return 793;
    }
if (index == 67) {
     return 816;
    }
if (index == 68) {
     return 814;
    }
if (index == 69) {
     return 807;
    }
if (index == 70) {
     return 819;
    }
if (index == 71) {
     return 817;
    }
if (index == 72) {
     return 817;
    }
if (index == 73) {
     return 816;
    }
if (index == 74) {
     return 805;
    }
if (index == 75) {
     return 802;
    }
if (index == 76) {
     return 812;
    }
if (index == 77) {
     return 808;
    }
if (index == 78) {
     return 817;
    }
if (index == 79) {
     return 801;
    }
if (index == 80) {
     return 814;
    }
if (index == 81) {
     return 806;
    }
if (index == 82) {
     return 819;
    }
if (index == 83) {
     return 806;
    }
if (index == 84) {
     return 806;
    }
if (index == 85) {
     return 806;
    }
if (index == 86) {
     return 828;
    }
if (index == 87) {
     return 818;
    }
if (index == 88) {
     return 811;
    }
if (index == 89) {
     return 803;
    }
if (index == 90) {
     return 811;
    }
if (index == 91) {
     return 793;
    }
if (index == 92) {
     return 809;
    }
if (index == 93) {
     return 792;
    }
if (index == 94) {
     return 800;
    }
if (index == 95) {
     return 803;
    }
if (index == 96) {
     return 804;
    }
if (index == 97) {
     return 787;
    }
if (index == 98) {
     return 814;
    }
if (index == 99) {
     return 807;
    }
if (index == 100) {
     return 808;
    }
if (index == 101) {
     return 790;
    }
if (index == 102) {
     return 808;
    }
if (index == 103) {
     return 791;
    }
if (index == 104) {
     return 814;
    }
if (index == 105) {
     return 825;
    }
if (index == 106) {
     return 815;
    }
if (index == 107) {
     return 785;
    }
if (index == 108) {
     return 819;
    }
if (index == 109) {
     return 809;
    }
if (index == 110) {
     return 812;
    }
if (index == 111) {
     return 811;
    }
if (index == 112) {
     return 815;
    }
if (index == 113) {
     return 799;
    }
if (index == 114) {
     return 821;
    }
if (index == 115) {
     return 801;
    }
if (index == 116) {
     return 807;
    }
if (index == 117) {
     return 821;
    }
if (index == 118) {
     return 816;
    }
if (index == 119) {
     return 795;
    }
if (index == 120) {
     return 811;
    }
if (index == 121) {
     return 794;
    }
if (index == 122) {
     return 811;
    }
if (index == 123) {
     return 789;
    }
if (index == 124) {
     return 822;
    }
if (index == 125) {
     return 789;
    }
if (index == 126) {
     return 824;
    }
if (index == 127) {
     return 817;
    }
if (index == 128) {
     return 835;
    }
if (index == 129) {
     return 816;
    }
if (index == 130) {
     return 833;
    }
if (index == 131) {
     return 803;
    }
if (index == 132) {
     return 831;
    }
if (index == 133) {
     return 776;
    }
if (index == 134) {
     return 814;
    }
if (index == 135) {
     return 817;
    }
if (index == 136) {
     return 832;
    }
if (index == 137) {
     return 825;
    }
if (index == 138) {
     return 821;
    }
if (index == 139) {
     return 792;
    }
if (index == 140) {
     return 814;
    }
if (index == 141) {
     return 810;
    }
if (index == 142) {
     return 814;
    }
if (index == 143) {
     return 799;
    }
if (index == 144) {
     return 813;
    }
if (index == 145) {
     return 787;
    }
if (index == 146) {
     return 812;
    }
if (index == 147) {
     return 799;
    }
if (index == 148) {
     return 821;
    }
if (index == 149) {
     return 793;
    }
if (index == 150) {
     return 819;
    }
if (index == 151) {
     return 801;
    }
if (index == 152) {
     return 820;
    }
if (index == 153) {
     return 815;
    }
if (index == 154) {
     return 820;
    }
if (index == 155) {
     return 795;
    }
if (index == 156) {
     return 813;
    }
if (index == 157) {
     return 802;
    }
if (index == 158) {
     return 804;
    }
if (index == 159) {
     return 783;
    }
if (index == 160) {
     return 802;
    }
if (index == 161) {
     return 805;
    }
if (index == 162) {
     return 809;
    }
if (index == 163) {
     return 822;
    }
if (index == 164) {
     return 810;
    }
if (index == 165) {
     return 799;
    }
if (index == 166) {
     return 816;
    }
if (index == 167) {
     return 810;
    }
if (index == 168) {
     return 816;
    }
if (index == 169) {
     return 814;
    }
if (index == 170) {
     return 813;
    }
if (index == 171) {
     return 805;
    }
if (index == 172) {
     return 829;
    }
if (index == 173) {
     return 818;
    }
if (index == 174) {
     return 802;
    }
if (index == 175) {
     return 808;
    }
if (index == 176) {
     return 827;
    }
if (index == 177) {
     return 827;
    }
if (index == 178) {
     return 826;
    }
if (index == 179) {
     return 822;
    }
if (index == 180) {
     return 826;
    }
if (index == 181) {
     return 796;
    }
if (index == 182) {
     return 820;
    }
if (index == 183) {
     return 789;
    }
if (index == 184) {
     return 805;
    }
if (index == 185) {
     return 794;
    }
if (index == 186) {
     return 814;
    }
if (index == 187) {
     return 783;
    }
if (index == 188) {
     return 802;
    }
if (index == 189) {
     return 812;
    }
if (index == 190) {
     return 808;
    }
if (index == 191) {
     return 796;
    }
if (index == 192) {
     return 806;
    }
if (index == 193) {
     return 798;
    }
if (index == 194) {
     return 813;
    }
if (index == 195) {
     return 811;
    }
if (index == 196) {
     return 826;
    }
if (index == 197) {
     return 808;
    }
if (index == 198) {
     return 818;
    }
if (index == 199) {
     return 802;
    }
if (index == 200) {
     return 821;
    }
if (index == 201) {
     return 788;
    }
if (index == 202) {
     return 820;
    }
if (index == 203) {
     return 814;
    }
if (index == 204) {
     return 822;
    }
if (index == 205) {
     return 810;
    }
if (index == 206) {
     return 802;
    }
if (index == 207) {
     return 800;
    }
if (index == 208) {
     return 802;
    }
if (index == 209) {
     return 778;
    }
if (index == 210) {
     return 796;
    }
if (index == 211) {
     return 795;
    }
if (index == 212) {
     return 800;
    }
if (index == 213) {
     return 792;
    }
if (index == 214) {
     return 794;
    }
if (index == 215) {
     return 776;
    }
if (index == 216) {
     return 793;
    }
if (index == 217) {
     return 814;
    }
if (index == 218) {
     return 809;
    }
if (index == 219) {
     return 779;
    }
if (index == 220) {
     return 789;
    }
if (index == 221) {
     return 812;
    }
if (index == 222) {
     return 794;
    }
if (index == 223) {
     return 803;
    }
if (index == 224) {
     return 814;
    }
if (index == 225) {
     return 809;
    }
if (index == 226) {
     return 826;
    }
if (index == 227) {
     return 812;
    }
if (index == 228) {
     return 817;
    }
if (index == 229) {
     return 766;
    }
if (index == 230) {
     return 769;
    }
if (index == 231) {
     return 822;
    }
if (index == 232) {
     return 773;
    }
if (index == 233) {
     return 794;
    }
if (index == 234) {
     return 798;
    }
if (index == 235) {
     return 799;
    }
if (index == 236) {
     return 808;
    }
if (index == 237) {
     return 795;
    }
if (index == 238) {
     return 800;
    }
if (index == 239) {
     return 792;
    }
if (index == 240) {
     return 768;
    }
if (index == 241) {
     return 790;
    }
if (index == 242) {
     return 791;
    }
if (index == 243) {
     return 788;
    }
if (index == 244) {
     return 774;
    }
if (index == 245) {
     return 788;
    }
if (index == 246) {
     return 787;
    }
if (index == 247) {
     return 783;
    }
if (index == 248) {
     return 800;
    }
if (index == 249) {
     return 782;
    }
if (index == 250) {
     return 786;
    }
if (index == 251) {
     return 778;
    }
if (index == 252) {
     return 807;
    }
if (index == 253) {
     return 762;
    }
if (index == 254) {
     return 782;
    }
if (index == 255) {
     return 784;
    }
if (index == 256) {
     return 786;
    }
if (index == 257) {
     return 775;
    }
if (index == 258) {
     return 774;
    }
if (index == 259) {
     return 786;
    }
if (index == 260) {
     return 781;
    }
if (index == 261) {
     return 795;
    }
if (index == 262) {
     return 778;
    }
if (index == 263) {
     return 752;
    }
if (index == 264) {
     return 766;
    }
if (index == 265) {
     return 769;
    }
if (index == 266) {
     return 791;
    }
if (index == 267) {
     return 786;
    }
if (index == 268) {
     return 789;
    }
if (index == 269) {
     return 771;
    }
if (index == 270) {
     return 789;
    }
if (index == 271) {
     return 770;
    }
if (index == 272) {
     return 781;
    }
if (index == 273) {
     return 752;
    }
if (index == 274) {
     return 784;
    }
if (index == 275) {
     return 762;
    }
if (index == 276) {
     return 771;
    }
if (index == 277) {
     return 759;
    }
if (index == 278) {
     return 769;
    }
if (index == 279) {
     return 774;
    }
if (index == 280) {
     return 771;
    }
if (index == 281) {
     return 774;
    }
if (index == 282) {
     return 786;
    }
if (index == 283) {
     return 790;
    }
if (index == 284) {
     return 777;
    }
if (index == 285) {
     return 779;
    }
if (index == 286) {
     return 775;
    }
if (index == 287) {
     return 775;
    }
if (index == 288) {
     return 772;
    }
if (index == 289) {
     return 761;
    }
if (index == 290) {
     return 774;
    }
if (index == 291) {
     return 780;
    }
if (index == 292) {
     return 775;
    }
if (index == 293) {
     return 788;
    }
if (index == 294) {
     return 795;
    }
if (index == 295) {
     return 771;
    }
if (index == 296) {
     return 785;
    }
if (index == 297) {
     return 777;
    }
if (index == 298) {
     return 767;
    }
if (index == 299) {
     return 770;
    }
if (index == 300) {
     return 770;
    }
if (index == 301) {
     return 772;
    }
if (index == 302) {
     return 773;
    }
if (index == 303) {
     return 775;
    }
if (index == 304) {
     return 780;
    }
if (index == 305) {
     return 763;
    }
if (index == 306) {
     return 756;
    }
if (index == 307) {
     return 764;
    }
if (index == 308) {
     return 796;
    }
if (index == 309) {
     return 784;
    }
if (index == 310) {
     return 777;
    }
if (index == 311) {
     return 795;
    }
if (index == 312) {
     return 781;
    }
if (index == 313) {
     return 771;
    }
if (index == 314) {
     return 790;
    }
if (index == 315) {
     return 763;
    }
if (index == 316) {
     return 796;
    }
if (index == 317) {
     return 781;
    }
if (index == 318) {
     return 797;
    }
if (index == 319) {
     return 775;
    }
if (index == 320) {
     return 795;
    }
if (index == 321) {
     return 784;
    }
if (index == 322) {
     return 810;
    }
if (index == 323) {
     return 818;
    }
if (index == 324) {
     return 800;
    }
if (index == 325) {
     return 817;
    }
if (index > 325) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1435;
    }
if (index == 1) {
     return 1400;
    }
if (index == 2) {
     return 1400;
    }
if (index == 3) {
     return 1400;
    }
if (index == 4) {
     return 1400;
    }
if (index == 5) {
     return 1374;
    }
if (index == 6) {
     return 1356;
    }
if (index == 7) {
     return 1374;
    }
if (index == 8) {
     return 1365;
    }
if (index == 9) {
     return 1374;
    }
if (index == 10) {
     return 1365;
    }
if (index == 11) {
     return 1361;
    }
if (index == 12) {
     return 1363;
    }
if (index == 13) {
     return 1370;
    }
if (index == 14) {
     return 1372;
    }
if (index == 15) {
     return 1374;
    }
if (index == 16) {
     return 1365;
    }
if (index == 17) {
     return 1374;
    }
if (index == 18) {
     return 1355;
    }
if (index == 19) {
     return 1374;
    }
if (index == 20) {
     return 1359;
    }
if (index == 21) {
     return 1381;
    }
if (index == 22) {
     return 1361;
    }
if (index == 23) {
     return 1374;
    }
if (index == 24) {
     return 1365;
    }
if (index == 25) {
     return 1382;
    }
if (index == 26) {
     return 1360;
    }
if (index == 27) {
     return 1356;
    }
if (index == 28) {
     return 1363;
    }
if (index == 29) {
     return 1362;
    }
if (index == 30) {
     return 1348;
    }
if (index == 31) {
     return 1377;
    }
if (index == 32) {
     return 1364;
    }
if (index == 33) {
     return 1369;
    }
if (index == 34) {
     return 1359;
    }
if (index == 35) {
     return 1379;
    }
if (index == 36) {
     return 1357;
    }
if (index == 37) {
     return 1367;
    }
if (index == 38) {
     return 1361;
    }
if (index == 39) {
     return 1368;
    }
if (index == 40) {
     return 1361;
    }
if (index == 41) {
     return 1376;
    }
if (index == 42) {
     return 1361;
    }
if (index == 43) {
     return 1373;
    }
if (index == 44) {
     return 1357;
    }
if (index == 45) {
     return 1357;
    }
if (index == 46) {
     return 1348;
    }
if (index == 47) {
     return 1364;
    }
if (index == 48) {
     return 1358;
    }
if (index == 49) {
     return 1362;
    }
if (index == 50) {
     return 1360;
    }
if (index == 51) {
     return 1366;
    }
if (index == 52) {
     return 1366;
    }
if (index == 53) {
     return 1350;
    }
if (index == 54) {
     return 1366;
    }
if (index == 55) {
     return 1363;
    }
if (index == 56) {
     return 1349;
    }
if (index == 57) {
     return 1387;
    }
if (index == 58) {
     return 1352;
    }
if (index == 59) {
     return 1353;
    }
if (index == 60) {
     return 1365;
    }
if (index == 61) {
     return 1381;
    }
if (index == 62) {
     return 1345;
    }
if (index == 63) {
     return 1361;
    }
if (index == 64) {
     return 1363;
    }
if (index == 65) {
     return 1368;
    }
if (index == 66) {
     return 1353;
    }
if (index == 67) {
     return 1281;
    }
if (index == 68) {
     return 1382;
    }
if (index == 69) {
     return 1359;
    }
if (index == 70) {
     return 1379;
    }
if (index == 71) {
     return 1373;
    }
if (index == 72) {
     return 1377;
    }
if (index == 73) {
     return 1362;
    }
if (index == 74) {
     return 1365;
    }
if (index == 75) {
     return 1359;
    }
if (index == 76) {
     return 1364;
    }
if (index == 77) {
     return 1374;
    }
if (index == 78) {
     return 1372;
    }
if (index == 79) {
     return 1359;
    }
if (index == 80) {
     return 1363;
    }
if (index == 81) {
     return 1373;
    }
if (index == 82) {
     return 1378;
    }
if (index == 83) {
     return 1361;
    }
if (index == 84) {
     return 1351;
    }
if (index == 85) {
     return 1367;
    }
if (index == 86) {
     return 1385;
    }
if (index == 87) {
     return 1383;
    }
if (index == 88) {
     return 1367;
    }
if (index == 89) {
     return 1370;
    }
if (index == 90) {
     return 1352;
    }
if (index == 91) {
     return 1380;
    }
if (index == 92) {
     return 1367;
    }
if (index == 93) {
     return 1368;
    }
if (index == 94) {
     return 1366;
    }
if (index == 95) {
     return 1370;
    }
if (index == 96) {
     return 1368;
    }
if (index == 97) {
     return 1364;
    }
if (index == 98) {
     return 1373;
    }
if (index == 99) {
     return 1374;
    }
if (index == 100) {
     return 1365;
    }
if (index == 101) {
     return 1360;
    }
if (index == 102) {
     return 1358;
    }
if (index == 103) {
     return 1367;
    }
if (index == 104) {
     return 1361;
    }
if (index == 105) {
     return 1365;
    }
if (index == 106) {
     return 1367;
    }
if (index == 107) {
     return 1380;
    }
if (index == 108) {
     return 1371;
    }
if (index == 109) {
     return 1375;
    }
if (index == 110) {
     return 1374;
    }
if (index == 111) {
     return 1383;
    }
if (index == 112) {
     return 1380;
    }
if (index == 113) {
     return 1362;
    }
if (index == 114) {
     return 1370;
    }
if (index == 115) {
     return 1350;
    }
if (index == 116) {
     return 1363;
    }
if (index == 117) {
     return 1374;
    }
if (index == 118) {
     return 1365;
    }
if (index == 119) {
     return 1378;
    }
if (index == 120) {
     return 1363;
    }
if (index == 121) {
     return 1368;
    }
if (index == 122) {
     return 1366;
    }
if (index == 123) {
     return 1362;
    }
if (index == 124) {
     return 1363;
    }
if (index == 125) {
     return 1374;
    }
if (index == 126) {
     return 1365;
    }
if (index == 127) {
     return 1374;
    }
if (index == 128) {
     return 1370;
    }
if (index == 129) {
     return 1359;
    }
if (index == 130) {
     return 1365;
    }
if (index == 131) {
     return 1374;
    }
if (index == 132) {
     return 1372;
    }
if (index == 133) {
     return 1361;
    }
if (index == 134) {
     return 1355;
    }
if (index == 135) {
     return 1375;
    }
if (index == 136) {
     return 1368;
    }
if (index == 137) {
     return 1370;
    }
if (index == 138) {
     return 1365;
    }
if (index == 139) {
     return 1359;
    }
if (index == 140) {
     return 1366;
    }
if (index == 141) {
     return 1352;
    }
if (index == 142) {
     return 1362;
    }
if (index == 143) {
     return 1366;
    }
if (index == 144) {
     return 1368;
    }
if (index == 145) {
     return 1364;
    }
if (index == 146) {
     return 1356;
    }
if (index == 147) {
     return 1353;
    }
if (index == 148) {
     return 1369;
    }
if (index == 149) {
     return 1360;
    }
if (index == 150) {
     return 1359;
    }
if (index == 151) {
     return 1368;
    }
if (index == 152) {
     return 1368;
    }
if (index == 153) {
     return 1374;
    }
if (index == 154) {
     return 1366;
    }
if (index == 155) {
     return 1369;
    }
if (index == 156) {
     return 1349;
    }
if (index == 157) {
     return 1348;
    }
if (index == 158) {
     return 1350;
    }
if (index == 159) {
     return 1333;
    }
if (index == 160) {
     return 1363;
    }
if (index == 161) {
     return 1358;
    }
if (index == 162) {
     return 1356;
    }
if (index == 163) {
     return 1354;
    }
if (index == 164) {
     return 1348;
    }
if (index == 165) {
     return 1358;
    }
if (index == 166) {
     return 1346;
    }
if (index == 167) {
     return 1361;
    }
if (index == 168) {
     return 1352;
    }
if (index == 169) {
     return 1357;
    }
if (index == 170) {
     return 1352;
    }
if (index == 171) {
     return 1348;
    }
if (index == 172) {
     return 1361;
    }
if (index == 173) {
     return 1357;
    }
if (index == 174) {
     return 1327;
    }
if (index == 175) {
     return 1340;
    }
if (index == 176) {
     return 1357;
    }
if (index == 177) {
     return 1372;
    }
if (index == 178) {
     return 1344;
    }
if (index == 179) {
     return 1380;
    }
if (index == 180) {
     return 1358;
    }
if (index == 181) {
     return 1347;
    }
if (index == 182) {
     return 1339;
    }
if (index == 183) {
     return 1359;
    }
if (index == 184) {
     return 1351;
    }
if (index == 185) {
     return 1346;
    }
if (index == 186) {
     return 1357;
    }
if (index == 187) {
     return 1342;
    }
if (index == 188) {
     return 1355;
    }
if (index == 189) {
     return 1348;
    }
if (index == 190) {
     return 1359;
    }
if (index == 191) {
     return 1351;
    }
if (index == 192) {
     return 1359;
    }
if (index == 193) {
     return 1342;
    }
if (index == 194) {
     return 1353;
    }
if (index == 195) {
     return 1351;
    }
if (index == 196) {
     return 1346;
    }
if (index == 197) {
     return 1350;
    }
if (index == 198) {
     return 1346;
    }
if (index == 199) {
     return 1322;
    }
if (index == 200) {
     return 1346;
    }
if (index == 201) {
     return 1362;
    }
if (index == 202) {
     return 1350;
    }
if (index == 203) {
     return 1346;
    }
if (index == 204) {
     return 1339;
    }
if (index == 205) {
     return 1342;
    }
if (index == 206) {
     return 1354;
    }
if (index == 207) {
     return 1379;
    }
if (index == 208) {
     return 1350;
    }
if (index == 209) {
     return 1302;
    }
if (index == 210) {
     return 1353;
    }
if (index == 211) {
     return 1359;
    }
if (index == 212) {
     return 1350;
    }
if (index == 213) {
     return 1352;
    }
if (index == 214) {
     return 1352;
    }
if (index == 215) {
     return 1340;
    }
if (index == 216) {
     return 1349;
    }
if (index == 217) {
     return 1364;
    }
if (index == 218) {
     return 1342;
    }
if (index == 219) {
     return 1313;
    }
if (index == 220) {
     return 1350;
    }
if (index == 221) {
     return 1328;
    }
if (index == 222) {
     return 1357;
    }
if (index == 223) {
     return 1362;
    }
if (index == 224) {
     return 1357;
    }
if (index == 225) {
     return 1364;
    }
if (index == 226) {
     return 1352;
    }
if (index == 227) {
     return 1361;
    }
if (index == 228) {
     return 1356;
    }
if (index == 229) {
     return 1339;
    }
if (index == 230) {
     return 1348;
    }
if (index == 231) {
     return 1351;
    }
if (index == 232) {
     return 1352;
    }
if (index == 233) {
     return 1339;
    }
if (index == 234) {
     return 1346;
    }
if (index == 235) {
     return 1331;
    }
if (index == 236) {
     return 1343;
    }
if (index == 237) {
     return 1340;
    }
if (index == 238) {
     return 1335;
    }
if (index == 239) {
     return 1345;
    }
if (index == 240) {
     return 1337;
    }
if (index == 241) {
     return 1332;
    }
if (index == 242) {
     return 1340;
    }
if (index == 243) {
     return 1341;
    }
if (index == 244) {
     return 1348;
    }
if (index == 245) {
     return 1339;
    }
if (index == 246) {
     return 1345;
    }
if (index == 247) {
     return 1341;
    }
if (index == 248) {
     return 1350;
    }
if (index == 249) {
     return 1337;
    }
if (index == 250) {
     return 1360;
    }
if (index == 251) {
     return 1310;
    }
if (index == 252) {
     return 1354;
    }
if (index == 253) {
     return 1333;
    }
if (index == 254) {
     return 1345;
    }
if (index == 255) {
     return 1307;
    }
if (index == 256) {
     return 1346;
    }
if (index == 257) {
     return 1330;
    }
if (index == 258) {
     return 1344;
    }
if (index == 259) {
     return 1342;
    }
if (index == 260) {
     return 1350;
    }
if (index == 261) {
     return 1339;
    }
if (index == 262) {
     return 1342;
    }
if (index == 263) {
     return 1335;
    }
if (index == 264) {
     return 1352;
    }
if (index == 265) {
     return 1333;
    }
if (index == 266) {
     return 1341;
    }
if (index == 267) {
     return 1329;
    }
if (index == 268) {
     return 1342;
    }
if (index == 269) {
     return 1322;
    }
if (index == 270) {
     return 1344;
    }
if (index == 271) {
     return 1314;
    }
if (index == 272) {
     return 1340;
    }
if (index == 273) {
     return 1330;
    }
if (index == 274) {
     return 1349;
    }
if (index == 275) {
     return 1335;
    }
if (index == 276) {
     return 1339;
    }
if (index == 277) {
     return 1339;
    }
if (index == 278) {
     return 1344;
    }
if (index == 279) {
     return 1333;
    }
if (index == 280) {
     return 1350;
    }
if (index == 281) {
     return 1335;
    }
if (index == 282) {
     return 1341;
    }
if (index == 283) {
     return 1313;
    }
if (index == 284) {
     return 1317;
    }
if (index == 285) {
     return 1330;
    }
if (index == 286) {
     return 1322;
    }
if (index == 287) {
     return 1308;
    }
if (index == 288) {
     return 1312;
    }
if (index == 289) {
     return 1286;
    }
if (index == 290) {
     return 1354;
    }
if (index == 291) {
     return 1328;
    }
if (index == 292) {
     return 1346;
    }
if (index == 293) {
     return 1336;
    }
if (index == 294) {
     return 1346;
    }
if (index == 295) {
     return 1335;
    }
if (index == 296) {
     return 1388;
    }
if (index == 297) {
     return 1310;
    }
if (index == 298) {
     return 1358;
    }
if (index == 299) {
     return 1324;
    }
if (index == 300) {
     return 1351;
    }
if (index == 301) {
     return 1325;
    }
if (index == 302) {
     return 1351;
    }
if (index == 303) {
     return 1339;
    }
if (index == 304) {
     return 1354;
    }
if (index == 305) {
     return 1318;
    }
if (index == 306) {
     return 1318;
    }
if (index == 307) {
     return 1325;
    }
if (index == 308) {
     return 1340;
    }
if (index == 309) {
     return 1345;
    }
if (index == 310) {
     return 1314;
    }
if (index == 311) {
     return 1348;
    }
if (index == 312) {
     return 1348;
    }
if (index == 313) {
     return 1324;
    }
if (index == 314) {
     return 1352;
    }
if (index == 315) {
     return 1277;
    }
if (index == 316) {
     return 1354;
    }
if (index == 317) {
     return 1339;
    }
if (index == 318) {
     return 1359;
    }
if (index == 319) {
     return 1348;
    }
if (index == 320) {
     return 1365;
    }
if (index == 321) {
     return 1362;
    }
if (index == 322) {
     return 1361;
    }
if (index == 323) {
     return 1363;
    }
if (index == 324) {
     return 1348;
    }
if (index == 325) {
     return 1339;
    }
if (index > 325) {
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
    var url = '/fedora/get/seapage:232_' + imgStr + '/digitalImage';
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
br.numLeafs = 326;

// Book title and the URL used for the book title link
br.bookTitle= "Notes from a journal of research into the natural history of the countries visited during the voyage of H. M. S. Samarang : under the command of Captain Sir Edward Belcher";
br.bookAuthor= "Adams, Arthur";
br.bookPub= "London: Reeve, Benham and Reeve, 1848";
br.bookKeyword= "Samarang (Ship : 1843-1846)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Natural history--Malay Archipelago<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malay Archipelago--Description and travel";
br.bookUrl  = '/catalog/sea:232';

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
