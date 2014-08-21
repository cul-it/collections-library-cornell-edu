//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1008;
    }
if (index == 1) {
     return 934;
    }
if (index == 2) {
     return 943;
    }
if (index == 3) {
     return 927;
    }
if (index == 4) {
     return 837;
    }
if (index == 5) {
     return 970;
    }
if (index == 6) {
     return 881;
    }
if (index == 7) {
     return 952;
    }
if (index == 8) {
     return 925;
    }
if (index == 9) {
     return 954;
    }
if (index == 10) {
     return 930;
    }
if (index == 11) {
     return 942;
    }
if (index == 12) {
     return 941;
    }
if (index == 13) {
     return 951;
    }
if (index == 14) {
     return 952;
    }
if (index == 15) {
     return 907;
    }
if (index == 16) {
     return 907;
    }
if (index == 17) {
     return 1304;
    }
if (index == 18) {
     return 916;
    }
if (index == 19) {
     return 879;
    }
if (index == 20) {
     return 916;
    }
if (index == 21) {
     return 865;
    }
if (index == 22) {
     return 916;
    }
if (index == 23) {
     return 881;
    }
if (index == 24) {
     return 916;
    }
if (index == 25) {
     return 897;
    }
if (index == 26) {
     return 916;
    }
if (index == 27) {
     return 881;
    }
if (index == 28) {
     return 883;
    }
if (index == 29) {
     return 881;
    }
if (index == 30) {
     return 856;
    }
if (index == 31) {
     return 881;
    }
if (index == 32) {
     return 862;
    }
if (index == 33) {
     return 881;
    }
if (index == 34) {
     return 916;
    }
if (index == 35) {
     return 807;
    }
if (index == 36) {
     return 791;
    }
if (index == 37) {
     return 913;
    }
if (index == 38) {
     return 894;
    }
if (index == 39) {
     return 810;
    }
if (index == 40) {
     return 823;
    }
if (index == 41) {
     return 844;
    }
if (index == 42) {
     return 862;
    }
if (index == 43) {
     return 857;
    }
if (index == 44) {
     return 861;
    }
if (index == 45) {
     return 899;
    }
if (index == 46) {
     return 865;
    }
if (index == 47) {
     return 842;
    }
if (index == 48) {
     return 855;
    }
if (index == 49) {
     return 830;
    }
if (index == 50) {
     return 802;
    }
if (index == 51) {
     return 828;
    }
if (index == 52) {
     return 872;
    }
if (index == 53) {
     return 825;
    }
if (index == 54) {
     return 841;
    }
if (index == 55) {
     return 832;
    }
if (index == 56) {
     return 857;
    }
if (index == 57) {
     return 837;
    }
if (index == 58) {
     return 899;
    }
if (index == 59) {
     return 769;
    }
if (index == 60) {
     return 927;
    }
if (index == 61) {
     return 841;
    }
if (index == 62) {
     return 899;
    }
if (index == 63) {
     return 832;
    }
if (index == 64) {
     return 887;
    }
if (index == 65) {
     return 1245;
    }
if (index == 66) {
     return 868;
    }
if (index == 67) {
     return 826;
    }
if (index == 68) {
     return 866;
    }
if (index == 69) {
     return 852;
    }
if (index == 70) {
     return 892;
    }
if (index == 71) {
     return 841;
    }
if (index == 72) {
     return 844;
    }
if (index == 73) {
     return 817;
    }
if (index == 74) {
     return 908;
    }
if (index == 75) {
     return 824;
    }
if (index == 76) {
     return 851;
    }
if (index == 77) {
     return 862;
    }
if (index == 78) {
     return 885;
    }
if (index == 79) {
     return 814;
    }
if (index == 80) {
     return 854;
    }
if (index == 81) {
     return 823;
    }
if (index == 82) {
     return 873;
    }
if (index == 83) {
     return 828;
    }
if (index == 84) {
     return 844;
    }
if (index == 85) {
     return 823;
    }
if (index == 86) {
     return 872;
    }
if (index == 87) {
     return 802;
    }
if (index == 88) {
     return 1189;
    }
if (index == 89) {
     return 869;
    }
if (index == 90) {
     return 861;
    }
if (index == 91) {
     return 882;
    }
if (index == 92) {
     return 884;
    }
if (index == 93) {
     return 840;
    }
if (index == 94) {
     return 849;
    }
if (index == 95) {
     return 865;
    }
if (index == 96) {
     return 850;
    }
if (index == 97) {
     return 900;
    }
if (index == 98) {
     return 866;
    }
if (index == 99) {
     return 1183;
    }
if (index == 100) {
     return 846;
    }
if (index == 101) {
     return 848;
    }
if (index == 102) {
     return 840;
    }
if (index == 103) {
     return 856;
    }
if (index == 104) {
     return 868;
    }
if (index == 105) {
     return 846;
    }
if (index == 106) {
     return 840;
    }
if (index == 107) {
     return 859;
    }
if (index == 108) {
     return 839;
    }
if (index == 109) {
     return 846;
    }
if (index == 110) {
     return 891;
    }
if (index == 111) {
     return 844;
    }
if (index == 112) {
     return 820;
    }
if (index == 113) {
     return 857;
    }
if (index == 114) {
     return 1220;
    }
if (index == 115) {
     return 859;
    }
if (index == 116) {
     return 908;
    }
if (index == 117) {
     return 909;
    }
if (index == 118) {
     return 895;
    }
if (index == 119) {
     return 833;
    }
if (index == 120) {
     return 851;
    }
if (index == 121) {
     return 869;
    }
if (index == 122) {
     return 853;
    }
if (index == 123) {
     return 867;
    }
if (index == 124) {
     return 921;
    }
if (index == 125) {
     return 876;
    }
if (index == 126) {
     return 870;
    }
