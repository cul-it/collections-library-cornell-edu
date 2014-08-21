//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1395;
    }
if (index == 1) {
     return 1313;
    }
if (index == 2) {
     return 1264;
    }
if (index == 3) {
     return 1218;
    }
if (index == 4) {
     return 1171;
    }
if (index == 5) {
     return 1193;
    }
if (index == 6) {
     return 1146;
    }
if (index == 7) {
     return 1209;
    }
if (index == 8) {
     return 1177;
    }
if (index == 9) {
     return 1052;
    }
if (index == 10) {
     return 1115;
    }
if (index == 11) {
     return 1251;
    }
if (index == 12) {
     return 1259;
    }
if (index == 13) {
     return 1307;
    }
if (index == 14) {
     return 1175;
    }
if (index == 15) {
     return 1195;
    }
if (index == 16) {
     return 1195;
    }
if (index == 17) {
     return 1207;
    }
if (index == 18) {
     return 1177;
    }
if (index == 19) {
     return 1179;
    }
if (index == 20) {
     return 1147;
    }
if (index == 21) {
     return 1160;
    }
if (index == 22) {
     return 1147;
    }
if (index == 23) {
     return 1138;
    }
if (index == 24) {
     return 1201;
    }
if (index == 25) {
     return 1157;
    }
if (index == 26) {
     return 1182;
    }
if (index == 27) {
     return 1169;
    }
if (index == 28) {
     return 1166;
    }
if (index == 29) {
     return 1165;
    }
if (index == 30) {
     return 1184;
    }
if (index == 31) {
     return 1194;
    }
if (index == 32) {
     return 1221;
    }
if (index == 33) {
     return 1247;
    }
if (index == 34) {
     return 1223;
    }
if (index == 35) {
     return 1222;
    }
if (index == 36) {
     return 1237;
    }
if (index == 37) {
     return 1234;
    }
if (index == 38) {
     return 1221;
    }
if (index == 39) {
     return 1211;
    }
if (index == 40) {
     return 1217;
    }
if (index == 41) {
     return 1264;
    }
if (index == 42) {
     return 1234;
    }
if (index == 43) {
     return 1252;
    }
if (index == 44) {
     return 1272;
    }
if (index == 45) {
     return 1257;
    }
if (index == 46) {
     return 1252;
    }
if (index == 47) {
     return 1257;
    }
if (index == 48) {
     return 1240;
    }
if (index == 49) {
     return 1248;
    }
if (index == 50) {
     return 1210;
    }
if (index == 51) {
     return 1271;
    }
if (index == 52) {
     return 1262;
    }
if (index == 53) {
     return 1260;
    }
if (index == 54) {
     return 1264;
    }
if (index == 55) {
     return 1237;
    }
if (index == 56) {
     return 1214;
    }
if (index == 57) {
     return 1257;
    }
if (index == 58) {
     return 1265;
    }
if (index == 59) {
     return 1224;
    }
if (index == 60) {
     return 1265;
    }
if (index == 61) {
     return 1267;
    }
if (index == 62) {
     return 1258;
    }
if (index == 63) {
     return 1270;
    }
if (index == 64) {
     return 1224;
    }
if (index == 65) {
     return 1275;
    }
if (index == 66) {
     return 1287;
    }
if (index == 67) {
     return 1287;
    }
if (index == 68) {
     return 1225;
    }
if (index == 69) {
     return 1260;
    }
if (index == 70) {
     return 1254;
    }
if (index == 71) {
     return 1230;
    }
if (index == 72) {
     return 1189;
    }
if (index == 73) {
     return 1219;
    }
if (index == 74) {
     return 1288;
    }
if (index == 75) {
     return 1243;
    }
if (index == 76) {
     return 1200;
    }
if (index == 77) {
     return 1221;
    }
if (index == 78) {
     return 1189;
    }
if (index == 79) {
     return 1181;
    }
if (index == 80) {
     return 1185;
    }
if (index == 81) {
     return 1188;
    }
if (index == 82) {
     return 1223;
    }
if (index == 83) {
     return 1202;
    }
if (index == 84) {
     return 1190;
    }
if (index == 85) {
     return 1223;
    }
if (index == 86) {
     return 1191;
    }
if (index == 87) {
     return 1180;
    }
if (index == 88) {
     return 1183;
    }
if (index == 89) {
     return 1166;
    }
if (index == 90) {
     return 1188;
    }
if (index == 91) {
     return 1237;
    }
if (index == 92) {
     return 1196;
    }
if (index == 93) {
     return 1172;
    }
if (index == 94) {
     return 1180;
    }
if (index == 95) {
     return 1215;
    }
if (index == 96) {
     return 1205;
    }
if (index == 97) {
     return 1238;
    }
if (index == 98) {
     return 1244;
    }
if (index == 99) {
     return 1241;
    }
if (index == 100) {
     return 1218;
    }
if (index == 101) {
     return 1224;
    }
if (index == 102) {
     return 1247;
    }
if (index == 103) {
     return 1215;
    }
if (index == 104) {
     return 1186;
    }
if (index == 105) {
     return 1202;
    }
if (index == 106) {
     return 1214;
    }
if (index == 107) {
     return 1234;
    }
if (index == 108) {
     return 1186;
    }
if (index == 109) {
     return 1238;
    }
if (index == 110) {
     return 1206;
    }
if (index == 111) {
     return 1192;
    }
if (index == 112) {
     return 1211;
    }
if (index == 113) {
     return 1233;
    }
if (index == 114) {
     return 1181;
    }
if (index == 115) {
     return 1193;
    }
if (index == 116) {
     return 1239;
    }
if (index == 117) {
     return 1210;
    }
if (index == 118) {
     return 1241;
    }
if (index == 119) {
     return 1239;
    }
if (index == 120) {
     return 1215;
    }
if (index == 121) {
     return 1248;
    }
if (index == 122) {
     return 1192;
    }
if (index == 123) {
     return 1251;
    }
if (index == 124) {
     return 1249;
    }
if (index == 125) {
     return 1221;
    }
if (index == 126) {
     return 1217;
    }
if (index == 127) {
     return 1236;
    }
if (index == 128) {
     return 1214;
    }
if (index == 129) {
     return 1216;
    }
if (index == 130) {
     return 1182;
    }
if (index == 131) {
     return 1192;
    }
if (index == 132) {
     return 1223;
    }
if (index == 133) {
     return 1211;
    }
if (index == 134) {
     return 1205;
    }
if (index == 135) {
     return 1218;
    }
if (index == 136) {
     return 1208;
    }
if (index == 137) {
     return 1190;
    }
if (index == 138) {
     return 1194;
    }
if (index == 139) {
     return 1213;
    }
if (index == 140) {
     return 1210;
    }
if (index == 141) {
     return 1245;
    }
if (index == 142) {
     return 1221;
    }
if (index == 143) {
     return 1221;
    }
if (index == 144) {
     return 1238;
    }
if (index == 145) {
     return 1197;
    }
if (index == 146) {
     return 1204;
    }
if (index == 147) {
     return 1209;
    }
if (index == 148) {
     return 1200;
    }
if (index == 149) {
     return 1243;
    }
if (index == 150) {
     return 1213;
    }
if (index == 151) {
     return 1211;
    }
if (index == 152) {
     return 1183;
    }
if (index == 153) {
     return 1183;
    }
if (index == 154) {
     return 1192;
    }
if (index == 155) {
     return 1178;
    }
if (index == 156) {
     return 1189;
    }
if (index == 157) {
     return 1238;
    }
if (index == 158) {
     return 1225;
    }
if (index == 159) {
     return 1211;
    }
if (index == 160) {
     return 1200;
    }
if (index == 161) {
     return 1252;
    }
if (index == 162) {
     return 1200;
    }
if (index == 163) {
     return 1238;
    }
if (index == 164) {
     return 1213;
    }
if (index == 165) {
     return 1209;
    }
if (index == 166) {
     return 1218;
    }
if (index == 167) {
     return 1238;
    }
if (index == 168) {
     return 1261;
    }
if (index == 169) {
     return 1242;
    }
if (index == 170) {
     return 1242;
    }
if (index == 171) {
     return 1263;
    }
if (index == 172) {
     return 1208;
    }
if (index == 173) {
     return 1214;
    }
if (index == 174) {
     return 1180;
    }
if (index == 175) {
     return 1231;
    }
if (index == 176) {
     return 1228;
    }
if (index == 177) {
     return 1211;
    }
if (index == 178) {
     return 1217;
    }
if (index == 179) {
     return 1249;
    }
if (index == 180) {
     return 1198;
    }
if (index == 181) {
     return 1230;
    }
if (index == 182) {
     return 1215;
    }
if (index == 183) {
     return 1260;
    }
if (index == 184) {
     return 1228;
    }
if (index == 185) {
     return 1252;
    }
if (index == 186) {
     return 1236;
    }
if (index == 187) {
     return 1241;
    }
if (index == 188) {
     return 1225;
    }
if (index == 189) {
     return 1219;
    }
if (index == 190) {
     return 1209;
    }
if (index == 191) {
     return 1233;
    }
if (index == 192) {
     return 1235;
    }
if (index == 193) {
     return 1224;
    }
if (index == 194) {
     return 1228;
    }
if (index == 195) {
     return 1099;
    }
if (index == 196) {
     return 1229;
    }
if (index == 197) {
     return 1225;
    }
if (index == 198) {
     return 1204;
    }
if (index == 199) {
     return 1219;
    }
if (index == 200) {
     return 1241;
    }
if (index == 201) {
     return 1588;
    }
if (index == 202) {
     return 1210;
    }
if (index == 203) {
     return 1235;
    }
if (index == 204) {
     return 1208;
    }
if (index == 205) {
     return 1224;
    }
if (index == 206) {
     return 1197;
    }
if (index == 207) {
     return 1235;
    }
if (index == 208) {
     return 1217;
    }
if (index == 209) {
     return 1164;
    }
if (index == 210) {
     return 1231;
    }
if (index == 211) {
     return 1252;
    }
if (index == 212) {
     return 1238;
    }
if (index == 213) {
     return 1222;
    }
if (index == 214) {
     return 1244;
    }
if (index == 215) {
     return 1158;
    }
if (index == 216) {
     return 750;
    }
if (index == 217) {
     return 750;
    }
if (index == 218) {
     return 1209;
    }
if (index == 219) {
     return 1241;
    }
if (index == 220) {
     return 1207;
    }
if (index == 221) {
     return 1260;
    }
if (index == 222) {
     return 1219;
    }
if (index == 223) {
     return 1241;
    }
if (index == 224) {
     return 1255;
    }
if (index == 225) {
     return 1226;
    }
if (index == 226) {
     return 1244;
    }
if (index == 227) {
     return 1244;
    }
if (index == 228) {
     return 1241;
    }
if (index == 229) {
     return 1248;
    }
if (index == 230) {
     return 1241;
    }
if (index == 231) {
     return 1224;
    }
if (index == 232) {
     return 1236;
    }
if (index == 233) {
     return 1213;
    }
if (index == 234) {
     return 1234;
    }
if (index == 235) {
     return 1252;
    }
if (index == 236) {
     return 1231;
    }
if (index == 237) {
     return 1222;
    }
if (index == 238) {
     return 1214;
    }
if (index == 239) {
     return 1225;
    }
if (index == 240) {
     return 1238;
    }
if (index == 241) {
     return 1235;
    }
if (index == 242) {
     return 1217;
    }
