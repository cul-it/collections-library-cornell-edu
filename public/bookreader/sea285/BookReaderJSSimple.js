//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 1045;
    }
if (index == 1) {
     return 988;
    }
if (index == 2) {
     return 979;
    }
if (index == 3) {
     return 959;
    }
if (index == 4) {
     return 937;
    }
if (index == 5) {
     return 969;
    }
if (index == 6) {
     return 892;
    }
if (index == 7) {
     return 854;
    }
if (index == 8) {
     return 833;
    }
if (index == 9) {
     return 977;
    }
if (index == 10) {
     return 817;
    }
if (index == 11) {
     return 792;
    }
if (index == 12) {
     return 830;
    }
if (index == 13) {
     return 810;
    }
if (index == 14) {
     return 852;
    }
if (index == 15) {
     return 819;
    }
if (index == 16) {
     return 787;
    }
if (index == 17) {
     return 832;
    }
if (index == 18) {
     return 795;
    }
if (index == 19) {
     return 827;
    }
if (index == 20) {
     return 849;
    }
if (index == 21) {
     return 849;
    }
if (index == 22) {
     return 804;
    }
if (index == 23) {
     return 924;
    }
if (index == 24) {
     return 742;
    }
if (index == 25) {
     return 866;
    }
if (index == 26) {
     return 832;
    }
if (index == 27) {
     return 861;
    }
if (index == 28) {
     return 833;
    }
if (index == 29) {
     return 849;
    }
if (index == 30) {
     return 924;
    }
if (index == 31) {
     return 864;
    }
if (index == 32) {
     return 872;
    }
if (index == 33) {
     return 833;
    }
if (index == 34) {
     return 822;
    }
if (index == 35) {
     return 815;
    }
if (index == 36) {
     return 820;
    }
if (index == 37) {
     return 866;
    }
if (index == 38) {
     return 837;
    }
if (index == 39) {
     return 817;
    }
if (index == 40) {
     return 849;
    }
if (index == 41) {
     return 861;
    }
if (index == 42) {
     return 813;
    }
if (index == 43) {
     return 840;
    }
if (index == 44) {
     return 834;
    }
if (index == 45) {
     return 833;
    }
if (index == 46) {
     return 826;
    }
if (index == 47) {
     return 802;
    }
if (index == 48) {
     return 826;
    }
if (index == 49) {
     return 829;
    }
if (index == 50) {
     return 829;
    }
if (index == 51) {
     return 817;
    }
if (index == 52) {
     return 842;
    }
if (index == 53) {
     return 819;
    }
if (index == 54) {
     return 858;
    }
if (index == 55) {
     return 834;
    }
if (index == 56) {
     return 830;
    }
if (index == 57) {
     return 824;
    }
if (index == 58) {
     return 808;
    }
if (index == 59) {
     return 827;
    }
if (index == 60) {
     return 810;
    }
if (index == 61) {
     return 837;
    }
if (index == 62) {
     return 837;
    }
if (index == 63) {
     return 775;
    }
if (index == 64) {
     return 810;
    }
if (index == 65) {
     return 771;
    }
if (index == 66) {
     return 822;
    }
if (index == 67) {
     return 817;
    }
if (index == 68) {
     return 835;
    }
if (index == 69) {
     return 834;
    }
if (index == 70) {
     return 805;
    }
if (index == 71) {
     return 814;
    }
if (index == 72) {
     return 832;
    }
if (index == 73) {
     return 802;
    }
if (index == 74) {
     return 814;
    }
if (index == 75) {
     return 801;
    }
if (index == 76) {
     return 816;
    }
if (index == 77) {
     return 823;
    }
if (index == 78) {
     return 831;
    }
if (index == 79) {
     return 812;
    }
if (index == 80) {
     return 810;
    }
if (index == 81) {
     return 757;
    }
if (index == 82) {
     return 808;
    }
if (index == 83) {
     return 816;
    }
if (index == 84) {
     return 815;
    }
if (index == 85) {
     return 813;
    }
if (index == 86) {
     return 833;
    }
if (index == 87) {
     return 783;
    }
if (index == 88) {
     return 807;
    }
if (index == 89) {
     return 772;
    }
if (index == 90) {
     return 821;
    }
if (index == 91) {
     return 831;
    }
if (index == 92) {
     return 797;
    }
if (index == 93) {
     return 834;
    }
if (index == 94) {
     return 825;
    }
if (index == 95) {
     return 848;
    }
if (index == 96) {
     return 828;
    }
if (index == 97) {
     return 802;
    }
if (index == 98) {
     return 837;
    }
if (index == 99) {
     return 786;
    }
if (index == 100) {
     return 813;
    }
if (index == 101) {
     return 791;
    }
if (index == 102) {
     return 836;
    }
if (index == 103) {
     return 812;
    }
if (index == 104) {
     return 814;
    }
if (index == 105) {
     return 803;
    }
if (index == 106) {
     return 795;
    }
if (index == 107) {
     return 794;
    }
if (index == 108) {
     return 812;
    }
if (index == 109) {
     return 831;
    }
if (index == 110) {
     return 798;
    }
if (index == 111) {
     return 828;
    }
if (index == 112) {
     return 822;
    }
if (index == 113) {
     return 800;
    }
if (index == 114) {
     return 811;
    }
if (index == 115) {
     return 811;
    }
if (index == 116) {
     return 805;
    }
if (index == 117) {
     return 820;
    }
if (index == 118) {
     return 798;
    }
if (index == 119) {
     return 814;
    }
if (index == 120) {
     return 812;
    }
if (index == 121) {
     return 828;
    }
if (index == 122) {
     return 805;
    }
if (index == 123) {
     return 781;
    }
if (index == 124) {
     return 807;
    }
if (index == 125) {
     return 807;
    }
if (index == 126) {
     return 815;
    }
if (index == 127) {
     return 781;
    }
