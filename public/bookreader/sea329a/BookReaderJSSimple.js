//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 958;
    }
if (index == 1) {
     return 839;
    }
if (index == 2) {
     return 832;
    }
if (index == 3) {
     return 889;
    }
if (index == 4) {
     return 888;
    }
if (index == 5) {
     return 843;
    }
if (index == 6) {
     return 849;
    }
if (index == 7) {
     return 749;
    }
if (index == 8) {
     return 778;
    }
if (index == 9) {
     return 889;
    }
if (index == 10) {
     return 850;
    }
if (index == 11) {
     return 889;
    }
if (index == 12) {
     return 782;
    }
if (index == 13) {
     return 740;
    }
if (index == 14) {
     return 760;
    }
if (index == 15) {
     return 769;
    }
if (index == 16) {
     return 743;
    }
if (index == 17) {
     return 760;
    }
if (index == 18) {
     return 788;
    }
if (index == 19) {
     return 767;
    }
if (index == 20) {
     return 766;
    }
if (index == 21) {
     return 760;
    }
if (index == 22) {
     return 743;
    }
if (index == 23) {
     return 766;
    }
if (index == 24) {
     return 745;
    }
if (index == 25) {
     return 889;
    }
if (index == 26) {
     return 747;
    }
if (index == 27) {
     return 786;
    }
if (index == 28) {
     return 739;
    }
if (index == 29) {
     return 722;
    }
if (index == 30) {
     return 726;
    }
if (index == 31) {
     return 723;
    }
if (index == 32) {
     return 726;
    }
if (index == 33) {
     return 736;
    }
if (index == 34) {
     return 1109;
    }
if (index == 35) {
     return 801;
    }
if (index == 36) {
     return 745;
    }
if (index == 37) {
     return 766;
    }
if (index == 38) {
     return 1066;
    }
if (index == 39) {
     return 749;
    }
if (index == 40) {
     return 735;
    }
if (index == 41) {
     return 750;
    }
if (index == 42) {
     return 763;
    }
if (index == 43) {
     return 773;
    }
if (index == 44) {
     return 740;
    }
if (index == 45) {
     return 734;
    }
if (index == 46) {
     return 709;
    }
if (index == 47) {
     return 741;
    }
if (index == 48) {
     return 763;
    }
if (index == 49) {
     return 771;
    }
if (index == 50) {
     return 735;
    }
if (index == 51) {
     return 726;
    }
if (index == 52) {
     return 713;
    }
if (index == 53) {
     return 721;
    }
if (index == 54) {
     return 726;
    }
if (index == 55) {
     return 855;
    }
if (index == 56) {
     return 748;
    }
if (index == 57) {
     return 713;
    }
if (index == 58) {
     return 790;
    }
if (index == 59) {
     return 739;
    }
if (index == 60) {
     return 731;
    }
if (index == 61) {
     return 704;
    }
if (index == 62) {
     return 700;
    }
if (index == 63) {
     return 679;
    }
if (index == 64) {
     return 731;
    }
if (index == 65) {
     return 682;
    }
if (index == 66) {
     return 732;
    }
if (index == 67) {
     return 743;
    }
if (index == 68) {
     return 716;
    }
if (index == 69) {
     return 709;
    }
if (index == 70) {
     return 711;
    }
if (index == 71) {
     return 693;
    }
if (index == 72) {
     return 688;
    }
if (index == 73) {
     return 707;
    }
if (index == 74) {
     return 821;
    }
if (index == 75) {
     return 771;
    }
if (index == 76) {
     return 722;
    }
if (index == 77) {
     return 738;
    }
if (index == 78) {
     return 709;
    }
if (index == 79) {
     return 718;
    }
if (index == 80) {
     return 840;
    }
if (index == 81) {
     return 855;
    }
if (index == 82) {
     return 760;
    }
if (index == 83) {
     return 702;
    }
if (index == 84) {
     return 736;
    }
if (index == 85) {
     return 737;
    }
if (index == 86) {
     return 754;
    }
if (index == 87) {
     return 906;
    }
if (index == 88) {
     return 896;
    }
if (index == 89) {
     return 722;
    }
if (index == 90) {
     return 748;
    }
if (index == 91) {
     return 753;
    }
if (index == 92) {
     return 766;
    }
if (index == 93) {
     return 745;
    }
if (index == 94) {
     return 729;
    }
if (index == 95) {
     return 749;
    }
if (index == 96) {
     return 759;
    }
if (index == 97) {
     return 775;
    }
if (index == 98) {
     return 764;
    }
if (index == 99) {
     return 765;
    }
if (index == 100) {
     return 727;
    }
if (index == 101) {
     return 777;
    }
if (index == 102) {
     return 739;
    }
if (index == 103) {
     return 785;
    }
if (index == 104) {
     return 744;
    }
if (index == 105) {
     return 765;
    }
if (index == 106) {
     return 746;
    }
if (index == 107) {
     return 767;
    }
if (index == 108) {
     return 1041;
    }
if (index == 109) {
     return 879;
    }
if (index == 110) {
     return 742;
    }
if (index == 111) {
     return 743;
    }
if (index == 112) {
     return 773;
    }
if (index == 113) {
     return 736;
    }
if (index == 114) {
     return 746;
    }
if (index == 115) {
     return 759;
    }
if (index == 116) {
     return 737;
    }
if (index == 117) {
     return 756;
    }
if (index == 118) {
     return 749;
    }
if (index == 119) {
     return 764;
    }