if (index == 243) {
     return 1610;
    }
if (index == 244) {
     return 1223;
    }
if (index == 245) {
     return 1198;
    }
if (index == 246) {
     return 1217;
    }
if (index == 247) {
     return 1232;
    }
if (index == 248) {
     return 1219;
    }
if (index == 249) {
     return 1229;
    }
if (index == 250) {
     return 1227;
    }
if (index == 251) {
     return 1259;
    }
if (index == 252) {
     return 1259;
    }
if (index == 253) {
     return 1229;
    }
if (index == 254) {
     return 1236;
    }
if (index == 255) {
     return 1226;
    }
if (index == 256) {
     return 1231;
    }
if (index == 257) {
     return 1240;
    }
if (index == 258) {
     return 1249;
    }
if (index == 259) {
     return 1230;
    }
if (index == 260) {
     return 1233;
    }
if (index == 261) {
     return 1240;
    }
if (index == 262) {
     return 1230;
    }
if (index == 263) {
     return 1224;
    }
if (index == 264) {
     return 1216;
    }
if (index == 265) {
     return 1237;
    }
if (index == 266) {
     return 1237;
    }
if (index == 267) {
     return 1229;
    }
if (index == 268) {
     return 1226;
    }
if (index == 269) {
     return 1150;
    }
if (index == 270) {
     return 1181;
    }
if (index == 271) {
     return 1176;
    }
if (index == 272) {
     return 1200;
    }
if (index == 273) {
     return 1220;
    }
if (index == 274) {
     return 1227;
    }
if (index == 275) {
     return 1179;
    }
if (index == 276) {
     return 1249;
    }
if (index == 277) {
     return 1190;
    }
if (index == 278) {
     return 1233;
    }
if (index == 279) {
     return 1205;
    }
if (index == 280) {
     return 1201;
    }
if (index == 281) {
     return 1232;
    }
if (index == 282) {
     return 1219;
    }
if (index == 283) {
     return 1207;
    }
if (index == 284) {
     return 1203;
    }
if (index == 285) {
     return 1151;
    }
if (index == 286) {
     return 1195;
    }
if (index == 287) {
     return 1205;
    }
if (index == 288) {
     return 1211;
    }
if (index == 289) {
     return 1229;
    }
if (index == 290) {
     return 1227;
    }
if (index == 291) {
     return 1206;
    }
if (index == 292) {
     return 1208;
    }
if (index == 293) {
     return 1233;
    }
if (index == 294) {
     return 1241;
    }
if (index == 295) {
     return 1201;
    }
if (index == 296) {
     return 1213;
    }
if (index == 297) {
     return 1219;
    }
if (index == 298) {
     return 1220;
    }
if (index == 299) {
     return 1191;
    }
if (index == 300) {
     return 1161;
    }
if (index == 301) {
     return 1202;
    }
if (index == 302) {
     return 1214;
    }
if (index == 303) {
     return 1213;
    }
if (index == 304) {
     return 1219;
    }
if (index == 305) {
     return 1230;
    }
if (index == 306) {
     return 1252;
    }
if (index == 307) {
     return 1192;
    }
if (index == 308) {
     return 1204;
    }
if (index == 309) {
     return 1249;
    }
if (index == 310) {
     return 1560;
    }
if (index == 311) {
     return 1225;
    }
if (index == 312) {
     return 1237;
    }
if (index == 313) {
     return 1234;
    }
if (index == 314) {
     return 1231;
    }
if (index == 315) {
     return 1229;
    }
if (index == 316) {
     return 1218;
    }
if (index == 317) {
     return 1246;
    }
if (index == 318) {
     return 1218;
    }
if (index == 319) {
     return 1255;
    }
if (index == 320) {
     return 1223;
    }
if (index == 321) {
     return 1258;
    }
if (index == 322) {
     return 1223;
    }
if (index == 323) {
     return 1243;
    }
if (index == 324) {
     return 1226;
    }
if (index == 325) {
     return 1251;
    }
if (index == 326) {
     return 1528;
    }
if (index == 327) {
     return 1518;
    }
if (index == 328) {
     return 1270;
    }
if (index == 329) {
     return 1247;
    }
if (index == 330) {
     return 1223;
    }
if (index == 331) {
     return 1254;
    }
if (index == 332) {
     return 1248;
    }
if (index == 333) {
     return 1246;
    }
if (index == 334) {
     return 1250;
    }
if (index == 335) {
     return 1235;
    }
if (index == 336) {
     return 1231;
    }
if (index == 337) {
     return 1222;
    }
if (index == 338) {
     return 1220;
    }
if (index == 339) {
     return 1183;
    }
if (index == 340) {
     return 1220;
    }
if (index == 341) {
     return 1242;
    }
if (index == 342) {
     return 1228;
    }
if (index == 343) {
     return 1205;
    }
if (index == 344) {
     return 1234;
    }
if (index == 345) {
     return 1211;
    }
if (index == 346) {
     return 1239;
    }
if (index == 347) {
     return 1232;
    }
if (index == 348) {
     return 1231;
    }
if (index == 349) {
     return 1129;
    }
if (index == 350) {
     return 1245;
    }
if (index == 351) {
     return 1241;
    }
if (index == 352) {
     return 1207;
    }
if (index == 353) {
     return 1219;
    }
if (index == 354) {
     return 1212;
    }
if (index == 355) {
     return 1230;
    }
if (index == 356) {
     return 1240;
    }
if (index == 357) {
     return 1199;
    }
if (index == 358) {
     return 1250;
    }
if (index == 359) {
     return 1228;
    }
if (index == 360) {
     return 1234;
    }
if (index == 361) {
     return 1225;
    }
if (index == 362) {
     return 1214;
    }
if (index == 363) {
     return 1236;
    }
if (index == 364) {
     return 1223;
    }
if (index == 365) {
     return 1235;
    }
if (index == 366) {
     return 1215;
    }
if (index == 367) {
     return 1197;
    }
if (index == 368) {
     return 1239;
    }
if (index == 369) {
     return 1194;
    }
if (index == 370) {
     return 1158;
    }
if (index == 371) {
     return 1186;
    }
if (index == 372) {
     return 1223;
    }
if (index == 373) {
     return 1227;
    }
if (index == 374) {
     return 1253;
    }
if (index == 375) {
     return 1628;
    }
if (index == 376) {
     return 1253;
    }
if (index == 377) {
     return 1192;
    }
if (index == 378) {
     return 1250;
    }
if (index == 379) {
     return 1209;
    }
if (index == 380) {
     return 1204;
    }
if (index == 381) {
     return 1205;
    }
if (index == 382) {
     return 1242;
    }
if (index == 383) {
     return 1205;
    }
if (index == 384) {
     return 1169;
    }
if (index == 385) {
     return 1208;
    }
if (index == 386) {
     return 1226;
    }
if (index == 387) {
     return 1215;
    }
if (index == 388) {
     return 1217;
    }
if (index == 389) {
     return 1253;
    }
if (index == 390) {
     return 1206;
    }
if (index == 391) {
     return 1250;
    }
if (index == 392) {
     return 1236;
    }
if (index == 393) {
     return 1237;
    }
if (index == 394) {
     return 1203;
    }
if (index == 395) {
     return 1227;
    }
if (index == 396) {
     return 1242;
    }
if (index == 397) {
     return 1216;
    }
if (index == 398) {
     return 1259;
    }
if (index == 399) {
     return 1224;
    }
if (index == 400) {
     return 1227;
    }
if (index == 401) {
     return 1246;
    }
if (index == 402) {
     return 1229;
    }
if (index == 403) {
     return 1531;
    }
if (index == 404) {
     return 1177;
    }
if (index == 405) {
     return 1252;
    }
if (index == 406) {
     return 1226;
    }
if (index == 407) {
     return 1219;
    }
if (index == 408) {
     return 1237;
    }
if (index == 409) {
     return 1219;
    }
if (index == 410) {
     return 1234;
    }
if (index == 411) {
     return 1208;
    }
if (index == 412) {
     return 1212;
    }
if (index == 413) {
     return 1250;
    }
if (index == 414) {
     return 1218;
    }
if (index == 415) {
     return 1241;
    }
if (index == 416) {
     return 1234;
    }
if (index == 417) {
     return 1222;
    }
if (index == 418) {
     return 1242;
    }
if (index == 419) {
     return 1248;
    }
if (index == 420) {
     return 1215;
    }
if (index == 421) {
     return 1207;
    }
if (index == 422) {
     return 1212;
    }
if (index == 423) {
     return 1222;
    }
if (index == 424) {
     return 1242;
    }
if (index == 425) {
     return 1210;
    }
if (index == 426) {
     return 1223;
    }
if (index == 427) {
     return 1208;
    }
if (index == 428) {
     return 1256;
    }
if (index == 429) {
     return 1181;
    }
if (index == 430) {
     return 1239;
    }
if (index == 431) {
     return 1238;
    }
if (index == 432) {
     return 1193;
    }
if (index == 433) {
     return 1246;
    }
if (index == 434) {
     return 1207;
    }
if (index == 435) {
     return 1230;
    }
if (index == 436) {
     return 1193;
    }
if (index == 437) {
     return 1232;
    }
if (index == 438) {
     return 1223;
    }
if (index == 439) {
     return 1235;
    }
if (index == 440) {
     return 1234;
    }
if (index == 441) {
     return 1183;
    }
if (index == 442) {
     return 1272;
    }
if (index == 443) {
     return 1243;
    }
if (index == 444) {
     return 1223;
    }
if (index == 445) {
     return 1183;
    }
if (index == 446) {
     return 1231;
    }
if (index == 447) {
     return 1242;
    }
if (index == 448) {
     return 1185;
    }
if (index == 449) {
     return 1194;
    }
if (index == 450) {
     return 1234;
    }
if (index == 451) {
     return 1238;
    }
if (index == 452) {
     return 1212;
    }
if (index == 453) {
     return 1186;
    }
if (index == 454) {
     return 1218;
    }
if (index == 455) {
     return 1237;
    }
if (index == 456) {
     return 1237;
    }
if (index == 457) {
     return 1203;
    }
if (index == 458) {
     return 1231;
    }
if (index == 459) {
     return 1232;
    }
if (index == 460) {
     return 1263;
    }
if (index == 461) {
     return 1235;
    }
if (index == 462) {
     return 1218;
    }
if (index == 463) {
     return 1211;
    }
if (index == 464) {
     return 1246;
    }
if (index == 465) {
     return 1221;
    }
if (index == 466) {
     return 1215;
    }
if (index == 467) {
     return 1232;
    }
if (index == 468) {
     return 1231;
    }
if (index == 469) {
     return 1224;
    }
if (index == 470) {
     return 1209;
    }
if (index == 471) {
     return 1216;
    }
if (index == 472) {
     return 1207;
    }
if (index == 473) {
     return 1230;
    }
if (index == 474) {
     return 1263;
    }
if (index == 475) {
     return 1196;
    }
if (index == 476) {
     return 1212;
    }
if (index == 477) {
     return 1222;
    }
if (index == 478) {
     return 1231;
    }
if (index == 479) {
     return 1201;
    }
if (index == 480) {
     return 1234;
    }
if (index == 481) {
     return 1189;
    }
if (index == 482) {
     return 1204;
    }
if (index == 483) {
     return 1235;
    }
if (index == 484) {
     return 1199;
    }
if (index == 485) {
     return 1246;
    }
