//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 839;
    }
if (index == 1) {
     return 780;
    }
if (index == 2) {
     return 860;
    }
if (index == 3) {
     return 830;
    }
if (index == 4) {
     return 887;
    }
if (index == 5) {
     return 783;
    }
if (index == 6) {
     return 781;
    }
if (index == 7) {
     return 774;
    }
if (index == 8) {
     return 775;
    }
if (index == 9) {
     return 817;
    }
if (index == 10) {
     return 818;
    }
if (index == 11) {
     return 808;
    }
if (index == 12) {
     return 791;
    }
if (index == 13) {
     return 759;
    }
if (index == 14) {
     return 783;
    }
if (index == 15) {
     return 763;
    }
if (index == 16) {
     return 795;
    }
if (index == 17) {
     return 786;
    }
if (index == 18) {
     return 773;
    }
if (index == 19) {
     return 808;
    }
if (index == 20) {
     return 785;
    }
if (index == 21) {
     return 786;
    }
if (index == 22) {
     return 773;
    }
if (index == 23) {
     return 795;
    }
if (index == 24) {
     return 801;
    }
if (index == 25) {
     return 779;
    }
if (index == 26) {
     return 783;
    }
if (index == 27) {
     return 793;
    }
if (index == 28) {
     return 729;
    }
if (index == 29) {
     return 781;
    }
if (index == 30) {
     return 788;
    }
if (index == 31) {
     return 789;
    }
if (index == 32) {
     return 774;
    }
if (index == 33) {
     return 776;
    }
if (index == 34) {
     return 739;
    }
if (index == 35) {
     return 794;
    }
if (index == 36) {
     return 770;
    }
if (index == 37) {
     return 793;
    }
if (index == 38) {
     return 788;
    }
if (index == 39) {
     return 759;
    }
if (index == 40) {
     return 779;
    }
if (index == 41) {
     return 747;
    }
if (index == 42) {
     return 789;
    }
if (index == 43) {
     return 770;
    }
if (index == 44) {
     return 806;
    }
if (index == 45) {
     return 791;
    }
if (index == 46) {
     return 774;
    }
if (index == 47) {
     return 800;
    }
if (index == 48) {
     return 798;
    }
if (index == 49) {
     return 796;
    }
if (index == 50) {
     return 775;
    }
if (index == 51) {
     return 808;
    }
if (index == 52) {
     return 813;
    }
if (index == 53) {
     return 809;
    }
if (index == 54) {
     return 770;
    }
if (index == 55) {
     return 786;
    }
if (index == 56) {
     return 776;
    }
if (index == 57) {
     return 760;
    }
if (index == 58) {
     return 748;
    }
if (index == 59) {
     return 786;
    }
if (index == 60) {
     return 777;
    }
if (index == 61) {
     return 786;
    }
if (index == 62) {
     return 789;
    }
if (index == 63) {
     return 794;
    }
if (index == 64) {
     return 784;
    }
if (index == 65) {
     return 770;
    }
if (index == 66) {
     return 797;
    }
if (index == 67) {
     return 801;
    }
if (index == 68) {
     return 773;
    }
if (index == 69) {
     return 797;
    }
if (index == 70) {
     return 798;
    }
if (index == 71) {
     return 801;
    }
if (index == 72) {
     return 784;
    }
if (index == 73) {
     return 808;
    }
if (index == 74) {
     return 771;
    }
if (index == 75) {
     return 769;
    }
if (index == 76) {
     return 785;
    }
if (index == 77) {
     return 769;
    }
if (index == 78) {
     return 777;
    }
if (index == 79) {
     return 799;
    }
if (index == 80) {
     return 761;
    }
if (index == 81) {
     return 816;
    }
if (index == 82) {
     return 789;
    }
if (index == 83) {
     return 785;
    }
if (index == 84) {
     return 771;
    }
if (index == 85) {
     return 809;
    }
if (index == 86) {
     return 791;
    }
if (index == 87) {
     return 803;
    }
if (index == 88) {
     return 795;
    }
if (index == 89) {
     return 802;
    }
if (index == 90) {
     return 773;
    }
if (index == 91) {
     return 770;
    }
if (index == 92) {
     return 768;
    }
if (index == 93) {
     return 800;
    }
if (index == 94) {
     return 784;
    }
if (index == 95) {
     return 782;
    }
if (index == 96) {
     return 788;
    }
if (index == 97) {
     return 804;
    }
if (index == 98) {
     return 803;
    }
if (index == 99) {
     return 799;
    }
if (index == 100) {
     return 760;
    }
if (index == 101) {
     return 772;
    }
if (index == 102) {
     return 772;
    }
if (index == 103) {
     return 790;
    }
if (index == 104) {
     return 770;
    }
if (index == 105) {
     return 791;
    }