if (index == 120) {
     return 768;
    }
if (index == 121) {
     return 776;
    }
if (index == 122) {
     return 747;
    }
if (index == 123) {
     return 777;
    }
if (index == 124) {
     return 748;
    }
if (index == 125) {
     return 748;
    }
if (index == 126) {
     return 751;
    }
if (index == 127) {
     return 771;
    }
if (index == 128) {
     return 748;
    }
if (index == 129) {
     return 763;
    }
if (index == 130) {
     return 1121;
    }
if (index == 131) {
     return 775;
    }
if (index == 132) {
     return 770;
    }
if (index == 133) {
     return 879;
    }
if (index == 134) {
     return 786;
    }
if (index == 135) {
     return 757;
    }
if (index == 136) {
     return 763;
    }
if (index == 137) {
     return 879;
    }
if (index == 138) {
     return 738;
    }
if (index == 139) {
     return 753;
    }
if (index == 140) {
     return 1097;
    }
if (index == 141) {
     return 879;
    }
if (index == 142) {
     return 748;
    }
if (index == 143) {
     return 763;
    }
if (index == 144) {
     return 757;
    }
if (index == 145) {
     return 879;
    }
if (index == 146) {
     return 731;
    }
if (index == 147) {
     return 785;
    }
if (index == 148) {
     return 788;
    }
if (index == 149) {
     return 879;
    }
if (index == 150) {
     return 737;
    }
if (index == 151) {
     return 758;
    }
if (index == 152) {
     return 771;
    }
if (index == 153) {
     return 879;
    }
if (index == 154) {
     return 734;
    }
if (index == 155) {
     return 786;
    }
if (index == 156) {
     return 757;
    }
if (index == 157) {
     return 879;
    }
if (index == 158) {
     return 755;
    }
if (index == 159) {
     return 759;
    }
if (index == 160) {
     return 779;
    }
if (index == 161) {
     return 879;
    }
if (index == 162) {
     return 755;
    }
if (index == 163) {
     return 775;
    }
if (index == 164) {
     return 796;
    }
if (index == 165) {
     return 879;
    }
if (index == 166) {
     return 751;
    }
if (index == 167) {
     return 738;
    }
if (index == 168) {
     return 747;
    }
if (index == 169) {
     return 879;
    }
if (index == 170) {
     return 777;
    }
if (index == 171) {
     return 767;
    }
if (index == 172) {
     return 1098;
    }
if (index == 173) {
     return 879;
    }
if (index == 174) {
     return 755;
    }
if (index == 175) {
     return 761;
    }
if (index == 176) {
     return 736;
    }
if (index == 177) {
     return 796;
    }
if (index == 178) {
     return 859;
    }
if (index == 179) {
     return 879;
    }
if (index == 180) {
     return 785;
    }
if (index == 181) {
     return 762;
    }
if (index == 182) {
     return 1107;
    }
if (index == 183) {
     return 879;
    }
if (index == 184) {
     return 794;
    }
if (index == 185) {
     return 776;
    }
if (index == 186) {
     return 1113;
    }
if (index == 187) {
     return 879;
    }
if (index == 188) {
     return 748;
    }
if (index == 189) {
     return 789;
    }
if (index == 190) {
     return 748;
    }
if (index == 191) {
     return 756;
    }
if (index == 192) {
     return 772;
    }
if (index == 193) {
     return 874;
    }
if (index == 194) {
     return 1104;
    }
if (index == 195) {
     return 879;
    }
if (index == 196) {
     return 735;
    }
if (index == 197) {
     return 772;
    }
if (index == 198) {
     return 761;
    }
if (index == 199) {
     return 756;
    }
if (index == 200) {
     return 769;
    }
if (index == 201) {
     return 752;
    }
if (index == 202) {
     return 1110;
    }
if (index == 203) {
     return 879;
    }
if (index == 204) {
     return 755;
    }
if (index == 205) {
     return 778;
    }
if (index == 206) {
     return 1115;
    }
if (index == 207) {
     return 879;
    }
if (index == 208) {
     return 742;
    }
if (index == 209) {
     return 786;
    }
if (index == 210) {
     return 757;
    }
if (index == 211) {
     return 748;
    }
if (index == 212) {
     return 755;
    }
if (index == 213) {
     return 754;
    }
if (index == 214) {
     return 736;
    }
if (index == 215) {
     return 734;
    }
if (index == 216) {
     return 765;
    }
if (index == 217) {
     return 745;
    }
if (index == 218) {
     return 755;
    }
if (index == 219) {
     return 748;
    }
if (index == 220) {
     return 748;
    }
if (index == 221) {
     return 789;
    }
if (index == 222) {
     return 745;
    }
if (index == 223) {
     return 759;
    }
if (index == 224) {
     return 1077;
    }
if (index == 225) {
     return 879;
    }
if (index == 226) {
     return 759;
    }
if (index == 227) {
     return 761;
    }
if (index == 228) {
     return 743;
    }
if (index == 229) {
     return 776;
    }
if (index == 230) {
     return 773;
    }
if (index == 231) {
     return 879;
    }
if (index == 232) {
     return 738;
    }
if (index == 233) {
     return 747;
    }
if (index == 234) {
     return 1128;
    }
if (index == 235) {
     return 879;
    }
if (index == 236) {
     return 1114;
    }
if (index == 237) {
     return 879;
    }
if (index == 238) {
     return 777;
    }
if (index == 239) {
     return 765;
    }
