//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1294;
    }
if (index == 1) {
     return 1144;
    }
if (index == 2) {
     return 1182;
    }
if (index == 3) {
     return 1609;
    }
if (index == 4) {
     return 1153;
    }
if (index == 5) {
     return 1139;
    }
if (index == 6) {
     return 1115;
    }
if (index == 7) {
     return 1094;
    }
if (index == 8) {
     return 1139;
    }
if (index == 9) {
     return 1118;
    }
if (index == 10) {
     return 1087;
    }
if (index == 11) {
     return 1563;
    }
if (index == 12) {
     return 1087;
    }
if (index == 13) {
     return 1099;
    }
if (index == 14) {
     return 1568;
    }
if (index == 15) {
     return 1055;
    }
if (index == 16) {
     return 1230;
    }
if (index == 17) {
     return 1113;
    }
if (index == 18) {
     return 1627;
    }
if (index == 19) {
     return 1224;
    }
if (index == 20) {
     return 1128;
    }
if (index == 21) {
     return 1121;
    }
if (index == 22) {
     return 1630;
    }
if (index == 23) {
     return 1050;
    }
if (index == 24) {
     return 1146;
    }
if (index == 25) {
     return 1101;
    }
if (index == 26) {
     return 1077;
    }
if (index == 27) {
     return 1633;
    }
if (index == 28) {
     return 1115;
    }
if (index == 29) {
     return 1137;
    }
if (index == 30) {
     return 1629;
    }
if (index == 31) {
     return 1101;
    }
if (index == 32) {
     return 1121;
    }
if (index == 33) {
     return 1104;
    }
if (index == 34) {
     return 1630;
    }
if (index == 35) {
     return 1101;
    }
if (index == 36) {
     return 1156;
    }
if (index == 37) {
     return 1142;
    }
if (index == 38) {
     return 1616;
    }
if (index == 39) {
     return 1101;
    }
if (index == 40) {
     return 1121;
    }
if (index == 41) {
     return 1130;
    }
if (index == 42) {
     return 1141;
    }
if (index == 43) {
     return 1086;
    }
if (index == 44) {
     return 1135;
    }
if (index == 45) {
     return 1133;
    }
if (index == 46) {
     return 1599;
    }
if (index == 47) {
     return 1122;
    }
if (index == 48) {
     return 1156;
    }
if (index == 49) {
     return 1164;
    }
if (index == 50) {
     return 1608;
    }
if (index == 51) {
     return 1131;
    }
if (index == 52) {
     return 1189;
    }
if (index == 53) {
     return 1160;
    }
if (index == 54) {
     return 1594;
    }
if (index == 55) {
     return 1077;
    }
if (index == 56) {
     return 1090;
    }
if (index == 57) {
     return 1142;
    }
if (index == 58) {
     return 1568;
    }
if (index == 59) {
     return 1145;
    }
if (index == 60) {
     return 1100;
    }
if (index == 61) {
     return 1158;
    }
if (index == 62) {
     return 1572;
    }
if (index == 63) {
     return 1074;
    }
if (index == 64) {
     return 1122;
    }
if (index == 65) {
     return 1124;
    }
if (index == 66) {
     return 1154;
    }
if (index == 67) {
     return 1141;
    }
if (index == 68) {
     return 1523;
    }
if (index == 69) {
     return 1067;
    }
if (index == 70) {
     return 1079;
    }
if (index == 71) {
     return 1130;
    }
if (index == 72) {
     return 1515;
    }
if (index == 73) {
     return 1032;
    }
if (index == 74) {
     return 1094;
    }
if (index == 75) {
     return 1162;
    }
if (index == 76) {
     return 1609;
    }
if (index == 77) {
     return 1049;
    }
if (index == 78) {
     return 1112;
    }
if (index == 79) {
     return 1127;
    }
if (index == 80) {
     return 1564;
    }
if (index == 81) {
     return 1066;
    }
if (index == 82) {
     return 1129;
    }
if (index == 83) {
     return 1154;
    }
if (index == 84) {
     return 1582;
    }
if (index == 85) {
     return 1091;
    }
if (index == 86) {
     return 1133;
    }
if (index == 87) {
     return 1152;
    }