if (index == 106) {
     return 786;
    }
if (index == 107) {
     return 803;
    }
if (index == 108) {
     return 792;
    }
if (index == 109) {
     return 811;
    }
if (index == 110) {
     return 810;
    }
if (index == 111) {
     return 829;
    }
if (index == 112) {
     return 796;
    }
if (index == 113) {
     return 828;
    }
if (index == 114) {
     return 782;
    }
if (index == 115) {
     return 807;
    }
if (index == 116) {
     return 797;
    }
if (index == 117) {
     return 822;
    }
if (index == 118) {
     return 799;
    }
if (index == 119) {
     return 802;
    }
if (index == 120) {
     return 768;
    }
if (index == 121) {
     return 805;
    }
if (index == 122) {
     return 772;
    }
if (index == 123) {
     return 820;
    }
if (index == 124) {
     return 805;
    }
if (index == 125) {
     return 814;
    }
if (index == 126) {
     return 819;
    }
if (index == 127) {
     return 817;
    }
if (index == 128) {
     return 818;
    }
if (index == 129) {
     return 808;
    }
if (index == 130) {
     return 812;
    }
if (index == 131) {
     return 823;
    }
if (index == 132) {
     return 816;
    }
if (index == 133) {
     return 830;
    }
if (index == 134) {
     return 810;
    }
if (index == 135) {
     return 818;
    }
if (index == 136) {
     return 790;
    }
if (index == 137) {
     return 822;
    }
if (index == 138) {
     return 808;
    }
if (index == 139) {
     return 823;
    }
if (index == 140) {
     return 801;
    }
if (index == 141) {
     return 803;
    }
if (index == 142) {
     return 832;
    }
if (index == 143) {
     return 842;
    }
if (index == 144) {
     return 822;
    }
if (index == 145) {
     return 816;
    }
if (index == 146) {
     return 820;
    }
if (index == 147) {
     return 830;
    }
if (index == 148) {
     return 819;
    }
if (index == 149) {
     return 813;
    }
if (index == 150) {
     return 804;
    }
if (index == 151) {
     return 826;
    }
if (index == 152) {
     return 732;
    }
if (index == 153) {
     return 829;
    }
if (index == 154) {
     return 822;
    }
if (index == 155) {
     return 798;
    }
if (index == 156) {
     return 811;
    }
if (index == 157) {
     return 819;
    }
if (index == 158) {
     return 748;
    }
if (index == 159) {
     return 819;
    }
if (index == 160) {
     return 807;
    }
if (index == 161) {
     return 808;
    }
if (index == 162) {
     return 806;
    }
if (index == 163) {
     return 822;
    }
if (index == 164) {
     return 819;
    }
if (index == 165) {
     return 833;
    }
if (index == 166) {
     return 777;
    }
if (index == 167) {
     return 794;
    }
if (index == 168) {
     return 870;
    }
if (index == 169) {
     return 830;
    }
if (index == 170) {
     return 835;
    }
if (index == 171) {
     return 831;
    }
if (index == 172) {
     return 834;
    }
if (index == 173) {
     return 832;
    }
if (index == 174) {
     return 816;
    }
if (index == 175) {
     return 810;
    }
if (index == 176) {
     return 761;
    }
if (index == 177) {
     return 817;
    }
if (index == 178) {
     return 795;
    }
if (index == 179) {
     return 830;
    }
if (index == 180) {
     return 812;
    }
if (index == 181) {
     return 795;
    }
if (index == 182) {
     return 821;
    }
if (index == 183) {
     return 802;
    }
if (index == 184) {
     return 810;
    }
if (index == 185) {
     return 823;
    }
if (index == 186) {
     return 810;
    }
if (index == 187) {
     return 802;
    }
if (index == 188) {
     return 744;
    }
if (index == 189) {
     return 829;
    }
if (index == 190) {
     return 812;
    }
if (index == 191) {
     return 809;
    }
if (index == 192) {
     return 771;
    }
if (index == 193) {
     return 818;
    }
if (index == 194) {
     return 806;
    }
if (index == 195) {
     return 804;
    }
if (index == 196) {
     return 808;
    }
if (index == 197) {
     return 818;
    }
if (index == 198) {
     return 808;
    }
if (index == 199) {
     return 805;
    }
if (index == 200) {
     return 825;
    }
if (index == 201) {
     return 820;
    }
if (index == 202) {
     return 810;
    }
if (index == 203) {
     return 812;
    }
if (index == 204) {
     return 796;
    }
if (index == 205) {
     return 820;
    }
if (index == 206) {
     return 805;
    }
if (index == 207) {
     return 769;
    }
if (index == 208) {
     return 771;
    }
if (index == 209) {
     return 819;
    }
if (index == 210) {
     return 806;
    }
if (index == 211) {
     return 811;
    }
