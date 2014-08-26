//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1082;
    }
if (index == 1) {
     return 1032;
    }
if (index == 2) {
     return 1090;
    }
if (index == 3) {
     return 925;
    }
if (index == 4) {
     return 938;
    }
if (index == 5) {
     return 1060;
    }
if (index == 6) {
     return 977;
    }
if (index == 7) {
     return 998;
    }
if (index == 8) {
     return 977;
    }
if (index == 9) {
     return 979;
    }
if (index == 10) {
     return 973;
    }
if (index == 11) {
     return 979;
    }
if (index == 12) {
     return 961;
    }
if (index == 13) {
     return 991;
    }
if (index == 14) {
     return 997;
    }
if (index == 15) {
     return 993;
    }
if (index == 16) {
     return 928;
    }
if (index == 17) {
     return 984;
    }
if (index == 18) {
     return 971;
    }
if (index == 19) {
     return 999;
    }
if (index == 20) {
     return 965;
    }
if (index == 21) {
     return 889;
    }
if (index == 22) {
     return 1022;
    }
if (index == 23) {
     return 964;
    }
if (index == 24) {
     return 1496;
    }
if (index == 25) {
     return 984;
    }
if (index == 26) {
     return 934;
    }
if (index == 27) {
     return 949;
    }
if (index == 28) {
     return 982;
    }
if (index == 29) {
     return 1022;
    }
if (index == 30) {
     return 1022;
    }
if (index == 31) {
     return 1014;
    }
if (index == 32) {
     return 1022;
    }
if (index == 33) {
     return 1022;
    }
if (index == 34) {
     return 1022;
    }
if (index == 35) {
     return 987;
    }
if (index == 36) {
     return 974;
    }
if (index == 37) {
     return 958;
    }
if (index == 38) {
     return 979;
    }
if (index == 39) {
     return 992;
    }
if (index == 40) {
     return 971;
    }
if (index == 41) {
     return 987;
    }
if (index == 42) {
     return 953;
    }
if (index == 43) {
     return 948;
    }
if (index == 44) {
     return 976;
    }
if (index == 45) {
     return 954;
    }
if (index == 46) {
     return 984;
    }
if (index == 47) {
     return 966;
    }
if (index == 48) {
     return 984;
    }
if (index == 49) {
     return 988;
    }
if (index == 50) {
     return 942;
    }
if (index == 51) {
     return 1003;
    }
if (index == 52) {
     return 1022;
    }
if (index == 53) {
     return 1028;
    }
if (index == 54) {
     return 1022;
    }
if (index == 55) {
     return 1011;
    }
if (index == 56) {
     return 1005;
    }
if (index == 57) {
     return 975;
    }
if (index == 58) {
     return 955;
    }
if (index == 59) {
     return 993;
    }
if (index == 60) {
     return 977;
    }
if (index == 61) {
     return 927;
    }
if (index == 62) {
     return 991;
    }
if (index == 63) {
     return 998;
    }
if (index == 64) {
     return 1022;
    }
if (index == 65) {
     return 1018;
    }
if (index == 66) {
     return 977;
    }
if (index == 67) {
     return 990;
    }
if (index == 68) {
     return 982;
    }
if (index == 69) {
     return 979;
    }
if (index == 70) {
     return 984;
    }
if (index == 71) {
     return 987;
    }
if (index == 72) {
     return 979;
    }
if (index == 73) {
     return 989;
    }
if (index == 74) {
     return 996;
    }
if (index == 75) {
     return 995;
    }
if (index == 76) {
     return 1007;
    }
if (index == 77) {
     return 998;
    }
if (index == 78) {
     return 962;
    }
if (index == 79) {
     return 1421;
    }
if (index == 80) {
     return 988;
    }
if (index == 81) {
     return 1008;
    }
if (index == 82) {
     return 999;
    }
if (index == 83) {
     return 999;
    }
if (index == 84) {
     return 1022;
    }
if (index == 85) {
     return 1022;
    }
