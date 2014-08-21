//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 943;
    }
if (index == 1) {
     return 907;
    }
if (index == 2) {
     return 916;
    }
if (index == 3) {
     return 907;
    }
if (index == 4) {
     return 943;
    }
if (index == 5) {
     return 907;
    }
if (index == 6) {
     return 943;
    }
if (index == 7) {
     return 900;
    }
if (index == 8) {
     return 959;
    }
if (index == 9) {
     return 907;
    }
if (index == 10) {
     return 963;
    }
if (index == 11) {
     return 893;
    }
if (index == 12) {
     return 899;
    }
if (index == 13) {
     return 881;
    }
if (index == 14) {
     return 899;
    }
if (index == 15) {
     return 902;
    }
if (index == 16) {
     return 899;
    }
if (index == 17) {
     return 881;
    }
if (index == 18) {
     return 916;
    }
if (index == 19) {
     return 916;
    }
if (index == 20) {
     return 914;
    }
if (index == 21) {
     return 910;
    }
if (index == 22) {
     return 899;
    }
if (index == 23) {
     return 926;
    }
if (index == 24) {
     return 926;
    }
if (index == 25) {
     return 913;
    }
if (index == 26) {
     return 951;
    }
if (index == 27) {
     return 881;
    }
if (index == 28) {
     return 960;
    }
if (index == 29) {
     return 881;
    }
if (index == 30) {
     return 971;
    }
if (index == 31) {
     return 892;
    }
if (index == 32) {
     return 966;
    }
if (index == 33) {
     return 889;
    }
if (index == 34) {
     return 982;
    }
if (index == 35) {
     return 905;
    }
if (index == 36) {
     return 970;
    }
if (index == 37) {
     return 941;
    }
if (index == 38) {
     return 898;
    }
if (index == 39) {
     return 899;
    }
if (index == 40) {
     return 898;
    }
if (index == 41) {
     return 908;
    }
if (index == 42) {
     return 898;
    }
if (index == 43) {
     return 1310;
    }
if (index == 44) {
     return 898;
    }
if (index == 45) {
     return 912;
    }
if (index == 46) {
     return 898;
    }
if (index == 47) {
     return 899;
    }
if (index == 48) {
     return 898;
    }
if (index == 49) {
     return 910;
    }
if (index == 50) {
     return 1331;
    }
if (index == 51) {
     return 1340;
    }
if (index == 52) {
     return 898;
    }
if (index == 53) {
     return 922;
    }
if (index == 54) {
     return 1331;
    }
if (index == 55) {
     return 899;
    }
if (index == 56) {
     return 910;
    }
if (index == 57) {
     return 918;
    }
if (index == 58) {
     return 898;
    }
if (index == 59) {
     return 899;
    }
if (index == 60) {
     return 908;
    }
if (index == 61) {
     return 899;
    }
if (index == 62) {
     return 908;
    }
if (index == 63) {
     return 899;
    }
if (index == 64) {
     return 908;
    }
if (index == 65) {
     return 919;
    }
if (index == 66) {
     return 902;
    }
if (index == 67) {
     return 905;
    }
if (index == 68) {
     return 898;
    }
if (index == 69) {
     return 758;
    }
if (index == 70) {
     return 911;
    }
if (index == 71) {
     return 899;
    }
if (index == 72) {
     return 908;
    }
if (index == 73) {
     return 896;
    }
if (index == 74) {
     return 870;
    }
if (index == 75) {
     return 893;
    }
if (index == 76) {
     return 856;
    }
if (index == 77) {
     return 880;
    }
if (index == 78) {
     return 876;
    }
if (index == 79) {
     return 894;
    }
if (index == 80) {
     return 854;
    }
if (index == 81) {
     return 889;
    }
if (index == 82) {
     return 854;
    }
if (index == 83) {
     return 1348;
    }
if (index == 84) {
     return 864;
    }
if (index == 85) {
     return 894;
    }
if (index == 86) {
     return 854;
    }
if (index == 87) {
     return 886;
    }
if (index == 88) {
     return 1153;
    }
if (index == 89) {
     return 872;
    }
if (index == 90) {
     return 876;
    }
if (index == 91) {
     return 902;
    }
if (index == 92) {
     return 864;
    }
if (index == 93) {
     return 898;
    }
if (index == 94) {
     return 865;
    }
if (index == 95) {
     return 865;
    }