if (index == 127) {
     return 831;
    }
if (index == 128) {
     return 912;
    }
if (index == 129) {
     return 846;
    }
if (index == 130) {
     return 1194;
    }
if (index == 131) {
     return 848;
    }
if (index == 132) {
     return 870;
    }
if (index == 133) {
     return 859;
    }
if (index == 134) {
     return 884;
    }
if (index == 135) {
     return 872;
    }
if (index == 136) {
     return 906;
    }
if (index == 137) {
     return 846;
    }
if (index == 138) {
     return 901;
    }
if (index == 139) {
     return 837;
    }
if (index == 140) {
     return 868;
    }
if (index == 141) {
     return 818;
    }
if (index == 142) {
     return 879;
    }
if (index == 143) {
     return 825;
    }
if (index == 144) {
     return 859;
    }
if (index == 145) {
     return 814;
    }
if (index == 146) {
     return 888;
    }
if (index == 147) {
     return 846;
    }
if (index == 148) {
     return 935;
    }
if (index == 149) {
     return 825;
    }
if (index == 150) {
     return 904;
    }
if (index == 151) {
     return 1202;
    }
if (index == 152) {
     return 908;
    }
if (index == 153) {
     return 818;
    }
if (index == 154) {
     return 899;
    }
if (index == 155) {
     return 844;
    }
if (index == 156) {
     return 881;
    }
if (index == 157) {
     return 837;
    }
if (index == 158) {
     return 887;
    }
if (index == 159) {
     return 834;
    }
if (index == 160) {
     return 881;
    }
if (index == 161) {
     return 840;
    }
if (index == 162) {
     return 866;
    }
if (index == 163) {
     return 891;
    }
if (index == 164) {
     return 1222;
    }
if (index == 165) {
     return 872;
    }
if (index == 166) {
     return 871;
    }
if (index == 167) {
     return 850;
    }
if (index == 168) {
     return 877;
    }
if (index == 169) {
     return 1231;
    }
if (index == 170) {
     return 912;
    }
if (index == 171) {
     return 1189;
    }
if (index == 172) {
     return 864;
    }
if (index == 173) {
     return 834;
    }
if (index == 174) {
     return 915;
    }
if (index == 175) {
     return 1201;
    }
if (index == 176) {
     return 871;
    }
if (index == 177) {
     return 891;
    }
if (index == 178) {
     return 921;
    }
if (index == 179) {
     return 878;
    }
if (index == 180) {
     return 1197;
    }
if (index == 181) {
     return 832;
    }
if (index == 182) {
     return 904;
    }
if (index == 183) {
     return 1216;
    }
if (index == 184) {
     return 909;
    }
if (index == 185) {
     return 903;
    }
if (index == 186) {
     return 881;
    }
if (index == 187) {
     return 879;
    }
if (index == 188) {
     return 874;
    }
if (index == 189) {
     return 896;
    }
if (index == 190) {
     return 854;
    }
if (index == 191) {
     return 1196;
    }
if (index == 192) {
     return 888;
    }
if (index == 193) {
     return 898;
    }
if (index == 194) {
     return 892;
    }
if (index == 195) {
     return 898;
    }
if (index == 196) {
     return 872;
    }
if (index == 197) {
     return 903;
    }
if (index == 198) {
     return 883;
    }
if (index == 199) {
     return 898;
    }
if (index == 200) {
     return 872;
    }
if (index == 201) {
     return 898;
    }
if (index == 202) {
     return 895;
    }
if (index == 203) {
     return 898;
    }
if (index == 204) {
     return 898;
    }
if (index == 205) {
     return 898;
    }
if (index == 206) {
     return 872;
    }
if (index == 207) {
     return 898;
    }
if (index == 208) {
     return 895;
    }
if (index == 209) {
     return 898;
    }
if (index == 210) {
     return 872;
    }
if (index == 211) {
     return 898;
    }
if (index == 212) {
     return 914;
    }
if (index == 213) {
     return 898;
    }
if (index == 214) {
     return 916;
    }
if (index == 215) {
     return 830;
    }
if (index == 216) {
     return 872;
    }
if (index == 217) {
     return 804;
    }
if (index == 218) {
     return 872;
    }
if (index == 219) {
     return 915;
    }
if (index == 220) {
     return 815;
    }
if (index == 221) {
     return 845;
    }
if (index == 222) {
     return 892;
    }
if (index == 223) {
     return 814;
    }
if (index == 224) {
     return 815;
    }
if (index == 225) {
     return 812;
    }
if (index == 226) {
     return 872;
    }
if (index == 227) {
     return 839;
    }
if (index == 228) {
     return 800;
    }
if (index == 229) {
     return 794;
    }
if (index == 230) {
     return 800;
    }
if (index == 231) {
     return 814;
    }
if (index == 232) {
     return 927;
    }
if (index == 233) {
     return 899;
    }
if (index == 234) {
     return 782;
    }
if (index == 235) {
     return 829;
    }
if (index == 236) {
     return 1161;
    }
if (index == 237) {
     return 796;
    }
if (index == 238) {
     return 840;
    }
if (index == 239) {
     return 845;
    }
if (index == 240) {
     return 836;
    }
if (index == 241) {
     return 845;
    }
if (index == 242) {
     return 847;
    }
if (index == 243) {
     return 845;
    }
if (index == 244) {
     return 797;
    }
if (index == 245) {
     return 856;
    }
if (index == 246) {
     return 799;
    }
if (index == 247) {
     return 855;
    }
if (index == 248) {
     return 862;
    }
if (index == 249) {
     return 845;
    }
if (index == 250) {
     return 836;
    }
if (index == 251) {
     return 845;
    }
if (index == 252) {
     return 801;
    }
if (index == 253) {
     return 845;
    }
if (index == 254) {
     return 803;
    }