if (index == 486) {
     return 1218;
    }
if (index == 487) {
     return 1200;
    }
if (index == 488) {
     return 1252;
    }
if (index == 489) {
     return 1211;
    }
if (index == 490) {
     return 1210;
    }
if (index == 491) {
     return 1220;
    }
if (index == 492) {
     return 1243;
    }
if (index == 493) {
     return 1189;
    }
if (index == 494) {
     return 1221;
    }
if (index == 495) {
     return 1237;
    }
if (index == 496) {
     return 1207;
    }
if (index == 497) {
     return 1235;
    }
if (index == 498) {
     return 1216;
    }
if (index == 499) {
     return 1197;
    }
if (index == 500) {
     return 1227;
    }
if (index == 501) {
     return 1175;
    }
if (index == 502) {
     return 1219;
    }
if (index == 503) {
     return 1193;
    }
if (index == 504) {
     return 1215;
    }
if (index == 505) {
     return 1226;
    }
if (index == 506) {
     return 1200;
    }
if (index == 507) {
     return 1211;
    }
if (index == 508) {
     return 1217;
    }
if (index == 509) {
     return 1256;
    }
if (index == 510) {
     return 1222;
    }
if (index == 511) {
     return 1215;
    }
if (index == 512) {
     return 1244;
    }
if (index == 513) {
     return 1223;
    }
if (index == 514) {
     return 1207;
    }
if (index == 515) {
     return 1262;
    }
if (index == 516) {
     return 1233;
    }
if (index == 517) {
     return 1222;
    }
if (index == 518) {
     return 1206;
    }
if (index == 519) {
     return 1212;
    }
if (index == 520) {
     return 1134;
    }
if (index == 521) {
     return 1192;
    }
if (index == 522) {
     return 1242;
    }
if (index == 523) {
     return 1471;
    }
if (index == 524) {
     return 1208;
    }
if (index == 525) {
     return 1216;
    }
if (index == 526) {
     return 1201;
    }
if (index == 527) {
     return 1233;
    }
if (index == 528) {
     return 1209;
    }
if (index == 529) {
     return 1140;
    }
if (index == 530) {
     return 1222;
    }
if (index == 531) {
     return 1222;
    }
if (index == 532) {
     return 1198;
    }
if (index == 533) {
     return 1209;
    }
if (index == 534) {
     return 1168;
    }
if (index == 535) {
     return 1219;
    }
if (index == 536) {
     return 1211;
    }
if (index == 537) {
     return 1195;
    }
if (index == 538) {
     return 1220;
    }
if (index == 539) {
     return 1217;
    }
if (index == 540) {
     return 1203;
    }
if (index == 541) {
     return 1333;
    }
if (index == 542) {
     return 1359;
    }
if (index == 543) {
     return 1203;
    }
if (index == 544) {
     return 1233;
    }
if (index == 545) {
     return 1195;
    }
if (index == 546) {
     return 1222;
    }
if (index == 547) {
     return 1168;
    }
if (index == 548) {
     return 1214;
    }
if (index == 549) {
     return 1209;
    }
if (index == 550) {
     return 1195;
    }
if (index == 551) {
     return 1227;
    }
if (index == 552) {
     return 1211;
    }
if (index == 553) {
     return 1580;
    }
if (index == 554) {
     return 1214;
    }
if (index == 555) {
     return 1214;
    }
if (index == 556) {
     return 1184;
    }
if (index == 557) {
     return 1189;
    }
if (index == 558) {
     return 1225;
    }
if (index == 559) {
     return 1190;
    }
if (index == 560) {
     return 1214;
    }
if (index == 561) {
     return 1229;
    }
if (index == 562) {
     return 1225;
    }
if (index == 563) {
     return 1219;
    }
if (index == 564) {
     return 1228;
    }
if (index == 565) {
     return 1227;
    }
if (index == 566) {
     return 1233;
    }
if (index == 567) {
     return 1225;
    }
if (index == 568) {
     return 1195;
    }
if (index == 569) {
     return 1219;
    }
if (index == 570) {
     return 1644;
    }
if (index == 571) {
     return 1217;
    }
if (index == 572) {
     return 1214;
    }
if (index == 573) {
     return 1206;
    }
if (index == 574) {
     return 1217;
    }
if (index == 575) {
     return 1206;
    }
if (index == 576) {
     return 1198;
    }
if (index == 577) {
     return 1245;
    }
if (index == 578) {
     return 1080;
    }
if (index == 579) {
     return 1211;
    }
if (index == 580) {
     return 1189;
    }
if (index == 581) {
     return 1487;
    }
if (index == 582) {
     return 1211;
    }
if (index == 583) {
     return 1205;
    }
if (index == 584) {
     return 1192;
    }
if (index == 585) {
     return 1222;
    }
if (index == 586) {
     return 1231;
    }
if (index == 587) {
     return 1236;
    }
if (index == 588) {
     return 1214;
    }
if (index == 589) {
     return 1233;
    }
if (index == 590) {
     return 1250;
    }
if (index == 591) {
     return 1222;
    }
if (index == 592) {
     return 1230;
    }
if (index == 593) {
     return 1162;
    }
if (index == 594) {
     return 1236;
    }
if (index == 595) {
     return 1195;
    }
if (index == 596) {
     return 1184;
    }
if (index == 597) {
     return 1237;
    }
if (index == 598) {
     return 1200;
    }
if (index == 599) {
     return 1234;
    }
if (index == 600) {
     return 1231;
    }
if (index == 601) {
     return 1181;
    }
if (index == 602) {
     return 1222;
    }
if (index == 603) {
     return 1234;
    }
if (index == 604) {
     return 1225;
    }
if (index == 605) {
     return 1211;
    }
if (index == 606) {
     return 1622;
    }
if (index == 607) {
     return 1216;
    }
if (index == 608) {
     return 1225;
    }
if (index == 609) {
     return 1215;
    }
if (index == 610) {
     return 1239;
    }
if (index == 611) {
     return 1219;
    }
if (index == 612) {
     return 1222;
    }
if (index == 613) {
     return 1228;
    }
if (index == 614) {
     return 1211;
    }
if (index == 615) {
     return 1243;
    }
if (index == 616) {
     return 1231;
    }
if (index == 617) {
     return 1242;
    }
if (index == 618) {
     return 1242;
    }
if (index == 619) {
     return 1217;
    }
if (index == 620) {
     return 1217;
    }
if (index == 621) {
     return 1506;
    }
if (index == 622) {
     return 1214;
    }
if (index == 623) {
     return 1162;
    }
if (index == 624) {
     return 1154;
    }
if (index == 625) {
     return 1238;
    }
if (index == 626) {
     return 1223;
    }
if (index == 627) {
     return 1193;
    }
if (index == 628) {
     return 1233;
    }
if (index == 629) {
     return 1211;
    }
if (index == 630) {
     return 1203;
    }
if (index == 631) {
     return 1195;
    }
if (index == 632) {
     return 1242;
    }
if (index == 633) {
     return 1230;
    }
if (index == 634) {
     return 1200;
    }
if (index == 635) {
     return 1214;
    }
if (index == 636) {
     return 1234;
    }
if (index == 637) {
     return 1203;
    }
if (index == 638) {
     return 1222;
    }
if (index == 639) {
     return 1245;
    }
if (index == 640) {
     return 1243;
    }
if (index == 641) {
     return 1195;
    }
if (index == 642) {
     return 1236;
    }
if (index == 643) {
     return 1230;
    }
if (index == 644) {
     return 1209;
    }
if (index == 645) {
     return 1219;
    }
if (index == 646) {
     return 1200;
    }
if (index == 647) {
     return 1206;
    }
if (index == 648) {
     return 1209;
    }
if (index == 649) {
     return 1233;
    }
if (index == 650) {
     return 1178;
    }
if (index == 651) {
     return 1203;
    }
if (index == 652) {
     return 1234;
    }
if (index == 653) {
     return 1208;
    }
if (index == 654) {
     return 1134;
    }
if (index == 655) {
     return 1247;
    }
if (index == 656) {
     return 1216;
    }
if (index == 657) {
     return 1198;
    }
if (index == 658) {
     return 1222;
    }
if (index == 659) {
     return 1164;
    }
if (index == 660) {
     return 1198;
    }
if (index == 661) {
     return 1225;
    }
if (index == 662) {
     return 1225;
    }
if (index == 663) {
     return 1206;
    }
if (index == 664) {
     return 1220;
    }
if (index == 665) {
     return 1217;
    }
if (index == 666) {
     return 1228;
    }
if (index == 667) {
     return 1208;
    }
if (index == 668) {
     return 1211;
    }
if (index == 669) {
     return 1241;
    }
if (index == 670) {
     return 1220;
    }
if (index == 671) {
     return 1214;
    }
if (index == 672) {
     return 1198;
    }
if (index == 673) {
     return 1224;
    }
if (index == 674) {
     return 1223;
    }
if (index == 675) {
     return 1233;
    }
if (index == 676) {
     return 1195;
    }
if (index == 677) {
     return 1247;
    }
if (index == 678) {
     return 1143;
    }
if (index == 679) {
     return 1222;
    }
if (index == 680) {
     return 1198;
    }
if (index == 681) {
     return 1219;
    }
if (index == 682) {
     return 1206;
    }
if (index == 683) {
     return 1206;
    }
if (index == 684) {
     return 1225;
    }
if (index == 685) {
     return 1192;
    }
if (index == 686) {
     return 1222;
    }
if (index == 687) {
     return 1218;
    }
if (index == 688) {
     return 1259;
    }
if (index == 689) {
     return 1218;
    }
if (index == 690) {
     return 1207;
    }
if (index == 691) {
     return 1196;
    }
if (index == 692) {
     return 1182;
    }
if (index == 693) {
     return 1180;
    }
if (index == 694) {
     return 1254;
    }
if (index == 695) {
     return 1185;
    }
if (index == 696) {
     return 1212;
    }
if (index == 697) {
     return 1215;
    }
if (index == 698) {
     return 1223;
    }
if (index == 699) {
     return 1239;
    }
if (index == 700) {
     return 1210;
    }
if (index == 701) {
     return 1204;
    }
if (index == 702) {
     return 1215;
    }
if (index == 703) {
     return 1199;
    }
if (index == 704) {
     return 1194;
    }
if (index == 705) {
     return 1226;
    }
if (index == 706) {
     return 1226;
    }
if (index == 707) {
     return 1231;
    }
if (index == 708) {
     return 1209;
    }
if (index == 709) {
     return 1163;
    }
if (index == 710) {
     return 1244;
    }
if (index == 711) {
     return 1179;
    }
if (index == 712) {
     return 1232;
    }
if (index == 713) {
     return 1207;
    }
if (index == 714) {
     return 1212;
    }
if (index == 715) {
     return 1223;
    }
if (index == 716) {
     return 1207;
    }
if (index == 717) {
     return 1261;
    }
if (index == 718) {
     return 1216;
    }
if (index == 719) {
     return 1246;
    }
if (index == 720) {
     return 1223;
    }
if (index == 721) {
     return 1215;
    }
if (index == 722) {
     return 1210;
    }
if (index == 723) {
     return 1241;
    }
if (index == 724) {
     return 1227;
    }
if (index == 725) {
     return 1238;
    }
if (index == 726) {
     return 1229;
    }
if (index == 727) {
     return 1250;
    }
if (index == 728) {
     return 1212;
    }
if (index == 729) {
     return 1217;
    }