if (index == 212) {
     return 794;
    }
if (index == 213) {
     return 820;
    }
if (index == 214) {
     return 804;
    }
if (index == 215) {
     return 779;
    }
if (index == 216) {
     return 794;
    }
if (index == 217) {
     return 789;
    }
if (index == 218) {
     return 799;
    }
if (index == 219) {
     return 799;
    }
if (index == 220) {
     return 792;
    }
if (index == 221) {
     return 801;
    }
if (index == 222) {
     return 769;
    }
if (index == 223) {
     return 806;
    }
if (index == 224) {
     return 801;
    }
if (index == 225) {
     return 821;
    }
if (index == 226) {
     return 811;
    }
if (index == 227) {
     return 810;
    }
if (index == 228) {
     return 788;
    }
if (index == 229) {
     return 815;
    }
if (index == 230) {
     return 808;
    }
if (index == 231) {
     return 815;
    }
if (index == 232) {
     return 790;
    }
if (index == 233) {
     return 802;
    }
if (index == 234) {
     return 796;
    }
if (index == 235) {
     return 784;
    }
if (index == 236) {
     return 784;
    }
if (index == 237) {
     return 772;
    }
if (index == 238) {
     return 793;
    }
if (index == 239) {
     return 817;
    }
if (index == 240) {
     return 793;
    }
if (index == 241) {
     return 792;
    }
if (index == 242) {
     return 789;
    }
if (index == 243) {
     return 801;
    }
if (index == 244) {
     return 804;
    }
if (index == 245) {
     return 801;
    }
if (index == 246) {
     return 811;
    }
if (index == 247) {
     return 823;
    }
if (index == 248) {
     return 786;
    }
if (index == 249) {
     return 774;
    }
if (index == 250) {
     return 760;
    }
if (index == 251) {
     return 763;
    }
if (index == 252) {
     return 801;
    }
if (index == 253) {
     return 790;
    }
if (index == 254) {
     return 785;
    }
if (index == 255) {
     return 806;
    }
if (index == 256) {
     return 798;
    }
if (index == 257) {
     return 788;
    }
if (index == 258) {
     return 757;
    }
if (index == 259) {
     return 785;
    }
if (index == 260) {
     return 810;
    }
if (index == 261) {
     return 801;
    }
if (index == 262) {
     return 805;
    }
if (index == 263) {
     return 809;
    }
if (index == 264) {
     return 795;
    }
if (index == 265) {
     return 808;
    }
if (index == 266) {
     return 793;
    }
if (index == 267) {
     return 791;
    }
if (index == 268) {
     return 792;
    }
if (index == 269) {
     return 782;
    }
if (index == 270) {
     return 755;
    }
if (index == 271) {
     return 786;
    }
if (index == 272) {
     return 781;
    }
if (index == 273) {
     return 808;
    }
if (index == 274) {
     return 801;
    }
if (index == 275) {
     return 809;
    }
if (index == 276) {
     return 813;
    }
if (index == 277) {
     return 780;
    }
if (index == 278) {
     return 782;
    }
if (index == 279) {
     return 762;
    }
if (index == 280) {
     return 796;
    }
if (index == 281) {
     return 808;
    }
if (index == 282) {
     return 816;
    }
if (index == 283) {
     return 807;
    }
if (index == 284) {
     return 804;
    }
if (index == 285) {
     return 807;
    }
if (index == 286) {
     return 767;
    }
if (index == 287) {
     return 828;
    }
if (index == 288) {
     return 774;
    }
if (index == 289) {
     return 813;
    }
if (index == 290) {
     return 791;
    }
if (index == 291) {
     return 806;
    }
if (index == 292) {
     return 804;
    }
if (index == 293) {
     return 784;
    }
if (index == 294) {
     return 805;
    }
if (index == 295) {
     return 785;
    }
if (index == 296) {
     return 781;
    }
if (index == 297) {
     return 807;
    }
if (index == 298) {
     return 781;
    }
if (index == 299) {
     return 807;
    }
if (index == 300) {
     return 808;
    }
if (index == 301) {
     return 804;
    }
if (index == 302) {
     return 805;
    }
if (index == 303) {
     return 796;
    }
if (index == 304) {
     return 801;
    }
if (index == 305) {
     return 808;
    }
if (index == 306) {
     return 811;
    }
if (index == 307) {
     return 776;
    }
if (index == 308) {
     return 796;
    }
if (index == 309) {
     return 790;
    }
if (index == 310) {
     return 783;
    }
if (index == 311) {
     return 783;
    }
if (index == 312) {
     return 763;
    }
if (index == 313) {
     return 786;
    }
if (index == 314) {
     return 771;
    }
if (index == 315) {
     return 779;
    }
if (index == 316) {
     return 781;
    }
if (index == 317) {
     return 807;
    }