if (index == 88) {
     return 1108;
    }
if (index == 89) {
     return 1147;
    }
if (index == 90) {
     return 1121;
    }
if (index == 91) {
     return 1164;
    }
if (index == 92) {
     return 1582;
    }
if (index == 93) {
     return 1082;
    }
if (index == 94) {
     return 1174;
    }
if (index == 95) {
     return 1124;
    }
if (index == 96) {
     return 1608;
    }
if (index == 97) {
     return 1064;
    }
if (index == 98) {
     return 1114;
    }
if (index == 99) {
     return 1159;
    }
if (index == 100) {
     return 1577;
    }
if (index == 101) {
     return 1067;
    }
if (index == 102) {
     return 1114;
    }
if (index == 103) {
     return 1168;
    }
if (index == 104) {
     return 1602;
    }
if (index == 105) {
     return 1025;
    }
if (index == 106) {
     return 1091;
    }
if (index == 107) {
     return 1131;
    }
if (index == 108) {
     return 1121;
    }
if (index == 109) {
     return 1153;
    }
if (index == 110) {
     return 1569;
    }
if (index == 111) {
     return 1062;
    }
if (index == 112) {
     return 1143;
    }
if (index == 113) {
     return 1134;
    }
if (index == 114) {
     return 1580;
    }
if (index == 115) {
     return 1132;
    }
if (index == 116) {
     return 1156;
    }
if (index == 117) {
     return 1134;
    }
if (index == 118) {
     return 1592;
    }
if (index == 119) {
     return 1098;
    }
if (index == 120) {
     return 1159;
    }
if (index == 121) {
     return 1147;
    }
if (index == 122) {
     return 1592;
    }
if (index == 123) {
     return 1144;
    }
if (index == 124) {
     return 1146;
    }
if (index == 125) {
     return 1157;
    }
if (index == 126) {
     return 1592;
    }
if (index == 127) {
     return 1055;
    }
if (index == 128) {
     return 1051;
    }
if (index == 129) {
     return 1584;
    }
if (index == 130) {
     return 1143;
    }
if (index == 131) {
     return 1170;
    }
if (index == 132) {
     return 1136;
    }
if (index == 133) {
     return 1144;
    }
if (index == 134) {
     return 1108;
    }
if (index == 135) {
     return 1167;
    }
if (index == 136) {
     return 1128;
    }
if (index == 137) {
     return 1142;
    }
if (index == 138) {
     return 1545;
    }
if (index == 139) {
     return 1109;
    }
if (index == 140) {
     return 1174;
    }
if (index == 141) {
     return 1149;
    }
if (index == 142) {
     return 1100;
    }
if (index == 143) {
     return 1160;
    }
if (index == 144) {
     return 1590;
    }
if (index == 145) {
     return 1109;
    }
if (index == 146) {
     return 1095;
    }
if (index == 147) {
     return 1137;
    }
if (index == 148) {
     return 1592;
    }
if (index == 149) {
     return 1091;
    }
if (index == 150) {
     return 1164;
    }
if (index == 151) {
     return 1100;
    }
if (index == 152) {
     return 1170;
    }
if (index == 153) {
     return 1144;
    }
if (index == 154) {
     return 1589;
    }
if (index == 155) {
     return 1047;
    }
if (index == 156) {
     return 1169;
    }
if (index == 157) {
     return 1139;
    }
if (index == 158) {
     return 1589;
    }
if (index == 159) {
     return 1040;
    }
if (index == 160) {
     return 1146;
    }
if (index == 161) {
     return 1152;
    }
if (index == 162) {
     return 1161;
    }
if (index == 163) {
     return 1147;
    }
if (index == 164) {
     return 1592;
    }
if (index == 165) {
     return 1074;
    }
if (index == 166) {
     return 1131;
    }
if (index == 167) {
     return 1152;
    }
if (index == 168) {
     return 1112;
    }
if (index == 169) {
     return 1147;
    }
if (index == 170) {
     return 1610;
    }
if (index == 171) {
     return 1071;
    }
if (index == 172) {
     return 1120;
    }
if (index == 173) {
     return 1617;
    }
if (index == 174) {
     return 1105;
    }
if (index == 175) {
     return 1619;
    }
