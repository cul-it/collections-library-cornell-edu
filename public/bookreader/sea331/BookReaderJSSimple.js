//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1297;
    }
if (index == 1) {
     return 1226;
    }
if (index == 2) {
     return 1128;
    }
if (index == 3) {
     return 1199;
    }
if (index == 4) {
     return 1173;
    }
if (index == 5) {
     return 1224;
    }
if (index == 6) {
     return 1111;
    }
if (index == 7) {
     return 1529;
    }
if (index == 8) {
     return 1098;
    }
if (index == 9) {
     return 1128;
    }
if (index == 10) {
     return 1046;
    }
if (index == 11) {
     return 1224;
    }
if (index == 12) {
     return 1002;
    }
if (index == 13) {
     return 1113;
    }
if (index == 14) {
     return 1064;
    }
if (index == 15) {
     return 1083;
    }
if (index == 16) {
     return 1063;
    }
if (index == 17) {
     return 1100;
    }
if (index == 18) {
     return 1494;
    }
if (index == 19) {
     return 1155;
    }
if (index == 20) {
     return 1008;
    }
if (index == 21) {
     return 1089;
    }
if (index == 22) {
     return 1091;
    }
if (index == 23) {
     return 1141;
    }
if (index == 24) {
     return 1045;
    }
if (index == 25) {
     return 1137;
    }
if (index == 26) {
     return 1049;
    }
if (index == 27) {
     return 1131;
    }
if (index == 28) {
     return 1030;
    }
if (index == 29) {
     return 1120;
    }
if (index == 30) {
     return 1025;
    }
if (index == 31) {
     return 1071;
    }
if (index == 32) {
     return 1063;
    }
if (index == 33) {
     return 1049;
    }
if (index == 34) {
     return 1061;
    }
if (index == 35) {
     return 1088;
    }
if (index == 36) {
     return 1025;
    }
if (index == 37) {
     return 1113;
    }
if (index == 38) {
     return 1031;
    }
if (index == 39) {
     return 1055;
    }
if (index == 40) {
     return 1074;
    }
if (index == 41) {
     return 1041;
    }
if (index == 42) {
     return 1037;
    }
if (index == 43) {
     return 1043;
    }
if (index == 44) {
     return 1048;
    }
if (index == 45) {
     return 1080;
    }
if (index == 46) {
     return 1056;
    }
if (index == 47) {
     return 1044;
    }
if (index == 48) {
     return 1050;
    }
if (index == 49) {
     return 1083;
    }
if (index == 50) {
     return 1057;
    }
if (index == 51) {
     return 1094;
    }
if (index == 52) {
     return 1040;
    }
if (index == 53) {
     return 1054;
    }
if (index == 54) {
     return 1030;
    }
if (index == 55) {
     return 1053;
    }
if (index == 56) {
     return 1021;
    }
if (index == 57) {
     return 1055;
    }
if (index == 58) {
     return 1035;
    }
if (index == 59) {
     return 1054;
    }
if (index == 60) {
     return 1036;
    }
if (index == 61) {
     return 1033;
    }
if (index == 62) {
     return 1017;
    }
if (index == 63) {
     return 1032;
    }
if (index == 64) {
     return 1014;
    }
if (index == 65) {
     return 1054;
    }
if (index == 66) {
     return 1008;
    }
if (index == 67) {
     return 1026;
    }
if (index == 68) {
     return 992;
    }
if (index == 69) {
     return 1042;
    }
if (index == 70) {
     return 1003;
    }
if (index == 71) {
     return 1028;
    }
if (index == 72) {
     return 994;
    }
if (index == 73) {
     return 1030;
    }
if (index == 74) {
     return 1003;
    }
if (index == 75) {
     return 1043;
    }
if (index == 76) {
     return 990;
    }
if (index == 77) {
     return 1031;
    }
if (index == 78) {
     return 977;
    }
if (index == 79) {
     return 1026;
    }
if (index == 80) {
     return 975;
    }
if (index == 81) {
     return 1037;
    }
if (index == 82) {
     return 983;
    }
if (index == 83) {
     return 1070;
    }
if (index == 84) {
     return 973;
    }
if (index == 85) {
     return 1042;
    }
if (index == 86) {
     return 1583;
    }
if (index == 87) {
     return 1200;
    }
if (index == 88) {
     return 1106;
    }
if (index == 89) {
     return 1159;
    }
if (index == 90) {
     return 1144;
    }
if (index == 91) {
     return 1168;
    }
if (index == 92) {
     return 1098;
    }
if (index == 93) {
     return 1125;
    }
if (index == 94) {
     return 1122;
    }
if (index == 95) {
     return 1128;
    }
if (index == 96) {
     return 1126;
    }
if (index == 97) {
     return 1148;
    }
if (index == 98) {
     return 1094;
    }
if (index == 99) {
     return 1155;
    }
if (index == 100) {
     return 1088;
    }
if (index == 101) {
     return 1059;
    }
if (index == 102) {
     return 1152;
    }
if (index == 103) {
     return 1133;
    }
if (index == 104) {
     return 1074;
    }
if (index == 105) {
     return 1137;
    }
if (index == 106) {
     return 1124;
    }
if (index == 107) {
     return 1091;
    }
if (index == 108) {
     return 1148;
    }
if (index == 109) {
     return 1121;
    }
if (index == 110) {
     return 1098;
    }
if (index == 111) {
     return 1160;
    }
if (index == 112) {
     return 1012;
    }
if (index == 113) {
     return 1094;
    }
if (index == 114) {
     return 1126;
    }
if (index == 115) {
     return 1068;
    }
if (index == 116) {
     return 1137;
    }
if (index == 117) {
     return 1162;
    }
if (index == 118) {
     return 1085;
    }
if (index == 119) {
     return 1120;
    }
if (index == 120) {
     return 1092;
    }
if (index == 121) {
     return 1162;
    }
if (index == 122) {
     return 1064;
    }
if (index == 123) {
     return 1128;
    }
if (index == 124) {
     return 1082;
    }
if (index == 125) {
     return 1171;
    }
if (index == 126) {
     return 1039;
    }
if (index == 127) {
     return 1153;
    }
if (index == 128) {
     return 1090;
    }
if (index == 129) {
     return 1173;
    }
if (index == 130) {
     return 1020;
    }
if (index == 131) {
     return 1135;
    }
if (index == 132) {
     return 1056;
    }
if (index == 133) {
     return 1146;
    }
if (index == 134) {
     return 973;
    }
if (index == 135) {
     return 1093;
    }
if (index == 136) {
     return 1056;
    }
if (index == 137) {
     return 1133;
    }
if (index == 138) {
     return 1074;
    }
if (index == 139) {
     return 1106;
    }
if (index == 140) {
     return 1108;
    }
if (index == 141) {
     return 1110;
    }
if (index == 142) {
     return 1050;
    }
if (index == 143) {
     return 1116;
    }
if (index == 144) {
     return 1095;
    }
if (index == 145) {
     return 1147;
    }
if (index == 146) {
     return 1092;
    }
if (index == 147) {
     return 1157;
    }
if (index == 148) {
     return 1052;
    }
if (index == 149) {
     return 1167;
    }
if (index == 150) {
     return 1059;
    }
if (index == 151) {
     return 1061;
    }
if (index == 152) {
     return 1155;
    }
if (index == 153) {
     return 1165;
    }
if (index == 154) {
     return 1053;
    }
if (index == 155) {
     return 1126;
    }
if (index == 156) {
     return 1101;
    }
if (index == 157) {
     return 1079;
    }
if (index == 158) {
     return 1148;
    }
if (index == 159) {
     return 1136;
    }
if (index == 160) {
     return 1020;
    }
if (index == 161) {
     return 1077;
    }