if (index == 96) {
     return 855;
    }
if (index == 97) {
     return 862;
    }
if (index == 98) {
     return 1176;
    }
if (index == 99) {
     return 872;
    }
if (index == 100) {
     return 865;
    }
if (index == 101) {
     return 887;
    }
if (index == 102) {
     return 873;
    }
if (index == 103) {
     return 886;
    }
if (index == 104) {
     return 866;
    }
if (index == 105) {
     return 886;
    }
if (index == 106) {
     return 858;
    }
if (index == 107) {
     return 890;
    }
if (index == 108) {
     return 854;
    }
if (index == 109) {
     return 884;
    }
if (index == 110) {
     return 854;
    }
if (index == 111) {
     return 891;
    }
if (index == 112) {
     return 861;
    }
if (index == 113) {
     return 872;
    }
if (index == 114) {
     return 854;
    }
if (index == 115) {
     return 872;
    }
if (index == 116) {
     return 849;
    }
if (index == 117) {
     return 880;
    }
if (index == 118) {
     return 852;
    }
if (index == 119) {
     return 895;
    }
if (index == 120) {
     return 854;
    }
if (index == 121) {
     return 872;
    }
if (index == 122) {
     return 863;
    }
if (index == 123) {
     return 1186;
    }
if (index == 124) {
     return 876;
    }
if (index == 125) {
     return 872;
    }
if (index == 126) {
     return 863;
    }
if (index == 127) {
     return 872;
    }
if (index == 128) {
     return 837;
    }
if (index == 129) {
     return 883;
    }
if (index == 130) {
     return 863;
    }
if (index == 131) {
     return 876;
    }
if (index == 132) {
     return 877;
    }
if (index == 133) {
     return 875;
    }
if (index == 134) {
     return 857;
    }
if (index == 135) {
     return 881;
    }
if (index == 136) {
     return 837;
    }
if (index == 137) {
     return 872;
    }
if (index == 138) {
     return 839;
    }
if (index == 139) {
     return 872;
    }
if (index == 140) {
     return 864;
    }
if (index == 141) {
     return 882;
    }
if (index == 142) {
     return 858;
    }
if (index == 143) {
     return 844;
    }
if (index == 144) {
     return 863;
    }
if (index == 145) {
     return 872;
    }
if (index == 146) {
     return 863;
    }
if (index == 147) {
     return 872;
    }
if (index == 148) {
     return 1348;
    }
if (index == 149) {
     return 1167;
    }
if (index == 150) {
     return 863;
    }
if (index == 151) {
     return 846;
    }
if (index == 152) {
     return 863;
    }
if (index == 153) {
     return 843;
    }
if (index == 154) {
     return 863;
    }
if (index == 155) {
     return 1348;
    }
if (index == 156) {
     return 863;
    }
if (index == 157) {
     return 863;
    }
if (index == 158) {
     return 871;
    }
if (index == 159) {
     return 872;
    }
if (index == 160) {
     return 863;
    }
if (index == 161) {
     return 863;
    }
if (index == 162) {
     return 866;
    }
if (index == 163) {
     return 834;
    }
if (index == 164) {
     return 1348;
    }
if (index == 165) {
     return 1348;
    }
if (index == 166) {
     return 877;
    }
if (index == 167) {
     return 881;
    }
if (index == 168) {
     return 862;
    }
if (index == 169) {
     return 826;
    }
if (index == 170) {
     return 870;
    }
if (index == 171) {
     return 899;
    }
if (index == 172) {
     return 874;
    }
if (index == 173) {
     return 895;
    }
if (index == 174) {
     return 888;
    }
if (index == 175) {
     return 886;
    }
if (index == 176) {
     return 887;
    }
if (index == 177) {
     return 892;
    }
if (index == 178) {
     return 878;
    }
if (index == 179) {
     return 871;
    }
if (index == 180) {
     return 881;
    }
if (index == 181) {
     return 884;
    }
if (index == 182) {
     return 872;
    }
if (index == 183) {
     return 893;
    }
if (index == 184) {
     return 859;
    }
if (index == 185) {
     return 904;
    }
if (index == 186) {
     return 885;
    }
if (index == 187) {
     return 871;
    }
if (index == 188) {
     return 842;
    }
if (index == 189) {
     return 872;
    }
if (index == 190) {
     return 879;
    }
if (index == 191) {
     return 863;
    }
if (index == 192) {
     return 880;
    }