if (index == 176) {
     return 1610;
    }
if (index == 177) {
     return 1113;
    }
if (index == 178) {
     return 1128;
    }
if (index == 179) {
     return 1150;
    }
if (index == 180) {
     return 1123;
    }
if (index == 181) {
     return 1144;
    }
if (index == 182) {
     return 1094;
    }
if (index == 183) {
     return 1129;
    }
if (index == 184) {
     return 1123;
    }
if (index == 185) {
     return 1619;
    }
if (index == 186) {
     return 1102;
    }
if (index == 187) {
     return 1123;
    }
if (index == 188) {
     return 1149;
    }
if (index == 189) {
     return 1128;
    }
if (index == 190) {
     return 1110;
    }
if (index == 191) {
     return 1144;
    }
if (index == 192) {
     return 1123;
    }
if (index == 193) {
     return 1147;
    }
if (index == 194) {
     return 1148;
    }
if (index == 195) {
     return 1142;
    }
if (index == 196) {
     return 1128;
    }
if (index == 197) {
     return 1139;
    }
if (index == 198) {
     return 1118;
    }
if (index == 199) {
     return 1140;
    }
if (index == 200) {
     return 1131;
    }
if (index == 201) {
     return 1121;
    }
if (index == 202) {
     return 1123;
    }
if (index == 203) {
     return 1131;
    }
if (index == 204) {
     return 1118;
    }
if (index == 205) {
     return 1619;
    }
if (index == 206) {
     return 1120;
    }
if (index == 207) {
     return 1108;
    }
if (index == 208) {
     return 1112;
    }
if (index == 209) {
     return 1102;
    }
if (index == 210) {
     return 1117;
    }
if (index == 211) {
     return 1166;
    }
if (index == 212) {
     return 1048;
    }
if (index == 213) {
     return 1168;
    }
if (index > 213) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1673;
    }
if (index == 1) {
     return 1611;
    }
if (index == 2) {
     return 1584;
    }
if (index == 3) {
     return 1159;
    }
if (index == 4) {
     return 1621;
    }
if (index == 5) {
     return 1654;
    }
if (index == 6) {
     return 1600;
    }
if (index == 7) {
     return 1615;
    }
if (index == 8) {
     return 1619;
    }
if (index == 9) {
     return 1625;
    }
if (index == 10) {
     return 1633;
    }
if (index == 11) {
     return 1066;
    }
if (index == 12) {
     return 1575;
    }
if (index == 13) {
     return 1611;
    }
if (index == 14) {
     return 1141;
    }
if (index == 15) {
     return 1571;
    }
if (index == 16) {
     return 1653;
    }
if (index == 17) {
     return 1632;
    }
if (index == 18) {
     return 1168;
    }
if (index == 19) {
     return 1651;
    }
if (index == 20) {
     return 1619;
    }
if (index == 21) {
     return 1638;
    }
if (index == 22) {
     return 1139;
    }
if (index == 23) {
     return 1632;
    }
if (index == 24) {
     return 1608;
    }
if (index == 25) {
     return 1601;
    }
if (index == 26) {
     return 1611;
    }
if (index == 27) {
     return 1167;
    }
if (index == 28) {
     return 1628;
    }
if (index == 29) {
     return 1639;
    }
if (index == 30) {
     return 1133;
    }
if (index == 31) {
     return 1625;
    }
if (index == 32) {
     return 1619;
    }
if (index == 33) {
     return 1648;
    }
if (index == 34) {
     return 1175;
    }
if (index == 35) {
     return 1639;
    }
if (index == 36) {
     return 1610;
    }
if (index == 37) {
     return 1633;
    }
if (index == 38) {
     return 1130;
    }
if (index == 39) {
     return 1623;
    }
if (index == 40) {
     return 1611;
    }
if (index == 41) {
     return 1644;
    }
if (index == 42) {
     return 1624;
    }
if (index == 43) {
     return 1632;
    }
if (index == 44) {
     return 1632;
    }
if (index == 45) {
     return 1636;
    }
if (index == 46) {
     return 1220;
    }
if (index == 47) {
     return 1626;
    }
if (index == 48) {
     return 1649;
    }
if (index == 49) {
     return 1636;
    }