if (index == 162) {
     return 1127;
    }
if (index == 163) {
     return 1152;
    }
if (index == 164) {
     return 1016;
    }
if (index == 165) {
     return 1140;
    }
if (index == 166) {
     return 1040;
    }
if (index == 167) {
     return 1210;
    }
if (index == 168) {
     return 1011;
    }
if (index == 169) {
     return 1076;
    }
if (index == 170) {
     return 1140;
    }
if (index == 171) {
     return 1160;
    }
if (index == 172) {
     return 1064;
    }
if (index == 173) {
     return 1195;
    }
if (index == 174) {
     return 1036;
    }
if (index == 175) {
     return 1160;
    }
if (index == 176) {
     return 1007;
    }
if (index == 177) {
     return 1198;
    }
if (index == 178) {
     return 982;
    }
if (index == 179) {
     return 992;
    }
if (index == 180) {
     return 1069;
    }
if (index == 181) {
     return 1030;
    }
if (index == 182) {
     return 1044;
    }
if (index == 183) {
     return 1007;
    }
if (index == 184) {
     return 1057;
    }
if (index == 185) {
     return 1017;
    }
if (index == 186) {
     return 1072;
    }
if (index == 187) {
     return 1019;
    }
if (index == 188) {
     return 1048;
    }
if (index == 189) {
     return 1022;
    }
if (index == 190) {
     return 1068;
    }
if (index == 191) {
     return 1014;
    }
if (index == 192) {
     return 1065;
    }
if (index == 193) {
     return 1037;
    }
if (index == 194) {
     return 1067;
    }
if (index == 195) {
     return 1017;
    }
if (index == 196) {
     return 1063;
    }
if (index == 197) {
     return 1034;
    }
if (index == 198) {
     return 1074;
    }
if (index == 199) {
     return 1024;
    }
if (index == 200) {
     return 1069;
    }
if (index == 201) {
     return 1033;
    }
if (index == 202) {
     return 1072;
    }
if (index == 203) {
     return 1012;
    }
if (index == 204) {
     return 1072;
    }
if (index == 205) {
     return 1011;
    }
if (index == 206) {
     return 1111;
    }
if (index == 207) {
     return 1466;
    }
if (index == 208) {
     return 1049;
    }
if (index == 209) {
     return 1150;
    }
if (index == 210) {
     return 1111;
    }
if (index == 211) {
     return 1492;
    }
if (index == 212) {
     return 1051;
    }
if (index == 213) {
     return 1079;
    }
if (index == 214) {
     return 1065;
    }
if (index == 215) {
     return 1093;
    }
if (index == 216) {
     return 1050;
    }
if (index == 217) {
     return 1038;
    }
if (index == 218) {
     return 1093;
    }
if (index == 219) {
     return 1037;
    }
if (index == 220) {
     return 1074;
    }
if (index == 221) {
     return 1031;
    }
if (index == 222) {
     return 1080;
    }
if (index == 223) {
     return 1026;
    }
if (index == 224) {
     return 1067;
    }
if (index == 225) {
     return 1049;
    }
if (index == 226) {
     return 1048;
    }
if (index == 227) {
     return 1017;
    }
if (index == 228) {
     return 1064;
    }
if (index == 229) {
     return 997;
    }
if (index == 230) {
     return 1063;
    }
if (index == 231) {
     return 1006;
    }
if (index == 232) {
     return 1084;
    }
if (index == 233) {
     return 1052;
    }
if (index == 234) {
     return 1075;
    }
if (index == 235) {
     return 1036;
    }
if (index == 236) {
     return 1065;
    }
if (index == 237) {
     return 1028;
    }
if (index == 238) {
     return 1087;
    }
if (index == 239) {
     return 1030;
    }
if (index == 240) {
     return 1070;
    }
if (index == 241) {
     return 1033;
    }
if (index == 242) {
     return 1059;
    }
if (index == 243) {
     return 1069;
    }
if (index == 244) {
     return 1067;
    }
if (index == 245) {
     return 1008;
    }
if (index == 246) {
     return 1012;
    }
if (index == 247) {
     return 1013;
    }
if (index == 248) {
     return 1014;
    }
if (index == 249) {
     return 1007;
    }
if (index == 250) {
     return 1008;
    }
if (index == 251) {
     return 1005;
    }
if (index == 252) {
     return 1017;
    }
if (index == 253) {
     return 992;
    }
if (index == 254) {
     return 1155;
    }
if (index == 255) {
     return 1174;
    }
if (index == 256) {
     return 1017;
    }
if (index == 257) {
     return 1146;
    }
if (index == 258) {
     return 1007;
    }
if (index == 259) {
     return 1114;
    }
if (index == 260) {
     return 1070;
    }
if (index == 261) {
     return 1162;
    }
if (index == 262) {
     return 1018;
    }
if (index == 263) {
     return 1128;
    }
if (index == 264) {
     return 979;
    }
if (index == 265) {
     return 1146;
    }
if (index == 266) {
     return 995;
    }
if (index == 267) {
     return 1077;
    }
if (index == 268) {
     return 1011;
    }
if (index == 269) {
     return 1098;
    }
if (index == 270) {
     return 1095;
    }
if (index == 271) {
     return 1073;
    }
if (index == 272) {
     return 1089;
    }
if (index == 273) {
     return 1173;
    }
if (index == 274) {
     return 1013;
    }
if (index == 275) {
     return 1130;
    }
if (index == 276) {
     return 1045;
    }
if (index == 277) {
     return 1048;
    }
if (index == 278) {
     return 1106;
    }
if (index == 279) {
     return 1143;
    }
if (index == 280) {
     return 1043;
    }
if (index == 281) {
     return 1222;
    }
if (index == 282) {
     return 1031;
    }
if (index == 283) {
     return 1166;
    }
if (index == 284) {
     return 984;
    }
if (index == 285) {
     return 1097;
    }
if (index == 286) {
     return 1110;
    }
if (index == 287) {
     return 1093;
    }
if (index == 288) {
     return 992;
    }
if (index == 289) {
     return 1123;
    }
if (index == 290) {
     return 1096;
    }
if (index == 291) {
     return 1108;
    }
if (index == 292) {
     return 1112;
    }
if (index == 293) {
     return 1001;
    }
if (index == 294) {
     return 1176;
    }
if (index == 295) {
     return 1019;
    }
if (index == 296) {
     return 1145;
    }
if (index == 297) {
     return 1189;
    }
if (index == 298) {
     return 999;
    }
if (index == 299) {
     return 1152;
    }
if (index == 300) {
     return 1065;
    }
if (index == 301) {
     return 984;
    }
if (index == 302) {
     return 1160;
    }
if (index == 303) {
     return 1103;
    }
if (index == 304) {
     return 1008;
    }
if (index == 305) {
     return 1156;
    }
if (index == 306) {
     return 989;
    }
if (index == 307) {
     return 1123;
    }
if (index == 308) {
     return 1083;
    }
if (index == 309) {
     return 1122;
    }
if (index == 310) {
     return 1036;
    }
if (index == 311) {
     return 1131;
    }
if (index == 312) {
     return 1040;
    }
if (index == 313) {
     return 1047;
    }
if (index == 314) {
     return 1167;
    }
if (index == 315) {
     return 1178;
    }
if (index == 316) {
     return 1055;
    }
if (index == 317) {
     return 1130;
    }
if (index == 318) {
     return 1083;
    }
if (index == 319) {
     return 1122;
    }
if (index == 320) {
     return 1125;
    }
if (index == 321) {
     return 1146;
    }
if (index == 322) {
     return 1072;
    }
if (index == 323) {
     return 1027;
    }
if (index == 324) {
     return 1172;
    }
if (index == 325) {
     return 1100;
    }