if (index == 86) {
     return 974;
    }
if (index == 87) {
     return 1007;
    }
if (index == 88) {
     return 1022;
    }
if (index == 89) {
     return 987;
    }
if (index == 90) {
     return 977;
    }
if (index == 91) {
     return 983;
    }
if (index == 92) {
     return 976;
    }
if (index == 93) {
     return 974;
    }
if (index == 94) {
     return 960;
    }
if (index == 95) {
     return 937;
    }
if (index == 96) {
     return 989;
    }
if (index == 97) {
     return 1007;
    }
if (index == 98) {
     return 987;
    }
if (index == 99) {
     return 989;
    }
if (index == 100) {
     return 921;
    }
if (index == 101) {
     return 863;
    }
if (index == 102) {
     return 944;
    }
if (index == 103) {
     return 912;
    }
if (index == 104) {
     return 928;
    }
if (index == 105) {
     return 941;
    }
if (index == 106) {
     return 935;
    }
if (index == 107) {
     return 956;
    }
if (index == 108) {
     return 1037;
    }
if (index == 109) {
     return 976;
    }
if (index == 110) {
     return 950;
    }
if (index == 111) {
     return 1382;
    }
if (index == 112) {
     return 983;
    }
if (index == 113) {
     return 1025;
    }
if (index == 114) {
     return 989;
    }
if (index == 115) {
     return 994;
    }
if (index == 116) {
     return 952;
    }
if (index == 117) {
     return 974;
    }
if (index == 118) {
     return 978;
    }
if (index == 119) {
     return 995;
    }
if (index == 120) {
     return 943;
    }
if (index == 121) {
     return 977;
    }
if (index == 122) {
     return 994;
    }
if (index == 123) {
     return 1004;
    }
if (index == 124) {
     return 985;
    }
if (index == 125) {
     return 990;
    }
if (index == 126) {
     return 1004;
    }
if (index == 127) {
     return 943;
    }
if (index == 128) {
     return 958;
    }
if (index == 129) {
     return 860;
    }
if (index == 130) {
     return 968;
    }
if (index == 131) {
     return 945;
    }
if (index == 132) {
     return 911;
    }
if (index == 133) {
     return 988;
    }
if (index == 134) {
     return 995;
    }
if (index == 135) {
     return 1017;
    }
if (index == 136) {
     return 1428;
    }
if (index == 137) {
     return 928;
    }
if (index == 138) {
     return 950;
    }
if (index == 139) {
     return 986;
    }
if (index == 140) {
     return 1040;
    }
if (index == 141) {
     return 1516;
    }
if (index == 142) {
     return 996;
    }
if (index == 143) {
     return 1042;
    }
if (index == 144) {
     return 1031;
    }
if (index == 145) {
     return 1017;
    }
if (index == 146) {
     return 999;
    }
if (index == 147) {
     return 1003;
    }
if (index == 148) {
     return 993;
    }
if (index == 149) {
     return 993;
    }
if (index == 150) {
     return 1005;
    }
if (index == 151) {
     return 1028;
    }
if (index == 152) {
     return 1035;
    }
if (index == 153) {
     return 984;
    }
if (index == 154) {
     return 999;
    }
if (index == 155) {
     return 1011;
    }
if (index == 156) {
     return 1005;
    }
if (index == 157) {
     return 997;
    }
if (index == 158) {
     return 998;
    }
if (index == 159) {
     return 1024;
    }
if (index == 160) {
     return 1019;
    }
if (index == 161) {
     return 1014;
    }
if (index == 162) {
     return 1017;
    }
if (index == 163) {
     return 1027;
    }
if (index == 164) {
     return 1037;
    }
if (index == 165) {
     return 993;
    }
if (index == 166) {
     return 1047;
    }
if (index == 167) {
     return 1008;
    }
if (index == 168) {
     return 1009;
    }
if (index == 169) {
     return 1058;
    }
if (index == 170) {
     return 1062;
    }
if (index == 171) {
     return 1040;
    }