if (index == 318) {
     return 789;
    }
if (index == 319) {
     return 790;
    }
if (index == 320) {
     return 790;
    }
if (index == 321) {
     return 812;
    }
if (index == 322) {
     return 787;
    }
if (index == 323) {
     return 776;
    }
if (index == 324) {
     return 788;
    }
if (index == 325) {
     return 777;
    }
if (index == 326) {
     return 787;
    }
if (index == 327) {
     return 777;
    }
if (index == 328) {
     return 802;
    }
if (index == 329) {
     return 792;
    }
if (index == 330) {
     return 789;
    }
if (index == 331) {
     return 804;
    }
if (index == 332) {
     return 800;
    }
if (index == 333) {
     return 782;
    }
if (index == 334) {
     return 793;
    }
if (index == 335) {
     return 785;
    }
if (index == 336) {
     return 781;
    }
if (index == 337) {
     return 792;
    }
if (index == 338) {
     return 785;
    }
if (index == 339) {
     return 779;
    }
if (index == 340) {
     return 773;
    }
if (index == 341) {
     return 774;
    }
if (index == 342) {
     return 782;
    }
if (index == 343) {
     return 795;
    }
if (index == 344) {
     return 804;
    }
if (index == 345) {
     return 805;
    }
if (index == 346) {
     return 782;
    }
if (index == 347) {
     return 787;
    }
if (index == 348) {
     return 789;
    }
if (index == 349) {
     return 806;
    }
if (index == 350) {
     return 792;
    }
if (index == 351) {
     return 770;
    }
if (index == 352) {
     return 800;
    }
if (index == 353) {
     return 762;
    }
if (index == 354) {
     return 779;
    }
if (index == 355) {
     return 788;
    }
if (index == 356) {
     return 763;
    }
if (index == 357) {
     return 773;
    }
if (index == 358) {
     return 751;
    }
if (index == 359) {
     return 758;
    }
if (index == 360) {
     return 779;
    }
if (index == 361) {
     return 789;
    }
if (index == 362) {
     return 787;
    }
if (index == 363) {
     return 790;
    }
if (index == 364) {
     return 777;
    }
if (index == 365) {
     return 776;
    }
if (index == 366) {
     return 780;
    }
if (index == 367) {
     return 795;
    }
if (index == 368) {
     return 785;
    }
if (index == 369) {
     return 779;
    }
if (index == 370) {
     return 786;
    }
if (index == 371) {
     return 769;
    }
if (index == 372) {
     return 784;
    }
if (index == 373) {
     return 762;
    }
if (index == 374) {
     return 767;
    }
if (index == 375) {
     return 775;
    }
if (index == 376) {
     return 756;
    }
if (index == 377) {
     return 783;
    }
if (index == 378) {
     return 782;
    }
if (index == 379) {
     return 784;
    }
if (index == 380) {
     return 773;
    }
if (index == 381) {
     return 786;
    }
if (index == 382) {
     return 753;
    }
if (index == 383) {
     return 746;
    }
if (index == 384) {
     return 775;
    }
if (index == 385) {
     return 746;
    }
if (index == 386) {
     return 774;
    }
if (index == 387) {
     return 766;
    }
if (index == 388) {
     return 794;
    }
if (index == 389) {
     return 810;
    }
if (index == 390) {
     return 763;
    }
if (index == 391) {
     return 776;
    }
if (index == 392) {
     return 772;
    }
if (index == 393) {
     return 792;
    }
if (index == 394) {
     return 795;
    }
if (index == 395) {
     return 811;
    }
if (index == 396) {
     return 803;
    }
if (index == 397) {
     return 789;
    }
if (index == 398) {
     return 793;
    }
if (index == 399) {
     return 795;
    }
if (index == 400) {
     return 780;
    }
if (index == 401) {
     return 786;
    }
if (index == 402) {
     return 769;
    }
if (index == 403) {
     return 787;
    }
if (index == 404) {
     return 783;
    }
if (index == 405) {
     return 758;
    }
if (index > 405) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1290;
    }
if (index == 1) {
     return 1286;
    }
if (index == 2) {
     return 1286;
    }
if (index == 3) {
     return 1286;
    }
if (index == 4) {
     return 1286;
    }
if (index == 5) {
     return 1233;
    }
if (index == 6) {
     return 1239;
    }
if (index == 7) {
     return 1220;
    }
if (index == 8) {
     return 1234;
    }
if (index == 9) {
     return 1243;
    }
if (index == 10) {
     return 1234;
    }
if (index == 11) {
     return 1257;
    }
if (index == 12) {
     return 1240;
    }
if (index == 13) {
     return 1243;
    }
if (index == 14) {
     return 1233;
    }
if (index == 15) {
     return 1241;
    }
if (index == 16) {
     return 1249;
    }