if (index == 730) {
     return 1223;
    }
if (index == 731) {
     return 1218;
    }
if (index == 732) {
     return 1234;
    }
if (index == 733) {
     return 1218;
    }
if (index == 734) {
     return 1636;
    }
if (index == 735) {
     return 1218;
    }
if (index == 736) {
     return 1229;
    }
if (index == 737) {
     return 1226;
    }
if (index == 738) {
     return 1229;
    }
if (index == 739) {
     return 1231;
    }
if (index == 740) {
     return 1201;
    }
if (index == 741) {
     return 1237;
    }
if (index == 742) {
     return 1223;
    }
if (index == 743) {
     return 1210;
    }
if (index == 744) {
     return 1226;
    }
if (index == 745) {
     return 1212;
    }
if (index == 746) {
     return 1218;
    }
if (index == 747) {
     return 1223;
    }
if (index == 748) {
     return 1232;
    }
if (index == 749) {
     return 1258;
    }
if (index == 750) {
     return 1199;
    }
if (index == 751) {
     return 1221;
    }
if (index == 752) {
     return 1237;
    }
if (index == 753) {
     return 1237;
    }
if (index == 754) {
     return 1218;
    }
if (index == 755) {
     return 1235;
    }
if (index == 756) {
     return 1242;
    }
if (index == 757) {
     return 1233;
    }
if (index == 758) {
     return 1188;
    }
if (index == 759) {
     return 1619;
    }
if (index == 760) {
     return 1221;
    }
if (index == 761) {
     return 1576;
    }
if (index == 762) {
     return 1224;
    }
if (index == 763) {
     return 1214;
    }
if (index == 764) {
     return 1204;
    }
if (index == 765) {
     return 1188;
    }
if (index == 766) {
     return 1235;
    }
if (index == 767) {
     return 1209;
    }
if (index == 768) {
     return 1215;
    }
if (index == 769) {
     return 1210;
    }
if (index == 770) {
     return 1179;
    }
if (index == 771) {
     return 1237;
    }
if (index == 772) {
     return 1633;
    }
if (index == 773) {
     return 1231;
    }
if (index == 774) {
     return 1201;
    }
if (index == 775) {
     return 1238;
    }
if (index == 776) {
     return 1210;
    }
if (index == 777) {
     return 1247;
    }
if (index == 778) {
     return 1199;
    }
if (index == 779) {
     return 1234;
    }
if (index == 780) {
     return 1219;
    }
if (index == 781) {
     return 1201;
    }
if (index == 782) {
     return 1218;
    }
if (index == 783) {
     return 1233;
    }
if (index == 784) {
     return 1188;
    }
if (index == 785) {
     return 1238;
    }
if (index == 786) {
     return 1232;
    }
if (index == 787) {
     return 1189;
    }
if (index == 788) {
     return 1234;
    }
if (index == 789) {
     return 1193;
    }
if (index == 790) {
     return 1206;
    }
if (index == 791) {
     return 1203;
    }
if (index == 792) {
     return 1199;
    }
if (index == 793) {
     return 1193;
    }
if (index == 794) {
     return 1238;
    }
if (index == 795) {
     return 1199;
    }
if (index == 796) {
     return 1221;
    }
if (index == 797) {
     return 1230;
    }
if (index == 798) {
     return 1218;
    }
if (index == 799) {
     return 1522;
    }
if (index == 800) {
     return 1221;
    }
if (index == 801) {
     return 1215;
    }
if (index == 802) {
     return 1207;
    }
if (index == 803) {
     return 1210;
    }
if (index == 804) {
     return 1238;
    }
if (index == 805) {
     return 1201;
    }
if (index == 806) {
     return 1253;
    }
if (index == 807) {
     return 1207;
    }
if (index == 808) {
     return 1239;
    }
if (index == 809) {
     return 1188;
    }
if (index == 810) {
     return 1211;
    }
if (index == 811) {
     return 1256;
    }
if (index == 812) {
     return 1242;
    }
if (index == 813) {
     return 1525;
    }
if (index == 814) {
     return 1184;
    }
if (index == 815) {
     return 1221;
    }
if (index == 816) {
     return 1215;
    }
if (index == 817) {
     return 1254;
    }
if (index == 818) {
     return 1519;
    }
if (index == 819) {
     return 1234;
    }
if (index == 820) {
     return 1213;
    }
if (index == 821) {
     return 1188;
    }
if (index == 822) {
     return 1220;
    }
if (index == 823) {
     return 1204;
    }
if (index == 824) {
     return 1218;
    }
if (index == 825) {
     return 1191;
    }
if (index == 826) {
     return 1202;
    }
if (index == 827) {
     return 1209;
    }
if (index == 828) {
     return 1183;
    }
if (index == 829) {
     return 1231;
    }
if (index == 830) {
     return 1179;
    }
if (index == 831) {
     return 1174;
    }
if (index == 832) {
     return 1528;
    }
if (index == 833) {
     return 1221;
    }
if (index == 834) {
     return 1189;
    }
if (index == 835) {
     return 1198;
    }
if (index == 836) {
     return 1216;
    }
if (index == 837) {
     return 1234;
    }
if (index == 838) {
     return 1216;
    }
if (index == 839) {
     return 1198;
    }
if (index == 840) {
     return 1204;
    }
if (index == 841) {
     return 1201;
    }
if (index == 842) {
     return 1189;
    }
if (index == 843) {
     return 1234;
    }
if (index == 844) {
     return 1202;
    }
if (index == 845) {
     return 1182;
    }
if (index == 846) {
     return 1214;
    }
if (index == 847) {
     return 1243;
    }
if (index == 848) {
     return 1245;
    }
if (index == 849) {
     return 1243;
    }
if (index == 850) {
     return 1224;
    }
if (index == 851) {
     return 1224;
    }
if (index == 852) {
     return 1204;
    }
if (index == 853) {
     return 1212;
    }
if (index == 854) {
     return 1165;
    }
if (index == 855) {
     return 1210;
    }
if (index == 856) {
     return 1507;
    }
if (index == 857) {
     return 1223;
    }
if (index == 858) {
     return 1226;
    }
if (index == 859) {
     return 1226;
    }
if (index == 860) {
     return 1245;
    }
if (index == 861) {
     return 1228;
    }
if (index == 862) {
     return 1214;
    }
if (index == 863) {
     return 1220;
    }
if (index == 864) {
     return 1592;
    }
if (index == 865) {
     return 1225;
    }
if (index == 866) {
     return 1182;
    }
if (index == 867) {
     return 1239;
    }
if (index == 868) {
     return 1516;
    }
if (index == 869) {
     return 1223;
    }
if (index == 870) {
     return 1188;
    }
if (index == 871) {
     return 1215;
    }
if (index == 872) {
     return 1552;
    }
if (index == 873) {
     return 1251;
    }
if (index == 874) {
     return 1209;
    }
if (index == 875) {
     return 1201;
    }
if (index == 876) {
     return 1221;
    }
if (index == 877) {
     return 1215;
    }
if (index == 878) {
     return 1215;
    }
if (index == 879) {
     return 1223;
    }
if (index == 880) {
     return 1234;
    }
if (index == 881) {
     return 1513;
    }
if (index == 882) {
     return 1527;
    }
if (index == 883) {
     return 1230;
    }
if (index == 884) {
     return 1200;
    }
if (index == 885) {
     return 1223;
    }
if (index == 886) {
     return 1227;
    }
if (index == 887) {
     return 1221;
    }
if (index == 888) {
     return 1229;
    }
if (index == 889) {
     return 1215;
    }
if (index == 890) {
     return 1230;
    }
if (index == 891) {
     return 1187;
    }
if (index == 892) {
     return 1234;
    }
if (index == 893) {
     return 1209;
    }
if (index == 894) {
     return 1229;
    }
if (index == 895) {
     return 1204;
    }
if (index == 896) {
     return 1222;
    }
if (index == 897) {
     return 1214;
    }
if (index == 898) {
     return 1230;
    }
if (index == 899) {
     return 1205;
    }
if (index == 900) {
     return 1245;
    }
if (index == 901) {
     return 1179;
    }
if (index == 902) {
     return 1218;
    }
if (index == 903) {
     return 1208;
    }
if (index == 904) {
     return 1192;
    }
if (index == 905) {
     return 1247;
    }
if (index == 906) {
     return 1200;
    }
if (index == 907) {
     return 1242;
    }
if (index == 908) {
     return 1589;
    }
if (index == 909) {
     return 1227;
    }
if (index == 910) {
     return 1219;
    }
if (index == 911) {
     return 1224;
    }
if (index == 912) {
     return 1201;
    }
if (index == 913) {
     return 1237;
    }
if (index == 914) {
     return 1225;
    }
if (index == 915) {
     return 1206;
    }
if (index == 916) {
     return 1192;
    }
if (index == 917) {
     return 1216;
    }
if (index == 918) {
     return 1228;
    }
if (index == 919) {
     return 1260;
    }
if (index == 920) {
     return 1198;
    }
if (index == 921) {
     return 1213;
    }
if (index == 922) {
     return 1240;
    }
if (index == 923) {
     return 1228;
    }
if (index == 924) {
     return 1204;
    }
if (index == 925) {
     return 1216;
    }
if (index == 926) {
     return 1217;
    }
if (index == 927) {
     return 1200;
    }
if (index == 928) {
     return 1214;
    }
if (index == 929) {
     return 1216;
    }
if (index == 930) {
     return 1191;
    }
if (index == 931) {
     return 1209;
    }
if (index == 932) {
     return 1194;
    }
if (index == 933) {
     return 1200;
    }
if (index == 934) {
     return 1229;
    }
if (index == 935) {
     return 1210;
    }
if (index == 936) {
     return 1204;
    }
if (index == 937) {
     return 1220;
    }
if (index == 938) {
     return 1221;
    }
if (index == 939) {
     return 1193;
    }
if (index == 940) {
     return 1212;
    }
if (index == 941) {
     return 1200;
    }
if (index == 942) {
     return 1198;
    }
if (index == 943) {
     return 1258;
    }
if (index == 944) {
     return 1217;
    }
if (index == 945) {
     return 1251;
    }
if (index == 946) {
     return 1512;
    }
if (index == 947) {
     return 1234;
    }
if (index == 948) {
     return 1172;
    }
if (index == 949) {
     return 1212;
    }
if (index == 950) {
     return 1181;
    }
if (index == 951) {
     return 1238;
    }
if (index == 952) {
     return 1195;
    }
if (index == 953) {
     return 1206;
    }
if (index == 954) {
     return 1217;
    }
if (index == 955) {
     return 1266;
    }
if (index == 956) {
     return 1206;
    }
if (index == 957) {
     return 1344;
    }
if (index == 958) {
     return 1341;
    }
if (index == 959) {
     return 1195;
    }
if (index == 960) {
     return 1148;
    }
if (index == 961) {
     return 1239;
    }
if (index == 962) {
     return 1234;
    }
if (index == 963) {
     return 1242;
    }
if (index == 964) {
     return 1175;
    }
if (index == 965) {
     return 1190;
    }
if (index == 966) {
     return 1315;
    }
if (index == 967) {
     return 1440;
    }
if (index > 967) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1793;
    }
if (index == 1) {
     return 1738;
    }
if (index == 2) {
     return 1705;
    }
if (index == 3) {
     return 1687;
    }
if (index == 4) {
     return 1697;
    }
if (index == 5) {
     return 1665;
    }