if (index == 172) {
     return 1051;
    }
if (index == 173) {
     return 1004;
    }
if (index == 174) {
     return 992;
    }
if (index == 175) {
     return 1022;
    }
if (index == 176) {
     return 1527;
    }
if (index == 177) {
     return 976;
    }
if (index == 178) {
     return 967;
    }
if (index == 179) {
     return 1012;
    }
if (index == 180) {
     return 1022;
    }
if (index == 181) {
     return 1004;
    }
if (index == 182) {
     return 1026;
    }
if (index == 183) {
     return 1044;
    }
if (index == 184) {
     return 1024;
    }
if (index == 185) {
     return 999;
    }
if (index == 186) {
     return 1030;
    }
if (index == 187) {
     return 1532;
    }
if (index == 188) {
     return 1019;
    }
if (index == 189) {
     return 1038;
    }
if (index == 190) {
     return 1047;
    }
if (index == 191) {
     return 1002;
    }
if (index == 192) {
     return 1036;
    }
if (index == 193) {
     return 1001;
    }
if (index == 194) {
     return 1516;
    }
if (index == 195) {
     return 1025;
    }
if (index == 196) {
     return 1016;
    }
if (index == 197) {
     return 1024;
    }
if (index == 198) {
     return 1040;
    }
if (index == 199) {
     return 1002;
    }
if (index == 200) {
     return 1004;
    }
if (index == 201) {
     return 1003;
    }
if (index == 202) {
     return 996;
    }
if (index == 203) {
     return 1001;
    }
if (index == 204) {
     return 982;
    }
if (index == 205) {
     return 986;
    }
if (index == 206) {
     return 997;
    }
if (index == 207) {
     return 1005;
    }
if (index == 208) {
     return 992;
    }
if (index == 209) {
     return 1012;
    }
if (index == 210) {
     return 1003;
    }
if (index == 211) {
     return 1018;
    }
if (index == 212) {
     return 1023;
    }
if (index == 213) {
     return 981;
    }
if (index == 214) {
     return 993;
    }
if (index == 215) {
     return 986;
    }
if (index == 216) {
     return 1044;
    }
if (index == 217) {
     return 1029;
    }
if (index == 218) {
     return 1013;
    }
if (index == 219) {
     return 1019;
    }
if (index == 220) {
     return 1025;
    }
if (index == 221) {
     return 992;
    }
if (index == 222) {
     return 1505;
    }
if (index == 223) {
     return 1032;
    }
if (index == 224) {
     return 1021;
    }
if (index == 225) {
     return 1035;
    }
if (index == 226) {
     return 993;
    }
if (index == 227) {
     return 983;
    }
if (index == 228) {
     return 976;
    }
if (index == 229) {
     return 1030;
    }
if (index == 230) {
     return 971;
    }
if (index == 231) {
     return 1012;
    }
if (index == 232) {
     return 986;
    }
if (index == 233) {
     return 1014;
    }
if (index == 234) {
     return 986;
    }
if (index == 235) {
     return 994;
    }
if (index == 236) {
     return 985;
    }
if (index == 237) {
     return 975;
    }
if (index == 238) {
     return 991;
    }
if (index == 239) {
     return 975;
    }
if (index == 240) {
     return 979;
    }
if (index == 241) {
     return 1003;
    }
if (index == 242) {
     return 999;
    }
if (index == 243) {
     return 992;
    }
if (index == 244) {
     return 974;
    }
if (index == 245) {
     return 1498;
    }
if (index == 246) {
     return 988;
    }
if (index == 247) {
     return 979;
    }
if (index == 248) {
     return 984;
    }
if (index == 249) {
     return 1501;
    }
if (index == 250) {
     return 1013;
    }
if (index == 251) {
     return 1027;
    }
if (index == 252) {
     return 979;
    }
if (index == 253) {
     return 991;
    }
if (index == 254) {
     return 1003;
    }
if (index == 255) {
     return 995;
    }
if (index == 256) {
     return 979;
    }