if (index == 17) {
     return 1244;
    }
if (index == 18) {
     return 1246;
    }
if (index == 19) {
     return 1251;
    }
if (index == 20) {
     return 1234;
    }
if (index == 21) {
     return 1246;
    }
if (index == 22) {
     return 1243;
    }
if (index == 23) {
     return 1255;
    }
if (index == 24) {
     return 1233;
    }
if (index == 25) {
     return 1254;
    }
if (index == 26) {
     return 1232;
    }
if (index == 27) {
     return 1234;
    }
if (index == 28) {
     return 1219;
    }
if (index == 29) {
     return 1235;
    }
if (index == 30) {
     return 1221;
    }
if (index == 31) {
     return 1252;
    }
if (index == 32) {
     return 1228;
    }
if (index == 33) {
     return 1241;
    }
if (index == 34) {
     return 1229;
    }
if (index == 35) {
     return 1251;
    }
if (index == 36) {
     return 1245;
    }
if (index == 37) {
     return 1247;
    }
if (index == 38) {
     return 1245;
    }
if (index == 39) {
     return 1250;
    }
if (index == 40) {
     return 1233;
    }
if (index == 41) {
     return 1243;
    }
if (index == 42) {
     return 1241;
    }
if (index == 43) {
     return 1241;
    }
if (index == 44) {
     return 1245;
    }
if (index == 45) {
     return 1258;
    }
if (index == 46) {
     return 1250;
    }
if (index == 47) {
     return 1247;
    }
if (index == 48) {
     return 1261;
    }
if (index == 49) {
     return 1247;
    }
if (index == 50) {
     return 1259;
    }
if (index == 51) {
     return 1250;
    }
if (index == 52) {
     return 1249;
    }
if (index == 53) {
     return 1251;
    }
if (index == 54) {
     return 1255;
    }
if (index == 55) {
     return 1255;
    }
if (index == 56) {
     return 1252;
    }
if (index == 57) {
     return 1225;
    }
if (index == 58) {
     return 1211;
    }
if (index == 59) {
     return 1245;
    }
if (index == 60) {
     return 1249;
    }
if (index == 61) {
     return 1238;
    }
if (index == 62) {
     return 1249;
    }
if (index == 63) {
     return 1241;
    }
if (index == 64) {
     return 1250;
    }
if (index == 65) {
     return 1237;
    }
if (index == 66) {
     return 1250;
    }
if (index == 67) {
     return 1255;
    }
if (index == 68) {
     return 1233;
    }
if (index == 69) {
     return 1251;
    }
if (index == 70) {
     return 1245;
    }
if (index == 71) {
     return 1251;
    }
if (index == 72) {
     return 1242;
    }
if (index == 73) {
     return 1248;
    }
if (index == 74) {
     return 1234;
    }
if (index == 75) {
     return 1241;
    }
if (index == 76) {
     return 1244;
    }
if (index == 77) {
     return 1243;
    }
if (index == 78) {
     return 1234;
    }
if (index == 79) {
     return 1239;
    }
if (index == 80) {
     return 1234;
    }
if (index == 81) {
     return 1253;
    }
if (index == 82) {
     return 1246;
    }
if (index == 83) {
     return 1243;
    }
if (index == 84) {
     return 1234;
    }
if (index == 85) {
     return 1245;
    }
if (index == 86) {
     return 1239;
    }
if (index == 87) {
     return 1235;
    }
if (index == 88) {
     return 1223;
    }
if (index == 89) {
     return 1236;
    }
if (index == 90) {
     return 1234;
    }
if (index == 91) {
     return 1228;
    }
if (index == 92) {
     return 1242;
    }
if (index == 93) {
     return 1247;
    }
if (index == 94) {
     return 1242;
    }
if (index == 95) {
     return 1240;
    }
if (index == 96) {
     return 1240;
    }
if (index == 97) {
     return 1247;
    }
if (index == 98) {
     return 1258;
    }
if (index == 99) {
     return 1246;
    }
if (index == 100) {
     return 1229;
    }
if (index == 101) {
     return 1250;
    }
if (index == 102) {
     return 1254;
    }
if (index == 103) {
     return 1248;
    }
if (index == 104) {
     return 1252;
    }
if (index == 105) {
     return 1251;
    }
if (index == 106) {
     return 1244;
    }
if (index == 107) {
     return 1242;
    }
if (index == 108) {
     return 1252;
    }
if (index == 109) {
     return 1258;
    }
if (index == 110) {
     return 1257;
    }
if (index == 111) {
     return 1259;
    }
if (index == 112) {
     return 1259;
    }
if (index == 113) {
     return 1260;
    }
if (index == 114) {
     return 1261;
    }
if (index == 115) {
     return 1260;
    }
if (index == 116) {
     return 1260;
    }