if (index == 326) {
     return 1080;
    }
if (index == 327) {
     return 1080;
    }
if (index == 328) {
     return 1057;
    }
if (index == 329) {
     return 1184;
    }
if (index == 330) {
     return 1035;
    }
if (index == 331) {
     return 1088;
    }
if (index == 332) {
     return 1143;
    }
if (index == 333) {
     return 1039;
    }
if (index == 334) {
     return 1162;
    }
if (index == 335) {
     return 1106;
    }
if (index == 336) {
     return 1115;
    }
if (index == 337) {
     return 1053;
    }
if (index == 338) {
     return 1173;
    }
if (index == 339) {
     return 1047;
    }
if (index == 340) {
     return 1143;
    }
if (index == 341) {
     return 1554;
    }
if (index == 342) {
     return 964;
    }
if (index == 343) {
     return 999;
    }
if (index == 344) {
     return 1136;
    }
if (index == 345) {
     return 1110;
    }
if (index == 346) {
     return 1025;
    }
if (index == 347) {
     return 1070;
    }
if (index == 348) {
     return 1063;
    }
if (index == 349) {
     return 1005;
    }
if (index == 350) {
     return 1062;
    }
if (index == 351) {
     return 1121;
    }
if (index == 352) {
     return 1042;
    }
if (index == 353) {
     return 1032;
    }
if (index == 354) {
     return 1152;
    }
if (index == 355) {
     return 979;
    }
if (index == 356) {
     return 1110;
    }
if (index == 357) {
     return 1117;
    }
if (index == 358) {
     return 1019;
    }
if (index == 359) {
     return 1107;
    }
if (index == 360) {
     return 1058;
    }
if (index == 361) {
     return 1118;
    }
if (index == 362) {
     return 1036;
    }
if (index == 363) {
     return 977;
    }
if (index == 364) {
     return 1168;
    }
if (index == 365) {
     return 1099;
    }
if (index == 366) {
     return 1055;
    }
if (index == 367) {
     return 1063;
    }
if (index == 368) {
     return 1081;
    }
if (index == 369) {
     return 1036;
    }
if (index == 370) {
     return 1085;
    }
if (index == 371) {
     return 1094;
    }
if (index == 372) {
     return 1094;
    }
if (index == 373) {
     return 1061;
    }
if (index == 374) {
     return 1094;
    }
if (index == 375) {
     return 1091;
    }
if (index == 376) {
     return 1083;
    }
if (index == 377) {
     return 1078;
    }
if (index == 378) {
     return 1116;
    }
if (index == 379) {
     return 1048;
    }
if (index == 380) {
     return 995;
    }
if (index == 381) {
     return 1013;
    }
if (index == 382) {
     return 1030;
    }
if (index == 383) {
     return 1030;
    }
if (index == 384) {
     return 1020;
    }
if (index == 385) {
     return 1007;
    }
if (index == 386) {
     return 1038;
    }
if (index == 387) {
     return 1072;
    }
if (index == 388) {
     return 1087;
    }
if (index == 389) {
     return 1098;
    }
if (index == 390) {
     return 1079;
    }
if (index == 391) {
     return 1083;
    }
if (index == 392) {
     return 1080;
    }
if (index == 393) {
     return 1103;
    }
if (index == 394) {
     return 1091;
    }
if (index == 395) {
     return 1046;
    }
if (index == 396) {
     return 1113;
    }
if (index == 397) {
     return 1098;
    }
if (index == 398) {
     return 1071;
    }
if (index == 399) {
     return 1103;
    }
if (index == 400) {
     return 1070;
    }
if (index == 401) {
     return 997;
    }
if (index == 402) {
     return 1134;
    }
if (index == 403) {
     return 1101;
    }
if (index == 404) {
     return 1048;
    }
if (index == 405) {
     return 1015;
    }
if (index == 406) {
     return 1066;
    }
if (index == 407) {
     return 1129;
    }
if (index == 408) {
     return 1078;
    }
if (index == 409) {
     return 983;
    }
if (index == 410) {
     return 1034;
    }
if (index == 411) {
     return 1028;
    }
if (index == 412) {
     return 1033;
    }
if (index == 413) {
     return 1116;
    }
if (index == 414) {
     return 1039;
    }
if (index == 415) {
     return 989;
    }
if (index == 416) {
     return 1060;
    }
if (index == 417) {
     return 1114;
    }
if (index == 418) {
     return 1041;
    }
if (index == 419) {
     return 1076;
    }
if (index == 420) {
     return 1096;
    }
if (index == 421) {
     return 1092;
    }
if (index == 422) {
     return 1074;
    }
if (index == 423) {
     return 1070;
    }
if (index == 424) {
     return 1040;
    }
if (index == 425) {
     return 1006;
    }
if (index == 426) {
     return 1107;
    }
if (index == 427) {
     return 1097;
    }
if (index == 428) {
     return 1064;
    }
if (index == 429) {
     return 1078;
    }
if (index == 430) {
     return 1067;
    }
if (index == 431) {
     return 1070;
    }
if (index == 432) {
     return 1050;
    }
if (index == 433) {
     return 1016;
    }
if (index == 434) {
     return 1106;
    }
if (index == 435) {
     return 1047;
    }
if (index == 436) {
     return 1058;
    }
if (index == 437) {
     return 1030;
    }
if (index == 438) {
     return 1019;
    }
if (index == 439) {
     return 1041;
    }
if (index == 440) {
     return 1041;
    }
if (index == 441) {
     return 1056;
    }
if (index == 442) {
     return 986;
    }
if (index == 443) {
     return 1054;
    }
if (index == 444) {
     return 1002;
    }
if (index == 445) {
     return 1019;
    }
if (index == 446) {
     return 1059;
    }
if (index == 447) {
     return 1015;
    }
if (index == 448) {
     return 985;
    }
if (index == 449) {
     return 1023;
    }
if (index == 450) {
     return 1039;
    }
if (index == 451) {
     return 1027;
    }
if (index == 452) {
     return 993;
    }
if (index == 453) {
     return 998;
    }
if (index == 454) {
     return 1049;
    }
if (index == 455) {
     return 1001;
    }
if (index == 456) {
     return 1003;
    }
if (index == 457) {
     return 983;
    }
if (index == 458) {
     return 1021;
    }
if (index == 459) {
     return 1046;
    }
if (index == 460) {
     return 986;
    }
if (index == 461) {
     return 1043;
    }
if (index == 462) {
     return 1062;
    }
if (index == 463) {
     return 1007;
    }
if (index == 464) {
     return 1009;
    }
if (index == 465) {
     return 1034;
    }
if (index == 466) {
     return 1035;
    }
if (index == 467) {
     return 1085;
    }
if (index == 468) {
     return 1017;
    }
if (index == 469) {
     return 1055;
    }
if (index == 470) {
     return 999;
    }
if (index == 471) {
     return 1075;
    }
if (index == 472) {
     return 1016;
    }
if (index == 473) {
     return 1075;
    }
if (index == 474) {
     return 1014;
    }
if (index == 475) {
     return 1003;
    }
if (index == 476) {
     return 1101;
    }
if (index == 477) {
     return 1017;
    }
if (index == 478) {
     return 1055;
    }
if (index == 479) {
     return 1075;
    }
if (index == 480) {
     return 938;
    }
if (index == 481) {
     return 1092;
    }
if (index == 482) {
     return 1046;
    }
if (index == 483) {
     return 1063;
    }
if (index == 484) {
     return 1048;
    }
if (index == 485) {
     return 1090;
    }
if (index == 486) {
     return 1022;
    }
if (index == 487) {
     return 988;
    }
if (index == 488) {
     return 1060;
    }
if (index == 489) {
     return 1069;
    }
if (index == 490) {
     return 1038;
    }