if (index == 257) {
     return 1041;
    }
if (index == 258) {
     return 1018;
    }
if (index == 259) {
     return 1491;
    }
if (index == 260) {
     return 1009;
    }
if (index == 261) {
     return 1000;
    }
if (index == 262) {
     return 1055;
    }
if (index == 263) {
     return 998;
    }
if (index == 264) {
     return 963;
    }
if (index == 265) {
     return 995;
    }
if (index == 266) {
     return 979;
    }
if (index == 267) {
     return 1002;
    }
if (index == 268) {
     return 971;
    }
if (index == 269) {
     return 1006;
    }
if (index == 270) {
     return 1000;
    }
if (index == 271) {
     return 988;
    }
if (index == 272) {
     return 984;
    }
if (index == 273) {
     return 982;
    }
if (index == 274) {
     return 1500;
    }
if (index == 275) {
     return 978;
    }
if (index == 276) {
     return 993;
    }
if (index == 277) {
     return 1001;
    }
if (index == 278) {
     return 989;
    }
if (index == 279) {
     return 958;
    }
if (index == 280) {
     return 974;
    }
if (index == 281) {
     return 963;
    }
if (index == 282) {
     return 986;
    }
if (index == 283) {
     return 1006;
    }
if (index == 284) {
     return 967;
    }
if (index == 285) {
     return 990;
    }
if (index == 286) {
     return 1003;
    }
if (index == 287) {
     return 980;
    }
if (index == 288) {
     return 1018;
    }
if (index == 289) {
     return 1108;
    }
if (index > 289) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1596;
    }
if (index == 1) {
     return 1548;
    }
if (index == 2) {
     return 1603;
    }
if (index == 3) {
     return 1532;
    }
if (index == 4) {
     return 1531;
    }
if (index == 5) {
     return 1588;
    }
if (index == 6) {
     return 1531;
    }
if (index == 7) {
     return 1507;
    }
if (index == 8) {
     return 1531;
    }
if (index == 9) {
     return 1520;
    }
if (index == 10) {
     return 1556;
    }
if (index == 11) {
     return 1522;
    }
if (index == 12) {
     return 1544;
    }
if (index == 13) {
     return 1598;
    }
if (index == 14) {
     return 1544;
    }
if (index == 15) {
     return 1538;
    }
if (index == 16) {
     return 1531;
    }
if (index == 17) {
     return 1522;
    }
if (index == 18) {
     return 1535;
    }
if (index == 19) {
     return 1522;
    }
if (index == 20) {
     return 1496;
    }
if (index == 21) {
     return 1451;
    }
if (index == 22) {
     return 1496;
    }
if (index == 23) {
     return 1505;
    }
if (index == 24) {
     return 1022;
    }
if (index == 25) {
     return 1505;
    }
if (index == 26) {
     return 1457;
    }
if (index == 27) {
     return 1514;
    }
if (index == 28) {
     return 1503;
    }
if (index == 29) {
     return 1505;
    }
if (index == 30) {
     return 1496;
    }
if (index == 31) {
     return 1531;
    }
if (index == 32) {
     return 1496;
    }
if (index == 33) {
     return 1505;
    }
if (index == 34) {
     return 1496;
    }
if (index == 35) {
     return 1519;
    }
if (index == 36) {
     return 1506;
    }
if (index == 37) {
     return 1526;
    }
if (index == 38) {
     return 1509;
    }
if (index == 39) {
     return 1524;
    }
if (index == 40) {
     return 1496;
    }
if (index == 41) {
     return 1549;
    }
if (index == 42) {
     return 1496;
    }
if (index == 43) {
     return 1520;
    }
if (index == 44) {
     return 1499;
    }
if (index == 45) {
     return 1520;
    }
if (index == 46) {
     return 1496;
    }
if (index == 47) {
     return 1518;
    }
if (index == 48) {
     return 1509;
    }
if (index == 49) {
     return 1525;
    }
if (index == 50) {
     return 1464;
    }
if (index == 51) {
     return 1518;
    }