if (index == 240) {
     return 1126;
    }
if (index == 241) {
     return 879;
    }
if (index == 242) {
     return 747;
    }
if (index == 243) {
     return 743;
    }
if (index == 244) {
     return 897;
    }
if (index == 245) {
     return 739;
    }
if (index == 246) {
     return 727;
    }
if (index == 247) {
     return 732;
    }
if (index == 248) {
     return 1055;
    }
if (index == 249) {
     return 879;
    }
if (index == 250) {
     return 758;
    }
if (index == 251) {
     return 748;
    }
if (index == 252) {
     return 727;
    }
if (index == 253) {
     return 765;
    }
if (index == 254) {
     return 757;
    }
if (index == 255) {
     return 750;
    }
if (index == 256) {
     return 730;
    }
if (index == 257) {
     return 780;
    }
if (index == 258) {
     return 747;
    }
if (index == 259) {
     return 879;
    }
if (index == 260) {
     return 831;
    }
if (index == 261) {
     return 836;
    }
if (index == 262) {
     return 779;
    }
if (index == 263) {
     return 736;
    }
if (index == 264) {
     return 779;
    }
if (index == 265) {
     return 879;
    }
if (index == 266) {
     return 754;
    }
if (index == 267) {
     return 743;
    }
if (index == 268) {
     return 710;
    }
if (index == 269) {
     return 730;
    }
if (index == 270) {
     return 734;
    }
if (index == 271) {
     return 749;
    }
if (index == 272) {
     return 729;
    }
if (index == 273) {
     return 754;
    }
if (index == 274) {
     return 1093;
    }
if (index == 275) {
     return 879;
    }
if (index == 276) {
     return 735;
    }
if (index == 277) {
     return 745;
    }
if (index == 278) {
     return 1083;
    }
if (index == 279) {
     return 879;
    }
if (index == 280) {
     return 753;
    }
if (index == 281) {
     return 759;
    }
if (index == 282) {
     return 758;
    }
if (index == 283) {
     return 753;
    }
if (index == 284) {
     return 755;
    }
if (index == 285) {
     return 760;
    }
if (index == 286) {
     return 745;
    }
if (index == 287) {
     return 752;
    }
if (index == 288) {
     return 736;
    }
if (index == 289) {
     return 731;
    }
if (index == 290) {
     return 1061;
    }
if (index == 291) {
     return 879;
    }
if (index == 292) {
     return 777;
    }
if (index == 293) {
     return 767;
    }
if (index == 294) {
     return 1074;
    }
if (index == 295) {
     return 879;
    }
if (index == 296) {
     return 729;
    }
if (index == 297) {
     return 724;
    }
if (index == 298) {
     return 745;
    }
if (index == 299) {
     return 751;
    }
if (index == 300) {
     return 744;
    }
if (index == 301) {
     return 736;
    }
if (index == 302) {
     return 749;
    }
if (index == 303) {
     return 745;
    }
if (index == 304) {
     return 1092;
    }
if (index == 305) {
     return 879;
    }
if (index == 306) {
     return 760;
    }
if (index == 307) {
     return 734;
    }
if (index == 308) {
     return 1057;
    }
if (index == 309) {
     return 879;
    }
if (index == 310) {
     return 770;
    }
if (index == 311) {
     return 759;
    }
if (index == 312) {
     return 740;
    }
if (index == 313) {
     return 741;
    }
if (index == 314) {
     return 734;
    }
if (index == 315) {
     return 748;
    }
if (index == 316) {
     return 770;
    }
if (index == 317) {
     return 879;
    }
if (index == 318) {
     return 719;
    }
if (index == 319) {
     return 727;
    }
if (index == 320) {
     return 1077;
    }
if (index == 321) {
     return 879;
    }
if (index == 322) {
     return 739;
    }
if (index == 323) {
     return 696;
    }
if (index == 324) {
     return 754;
    }
if (index == 325) {
     return 720;
    }
if (index == 326) {
     return 731;
    }
if (index == 327) {
     return 746;
    }
if (index == 328) {
     return 724;
    }
if (index == 329) {
     return 722;
    }
if (index == 330) {
     return 718;
    }
if (index == 331) {
     return 729;
    }
if (index == 332) {
     return 728;
    }
if (index == 333) {
     return 698;
    }
if (index == 334) {
     return 731;
    }
if (index == 335) {
     return 718;
    }
if (index == 336) {
     return 737;
    }
if (index == 337) {
     return 755;
    }
if (index == 338) {
     return 1093;
    }
if (index == 339) {
     return 880;
    }
if (index == 340) {
     return 718;
    }
if (index == 341) {
     return 718;
    }
if (index == 342) {
     return 1116;
    }
if (index == 343) {
     return 880;
    }
if (index == 344) {
     return 752;
    }
if (index == 345) {
     return 726;
    }
if (index == 346) {
     return 778;
    }
if (index == 347) {
     return 880;
    }
if (index == 348) {
     return 1077;
    }
if (index == 349) {
     return 880;
    }
if (index == 350) {
     return 739;
    }
if (index == 351) {
     return 732;
    }
if (index == 352) {
     return 729;
    }
if (index == 353) {
     return 740;
    }
if (index == 354) {
     return 1114;
    }
if (index == 355) {
     return 880;
    }
if (index == 356) {
     return 730;
    }
if (index == 357) {
     return 720;
    }
if (index == 358) {
     return 720;
    }
if (index == 359) {
     return 722;
    }