if (index == 117) {
     return 1258;
    }
if (index == 118) {
     return 1251;
    }
if (index == 119) {
     return 1259;
    }
if (index == 120) {
     return 1218;
    }
if (index == 121) {
     return 1252;
    }
if (index == 122) {
     return 1252;
    }
if (index == 123) {
     return 1255;
    }
if (index == 124) {
     return 1240;
    }
if (index == 125) {
     return 1250;
    }
if (index == 126) {
     return 1266;
    }
if (index == 127) {
     return 1262;
    }
if (index == 128) {
     return 1270;
    }
if (index == 129) {
     return 1251;
    }
if (index == 130) {
     return 1271;
    }
if (index == 131) {
     return 1260;
    }
if (index == 132) {
     return 1268;
    }
if (index == 133) {
     return 1253;
    }
if (index == 134) {
     return 1257;
    }
if (index == 135) {
     return 1246;
    }
if (index == 136) {
     return 1223;
    }
if (index == 137) {
     return 1260;
    }
if (index == 138) {
     return 1250;
    }
if (index == 139) {
     return 1247;
    }
if (index == 140) {
     return 1240;
    }
if (index == 141) {
     return 1251;
    }
if (index == 142) {
     return 1262;
    }
if (index == 143) {
     return 1249;
    }
if (index == 144) {
     return 1256;
    }
if (index == 145) {
     return 1246;
    }
if (index == 146) {
     return 1258;
    }
if (index == 147) {
     return 1261;
    }
if (index == 148) {
     return 1269;
    }
if (index == 149) {
     return 1256;
    }
if (index == 150) {
     return 1267;
    }
if (index == 151) {
     return 1253;
    }
if (index == 152) {
     return 1195;
    }
if (index == 153) {
     return 1251;
    }
if (index == 154) {
     return 1280;
    }
if (index == 155) {
     return 1261;
    }
if (index == 156) {
     return 1254;
    }
if (index == 157) {
     return 1253;
    }
if (index == 158) {
     return 1204;
    }
if (index == 159) {
     return 1244;
    }
if (index == 160) {
     return 1264;
    }
if (index == 161) {
     return 1267;
    }
if (index == 162) {
     return 1269;
    }
if (index == 163) {
     return 1271;
    }
if (index == 164) {
     return 1263;
    }
if (index == 165) {
     return 1265;
    }
if (index == 166) {
     return 1222;
    }
if (index == 167) {
     return 1217;
    }
if (index == 168) {
     return 1284;
    }
if (index == 169) {
     return 1251;
    }
if (index == 170) {
     return 1275;
    }
if (index == 171) {
     return 1252;
    }
if (index == 172) {
     return 1275;
    }
if (index == 173) {
     return 1270;
    }
if (index == 174) {
     return 1260;
    }
if (index == 175) {
     return 1266;
    }
if (index == 176) {
     return 1216;
    }
if (index == 177) {
     return 1259;
    }
if (index == 178) {
     return 1268;
    }
if (index == 179) {
     return 1251;
    }
if (index == 180) {
     return 1274;
    }
if (index == 181) {
     return 1252;
    }
if (index == 182) {
     return 1277;
    }
if (index == 183) {
     return 1243;
    }
if (index == 184) {
     return 1265;
    }
if (index == 185) {
     return 1254;
    }
if (index == 186) {
     return 1272;
    }
if (index == 187) {
     return 1251;
    }
if (index == 188) {
     return 1201;
    }
if (index == 189) {
     return 1251;
    }
if (index == 190) {
     return 1265;
    }
if (index == 191) {
     return 1244;
    }
if (index == 192) {
     return 1215;
    }
if (index == 193) {
     return 1262;
    }
if (index == 194) {
     return 1283;
    }
if (index == 195) {
     return 1257;
    }
if (index == 196) {
     return 1267;
    }
if (index == 197) {
     return 1252;
    }
if (index == 198) {
     return 1268;
    }
if (index == 199) {
     return 1253;
    }
if (index == 200) {
     return 1266;
    }
if (index == 201) {
     return 1246;
    }
if (index == 202) {
     return 1267;
    }
if (index == 203) {
     return 1209;
    }
if (index == 204) {
     return 1251;
    }
if (index == 205) {
     return 1265;
    }
if (index == 206) {
     return 1270;
    }
if (index == 207) {
     return 1206;
    }
if (index == 208) {
     return 1215;
    }
if (index == 209) {
     return 1275;
    }
if (index == 210) {
     return 1238;
    }
if (index == 211) {
     return 1271;
    }
if (index == 212) {
     return 1243;
    }
if (index == 213) {
     return 1245;
    }
if (index == 214) {
     return 1248;
    }
if (index == 215) {
     return 1201;
    }
if (index == 216) {
     return 1260;
    }