if (index == 52) {
     return 1496;
    }
if (index == 53) {
     return 1527;
    }
if (index == 54) {
     return 1496;
    }
if (index == 55) {
     return 1524;
    }
if (index == 56) {
     return 1510;
    }
if (index == 57) {
     return 1543;
    }
if (index == 58) {
     return 1496;
    }
if (index == 59) {
     return 1542;
    }
if (index == 60) {
     return 1494;
    }
if (index == 61) {
     return 1457;
    }
if (index == 62) {
     return 1502;
    }
if (index == 63) {
     return 1529;
    }
if (index == 64) {
     return 1514;
    }
if (index == 65) {
     return 1537;
    }
if (index == 66) {
     return 1496;
    }
if (index == 67) {
     return 1523;
    }
if (index == 68) {
     return 1496;
    }
if (index == 69) {
     return 1527;
    }
if (index == 70) {
     return 1496;
    }
if (index == 71) {
     return 1519;
    }
if (index == 72) {
     return 1496;
    }
if (index == 73) {
     return 1524;
    }
if (index == 74) {
     return 1513;
    }
if (index == 75) {
     return 1520;
    }
if (index == 76) {
     return 1516;
    }
if (index == 77) {
     return 1525;
    }
if (index == 78) {
     return 1496;
    }
if (index == 79) {
     return 982;
    }
if (index == 80) {
     return 1516;
    }
if (index == 81) {
     return 1529;
    }
if (index == 82) {
     return 1516;
    }
if (index == 83) {
     return 1520;
    }
if (index == 84) {
     return 1496;
    }
if (index == 85) {
     return 1505;
    }
if (index == 86) {
     return 1496;
    }
if (index == 87) {
     return 1535;
    }
if (index == 88) {
     return 1496;
    }
if (index == 89) {
     return 1532;
    }
if (index == 90) {
     return 1496;
    }
if (index == 91) {
     return 1537;
    }
if (index == 92) {
     return 1509;
    }
if (index == 93) {
     return 1532;
    }
if (index == 94) {
     return 1496;
    }
if (index == 95) {
     return 1453;
    }
if (index == 96) {
     return 1506;
    }
if (index == 97) {
     return 1547;
    }
if (index == 98) {
     return 1480;
    }
if (index == 99) {
     return 1546;
    }
if (index == 100) {
     return 1496;
    }
if (index == 101) {
     return 1413;
    }
if (index == 102) {
     return 1472;
    }
if (index == 103) {
     return 1443;
    }
if (index == 104) {
     return 1474;
    }
if (index == 105) {
     return 1496;
    }
if (index == 106) {
     return 1537;
    }
if (index == 107) {
     return 1458;
    }
if (index == 108) {
     return 1506;
    }
if (index == 109) {
     return 1537;
    }
if (index == 110) {
     return 1496;
    }
if (index == 111) {
     return 987;
    }
if (index == 112) {
     return 1512;
    }
if (index == 113) {
     return 1548;
    }
if (index == 114) {
     return 1504;
    }
if (index == 115) {
     return 1534;
    }
if (index == 116) {
     return 1460;
    }
if (index == 117) {
     return 1536;
    }
if (index == 118) {
     return 1488;
    }
if (index == 119) {
     return 1542;
    }
if (index == 120) {
     return 1452;
    }
if (index == 121) {
     return 1525;
    }
if (index == 122) {
     return 1509;
    }
if (index == 123) {
     return 1531;
    }
if (index == 124) {
     return 1514;
    }
if (index == 125) {
     return 1531;
    }
if (index == 126) {
     return 1520;
    }
if (index == 127) {
     return 1445;
    }
if (index == 128) {
     return 1496;
    }
if (index == 129) {
     return 1426;
    }
if (index == 130) {
     return 1517;
    }
if (index == 131) {
     return 1527;
    }
if (index == 132) {
     return 1441;
    }
if (index == 133) {
     return 1528;
    }
if (index == 134) {
     return 1516;
    }