if (index == 6) {
     return 1634;
    }
if (index == 7) {
     return 1516;
    }
if (index == 8) {
     return 1574;
    }
if (index == 9) {
     return 1653;
    }
if (index == 10) {
     return 1661;
    }
if (index == 11) {
     return 1632;
    }
if (index == 12) {
     return 1547;
    }
if (index == 13) {
     return 1688;
    }
if (index == 14) {
     return 1557;
    }
if (index == 15) {
     return 1592;
    }
if (index == 16) {
     return 1609;
    }
if (index == 17) {
     return 1572;
    }
if (index == 18) {
     return 1588;
    }
if (index == 19) {
     return 1651;
    }
if (index == 20) {
     return 1656;
    }
if (index == 21) {
     return 1636;
    }
if (index == 22) {
     return 1663;
    }
if (index == 23) {
     return 1629;
    }
if (index == 24) {
     return 1695;
    }
if (index == 25) {
     return 1650;
    }
if (index == 26) {
     return 1697;
    }
if (index == 27) {
     return 1659;
    }
if (index == 28) {
     return 1648;
    }
if (index == 29) {
     return 1641;
    }
if (index == 30) {
     return 1691;
    }
if (index == 31) {
     return 1716;
    }
if (index == 32) {
     return 1706;
    }
if (index == 33) {
     return 1708;
    }
if (index == 34) {
     return 1724;
    }
if (index == 35) {
     return 1724;
    }
if (index == 36) {
     return 1738;
    }
if (index == 37) {
     return 1717;
    }
if (index == 38) {
     return 1726;
    }
if (index == 39) {
     return 1709;
    }
if (index == 40) {
     return 1718;
    }
if (index == 41) {
     return 1716;
    }
if (index == 42) {
     return 1685;
    }
if (index == 43) {
     return 1734;
    }
if (index == 44) {
     return 1739;
    }
if (index == 45) {
     return 1738;
    }
if (index == 46) {
     return 1703;
    }
if (index == 47) {
     return 1754;
    }
if (index == 48) {
     return 1726;
    }
if (index == 49) {
     return 1736;
    }
if (index == 50) {
     return 1701;
    }
if (index == 51) {
     return 1740;
    }
if (index == 52) {
     return 1706;
    }
if (index == 53) {
     return 1749;
    }
if (index == 54) {
     return 1746;
    }
if (index == 55) {
     return 1753;
    }
if (index == 56) {
     return 1673;
    }
if (index == 57) {
     return 1737;
    }
if (index == 58) {
     return 1756;
    }
if (index == 59) {
     return 1707;
    }
if (index == 60) {
     return 1724;
    }
if (index == 61) {
     return 1756;
    }
if (index == 62) {
     return 1757;
    }
if (index == 63) {
     return 1764;
    }
if (index == 64) {
     return 1720;
    }
if (index == 65) {
     return 1742;
    }
if (index == 66) {
     return 1727;
    }
if (index == 67) {
     return 1754;
    }
if (index == 68) {
     return 1733;
    }
if (index == 69) {
     return 1741;
    }
if (index == 70) {
     return 1715;
    }
if (index == 71) {
     return 1713;
    }
if (index == 72) {
     return 1673;
    }
if (index == 73) {
     return 1697;
    }
if (index == 74) {
     return 1697;
    }
if (index == 75) {
     return 1710;
    }
if (index == 76) {
     return 1664;
    }
if (index == 77) {
     return 1706;
    }
if (index == 78) {
     return 1663;
    }
if (index == 79) {
     return 1655;
    }
if (index == 80) {
     return 1670;
    }
if (index == 81) {
     return 1674;
    }
if (index == 82) {
     return 1723;
    }
if (index == 83) {
     return 1697;
    }
if (index == 84) {
     return 1634;
    }
if (index == 85) {
     return 1653;
    }
if (index == 86) {
     return 1684;
    }
if (index == 87) {
     return 1668;
    }
if (index == 88) {
     return 1669;
    }
if (index == 89) {
     return 1658;
    }
if (index == 90) {
     return 1658;
    }
if (index == 91) {
     return 1709;
    }
if (index == 92) {
     return 1660;
    }
if (index == 93) {
     return 1664;
    }
if (index == 94) {
     return 1658;
    }
if (index == 95) {
     return 1688;
    }
if (index == 96) {
     return 1655;
    }
if (index == 97) {
     return 1710;
    }
if (index == 98) {
     return 1733;
    }
if (index == 99) {
     return 1708;
    }
if (index == 100) {
     return 1726;
    }
if (index == 101) {
     return 1720;
    }
if (index == 102) {
     return 1716;
    }
if (index == 103) {
     return 1707;
    }
if (index == 104) {
     return 1665;
    }
if (index == 105) {
     return 1649;
    }
if (index == 106) {
     return 1665;
    }
if (index == 107) {
     return 1709;
    }
if (index == 108) {
     return 1661;
    }
if (index == 109) {
     return 1710;
    }
if (index == 110) {
     return 1653;
    }
if (index == 111) {
     return 1670;
    }
if (index == 112) {
     return 1665;
    }
if (index == 113) {
     return 1724;
    }
if (index == 114) {
     return 1654;
    }
if (index == 115) {
     return 1676;
    }
if (index == 116) {
     return 1716;
    }
if (index == 117) {
     return 1644;
    }
if (index == 118) {
     return 1728;
    }
if (index == 119) {
     return 1718;
    }
if (index == 120) {
     return 1631;
    }
if (index == 121) {
     return 1700;
    }
if (index == 122) {
     return 1644;
    }
if (index == 123) {
     return 1695;
    }
if (index == 124) {
     return 1738;
    }
if (index == 125) {
     return 1681;
    }
if (index == 126) {
     return 1697;
    }
if (index == 127) {
     return 1700;
    }
if (index == 128) {
     return 1695;
    }
if (index == 129) {
     return 1658;
    }
if (index == 130) {
     return 1632;
    }
if (index == 131) {
     return 1617;
    }
if (index == 132) {
     return 1689;
    }
if (index == 133) {
     return 1652;
    }
if (index == 134) {
     return 1667;
    }
if (index == 135) {
     return 1711;
    }
if (index == 136) {
     return 1705;
    }
if (index == 137) {
     return 1672;
    }
if (index == 138) {
     return 1667;
    }
if (index == 139) {
     return 1664;
    }
if (index == 140) {
     return 1669;
    }
if (index == 141) {
     return 1699;
    }
if (index == 142) {
     return 1668;
    }
if (index == 143) {
     return 1669;
    }
if (index == 144) {
     return 1703;
    }
if (index == 145) {
     return 1669;
    }
if (index == 146) {
     return 1663;
    }
if (index == 147) {
     return 1665;
    }
if (index == 148) {
     return 1678;
    }
if (index == 149) {
     return 1643;
    }
if (index == 150) {
     return 1653;
    }
if (index == 151) {
     return 1662;
    }
if (index == 152) {
     return 1654;
    }
if (index == 153) {
     return 1668;
    }
if (index == 154) {
     return 1660;
    }
if (index == 155) {
     return 1651;
    }
if (index == 156) {
     return 1658;
    }
if (index == 157) {
     return 1695;
    }
if (index == 158) {
     return 1669;
    }
if (index == 159) {
     return 1697;
    }
if (index == 160) {
     return 1662;
    }
if (index == 161) {
     return 1689;
    }
if (index == 162) {
     return 1665;
    }
if (index == 163) {
     return 1697;
    }
if (index == 164) {
     return 1660;
    }
if (index == 165) {
     return 1669;
    }
if (index == 166) {
     return 1651;
    }
if (index == 167) {
     return 1664;
    }
if (index == 168) {
     return 1697;
    }
if (index == 169) {
     return 1693;
    }
if (index == 170) {
     return 1702;
    }
if (index == 171) {
     return 1684;
    }
if (index == 172) {
     return 1662;
    }
if (index == 173) {
     return 1655;
    }
if (index == 174) {
     return 1660;
    }
if (index == 175) {
     return 1687;
    }
if (index == 176) {
     return 1665;
    }
if (index == 177) {
     return 1657;
    }
if (index == 178) {
     return 1661;
    }
if (index == 179) {
     return 1690;
    }
if (index == 180) {
     return 1695;
    }
if (index == 181) {
     return 1651;
    }
if (index == 182) {
     return 1669;
    }
if (index == 183) {
     return 1681;
    }
if (index == 184) {
     return 1664;
    }
if (index == 185) {
     return 1692;
    }
if (index == 186) {
     return 1676;
    }
if (index == 187) {
     return 1695;
    }
if (index == 188) {
     return 1695;
    }
if (index == 189) {
     return 1684;
    }
if (index == 190) {
     return 1663;
    }
if (index == 191) {
     return 1669;
    }
if (index == 192) {
     return 1668;
    }
if (index == 193) {
     return 1681;
    }
if (index == 194) {
     return 1697;
    }
if (index == 195) {
     return 1681;
    }
if (index == 196) {
     return 1643;
    }
if (index == 197) {
     return 1686;
    }
if (index == 198) {
     return 1666;
    }
if (index == 199) {
     return 1692;
    }
if (index == 200) {
     return 1669;
    }
if (index == 201) {
     return 1208;
    }
if (index == 202) {
     return 1677;
    }
if (index == 203) {
     return 1690;
    }
if (index == 204) {
     return 1672;
    }
if (index == 205) {
     return 1692;
    }
if (index == 206) {
     return 1664;
    }
if (index == 207) {
     return 1687;
    }
if (index == 208) {
     return 1695;
    }
if (index == 209) {
     return 1679;
    }
if (index == 210) {
     return 1663;
    }
if (index == 211) {
     return 1692;
    }
if (index == 212) {
     return 1695;
    }
if (index == 213) {
     return 1695;
    }
if (index == 214) {
     return 1657;
    }
if (index == 215) {
     return 1661;
    }
if (index == 216) {
     return 1200;
    }
if (index == 217) {
     return 1200;
    }
if (index == 218) {
     return 1674;
    }
if (index == 219) {
     return 1679;
    }
if (index == 220) {
     return 1664;
    }
if (index == 221) {
     return 1695;
    }
if (index == 222) {
     return 1655;
    }
if (index == 223) {
     return 1697;
    }
if (index == 224) {
     return 1697;
    }
if (index == 225) {
     return 1679;
    }
if (index == 226) {
     return 1695;
    }
if (index == 227) {
     return 1671;
    }
if (index == 228) {
     return 1665;
    }
if (index == 229) {
     return 1671;
    }
if (index == 230) {
     return 1697;
    }
if (index == 231) {
     return 1673;
    }
if (index == 232) {
     return 1664;
    }
if (index == 233) {
     return 1661;
    }
if (index == 234) {
     return 1669;
    }
if (index == 235) {
     return 1697;
    }
if (index == 236) {
     return 1702;
    }
if (index == 237) {
     return 1697;
    }
if (index == 238) {
     return 1687;
    }
if (index == 239) {
     return 1668;
    }
if (index == 240) {
     return 1678;
    }
if (index == 241) {
     return 1695;
    }
if (index == 242) {
     return 1689;
    }
if (index == 243) {
     return 1302;
    }
if (index == 244) {
     return 1668;
    }
if (index == 245) {
     return 1669;
    }
if (index == 246) {
     return 1677;
    }
if (index == 247) {
     return 1677;
    }
if (index == 248) {
     return 1679;
    }