if (index == 360) {
     return 716;
    }
if (index == 361) {
     return 738;
    }
if (index == 362) {
     return 739;
    }
if (index == 363) {
     return 743;
    }
if (index == 364) {
     return 737;
    }
if (index == 365) {
     return 746;
    }
if (index == 366) {
     return 735;
    }
if (index == 367) {
     return 735;
    }
if (index == 368) {
     return 1064;
    }
if (index == 369) {
     return 880;
    }
if (index == 370) {
     return 739;
    }
if (index == 371) {
     return 730;
    }
if (index == 372) {
     return 761;
    }
if (index == 373) {
     return 756;
    }
if (index == 374) {
     return 1069;
    }
if (index == 375) {
     return 880;
    }
if (index == 376) {
     return 727;
    }
if (index == 377) {
     return 757;
    }
if (index == 378) {
     return 737;
    }
if (index == 379) {
     return 730;
    }
if (index == 380) {
     return 1064;
    }
if (index == 381) {
     return 880;
    }
if (index == 382) {
     return 731;
    }
if (index == 383) {
     return 714;
    }
if (index == 384) {
     return 760;
    }
if (index == 385) {
     return 746;
    }
if (index == 386) {
     return 748;
    }
if (index == 387) {
     return 730;
    }
if (index == 388) {
     return 752;
    }
if (index == 389) {
     return 731;
    }
if (index == 390) {
     return 707;
    }
if (index == 391) {
     return 751;
    }
if (index == 392) {
     return 739;
    }
if (index == 393) {
     return 796;
    }
if (index == 394) {
     return 746;
    }
if (index == 395) {
     return 759;
    }
if (index == 396) {
     return 1054;
    }
if (index == 397) {
     return 800;
    }
if (index == 398) {
     return 742;
    }
if (index == 399) {
     return 758;
    }
if (index == 400) {
     return 739;
    }
if (index == 401) {
     return 733;
    }
if (index == 402) {
     return 751;
    }
if (index == 403) {
     return 751;
    }
if (index == 404) {
     return 739;
    }
if (index == 405) {
     return 740;
    }
if (index == 406) {
     return 1069;
    }
if (index == 407) {
     return 880;
    }
if (index == 408) {
     return 722;
    }
if (index == 409) {
     return 723;
    }
if (index == 410) {
     return 736;
    }
if (index == 411) {
     return 728;
    }
if (index == 412) {
     return 761;
    }
if (index == 413) {
     return 738;
    }
if (index == 414) {
     return 750;
    }
if (index == 415) {
     return 880;
    }
if (index == 416) {
     return 743;
    }
if (index == 417) {
     return 738;
    }
if (index == 418) {
     return 740;
    }
if (index == 419) {
     return 880;
    }
if (index == 420) {
     return 722;
    }
if (index == 421) {
     return 761;
    }
if (index == 422) {
     return 744;
    }
if (index == 423) {
     return 880;
    }
if (index == 424) {
     return 739;
    }
if (index == 425) {
     return 705;
    }
if (index == 426) {
     return 750;
    }
if (index == 427) {
     return 718;
    }
if (index == 428) {
     return 716;
    }
if (index == 429) {
     return 715;
    }
if (index == 430) {
     return 715;
    }
if (index == 431) {
     return 880;
    }
if (index == 432) {
     return 793;
    }
if (index == 433) {
     return 736;
    }
if (index == 434) {
     return 742;
    }
if (index == 435) {
     return 735;
    }
if (index == 436) {
     return 754;
    }
if (index == 437) {
     return 724;
    }
if (index == 438) {
     return 1059;
    }
if (index == 439) {
     return 880;
    }
if (index == 440) {
     return 730;
    }
if (index == 441) {
     return 740;
    }
if (index == 442) {
     return 713;
    }
if (index == 443) {
     return 720;
    }
if (index == 444) {
     return 1106;
    }
if (index == 445) {
     return 880;
    }
if (index == 446) {
     return 898;
    }
if (index == 447) {
     return 730;
    }
if (index == 448) {
     return 1057;
    }
if (index == 449) {
     return 880;
    }
if (index == 450) {
     return 727;
    }
if (index == 451) {
     return 716;
    }
if (index == 452) {
     return 739;
    }
if (index == 453) {
     return 728;
    }
if (index == 454) {
     return 1095;
    }
if (index == 455) {
     return 880;
    }
if (index == 456) {
     return 724;
    }
if (index == 457) {
     return 737;
    }
if (index == 458) {
     return 1385;
    }
if (index == 459) {
     return 880;
    }
if (index == 460) {
     return 898;
    }
if (index == 461) {
     return 886;
    }
if (index == 462) {
     return 836;
    }
if (index == 463) {
     return 880;
    }
if (index > 463) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1458;
    }
if (index == 1) {
     return 1339;
    }
if (index == 2) {
     return 1300;
    }
if (index == 3) {
     return 1365;
    }
if (index == 4) {
     return 1347;
    }
if (index == 5) {
     return 1328;
    }
if (index == 6) {
     return 1313;
    }
if (index == 7) {
     return 1101;
    }
if (index == 8) {
     return 1324;
    }
if (index == 9) {
     return 1365;
    }
if (index == 10) {
     return 1326;
    }
if (index == 11) {
     return 1365;
    }
if (index == 12) {
     return 1332;
    }
if (index == 13) {
     return 1352;
    }
if (index == 14) {
     return 1361;
    }
if (index == 15) {
     return 1359;
    }