if (index == 128) {
     return 801;
    }
if (index == 129) {
     return 810;
    }
if (index == 130) {
     return 786;
    }
if (index == 131) {
     return 762;
    }
if (index == 132) {
     return 801;
    }
if (index == 133) {
     return 792;
    }
if (index == 134) {
     return 808;
    }
if (index == 135) {
     return 815;
    }
if (index == 136) {
     return 803;
    }
if (index == 137) {
     return 820;
    }
if (index == 138) {
     return 801;
    }
if (index == 139) {
     return 788;
    }
if (index == 140) {
     return 814;
    }
if (index == 141) {
     return 812;
    }
if (index == 142) {
     return 817;
    }
if (index == 143) {
     return 820;
    }
if (index == 144) {
     return 812;
    }
if (index == 145) {
     return 804;
    }
if (index == 146) {
     return 799;
    }
if (index == 147) {
     return 819;
    }
if (index == 148) {
     return 812;
    }
if (index == 149) {
     return 789;
    }
if (index == 150) {
     return 795;
    }
if (index == 151) {
     return 792;
    }
if (index == 152) {
     return 810;
    }
if (index == 153) {
     return 878;
    }
if (index == 154) {
     return 808;
    }
if (index == 155) {
     return 858;
    }
if (index == 156) {
     return 800;
    }
if (index == 157) {
     return 807;
    }
if (index == 158) {
     return 814;
    }
if (index == 159) {
     return 778;
    }
if (index == 160) {
     return 804;
    }
if (index == 161) {
     return 838;
    }
if (index == 162) {
     return 778;
    }
if (index == 163) {
     return 825;
    }
if (index == 164) {
     return 793;
    }
if (index == 165) {
     return 825;
    }
if (index == 166) {
     return 820;
    }
if (index == 167) {
     return 786;
    }
if (index == 168) {
     return 813;
    }
if (index == 169) {
     return 808;
    }
if (index == 170) {
     return 835;
    }
if (index == 171) {
     return 817;
    }
if (index == 172) {
     return 835;
    }
if (index == 173) {
     return 793;
    }
if (index == 174) {
     return 804;
    }
if (index == 175) {
     return 788;
    }
if (index == 176) {
     return 834;
    }
if (index == 177) {
     return 811;
    }
if (index == 178) {
     return 833;
    }
if (index == 179) {
     return 801;
    }
if (index == 180) {
     return 802;
    }
if (index == 181) {
     return 798;
    }
if (index == 182) {
     return 807;
    }
if (index == 183) {
     return 809;
    }
if (index == 184) {
     return 791;
    }
if (index == 185) {
     return 933;
    }
if (index == 186) {
     return 822;
    }
if (index == 187) {
     return 869;
    }
if (index == 188) {
     return 800;
    }
if (index == 189) {
     return 792;
    }
if (index == 190) {
     return 793;
    }
if (index == 191) {
     return 812;
    }
if (index == 192) {
     return 795;
    }
if (index == 193) {
     return 815;
    }
if (index == 194) {
     return 788;
    }
if (index == 195) {
     return 814;
    }
if (index == 196) {
     return 827;
    }
if (index == 197) {
     return 797;
    }
if (index == 198) {
     return 807;
    }
if (index == 199) {
     return 818;
    }
if (index == 200) {
     return 802;
    }
if (index == 201) {
     return 797;
    }
if (index == 202) {
     return 824;
    }
if (index == 203) {
     return 810;
    }
if (index == 204) {
     return 812;
    }
if (index == 205) {
     return 787;
    }
if (index == 206) {
     return 838;
    }
if (index == 207) {
     return 809;
    }
if (index == 208) {
     return 774;
    }
if (index == 209) {
     return 760;
    }
if (index == 210) {
     return 803;
    }
if (index == 211) {
     return 802;
    }
if (index == 212) {
     return 811;
    }
if (index == 213) {
     return 802;
    }
if (index == 214) {
     return 803;
    }
if (index == 215) {
     return 793;
    }
if (index == 216) {
     return 786;
    }
if (index == 217) {
     return 773;
    }
if (index == 218) {
     return 812;
    }
if (index == 219) {
     return 826;
    }
if (index == 220) {
     return 829;
    }
if (index == 221) {
     return 819;
    }
if (index == 222) {
     return 822;
    }
if (index == 223) {
     return 812;
    }
if (index == 224) {
     return 822;
    }
if (index == 225) {
     return 799;
    }
if (index == 226) {
     return 781;
    }
if (index == 227) {
     return 820;
    }
if (index == 228) {
     return 788;
    }
if (index == 229) {
     return 784;
    }
if (index == 230) {
     return 824;
    }
if (index == 231) {
     return 785;
    }
if (index == 232) {
     return 769;
    }
if (index == 233) {
     return 797;
    }
if (index == 234) {
     return 791;
    }
if (index == 235) {
     return 780;
    }
if (index == 236) {
     return 772;
    }
if (index == 237) {
     return 809;
    }
if (index == 238) {
     return 778;
    }
if (index == 239) {
     return 795;
    }
if (index == 240) {
     return 788;
    }
if (index == 241) {
     return 773;
    }
if (index == 242) {
     return 793;
    }
if (index == 243) {
     return 790;
    }
if (index == 244) {
     return 779;
    }
if (index == 245) {
     return 767;
    }
if (index == 246) {
     return 774;
    }
if (index == 247) {
     return 807;
    }
if (index == 248) {
     return 795;
    }
if (index == 249) {
     return 845;
    }
if (index == 250) {
     return 818;
    }
if (index == 251) {
     return 815;
    }
if (index == 252) {
     return 817;
    }
if (index == 253) {
     return 804;
    }
if (index == 254) {
     return 843;
    }
if (index == 255) {
     return 809;
    }
if (index == 256) {
     return 830;
    }