if (index == 491) {
     return 1075;
    }
if (index == 492) {
     return 1027;
    }
if (index == 493) {
     return 1022;
    }
if (index == 494) {
     return 1128;
    }
if (index == 495) {
     return 1050;
    }
if (index == 496) {
     return 1062;
    }
if (index == 497) {
     return 990;
    }
if (index == 498) {
     return 1101;
    }
if (index == 499) {
     return 1076;
    }
if (index == 500) {
     return 1077;
    }
if (index == 501) {
     return 1071;
    }
if (index == 502) {
     return 1050;
    }
if (index == 503) {
     return 1042;
    }
if (index == 504) {
     return 1053;
    }
if (index == 505) {
     return 1083;
    }
if (index == 506) {
     return 1050;
    }
if (index == 507) {
     return 1003;
    }
if (index == 508) {
     return 1079;
    }
if (index == 509) {
     return 1065;
    }
if (index == 510) {
     return 1018;
    }
if (index == 511) {
     return 1090;
    }
if (index == 512) {
     return 1047;
    }
if (index == 513) {
     return 1071;
    }
if (index == 514) {
     return 1065;
    }
if (index == 515) {
     return 1075;
    }
if (index == 516) {
     return 1001;
    }
if (index == 517) {
     return 1070;
    }
if (index == 518) {
     return 1034;
    }
if (index == 519) {
     return 1041;
    }
if (index == 520) {
     return 1099;
    }
if (index == 521) {
     return 1056;
    }
if (index == 522) {
     return 1106;
    }
if (index == 523) {
     return 1008;
    }
if (index == 524) {
     return 1094;
    }
if (index == 525) {
     return 1092;
    }
if (index == 526) {
     return 1050;
    }
if (index == 527) {
     return 1070;
    }
if (index == 528) {
     return 1095;
    }
if (index == 529) {
     return 1073;
    }
if (index == 530) {
     return 1068;
    }
if (index == 531) {
     return 1076;
    }
if (index == 532) {
     return 1026;
    }
if (index == 533) {
     return 1040;
    }
if (index == 534) {
     return 1052;
    }
if (index == 535) {
     return 1017;
    }
if (index == 536) {
     return 975;
    }
if (index == 537) {
     return 1064;
    }
if (index == 538) {
     return 1040;
    }
if (index == 539) {
     return 1063;
    }
if (index == 540) {
     return 1031;
    }
if (index == 541) {
     return 1055;
    }
if (index == 542) {
     return 1116;
    }
if (index == 543) {
     return 980;
    }
if (index == 544) {
     return 1089;
    }
if (index == 545) {
     return 1014;
    }
if (index == 546) {
     return 1028;
    }
if (index == 547) {
     return 1075;
    }
if (index == 548) {
     return 1109;
    }
if (index == 549) {
     return 1091;
    }
if (index == 550) {
     return 1071;
    }
if (index == 551) {
     return 1066;
    }
if (index == 552) {
     return 1072;
    }
if (index == 553) {
     return 1033;
    }
if (index == 554) {
     return 1088;
    }
if (index == 555) {
     return 1107;
    }
if (index == 556) {
     return 1077;
    }
if (index == 557) {
     return 1114;
    }
if (index == 558) {
     return 1064;
    }
if (index == 559) {
     return 1129;
    }
if (index == 560) {
     return 1074;
    }
if (index == 561) {
     return 1074;
    }
if (index == 562) {
     return 1084;
    }
if (index == 563) {
     return 1002;
    }
if (index == 564) {
     return 1014;
    }
if (index == 565) {
     return 1105;
    }
if (index == 566) {
     return 998;
    }
if (index == 567) {
     return 1089;
    }
if (index == 568) {
     return 1069;
    }
if (index == 569) {
     return 1053;
    }
if (index == 570) {
     return 1123;
    }
if (index == 571) {
     return 1051;
    }
if (index == 572) {
     return 995;
    }
if (index == 573) {
     return 1071;
    }
if (index == 574) {
     return 984;
    }
if (index == 575) {
     return 1096;
    }
if (index == 576) {
     return 1032;
    }
if (index == 577) {
     return 1003;
    }
if (index == 578) {
     return 1041;
    }
if (index == 579) {
     return 1107;
    }
if (index == 580) {
     return 1039;
    }
if (index == 581) {
     return 1057;
    }
if (index == 582) {
     return 1027;
    }
if (index == 583) {
     return 1045;
    }
if (index == 584) {
     return 1035;
    }
if (index == 585) {
     return 1061;
    }
if (index == 586) {
     return 946;
    }
if (index == 587) {
     return 985;
    }
if (index == 588) {
     return 940;
    }
if (index == 589) {
     return 1037;
    }
if (index == 590) {
     return 955;
    }
if (index == 591) {
     return 1027;
    }
if (index == 592) {
     return 946;
    }
if (index == 593) {
     return 1037;
    }
if (index == 594) {
     return 972;
    }
if (index == 595) {
     return 1044;
    }
if (index == 596) {
     return 962;
    }
if (index == 597) {
     return 1061;
    }
if (index == 598) {
     return 969;
    }
if (index == 599) {
     return 1048;
    }
if (index == 600) {
     return 952;
    }
if (index == 601) {
     return 1041;
    }
if (index == 602) {
     return 967;
    }
if (index == 603) {
     return 1039;
    }
if (index == 604) {
     return 966;
    }
if (index == 605) {
     return 1006;
    }
if (index == 606) {
     return 984;
    }
if (index == 607) {
     return 1039;
    }
if (index == 608) {
     return 981;
    }
if (index == 609) {
     return 1060;
    }
if (index == 610) {
     return 964;
    }
if (index == 611) {
     return 1060;
    }
if (index == 612) {
     return 981;
    }
if (index == 613) {
     return 1057;
    }
if (index == 614) {
     return 993;
    }
if (index == 615) {
     return 1069;
    }
if (index == 616) {
     return 965;
    }
if (index == 617) {
     return 1055;
    }
if (index == 618) {
     return 988;
    }
if (index == 619) {
     return 1039;
    }
if (index == 620) {
     return 982;
    }
if (index == 621) {
     return 1064;
    }
if (index == 622) {
     return 1019;
    }
if (index == 623) {
     return 1030;
    }
if (index == 624) {
     return 992;
    }
if (index == 625) {
     return 1022;
    }
if (index == 626) {
     return 979;
    }
if (index == 627) {
     return 1018;
    }
if (index == 628) {
     return 971;
    }
if (index == 629) {
     return 1001;
    }
if (index == 630) {
     return 964;
    }
if (index == 631) {
     return 1002;
    }
if (index == 632) {
     return 968;
    }
if (index == 633) {
     return 1008;
    }
if (index == 634) {
     return 1102;
    }
if (index == 635) {
     return 1057;
    }
if (index == 636) {
     return 1554;
    }
if (index == 637) {
     return 1057;
    }
if (index == 638) {
     return 1186;
    }
if (index == 639) {
     return 1057;
    }
if (index == 640) {
     return 1194;
    }
if (index == 641) {
     return 1057;
    }
if (index == 642) {
     return 1178;
    }
if (index == 643) {
     return 1057;
    }
if (index == 644) {
     return 1088;
    }
if (index == 645) {
     return 865;
    }
if (index == 646) {
     return 1152;
    }
if (index == 647) {
     return 1057;
    }
if (index == 648) {
     return 1164;
    }
if (index == 649) {
     return 1270;
    }
if (index > 649) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1696;
    }
if (index == 1) {
     return 1566;
    }
if (index == 2) {
     return 1593;
    }
if (index == 3) {
     return 1583;
    }
if (index == 4) {
     return 1557;
    }
if (index == 5) {
     return 1602;
    }