if (index == 16) {
     return 1340;
    }
if (index == 17) {
     return 1365;
    }
if (index == 18) {
     return 1361;
    }
if (index == 19) {
     return 1364;
    }
if (index == 20) {
     return 1349;
    }
if (index == 21) {
     return 1371;
    }
if (index == 22) {
     return 1334;
    }
if (index == 23) {
     return 1348;
    }
if (index == 24) {
     return 1328;
    }
if (index == 25) {
     return 1365;
    }
if (index == 26) {
     return 1328;
    }
if (index == 27) {
     return 1313;
    }
if (index == 28) {
     return 1242;
    }
if (index == 29) {
     return 1287;
    }
if (index == 30) {
     return 1293;
    }
if (index == 31) {
     return 1333;
    }
if (index == 32) {
     return 1291;
    }
if (index == 33) {
     return 1310;
    }
if (index == 34) {
     return 848;
    }
if (index == 35) {
     return 1339;
    }
if (index == 36) {
     return 1280;
    }
if (index == 37) {
     return 1343;
    }
if (index == 38) {
     return 850;
    }
if (index == 39) {
     return 1296;
    }
if (index == 40) {
     return 1273;
    }
if (index == 41) {
     return 1334;
    }
if (index == 42) {
     return 1288;
    }
if (index == 43) {
     return 1316;
    }
if (index == 44) {
     return 1277;
    }
if (index == 45) {
     return 1305;
    }
if (index == 46) {
     return 1275;
    }
if (index == 47) {
     return 1322;
    }
if (index == 48) {
     return 1273;
    }
if (index == 49) {
     return 1337;
    }
if (index == 50) {
     return 1268;
    }
if (index == 51) {
     return 1305;
    }
if (index == 52) {
     return 1303;
    }
if (index == 53) {
     return 1318;
    }
if (index == 54) {
     return 1292;
    }
if (index == 55) {
     return 1299;
    }
if (index == 56) {
     return 1327;
    }
if (index == 57) {
     return 1329;
    }
if (index == 58) {
     return 1117;
    }
if (index == 59) {
     return 1264;
    }
if (index == 60) {
     return 1221;
    }
if (index == 61) {
     return 1318;
    }
if (index == 62) {
     return 1238;
    }
if (index == 63) {
     return 1277;
    }
if (index == 64) {
     return 1318;
    }
if (index == 65) {
     return 1267;
    }
if (index == 66) {
     return 1273;
    }
if (index == 67) {
     return 1279;
    }
if (index == 68) {
     return 1288;
    }
if (index == 69) {
     return 1304;
    }
if (index == 70) {
     return 1251;
    }
if (index == 71) {
     return 1331;
    }
if (index == 72) {
     return 1279;
    }
if (index == 73) {
     return 1192;
    }
if (index == 74) {
     return 1288;
    }
if (index == 75) {
     return 1314;
    }
if (index == 76) {
     return 1296;
    }
if (index == 77) {
     return 1280;
    }
if (index == 78) {
     return 1262;
    }
if (index == 79) {
     return 1272;
    }
if (index == 80) {
     return 1333;
    }
if (index == 81) {
     return 1286;
    }
if (index == 82) {
     return 1306;
    }
if (index == 83) {
     return 1299;
    }
if (index == 84) {
     return 1192;
    }
if (index == 85) {
     return 1288;
    }
if (index == 86) {
     return 1268;
    }
if (index == 87) {
     return 1345;
    }
if (index == 88) {
     return 1347;
    }
if (index == 89) {
     return 1277;
    }
if (index == 90) {
     return 1229;
    }
if (index == 91) {
     return 1346;
    }
if (index == 92) {
     return 1321;
    }
if (index == 93) {
     return 1326;
    }
if (index == 94) {
     return 1321;
    }
if (index == 95) {
     return 1332;
    }
if (index == 96) {
     return 1332;
    }
if (index == 97) {
     return 1328;
    }
if (index == 98) {
     return 1320;
    }
if (index == 99) {
     return 1321;
    }
if (index == 100) {
     return 1321;
    }
if (index == 101) {
     return 1336;
    }
if (index == 102) {
     return 1298;
    }
if (index == 103) {
     return 1332;
    }
if (index == 104) {
     return 1284;
    }
if (index == 105) {
     return 1319;
    }
if (index == 106) {
     return 1300;
    }
if (index == 107) {
     return 1321;
    }
if (index == 108) {
     return 853;
    }
if (index == 109) {
     return 1347;
    }
if (index == 110) {
     return 1321;
    }
if (index == 111) {
     return 1311;
    }
if (index == 112) {
     return 1301;
    }
if (index == 113) {
     return 1313;
    }
if (index == 114) {
     return 1293;
    }
if (index == 115) {
     return 1341;
    }
if (index == 116) {
     return 1295;
    }
if (index == 117) {
     return 1302;
    }
if (index == 118) {
     return 1297;
    }
if (index == 119) {
     return 1309;
    }
if (index == 120) {
     return 1300;
    }
if (index == 121) {
     return 1319;
    }
if (index == 122) {
     return 1323;
    }
if (index == 123) {
     return 1312;
    }
if (index == 124) {
     return 1306;
    }
if (index == 125) {
     return 1324;
    }
if (index == 126) {
     return 1313;
    }
if (index == 127) {
     return 1317;
    }
if (index == 128) {
     return 1317;
    }
if (index == 129) {
     return 1324;
    }