if (index == 257) {
     return 765;
    }
if (index == 258) {
     return 800;
    }
if (index == 259) {
     return 781;
    }
if (index == 260) {
     return 806;
    }
if (index == 261) {
     return 791;
    }
if (index == 262) {
     return 834;
    }
if (index == 263) {
     return 771;
    }
if (index == 264) {
     return 791;
    }
if (index == 265) {
     return 775;
    }
if (index == 266) {
     return 776;
    }
if (index == 267) {
     return 804;
    }
if (index == 268) {
     return 764;
    }
if (index == 269) {
     return 751;
    }
if (index == 270) {
     return 773;
    }
if (index == 271) {
     return 771;
    }
if (index == 272) {
     return 779;
    }
if (index == 273) {
     return 759;
    }
if (index == 274) {
     return 776;
    }
if (index == 275) {
     return 828;
    }
if (index == 276) {
     return 790;
    }
if (index == 277) {
     return 747;
    }
if (index == 278) {
     return 769;
    }
if (index == 279) {
     return 763;
    }
if (index == 280) {
     return 757;
    }
if (index == 281) {
     return 805;
    }
if (index == 282) {
     return 793;
    }
if (index == 283) {
     return 792;
    }
if (index == 284) {
     return 799;
    }
if (index == 285) {
     return 769;
    }
if (index == 286) {
     return 750;
    }
if (index == 287) {
     return 761;
    }
if (index == 288) {
     return 776;
    }
if (index == 289) {
     return 768;
    }
if (index == 290) {
     return 775;
    }
if (index == 291) {
     return 787;
    }
if (index == 292) {
     return 779;
    }
if (index == 293) {
     return 773;
    }
if (index == 294) {
     return 764;
    }
if (index == 295) {
     return 766;
    }
if (index == 296) {
     return 779;
    }
if (index == 297) {
     return 776;
    }
if (index == 298) {
     return 776;
    }
if (index == 299) {
     return 758;
    }
if (index == 300) {
     return 781;
    }
if (index == 301) {
     return 778;
    }
if (index == 302) {
     return 791;
    }
if (index == 303) {
     return 784;
    }
if (index == 304) {
     return 802;
    }
if (index == 305) {
     return 803;
    }
if (index == 306) {
     return 776;
    }
if (index == 307) {
     return 813;
    }
if (index == 308) {
     return 800;
    }
if (index == 309) {
     return 835;
    }
if (index == 310) {
     return 783;
    }
if (index == 311) {
     return 810;
    }
if (index == 312) {
     return 810;
    }
if (index == 313) {
     return 818;
    }
if (index == 314) {
     return 771;
    }
if (index == 315) {
     return 775;
    }
if (index == 316) {
     return 755;
    }
if (index == 317) {
     return 811;
    }
if (index == 318) {
     return 788;
    }
if (index == 319) {
     return 778;
    }
if (index == 320) {
     return 824;
    }
if (index == 321) {
     return 803;
    }
if (index == 322) {
     return 795;
    }
if (index == 323) {
     return 827;
    }
if (index == 324) {
     return 805;
    }
if (index == 325) {
     return 822;
    }
if (index == 326) {
     return 805;
    }
if (index == 327) {
     return 834;
    }
if (index == 328) {
     return 843;
    }
if (index == 329) {
     return 831;
    }
if (index == 330) {
     return 829;
    }
if (index == 331) {
     return 804;
    }
if (index == 332) {
     return 783;
    }
if (index == 333) {
     return 820;
    }
if (index == 334) {
     return 822;
    }
if (index == 335) {
     return 817;
    }
if (index == 336) {
     return 802;
    }
if (index == 337) {
     return 841;
    }
if (index == 338) {
     return 782;
    }
if (index == 339) {
     return 807;
    }
if (index == 340) {
     return 769;
    }
if (index == 341) {
     return 796;
    }
if (index == 342) {
     return 800;
    }
if (index == 343) {
     return 807;
    }
if (index == 344) {
     return 812;
    }
if (index == 345) {
     return 811;
    }
if (index == 346) {
     return 786;
    }
if (index == 347) {
     return 818;
    }
if (index == 348) {
     return 790;
    }
if (index == 349) {
     return 775;
    }
if (index == 350) {
     return 831;
    }
if (index == 351) {
     return 811;
    }
if (index == 352) {
     return 793;
    }
if (index == 353) {
     return 820;
    }
if (index == 354) {
     return 805;
    }
if (index == 355) {
     return 842;
    }
if (index == 356) {
     return 831;
    }
if (index == 357) {
     return 822;
    }
if (index == 358) {
     return 805;
    }
if (index == 359) {
     return 841;
    }
if (index == 360) {
     return 810;
    }
if (index == 361) {
     return 814;
    }
if (index == 362) {
     return 783;
    }
if (index == 363) {
     return 763;
    }
if (index == 364) {
     return 772;
    }
if (index == 365) {
     return 786;
    }
if (index == 366) {
     return 793;
    }
if (index == 367) {
     return 778;
    }
if (index == 368) {
     return 813;
    }
if (index == 369) {
     return 763;
    }
if (index == 370) {
     return 760;
    }
if (index == 371) {
     return 772;
    }
if (index == 372) {
     return 807;
    }
if (index == 373) {
     return 744;
    }
if (index == 374) {
     return 817;
    }
if (index == 375) {
     return 801;
    }
if (index == 376) {
     return 776;
    }
if (index == 377) {
     return 803;
    }
if (index == 378) {
     return 807;
    }
if (index == 379) {
     return 824;
    }
if (index == 380) {
     return 813;
    }
if (index == 381) {
     return 833;
    }
if (index == 382) {
     return 843;
    }
if (index == 383) {
     return 802;
    }
if (index == 384) {
     return 810;
    }
if (index == 385) {
     return 826;
    }
if (index == 386) {
     return 822;
    }