if (index == 255) {
     return 845;
    }
if (index == 256) {
     return 780;
    }
if (index == 257) {
     return 851;
    }
if (index == 258) {
     return 1137;
    }
if (index == 259) {
     return 857;
    }
if (index == 260) {
     return 836;
    }
if (index == 261) {
     return 848;
    }
if (index == 262) {
     return 1161;
    }
if (index == 263) {
     return 851;
    }
if (index == 264) {
     return 836;
    }
if (index == 265) {
     return 845;
    }
if (index == 266) {
     return 836;
    }
if (index == 267) {
     return 861;
    }
if (index == 268) {
     return 836;
    }
if (index == 269) {
     return 845;
    }
if (index == 270) {
     return 836;
    }
if (index == 271) {
     return 845;
    }
if (index == 272) {
     return 836;
    }
if (index == 273) {
     return 850;
    }
if (index == 274) {
     return 844;
    }
if (index == 275) {
     return 845;
    }
if (index == 276) {
     return 836;
    }
if (index == 277) {
     return 850;
    }
if (index == 278) {
     return 836;
    }
if (index == 279) {
     return 845;
    }
if (index == 280) {
     return 836;
    }
if (index == 281) {
     return 845;
    }
if (index == 282) {
     return 836;
    }
if (index == 283) {
     return 845;
    }
if (index == 284) {
     return 836;
    }
if (index == 285) {
     return 845;
    }
if (index == 286) {
     return 836;
    }
if (index == 287) {
     return 845;
    }
if (index == 288) {
     return 849;
    }
if (index == 289) {
     return 845;
    }
if (index == 290) {
     return 836;
    }
if (index == 291) {
     return 845;
    }
if (index == 292) {
     return 850;
    }
if (index == 293) {
     return 845;
    }
if (index == 294) {
     return 836;
    }
if (index == 295) {
     return 845;
    }
if (index == 296) {
     return 836;
    }
if (index == 297) {
     return 845;
    }
if (index == 298) {
     return 836;
    }
if (index == 299) {
     return 845;
    }
if (index == 300) {
     return 836;
    }
if (index == 301) {
     return 870;
    }
if (index == 302) {
     return 836;
    }
if (index == 303) {
     return 864;
    }
if (index == 304) {
     return 836;
    }
if (index == 305) {
     return 855;
    }
if (index == 306) {
     return 846;
    }
if (index == 307) {
     return 845;
    }
if (index == 308) {
     return 856;
    }
if (index == 309) {
     return 845;
    }
if (index == 310) {
     return 836;
    }
if (index == 311) {
     return 828;
    }
if (index == 312) {
     return 836;
    }
if (index == 313) {
     return 828;
    }
if (index == 314) {
     return 860;
    }
if (index == 315) {
     return 828;
    }
if (index == 316) {
     return 859;
    }
if (index == 317) {
     return 828;
    }
if (index == 318) {
     return 836;
    }
if (index == 319) {
     return 1200;
    }
if (index == 320) {
     return 836;
    }
if (index == 321) {
     return 828;
    }
if (index == 322) {
     return 1218;
    }
if (index == 323) {
     return 828;
    }
if (index == 324) {
     return 852;
    }
if (index == 325) {
     return 828;
    }
if (index == 326) {
     return 850;
    }
if (index == 327) {
     return 828;
    }
if (index == 328) {
     return 836;
    }
if (index == 329) {
     return 828;
    }
if (index == 330) {
     return 853;
    }
if (index == 331) {
     return 828;
    }
if (index == 332) {
     return 849;
    }
if (index == 333) {
     return 857;
    }
if (index == 334) {
     return 1218;
    }
if (index == 335) {
     return 828;
    }
if (index == 336) {
     return 836;
    }
if (index == 337) {
     return 839;
    }
if (index == 338) {
     return 1218;
    }
if (index == 339) {
     return 844;
    }
if (index == 340) {
     return 863;
    }
if (index == 341) {
     return 828;
    }
if (index == 342) {
     return 836;
    }
if (index == 343) {
     return 828;
    }
if (index == 344) {
     return 869;
    }
if (index == 345) {
     return 828;
    }
if (index == 346) {
     return 861;
    }
if (index == 347) {
     return 828;
    }
if (index == 348) {
     return 836;
    }
if (index == 349) {
     return 828;
    }
if (index == 350) {
     return 853;
    }
if (index == 351) {
     return 850;
    }
if (index == 352) {
     return 852;
    }
if (index == 353) {
     return 1200;
    }
if (index == 354) {
     return 836;
    }
if (index == 355) {
     return 849;
    }
if (index == 356) {
     return 1218;
    }
if (index == 357) {
     return 828;
    }
if (index == 358) {
     return 1218;
    }
if (index == 359) {
     return 828;
    }
if (index == 360) {
     return 836;
    }
if (index == 361) {
     return 841;
    }
if (index == 362) {
     return 836;
    }
if (index == 363) {
     return 828;
    }
if (index == 364) {
     return 850;
    }
if (index == 365) {
     return 1200;
    }
if (index == 366) {
     return 836;
    }
if (index == 367) {
     return 828;
    }
if (index == 368) {
     return 842;
    }
if (index == 369) {
     return 1141;
    }
if (index == 370) {
     return 836;
    }
if (index == 371) {
     return 842;
    }
if (index == 372) {
     return 836;
    }
if (index == 373) {
     return 828;
    }
if (index == 374) {
     return 836;
    }
if (index == 375) {
     return 828;
    }
if (index == 376) {
     return 836;
    }
if (index == 377) {
     return 841;
    }
if (index == 378) {
     return 836;
    }
if (index == 379) {
     return 828;
    }
if (index == 380) {
     return 853;
    }
if (index == 381) {
     return 1200;
    }
if (index == 382) {
     return 858;
    }