if (index == 249) {
     return 1677;
    }
if (index == 250) {
     return 1677;
    }
if (index == 251) {
     return 1659;
    }
if (index == 252) {
     return 1685;
    }
if (index == 253) {
     return 1674;
    }
if (index == 254) {
     return 1683;
    }
if (index == 255) {
     return 1679;
    }
if (index == 256) {
     return 1665;
    }
if (index == 257) {
     return 1674;
    }
if (index == 258) {
     return 1677;
    }
if (index == 259) {
     return 1658;
    }
if (index == 260) {
     return 1671;
    }
if (index == 261) {
     return 1677;
    }
if (index == 262) {
     return 1674;
    }
if (index == 263) {
     return 1674;
    }
if (index == 264) {
     return 1677;
    }
if (index == 265) {
     return 1679;
    }
if (index == 266) {
     return 1655;
    }
if (index == 267) {
     return 1679;
    }
if (index == 268) {
     return 1655;
    }
if (index == 269) {
     return 1651;
    }
if (index == 270) {
     return 1656;
    }
if (index == 271) {
     return 1655;
    }
if (index == 272) {
     return 1674;
    }
if (index == 273) {
     return 1696;
    }
if (index == 274) {
     return 1679;
    }
if (index == 275) {
     return 1659;
    }
if (index == 276) {
     return 1677;
    }
if (index == 277) {
     return 1653;
    }
if (index == 278) {
     return 1677;
    }
if (index == 279) {
     return 1654;
    }
if (index == 280) {
     return 1669;
    }
if (index == 281) {
     return 1664;
    }
if (index == 282) {
     return 1679;
    }
if (index == 283) {
     return 1662;
    }
if (index == 284) {
     return 1677;
    }
if (index == 285) {
     return 1637;
    }
if (index == 286) {
     return 1674;
    }
if (index == 287) {
     return 1644;
    }
if (index == 288) {
     return 1677;
    }
if (index == 289) {
     return 1677;
    }
if (index == 290) {
     return 1677;
    }
if (index == 291) {
     return 1641;
    }
if (index == 292) {
     return 1674;
    }
if (index == 293) {
     return 1672;
    }
if (index == 294) {
     return 1653;
    }
if (index == 295) {
     return 1651;
    }
if (index == 296) {
     return 1675;
    }
if (index == 297) {
     return 1653;
    }
if (index == 298) {
     return 1658;
    }
if (index == 299) {
     return 1653;
    }
if (index == 300) {
     return 1644;
    }
if (index == 301) {
     return 1674;
    }
if (index == 302) {
     return 1677;
    }
if (index == 303) {
     return 1677;
    }
if (index == 304) {
     return 1671;
    }
if (index == 305) {
     return 1697;
    }
if (index == 306) {
     return 1669;
    }
if (index == 307) {
     return 1679;
    }
if (index == 308) {
     return 1692;
    }
if (index == 309) {
     return 1692;
    }
if (index == 310) {
     return 1305;
    }
if (index == 311) {
     return 1656;
    }
if (index == 312) {
     return 1684;
    }
if (index == 313) {
     return 1665;
    }
if (index == 314) {
     return 1687;
    }
if (index == 315) {
     return 1673;
    }
if (index == 316) {
     return 1695;
    }
if (index == 317) {
     return 1655;
    }
if (index == 318) {
     return 1692;
    }
if (index == 319) {
     return 1661;
    }
if (index == 320) {
     return 1695;
    }
if (index == 321) {
     return 1718;
    }
if (index == 322) {
     return 1689;
    }
if (index == 323) {
     return 1719;
    }
if (index == 324) {
     return 1702;
    }
if (index == 325) {
     return 1708;
    }
if (index == 326) {
     return 1267;
    }
if (index == 327) {
     return 1264;
    }
if (index == 328) {
     return 1695;
    }
if (index == 329) {
     return 1652;
    }
if (index == 330) {
     return 1689;
    }
if (index == 331) {
     return 1708;
    }
if (index == 332) {
     return 1695;
    }
if (index == 333) {
     return 1697;
    }
if (index == 334) {
     return 1697;
    }
if (index == 335) {
     return 1695;
    }
if (index == 336) {
     return 1692;
    }
if (index == 337) {
     return 1689;
    }
if (index == 338) {
     return 1695;
    }
if (index == 339) {
     return 1689;
    }
if (index == 340) {
     return 1689;
    }
if (index == 341) {
     return 1657;
    }
if (index == 342) {
     return 1658;
    }
if (index == 343) {
     return 1687;
    }
if (index == 344) {
     return 1687;
    }
if (index == 345) {
     return 1689;
    }
if (index == 346) {
     return 1668;
    }
if (index == 347) {
     return 1675;
    }
if (index == 348) {
     return 1695;
    }
if (index == 349) {
     return 1697;
    }
if (index == 350) {
     return 1697;
    }
if (index == 351) {
     return 1695;
    }
if (index == 352) {
     return 1695;
    }
if (index == 353) {
     return 1670;
    }
if (index == 354) {
     return 1695;
    }
if (index == 355) {
     return 1663;
    }
if (index == 356) {
     return 1692;
    }
if (index == 357) {
     return 1668;
    }
if (index == 358) {
     return 1697;
    }
if (index == 359) {
     return 1672;
    }
if (index == 360) {
     return 1692;
    }
if (index == 361) {
     return 1676;
    }
if (index == 362) {
     return 1655;
    }
if (index == 363) {
     return 1720;
    }
if (index == 364) {
     return 1699;
    }
if (index == 365) {
     return 1705;
    }
if (index == 366) {
     return 1655;
    }
if (index == 367) {
     return 1662;
    }
if (index == 368) {
     return 1669;
    }
if (index == 369) {
     return 1692;
    }
if (index == 370) {
     return 1695;
    }
if (index == 371) {
     return 1697;
    }
if (index == 372) {
     return 1677;
    }
if (index == 373) {
     return 1695;
    }
if (index == 374) {
     return 1682;
    }
if (index == 375) {
     return 1287;
    }
if (index == 376) {
     return 1692;
    }
if (index == 377) {
     return 1692;
    }
if (index == 378) {
     return 1695;
    }
if (index == 379) {
     return 1673;
    }
if (index == 380) {
     return 1695;
    }
if (index == 381) {
     return 1649;
    }
if (index == 382) {
     return 1681;
    }
if (index == 383) {
     return 1695;
    }
if (index == 384) {
     return 1697;
    }
if (index == 385) {
     return 1695;
    }
if (index == 386) {
     return 1689;
    }
if (index == 387) {
     return 1672;
    }
if (index == 388) {
     return 1678;
    }
if (index == 389) {
     return 1655;
    }
if (index == 390) {
     return 1652;
    }
if (index == 391) {
     return 1672;
    }
if (index == 392) {
     return 1671;
    }
if (index == 393) {
     return 1683;
    }
if (index == 394) {
     return 1678;
    }
if (index == 395) {
     return 1695;
    }
if (index == 396) {
     return 1692;
    }
if (index == 397) {
     return 1697;
    }
if (index == 398) {
     return 1680;
    }
if (index == 399) {
     return 1670;
    }
if (index == 400) {
     return 1668;
    }
if (index == 401) {
     return 1692;
    }
if (index == 402) {
     return 1697;
    }
if (index == 403) {
     return 1291;
    }
if (index == 404) {
     return 1654;
    }
if (index == 405) {
     return 1692;
    }
if (index == 406) {
     return 1697;
    }
if (index == 407) {
     return 1697;
    }
if (index == 408) {
     return 1692;
    }
if (index == 409) {
     return 1692;
    }
if (index == 410) {
     return 1692;
    }
if (index == 411) {
     return 1695;
    }
if (index == 412) {
     return 1692;
    }
if (index == 413) {
     return 1677;
    }
if (index == 414) {
     return 1692;
    }
if (index == 415) {
     return 1695;
    }
if (index == 416) {
     return 1692;
    }
if (index == 417) {
     return 1692;
    }
if (index == 418) {
     return 1692;
    }
if (index == 419) {
     return 1674;
    }
if (index == 420) {
     return 1695;
    }
if (index == 421) {
     return 1672;
    }
if (index == 422) {
     return 1681;
    }
if (index == 423) {
     return 1697;
    }
if (index == 424) {
     return 1692;
    }
if (index == 425) {
     return 1678;
    }
if (index == 426) {
     return 1697;
    }
if (index == 427) {
     return 1692;
    }
if (index == 428) {
     return 1692;
    }
if (index == 429) {
     return 1692;
    }
if (index == 430) {
     return 1692;
    }
if (index == 431) {
     return 1676;
    }
if (index == 432) {
     return 1697;
    }
if (index == 433) {
     return 1677;
    }
if (index == 434) {
     return 1695;
    }
if (index == 435) {
     return 1697;
    }
if (index == 436) {
     return 1695;
    }
if (index == 437) {
     return 1697;
    }
if (index == 438) {
     return 1695;
    }
if (index == 439) {
     return 1696;
    }
if (index == 440) {
     return 1695;
    }
if (index == 441) {
     return 1695;
    }
if (index == 442) {
     return 1695;
    }
if (index == 443) {
     return 1677;
    }
if (index == 444) {
     return 1692;
    }
if (index == 445) {
     return 1679;
    }
if (index == 446) {
     return 1692;
    }
if (index == 447) {
     return 1677;
    }
if (index == 448) {
     return 1692;
    }
if (index == 449) {
     return 1671;
    }
if (index == 450) {
     return 1695;
    }
if (index == 451) {
     return 1697;
    }
if (index == 452) {
     return 1687;
    }
if (index == 453) {
     return 1692;
    }
if (index == 454) {
     return 1669;
    }
if (index == 455) {
     return 1644;
    }
if (index == 456) {
     return 1697;
    }
if (index == 457) {
     return 1646;
    }
if (index == 458) {
     return 1697;
    }
if (index == 459) {
     return 1669;
    }
if (index == 460) {
     return 1668;
    }
if (index == 461) {
     return 1692;
    }
if (index == 462) {
     return 1692;
    }
if (index == 463) {
     return 1692;
    }
if (index == 464) {
     return 1677;
    }
if (index == 465) {
     return 1673;
    }
if (index == 466) {
     return 1692;
    }
if (index == 467) {
     return 1692;
    }
if (index == 468) {
     return 1674;
    }
if (index == 469) {
     return 1692;
    }
if (index == 470) {
     return 1667;
    }
if (index == 471) {
     return 1683;
    }
if (index == 472) {
     return 1695;
    }
if (index == 473) {
     return 1689;
    }
if (index == 474) {
     return 1665;
    }
if (index == 475) {
     return 1676;
    }
if (index == 476) {
     return 1687;
    }
if (index == 477) {
     return 1697;
    }
if (index == 478) {
     return 1695;
    }
if (index == 479) {
     return 1661;
    }
if (index == 480) {
     return 1695;
    }
if (index == 481) {
     return 1656;
    }
if (index == 482) {
     return 1697;
    }
if (index == 483) {
     return 1695;
    }
if (index == 484) {
     return 1681;
    }
if (index == 485) {
     return 1697;
    }
if (index == 486) {
     return 1695;
    }
if (index == 487) {
     return 1652;
    }
if (index == 488) {
     return 1667;
    }
if (index == 489) {
     return 1656;
    }
if (index == 490) {
     return 1692;
    }
if (index == 491) {
     return 1658;
    }
if (index == 492) {
     return 1662;
    }