if (index == 6) {
     return 1530;
    }
if (index == 7) {
     return 1135;
    }
if (index == 8) {
     return 1556;
    }
if (index == 9) {
     return 1573;
    }
if (index == 10) {
     return 1527;
    }
if (index == 11) {
     return 1600;
    }
if (index == 12) {
     return 1529;
    }
if (index == 13) {
     return 1553;
    }
if (index == 14) {
     return 1554;
    }
if (index == 15) {
     return 1556;
    }
if (index == 16) {
     return 1547;
    }
if (index == 17) {
     return 1556;
    }
if (index == 18) {
     return 1881;
    }
if (index == 19) {
     return 1558;
    }
if (index == 20) {
     return 1547;
    }
if (index == 21) {
     return 1563;
    }
if (index == 22) {
     return 1562;
    }
if (index == 23) {
     return 1533;
    }
if (index == 24) {
     return 1531;
    }
if (index == 25) {
     return 1523;
    }
if (index == 26) {
     return 1542;
    }
if (index == 27) {
     return 1525;
    }
if (index == 28) {
     return 1533;
    }
if (index == 29) {
     return 1519;
    }
if (index == 30) {
     return 1529;
    }
if (index == 31) {
     return 1519;
    }
if (index == 32) {
     return 1534;
    }
if (index == 33) {
     return 1516;
    }
if (index == 34) {
     return 1532;
    }
if (index == 35) {
     return 1506;
    }
if (index == 36) {
     return 1541;
    }
if (index == 37) {
     return 1531;
    }
if (index == 38) {
     return 1546;
    }
if (index == 39) {
     return 1528;
    }
if (index == 40) {
     return 1535;
    }
if (index == 41) {
     return 1524;
    }
if (index == 42) {
     return 1527;
    }
if (index == 43) {
     return 1528;
    }
if (index == 44) {
     return 1544;
    }
if (index == 45) {
     return 1532;
    }
if (index == 46) {
     return 1527;
    }
if (index == 47) {
     return 1521;
    }
if (index == 48) {
     return 1541;
    }
if (index == 49) {
     return 1535;
    }
if (index == 50) {
     return 1542;
    }
if (index == 51) {
     return 1549;
    }
if (index == 52) {
     return 1539;
    }
if (index == 53) {
     return 1514;
    }
if (index == 54) {
     return 1529;
    }
if (index == 55) {
     return 1523;
    }
if (index == 56) {
     return 1534;
    }
if (index == 57) {
     return 1524;
    }
if (index == 58) {
     return 1541;
    }
if (index == 59) {
     return 1521;
    }
if (index == 60) {
     return 1537;
    }
if (index == 61) {
     return 1524;
    }
if (index == 62) {
     return 1527;
    }
if (index == 63) {
     return 1523;
    }
if (index == 64) {
     return 1535;
    }
if (index == 65) {
     return 1522;
    }
if (index == 66) {
     return 1537;
    }
if (index == 67) {
     return 1522;
    }
if (index == 68) {
     return 1527;
    }
if (index == 69) {
     return 1521;
    }
if (index == 70) {
     return 1531;
    }
if (index == 71) {
     return 1520;
    }
if (index == 72) {
     return 1530;
    }
if (index == 73) {
     return 1529;
    }
if (index == 74) {
     return 1537;
    }
if (index == 75) {
     return 1525;
    }
if (index == 76) {
     return 1534;
    }
if (index == 77) {
     return 1526;
    }
if (index == 78) {
     return 1526;
    }
if (index == 79) {
     return 1524;
    }
if (index == 80) {
     return 1527;
    }
if (index == 81) {
     return 1525;
    }
if (index == 82) {
     return 1536;
    }
if (index == 83) {
     return 1545;
    }
if (index == 84) {
     return 1535;
    }
if (index == 85) {
     return 1529;
    }
if (index == 86) {
     return 1191;
    }
if (index == 87) {
     return 1569;
    }
if (index == 88) {
     return 1628;
    }
if (index == 89) {
     return 1576;
    }
if (index == 90) {
     return 1618;
    }
if (index == 91) {
     return 1561;
    }
if (index == 92) {
     return 1623;
    }
if (index == 93) {
     return 1610;
    }
if (index == 94) {
     return 1610;
    }
if (index == 95) {
     return 1617;
    }
if (index == 96) {
     return 1605;
    }
if (index == 97) {
     return 1582;
    }
if (index == 98) {
     return 1596;
    }
if (index == 99) {
     return 1596;
    }
if (index == 100) {
     return 1616;
    }
if (index == 101) {
     return 1583;
    }
if (index == 102) {
     return 1610;
    }
if (index == 103) {
     return 1614;
    }
if (index == 104) {
     return 1603;
    }
if (index == 105) {
     return 1622;
    }
if (index == 106) {
     return 1604;
    }
if (index == 107) {
     return 1598;
    }
if (index == 108) {
     return 1601;
    }
if (index == 109) {
     return 1602;
    }
if (index == 110) {
     return 1605;
    }
if (index == 111) {
     return 1607;
    }
if (index == 112) {
     return 1617;
    }
if (index == 113) {
     return 1606;
    }
if (index == 114) {
     return 1614;
    }
if (index == 115) {
     return 1613;
    }
if (index == 116) {
     return 1601;
    }
if (index == 117) {
     return 1613;
    }
if (index == 118) {
     return 1624;
    }
if (index == 119) {
     return 1620;
    }
if (index == 120) {
     return 1607;
    }
if (index == 121) {
     return 1612;
    }
if (index == 122) {
     return 1615;
    }
if (index == 123) {
     return 1602;
    }
if (index == 124) {
     return 1609;
    }
if (index == 125) {
     return 1621;
    }
if (index == 126) {
     return 1603;
    }
if (index == 127) {
     return 1620;
    }
if (index == 128) {
     return 1606;
    }
if (index == 129) {
     return 1615;
    }
if (index == 130) {
     return 1612;
    }
if (index == 131) {
     return 1614;
    }
if (index == 132) {
     return 1605;
    }
if (index == 133) {
     return 1607;
    }
if (index == 134) {
     return 1620;
    }
if (index == 135) {
     return 1614;
    }
if (index == 136) {
     return 1594;
    }
if (index == 137) {
     return 1623;
    }
if (index == 138) {
     return 1615;
    }
if (index == 139) {
     return 1628;
    }
if (index == 140) {
     return 1606;
    }
if (index == 141) {
     return 1620;
    }
if (index == 142) {
     return 1609;
    }
if (index == 143) {
     return 1628;
    }
if (index == 144) {
     return 1608;
    }
if (index == 145) {
     return 1615;
    }
if (index == 146) {
     return 1620;
    }
if (index == 147) {
     return 1617;
    }
if (index == 148) {
     return 1616;
    }
if (index == 149) {
     return 1595;
    }
if (index == 150) {
     return 1599;
    }
if (index == 151) {
     return 1621;
    }
if (index == 152) {
     return 1631;
    }
if (index == 153) {
     return 1620;
    }
if (index == 154) {
     return 1625;
    }
if (index == 155) {
     return 1599;
    }
if (index == 156) {
     return 1619;
    }
if (index == 157) {
     return 1600;
    }
if (index == 158) {
     return 1605;
    }
if (index == 159) {
     return 1618;
    }
if (index == 160) {
     return 1615;
    }
if (index == 161) {
     return 1615;
    }
if (index == 162) {
     return 1596;
    }
if (index == 163) {
     return 1622;
    }
if (index == 164) {
     return 1622;
    }
if (index == 165) {
     return 1611;
    }
if (index == 166) {
     return 1623;
    }
if (index == 167) {
     return 1608;
    }
if (index == 168) {
     return 1620;
    }
if (index == 169) {
     return 1617;
    }