if (index == 193) {
     return 870;
    }
if (index == 194) {
     return 847;
    }
if (index == 195) {
     return 879;
    }
if (index == 196) {
     return 868;
    }
if (index == 197) {
     return 885;
    }
if (index == 198) {
     return 882;
    }
if (index == 199) {
     return 872;
    }
if (index == 200) {
     return 841;
    }
if (index == 201) {
     return 886;
    }
if (index == 202) {
     return 866;
    }
if (index == 203) {
     return 880;
    }
if (index == 204) {
     return 863;
    }
if (index == 205) {
     return 886;
    }
if (index == 206) {
     return 866;
    }
if (index == 207) {
     return 878;
    }
if (index == 208) {
     return 874;
    }
if (index == 209) {
     return 885;
    }
if (index == 210) {
     return 855;
    }
if (index == 211) {
     return 871;
    }
if (index == 212) {
     return 852;
    }
if (index == 213) {
     return 867;
    }
if (index == 214) {
     return 845;
    }
if (index == 215) {
     return 884;
    }
if (index == 216) {
     return 853;
    }
if (index == 217) {
     return 879;
    }
if (index == 218) {
     return 877;
    }
if (index == 219) {
     return 877;
    }
if (index == 220) {
     return 864;
    }
if (index == 221) {
     return 873;
    }
if (index == 222) {
     return 859;
    }
if (index == 223) {
     return 878;
    }
if (index == 224) {
     return 837;
    }
if (index == 225) {
     return 863;
    }
if (index == 226) {
     return 848;
    }
if (index == 227) {
     return 878;
    }
if (index == 228) {
     return 888;
    }
if (index == 229) {
     return 859;
    }
if (index == 230) {
     return 857;
    }
if (index == 231) {
     return 885;
    }
if (index == 232) {
     return 854;
    }
if (index == 233) {
     return 880;
    }
if (index == 234) {
     return 896;
    }
if (index == 235) {
     return 882;
    }
if (index == 236) {
     return 857;
    }
if (index == 237) {
     return 882;
    }
if (index == 238) {
     return 866;
    }
if (index == 239) {
     return 863;
    }
if (index == 240) {
     return 841;
    }
if (index == 241) {
     return 841;
    }
if (index == 242) {
     return 836;
    }
if (index == 243) {
     return 879;
    }
if (index == 244) {
     return 869;
    }
if (index == 245) {
     return 867;
    }
if (index == 246) {
     return 857;
    }
if (index == 247) {
     return 874;
    }
if (index == 248) {
     return 1348;
    }
if (index == 249) {
     return 863;
    }
if (index == 250) {
     return 857;
    }
if (index == 251) {
     return 874;
    }
if (index == 252) {
     return 862;
    }
if (index == 253) {
     return 863;
    }
if (index == 254) {
     return 854;
    }
if (index == 255) {
     return 863;
    }
if (index == 256) {
     return 854;
    }
if (index == 257) {
     return 863;
    }
if (index == 258) {
     return 854;
    }
if (index == 259) {
     return 868;
    }
if (index == 260) {
     return 828;
    }
if (index == 261) {
     return 863;
    }
if (index == 262) {
     return 854;
    }
if (index == 263) {
     return 871;
    }
if (index == 264) {
     return 854;
    }
if (index == 265) {
     return 839;
    }
if (index == 266) {
     return 884;
    }
if (index == 267) {
     return 824;
    }
if (index == 268) {
     return 865;
    }
if (index == 269) {
     return 837;
    }
if (index == 270) {
     return 854;
    }
if (index == 271) {
     return 824;
    }
if (index == 272) {
     return 854;
    }
if (index == 273) {
     return 863;
    }
if (index == 274) {
     return 854;
    }
if (index == 275) {
     return 1276;
    }
if (index == 276) {
     return 1013;
    }
if (index > 276) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1366;
    }
if (index == 1) {
     return 1366;
    }
if (index == 2) {
     return 1370;
    }
if (index == 3) {
     return 1366;
    }
if (index == 4) {
     return 1375;
    }
if (index == 5) {
     return 1366;
    }
if (index == 6) {
     return 1375;
    }
if (index == 7) {
     return 1337;
    }
if (index == 8) {
     return 1386;
    }
if (index == 9) {
     return 1366;
    }
if (index == 10) {
     return 1388;
    }
if (index == 11) {
     return 1339;
    }