if (index == 217) {
     return 1257;
    }
if (index == 218) {
     return 1262;
    }
if (index == 219) {
     return 1256;
    }
if (index == 220) {
     return 1238;
    }
if (index == 221) {
     return 1266;
    }
if (index == 222) {
     return 1225;
    }
if (index == 223) {
     return 1262;
    }
if (index == 224) {
     return 1230;
    }
if (index == 225) {
     return 1237;
    }
if (index == 226) {
     return 1219;
    }
if (index == 227) {
     return 1258;
    }
if (index == 228) {
     return 1218;
    }
if (index == 229) {
     return 1262;
    }
if (index == 230) {
     return 1241;
    }
if (index == 231) {
     return 1256;
    }
if (index == 232) {
     return 1249;
    }
if (index == 233) {
     return 1241;
    }
if (index == 234) {
     return 1243;
    }
if (index == 235) {
     return 1186;
    }
if (index == 236) {
     return 1186;
    }
if (index == 237) {
     return 1198;
    }
if (index == 238) {
     return 1255;
    }
if (index == 239) {
     return 1251;
    }
if (index == 240) {
     return 1233;
    }
if (index == 241) {
     return 1237;
    }
if (index == 242) {
     return 1234;
    }
if (index == 243) {
     return 1249;
    }
if (index == 244) {
     return 1232;
    }
if (index == 245) {
     return 1248;
    }
if (index == 246) {
     return 1231;
    }
if (index == 247) {
     return 1254;
    }
if (index == 248) {
     return 1242;
    }
if (index == 249) {
     return 1237;
    }
if (index == 250) {
     return 1228;
    }
if (index == 251) {
     return 1225;
    }
if (index == 252) {
     return 1257;
    }
if (index == 253) {
     return 1237;
    }
if (index == 254) {
     return 1256;
    }
if (index == 255) {
     return 1245;
    }
if (index == 256) {
     return 1243;
    }
if (index == 257) {
     return 1247;
    }
if (index == 258) {
     return 1235;
    }
if (index == 259) {
     return 1246;
    }
if (index == 260) {
     return 1243;
    }
if (index == 261) {
     return 1263;
    }
if (index == 262) {
     return 1254;
    }
if (index == 263) {
     return 1257;
    }
if (index == 264) {
     return 1255;
    }
if (index == 265) {
     return 1257;
    }
if (index == 266) {
     return 1247;
    }
if (index == 267) {
     return 1257;
    }
if (index == 268) {
     return 1263;
    }
if (index == 269) {
     return 1251;
    }
if (index == 270) {
     return 1251;
    }
if (index == 271) {
     return 1235;
    }
if (index == 272) {
     return 1253;
    }
if (index == 273) {
     return 1251;
    }
if (index == 274) {
     return 1257;
    }
if (index == 275) {
     return 1254;
    }
if (index == 276) {
     return 1263;
    }
if (index == 277) {
     return 1255;
    }
if (index == 278) {
     return 1220;
    }
if (index == 279) {
     return 1241;
    }
if (index == 280) {
     return 1249;
    }
if (index == 281) {
     return 1262;
    }
if (index == 282) {
     return 1248;
    }
if (index == 283) {
     return 1259;
    }
if (index == 284) {
     return 1268;
    }
if (index == 285) {
     return 1262;
    }
if (index == 286) {
     return 1270;
    }
if (index == 287) {
     return 1269;
    }
if (index == 288) {
     return 1263;
    }
if (index == 289) {
     return 1268;
    }
if (index == 290) {
     return 1258;
    }
if (index == 291) {
     return 1267;
    }
if (index == 292) {
     return 1260;
    }
if (index == 293) {
     return 1249;
    }
if (index == 294) {
     return 1255;
    }
if (index == 295) {
     return 1260;
    }
if (index == 296) {
     return 1224;
    }
if (index == 297) {
     return 1263;
    }
if (index == 298) {
     return 1248;
    }
if (index == 299) {
     return 1271;
    }
if (index == 300) {
     return 1251;
    }
if (index == 301) {
     return 1260;
    }
if (index == 302) {
     return 1255;
    }
if (index == 303) {
     return 1261;
    }
if (index == 304) {
     return 1255;
    }
if (index == 305) {
     return 1277;
    }
if (index == 306) {
     return 1262;
    }
if (index == 307) {
     return 1251;
    }
if (index == 308) {
     return 1261;
    }
if (index == 309) {
     return 1247;
    }
if (index == 310) {
     return 1241;
    }
if (index == 311) {
     return 1266;
    }
if (index == 312) {
     return 1243;
    }
if (index == 313) {
     return 1272;
    }
if (index == 314) {
     return 1231;
    }
if (index == 315) {
     return 1257;
    }
if (index == 316) {
     return 1241;
    }