if (index == 387) {
     return 814;
    }
if (index == 388) {
     return 822;
    }
if (index == 389) {
     return 814;
    }
if (index == 390) {
     return 834;
    }
if (index == 391) {
     return 846;
    }
if (index == 392) {
     return 836;
    }
if (index == 393) {
     return 823;
    }
if (index == 394) {
     return 812;
    }
if (index == 395) {
     return 819;
    }
if (index == 396) {
     return 814;
    }
if (index == 397) {
     return 838;
    }
if (index == 398) {
     return 834;
    }
if (index == 399) {
     return 831;
    }
if (index == 400) {
     return 827;
    }
if (index == 401) {
     return 825;
    }
if (index == 402) {
     return 827;
    }
if (index == 403) {
     return 833;
    }
if (index == 404) {
     return 843;
    }
if (index == 405) {
     return 848;
    }
if (index == 406) {
     return 824;
    }
if (index == 407) {
     return 852;
    }
if (index == 408) {
     return 858;
    }
if (index == 409) {
     return 850;
    }
if (index == 410) {
     return 824;
    }
if (index == 411) {
     return 924;
    }
if (index == 412) {
     return 812;
    }
if (index == 413) {
     return 838;
    }
if (index == 414) {
     return 924;
    }
if (index == 415) {
     return 924;
    }
if (index == 416) {
     return 842;
    }
if (index == 417) {
     return 836;
    }
if (index == 418) {
     return 829;
    }
if (index == 419) {
     return 817;
    }
if (index == 420) {
     return 846;
    }
if (index == 421) {
     return 842;
    }
if (index == 422) {
     return 831;
    }
if (index == 423) {
     return 834;
    }
if (index == 424) {
     return 833;
    }
if (index == 425) {
     return 879;
    }
if (index == 426) {
     return 850;
    }
if (index == 427) {
     return 865;
    }
if (index == 428) {
     return 841;
    }
if (index == 429) {
     return 864;
    }
if (index == 430) {
     return 843;
    }
if (index == 431) {
     return 872;
    }
if (index == 432) {
     return 855;
    }
if (index == 433) {
     return 857;
    }
if (index == 434) {
     return 846;
    }
if (index == 435) {
     return 924;
    }
if (index == 436) {
     return 843;
    }
if (index == 437) {
     return 924;
    }
if (index == 438) {
     return 824;
    }
if (index == 439) {
     return 838;
    }
if (index == 440) {
     return 860;
    }
if (index == 441) {
     return 869;
    }
if (index == 442) {
     return 831;
    }
if (index == 443) {
     return 896;
    }
if (index == 444) {
     return 848;
    }
if (index == 445) {
     return 857;
    }
if (index == 446) {
     return 838;
    }
if (index == 447) {
     return 849;
    }
if (index == 448) {
     return 869;
    }
if (index == 449) {
     return 859;
    }
if (index == 450) {
     return 840;
    }
if (index == 451) {
     return 924;
    }
if (index == 452) {
     return 875;
    }
if (index == 453) {
     return 849;
    }
if (index == 454) {
     return 862;
    }
if (index == 455) {
     return 867;
    }
if (index == 456) {
     return 836;
    }
if (index == 457) {
     return 829;
    }
if (index == 458) {
     return 857;
    }
if (index == 459) {
     return 832;
    }
if (index == 460) {
     return 824;
    }
if (index == 461) {
     return 829;
    }
if (index == 462) {
     return 844;
    }
if (index == 463) {
     return 876;
    }
if (index == 464) {
     return 862;
    }
if (index == 465) {
     return 854;
    }
if (index == 466) {
     return 843;
    }
if (index == 467) {
     return 869;
    }
if (index == 468) {
     return 838;
    }
if (index == 469) {
     return 871;
    }
if (index == 470) {
     return 831;
    }
if (index == 471) {
     return 811;
    }
if (index == 472) {
     return 836;
    }
if (index == 473) {
     return 853;
    }
if (index == 474) {
     return 865;
    }
if (index == 475) {
     return 826;
    }
if (index == 476) {
     return 829;
    }
if (index == 477) {
     return 846;
    }
if (index == 478) {
     return 813;
    }
if (index == 479) {
     return 842;
    }
if (index == 480) {
     return 815;
    }
if (index == 481) {
     return 842;
    }
if (index == 482) {
     return 827;
    }
if (index == 483) {
     return 812;
    }
if (index == 484) {
     return 953;
    }
if (index == 485) {
     return 907;
    }
if (index == 486) {
     return 909;
    }
if (index == 487) {
     return 986;
    }
if (index == 488) {
     return 827;
    }
if (index == 489) {
     return 867;
    }
if (index == 490) {
     return 915;
    }
if (index == 491) {
     return 986;
    }
if (index == 492) {
     return 890;
    }
if (index == 493) {
     return 924;
    }
if (index == 494) {
     return 986;
    }
if (index == 495) {
     return 1993;
    }
if (index == 496) {
     return 1196;
    }
if (index == 497) {
     return 1155;
    }
if (index > 497) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1627;
    }
if (index == 1) {
     return 1575;
    }
if (index == 2) {
     return 1544;
    }
if (index == 3) {
     return 1565;
    }
if (index == 4) {
     return 1572;
    }
if (index == 5) {
     return 1561;
    }
if (index == 6) {
     return 1564;
    }
if (index == 7) {
     return 1580;
    }
if (index == 8) {
     return 1563;
    }
if (index == 9) {
     return 1548;
    }
if (index == 10) {
     return 1555;
    }
if (index == 11) {
     return 1519;
    }
if (index == 12) {
     return 1526;
    }
if (index == 13) {
     return 1520;
    }
if (index == 14) {
     return 1518;
    }
if (index == 15) {
     return 1524;
    }
if (index == 16) {
     return 1520;
    }
if (index == 17) {
     return 1513;
    }