if (index == 130) {
     return 891;
    }
if (index == 131) {
     return 1289;
    }
if (index == 132) {
     return 1308;
    }
if (index == 133) {
     return 1347;
    }
if (index == 134) {
     return 1314;
    }
if (index == 135) {
     return 1306;
    }
if (index == 136) {
     return 1286;
    }
if (index == 137) {
     return 1347;
    }
if (index == 138) {
     return 1313;
    }
if (index == 139) {
     return 1322;
    }
if (index == 140) {
     return 867;
    }
if (index == 141) {
     return 1347;
    }
if (index == 142) {
     return 1313;
    }
if (index == 143) {
     return 1349;
    }
if (index == 144) {
     return 1306;
    }
if (index == 145) {
     return 1347;
    }
if (index == 146) {
     return 1306;
    }
if (index == 147) {
     return 1325;
    }
if (index == 148) {
     return 1299;
    }
if (index == 149) {
     return 1347;
    }
if (index == 150) {
     return 1313;
    }
if (index == 151) {
     return 1339;
    }
if (index == 152) {
     return 1287;
    }
if (index == 153) {
     return 1347;
    }
if (index == 154) {
     return 1303;
    }
if (index == 155) {
     return 1317;
    }
if (index == 156) {
     return 1313;
    }
if (index == 157) {
     return 1347;
    }
if (index == 158) {
     return 1311;
    }
if (index == 159) {
     return 1329;
    }
if (index == 160) {
     return 1298;
    }
if (index == 161) {
     return 1347;
    }
if (index == 162) {
     return 1318;
    }
if (index == 163) {
     return 1315;
    }
if (index == 164) {
     return 1311;
    }
if (index == 165) {
     return 1347;
    }
if (index == 166) {
     return 1319;
    }
if (index == 167) {
     return 1319;
    }
if (index == 168) {
     return 1312;
    }
if (index == 169) {
     return 1347;
    }
if (index == 170) {
     return 1293;
    }
if (index == 171) {
     return 1324;
    }
if (index == 172) {
     return 883;
    }
if (index == 173) {
     return 1347;
    }
if (index == 174) {
     return 1311;
    }
if (index == 175) {
     return 1320;
    }
if (index == 176) {
     return 1318;
    }
if (index == 177) {
     return 1307;
    }
if (index == 178) {
     return 1330;
    }
if (index == 179) {
     return 1347;
    }
if (index == 180) {
     return 1346;
    }
if (index == 181) {
     return 1327;
    }
if (index == 182) {
     return 855;
    }
if (index == 183) {
     return 1347;
    }
if (index == 184) {
     return 1327;
    }
if (index == 185) {
     return 1340;
    }
if (index == 186) {
     return 870;
    }
if (index == 187) {
     return 1347;
    }
if (index == 188) {
     return 1319;
    }
if (index == 189) {
     return 1328;
    }
if (index == 190) {
     return 1300;
    }
if (index == 191) {
     return 1316;
    }
if (index == 192) {
     return 1337;
    }
if (index == 193) {
     return 1345;
    }
if (index == 194) {
     return 888;
    }
if (index == 195) {
     return 1347;
    }
if (index == 196) {
     return 1331;
    }
if (index == 197) {
     return 1320;
    }
if (index == 198) {
     return 1351;
    }
if (index == 199) {
     return 1335;
    }
if (index == 200) {
     return 1314;
    }
if (index == 201) {
     return 1327;
    }
if (index == 202) {
     return 862;
    }
if (index == 203) {
     return 1347;
    }
if (index == 204) {
     return 1319;
    }
if (index == 205) {
     return 1333;
    }
if (index == 206) {
     return 869;
    }
if (index == 207) {
     return 1347;
    }
if (index == 208) {
     return 1304;
    }
if (index == 209) {
     return 1302;
    }
if (index == 210) {
     return 1317;
    }
if (index == 211) {
     return 1334;
    }
if (index == 212) {
     return 1287;
    }
if (index == 213) {
     return 1321;
    }
if (index == 214) {
     return 1317;
    }
if (index == 215) {
     return 1338;
    }
if (index == 216) {
     return 1278;
    }
if (index == 217) {
     return 1322;
    }
if (index == 218) {
     return 1272;
    }
if (index == 219) {
     return 1293;
    }
if (index == 220) {
     return 1297;
    }
if (index == 221) {
     return 1318;
    }
if (index == 222) {
     return 1326;
    }
if (index == 223) {
     return 1350;
    }
if (index == 224) {
     return 845;
    }
if (index == 225) {
     return 1347;
    }
if (index == 226) {
     return 1295;
    }
if (index == 227) {
     return 1316;
    }
if (index == 228) {
     return 1305;
    }
if (index == 229) {
     return 1309;
    }
if (index == 230) {
     return 1296;
    }
if (index == 231) {
     return 1347;
    }
if (index == 232) {
     return 1288;
    }
if (index == 233) {
     return 1329;
    }
if (index == 234) {
     return 880;
    }
if (index == 235) {
     return 1347;
    }
if (index == 236) {
     return 815;
    }
if (index == 237) {
     return 1347;
    }
if (index == 238) {
     return 1306;
    }
if (index == 239) {
     return 1315;
    }
if (index == 240) {
     return 866;
    }
if (index == 241) {
     return 1347;
    }
if (index == 242) {
     return 1297;
    }
if (index == 243) {
     return 1331;
    }
if (index == 244) {
     return 1338;
    }