if (index == 317) {
     return 1268;
    }
if (index == 318) {
     return 1241;
    }
if (index == 319) {
     return 1261;
    }
if (index == 320) {
     return 1237;
    }
if (index == 321) {
     return 1270;
    }
if (index == 322) {
     return 1236;
    }
if (index == 323) {
     return 1238;
    }
if (index == 324) {
     return 1246;
    }
if (index == 325) {
     return 1255;
    }
if (index == 326) {
     return 1238;
    }
if (index == 327) {
     return 1257;
    }
if (index == 328) {
     return 1261;
    }
if (index == 329) {
     return 1266;
    }
if (index == 330) {
     return 1249;
    }
if (index == 331) {
     return 1269;
    }
if (index == 332) {
     return 1262;
    }
if (index == 333) {
     return 1269;
    }
if (index == 334) {
     return 1251;
    }
if (index == 335) {
     return 1274;
    }
if (index == 336) {
     return 1239;
    }
if (index == 337) {
     return 1261;
    }
if (index == 338) {
     return 1258;
    }
if (index == 339) {
     return 1229;
    }
if (index == 340) {
     return 1248;
    }
if (index == 341) {
     return 1247;
    }
if (index == 342) {
     return 1244;
    }
if (index == 343) {
     return 1253;
    }
if (index == 344) {
     return 1241;
    }
if (index == 345) {
     return 1257;
    }
if (index == 346) {
     return 1235;
    }
if (index == 347) {
     return 1253;
    }
if (index == 348) {
     return 1240;
    }
if (index == 349) {
     return 1255;
    }
if (index == 350) {
     return 1241;
    }
if (index == 351) {
     return 1236;
    }
if (index == 352) {
     return 1236;
    }
if (index == 353) {
     return 1251;
    }
if (index == 354) {
     return 1262;
    }
if (index == 355) {
     return 1259;
    }
if (index == 356) {
     return 1225;
    }
if (index == 357) {
     return 1255;
    }
if (index == 358) {
     return 1249;
    }
if (index == 359) {
     return 1247;
    }
if (index == 360) {
     return 1256;
    }
if (index == 361) {
     return 1245;
    }
if (index == 362) {
     return 1251;
    }
if (index == 363) {
     return 1263;
    }
if (index == 364) {
     return 1251;
    }
if (index == 365) {
     return 1251;
    }
if (index == 366) {
     return 1249;
    }
if (index == 367) {
     return 1262;
    }
if (index == 368) {
     return 1254;
    }
if (index == 369) {
     return 1253;
    }
if (index == 370) {
     return 1262;
    }
if (index == 371) {
     return 1259;
    }
if (index == 372) {
     return 1251;
    }
if (index == 373) {
     return 1251;
    }
if (index == 374) {
     return 1249;
    }
if (index == 375) {
     return 1249;
    }
if (index == 376) {
     return 1238;
    }
if (index == 377) {
     return 1245;
    }
if (index == 378) {
     return 1239;
    }
if (index == 379) {
     return 1241;
    }
if (index == 380) {
     return 1233;
    }
if (index == 381) {
     return 1245;
    }
if (index == 382) {
     return 1235;
    }
if (index == 383) {
     return 1243;
    }
if (index == 384) {
     return 1237;
    }
if (index == 385) {
     return 1249;
    }
if (index == 386) {
     return 1256;
    }
if (index == 387) {
     return 1249;
    }
if (index == 388) {
     return 1265;
    }
if (index == 389) {
     return 1254;
    }
if (index == 390) {
     return 1261;
    }
if (index == 391) {
     return 1241;
    }
if (index == 392) {
     return 1266;
    }
if (index == 393) {
     return 1260;
    }
if (index == 394) {
     return 1266;
    }
if (index == 395) {
     return 1261;
    }
if (index == 396) {
     return 1268;
    }
if (index == 397) {
     return 1269;
    }
if (index == 398) {
     return 1252;
    }
if (index == 399) {
     return 1266;
    }
if (index == 400) {
     return 1256;
    }
if (index == 401) {
     return 1280;
    }
if (index == 402) {
     return 1254;
    }
if (index == 403) {
     return 1259;
    }
if (index == 404) {
     return 1237;
    }
if (index == 405) {
     return 1247;
    }
if (index > 405) {
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
    var url = '/fedora/get/seapage:231_' + imgStr + '/digitalImage';
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
br.numLeafs = 406;

// Book title and the URL used for the book title link
br.bookTitle= "The Adventures of Reuben Davidger : seventeen years and four months captive among the Dyaks of Borneo";
br.bookAuthor= "Greenwood, James";
br.bookPub= "London ; New York ; Melbourne: Ward Lock and Co, 1899";
br.bookKeyword= "Borneo";
br.bookUrl  = '/catalog/sea:231';

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