if (index == 18) {
     return 1513;
    }
if (index == 19) {
     return 1513;
    }
if (index == 20) {
     return 1520;
    }
if (index == 21) {
     return 1522;
    }
if (index == 22) {
     return 1534;
    }
if (index == 23) {
     return 1513;
    }
if (index == 24) {
     return 1511;
    }
if (index == 25) {
     return 1477;
    }
if (index == 26) {
     return 1511;
    }
if (index == 27) {
     return 1511;
    }
if (index == 28) {
     return 1526;
    }
if (index == 29) {
     return 1513;
    }
if (index == 30) {
     return 1513;
    }
if (index == 31) {
     return 1542;
    }
if (index == 32) {
     return 1542;
    }
if (index == 33) {
     return 1521;
    }
if (index == 34) {
     return 1513;
    }
if (index == 35) {
     return 1513;
    }
if (index == 36) {
     return 1511;
    }
if (index == 37) {
     return 1513;
    }
if (index == 38) {
     return 1513;
    }
if (index == 39) {
     return 1511;
    }
if (index == 40) {
     return 1541;
    }
if (index == 41) {
     return 1524;
    }
if (index == 42) {
     return 1511;
    }
if (index == 43) {
     return 1549;
    }
if (index == 44) {
     return 1513;
    }
if (index == 45) {
     return 1548;
    }
if (index == 46) {
     return 1520;
    }
if (index == 47) {
     return 1538;
    }
if (index == 48) {
     return 1531;
    }
if (index == 49) {
     return 1535;
    }
if (index == 50) {
     return 1530;
    }
if (index == 51) {
     return 1511;
    }
if (index == 52) {
     return 1543;
    }
if (index == 53) {
     return 1527;
    }
if (index == 54) {
     return 1535;
    }
if (index == 55) {
     return 1511;
    }
if (index == 56) {
     return 1575;
    }
if (index == 57) {
     return 1525;
    }
if (index == 58) {
     return 1533;
    }
if (index == 59) {
     return 1548;
    }
if (index == 60) {
     return 1550;
    }
if (index == 61) {
     return 1513;
    }
if (index == 62) {
     return 1525;
    }
if (index == 63) {
     return 1513;
    }
if (index == 64) {
     return 1513;
    }
if (index == 65) {
     return 1511;
    }
if (index == 66) {
     return 1538;
    }
if (index == 67) {
     return 1513;
    }
if (index == 68) {
     return 1538;
    }
if (index == 69) {
     return 1525;
    }
if (index == 70) {
     return 1513;
    }
if (index == 71) {
     return 1525;
    }
if (index == 72) {
     return 1543;
    }
if (index == 73) {
     return 1522;
    }
if (index == 74) {
     return 1519;
    }
if (index == 75) {
     return 1514;
    }
if (index == 76) {
     return 1529;
    }
if (index == 77) {
     return 1517;
    }
if (index == 78) {
     return 1549;
    }
if (index == 79) {
     return 1513;
    }
if (index == 80) {
     return 1513;
    }
if (index == 81) {
     return 1521;
    }
if (index == 82) {
     return 1513;
    }
if (index == 83) {
     return 1544;
    }
if (index == 84) {
     return 1513;
    }
if (index == 85) {
     return 1529;
    }
if (index == 86) {
     return 1533;
    }
if (index == 87) {
     return 1513;
    }
if (index == 88) {
     return 1513;
    }
if (index == 89) {
     return 1530;
    }
if (index == 90) {
     return 1523;
    }
if (index == 91) {
     return 1528;
    }
if (index == 92) {
     return 1516;
    }
if (index == 93) {
     return 1523;
    }
if (index == 94) {
     return 1513;
    }
if (index == 95) {
     return 1537;
    }
if (index == 96) {
     return 1529;
    }
if (index == 97) {
     return 1530;
    }
if (index == 98) {
     return 1525;
    }
if (index == 99) {
     return 1513;
    }
if (index == 100) {
     return 1511;
    }
if (index == 101) {
     return 1520;
    }
if (index == 102) {
     return 1534;
    }
if (index == 103) {
     return 1513;
    }
if (index == 104) {
     return 1545;
    }
if (index == 105) {
     return 1516;
    }
if (index == 106) {
     return 1513;
    }
if (index == 107) {
     return 1525;
    }
if (index == 108) {
     return 1513;
    }
if (index == 109) {
     return 1521;
    }
if (index == 110) {
     return 1513;
    }
if (index == 111) {
     return 1530;
    }
if (index == 112) {
     return 1533;
    }
if (index == 113) {
     return 1513;
    }
if (index == 114) {
     return 1531;
    }
if (index == 115) {
     return 1531;
    }
if (index == 116) {
     return 1513;
    }
if (index == 117) {
     return 1524;
    }
if (index == 118) {
     return 1511;
    }
if (index == 119) {
     return 1527;
    }
if (index == 120) {
     return 1518;
    }
if (index == 121) {
     return 1528;
    }
if (index == 122) {
     return 1511;
    }
if (index == 123) {
     return 1513;
    }
if (index == 124) {
     return 1529;
    }
if (index == 125) {
     return 1523;
    }
if (index == 126) {
     return 1513;
    }
if (index == 127) {
     return 1528;
    }
if (index == 128) {
     return 1532;
    }
if (index == 129) {
     return 1513;
    }
if (index == 130) {
     return 1511;
    }
if (index == 131) {
     return 1524;
    }
if (index == 132) {
     return 1551;
    }
if (index == 133) {
     return 1523;
    }
if (index == 134) {
     return 1513;
    }
if (index == 135) {
     return 1482;
    }
if (index == 136) {
     return 1477;
    }
if (index == 137) {
     return 1528;
    }
if (index == 138) {
     return 1529;
    }
if (index == 139) {
     return 1518;
    }
if (index == 140) {
     return 1530;
    }