if (index == 12) {
     return 1331;
    }
if (index == 13) {
     return 1331;
    }
if (index == 14) {
     return 1331;
    }
if (index == 15) {
     return 1345;
    }
if (index == 16) {
     return 1331;
    }
if (index == 17) {
     return 1331;
    }
if (index == 18) {
     return 1342;
    }
if (index == 19) {
     return 1354;
    }
if (index == 20) {
     return 1341;
    }
if (index == 21) {
     return 1350;
    }
if (index == 22) {
     return 1331;
    }
if (index == 23) {
     return 1360;
    }
if (index == 24) {
     return 1349;
    }
if (index == 25) {
     return 1352;
    }
if (index == 26) {
     return 1365;
    }
if (index == 27) {
     return 1331;
    }
if (index == 28) {
     return 1371;
    }
if (index == 29) {
     return 1331;
    }
if (index == 30) {
     return 1379;
    }
if (index == 31) {
     return 1338;
    }
if (index == 32) {
     return 1375;
    }
if (index == 33) {
     return 1336;
    }
if (index == 34) {
     return 1386;
    }
if (index == 35) {
     return 1346;
    }
if (index == 36) {
     return 1378;
    }
if (index == 37) {
     return 1368;
    }
if (index == 38) {
     return 1331;
    }
if (index == 39) {
     return 1340;
    }
if (index == 40) {
     return 1331;
    }
if (index == 41) {
     return 1346;
    }
if (index == 42) {
     return 1331;
    }
if (index == 43) {
     return 869;
    }
if (index == 44) {
     return 1331;
    }
if (index == 45) {
     return 1349;
    }
if (index == 46) {
     return 1331;
    }
if (index == 47) {
     return 1340;
    }
if (index == 48) {
     return 1331;
    }
if (index == 49) {
     return 1347;
    }
if (index == 50) {
     return 898;
    }
if (index == 51) {
     return 899;
    }
if (index == 52) {
     return 1331;
    }
if (index == 53) {
     return 1355;
    }
if (index == 54) {
     return 898;
    }
if (index == 55) {
     return 1340;
    }
if (index == 56) {
     return 1339;
    }
if (index == 57) {
     return 1353;
    }
if (index == 58) {
     return 1331;
    }
if (index == 59) {
     return 1340;
    }
if (index == 60) {
     return 1338;
    }
if (index == 61) {
     return 1340;
    }
if (index == 62) {
     return 1338;
    }
if (index == 63) {
     return 1340;
    }
if (index == 64) {
     return 1338;
    }
if (index == 65) {
     return 1353;
    }
if (index == 66) {
     return 1334;
    }
if (index == 67) {
     return 1344;
    }
if (index == 68) {
     return 1331;
    }
if (index == 69) {
     return 1304;
    }
if (index == 70) {
     return 1340;
    }
if (index == 71) {
     return 1340;
    }
if (index == 72) {
     return 1338;
    }
if (index == 73) {
     return 1372;
    }
if (index == 74) {
     return 1350;
    }
if (index == 75) {
     return 1361;
    }
if (index == 76) {
     return 1357;
    }
if (index == 77) {
     return 1353;
    }
if (index == 78) {
     return 1351;
    }
if (index == 79) {
     return 1362;
    }
if (index == 80) {
     return 1348;
    }
if (index == 81) {
     return 1359;
    }
if (index == 82) {
     return 1348;
    }
if (index == 83) {
     return 872;
    }
if (index == 84) {
     return 1354;
    }
if (index == 85) {
     return 1362;
    }
if (index == 86) {
     return 1348;
    }
if (index == 87) {
     return 1357;
    }
if (index == 88) {
     return 807;
    }
if (index == 89) {
     return 1348;
    }
if (index == 90) {
     return 1361;
    }
if (index == 91) {
     return 1367;
    }
if (index == 92) {
     return 1354;
    }
if (index == 93) {
     return 1365;
    }
if (index == 94) {
     return 1355;
    }
if (index == 95) {
     return 1348;
    }
if (index == 96) {
     return 1341;
    }
if (index == 97) {
     return 1345;
    }
if (index == 98) {
     return 772;
    }
if (index == 99) {
     return 1348;
    }
if (index == 100) {
     return 1355;
    }
if (index == 101) {
     return 1357;
    }
if (index == 102) {
     return 1360;
    }
if (index == 103) {
     return 1357;
    }