if (index == 170) {
     return 1621;
    }
if (index == 171) {
     return 1609;
    }
if (index == 172) {
     return 1606;
    }
if (index == 173) {
     return 1632;
    }
if (index == 174) {
     return 1605;
    }
if (index == 175) {
     return 1624;
    }
if (index == 176) {
     return 1616;
    }
if (index == 177) {
     return 1644;
    }
if (index == 178) {
     return 1668;
    }
if (index == 179) {
     return 1493;
    }
if (index == 180) {
     return 1486;
    }
if (index == 181) {
     return 1506;
    }
if (index == 182) {
     return 1463;
    }
if (index == 183) {
     return 1498;
    }
if (index == 184) {
     return 1470;
    }
if (index == 185) {
     return 1501;
    }
if (index == 186) {
     return 1462;
    }
if (index == 187) {
     return 1495;
    }
if (index == 188) {
     return 1458;
    }
if (index == 189) {
     return 1495;
    }
if (index == 190) {
     return 1479;
    }
if (index == 191) {
     return 1501;
    }
if (index == 192) {
     return 1461;
    }
if (index == 193) {
     return 1506;
    }
if (index == 194) {
     return 1460;
    }
if (index == 195) {
     return 1490;
    }
if (index == 196) {
     return 1471;
    }
if (index == 197) {
     return 1489;
    }
if (index == 198) {
     return 1462;
    }
if (index == 199) {
     return 1490;
    }
if (index == 200) {
     return 1460;
    }
if (index == 201) {
     return 1498;
    }
if (index == 202) {
     return 1469;
    }
if (index == 203) {
     return 1497;
    }
if (index == 204) {
     return 1474;
    }
if (index == 205) {
     return 1433;
    }
if (index == 206) {
     return 1452;
    }
if (index == 207) {
     return 1086;
    }
if (index == 208) {
     return 1404;
    }
if (index == 209) {
     return 1536;
    }
if (index == 210) {
     return 1452;
    }
if (index == 211) {
     return 1137;
    }
if (index == 212) {
     return 1456;
    }
if (index == 213) {
     return 1538;
    }
if (index == 214) {
     return 1454;
    }
if (index == 215) {
     return 1540;
    }
if (index == 216) {
     return 1461;
    }
if (index == 217) {
     return 1478;
    }
if (index == 218) {
     return 1470;
    }
if (index == 219) {
     return 1481;
    }
if (index == 220) {
     return 1448;
    }
if (index == 221) {
     return 1482;
    }
if (index == 222) {
     return 1463;
    }
if (index == 223) {
     return 1469;
    }
if (index == 224) {
     return 1458;
    }
if (index == 225) {
     return 1483;
    }
if (index == 226) {
     return 1468;
    }
if (index == 227) {
     return 1480;
    }
if (index == 228) {
     return 1467;
    }
if (index == 229) {
     return 1480;
    }
if (index == 230) {
     return 1468;
    }
if (index == 231) {
     return 1489;
    }
if (index == 232) {
     return 1471;
    }
if (index == 233) {
     return 1488;
    }
if (index == 234) {
     return 1464;
    }
if (index == 235) {
     return 1478;
    }
if (index == 236) {
     return 1460;
    }
if (index == 237) {
     return 1486;
    }
if (index == 238) {
     return 1475;
    }
if (index == 239) {
     return 1486;
    }
if (index == 240) {
     return 1471;
    }
if (index == 241) {
     return 1489;
    }
if (index == 242) {
     return 1469;
    }
if (index == 243) {
     return 1470;
    }
if (index == 244) {
     return 1467;
    }
if (index == 245) {
     return 1465;
    }
if (index == 246) {
     return 1472;
    }
if (index == 247) {
     return 1463;
    }
if (index == 248) {
     return 1465;
    }
if (index == 249) {
     return 1472;
    }
if (index == 250) {
     return 1465;
    }
if (index == 251) {
     return 1450;
    }
if (index == 252) {
     return 1457;
    }
if (index == 253) {
     return 1453;
    }
if (index == 254) {
     return 1572;
    }
if (index == 255) {
     return 1577;
    }
if (index == 256) {
     return 1591;
    }
if (index == 257) {
     return 1604;
    }
if (index == 258) {
     return 1608;
    }
if (index == 259) {
     return 1609;
    }
if (index == 260) {
     return 1538;
    }
if (index == 261) {
     return 1579;
    }
if (index == 262) {
     return 1593;
    }
if (index == 263) {
     return 1596;
    }
if (index == 264) {
     return 1590;
    }
if (index == 265) {
     return 1620;
    }
if (index == 266) {
     return 1604;
    }
if (index == 267) {
     return 1572;
    }
if (index == 268) {
     return 1601;
    }
if (index == 269) {
     return 1601;
    }
if (index == 270) {
     return 1547;
    }
if (index == 271) {
     return 1543;
    }
if (index == 272) {
     return 1602;
    }
if (index == 273) {
     return 1608;
    }
if (index == 274) {
     return 1596;
    }
if (index == 275) {
     return 1590;
    }
if (index == 276) {
     return 1605;
    }
if (index == 277) {
     return 1598;
    }
if (index == 278) {
     return 1555;
    }
if (index == 279) {
     return 1612;
    }
if (index == 280) {
     return 1615;
    }
if (index == 281) {
     return 1623;
    }
if (index == 282) {
     return 1602;
    }
if (index == 283) {
     return 1597;
    }
if (index == 284) {
     return 1587;
    }
if (index == 285) {
     return 1525;
    }
if (index == 286) {
     return 1591;
    }
if (index == 287) {
     return 1575;
    }
if (index == 288) {
     return 1615;
    }
if (index == 289) {
     return 1595;
    }
if (index == 290) {
     return 1588;
    }
if (index == 291) {
     return 1548;
    }
if (index == 292) {
     return 1619;
    }
if (index == 293) {
     return 1586;
    }
if (index == 294) {
     return 1589;
    }
if (index == 295) {
     return 1602;
    }
if (index == 296) {
     return 1581;
    }
if (index == 297) {
     return 1598;
    }
if (index == 298) {
     return 1596;
    }
if (index == 299) {
     return 1606;
    }
if (index == 300) {
     return 1546;
    }
if (index == 301) {
     return 1580;
    }
if (index == 302) {
     return 1579;
    }
if (index == 303) {
     return 1608;
    }
if (index == 304) {
     return 1605;
    }
if (index == 305) {
     return 1613;
    }
if (index == 306) {
     return 1601;
    }
if (index == 307) {
     return 1609;
    }
if (index == 308) {
     return 1598;
    }
if (index == 309) {
     return 1583;
    }
if (index == 310) {
     return 1610;
    }
if (index == 311) {
     return 1606;
    }
if (index == 312) {
     return 1614;
    }
if (index == 313) {
     return 1600;
    }
if (index == 314) {
     return 1593;
    }
if (index == 315) {
     return 1622;
    }
if (index == 316) {
     return 1613;
    }
if (index == 317) {
     return 1601;
    }
if (index == 318) {
     return 1593;
    }
if (index == 319) {
     return 1593;
    }
if (index == 320) {
     return 1615;
    }
if (index == 321) {
     return 1603;
    }
if (index == 322) {
     return 1558;
    }
if (index == 323) {
     return 1591;
    }
if (index == 324) {
     return 1587;
    }
if (index == 325) {
     return 1617;
    }
if (index == 326) {
     return 1599;
    }
if (index == 327) {
     return 1612;
    }
if (index == 328) {
     return 1593;
    }
if (index == 329) {
     return 1615;
    }
if (index == 330) {
     return 1600;
    }
if (index == 331) {
     return 1612;
    }
if (index == 332) {
     return 1583;
    }
if (index == 333) {
     return 1590;
    }