if (index == 141) {
     return 1513;
    }
if (index == 142) {
     return 1533;
    }
if (index == 143) {
     return 1511;
    }
if (index == 144) {
     return 1540;
    }
if (index == 145) {
     return 1548;
    }
if (index == 146) {
     return 1528;
    }
if (index == 147) {
     return 1546;
    }
if (index == 148) {
     return 1539;
    }
if (index == 149) {
     return 1526;
    }
if (index == 150) {
     return 1513;
    }
if (index == 151) {
     return 1524;
    }
if (index == 152) {
     return 1511;
    }
if (index == 153) {
     return 1533;
    }
if (index == 154) {
     return 1513;
    }
if (index == 155) {
     return 1537;
    }
if (index == 156) {
     return 1513;
    }
if (index == 157) {
     return 1527;
    }
if (index == 158) {
     return 1520;
    }
if (index == 159) {
     return 1530;
    }
if (index == 160) {
     return 1503;
    }
if (index == 161) {
     return 1532;
    }
if (index == 162) {
     return 1501;
    }
if (index == 163) {
     return 1514;
    }
if (index == 164) {
     return 1506;
    }
if (index == 165) {
     return 1524;
    }
if (index == 166) {
     return 1511;
    }
if (index == 167) {
     return 1509;
    }
if (index == 168) {
     return 1513;
    }
if (index == 169) {
     return 1509;
    }
if (index == 170) {
     return 1514;
    }
if (index == 171) {
     return 1513;
    }
if (index == 172) {
     return 1509;
    }
if (index == 173) {
     return 1513;
    }
if (index == 174) {
     return 1530;
    }
if (index == 175) {
     return 1518;
    }
if (index == 176) {
     return 1511;
    }
if (index == 177) {
     return 1517;
    }
if (index == 178) {
     return 1529;
    }
if (index == 179) {
     return 1521;
    }
if (index == 180) {
     return 1517;
    }
if (index == 181) {
     return 1530;
    }
if (index == 182) {
     return 1513;
    }
if (index == 183) {
     return 1524;
    }
if (index == 184) {
     return 1492;
    }
if (index == 185) {
     return 1554;
    }
if (index == 186) {
     return 1505;
    }
if (index == 187) {
     return 1519;
    }
if (index == 188) {
     return 1487;
    }
if (index == 189) {
     return 1485;
    }
if (index == 190) {
     return 1470;
    }
if (index == 191) {
     return 1518;
    }
if (index == 192) {
     return 1513;
    }
if (index == 193) {
     return 1520;
    }
if (index == 194) {
     return 1524;
    }
if (index == 195) {
     return 1512;
    }
if (index == 196) {
     return 1487;
    }
if (index == 197) {
     return 1515;
    }
if (index == 198) {
     return 1485;
    }
if (index == 199) {
     return 1508;
    }
if (index == 200) {
     return 1487;
    }
if (index == 201) {
     return 1513;
    }
if (index == 202) {
     return 1514;
    }
if (index == 203) {
     return 1528;
    }
if (index == 204) {
     return 1502;
    }
if (index == 205) {
     return 1537;
    }
if (index == 206) {
     return 1487;
    }
if (index == 207) {
     return 1535;
    }
if (index == 208) {
     return 1483;
    }
if (index == 209) {
     return 1467;
    }
if (index == 210) {
     return 1469;
    }
if (index == 211) {
     return 1518;
    }
if (index == 212) {
     return 1498;
    }
if (index == 213) {
     return 1507;
    }
if (index == 214) {
     return 1497;
    }
if (index == 215) {
     return 1497;
    }
if (index == 216) {
     return 1487;
    }
if (index == 217) {
     return 1496;
    }
if (index == 218) {
     return 1509;
    }
if (index == 219) {
     return 1515;
    }
if (index == 220) {
     return 1506;
    }
if (index == 221) {
     return 1518;
    }
if (index == 222) {
     return 1502;
    }
if (index == 223) {
     return 1496;
    }
if (index == 224) {
     return 1506;
    }
if (index == 225) {
     return 1506;
    }
if (index == 226) {
     return 1501;
    }
if (index == 227) {
     return 1522;
    }
if (index == 228) {
     return 1487;
    }
if (index == 229) {
     return 1496;
    }
if (index == 230) {
     return 1524;
    }
if (index == 231) {
     return 1492;
    }
if (index == 232) {
     return 1456;
    }
if (index == 233) {
     return 1492;
    }
if (index == 234) {
     return 1453;
    }
if (index == 235) {
     return 1483;
    }
if (index == 236) {
     return 1456;
    }
if (index == 237) {
     return 1473;
    }
if (index == 238) {
     return 1469;
    }
if (index == 239) {
     return 1494;
    }
if (index == 240) {
     return 1483;
    }
if (index == 241) {
     return 1459;
    }
if (index == 242) {
     return 1466;
    }
if (index == 243) {
     return 1468;
    }
if (index == 244) {
     return 1466;
    }
if (index == 245) {
     return 1501;
    }
if (index == 246) {
     return 1478;
    }
if (index == 247) {
     return 1506;
    }
if (index == 248) {
     return 1485;
    }
if (index == 249) {
     return 1506;
    }
if (index == 250) {
     return 1491;
    }
if (index == 251) {
     return 1497;
    }
if (index == 252) {
     return 1522;
    }
if (index == 253) {
     return 1535;
    }
if (index == 254) {
     return 1527;
    }
if (index == 255) {
     return 1523;
    }
if (index == 256) {
     return 1505;
    }
if (index == 257) {
     return 1501;
    }
if (index == 258) {
     return 1514;
    }
if (index == 259) {
     return 1517;
    }
if (index == 260) {
     return 1513;
    }
if (index == 261) {
     return 1514;
    }
if (index == 262) {
     return 1492;
    }
if (index == 263) {
     return 1504;
    }