if (index == 135) {
     return 1531;
    }
if (index == 136) {
     return 1034;
    }
if (index == 137) {
     return 1503;
    }
if (index == 138) {
     return 1514;
    }
if (index == 139) {
     return 1524;
    }
if (index == 140) {
     return 1540;
    }
if (index == 141) {
     return 1056;
    }
if (index == 142) {
     return 1540;
    }
if (index == 143) {
     return 1527;
    }
if (index == 144) {
     return 1537;
    }
if (index == 145) {
     return 1537;
    }
if (index == 146) {
     return 1537;
    }
if (index == 147) {
     return 1541;
    }
if (index == 148) {
     return 1556;
    }
if (index == 149) {
     return 1537;
    }
if (index == 150) {
     return 1529;
    }
if (index == 151) {
     return 1550;
    }
if (index == 152) {
     return 1547;
    }
if (index == 153) {
     return 1558;
    }
if (index == 154) {
     return 1532;
    }
if (index == 155) {
     return 1580;
    }
if (index == 156) {
     return 1549;
    }
if (index == 157) {
     return 1556;
    }
if (index == 158) {
     return 1548;
    }
if (index == 159) {
     return 1584;
    }
if (index == 160) {
     return 1541;
    }
if (index == 161) {
     return 1550;
    }
if (index == 162) {
     return 1560;
    }
if (index == 163) {
     return 1559;
    }
if (index == 164) {
     return 1546;
    }
if (index == 165) {
     return 1541;
    }
if (index == 166) {
     return 1527;
    }
if (index == 167) {
     return 1551;
    }
if (index == 168) {
     return 1518;
    }
if (index == 169) {
     return 1552;
    }
if (index == 170) {
     return 1576;
    }
if (index == 171) {
     return 1573;
    }
if (index == 172) {
     return 1540;
    }
if (index == 173) {
     return 1548;
    }
if (index == 174) {
     return 1535;
    }
if (index == 175) {
     return 1553;
    }
if (index == 176) {
     return 1070;
    }
if (index == 177) {
     return 1548;
    }
if (index == 178) {
     return 1516;
    }
if (index == 179) {
     return 1556;
    }
if (index == 180) {
     return 1549;
    }
if (index == 181) {
     return 1553;
    }
if (index == 182) {
     return 1556;
    }
if (index == 183) {
     return 1558;
    }
if (index == 184) {
     return 1554;
    }
if (index == 185) {
     return 1552;
    }
if (index == 186) {
     return 1549;
    }
if (index == 187) {
     return 1050;
    }
if (index == 188) {
     return 1557;
    }
if (index == 189) {
     return 1551;
    }
if (index == 190) {
     return 1566;
    }
if (index == 191) {
     return 1538;
    }
if (index == 192) {
     return 1557;
    }
if (index == 193) {
     return 1554;
    }
if (index == 194) {
     return 1036;
    }
if (index == 195) {
     return 1532;
    }
if (index == 196) {
     return 1553;
    }
if (index == 197) {
     return 1554;
    }
if (index == 198) {
     return 1551;
    }
if (index == 199) {
     return 1559;
    }
if (index == 200) {
     return 1542;
    }
if (index == 201) {
     return 1545;
    }
if (index == 202) {
     return 1546;
    }
if (index == 203) {
     return 1554;
    }
if (index == 204) {
     return 1544;
    }
if (index == 205) {
     return 1555;
    }
if (index == 206) {
     return 1550;
    }
if (index == 207) {
     return 1545;
    }
if (index == 208) {
     return 1536;
    }
if (index == 209) {
     return 1555;
    }
if (index == 210) {
     return 1538;
    }
if (index == 211) {
     return 1557;
    }
if (index == 212) {
     return 1556;
    }
if (index == 213) {
     return 1550;
    }
if (index == 214) {
     return 1538;
    }
if (index == 215) {
     return 1547;
    }
if (index == 216) {
     return 1555;
    }
if (index == 217) {
     return 1559;
    }