if (index == 50) {
     return 1197;
    }
if (index == 51) {
     return 1643;
    }
if (index == 52) {
     return 1615;
    }
if (index == 53) {
     return 1623;
    }
if (index == 54) {
     return 1215;
    }
if (index == 55) {
     return 1589;
    }
if (index == 56) {
     return 1572;
    }
if (index == 57) {
     return 1584;
    }
if (index == 58) {
     return 1160;
    }
if (index == 59) {
     return 1572;
    }
if (index == 60) {
     return 1593;
    }
if (index == 61) {
     return 1603;
    }
if (index == 62) {
     return 1200;
    }
if (index == 63) {
     return 1589;
    }
if (index == 64) {
     return 1588;
    }
if (index == 65) {
     return 1613;
    }
if (index == 66) {
     return 1591;
    }
if (index == 67) {
     return 1609;
    }
if (index == 68) {
     return 1183;
    }
if (index == 69) {
     return 1603;
    }
if (index == 70) {
     return 1559;
    }
if (index == 71) {
     return 1604;
    }
if (index == 72) {
     return 1186;
    }
if (index == 73) {
     return 1563;
    }
if (index == 74) {
     return 1607;
    }
if (index == 75) {
     return 1628;
    }
if (index == 76) {
     return 1139;
    }
if (index == 77) {
     return 1604;
    }
if (index == 78) {
     return 1618;
    }
if (index == 79) {
     return 1615;
    }
if (index == 80) {
     return 1122;
    }
if (index == 81) {
     return 1589;
    }
if (index == 82) {
     return 1601;
    }
if (index == 83) {
     return 1608;
    }
if (index == 84) {
     return 1204;
    }
if (index == 85) {
     return 1574;
    }
if (index == 86) {
     return 1608;
    }
if (index == 87) {
     return 1626;
    }
if (index == 88) {
     return 1607;
    }
if (index == 89) {
     return 1608;
    }
if (index == 90) {
     return 1602;
    }
if (index == 91) {
     return 1611;
    }
if (index == 92) {
     return 1224;
    }
if (index == 93) {
     return 1584;
    }
if (index == 94) {
     return 1604;
    }
if (index == 95) {
     return 1605;
    }
if (index == 96) {
     return 1147;
    }
if (index == 97) {
     return 1611;
    }
if (index == 98) {
     return 1609;
    }
if (index == 99) {
     return 1606;
    }
if (index == 100) {
     return 1192;
    }
if (index == 101) {
     return 1605;
    }
if (index == 102) {
     return 1609;
    }
if (index == 103) {
     return 1631;
    }
if (index == 104) {
     return 1156;
    }
if (index == 105) {
     return 1600;
    }
if (index == 106) {
     return 1607;
    }
if (index == 107) {
     return 1605;
    }
if (index == 108) {
     return 1611;
    }
if (index == 109) {
     return 1619;
    }
if (index == 110) {
     return 1214;
    }
if (index == 111) {
     return 1602;
    }
if (index == 112) {
     return 1564;
    }
if (index == 113) {
     return 1543;
    }
if (index == 114) {
     return 1136;
    }
if (index == 115) {
     return 1584;
    }
if (index == 116) {
     return 1587;
    }
if (index == 117) {
     return 1584;
    }
if (index == 118) {
     return 1125;
    }
if (index == 119) {
     return 1572;
    }
if (index == 120) {
     return 1592;
    }
if (index == 121) {
     return 1584;
    }
if (index == 122) {
     return 1151;
    }
if (index == 123) {
     return 1584;
    }
if (index == 124) {
     return 1592;
    }
if (index == 125) {
     return 1584;
    }
if (index == 126) {
     return 1154;
    }
if (index == 127) {
     return 1584;
    }
if (index == 128) {
     return 1592;
    }
if (index == 129) {
     return 1178;
    }
if (index == 130) {
     return 1592;
    }
if (index == 131) {
     return 1579;
    }
if (index == 132) {
     return 1592;
    }
if (index == 133) {
     return 1584;
    }
if (index == 134) {
     return 1592;
    }
if (index == 135) {
     return 1584;
    }
if (index == 136) {
     return 1592;
    }
if (index == 137) {
     return 1584;
    }