if (index == 383) {
     return 828;
    }
if (index == 384) {
     return 836;
    }
if (index == 385) {
     return 874;
    }
if (index == 386) {
     return 836;
    }
if (index == 387) {
     return 839;
    }
if (index == 388) {
     return 840;
    }
if (index == 389) {
     return 1200;
    }
if (index == 390) {
     return 836;
    }
if (index == 391) {
     return 835;
    }
if (index == 392) {
     return 836;
    }
if (index == 393) {
     return 827;
    }
if (index == 394) {
     return 836;
    }
if (index == 395) {
     return 827;
    }
if (index == 396) {
     return 836;
    }
if (index == 397) {
     return 849;
    }
if (index == 398) {
     return 1218;
    }
if (index == 399) {
     return 827;
    }
if (index == 400) {
     return 836;
    }
if (index == 401) {
     return 827;
    }
if (index == 402) {
     return 850;
    }
if (index == 403) {
     return 1200;
    }
if (index == 404) {
     return 836;
    }
if (index == 405) {
     return 1200;
    }
if (index == 406) {
     return 836;
    }
if (index == 407) {
     return 844;
    }
if (index == 408) {
     return 836;
    }
if (index == 409) {
     return 827;
    }
if (index == 410) {
     return 836;
    }
if (index == 411) {
     return 827;
    }
if (index == 412) {
     return 836;
    }
if (index == 413) {
     return 827;
    }
if (index == 414) {
     return 836;
    }
if (index == 415) {
     return 832;
    }
if (index == 416) {
     return 1218;
    }
if (index == 417) {
     return 827;
    }
if (index == 418) {
     return 836;
    }
if (index == 419) {
     return 885;
    }
if (index == 420) {
     return 890;
    }
if (index == 421) {
     return 913;
    }
if (index == 422) {
     return 799;
    }
if (index == 423) {
     return 861;
    }
if (index == 424) {
     return 842;
    }
if (index == 425) {
     return 861;
    }
if (index == 426) {
     return 800;
    }
if (index == 427) {
     return 854;
    }
if (index == 428) {
     return 849;
    }
if (index == 429) {
     return 878;
    }
if (index == 430) {
     return 791;
    }
if (index == 431) {
     return 906;
    }
if (index == 432) {
     return 880;
    }
if (index == 433) {
     return 902;
    }
if (index == 434) {
     return 880;
    }
if (index == 435) {
     return 909;
    }
if (index == 436) {
     return 1268;
    }
if (index == 437) {
     return 895;
    }
if (index == 438) {
     return 847;
    }
if (index == 439) {
     return 845;
    }
if (index == 440) {
     return 872;
    }
if (index == 441) {
     return 866;
    }
if (index == 442) {
     return 853;
    }
if (index == 443) {
     return 892;
    }
if (index == 444) {
     return 883;
    }
if (index == 445) {
     return 866;
    }
if (index == 446) {
     return 883;
    }
if (index == 447) {
     return 876;
    }
if (index == 448) {
     return 914;
    }
if (index == 449) {
     return 869;
    }
if (index == 450) {
     return 899;
    }
if (index == 451) {
     return 888;
    }
if (index == 452) {
     return 863;
    }
if (index == 453) {
     return 869;
    }
if (index == 454) {
     return 890;
    }
if (index == 455) {
     return 902;
    }
if (index == 456) {
     return 897;
    }
if (index == 457) {
     return 895;
    }
if (index == 458) {
     return 1247;
    }
if (index == 459) {
     return 885;
    }
if (index == 460) {
     return 890;
    }
if (index == 461) {
     return 915;
    }
if (index == 462) {
     return 871;
    }
if (index == 463) {
     return 868;
    }
if (index == 464) {
     return 868;
    }
if (index == 465) {
     return 1255;
    }
if (index == 466) {
     return 875;
    }
if (index == 467) {
     return 1294;
    }
if (index == 468) {
     return 864;
    }
if (index == 469) {
     return 1278;
    }
if (index == 470) {
     return 885;
    }
if (index == 471) {
     return 902;
    }
if (index == 472) {
     return 888;
    }
if (index == 473) {
     return 925;
    }
if (index == 474) {
     return 895;
    }
if (index == 475) {
     return 869;
    }
if (index == 476) {
     return 902;
    }
if (index == 477) {
     return 875;
    }
if (index == 478) {
     return 926;
    }
if (index == 479) {
     return 895;
    }
if (index == 480) {
     return 892;
    }
if (index == 481) {
     return 1273;
    }
if (index == 482) {
     return 868;
    }
if (index == 483) {
     return 911;
    }
if (index == 484) {
     return 909;
    }
if (index == 485) {
     return 897;
    }
if (index == 486) {
     return 871;
    }
if (index == 487) {
     return 869;
    }
if (index == 488) {
     return 841;
    }
if (index == 489) {
     return 904;
    }
if (index == 490) {
     return 865;
    }
if (index == 491) {
     return 892;
    }
if (index == 492) {
     return 906;
    }
if (index == 493) {
     return 956;
    }
if (index > 493) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1376;
    }
if (index == 1) {
     return 1314;
    }
if (index == 2) {
     return 1314;
    }
if (index == 3) {
     return 1309;
    }
if (index == 4) {
     return 1314;
    }
if (index == 5) {
     return 1331;
    }
if (index == 6) {
     return 1287;
    }
if (index == 7) {
     return 1322;
    }
if (index == 8) {
     return 1314;
    }
if (index == 9) {
     return 1354;
    }
if (index == 10) {
     return 1330;
    }
if (index == 11) {
     return 1346;
    }
if (index == 12) {
     return 1337;
    }
if (index == 13) {
     return 1352;
    }
if (index == 14) {
     return 1345;
    }
if (index == 15) {
     return 1352;
    }