if (index == 493) {
     return 1656;
    }
if (index == 494) {
     return 1672;
    }
if (index == 495) {
     return 1652;
    }
if (index == 496) {
     return 1676;
    }
if (index == 497) {
     return 1648;
    }
if (index == 498) {
     return 1667;
    }
if (index == 499) {
     return 1651;
    }
if (index == 500) {
     return 1681;
    }
if (index == 501) {
     return 1635;
    }
if (index == 502) {
     return 1682;
    }
if (index == 503) {
     return 1666;
    }
if (index == 504) {
     return 1678;
    }
if (index == 505) {
     return 1649;
    }
if (index == 506) {
     return 1706;
    }
if (index == 507) {
     return 1680;
    }
if (index == 508) {
     return 1704;
    }
if (index == 509) {
     return 1694;
    }
if (index == 510) {
     return 1698;
    }
if (index == 511) {
     return 1666;
    }
if (index == 512) {
     return 1663;
    }
if (index == 513) {
     return 1658;
    }
if (index == 514) {
     return 1682;
    }
if (index == 515) {
     return 1698;
    }
if (index == 516) {
     return 1674;
    }
if (index == 517) {
     return 1643;
    }
if (index == 518) {
     return 1680;
    }
if (index == 519) {
     return 1693;
    }
if (index == 520) {
     return 1696;
    }
if (index == 521) {
     return 1651;
    }
if (index == 522) {
     return 1683;
    }
if (index == 523) {
     return 1299;
    }
if (index == 524) {
     return 1684;
    }
if (index == 525) {
     return 1632;
    }
if (index == 526) {
     return 1676;
    }
if (index == 527) {
     return 1664;
    }
if (index == 528) {
     return 1665;
    }
if (index == 529) {
     return 1680;
    }
if (index == 530) {
     return 1677;
    }
if (index == 531) {
     return 1670;
    }
if (index == 532) {
     return 1668;
    }
if (index == 533) {
     return 1610;
    }
if (index == 534) {
     return 1685;
    }
if (index == 535) {
     return 1681;
    }
if (index == 536) {
     return 1657;
    }
if (index == 537) {
     return 1664;
    }
if (index == 538) {
     return 1685;
    }
if (index == 539) {
     return 1664;
    }
if (index == 540) {
     return 1699;
    }
if (index == 541) {
     return 1688;
    }
if (index == 542) {
     return 1706;
    }
if (index == 543) {
     return 1678;
    }
if (index == 544) {
     return 1696;
    }
if (index == 545) {
     return 1664;
    }
if (index == 546) {
     return 1666;
    }
if (index == 547) {
     return 1637;
    }
if (index == 548) {
     return 1660;
    }
if (index == 549) {
     return 1669;
    }
if (index == 550) {
     return 1663;
    }
if (index == 551) {
     return 1661;
    }
if (index == 552) {
     return 1679;
    }
if (index == 553) {
     return 1301;
    }
if (index == 554) {
     return 1655;
    }
if (index == 555) {
     return 1678;
    }
if (index == 556) {
     return 1668;
    }
if (index == 557) {
     return 1672;
    }
if (index == 558) {
     return 1666;
    }
if (index == 559) {
     return 1672;
    }
if (index == 560) {
     return 1696;
    }
if (index == 561) {
     return 1667;
    }
if (index == 562) {
     return 1704;
    }
if (index == 563) {
     return 1656;
    }
if (index == 564) {
     return 1693;
    }
if (index == 565) {
     return 1696;
    }
if (index == 566) {
     return 1708;
    }
if (index == 567) {
     return 1653;
    }
if (index == 568) {
     return 1674;
    }
if (index == 569) {
     return 1686;
    }
if (index == 570) {
     return 1264;
    }
if (index == 571) {
     return 1681;
    }
if (index == 572) {
     return 1663;
    }
if (index == 573) {
     return 1675;
    }
if (index == 574) {
     return 1666;
    }
if (index == 575) {
     return 1688;
    }
if (index == 576) {
     return 1663;
    }
if (index == 577) {
     return 1648;
    }
if (index == 578) {
     return 1655;
    }
if (index == 579) {
     return 1656;
    }
if (index == 580) {
     return 1663;
    }
if (index == 581) {
     return 1267;
    }
if (index == 582) {
     return 1660;
    }
if (index == 583) {
     return 1657;
    }
if (index == 584) {
     return 1657;
    }
if (index == 585) {
     return 1686;
    }
if (index == 586) {
     return 1704;
    }
if (index == 587) {
     return 1667;
    }
if (index == 588) {
     return 1671;
    }
if (index == 589) {
     return 1686;
    }
if (index == 590) {
     return 1652;
    }
if (index == 591) {
     return 1667;
    }
if (index == 592) {
     return 1646;
    }
if (index == 593) {
     return 1643;
    }
if (index == 594) {
     return 1649;
    }
if (index == 595) {
     return 1675;
    }
if (index == 596) {
     return 1671;
    }
if (index == 597) {
     return 1653;
    }
if (index == 598) {
     return 1655;
    }
if (index == 599) {
     return 1636;
    }
if (index == 600) {
     return 1663;
    }
if (index == 601) {
     return 1667;
    }
if (index == 602) {
     return 1657;
    }
if (index == 603) {
     return 1660;
    }
if (index == 604) {
     return 1674;
    }
if (index == 605) {
     return 1648;
    }
if (index == 606) {
     return 1275;
    }
if (index == 607) {
     return 1641;
    }
if (index == 608) {
     return 1638;
    }
if (index == 609) {
     return 1627;
    }
if (index == 610) {
     return 1668;
    }
if (index == 611) {
     return 1667;
    }
if (index == 612) {
     return 1663;
    }
if (index == 613) {
     return 1647;
    }
if (index == 614) {
     return 1661;
    }
if (index == 615) {
     return 1642;
    }
if (index == 616) {
     return 1638;
    }
if (index == 617) {
     return 1642;
    }
if (index == 618) {
     return 1671;
    }
if (index == 619) {
     return 1647;
    }
if (index == 620) {
     return 1641;
    }
if (index == 621) {
     return 1333;
    }
if (index == 622) {
     return 1639;
    }
if (index == 623) {
     return 1623;
    }
if (index == 624) {
     return 1633;
    }
if (index == 625) {
     return 1656;
    }
if (index == 626) {
     return 1651;
    }
if (index == 627) {
     return 1640;
    }
if (index == 628) {
     return 1663;
    }
if (index == 629) {
     return 1683;
    }
if (index == 630) {
     return 1666;
    }
if (index == 631) {
     return 1670;
    }
if (index == 632) {
     return 1644;
    }
if (index == 633) {
     return 1651;
    }
if (index == 634) {
     return 1668;
    }
if (index == 635) {
     return 1659;
    }
if (index == 636) {
     return 1636;
    }
if (index == 637) {
     return 1659;
    }
if (index == 638) {
     return 1657;
    }
if (index == 639) {
     return 1664;
    }
if (index == 640) {
     return 1662;
    }
if (index == 641) {
     return 1653;
    }
if (index == 642) {
     return 1666;
    }
if (index == 643) {
     return 1656;
    }
if (index == 644) {
     return 1652;
    }
if (index == 645) {
     return 1672;
    }
if (index == 646) {
     return 1638;
    }
if (index == 647) {
     return 1669;
    }
if (index == 648) {
     return 1671;
    }
if (index == 649) {
     return 1686;
    }
if (index == 650) {
     return 1627;
    }
if (index == 651) {
     return 1669;
    }
if (index == 652) {
     return 1661;
    }
if (index == 653) {
     return 1648;
    }
if (index == 654) {
     return 1663;
    }
if (index == 655) {
     return 1656;
    }
if (index == 656) {
     return 1676;
    }
if (index == 657) {
     return 1670;
    }
if (index == 658) {
     return 1677;
    }
if (index == 659) {
     return 1665;
    }
if (index == 660) {
     return 1633;
    }
if (index == 661) {
     return 1656;
    }
if (index == 662) {
     return 1667;
    }
if (index == 663) {
     return 1629;
    }
if (index == 664) {
     return 1616;
    }
if (index == 665) {
     return 1651;
    }
if (index == 666) {
     return 1644;
    }
if (index == 667) {
     return 1642;
    }
if (index == 668) {
     return 1652;
    }
if (index == 669) {
     return 1645;
    }
if (index == 670) {
     return 1624;
    }
if (index == 671) {
     return 1662;
    }
if (index == 672) {
     return 1660;
    }
if (index == 673) {
     return 1637;
    }
if (index == 674) {
     return 1655;
    }
if (index == 675) {
     return 1688;
    }
if (index == 676) {
     return 1646;
    }
if (index == 677) {
     return 1658;
    }
if (index == 678) {
     return 1677;
    }
if (index == 679) {
     return 1662;
    }
if (index == 680) {
     return 1635;
    }
if (index == 681) {
     return 1667;
    }
if (index == 682) {
     return 1666;
    }
if (index == 683) {
     return 1659;
    }
if (index == 684) {
     return 1644;
    }
if (index == 685) {
     return 1664;
    }
if (index == 686) {
     return 1660;
    }
if (index == 687) {
     return 1664;
    }
if (index == 688) {
     return 1674;
    }
if (index == 689) {
     return 1664;
    }
if (index == 690) {
     return 1657;
    }
if (index == 691) {
     return 1672;
    }
if (index == 692) {
     return 1635;
    }
if (index == 693) {
     return 1640;
    }
if (index == 694) {
     return 1666;
    }
if (index == 695) {
     return 1648;
    }
if (index == 696) {
     return 1652;
    }
if (index == 697) {
     return 1653;
    }
if (index == 698) {
     return 1677;
    }
if (index == 699) {
     return 1667;
    }
if (index == 700) {
     return 1674;
    }
if (index == 701) {
     return 1648;
    }
if (index == 702) {
     return 1641;
    }
if (index == 703) {
     return 1610;
    }
if (index == 704) {
     return 1664;
    }
if (index == 705) {
     return 1648;
    }
if (index == 706) {
     return 1666;
    }
if (index == 707) {
     return 1688;
    }
if (index == 708) {
     return 1634;
    }
if (index == 709) {
     return 1618;
    }
if (index == 710) {
     return 1676;
    }
if (index == 711) {
     return 1610;
    }
if (index == 712) {
     return 1671;
    }
if (index == 713) {
     return 1675;
    }
if (index == 714) {
     return 1638;
    }
if (index == 715) {
     return 1648;
    }
if (index == 716) {
     return 1671;
    }
if (index == 717) {
     return 1678;
    }
if (index == 718) {
     return 1628;
    }
if (index == 719) {
     return 1663;
    }
if (index == 720) {
     return 1666;
    }
if (index == 721) {
     return 1661;
    }
if (index == 722) {
     return 1652;
    }
if (index == 723) {
     return 1651;
    }
if (index == 724) {
     return 1659;
    }
if (index == 725) {
     return 1661;
    }
if (index == 726) {
     return 1652;
    }
if (index == 727) {
     return 1649;
    }
if (index == 728) {
     return 1685;
    }
if (index == 729) {
     return 1662;
    }
if (index == 730) {
     return 1679;
    }
if (index == 731) {
     return 1651;
    }
if (index == 732) {
     return 1677;
    }
if (index == 733) {
     return 1667;
    }
if (index == 734) {
     return 1297;
    }
if (index == 735) {
     return 1678;
    }