if (index == 138) {
     return 1127;
    }
if (index == 139) {
     return 1584;
    }
if (index == 140) {
     return 1592;
    }
if (index == 141) {
     return 1582;
    }
if (index == 142) {
     return 1590;
    }
if (index == 143) {
     return 1582;
    }
if (index == 144) {
     return 1110;
    }
if (index == 145) {
     return 1582;
    }
if (index == 146) {
     return 1541;
    }
if (index == 147) {
     return 1584;
    }
if (index == 148) {
     return 1215;
    }
if (index == 149) {
     return 1574;
    }
if (index == 150) {
     return 1590;
    }
if (index == 151) {
     return 1570;
    }
if (index == 152) {
     return 1586;
    }
if (index == 153) {
     return 1584;
    }
if (index == 154) {
     return 1199;
    }
if (index == 155) {
     return 1584;
    }
if (index == 156) {
     return 1592;
    }
if (index == 157) {
     return 1584;
    }
if (index == 158) {
     return 1135;
    }
if (index == 159) {
     return 1567;
    }
if (index == 160) {
     return 1590;
    }
if (index == 161) {
     return 1584;
    }
if (index == 162) {
     return 1589;
    }
if (index == 163) {
     return 1584;
    }
if (index == 164) {
     return 1202;
    }
if (index == 165) {
     return 1617;
    }
if (index == 166) {
     return 1610;
    }
if (index == 167) {
     return 1619;
    }
if (index == 168) {
     return 1610;
    }
if (index == 169) {
     return 1614;
    }
if (index == 170) {
     return 1169;
    }
if (index == 171) {
     return 1617;
    }
if (index == 172) {
     return 1610;
    }
if (index == 173) {
     return 1121;
    }
if (index == 174) {
     return 1610;
    }
if (index == 175) {
     return 1147;
    }
if (index == 176) {
     return 1144;
    }
if (index == 177) {
     return 1619;
    }
if (index == 178) {
     return 1610;
    }
if (index == 179) {
     return 1619;
    }
if (index == 180) {
     return 1610;
    }
if (index == 181) {
     return 1619;
    }
if (index == 182) {
     return 1610;
    }
if (index == 183) {
     return 1617;
    }
if (index == 184) {
     return 1610;
    }
if (index == 185) {
     return 1126;
    }
if (index == 186) {
     return 1605;
    }
if (index == 187) {
     return 1619;
    }
if (index == 188) {
     return 1625;
    }
if (index == 189) {
     return 1619;
    }
if (index == 190) {
     return 1610;
    }
if (index == 191) {
     return 1619;
    }
if (index == 192) {
     return 1610;
    }
if (index == 193) {
     return 1619;
    }
if (index == 194) {
     return 1619;
    }
if (index == 195) {
     return 1619;
    }
if (index == 196) {
     return 1610;
    }
if (index == 197) {
     return 1619;
    }
if (index == 198) {
     return 1610;
    }
if (index == 199) {
     return 1620;
    }
if (index == 200) {
     return 1610;
    }
if (index == 201) {
     return 1619;
    }
if (index == 202) {
     return 1610;
    }
if (index == 203) {
     return 1619;
    }
if (index == 204) {
     return 1610;
    }
if (index == 205) {
     return 1115;
    }
if (index == 206) {
     return 1610;
    }
if (index == 207) {
     return 1617;
    }
if (index == 208) {
     return 1610;
    }
if (index == 209) {
     return 1606;
    }
if (index == 210) {
     return 1600;
    }
if (index == 211) {
     return 1618;
    }
if (index == 212) {
     return 1577;
    }
if (index == 213) {
     return 1609;
    }
if (index > 213) {
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
    var url = '/fedora/get/seapage:333_' + imgStr + '/digitalImage';
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
br.numLeafs = 214;

// Book title and the URL used for the book title link
br.bookTitle= "The image of war, or Service on the Chin Hills";
br.bookAuthor= "Newland, A. G. E.";
br.bookPub= "Calcutta: Thacker, Spink, 1894";
br.bookKeyword= "Chin (Southeast Asian people)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--History, Military--Sources<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chin Hills, Burma--History";
br.bookUrl  = '/catalog/sea:333';

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