if (index == 16) {
     return 1314;
    }
if (index == 17) {
     return 952;
    }
if (index == 18) {
     return 1287;
    }
if (index == 19) {
     return 1312;
    }
if (index == 20) {
     return 1287;
    }
if (index == 21) {
     return 1231;
    }
if (index == 22) {
     return 1287;
    }
if (index == 23) {
     return 1304;
    }
if (index == 24) {
     return 1287;
    }
if (index == 25) {
     return 1315;
    }
if (index == 26) {
     return 1287;
    }
if (index == 27) {
     return 1304;
    }
if (index == 28) {
     return 1239;
    }
if (index == 29) {
     return 1304;
    }
if (index == 30) {
     return 1226;
    }
if (index == 31) {
     return 1304;
    }
if (index == 32) {
     return 1206;
    }
if (index == 33) {
     return 1304;
    }
if (index == 34) {
     return 1287;
    }
if (index == 35) {
     return 1206;
    }
if (index == 36) {
     return 1207;
    }
if (index == 37) {
     return 1325;
    }
if (index == 38) {
     return 1269;
    }
if (index == 39) {
     return 1189;
    }
if (index == 40) {
     return 1205;
    }
if (index == 41) {
     return 1225;
    }
if (index == 42) {
     return 1216;
    }
if (index == 43) {
     return 1227;
    }
if (index == 44) {
     return 1224;
    }
if (index == 45) {
     return 1316;
    }
if (index == 46) {
     return 1228;
    }
if (index == 47) {
     return 1231;
    }
if (index == 48) {
     return 1196;
    }
if (index == 49) {
     return 1236;
    }
if (index == 50) {
     return 1200;
    }
if (index == 51) {
     return 1247;
    }
if (index == 52) {
     return 1241;
    }
if (index == 53) {
     return 1247;
    }
if (index == 54) {
     return 1241;
    }
if (index == 55) {
     return 1251;
    }
if (index == 56) {
     return 1240;
    }
if (index == 57) {
     return 1239;
    }
if (index == 58) {
     return 1275;
    }
if (index == 59) {
     return 1239;
    }
if (index == 60) {
     return 1291;
    }
if (index == 61) {
     return 1262;
    }
if (index == 62) {
     return 1247;
    }
if (index == 63) {
     return 1262;
    }
if (index == 64) {
     return 1256;
    }
if (index == 65) {
     return 815;
    }
if (index == 66) {
     return 1262;
    }
if (index == 67) {
     return 1207;
    }
if (index == 68) {
     return 1250;
    }
if (index == 69) {
     return 1245;
    }
if (index == 70) {
     return 1231;
    }
if (index == 71) {
     return 1217;
    }
if (index == 72) {
     return 1227;
    }
if (index == 73) {
     return 1202;
    }
if (index == 74) {
     return 1253;
    }
if (index == 75) {
     return 1198;
    }
if (index == 76) {
     return 1209;
    }
if (index == 77) {
     return 1232;
    }
if (index == 78) {
     return 1225;
    }
if (index == 79) {
     return 1262;
    }
if (index == 80) {
     return 1230;
    }
if (index == 81) {
     return 1183;
    }
if (index == 82) {
     return 1232;
    }
if (index == 83) {
     return 1192;
    }
if (index == 84) {
     return 1207;
    }
if (index == 85) {
     return 1215;
    }
if (index == 86) {
     return 1243;
    }
if (index == 87) {
     return 1182;
    }
if (index == 88) {
     return 847;
    }
if (index == 89) {
     return 1223;
    }
if (index == 90) {
     return 1245;
    }
if (index == 91) {
     return 1204;
    }
if (index == 92) {
     return 1233;
    }
if (index == 93) {
     return 1219;
    }
if (index == 94) {
     return 1240;
    }
if (index == 95) {
     return 1219;
    }
if (index == 96) {
     return 1209;
    }
if (index == 97) {
     return 1239;
    }
if (index == 98) {
     return 1244;
    }
if (index == 99) {
     return 848;
    }
if (index == 100) {
     return 1255;
    }
if (index == 101) {
     return 1228;
    }
if (index == 102) {
     return 1222;
    }
if (index == 103) {
     return 1210;
    }
if (index == 104) {
     return 1244;
    }
if (index == 105) {
     return 1221;
    }
if (index == 106) {
     return 1189;
    }
if (index == 107) {
     return 1237;
    }
if (index == 108) {
     return 1215;
    }
if (index == 109) {
     return 1204;
    }
if (index == 110) {
     return 1250;
    }
if (index == 111) {
     return 1215;
    }
if (index == 112) {
     return 1218;
    }
if (index == 113) {
     return 1206;
    }
if (index == 114) {
     return 892;
    }
if (index == 115) {
     return 1219;
    }
if (index == 116) {
     return 1300;
    }
if (index == 117) {
     return 1281;
    }
if (index == 118) {
     return 1223;
    }
if (index == 119) {
     return 1224;
    }
if (index == 120) {
     return 1218;
    }
if (index == 121) {
     return 1271;
    }
if (index == 122) {
     return 1211;
    }
if (index == 123) {
     return 1243;
    }
if (index == 124) {
     return 1233;
    }
if (index == 125) {
     return 1259;
    }
if (index == 126) {
     return 1205;
    }
if (index == 127) {
     return 1228;
    }
if (index == 128) {
     return 1306;
    }
if (index == 129) {
     return 1253;
    }
if (index == 130) {
     return 875;
    }
if (index == 131) {
     return 1228;
    }
if (index == 132) {
     return 1240;
    }
if (index == 133) {
     return 1241;
    }
if (index == 134) {
     return 1222;
    }
if (index == 135) {
     return 1249;
    }
if (index == 136) {
     return 1231;
    }
if (index == 137) {
     return 1236;
    }