if (index == 334) {
     return 1567;
    }
if (index == 335) {
     return 1586;
    }
if (index == 336) {
     return 1599;
    }
if (index == 337) {
     return 1578;
    }
if (index == 338) {
     return 1611;
    }
if (index == 339) {
     return 1572;
    }
if (index == 340) {
     return 1554;
    }
if (index == 341) {
     return 1149;
    }
if (index == 342) {
     return 1594;
    }
if (index == 343) {
     return 1589;
    }
if (index == 344) {
     return 1571;
    }
if (index == 345) {
     return 1593;
    }
if (index == 346) {
     return 1574;
    }
if (index == 347) {
     return 1591;
    }
if (index == 348) {
     return 1550;
    }
if (index == 349) {
     return 1568;
    }
if (index == 350) {
     return 1591;
    }
if (index == 351) {
     return 1559;
    }
if (index == 352) {
     return 1536;
    }
if (index == 353) {
     return 1588;
    }
if (index == 354) {
     return 1594;
    }
if (index == 355) {
     return 1536;
    }
if (index == 356) {
     return 1565;
    }
if (index == 357) {
     return 1596;
    }
if (index == 358) {
     return 1592;
    }
if (index == 359) {
     return 1602;
    }
if (index == 360) {
     return 1578;
    }
if (index == 361) {
     return 1604;
    }
if (index == 362) {
     return 1567;
    }
if (index == 363) {
     return 1575;
    }
if (index == 364) {
     return 1563;
    }
if (index == 365) {
     return 1587;
    }
if (index == 366) {
     return 1584;
    }
if (index == 367) {
     return 1590;
    }
if (index == 368) {
     return 1592;
    }
if (index == 369) {
     return 1552;
    }
if (index == 370) {
     return 1574;
    }
if (index == 371) {
     return 1576;
    }
if (index == 372) {
     return 1594;
    }
if (index == 373) {
     return 1590;
    }
if (index == 374) {
     return 1605;
    }
if (index == 375) {
     return 1598;
    }
if (index == 376) {
     return 1598;
    }
if (index == 377) {
     return 1593;
    }
if (index == 378) {
     return 1606;
    }
if (index == 379) {
     return 1590;
    }
if (index == 380) {
     return 1512;
    }
if (index == 381) {
     return 1578;
    }
if (index == 382) {
     return 1583;
    }
if (index == 383) {
     return 1556;
    }
if (index == 384) {
     return 1588;
    }
if (index == 385) {
     return 1596;
    }
if (index == 386) {
     return 1573;
    }
if (index == 387) {
     return 1583;
    }
if (index == 388) {
     return 1588;
    }
if (index == 389) {
     return 1600;
    }
if (index == 390) {
     return 1588;
    }
if (index == 391) {
     return 1565;
    }
if (index == 392) {
     return 1580;
    }
if (index == 393) {
     return 1592;
    }
if (index == 394) {
     return 1545;
    }
if (index == 395) {
     return 1590;
    }
if (index == 396) {
     return 1576;
    }
if (index == 397) {
     return 1601;
    }
if (index == 398) {
     return 1581;
    }
if (index == 399) {
     return 1583;
    }
if (index == 400) {
     return 1588;
    }
if (index == 401) {
     return 1549;
    }
if (index == 402) {
     return 1556;
    }
if (index == 403) {
     return 1583;
    }
if (index == 404) {
     return 1583;
    }
if (index == 405) {
     return 1588;
    }
if (index == 406) {
     return 1572;
    }
if (index == 407) {
     return 1627;
    }
if (index == 408) {
     return 1607;
    }
if (index == 409) {
     return 1569;
    }
if (index == 410) {
     return 1565;
    }
if (index == 411) {
     return 1586;
    }
if (index == 412) {
     return 1601;
    }
if (index == 413) {
     return 1594;
    }
if (index == 414) {
     return 1540;
    }
if (index == 415) {
     return 1560;
    }
if (index == 416) {
     return 1584;
    }
if (index == 417) {
     return 1596;
    }
if (index == 418) {
     return 1577;
    }
if (index == 419) {
     return 1588;
    }
if (index == 420) {
     return 1576;
    }
if (index == 421) {
     return 1567;
    }
if (index == 422) {
     return 1547;
    }
if (index == 423) {
     return 1597;
    }
if (index == 424) {
     return 1553;
    }
if (index == 425) {
     return 1601;
    }
if (index == 426) {
     return 1587;
    }
if (index == 427) {
     return 1611;
    }
if (index == 428) {
     return 1602;
    }
if (index == 429) {
     return 1595;
    }
if (index == 430) {
     return 1586;
    }
if (index == 431) {
     return 1594;
    }
if (index == 432) {
     return 1594;
    }
if (index == 433) {
     return 1576;
    }
if (index == 434) {
     return 1585;
    }
if (index == 435) {
     return 1581;
    }
if (index == 436) {
     return 1547;
    }
if (index == 437) {
     return 1588;
    }
if (index == 438) {
     return 1563;
    }
if (index == 439) {
     return 1543;
    }
if (index == 440) {
     return 1577;
    }
if (index == 441) {
     return 1548;
    }
if (index == 442) {
     return 1537;
    }
if (index == 443) {
     return 1578;
    }
if (index == 444) {
     return 1570;
    }
if (index == 445) {
     return 1585;
    }
if (index == 446) {
     return 1579;
    }
if (index == 447) {
     return 1592;
    }
if (index == 448) {
     return 1561;
    }
if (index == 449) {
     return 1576;
    }
if (index == 450) {
     return 1570;
    }
if (index == 451) {
     return 1586;
    }
if (index == 452) {
     return 1587;
    }
if (index == 453) {
     return 1587;
    }
if (index == 454) {
     return 1617;
    }
if (index == 455) {
     return 1555;
    }
if (index == 456) {
     return 1589;
    }
if (index == 457) {
     return 1592;
    }
if (index == 458) {
     return 1575;
    }
if (index == 459) {
     return 1559;
    }
if (index == 460) {
     return 1581;
    }
if (index == 461) {
     return 1576;
    }
if (index == 462) {
     return 1572;
    }
if (index == 463) {
     return 1558;
    }
if (index == 464) {
     return 1565;
    }
if (index == 465) {
     return 1572;
    }
if (index == 466) {
     return 1553;
    }
if (index == 467) {
     return 1582;
    }
if (index == 468) {
     return 1578;
    }
if (index == 469) {
     return 1585;
    }
if (index == 470) {
     return 1577;
    }
if (index == 471) {
     return 1570;
    }
if (index == 472) {
     return 1582;
    }
if (index == 473) {
     return 1579;
    }
if (index == 474) {
     return 1567;
    }
if (index == 475) {
     return 1608;
    }
if (index == 476) {
     return 1599;
    }
if (index == 477) {
     return 1577;
    }
if (index == 478) {
     return 1585;
    }
if (index == 479) {
     return 1590;
    }
if (index == 480) {
     return 1545;
    }
if (index == 481) {
     return 1571;
    }
if (index == 482) {
     return 1600;
    }
if (index == 483) {
     return 1596;
    }
if (index == 484) {
     return 1579;
    }
if (index == 485) {
     return 1582;
    }
if (index == 486) {
     return 1575;
    }
if (index == 487) {
     return 1568;
    }
if (index == 488) {
     return 1584;
    }
if (index == 489) {
     return 1606;
    }
if (index == 490) {
     return 1586;
    }
if (index == 491) {
     return 1589;
    }
if (index == 492) {
     return 1587;
    }
if (index == 493) {
     return 1604;
    }
if (index == 494) {
     return 1593;
    }
if (index == 495) {
     return 1597;
    }
if (index == 496) {
     return 1614;
    }