if (index == 218) {
     return 1558;
    }
if (index == 219) {
     return 1547;
    }
if (index == 220) {
     return 1543;
    }
if (index == 221) {
     return 1542;
    }
if (index == 222) {
     return 1037;
    }
if (index == 223) {
     return 1529;
    }
if (index == 224) {
     return 1531;
    }
if (index == 225) {
     return 1531;
    }
if (index == 226) {
     return 1531;
    }
if (index == 227) {
     return 1529;
    }
if (index == 228) {
     return 1531;
    }
if (index == 229) {
     return 1531;
    }
if (index == 230) {
     return 1531;
    }
if (index == 231) {
     return 1541;
    }
if (index == 232) {
     return 1531;
    }
if (index == 233) {
     return 1537;
    }
if (index == 234) {
     return 1535;
    }
if (index == 235) {
     return 1534;
    }
if (index == 236) {
     return 1536;
    }
if (index == 237) {
     return 1531;
    }
if (index == 238) {
     return 1529;
    }
if (index == 239) {
     return 1527;
    }
if (index == 240) {
     return 1529;
    }
if (index == 241) {
     return 1522;
    }
if (index == 242) {
     return 1529;
    }
if (index == 243) {
     return 1524;
    }
if (index == 244) {
     return 1519;
    }
if (index == 245) {
     return 1022;
    }
if (index == 246) {
     return 1519;
    }
if (index == 247) {
     return 1540;
    }
if (index == 248) {
     return 1531;
    }
if (index == 249) {
     return 1034;
    }
if (index == 250) {
     return 1537;
    }
if (index == 251) {
     return 1537;
    }
if (index == 252) {
     return 1531;
    }
if (index == 253) {
     return 1544;
    }
if (index == 254) {
     return 1531;
    }
if (index == 255) {
     return 1547;
    }
if (index == 256) {
     return 1524;
    }
if (index == 257) {
     return 1522;
    }
if (index == 258) {
     return 1523;
    }
if (index == 259) {
     return 963;
    }
if (index == 260) {
     return 1524;
    }
if (index == 261) {
     return 1490;
    }
if (index == 262) {
     return 1514;
    }
if (index == 263) {
     return 1527;
    }
if (index == 264) {
     return 1528;
    }
if (index == 265) {
     return 1547;
    }
if (index == 266) {
     return 1506;
    }
if (index == 267) {
     return 1539;
    }
if (index == 268) {
     return 1527;
    }
if (index == 269) {
     return 1511;
    }
if (index == 270) {
     return 1538;
    }
if (index == 271) {
     return 1550;
    }
if (index == 272) {
     return 1536;
    }
if (index == 273) {
     return 1539;
    }
if (index == 274) {
     return 994;
    }
if (index == 275) {
     return 1527;
    }
if (index == 276) {
     return 1548;
    }
if (index == 277) {
     return 1557;
    }
if (index == 278) {
     return 1519;
    }
if (index == 279) {
     return 1517;
    }
if (index == 280) {
     return 1524;
    }
if (index == 281) {
     return 1520;
    }
if (index == 282) {
     return 1529;
    }
if (index == 283) {
     return 1530;
    }
if (index == 284) {
     return 1527;
    }
if (index == 285) {
     return 1522;
    }
if (index == 286) {
     return 1538;
    }
if (index == 287) {
     return 1531;
    }
if (index == 288) {
     return 1509;
    }
if (index == 289) {
     return 1623;
    }
if (index > 289) {
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
    var url = '/fedora/get/seapage:279_' + imgStr + '/digitalImage';
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
br.numLeafs = 292;

// Book title and the URL used for the book title link
br.bookTitle= "Borneo and the Indian Archipelago : with drawings of costume and scenery";
br.bookAuthor= "Marryat, Frank";
br.bookPub= "London: Longman, Brown, Green, and Longmans, 1848";
br.bookKeyword= "Borneo--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malay Archipelago--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Voyages and travels";
br.bookUrl  = '/catalog/sea:279';

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