if (index == 138) {
     return 1283;
    }
if (index == 139) {
     return 1221;
    }
if (index == 140) {
     return 1214;
    }
if (index == 141) {
     return 1196;
    }
if (index == 142) {
     return 1251;
    }
if (index == 143) {
     return 1206;
    }
if (index == 144) {
     return 1209;
    }
if (index == 145) {
     return 1215;
    }
if (index == 146) {
     return 1264;
    }
if (index == 147) {
     return 1176;
    }
if (index == 148) {
     return 1284;
    }
if (index == 149) {
     return 1202;
    }
if (index == 150) {
     return 1289;
    }
if (index == 151) {
     return 840;
    }
if (index == 152) {
     return 1296;
    }
if (index == 153) {
     return 1196;
    }
if (index == 154) {
     return 1285;
    }
if (index == 155) {
     return 1228;
    }
if (index == 156) {
     return 1207;
    }
if (index == 157) {
     return 1234;
    }
if (index == 158) {
     return 1210;
    }
if (index == 159) {
     return 1258;
    }
if (index == 160) {
     return 1214;
    }
if (index == 161) {
     return 1228;
    }
if (index == 162) {
     return 1214;
    }
if (index == 163) {
     return 1246;
    }
if (index == 164) {
     return 886;
    }
if (index == 165) {
     return 1256;
    }
if (index == 166) {
     return 1246;
    }
if (index == 167) {
     return 1210;
    }
if (index == 168) {
     return 1241;
    }
if (index == 169) {
     return 862;
    }
if (index == 170) {
     return 1230;
    }
if (index == 171) {
     return 817;
    }
if (index == 172) {
     return 1212;
    }
if (index == 173) {
     return 1194;
    }
if (index == 174) {
     return 1242;
    }
if (index == 175) {
     return 795;
    }
if (index == 176) {
     return 1233;
    }
if (index == 177) {
     return 1252;
    }
if (index == 178) {
     return 1261;
    }
if (index == 179) {
     return 1237;
    }
if (index == 180) {
     return 913;
    }
if (index == 181) {
     return 1180;
    }
if (index == 182) {
     return 1303;
    }
if (index == 183) {
     return 835;
    }
if (index == 184) {
     return 1219;
    }
if (index == 185) {
     return 1253;
    }
if (index == 186) {
     return 1256;
    }
if (index == 187) {
     return 1245;
    }
if (index == 188) {
     return 1252;
    }
if (index == 189) {
     return 1256;
    }
if (index == 190) {
     return 1212;
    }
if (index == 191) {
     return 827;
    }
if (index == 192) {
     return 1223;
    }
if (index == 193) {
     return 1252;
    }
if (index == 194) {
     return 1266;
    }
if (index == 195) {
     return 1252;
    }
if (index == 196) {
     return 1252;
    }
if (index == 197) {
     return 1255;
    }
if (index == 198) {
     return 1260;
    }
if (index == 199) {
     return 1252;
    }
if (index == 200) {
     return 1252;
    }
if (index == 201) {
     return 1252;
    }
if (index == 202) {
     return 1268;
    }
if (index == 203) {
     return 1252;
    }
if (index == 204) {
     return 1269;
    }
if (index == 205) {
     return 1252;
    }
if (index == 206) {
     return 1226;
    }
if (index == 207) {
     return 1252;
    }
if (index == 208) {
     return 1242;
    }
if (index == 209) {
     return 1261;
    }
if (index == 210) {
     return 1226;
    }
if (index == 211) {
     return 1261;
    }
if (index == 212) {
     return 1255;
    }
if (index == 213) {
     return 1261;
    }
if (index == 214) {
     return 1257;
    }
if (index == 215) {
     return 1189;
    }
if (index == 216) {
     return 1226;
    }
if (index == 217) {
     return 1221;
    }
if (index == 218) {
     return 1244;
    }
if (index == 219) {
     return 1280;
    }
if (index == 220) {
     return 1141;
    }
if (index == 221) {
     return 1193;
    }
if (index == 222) {
     return 1258;
    }
if (index == 223) {
     return 1176;
    }
if (index == 224) {
     return 1164;
    }
if (index == 225) {
     return 1183;
    }
if (index == 226) {
     return 1244;
    }
if (index == 227) {
     return 1197;
    }
if (index == 228) {
     return 1169;
    }
if (index == 229) {
     return 1199;
    }
if (index == 230) {
     return 1169;
    }
if (index == 231) {
     return 1183;
    }
if (index == 232) {
     return 1282;
    }
if (index == 233) {
     return 1261;
    }
if (index == 234) {
     return 1145;
    }
if (index == 235) {
     return 1211;
    }
if (index == 236) {
     return 744;
    }
if (index == 237) {
     return 1183;
    }
if (index == 238) {
     return 1237;
    }
if (index == 239) {
     return 1200;
    }
if (index == 240) {
     return 1218;
    }
if (index == 241) {
     return 1200;
    }
if (index == 242) {
     return 1225;
    }
if (index == 243) {
     return 1200;
    }
if (index == 244) {
     return 1170;
    }
if (index == 245) {
     return 1208;
    }
if (index == 246) {
     return 1143;
    }
if (index == 247) {
     return 1207;
    }
if (index == 248) {
     return 1235;
    }
if (index == 249) {
     return 1200;
    }
if (index == 250) {
     return 1218;
    }
if (index == 251) {
     return 1200;
    }
if (index == 252) {
     return 1160;
    }
if (index == 253) {
     return 1200;
    }
if (index == 254) {
     return 1170;
    }
if (index == 255) {
     return 1200;
    }
if (index == 256) {
     return 1147;
    }
if (index == 257) {
     return 1204;
    }
if (index == 258) {
     return 782;
    }
if (index == 259) {
     return 1208;
    }
if (index == 260) {
     return 1218;
    }