if (index == 245) {
     return 1343;
    }
if (index == 246) {
     return 1319;
    }
if (index == 247) {
     return 1311;
    }
if (index == 248) {
     return 830;
    }
if (index == 249) {
     return 1347;
    }
if (index == 250) {
     return 1290;
    }
if (index == 251) {
     return 1350;
    }
if (index == 252) {
     return 1306;
    }
if (index == 253) {
     return 1319;
    }
if (index == 254) {
     return 1326;
    }
if (index == 255) {
     return 1326;
    }
if (index == 256) {
     return 1289;
    }
if (index == 257) {
     return 1305;
    }
if (index == 258) {
     return 1304;
    }
if (index == 259) {
     return 1347;
    }
if (index == 260) {
     return 1330;
    }
if (index == 261) {
     return 1345;
    }
if (index == 262) {
     return 1315;
    }
if (index == 263) {
     return 1300;
    }
if (index == 264) {
     return 1272;
    }
if (index == 265) {
     return 1347;
    }
if (index == 266) {
     return 1330;
    }
if (index == 267) {
     return 1317;
    }
if (index == 268) {
     return 1311;
    }
if (index == 269) {
     return 1322;
    }
if (index == 270) {
     return 1263;
    }
if (index == 271) {
     return 1287;
    }
if (index == 272) {
     return 1283;
    }
if (index == 273) {
     return 1300;
    }
if (index == 274) {
     return 865;
    }
if (index == 275) {
     return 1347;
    }
if (index == 276) {
     return 1305;
    }
if (index == 277) {
     return 1332;
    }
if (index == 278) {
     return 859;
    }
if (index == 279) {
     return 1347;
    }
if (index == 280) {
     return 1292;
    }
if (index == 281) {
     return 1287;
    }
if (index == 282) {
     return 1287;
    }
if (index == 283) {
     return 1317;
    }
if (index == 284) {
     return 1278;
    }
if (index == 285) {
     return 1306;
    }
if (index == 286) {
     return 1287;
    }
if (index == 287) {
     return 1328;
    }
if (index == 288) {
     return 1289;
    }
if (index == 289) {
     return 1332;
    }
if (index == 290) {
     return 867;
    }
if (index == 291) {
     return 1347;
    }
if (index == 292) {
     return 1298;
    }
if (index == 293) {
     return 1322;
    }
if (index == 294) {
     return 861;
    }
if (index == 295) {
     return 1347;
    }
if (index == 296) {
     return 1297;
    }
if (index == 297) {
     return 1321;
    }
if (index == 298) {
     return 1291;
    }
if (index == 299) {
     return 1298;
    }
if (index == 300) {
     return 1315;
    }
if (index == 301) {
     return 1319;
    }
if (index == 302) {
     return 1280;
    }
if (index == 303) {
     return 1322;
    }
if (index == 304) {
     return 854;
    }
if (index == 305) {
     return 1347;
    }
if (index == 306) {
     return 1317;
    }
if (index == 307) {
     return 1328;
    }
if (index == 308) {
     return 859;
    }
if (index == 309) {
     return 1347;
    }
if (index == 310) {
     return 1342;
    }
if (index == 311) {
     return 1351;
    }
if (index == 312) {
     return 1270;
    }
if (index == 313) {
     return 1300;
    }
if (index == 314) {
     return 1302;
    }
if (index == 315) {
     return 1319;
    }
if (index == 316) {
     return 1265;
    }
if (index == 317) {
     return 1347;
    }
if (index == 318) {
     return 1289;
    }
if (index == 319) {
     return 1303;
    }
if (index == 320) {
     return 825;
    }
if (index == 321) {
     return 1347;
    }
if (index == 322) {
     return 1263;
    }
if (index == 323) {
     return 1306;
    }
if (index == 324) {
     return 1315;
    }
if (index == 325) {
     return 1311;
    }
if (index == 326) {
     return 1287;
    }
if (index == 327) {
     return 1315;
    }
if (index == 328) {
     return 1310;
    }
if (index == 329) {
     return 1273;
    }
if (index == 330) {
     return 1236;
    }
if (index == 331) {
     return 1267;
    }
if (index == 332) {
     return 1227;
    }
if (index == 333) {
     return 1257;
    }
if (index == 334) {
     return 1252;
    }
if (index == 335) {
     return 1265;
    }
if (index == 336) {
     return 1212;
    }
if (index == 337) {
     return 1264;
    }
if (index == 338) {
     return 844;
    }
if (index == 339) {
     return 1347;
    }
if (index == 340) {
     return 1248;
    }
if (index == 341) {
     return 1244;
    }
if (index == 342) {
     return 835;
    }
if (index == 343) {
     return 1347;
    }
if (index == 344) {
     return 1276;
    }
if (index == 345) {
     return 1271;
    }
if (index == 346) {
     return 1277;
    }
if (index == 347) {
     return 1347;
    }
if (index == 348) {
     return 739;
    }
if (index == 349) {
     return 1347;
    }
if (index == 350) {
     return 1274;
    }
if (index == 351) {
     return 1286;
    }
if (index == 352) {
     return 1220;
    }
if (index == 353) {
     return 1261;
    }
if (index == 354) {
     return 846;
    }
if (index == 355) {
     return 1347;
    }
if (index == 356) {
     return 1269;
    }
if (index == 357) {
     return 1272;
    }
if (index == 358) {
     return 1251;
    }
if (index == 359) {
     return 1256;
    }