if (index == 264) {
     return 1488;
    }
if (index == 265) {
     return 1482;
    }
if (index == 266) {
     return 1482;
    }
if (index == 267) {
     return 1512;
    }
if (index == 268) {
     return 1454;
    }
if (index == 269) {
     return 1486;
    }
if (index == 270) {
     return 1466;
    }
if (index == 271) {
     return 1498;
    }
if (index == 272) {
     return 1452;
    }
if (index == 273) {
     return 1477;
    }
if (index == 274) {
     return 1473;
    }
if (index == 275) {
     return 1468;
    }
if (index == 276) {
     return 1470;
    }
if (index == 277) {
     return 1472;
    }
if (index == 278) {
     return 1444;
    }
if (index == 279) {
     return 1484;
    }
if (index == 280) {
     return 1454;
    }
if (index == 281) {
     return 1474;
    }
if (index == 282) {
     return 1465;
    }
if (index == 283) {
     return 1463;
    }
if (index == 284) {
     return 1465;
    }
if (index == 285) {
     return 1470;
    }
if (index == 286) {
     return 1459;
    }
if (index == 287) {
     return 1470;
    }
if (index == 288) {
     return 1449;
    }
if (index == 289) {
     return 1453;
    }
if (index == 290) {
     return 1464;
    }
if (index == 291) {
     return 1451;
    }
if (index == 292) {
     return 1463;
    }
if (index == 293) {
     return 1492;
    }
if (index == 294) {
     return 1454;
    }
if (index == 295) {
     return 1496;
    }
if (index == 296) {
     return 1487;
    }
if (index == 297) {
     return 1530;
    }
if (index == 298) {
     return 1485;
    }
if (index == 299) {
     return 1496;
    }
if (index == 300) {
     return 1483;
    }
if (index == 301) {
     return 1514;
    }
if (index == 302) {
     return 1487;
    }
if (index == 303) {
     return 1514;
    }
if (index == 304) {
     return 1487;
    }
if (index == 305) {
     return 1508;
    }
if (index == 306) {
     return 1485;
    }
if (index == 307) {
     return 1509;
    }
if (index == 308) {
     return 1485;
    }
if (index == 309) {
     return 1511;
    }
if (index == 310) {
     return 1485;
    }
if (index == 311) {
     return 1503;
    }
if (index == 312) {
     return 1487;
    }
if (index == 313) {
     return 1516;
    }
if (index == 314) {
     return 1485;
    }
if (index == 315) {
     return 1496;
    }
if (index == 316) {
     return 1480;
    }
if (index == 317) {
     return 1505;
    }
if (index == 318) {
     return 1485;
    }
if (index == 319) {
     return 1494;
    }
if (index == 320) {
     return 1485;
    }
if (index == 321) {
     return 1522;
    }
if (index == 322) {
     return 1487;
    }
if (index == 323) {
     return 1505;
    }
if (index == 324) {
     return 1485;
    }
if (index == 325) {
     return 1508;
    }
if (index == 326) {
     return 1485;
    }
if (index == 327) {
     return 1523;
    }
if (index == 328) {
     return 1483;
    }
if (index == 329) {
     return 1538;
    }
if (index == 330) {
     return 1485;
    }
if (index == 331) {
     return 1526;
    }
if (index == 332) {
     return 1476;
    }
if (index == 333) {
     return 1530;
    }
if (index == 334) {
     return 1487;
    }
if (index == 335) {
     return 1520;
    }
if (index == 336) {
     return 1459;
    }
if (index == 337) {
     return 1534;
    }
if (index == 338) {
     return 1464;
    }
if (index == 339) {
     return 1531;
    }
if (index == 340) {
     return 1452;
    }
if (index == 341) {
     return 1534;
    }
if (index == 342) {
     return 1440;
    }
if (index == 343) {
     return 1529;
    }
if (index == 344) {
     return 1442;
    }
if (index == 345) {
     return 1518;
    }
if (index == 346) {
     return 1449;
    }
if (index == 347) {
     return 1529;
    }
if (index == 348) {
     return 1418;
    }
if (index == 349) {
     return 1493;
    }
if (index == 350) {
     return 1440;
    }
if (index == 351) {
     return 1504;
    }
if (index == 352) {
     return 1456;
    }
if (index == 353) {
     return 1508;
    }
if (index == 354) {
     return 1454;
    }
if (index == 355) {
     return 1497;
    }
if (index == 356) {
     return 1447;
    }
if (index == 357) {
     return 1514;
    }
if (index == 358) {
     return 1452;
    }
if (index == 359) {
     return 1506;
    }
if (index == 360) {
     return 1437;
    }
if (index == 361) {
     return 1484;
    }
if (index == 362) {
     return 1454;
    }
if (index == 363) {
     return 1494;
    }
if (index == 364) {
     return 1492;
    }
if (index == 365) {
     return 1510;
    }
if (index == 366) {
     return 1432;
    }
if (index == 367) {
     return 1492;
    }
if (index == 368) {
     return 1476;
    }
if (index == 369) {
     return 1494;
    }
if (index == 370) {
     return 1461;
    }
if (index == 371) {
     return 1503;
    }
if (index == 372) {
     return 1471;
    }
if (index == 373) {
     return 1494;
    }
if (index == 374) {
     return 1464;
    }
if (index == 375) {
     return 1507;
    }
if (index == 376) {
     return 1495;
    }
if (index == 377) {
     return 1499;
    }
if (index == 378) {
     return 1499;
    }
if (index == 379) {
     return 1510;
    }
if (index == 380) {
     return 1500;
    }
if (index == 381) {
     return 1505;
    }
if (index == 382) {
     return 1488;
    }
if (index == 383) {
     return 1493;
    }
if (index == 384) {
     return 1483;
    }
if (index == 385) {
     return 1511;
    }
if (index == 386) {
     return 1485;
    }