if (index == 261) {
     return 1202;
    }
if (index == 262) {
     return 777;
    }
if (index == 263) {
     return 1204;
    }
if (index == 264) {
     return 1218;
    }
if (index == 265) {
     return 1200;
    }
if (index == 266) {
     return 1218;
    }
if (index == 267) {
     return 1211;
    }
if (index == 268) {
     return 1218;
    }
if (index == 269) {
     return 1200;
    }
if (index == 270) {
     return 1218;
    }
if (index == 271) {
     return 1200;
    }
if (index == 272) {
     return 1218;
    }
if (index == 273) {
     return 1203;
    }
if (index == 274) {
     return 1223;
    }
if (index == 275) {
     return 1200;
    }
if (index == 276) {
     return 1218;
    }
if (index == 277) {
     return 1203;
    }
if (index == 278) {
     return 1218;
    }
if (index == 279) {
     return 1200;
    }
if (index == 280) {
     return 1218;
    }
if (index == 281) {
     return 1200;
    }
if (index == 282) {
     return 1218;
    }
if (index == 283) {
     return 1200;
    }
if (index == 284) {
     return 1218;
    }
if (index == 285) {
     return 1200;
    }
if (index == 286) {
     return 1218;
    }
if (index == 287) {
     return 1200;
    }
if (index == 288) {
     return 1227;
    }
if (index == 289) {
     return 1200;
    }
if (index == 290) {
     return 1218;
    }
if (index == 291) {
     return 1200;
    }
if (index == 292) {
     return 1228;
    }
if (index == 293) {
     return 1200;
    }
if (index == 294) {
     return 1218;
    }
if (index == 295) {
     return 1200;
    }
if (index == 296) {
     return 1218;
    }
if (index == 297) {
     return 1200;
    }
if (index == 298) {
     return 1218;
    }
if (index == 299) {
     return 1200;
    }
if (index == 300) {
     return 1218;
    }
if (index == 301) {
     return 1218;
    }
if (index == 302) {
     return 1218;
    }
if (index == 303) {
     return 1213;
    }
if (index == 304) {
     return 1218;
    }
if (index == 305) {
     return 1207;
    }
if (index == 306) {
     return 1225;
    }
if (index == 307) {
     return 1200;
    }
if (index == 308) {
     return 1231;
    }
if (index == 309) {
     return 1200;
    }
if (index == 310) {
     return 1218;
    }
if (index == 311) {
     return 1200;
    }
if (index == 312) {
     return 1218;
    }
if (index == 313) {
     return 1200;
    }
if (index == 314) {
     return 1234;
    }
if (index == 315) {
     return 1200;
    }
if (index == 316) {
     return 1233;
    }
if (index == 317) {
     return 1200;
    }
if (index == 318) {
     return 1218;
    }
if (index == 319) {
     return 828;
    }
if (index == 320) {
     return 1218;
    }
if (index == 321) {
     return 1200;
    }
if (index == 322) {
     return 836;
    }
if (index == 323) {
     return 1200;
    }
if (index == 324) {
     return 1229;
    }
if (index == 325) {
     return 1200;
    }
if (index == 326) {
     return 1228;
    }
if (index == 327) {
     return 1200;
    }
if (index == 328) {
     return 1218;
    }
if (index == 329) {
     return 1200;
    }
if (index == 330) {
     return 1230;
    }
if (index == 331) {
     return 1200;
    }
if (index == 332) {
     return 1227;
    }
if (index == 333) {
     return 1219;
    }
if (index == 334) {
     return 836;
    }
if (index == 335) {
     return 1200;
    }
if (index == 336) {
     return 1218;
    }
if (index == 337) {
     return 1207;
    }
if (index == 338) {
     return 836;
    }
if (index == 339) {
     return 1211;
    }
if (index == 340) {
     return 1236;
    }
if (index == 341) {
     return 1200;
    }
if (index == 342) {
     return 1218;
    }
if (index == 343) {
     return 1200;
    }
if (index == 344) {
     return 1240;
    }
if (index == 345) {
     return 1200;
    }
if (index == 346) {
     return 1235;
    }
if (index == 347) {
     return 1200;
    }
if (index == 348) {
     return 1218;
    }
if (index == 349) {
     return 1200;
    }
if (index == 350) {
     return 1230;
    }
if (index == 351) {
     return 1215;
    }
if (index == 352) {
     return 1229;
    }
if (index == 353) {
     return 828;
    }
if (index == 354) {
     return 1218;
    }
if (index == 355) {
     return 1214;
    }
if (index == 356) {
     return 836;
    }
if (index == 357) {
     return 1200;
    }
if (index == 358) {
     return 836;
    }
if (index == 359) {
     return 1200;
    }
if (index == 360) {
     return 1218;
    }
if (index == 361) {
     return 1209;
    }
if (index == 362) {
     return 1218;
    }
if (index == 363) {
     return 1200;
    }
if (index == 364) {
     return 1228;
    }
if (index == 365) {
     return 828;
    }
if (index == 366) {
     return 1218;
    }
if (index == 367) {
     return 1200;
    }
if (index == 368) {
     return 1222;
    }
if (index == 369) {
     return 756;
    }
if (index == 370) {
     return 1218;
    }
if (index == 371) {
     return 1210;
    }
if (index == 372) {
     return 1218;
    }
if (index == 373) {
     return 1200;
    }
if (index == 374) {
     return 1218;
    }
if (index == 375) {
     return 1200;
    }
if (index == 376) {
     return 1218;
    }
if (index == 377) {
     return 1209;
    }
if (index == 378) {
     return 1218;
    }
if (index == 379) {
     return 1200;
    }
if (index == 380) {
     return 1230;
    }
if (index == 381) {
     return 828;
    }
if (index == 382) {
     return 1233;
    }