if (index == 736) {
     return 1666;
    }
if (index == 737) {
     return 1664;
    }
if (index == 738) {
     return 1660;
    }
if (index == 739) {
     return 1683;
    }
if (index == 740) {
     return 1668;
    }
if (index == 741) {
     return 1669;
    }
if (index == 742) {
     return 1652;
    }
if (index == 743) {
     return 1660;
    }
if (index == 744) {
     return 1657;
    }
if (index == 745) {
     return 1661;
    }
if (index == 746) {
     return 1660;
    }
if (index == 747) {
     return 1670;
    }
if (index == 748) {
     return 1633;
    }
if (index == 749) {
     return 1657;
    }
if (index == 750) {
     return 1646;
    }
if (index == 751) {
     return 1632;
    }
if (index == 752) {
     return 1665;
    }
if (index == 753) {
     return 1643;
    }
if (index == 754) {
     return 1682;
    }
if (index == 755) {
     return 1657;
    }
if (index == 756) {
     return 1647;
    }
if (index == 757) {
     return 1640;
    }
if (index == 758) {
     return 1660;
    }
if (index == 759) {
     return 1265;
    }
if (index == 760) {
     return 1655;
    }
if (index == 761) {
     return 1301;
    }
if (index == 762) {
     return 1665;
    }
if (index == 763) {
     return 1630;
    }
if (index == 764) {
     return 1657;
    }
if (index == 765) {
     return 1649;
    }
if (index == 766) {
     return 1657;
    }
if (index == 767) {
     return 1664;
    }
if (index == 768) {
     return 1663;
    }
if (index == 769) {
     return 1642;
    }
if (index == 770) {
     return 1622;
    }
if (index == 771) {
     return 1657;
    }
if (index == 772) {
     return 1251;
    }
if (index == 773) {
     return 1626;
    }
if (index == 774) {
     return 1668;
    }
if (index == 775) {
     return 1656;
    }
if (index == 776) {
     return 1671;
    }
if (index == 777) {
     return 1642;
    }
if (index == 778) {
     return 1663;
    }
if (index == 779) {
     return 1666;
    }
if (index == 780) {
     return 1666;
    }
if (index == 781) {
     return 1650;
    }
if (index == 782) {
     return 1671;
    }
if (index == 783) {
     return 1650;
    }
if (index == 784) {
     return 1677;
    }
if (index == 785) {
     return 1640;
    }
if (index == 786) {
     return 1671;
    }
if (index == 787) {
     return 1638;
    }
if (index == 788) {
     return 1649;
    }
if (index == 789) {
     return 1659;
    }
if (index == 790) {
     return 1644;
    }
if (index == 791) {
     return 1637;
    }
if (index == 792) {
     return 1655;
    }
if (index == 793) {
     return 1643;
    }
if (index == 794) {
     return 1676;
    }
if (index == 795) {
     return 1634;
    }
if (index == 796) {
     return 1671;
    }
if (index == 797) {
     return 1655;
    }
if (index == 798) {
     return 1649;
    }
if (index == 799) {
     return 1286;
    }
if (index == 800) {
     return 1676;
    }
if (index == 801) {
     return 1641;
    }
if (index == 802) {
     return 1693;
    }
if (index == 803) {
     return 1612;
    }
if (index == 804) {
     return 1656;
    }
if (index == 805) {
     return 1582;
    }
if (index == 806) {
     return 1663;
    }
if (index == 807) {
     return 1651;
    }
if (index == 808) {
     return 1642;
    }
if (index == 809) {
     return 1634;
    }
if (index == 810) {
     return 1630;
    }
if (index == 811) {
     return 1659;
    }
if (index == 812) {
     return 1661;
    }
if (index == 813) {
     return 1298;
    }
if (index == 814) {
     return 1650;
    }
if (index == 815) {
     return 1638;
    }
if (index == 816) {
     return 1664;
    }
if (index == 817) {
     return 1652;
    }
if (index == 818) {
     return 1296;
    }
if (index == 819) {
     return 1643;
    }
if (index == 820) {
     return 1647;
    }
if (index == 821) {
     return 1632;
    }
if (index == 822) {
     return 1624;
    }
if (index == 823) {
     return 1624;
    }
if (index == 824) {
     return 1629;
    }
if (index == 825) {
     return 1646;
    }
if (index == 826) {
     return 1646;
    }
if (index == 827) {
     return 1648;
    }
if (index == 828) {
     return 1644;
    }
if (index == 829) {
     return 1645;
    }
if (index == 830) {
     return 1651;
    }
if (index == 831) {
     return 1656;
    }
if (index == 832) {
     return 1301;
    }
if (index == 833) {
     return 1634;
    }
if (index == 834) {
     return 1619;
    }
if (index == 835) {
     return 1637;
    }
if (index == 836) {
     return 1639;
    }
if (index == 837) {
     return 1664;
    }
if (index == 838) {
     return 1657;
    }
if (index == 839) {
     return 1651;
    }
if (index == 840) {
     return 1634;
    }
if (index == 841) {
     return 1652;
    }
if (index == 842) {
     return 1659;
    }
if (index == 843) {
     return 1645;
    }
if (index == 844) {
     return 1641;
    }
if (index == 845) {
     return 1664;
    }
if (index == 846) {
     return 1616;
    }
if (index == 847) {
     return 1657;
    }
if (index == 848) {
     return 1648;
    }
if (index == 849) {
     return 1652;
    }
if (index == 850) {
     return 1628;
    }
if (index == 851) {
     return 1658;
    }
if (index == 852) {
     return 1650;
    }
if (index == 853) {
     return 1664;
    }
if (index == 854) {
     return 1649;
    }
if (index == 855) {
     return 1656;
    }
if (index == 856) {
     return 1299;
    }
if (index == 857) {
     return 1675;
    }
if (index == 858) {
     return 1632;
    }
if (index == 859) {
     return 1672;
    }
if (index == 860) {
     return 1654;
    }
if (index == 861) {
     return 1680;
    }
if (index == 862) {
     return 1634;
    }
if (index == 863) {
     return 1672;
    }
if (index == 864) {
     return 1253;
    }
if (index == 865) {
     return 1652;
    }
if (index == 866) {
     return 1648;
    }
if (index == 867) {
     return 1678;
    }
if (index == 868) {
     return 1279;
    }
if (index == 869) {
     return 1642;
    }
if (index == 870) {
     return 1668;
    }
if (index == 871) {
     return 1643;
    }
if (index == 872) {
     return 1273;
    }
if (index == 873) {
     return 1660;
    }
if (index == 874) {
     return 1651;
    }
if (index == 875) {
     return 1651;
    }
if (index == 876) {
     return 1660;
    }
if (index == 877) {
     return 1672;
    }
if (index == 878) {
     return 1685;
    }
if (index == 879) {
     return 1667;
    }
if (index == 880) {
     return 1659;
    }
if (index == 881) {
     return 1309;
    }
if (index == 882) {
     return 1294;
    }
if (index == 883) {
     return 1660;
    }
if (index == 884) {
     return 1670;
    }
if (index == 885) {
     return 1664;
    }
if (index == 886) {
     return 1661;
    }
if (index == 887) {
     return 1658;
    }
if (index == 888) {
     return 1666;
    }
if (index == 889) {
     return 1620;
    }
if (index == 890) {
     return 1654;
    }
if (index == 891) {
     return 1654;
    }
if (index == 892) {
     return 1661;
    }
if (index == 893) {
     return 1662;
    }
if (index == 894) {
     return 1671;
    }
if (index == 895) {
     return 1637;
    }
if (index == 896) {
     return 1671;
    }
if (index == 897) {
     return 1634;
    }
if (index == 898) {
     return 1672;
    }
if (index == 899) {
     return 1629;
    }
if (index == 900) {
     return 1672;
    }
if (index == 901) {
     return 1606;
    }
if (index == 902) {
     return 1680;
    }
if (index == 903) {
     return 1640;
    }
if (index == 904) {
     return 1676;
    }
if (index == 905) {
     return 1652;
    }
if (index == 906) {
     return 1689;
    }
if (index == 907) {
     return 1646;
    }
if (index == 908) {
     return 1307;
    }
if (index == 909) {
     return 1648;
    }
if (index == 910) {
     return 1675;
    }
if (index == 911) {
     return 1628;
    }
if (index == 912) {
     return 1661;
    }
if (index == 913) {
     return 1632;
    }
if (index == 914) {
     return 1669;
    }
if (index == 915) {
     return 1639;
    }
if (index == 916) {
     return 1644;
    }
if (index == 917) {
     return 1662;
    }
if (index == 918) {
     return 1659;
    }
if (index == 919) {
     return 1655;
    }
if (index == 920) {
     return 1665;
    }
if (index == 921) {
     return 1661;
    }
if (index == 922) {
     return 1657;
    }
if (index == 923) {
     return 1655;
    }
if (index == 924) {
     return 1661;
    }
if (index == 925) {
     return 1657;
    }
if (index == 926) {
     return 1654;
    }
if (index == 927) {
     return 1622;
    }
if (index == 928) {
     return 1687;
    }
if (index == 929) {
     return 1644;
    }
if (index == 930) {
     return 1682;
    }
if (index == 931) {
     return 1654;
    }
if (index == 932) {
     return 1668;
    }
if (index == 933) {
     return 1627;
    }
if (index == 934) {
     return 1667;
    }
if (index == 935) {
     return 1628;
    }
if (index == 936) {
     return 1675;
    }
if (index == 937) {
     return 1655;
    }
if (index == 938) {
     return 1682;
    }
if (index == 939) {
     return 1645;
    }
if (index == 940) {
     return 1668;
    }
if (index == 941) {
     return 1655;
    }
if (index == 942) {
     return 1673;
    }
if (index == 943) {
     return 1688;
    }
if (index == 944) {
     return 1667;
    }
if (index == 945) {
     return 1729;
    }
if (index == 946) {
     return 1315;
    }
if (index == 947) {
     return 1634;
    }
if (index == 948) {
     return 1642;
    }
if (index == 949) {
     return 1636;
    }
if (index == 950) {
     return 1654;
    }
if (index == 951) {
     return 1654;
    }
if (index == 952) {
     return 1679;
    }
if (index == 953) {
     return 1650;
    }
if (index == 954) {
     return 1662;
    }
if (index == 955) {
     return 1758;
    }
if (index == 956) {
     return 1699;
    }
if (index == 957) {
     return 1740;
    }
if (index == 958) {
     return 1747;
    }
if (index == 959) {
     return 1664;
    }
if (index == 960) {
     return 1672;
    }
if (index == 961) {
     return 1722;
    }
if (index == 962) {
     return 1704;
    }
if (index == 963) {
     return 1718;
    }
if (index == 964) {
     return 1657;
    }
if (index == 965) {
     return 1695;
    }
if (index == 966) {
     return 1697;
    }
if (index == 967) {
     return 1881;
    }
if (index > 967) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:233_' + imgStr + '/digitalImage';
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
br.numLeafs = 968;

// Book title and the URL used for the book title link
br.bookTitle= "Twentieth century impressions of British Malaya: its history, people, commerce, industries, and resources";
br.bookAuthor= "Wright, Arnold";
br.bookPub= "London, Durban, Colombo, Perth (W. A.), Singapore, Hongkong, and Shanghai: Lloyd's Greater Britain Publishing Company, limited, 1908";
br.bookKeyword= "Straits Settlements<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Federated Malay States";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:233';

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