if (index == 387) {
     return 1493;
    }
if (index == 388) {
     return 1492;
    }
if (index == 389) {
     return 1496;
    }
if (index == 390) {
     return 1487;
    }
if (index == 391) {
     return 1496;
    }
if (index == 392) {
     return 1485;
    }
if (index == 393) {
     return 1502;
    }
if (index == 394) {
     return 1483;
    }
if (index == 395) {
     return 1493;
    }
if (index == 396) {
     return 1485;
    }
if (index == 397) {
     return 1493;
    }
if (index == 398) {
     return 1486;
    }
if (index == 399) {
     return 1495;
    }
if (index == 400) {
     return 1497;
    }
if (index == 401) {
     return 1498;
    }
if (index == 402) {
     return 1485;
    }
if (index == 403) {
     return 1495;
    }
if (index == 404) {
     return 1485;
    }
if (index == 405) {
     return 1501;
    }
if (index == 406) {
     return 1487;
    }
if (index == 407) {
     return 1495;
    }
if (index == 408) {
     return 1485;
    }
if (index == 409) {
     return 1510;
    }
if (index == 410) {
     return 1487;
    }
if (index == 411) {
     return 1495;
    }
if (index == 412) {
     return 1485;
    }
if (index == 413) {
     return 1503;
    }
if (index == 414) {
     return 1487;
    }
if (index == 415) {
     return 1495;
    }
if (index == 416) {
     return 1498;
    }
if (index == 417) {
     return 1495;
    }
if (index == 418) {
     return 1487;
    }
if (index == 419) {
     return 1506;
    }
if (index == 420) {
     return 1485;
    }
if (index == 421) {
     return 1512;
    }
if (index == 422) {
     return 1487;
    }
if (index == 423) {
     return 1499;
    }
if (index == 424) {
     return 1493;
    }
if (index == 425) {
     return 1495;
    }
if (index == 426) {
     return 1485;
    }
if (index == 427) {
     return 1493;
    }
if (index == 428) {
     return 1485;
    }
if (index == 429) {
     return 1493;
    }
if (index == 430) {
     return 1487;
    }
if (index == 431) {
     return 1493;
    }
if (index == 432) {
     return 1485;
    }
if (index == 433) {
     return 1491;
    }
if (index == 434) {
     return 1487;
    }
if (index == 435) {
     return 1495;
    }
if (index == 436) {
     return 1487;
    }
if (index == 437) {
     return 1495;
    }
if (index == 438) {
     return 1483;
    }
if (index == 439) {
     return 1495;
    }
if (index == 440) {
     return 1494;
    }
if (index == 441) {
     return 1519;
    }
if (index == 442) {
     return 1485;
    }
if (index == 443) {
     return 1503;
    }
if (index == 444) {
     return 1487;
    }
if (index == 445) {
     return 1502;
    }
if (index == 446) {
     return 1487;
    }
if (index == 447) {
     return 1504;
    }
if (index == 448) {
     return 1506;
    }
if (index == 449) {
     return 1513;
    }
if (index == 450) {
     return 1492;
    }
if (index == 451) {
     return 1495;
    }
if (index == 452) {
     return 1503;
    }
if (index == 453) {
     return 1501;
    }
if (index == 454) {
     return 1487;
    }
if (index == 455) {
     return 1428;
    }
if (index == 456) {
     return 1464;
    }
if (index == 457) {
     return 1490;
    }
if (index == 458) {
     return 1477;
    }
if (index == 459) {
     return 1479;
    }
if (index == 460) {
     return 1456;
    }
if (index == 461) {
     return 1484;
    }
if (index == 462) {
     return 1503;
    }
if (index == 463) {
     return 1468;
    }
if (index == 464) {
     return 1447;
    }
if (index == 465) {
     return 1462;
    }
if (index == 466) {
     return 1454;
    }
if (index == 467) {
     return 1471;
    }
if (index == 468) {
     return 1456;
    }
if (index == 469) {
     return 1468;
    }
if (index == 470) {
     return 1449;
    }
if (index == 471) {
     return 1480;
    }
if (index == 472) {
     return 1442;
    }
if (index == 473) {
     return 1460;
    }
if (index == 474) {
     return 1445;
    }
if (index == 475) {
     return 1454;
    }
if (index == 476) {
     return 1423;
    }
if (index == 477) {
     return 1460;
    }
if (index == 478) {
     return 1442;
    }
if (index == 479) {
     return 1449;
    }
if (index == 480) {
     return 1408;
    }
if (index == 481) {
     return 1449;
    }
if (index == 482) {
     return 1426;
    }
if (index == 483) {
     return 1452;
    }
if (index == 484) {
     return 1491;
    }
if (index == 485) {
     return 1496;
    }
if (index == 486) {
     return 1455;
    }
if (index == 487) {
     return 1548;
    }
if (index == 488) {
     return 1538;
    }
if (index == 489) {
     return 1496;
    }
if (index == 490) {
     return 1516;
    }
if (index == 491) {
     return 1548;
    }
if (index == 492) {
     return 1431;
    }
if (index == 493) {
     return 1548;
    }
if (index == 494) {
     return 1556;
    }
if (index == 495) {
     return 1366;
    }
if (index == 496) {
     return 1072;
    }
if (index == 497) {
     return 1662;
    }
if (index > 497) {
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
    var url = '/fedora/get/seapage:285_' + imgStr + '/digitalImage';
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
br.numLeafs = 498;

// Book title and the URL used for the book title link
br.bookTitle= "A report on the expedition to western Yunan via Bhamo";
br.bookAuthor= "Anderson, John";
br.bookPub= "Calcutta: Office of the Superintendent of Government Printing, 1871";
br.bookKeyword= "Yunnan Sheng (China)--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Irrawaddy River (Burma)";
br.bookUrl  = '/catalog/sea:285';

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