if (index == 383) {
     return 1200;
    }
if (index == 384) {
     return 1218;
    }
if (index == 385) {
     return 1231;
    }
if (index == 386) {
     return 1218;
    }
if (index == 387) {
     return 1207;
    }
if (index == 388) {
     return 1220;
    }
if (index == 389) {
     return 827;
    }
if (index == 390) {
     return 1218;
    }
if (index == 391) {
     return 1205;
    }
if (index == 392) {
     return 1218;
    }
if (index == 393) {
     return 1200;
    }
if (index == 394) {
     return 1218;
    }
if (index == 395) {
     return 1200;
    }
if (index == 396) {
     return 1218;
    }
if (index == 397) {
     return 1215;
    }
if (index == 398) {
     return 836;
    }
if (index == 399) {
     return 1200;
    }
if (index == 400) {
     return 1218;
    }
if (index == 401) {
     return 1200;
    }
if (index == 402) {
     return 1228;
    }
if (index == 403) {
     return 827;
    }
if (index == 404) {
     return 1218;
    }
if (index == 405) {
     return 827;
    }
if (index == 406) {
     return 1218;
    }
if (index == 407) {
     return 1212;
    }
if (index == 408) {
     return 1218;
    }
if (index == 409) {
     return 1200;
    }
if (index == 410) {
     return 1218;
    }
if (index == 411) {
     return 1200;
    }
if (index == 412) {
     return 1218;
    }
if (index == 413) {
     return 1200;
    }
if (index == 414) {
     return 1218;
    }
if (index == 415) {
     return 1203;
    }
if (index == 416) {
     return 836;
    }
if (index == 417) {
     return 1200;
    }
if (index == 418) {
     return 1218;
    }
if (index == 419) {
     return 1295;
    }
if (index == 420) {
     return 1299;
    }
if (index == 421) {
     return 1278;
    }
if (index == 422) {
     return 1279;
    }
if (index == 423) {
     return 1273;
    }
if (index == 424) {
     return 1304;
    }
if (index == 425) {
     return 1295;
    }
if (index == 426) {
     return 1247;
    }
if (index == 427) {
     return 1262;
    }
if (index == 428) {
     return 1282;
    }
if (index == 429) {
     return 1280;
    }
if (index == 430) {
     return 1267;
    }
if (index == 431) {
     return 1283;
    }
if (index == 432) {
     return 1285;
    }
if (index == 433) {
     return 1266;
    }
if (index == 434) {
     return 1280;
    }
if (index == 435) {
     return 1303;
    }
if (index == 436) {
     return 873;
    }
if (index == 437) {
     return 1289;
    }
if (index == 438) {
     return 1287;
    }
if (index == 439) {
     return 1273;
    }
if (index == 440) {
     return 1285;
    }
if (index == 441) {
     return 1273;
    }
if (index == 442) {
     return 1271;
    }
if (index == 443) {
     return 1287;
    }
if (index == 444) {
     return 1275;
    }
if (index == 445) {
     return 1279;
    }
if (index == 446) {
     return 1287;
    }
if (index == 447) {
     return 1290;
    }
if (index == 448) {
     return 1295;
    }
if (index == 449) {
     return 1287;
    }
if (index == 450) {
     return 1280;
    }
if (index == 451) {
     return 1276;
    }
if (index == 452) {
     return 1268;
    }
if (index == 453) {
     return 1292;
    }
if (index == 454) {
     return 1287;
    }
if (index == 455) {
     return 1283;
    }
if (index == 456) {
     return 1259;
    }
if (index == 457) {
     return 1283;
    }
if (index == 458) {
     return 930;
    }
if (index == 459) {
     return 1297;
    }
if (index == 460) {
     return 1263;
    }
if (index == 461) {
     return 1304;
    }
if (index == 462) {
     return 1285;
    }
if (index == 463) {
     return 1266;
    }
if (index == 464) {
     return 1282;
    }
if (index == 465) {
     return 919;
    }
if (index == 466) {
     return 1256;
    }
if (index == 467) {
     return 916;
    }
if (index == 468) {
     return 1261;
    }
if (index == 469) {
     return 900;
    }
if (index == 470) {
     return 1275;
    }
if (index == 471) {
     return 1285;
    }
if (index == 472) {
     return 1273;
    }
if (index == 473) {
     return 1278;
    }
if (index == 474) {
     return 1283;
    }
if (index == 475) {
     return 1284;
    }
if (index == 476) {
     return 1280;
    }
if (index == 477) {
     return 1305;
    }
if (index == 478) {
     return 1278;
    }
if (index == 479) {
     return 1281;
    }
if (index == 480) {
     return 1282;
    }
if (index == 481) {
     return 926;
    }
if (index == 482) {
     return 1292;
    }
if (index == 483) {
     return 1299;
    }
if (index == 484) {
     return 1290;
    }
if (index == 485) {
     return 1314;
    }
if (index == 486) {
     return 1283;
    }
if (index == 487) {
     return 1285;
    }
if (index == 488) {
     return 1301;
    }
if (index == 489) {
     return 1301;
    }
if (index == 490) {
     return 1325;
    }
if (index == 491) {
     return 1315;
    }
if (index == 492) {
     return 1342;
    }
if (index == 493) {
     return 1349;
    }
if (index > 493) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:018_' + imgStr + '/digitalImage';
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
br.numLeafs = 494;

// Book title and the URL used for the book title link
br.bookTitle= "The boy travellers in the Far East, part third : adventures of two youths in a journey to Ceylon and India with descriptions of Borneo, the Philippines Islands and Burmah";
br.bookAuthor= "Knox, Thomas Wallace";
br.bookPub= "New York: Harper and Brothers, 1882";
br.bookKeyword= "Sri Lanka--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;East Indies--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Southeast Asia--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:018';

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