if (index == 104) {
     return 1356;
    }
if (index == 105) {
     return 1357;
    }
if (index == 106) {
     return 1350;
    }
if (index == 107) {
     return 1360;
    }
if (index == 108) {
     return 1348;
    }
if (index == 109) {
     return 1356;
    }
if (index == 110) {
     return 1348;
    }
if (index == 111) {
     return 1360;
    }
if (index == 112) {
     return 1352;
    }
if (index == 113) {
     return 1348;
    }
if (index == 114) {
     return 1348;
    }
if (index == 115) {
     return 1348;
    }
if (index == 116) {
     return 1337;
    }
if (index == 117) {
     return 1353;
    }
if (index == 118) {
     return 1346;
    }
if (index == 119) {
     return 1363;
    }
if (index == 120) {
     return 1348;
    }
if (index == 121) {
     return 1348;
    }
if (index == 122) {
     return 1348;
    }
if (index == 123) {
     return 808;
    }
if (index == 124) {
     return 1377;
    }
if (index == 125) {
     return 1348;
    }
if (index == 126) {
     return 1348;
    }
if (index == 127) {
     return 1348;
    }
if (index == 128) {
     return 1355;
    }
if (index == 129) {
     return 1355;
    }
if (index == 130) {
     return 1348;
    }
if (index == 131) {
     return 1351;
    }
if (index == 132) {
     return 1356;
    }
if (index == 133) {
     return 1350;
    }
if (index == 134) {
     return 1351;
    }
if (index == 135) {
     return 1354;
    }
if (index == 136) {
     return 1348;
    }
if (index == 137) {
     return 1348;
    }
if (index == 138) {
     return 1348;
    }
if (index == 139) {
     return 1348;
    }
if (index == 140) {
     return 1341;
    }
if (index == 141) {
     return 1354;
    }
if (index == 142) {
     return 1335;
    }
if (index == 143) {
     return 1351;
    }
if (index == 144) {
     return 1348;
    }
if (index == 145) {
     return 1348;
    }
if (index == 146) {
     return 1348;
    }
if (index == 147) {
     return 1348;
    }
if (index == 148) {
     return 863;
    }
if (index == 149) {
     return 809;
    }
if (index == 150) {
     return 1348;
    }
if (index == 151) {
     return 1348;
    }
if (index == 152) {
     return 1348;
    }
if (index == 153) {
     return 1347;
    }
if (index == 154) {
     return 1348;
    }
if (index == 155) {
     return 817;
    }
if (index == 156) {
     return 1348;
    }
if (index == 157) {
     return 1348;
    }
if (index == 158) {
     return 1353;
    }
if (index == 159) {
     return 1353;
    }
if (index == 160) {
     return 1348;
    }
if (index == 161) {
     return 1348;
    }
if (index == 162) {
     return 1350;
    }
if (index == 163) {
     return 1352;
    }
if (index == 164) {
     return 850;
    }
if (index == 165) {
     return 835;
    }
if (index == 166) {
     return 1345;
    }
if (index == 167) {
     return 1359;
    }
if (index == 168) {
     return 1340;
    }
if (index == 169) {
     return 1346;
    }
if (index == 170) {
     return 1339;
    }
if (index == 171) {
     return 1360;
    }
if (index == 172) {
     return 1355;
    }
if (index == 173) {
     return 1357;
    }
if (index == 174) {
     return 1364;
    }
if (index == 175) {
     return 1351;
    }
if (index == 176) {
     return 1363;
    }
if (index == 177) {
     return 1355;
    }
if (index == 178) {
     return 1357;
    }
if (index == 179) {
     return 1362;
    }
if (index == 180) {
     return 1352;
    }
if (index == 181) {
     return 1350;
    }
if (index == 182) {
     return 1353;
    }
if (index == 183) {
     return 1356;
    }
if (index == 184) {
     return 1362;
    }
if (index == 185) {
     return 1363;
    }
if (index == 186) {
     return 1353;
    }
if (index == 187) {
     return 1351;
    }
if (index == 188) {
     return 1352;
    }
if (index == 189) {
     return 1353;
    }
if (index == 190) {
     return 1358;
    }
if (index == 191) {
     return 1348;
    }
if (index == 192) {
     return 1359;
    }
if (index == 193) {
     return 1352;
    }
if (index == 194) {
     return 1361;
    }
if (index == 195) {
     return 1358;
    }