if (index == 360) {
     return 1233;
    }
if (index == 361) {
     return 1305;
    }
if (index == 362) {
     return 1263;
    }
if (index == 363) {
     return 1285;
    }
if (index == 364) {
     return 1214;
    }
if (index == 365) {
     return 1269;
    }
if (index == 366) {
     return 1244;
    }
if (index == 367) {
     return 1259;
    }
if (index == 368) {
     return 825;
    }
if (index == 369) {
     return 1347;
    }
if (index == 370) {
     return 1240;
    }
if (index == 371) {
     return 1251;
    }
if (index == 372) {
     return 1261;
    }
if (index == 373) {
     return 1280;
    }
if (index == 374) {
     return 799;
    }
if (index == 375) {
     return 1347;
    }
if (index == 376) {
     return 1221;
    }
if (index == 377) {
     return 1295;
    }
if (index == 378) {
     return 1274;
    }
if (index == 379) {
     return 1256;
    }
if (index == 380) {
     return 795;
    }
if (index == 381) {
     return 1347;
    }
if (index == 382) {
     return 1265;
    }
if (index == 383) {
     return 1257;
    }
if (index == 384) {
     return 1238;
    }
if (index == 385) {
     return 1274;
    }
if (index == 386) {
     return 1252;
    }
if (index == 387) {
     return 1269;
    }
if (index == 388) {
     return 1231;
    }
if (index == 389) {
     return 1274;
    }
if (index == 390) {
     return 1235;
    }
if (index == 391) {
     return 1272;
    }
if (index == 392) {
     return 1233;
    }
if (index == 393) {
     return 1230;
    }
if (index == 394) {
     return 1246;
    }
if (index == 395) {
     return 1240;
    }
if (index == 396) {
     return 775;
    }
if (index == 397) {
     return 1257;
    }
if (index == 398) {
     return 1283;
    }
if (index == 399) {
     return 1252;
    }
if (index == 400) {
     return 1230;
    }
if (index == 401) {
     return 1261;
    }
if (index == 402) {
     return 1247;
    }
if (index == 403) {
     return 1231;
    }
if (index == 404) {
     return 1225;
    }
if (index == 405) {
     return 1257;
    }
if (index == 406) {
     return 792;
    }
if (index == 407) {
     return 1347;
    }
if (index == 408) {
     return 1233;
    }
if (index == 409) {
     return 1250;
    }
if (index == 410) {
     return 1233;
    }
if (index == 411) {
     return 1266;
    }
if (index == 412) {
     return 1258;
    }
if (index == 413) {
     return 1290;
    }
if (index == 414) {
     return 1307;
    }
if (index == 415) {
     return 1347;
    }
if (index == 416) {
     return 1260;
    }
if (index == 417) {
     return 1289;
    }
if (index == 418) {
     return 1249;
    }
if (index == 419) {
     return 1347;
    }
if (index == 420) {
     return 1234;
    }
if (index == 421) {
     return 1287;
    }
if (index == 422) {
     return 1206;
    }
if (index == 423) {
     return 1347;
    }
if (index == 424) {
     return 1243;
    }
if (index == 425) {
     return 1233;
    }
if (index == 426) {
     return 1283;
    }
if (index == 427) {
     return 1241;
    }
if (index == 428) {
     return 1233;
    }
if (index == 429) {
     return 1279;
    }
if (index == 430) {
     return 1245;
    }
if (index == 431) {
     return 1347;
    }
if (index == 432) {
     return 1256;
    }
if (index == 433) {
     return 1249;
    }
if (index == 434) {
     return 1233;
    }
if (index == 435) {
     return 1240;
    }
if (index == 436) {
     return 1236;
    }
if (index == 437) {
     return 1246;
    }
if (index == 438) {
     return 803;
    }
if (index == 439) {
     return 1347;
    }
if (index == 440) {
     return 1219;
    }
if (index == 441) {
     return 1233;
    }
if (index == 442) {
     return 1207;
    }
if (index == 443) {
     return 1263;
    }
if (index == 444) {
     return 796;
    }
if (index == 445) {
     return 1347;
    }
if (index == 446) {
     return 1339;
    }
if (index == 447) {
     return 1280;
    }
if (index == 448) {
     return 845;
    }
if (index == 449) {
     return 1347;
    }
if (index == 450) {
     return 1221;
    }
if (index == 451) {
     return 1254;
    }
if (index == 452) {
     return 1249;
    }
if (index == 453) {
     return 1284;
    }
if (index == 454) {
     return 809;
    }
if (index == 455) {
     return 1347;
    }
if (index == 456) {
     return 1258;
    }
if (index == 457) {
     return 1252;
    }
if (index == 458) {
     return 1463;
    }
if (index == 459) {
     return 1347;
    }
if (index == 460) {
     return 1339;
    }
if (index == 461) {
     return 1374;
    }
if (index == 462) {
     return 1264;
    }
if (index == 463) {
     return 1347;
    }
if (index > 463) {
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
    var url = '/fedora/get/seapage:329a_' + imgStr + '/digitalImage';
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
br.numLeafs = 464;

// Book title and the URL used for the book title link
br.bookTitle= "The silken East; a record of life and travel in Burma, vol.1";
br.bookAuthor= "O'Connor, V. C. Scott (Vincent Clarence Scott)";
br.bookPub= "London: Hutchinson and co, 1904";
br.bookKeyword= "Burma--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Social life and customs";
br.bookUrl  = '/catalog/sea:329a';

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