if (index == 497) {
     return 1586;
    }
if (index == 498) {
     return 1578;
    }
if (index == 499) {
     return 1610;
    }
if (index == 500) {
     return 1595;
    }
if (index == 501) {
     return 1610;
    }
if (index == 502) {
     return 1578;
    }
if (index == 503) {
     return 1595;
    }
if (index == 504) {
     return 1572;
    }
if (index == 505) {
     return 1598;
    }
if (index == 506) {
     return 1600;
    }
if (index == 507) {
     return 1612;
    }
if (index == 508) {
     return 1560;
    }
if (index == 509) {
     return 1606;
    }
if (index == 510) {
     return 1589;
    }
if (index == 511) {
     return 1610;
    }
if (index == 512) {
     return 1589;
    }
if (index == 513) {
     return 1599;
    }
if (index == 514) {
     return 1594;
    }
if (index == 515) {
     return 1585;
    }
if (index == 516) {
     return 1580;
    }
if (index == 517) {
     return 1591;
    }
if (index == 518) {
     return 1562;
    }
if (index == 519) {
     return 1603;
    }
if (index == 520) {
     return 1579;
    }
if (index == 521) {
     return 1607;
    }
if (index == 522) {
     return 1603;
    }
if (index == 523) {
     return 1595;
    }
if (index == 524) {
     return 1593;
    }
if (index == 525) {
     return 1600;
    }
if (index == 526) {
     return 1588;
    }
if (index == 527) {
     return 1598;
    }
if (index == 528) {
     return 1603;
    }
if (index == 529) {
     return 1602;
    }
if (index == 530) {
     return 1598;
    }
if (index == 531) {
     return 1579;
    }
if (index == 532) {
     return 1583;
    }
if (index == 533) {
     return 1591;
    }
if (index == 534) {
     return 1587;
    }
if (index == 535) {
     return 1586;
    }
if (index == 536) {
     return 1568;
    }
if (index == 537) {
     return 1602;
    }
if (index == 538) {
     return 1568;
    }
if (index == 539) {
     return 1604;
    }
if (index == 540) {
     return 1591;
    }
if (index == 541) {
     return 1614;
    }
if (index == 542) {
     return 1585;
    }
if (index == 543) {
     return 1603;
    }
if (index == 544) {
     return 1588;
    }
if (index == 545) {
     return 1589;
    }
if (index == 546) {
     return 1584;
    }
if (index == 547) {
     return 1573;
    }
if (index == 548) {
     return 1592;
    }
if (index == 549) {
     return 1587;
    }
if (index == 550) {
     return 1579;
    }
if (index == 551) {
     return 1580;
    }
if (index == 552) {
     return 1568;
    }
if (index == 553) {
     return 1604;
    }
if (index == 554) {
     return 1574;
    }
if (index == 555) {
     return 1607;
    }
if (index == 556) {
     return 1572;
    }
if (index == 557) {
     return 1606;
    }
if (index == 558) {
     return 1595;
    }
if (index == 559) {
     return 1624;
    }
if (index == 560) {
     return 1588;
    }
if (index == 561) {
     return 1618;
    }
if (index == 562) {
     return 1582;
    }
if (index == 563) {
     return 1566;
    }
if (index == 564) {
     return 1582;
    }
if (index == 565) {
     return 1573;
    }
if (index == 566) {
     return 1531;
    }
if (index == 567) {
     return 1592;
    }
if (index == 568) {
     return 1576;
    }
if (index == 569) {
     return 1597;
    }
if (index == 570) {
     return 1592;
    }
if (index == 571) {
     return 1548;
    }
if (index == 572) {
     return 1560;
    }
if (index == 573) {
     return 1577;
    }
if (index == 574) {
     return 1554;
    }
if (index == 575) {
     return 1562;
    }
if (index == 576) {
     return 1544;
    }
if (index == 577) {
     return 1564;
    }
if (index == 578) {
     return 1569;
    }
if (index == 579) {
     return 1568;
    }
if (index == 580) {
     return 1562;
    }
if (index == 581) {
     return 1467;
    }
if (index == 582) {
     return 1433;
    }
if (index == 583) {
     return 1465;
    }
if (index == 584) {
     return 1433;
    }
if (index == 585) {
     return 1467;
    }
if (index == 586) {
     return 1439;
    }
if (index == 587) {
     return 1440;
    }
if (index == 588) {
     return 1437;
    }
if (index == 589) {
     return 1453;
    }
if (index == 590) {
     return 1450;
    }
if (index == 591) {
     return 1450;
    }
if (index == 592) {
     return 1436;
    }
if (index == 593) {
     return 1453;
    }
if (index == 594) {
     return 1446;
    }
if (index == 595) {
     return 1460;
    }
if (index == 596) {
     return 1448;
    }
if (index == 597) {
     return 1461;
    }
if (index == 598) {
     return 1444;
    }
if (index == 599) {
     return 1457;
    }
if (index == 600) {
     return 1440;
    }
if (index == 601) {
     return 1466;
    }
if (index == 602) {
     return 1441;
    }
if (index == 603) {
     return 1454;
    }
if (index == 604) {
     return 1440;
    }
if (index == 605) {
     return 1450;
    }
if (index == 606) {
     return 1442;
    }
if (index == 607) {
     return 1450;
    }
if (index == 608) {
     return 1449;
    }
if (index == 609) {
     return 1458;
    }
if (index == 610) {
     return 1437;
    }
if (index == 611) {
     return 1459;
    }
if (index == 612) {
     return 1443;
    }
if (index == 613) {
     return 1452;
    }
if (index == 614) {
     return 1444;
    }
if (index == 615) {
     return 1461;
    }
if (index == 616) {
     return 1443;
    }
if (index == 617) {
     return 1450;
    }
if (index == 618) {
     return 1441;
    }
if (index == 619) {
     return 1451;
    }
if (index == 620) {
     return 1431;
    }
if (index == 621) {
     return 1455;
    }
if (index == 622) {
     return 1433;
    }
if (index == 623) {
     return 1451;
    }
if (index == 624) {
     return 1433;
    }
if (index == 625) {
     return 1460;
    }
if (index == 626) {
     return 1438;
    }
if (index == 627) {
     return 1465;
    }
if (index == 628) {
     return 1426;
    }
if (index == 629) {
     return 1456;
    }
if (index == 630) {
     return 1431;
    }
if (index == 631) {
     return 1453;
    }
if (index == 632) {
     return 1431;
    }
if (index == 633) {
     return 1450;
    }
if (index == 634) {
     return 1542;
    }
if (index == 635) {
     return 1452;
    }
if (index == 636) {
     return 1170;
    }
if (index == 637) {
     return 1452;
    }
if (index == 638) {
     return 1561;
    }
if (index == 639) {
     return 1452;
    }
if (index == 640) {
     return 1567;
    }
if (index == 641) {
     return 1513;
    }
if (index == 642) {
     return 1572;
    }
if (index == 643) {
     return 1513;
    }
if (index == 644) {
     return 1573;
    }
if (index == 645) {
     return 1511;
    }
if (index == 646) {
     return 1548;
    }
if (index == 647) {
     return 1513;
    }
if (index == 648) {
     return 1558;
    }
if (index == 649) {
     return 1678;
    }
if (index > 649) {
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
    var url = '/fedora/get/seapage:331_' + imgStr + '/digitalImage';
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
br.numLeafs = 650;

// Book title and the URL used for the book title link
br.bookTitle= "Journal of an embassy from the governor general of India to the court of Ava in the year 1827";
br.bookAuthor= "Crawfurd, John";
br.bookPub= "London: Henry Colburn, 1829";
br.bookKeyword= "Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;British--Burma<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paleontology--Burma";
br.bookUrl  = '/catalog/sea:331';

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