if (index == 196) {
     return 1343;
    }
if (index == 197) {
     return 1362;
    }
if (index == 198) {
     return 1349;
    }
if (index == 199) {
     return 1353;
    }
if (index == 200) {
     return 1357;
    }
if (index == 201) {
     return 1362;
    }
if (index == 202) {
     return 1361;
    }
if (index == 203) {
     return 1359;
    }
if (index == 204) {
     return 1359;
    }
if (index == 205) {
     return 1362;
    }
if (index == 206) {
     return 1355;
    }
if (index == 207) {
     return 1357;
    }
if (index == 208) {
     return 1360;
    }
if (index == 209) {
     return 1362;
    }
if (index == 210) {
     return 1357;
    }
if (index == 211) {
     return 1353;
    }
if (index == 212) {
     return 1352;
    }
if (index == 213) {
     return 1351;
    }
if (index == 214) {
     return 1348;
    }
if (index == 215) {
     return 1361;
    }
if (index == 216) {
     return 1351;
    }
if (index == 217) {
     return 1358;
    }
if (index == 218) {
     return 1358;
    }
if (index == 219) {
     return 1356;
    }
if (index == 220) {
     return 1354;
    }
if (index == 221) {
     return 1354;
    }
if (index == 222) {
     return 1349;
    }
if (index == 223) {
     return 1357;
    }
if (index == 224) {
     return 1351;
    }
if (index == 225) {
     return 1348;
    }
if (index == 226) {
     return 1348;
    }
if (index == 227) {
     return 1357;
    }
if (index == 228) {
     return 1352;
    }
if (index == 229) {
     return 1357;
    }
if (index == 230) {
     return 1351;
    }
if (index == 231) {
     return 1362;
    }
if (index == 232) {
     return 1350;
    }
if (index == 233) {
     return 1359;
    }
if (index == 234) {
     return 1357;
    }
if (index == 235) {
     return 1360;
    }
if (index == 236) {
     return 1359;
    }
if (index == 237) {
     return 1360;
    }
if (index == 238) {
     return 1356;
    }
if (index == 239) {
     return 1348;
    }
if (index == 240) {
     return 1348;
    }
if (index == 241) {
     return 1353;
    }
if (index == 242) {
     return 1351;
    }
if (index == 243) {
     return 1358;
    }
if (index == 244) {
     return 1357;
    }
if (index == 245) {
     return 1351;
    }
if (index == 246) {
     return 1350;
    }
if (index == 247) {
     return 1355;
    }
if (index == 248) {
     return 854;
    }
if (index == 249) {
     return 1348;
    }
if (index == 250) {
     return 1350;
    }
if (index == 251) {
     return 1355;
    }
if (index == 252) {
     return 1346;
    }
if (index == 253) {
     return 1348;
    }
if (index == 254) {
     return 1335;
    }
if (index == 255) {
     return 1348;
    }
if (index == 256) {
     return 1348;
    }
if (index == 257) {
     return 1348;
    }
if (index == 258) {
     return 1348;
    }
if (index == 259) {
     return 1351;
    }
if (index == 260) {
     return 1350;
    }
if (index == 261) {
     return 1348;
    }
if (index == 262) {
     return 1348;
    }
if (index == 263) {
     return 1353;
    }
if (index == 264) {
     return 1348;
    }
if (index == 265) {
     return 1343;
    }
if (index == 266) {
     return 1367;
    }
if (index == 267) {
     return 1346;
    }
if (index == 268) {
     return 1355;
    }
if (index == 269) {
     return 1351;
    }
if (index == 270) {
     return 1348;
    }
if (index == 271) {
     return 1348;
    }
if (index == 272) {
     return 1348;
    }
if (index == 273) {
     return 1348;
    }
if (index == 274) {
     return 1348;
    }
if (index == 275) {
     return 1468;
    }
if (index == 276) {
     return 1448;
    }
if (index > 276) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:162b_' + imgStr + '/digitalImage';
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
br.numLeafs = 277;

// Book title and the URL used for the book title link
br.bookTitle= "Through Central Borneo : an account of two years' travel in the land of the head-hunters between the years 1913 and 1917, vol.2";
br.bookAuthor= "Lumholtz, Carl";
br.bookPub= "New York: C. Scribner's Sons, 1920";
br.bookKeyword= "Ethnology--Borneo<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Natural history--Borneo<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Borneo--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:162b';

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
