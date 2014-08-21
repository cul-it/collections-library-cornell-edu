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
     return 749;
    }
if (index == 2) {
     return 739;
    }
if (index == 3) {
     return 719;
    }
if (index == 4) {
     return 701;
    }
if (index == 5) {
     return 725;
    }
if (index == 6) {
     return 694;
    }
if (index == 7) {
     return 1046;
    }
if (index == 8) {
     return 720;
    }
if (index == 9) {
     return 708;
    }
if (index == 10) {
     return 711;
    }
if (index == 11) {
     return 706;
    }
if (index == 12) {
     return 736;
    }
if (index == 13) {
     return 760;
    }
if (index == 14) {
     return 739;
    }
if (index == 15) {
     return 769;
    }
if (index == 16) {
     return 721;
    }
if (index == 17) {
     return 739;
    }
if (index == 18) {
     return 743;
    }
if (index == 19) {
     return 732;
    }
if (index == 20) {
     return 708;
    }
if (index == 21) {
     return 756;
    }
if (index == 22) {
     return 743;
    }
if (index == 23) {
     return 705;
    }
if (index == 24) {
     return 725;
    }
if (index == 25) {
     return 740;
    }
if (index == 26) {
     return 735;
    }
if (index == 27) {
     return 742;
    }
if (index == 28) {
     return 724;
    }
if (index == 29) {
     return 739;
    }
if (index == 30) {
     return 736;
    }
if (index == 31) {
     return 739;
    }
if (index == 32) {
     return 718;
    }
if (index == 33) {
     return 751;
    }
if (index == 34) {
     return 724;
    }
if (index == 35) {
     return 788;
    }
if (index == 36) {
     return 729;
    }
if (index == 37) {
     return 772;
    }
if (index == 38) {
     return 723;
    }
if (index == 39) {
     return 732;
    }
if (index == 40) {
     return 737;
    }
if (index == 41) {
     return 696;
    }
if (index == 42) {
     return 727;
    }
if (index == 43) {
     return 748;
    }
if (index == 44) {
     return 742;
    }
if (index == 45) {
     return 746;
    }
if (index == 46) {
     return 744;
    }
if (index == 47) {
     return 742;
    }
if (index == 48) {
     return 754;
    }
if (index == 49) {
     return 755;
    }
if (index == 50) {
     return 739;
    }
if (index == 51) {
     return 728;
    }
if (index == 52) {
     return 726;
    }
if (index == 53) {
     return 731;
    }
if (index == 54) {
     return 713;
    }
if (index == 55) {
     return 736;
    }
if (index == 56) {
     return 714;
    }
if (index == 57) {
     return 753;
    }
if (index == 58) {
     return 733;
    }
if (index == 59) {
     return 757;
    }
if (index == 60) {
     return 740;
    }
if (index == 61) {
     return 763;
    }
if (index == 62) {
     return 731;
    }
if (index == 63) {
     return 763;
    }
if (index == 64) {
     return 714;
    }
if (index == 65) {
     return 769;
    }
if (index == 66) {
     return 738;
    }
if (index == 67) {
     return 752;
    }
if (index == 68) {
     return 737;
    }
if (index == 69) {
     return 739;
    }
if (index == 70) {
     return 709;
    }
if (index == 71) {
     return 716;
    }
if (index == 72) {
     return 752;
    }
if (index == 73) {
     return 756;
    }
if (index == 74) {
     return 736;
    }
if (index == 75) {
     return 742;
    }
if (index == 76) {
     return 728;
    }
if (index == 77) {
     return 737;
    }
if (index == 78) {
     return 721;
    }
if (index == 79) {
     return 729;
    }
if (index == 80) {
     return 738;
    }
if (index == 81) {
     return 727;
    }
if (index == 82) {
     return 735;
    }
if (index == 83) {
     return 759;
    }
if (index == 84) {
     return 727;
    }
if (index == 85) {
     return 758;
    }
if (index == 86) {
     return 762;
    }
if (index == 87) {
     return 752;
    }
if (index == 88) {
     return 744;
    }
if (index == 89) {
     return 743;
    }
if (index == 90) {
     return 740;
    }
if (index == 91) {
     return 756;
    }
if (index == 92) {
     return 755;
    }
if (index == 93) {
     return 772;
    }
if (index == 94) {
     return 757;
    }
if (index == 95) {
     return 760;
    }
if (index == 96) {
     return 729;
    }
if (index == 97) {
     return 749;
    }
if (index == 98) {
     return 744;
    }
if (index == 99) {
     return 754;
    }
if (index == 100) {
     return 722;
    }
if (index == 101) {
     return 743;
    }
if (index == 102) {
     return 749;
    }
if (index == 103) {
     return 766;
    }
if (index == 104) {
     return 749;
    }
if (index == 105) {
     return 752;
    }
if (index == 106) {
     return 755;
    }
if (index == 107) {
     return 739;
    }
if (index == 108) {
     return 741;
    }
if (index == 109) {
     return 758;
    }
if (index == 110) {
     return 744;
    }
if (index == 111) {
     return 756;
    }
if (index == 112) {
     return 737;
    }
if (index == 113) {
     return 766;
    }
if (index == 114) {
     return 738;
    }
if (index == 115) {
     return 747;
    }
if (index == 116) {
     return 741;
    }
if (index == 117) {
     return 765;
    }
if (index == 118) {
     return 725;
    }
if (index == 119) {
     return 762;
    }
if (index == 120) {
     return 738;
    }
if (index == 121) {
     return 751;
    }
if (index == 122) {
     return 745;
    }
if (index == 123) {
     return 762;
    }
if (index == 124) {
     return 729;
    }
if (index == 125) {
     return 735;
    }
if (index == 126) {
     return 734;
    }
if (index == 127) {
     return 743;
    }
if (index == 128) {
     return 747;
    }
if (index == 129) {
     return 750;
    }
if (index == 130) {
     return 733;
    }
if (index == 131) {
     return 758;
    }
if (index == 132) {
     return 762;
    }
if (index == 133) {
     return 753;
    }
if (index == 134) {
     return 761;
    }
if (index == 135) {
     return 752;
    }
if (index == 136) {
     return 747;
    }
if (index == 137) {
     return 758;
    }
if (index == 138) {
     return 753;
    }
if (index == 139) {
     return 768;
    }
if (index == 140) {
     return 749;
    }
if (index == 141) {
     return 764;
    }
if (index == 142) {
     return 744;
    }
if (index == 143) {
     return 766;
    }
if (index == 144) {
     return 757;
    }
if (index == 145) {
     return 753;
    }
if (index == 146) {
     return 739;
    }
if (index == 147) {
     return 768;
    }
if (index == 148) {
     return 745;
    }
if (index == 149) {
     return 762;
    }
if (index == 150) {
     return 751;
    }
if (index == 151) {
     return 760;
    }
if (index == 152) {
     return 734;
    }
if (index == 153) {
     return 756;
    }
if (index == 154) {
     return 741;
    }
if (index == 155) {
     return 758;
    }
if (index == 156) {
     return 758;
    }
if (index == 157) {
     return 752;
    }
if (index == 158) {
     return 743;
    }
if (index == 159) {
     return 763;
    }
if (index == 160) {
     return 761;
    }
if (index == 161) {
     return 743;
    }
if (index == 162) {
     return 740;
    }
if (index == 163) {
     return 760;
    }
if (index == 164) {
     return 747;
    }
if (index == 165) {
     return 753;
    }
if (index == 166) {
     return 761;
    }
if (index == 167) {
     return 751;
    }
if (index == 168) {
     return 748;
    }
if (index == 169) {
     return 770;
    }
if (index == 170) {
     return 744;
    }
if (index == 171) {
     return 743;
    }
if (index == 172) {
     return 745;
    }
if (index == 173) {
     return 762;
    }
if (index == 174) {
     return 740;
    }
if (index == 175) {
     return 756;
    }
if (index == 176) {
     return 750;
    }
if (index == 177) {
     return 739;
    }
if (index == 178) {
     return 739;
    }
if (index == 179) {
     return 750;
    }
if (index == 180) {
     return 769;
    }
if (index == 181) {
     return 770;
    }
if (index == 182) {
     return 756;
    }
if (index == 183) {
     return 756;
    }
if (index == 184) {
     return 748;
    }
if (index == 185) {
     return 760;
    }
if (index == 186) {
     return 723;
    }
if (index == 187) {
     return 1120;
    }
if (index == 188) {
     return 749;
    }
if (index == 189) {
     return 759;
    }
if (index == 190) {
     return 746;
    }
if (index == 191) {
     return 759;
    }
if (index == 192) {
     return 752;
    }
if (index == 193) {
     return 739;
    }
if (index == 194) {
     return 760;
    }
if (index == 195) {
     return 734;
    }
if (index == 196) {
     return 749;
    }
if (index == 197) {
     return 751;
    }
if (index == 198) {
     return 755;
    }
if (index == 199) {
     return 750;
    }
if (index == 200) {
     return 754;
    }
if (index == 201) {
     return 740;
    }
if (index == 202) {
     return 749;
    }
if (index == 203) {
     return 743;
    }
if (index == 204) {
     return 747;
    }
if (index == 205) {
     return 743;
    }
if (index == 206) {
     return 743;
    }
if (index == 207) {
     return 753;
    }
if (index == 208) {
     return 725;
    }
if (index == 209) {
     return 732;
    }
if (index == 210) {
     return 727;
    }
if (index == 211) {
     return 727;
    }
if (index == 212) {
     return 718;
    }
if (index == 213) {
     return 737;
    }
if (index == 214) {
     return 721;
    }
if (index == 215) {
     return 737;
    }
if (index == 216) {
     return 718;
    }
if (index == 217) {
     return 738;
    }
if (index == 218) {
     return 730;
    }
if (index == 219) {
     return 757;
    }
if (index == 220) {
     return 719;
    }
if (index == 221) {
     return 732;
    }
if (index == 222) {
     return 723;
    }
if (index == 223) {
     return 756;
    }
if (index == 224) {
     return 732;
    }
if (index == 225) {
     return 759;
    }
if (index == 226) {
     return 725;
    }
if (index == 227) {
     return 746;
    }
if (index == 228) {
     return 703;
    }
if (index == 229) {
     return 748;
    }
if (index == 230) {
     return 761;
    }
if (index == 231) {
     return 744;
    }
if (index == 232) {
     return 733;
    }
if (index == 233) {
     return 725;
    }
if (index == 234) {
     return 729;
    }
if (index == 235) {
     return 741;
    }
if (index == 236) {
     return 737;
    }
if (index == 237) {
     return 751;
    }
if (index == 238) {
     return 730;
    }
if (index == 239) {
     return 748;
    }
if (index == 240) {
     return 734;
    }
if (index == 241) {
     return 748;
    }
if (index == 242) {
     return 728;
    }
if (index == 243) {
     return 744;
    }
if (index == 244) {
     return 731;
    }
if (index == 245) {
     return 742;
    }
if (index == 246) {
     return 728;
    }
if (index == 247) {
     return 716;
    }
if (index == 248) {
     return 708;
    }
if (index == 249) {
     return 726;
    }
if (index == 250) {
     return 709;
    }
if (index == 251) {
     return 707;
    }
if (index == 252) {
     return 738;
    }
if (index == 253) {
     return 738;
    }
if (index == 254) {
     return 712;
    }
if (index == 255) {
     return 727;
    }
if (index == 256) {
     return 706;
    }
if (index == 257) {
     return 727;
    }
if (index == 258) {
     return 751;
    }
if (index == 259) {
     return 721;
    }
if (index == 260) {
     return 1105;
    }
if (index == 261) {
     return 702;
    }
if (index == 262) {
     return 736;
    }
if (index == 263) {
     return 739;
    }
if (index == 264) {
     return 721;
    }
if (index == 265) {
     return 728;
    }
if (index == 266) {
     return 731;
    }
if (index == 267) {
     return 741;
    }
if (index == 268) {
     return 734;
    }
if (index == 269) {
     return 704;
    }
if (index == 270) {
     return 738;
    }
if (index == 271) {
     return 740;
    }
if (index == 272) {
     return 729;
    }
if (index == 273) {
     return 736;
    }
if (index == 274) {
     return 737;
    }
if (index == 275) {
     return 746;
    }
if (index == 276) {
     return 719;
    }
if (index == 277) {
     return 737;
    }
if (index == 278) {
     return 742;
    }
if (index == 279) {
     return 748;
    }
if (index == 280) {
     return 747;
    }
if (index == 281) {
     return 743;
    }
if (index == 282) {
     return 738;
    }
if (index == 283) {
     return 743;
    }
if (index == 284) {
     return 715;
    }
if (index == 285) {
     return 736;
    }
if (index == 286) {
     return 1066;
    }
if (index == 287) {
     return 736;
    }
if (index == 288) {
     return 722;
    }
if (index == 289) {
     return 750;
    }
if (index == 290) {
     return 740;
    }
if (index == 291) {
     return 720;
    }
if (index == 292) {
     return 729;
    }
if (index == 293) {
     return 729;
    }
if (index == 294) {
     return 724;
    }
if (index == 295) {
     return 736;
    }
if (index == 296) {
     return 724;
    }
if (index == 297) {
     return 724;
    }
if (index == 298) {
     return 717;
    }
if (index == 299) {
     return 735;
    }
if (index == 300) {
     return 719;
    }
if (index == 301) {
     return 738;
    }
if (index == 302) {
     return 730;
    }
if (index == 303) {
     return 730;
    }
if (index == 304) {
     return 722;
    }
if (index == 305) {
     return 750;
    }
if (index == 306) {
     return 719;
    }
if (index == 307) {
     return 747;
    }
if (index == 308) {
     return 735;
    }
if (index == 309) {
     return 718;
    }
if (index == 310) {
     return 737;
    }
if (index == 311) {
     return 706;
    }
if (index == 312) {
     return 736;
    }
if (index == 313) {
     return 729;
    }
if (index == 314) {
     return 1093;
    }
if (index == 315) {
     return 709;
    }
if (index == 316) {
     return 731;
    }
if (index == 317) {
     return 729;
    }
if (index == 318) {
     return 734;
    }
if (index == 319) {
     return 726;
    }
if (index == 320) {
     return 711;
    }
if (index == 321) {
     return 731;
    }
if (index == 322) {
     return 726;
    }
if (index == 323) {
     return 750;
    }
if (index == 324) {
     return 744;
    }
if (index == 325) {
     return 742;
    }
if (index == 326) {
     return 713;
    }
if (index == 327) {
     return 736;
    }
if (index == 328) {
     return 716;
    }
if (index == 329) {
     return 724;
    }
if (index == 330) {
     return 724;
    }
if (index == 331) {
     return 733;
    }
if (index == 332) {
     return 736;
    }
if (index == 333) {
     return 732;
    }
if (index == 334) {
     return 727;
    }
if (index == 335) {
     return 735;
    }
if (index == 336) {
     return 705;
    }
if (index == 337) {
     return 730;
    }
if (index == 338) {
     return 716;
    }
if (index == 339) {
     return 711;
    }
if (index == 340) {
     return 728;
    }
if (index == 341) {
     return 749;
    }
if (index == 342) {
     return 701;
    }
if (index == 343) {
     return 718;
    }
if (index == 344) {
     return 730;
    }
if (index == 345) {
     return 738;
    }
if (index == 346) {
     return 731;
    }
if (index == 347) {
     return 736;
    }
if (index == 348) {
     return 722;
    }
if (index == 349) {
     return 743;
    }
if (index == 350) {
     return 727;
    }
if (index == 351) {
     return 742;
    }
if (index == 352) {
     return 700;
    }
if (index == 353) {
     return 724;
    }
if (index == 354) {
     return 711;
    }
if (index == 355) {
     return 719;
    }
if (index == 356) {
     return 688;
    }
if (index == 357) {
     return 726;
    }
if (index == 358) {
     return 691;
    }
if (index == 359) {
     return 726;
    }
if (index == 360) {
     return 717;
    }
if (index == 361) {
     return 723;
    }
if (index == 362) {
     return 700;
    }
if (index == 363) {
     return 728;
    }
if (index == 364) {
     return 713;
    }
if (index == 365) {
     return 748;
    }
if (index == 366) {
     return 700;
    }
if (index == 367) {
     return 742;
    }
if (index == 368) {
     return 720;
    }
if (index == 369) {
     return 715;
    }
if (index == 370) {
     return 742;
    }
if (index == 371) {
     return 711;
    }
if (index == 372) {
     return 719;
    }
if (index == 373) {
     return 696;
    }
if (index == 374) {
     return 712;
    }
if (index == 375) {
     return 721;
    }
if (index == 376) {
     return 706;
    }
if (index == 377) {
     return 741;
    }
if (index == 378) {
     return 715;
    }
if (index == 379) {
     return 719;
    }
if (index == 380) {
     return 715;
    }
if (index == 381) {
     return 725;
    }
if (index == 382) {
     return 713;
    }
if (index == 383) {
     return 715;
    }
if (index == 384) {
     return 729;
    }
if (index == 385) {
     return 718;
    }
if (index == 386) {
     return 721;
    }
if (index == 387) {
     return 700;
    }
if (index == 388) {
     return 739;
    }
if (index == 389) {
     return 739;
    }
if (index == 390) {
     return 719;
    }
if (index == 391) {
     return 742;
    }
if (index == 392) {
     return 721;
    }
if (index == 393) {
     return 737;
    }
if (index == 394) {
     return 716;
    }
if (index == 395) {
     return 732;
    }
if (index == 396) {
     return 739;
    }
if (index == 397) {
     return 755;
    }
if (index == 398) {
     return 718;
    }
if (index == 399) {
     return 747;
    }
if (index == 400) {
     return 736;
    }
if (index == 401) {
     return 736;
    }
if (index == 402) {
     return 730;
    }
if (index == 403) {
     return 656;
    }
if (index == 404) {
     return 686;
    }
if (index == 405) {
     return 679;
    }
if (index == 406) {
     return 669;
    }
if (index == 407) {
     return 694;
    }
if (index == 408) {
     return 676;
    }
if (index == 409) {
     return 676;
    }
if (index == 410) {
     return 692;
    }
if (index == 411) {
     return 702;
    }
if (index == 412) {
     return 667;
    }
if (index == 413) {
     return 676;
    }
if (index == 414) {
     return 703;
    }
if (index == 415) {
     return 673;
    }
if (index == 416) {
     return 699;
    }
if (index == 417) {
     return 720;
    }
if (index == 418) {
     return 698;
    }
if (index == 419) {
     return 728;
    }
if (index == 420) {
     return 703;
    }
if (index == 421) {
     return 661;
    }
if (index == 422) {
     return 672;
    }
if (index == 423) {
     return 666;
    }
if (index == 424) {
     return 950;
    }
if (index == 425) {
     return 713;
    }
if (index == 426) {
     return 668;
    }
if (index == 427) {
     return 689;
    }
if (index == 428) {
     return 662;
    }
if (index == 429) {
     return 695;
    }
if (index == 430) {
     return 651;
    }
if (index == 431) {
     return 723;
    }
if (index == 432) {
     return 664;
    }
if (index == 433) {
     return 683;
    }
if (index == 434) {
     return 670;
    }
if (index == 435) {
     return 669;
    }
if (index == 436) {
     return 707;
    }
if (index == 437) {
     return 675;
    }
if (index == 438) {
     return 649;
    }
if (index == 439) {
     return 699;
    }
if (index == 440) {
     return 681;
    }
if (index == 441) {
     return 675;
    }
if (index == 442) {
     return 670;
    }
if (index == 443) {
     return 706;
    }
if (index == 444) {
     return 635;
    }
if (index == 445) {
     return 926;
    }
if (index == 446) {
     return 650;
    }
if (index == 447) {
     return 646;
    }
if (index == 448) {
     return 954;
    }
if (index == 449) {
     return 599;
    }
if (index == 450) {
     return 654;
    }
if (index == 451) {
     return 679;
    }
if (index == 452) {
     return 644;
    }
if (index == 453) {
     return 674;
    }
if (index == 454) {
     return 663;
    }
if (index == 455) {
     return 667;
    }
if (index == 456) {
     return 649;
    }
if (index == 457) {
     return 670;
    }
if (index == 458) {
     return 642;
    }
if (index == 459) {
     return 655;
    }
if (index == 460) {
     return 637;
    }
if (index == 461) {
     return 651;
    }
if (index == 462) {
     return 667;
    }
if (index == 463) {
     return 667;
    }
if (index == 464) {
     return 637;
    }
if (index == 465) {
     return 723;
    }
if (index == 466) {
     return 650;
    }
if (index == 467) {
     return 675;
    }
if (index == 468) {
     return 621;
    }
if (index == 469) {
     return 646;
    }
if (index == 470) {
     return 653;
    }
if (index == 471) {
     return 646;
    }
if (index == 472) {
     return 631;
    }
if (index == 473) {
     return 656;
    }
if (index == 474) {
     return 642;
    }
if (index == 475) {
     return 647;
    }
if (index == 476) {
     return 648;
    }
if (index == 477) {
     return 651;
    }
if (index == 478) {
     return 672;
    }
if (index == 479) {
     return 670;
    }
if (index == 480) {
     return 661;
    }
if (index == 481) {
     return 665;
    }
if (index == 482) {
     return 650;
    }
if (index == 483) {
     return 713;
    }
if (index == 484) {
     return 646;
    }
if (index == 485) {
     return 656;
    }
if (index == 486) {
     return 688;
    }
if (index == 487) {
     return 690;
    }
if (index == 488) {
     return 660;
    }
if (index == 489) {
     return 675;
    }
if (index == 490) {
     return 653;
    }
if (index == 491) {
     return 674;
    }
if (index == 492) {
     return 634;
    }
if (index == 493) {
     return 668;
    }
if (index == 494) {
     return 655;
    }
if (index == 495) {
     return 656;
    }
if (index == 496) {
     return 618;
    }
if (index == 497) {
     return 655;
    }
if (index == 498) {
     return 617;
    }
if (index == 499) {
     return 646;
    }
if (index == 500) {
     return 646;
    }
if (index == 501) {
     return 686;
    }
if (index == 502) {
     return 646;
    }
if (index == 503) {
     return 641;
    }
if (index == 504) {
     return 658;
    }
if (index == 505) {
     return 638;
    }
if (index == 506) {
     return 629;
    }
if (index == 507) {
     return 649;
    }
if (index == 508) {
     return 660;
    }
if (index == 509) {
     return 745;
    }
if (index == 510) {
     return 763;
    }
if (index == 511) {
     return 656;
    }
if (index == 512) {
     return 1826;
    }
if (index == 513) {
     return 591;
    }
if (index == 514) {
     return 643;
    }
if (index == 515) {
     return 730;
    }
if (index == 516) {
     return 750;
    }
if (index == 517) {
     return 634;
    }
if (index == 518) {
     return 649;
    }
if (index == 519) {
     return 622;
    }
if (index == 520) {
     return 621;
    }
if (index == 521) {
     return 658;
    }
if (index == 522) {
     return 635;
    }
if (index == 523) {
     return 657;
    }
if (index == 524) {
     return 638;
    }
if (index == 525) {
     return 686;
    }
if (index == 526) {
     return 646;
    }
if (index == 527) {
     return 622;
    }
if (index == 528) {
     return 723;
    }
if (index == 529) {
     return 729;
    }
if (index > 529) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1171;
    }
if (index == 1) {
     return 1121;
    }
if (index == 2) {
     return 1115;
    }
if (index == 3) {
     return 1096;
    }
if (index == 4) {
     return 1107;
    }
if (index == 5) {
     return 1129;
    }
if (index == 6) {
     return 1117;
    }
if (index == 7) {
     return 735;
    }
if (index == 8) {
     return 1125;
    }
if (index == 9) {
     return 1123;
    }
if (index == 10) {
     return 1129;
    }
if (index == 11) {
     return 1097;
    }
if (index == 12) {
     return 1129;
    }
if (index == 13) {
     return 1111;
    }
if (index == 14) {
     return 1123;
    }
if (index == 15) {
     return 1144;
    }
if (index == 16) {
     return 1113;
    }
if (index == 17) {
     return 1099;
    }
if (index == 18) {
     return 1109;
    }
if (index == 19) {
     return 1112;
    }
if (index == 20) {
     return 1115;
    }
if (index == 21) {
     return 1132;
    }
if (index == 22) {
     return 1115;
    }
if (index == 23) {
     return 1118;
    }
if (index == 24) {
     return 1112;
    }
if (index == 25) {
     return 1127;
    }
if (index == 26) {
     return 1115;
    }
if (index == 27) {
     return 1099;
    }
if (index == 28) {
     return 1126;
    }
if (index == 29) {
     return 1120;
    }
if (index == 30) {
     return 1125;
    }
if (index == 31) {
     return 1120;
    }
if (index == 32) {
     return 1118;
    }
if (index == 33) {
     return 1127;
    }
if (index == 34) {
     return 1120;
    }
if (index == 35) {
     return 1137;
    }
if (index == 36) {
     return 1113;
    }
if (index == 37) {
     return 1145;
    }
if (index == 38) {
     return 1093;
    }
if (index == 39) {
     return 1115;
    }
if (index == 40) {
     return 1124;
    }
if (index == 41) {
     return 1098;
    }
if (index == 42) {
     return 1127;
    }
if (index == 43) {
     return 1138;
    }
if (index == 44) {
     return 1125;
    }
if (index == 45) {
     return 1127;
    }
if (index == 46) {
     return 1120;
    }
if (index == 47) {
     return 1098;
    }
if (index == 48) {
     return 1097;
    }
if (index == 49) {
     return 1137;
    }
if (index == 50) {
     return 1134;
    }
if (index == 51) {
     return 1108;
    }
if (index == 52) {
     return 1098;
    }
if (index == 53) {
     return 1111;
    }
if (index == 54) {
     return 1125;
    }
if (index == 55) {
     return 1128;
    }
if (index == 56) {
     return 1120;
    }
if (index == 57) {
     return 1130;
    }
if (index == 58) {
     return 1112;
    }
if (index == 59) {
     return 1121;
    }
if (index == 60) {
     return 1131;
    }
if (index == 61) {
     return 1136;
    }
if (index == 62) {
     return 1115;
    }
if (index == 63) {
     return 1140;
    }
if (index == 64) {
     return 1123;
    }
if (index == 65) {
     return 1152;
    }
if (index == 66) {
     return 1121;
    }
if (index == 67) {
     return 1120;
    }
if (index == 68) {
     return 1149;
    }
if (index == 69) {
     return 1145;
    }
if (index == 70) {
     return 1129;
    }
if (index == 71) {
     return 1128;
    }
if (index == 72) {
     return 1141;
    }
if (index == 73) {
     return 1145;
    }
if (index == 74) {
     return 1131;
    }
if (index == 75) {
     return 1115;
    }
if (index == 76) {
     return 1125;
    }
if (index == 77) {
     return 1130;
    }
if (index == 78) {
     return 1114;
    }
if (index == 79) {
     return 1127;
    }
if (index == 80) {
     return 1127;
    }
if (index == 81) {
     return 1131;
    }
if (index == 82) {
     return 1126;
    }
if (index == 83) {
     return 1141;
    }
if (index == 84) {
     return 1136;
    }
if (index == 85) {
     return 1136;
    }
if (index == 86) {
     return 1144;
    }
if (index == 87) {
     return 1135;
    }
if (index == 88) {
     return 1135;
    }
if (index == 89) {
     return 1129;
    }
if (index == 90) {
     return 1142;
    }
if (index == 91) {
     return 1123;
    }
if (index == 92) {
     return 1142;
    }
if (index == 93) {
     return 1117;
    }
if (index == 94) {
     return 1132;
    }
if (index == 95) {
     return 1121;
    }
if (index == 96) {
     return 1135;
    }
if (index == 97) {
     return 1123;
    }
if (index == 98) {
     return 1136;
    }
if (index == 99) {
     return 1138;
    }
if (index == 100) {
     return 1121;
    }
if (index == 101) {
     return 1115;
    }
if (index == 102) {
     return 1135;
    }
if (index == 103) {
     return 1133;
    }
if (index == 104) {
     return 1143;
    }
if (index == 105) {
     return 1126;
    }
if (index == 106) {
     return 1130;
    }
if (index == 107) {
     return 1124;
    }
if (index == 108) {
     return 1128;
    }
if (index == 109) {
     return 1117;
    }
if (index == 110) {
     return 1128;
    }
if (index == 111) {
     return 1117;
    }
if (index == 112) {
     return 1121;
    }
if (index == 113) {
     return 1128;
    }
if (index == 114) {
     return 1128;
    }
if (index == 115) {
     return 1128;
    }
if (index == 116) {
     return 1140;
    }
if (index == 117) {
     return 1127;
    }
if (index == 118) {
     return 1130;
    }
if (index == 119) {
     return 1129;
    }
if (index == 120) {
     return 1129;
    }
if (index == 121) {
     return 1123;
    }
if (index == 122) {
     return 1135;
    }
if (index == 123) {
     return 1130;
    }
if (index == 124) {
     return 1119;
    }
if (index == 125) {
     return 1109;
    }
if (index == 126) {
     return 1132;
    }
if (index == 127) {
     return 1127;
    }
if (index == 128) {
     return 1131;
    }
if (index == 129) {
     return 1121;
    }
if (index == 130) {
     return 1126;
    }
if (index == 131) {
     return 1121;
    }
if (index == 132) {
     return 1133;
    }
if (index == 133) {
     return 1126;
    }
if (index == 134) {
     return 1131;
    }
if (index == 135) {
     return 1131;
    }
if (index == 136) {
     return 1140;
    }
if (index == 137) {
     return 1135;
    }
if (index == 138) {
     return 1141;
    }
if (index == 139) {
     return 1130;
    }
if (index == 140) {
     return 1132;
    }
if (index == 141) {
     return 1131;
    }
if (index == 142) {
     return 1128;
    }
if (index == 143) {
     return 1132;
    }
if (index == 144) {
     return 1145;
    }
if (index == 145) {
     return 1128;
    }
if (index == 146) {
     return 1126;
    }
if (index == 147) {
     return 1145;
    }
if (index == 148) {
     return 1132;
    }
if (index == 149) {
     return 1127;
    }
if (index == 150) {
     return 1137;
    }
if (index == 151) {
     return 1128;
    }
if (index == 152) {
     return 1134;
    }
if (index == 153) {
     return 1126;
    }
if (index == 154) {
     return 1133;
    }
if (index == 155) {
     return 1123;
    }
if (index == 156) {
     return 1136;
    }
if (index == 157) {
     return 1123;
    }
if (index == 158) {
     return 1133;
    }
if (index == 159) {
     return 1122;
    }
if (index == 160) {
     return 1138;
    }
if (index == 161) {
     return 1126;
    }
if (index == 162) {
     return 1138;
    }
if (index == 163) {
     return 1130;
    }
if (index == 164) {
     return 1147;
    }
if (index == 165) {
     return 1131;
    }
if (index == 166) {
     return 1154;
    }
if (index == 167) {
     return 1130;
    }
if (index == 168) {
     return 1150;
    }
if (index == 169) {
     return 1126;
    }
if (index == 170) {
     return 1132;
    }
if (index == 171) {
     return 1124;
    }
if (index == 172) {
     return 1130;
    }
if (index == 173) {
     return 1129;
    }
if (index == 174) {
     return 1117;
    }
if (index == 175) {
     return 1123;
    }
if (index == 176) {
     return 1140;
    }
if (index == 177) {
     return 1125;
    }
if (index == 178) {
     return 1125;
    }
if (index == 179) {
     return 1129;
    }
if (index == 180) {
     return 1143;
    }
if (index == 181) {
     return 1123;
    }
if (index == 182) {
     return 1144;
    }
if (index == 183) {
     return 1130;
    }
if (index == 184) {
     return 1146;
    }
if (index == 185) {
     return 1126;
    }
if (index == 186) {
     return 1128;
    }
if (index == 187) {
     return 734;
    }
if (index == 188) {
     return 1130;
    }
if (index == 189) {
     return 1132;
    }
if (index == 190) {
     return 1132;
    }
if (index == 191) {
     return 1135;
    }
if (index == 192) {
     return 1145;
    }
if (index == 193) {
     return 1126;
    }
if (index == 194) {
     return 1152;
    }
if (index == 195) {
     return 1128;
    }
if (index == 196) {
     return 1141;
    }
if (index == 197) {
     return 1123;
    }
if (index == 198) {
     return 1140;
    }
if (index == 199) {
     return 1124;
    }
if (index == 200) {
     return 1150;
    }
if (index == 201) {
     return 1119;
    }
if (index == 202) {
     return 1117;
    }
if (index == 203) {
     return 1119;
    }
if (index == 204) {
     return 1120;
    }
if (index == 205) {
     return 1123;
    }
if (index == 206) {
     return 1125;
    }
if (index == 207) {
     return 1129;
    }
if (index == 208) {
     return 1120;
    }
if (index == 209) {
     return 1128;
    }
if (index == 210) {
     return 1120;
    }
if (index == 211) {
     return 1132;
    }
if (index == 212) {
     return 1115;
    }
if (index == 213) {
     return 1125;
    }
if (index == 214) {
     return 1115;
    }
if (index == 215) {
     return 1137;
    }
if (index == 216) {
     return 1110;
    }
if (index == 217) {
     return 1125;
    }
if (index == 218) {
     return 1125;
    }
if (index == 219) {
     return 1128;
    }
if (index == 220) {
     return 1121;
    }
if (index == 221) {
     return 1111;
    }
if (index == 222) {
     return 1120;
    }
if (index == 223) {
     return 1116;
    }
if (index == 224) {
     return 1119;
    }
if (index == 225) {
     return 1124;
    }
if (index == 226) {
     return 1114;
    }
if (index == 227) {
     return 1132;
    }
if (index == 228) {
     return 1118;
    }
if (index == 229) {
     return 1118;
    }
if (index == 230) {
     return 1122;
    }
if (index == 231) {
     return 1122;
    }
if (index == 232) {
     return 1120;
    }
if (index == 233) {
     return 1106;
    }
if (index == 234) {
     return 1117;
    }
if (index == 235) {
     return 1113;
    }
if (index == 236) {
     return 1128;
    }
if (index == 237) {
     return 1113;
    }
if (index == 238) {
     return 1116;
    }
if (index == 239) {
     return 1114;
    }
if (index == 240) {
     return 1120;
    }
if (index == 241) {
     return 1137;
    }
if (index == 242) {
     return 1119;
    }
if (index == 243) {
     return 1131;
    }
if (index == 244) {
     return 1126;
    }
if (index == 245) {
     return 1137;
    }
if (index == 246) {
     return 1127;
    }
if (index == 247) {
     return 1120;
    }
if (index == 248) {
     return 1094;
    }
if (index == 249) {
     return 1137;
    }
if (index == 250) {
     return 1103;
    }
if (index == 251) {
     return 1095;
    }
if (index == 252) {
     return 1130;
    }
if (index == 253) {
     return 1121;
    }
if (index == 254) {
     return 1107;
    }
if (index == 255) {
     return 1126;
    }
if (index == 256) {
     return 1118;
    }
if (index == 257) {
     return 1106;
    }
if (index == 258) {
     return 1128;
    }
if (index == 259) {
     return 1132;
    }
if (index == 260) {
     return 746;
    }
if (index == 261) {
     return 1099;
    }
if (index == 262) {
     return 1103;
    }
if (index == 263) {
     return 1136;
    }
if (index == 264) {
     return 1128;
    }
if (index == 265) {
     return 1092;
    }
if (index == 266) {
     return 1123;
    }
if (index == 267) {
     return 1113;
    }
if (index == 268) {
     return 1121;
    }
if (index == 269) {
     return 1119;
    }
if (index == 270) {
     return 1120;
    }
if (index == 271) {
     return 1098;
    }
if (index == 272) {
     return 1118;
    }
if (index == 273) {
     return 1115;
    }
if (index == 274) {
     return 1128;
    }
if (index == 275) {
     return 1120;
    }
if (index == 276) {
     return 1124;
    }
if (index == 277) {
     return 1129;
    }
if (index == 278) {
     return 1125;
    }
if (index == 279) {
     return 1131;
    }
if (index == 280) {
     return 1110;
    }
if (index == 281) {
     return 1115;
    }
if (index == 282) {
     return 1123;
    }
if (index == 283) {
     return 1119;
    }
if (index == 284) {
     return 1123;
    }
if (index == 285) {
     return 1100;
    }
if (index == 286) {
     return 764;
    }
if (index == 287) {
     return 1101;
    }
if (index == 288) {
     return 1118;
    }
if (index == 289) {
     return 1105;
    }
if (index == 290) {
     return 1118;
    }
if (index == 291) {
     return 1117;
    }
if (index == 292) {
     return 1109;
    }
if (index == 293) {
     return 1118;
    }
if (index == 294) {
     return 1109;
    }
if (index == 295) {
     return 1115;
    }
if (index == 296) {
     return 1114;
    }
if (index == 297) {
     return 1105;
    }
if (index == 298) {
     return 1107;
    }
if (index == 299) {
     return 1092;
    }
if (index == 300) {
     return 1116;
    }
if (index == 301) {
     return 1116;
    }
if (index == 302) {
     return 1124;
    }
if (index == 303) {
     return 1121;
    }
if (index == 304) {
     return 1119;
    }
if (index == 305) {
     return 1102;
    }
if (index == 306) {
     return 1105;
    }
if (index == 307) {
     return 1113;
    }
if (index == 308) {
     return 1117;
    }
if (index == 309) {
     return 1100;
    }
if (index == 310) {
     return 1120;
    }
if (index == 311) {
     return 1100;
    }
if (index == 312) {
     return 1115;
    }
if (index == 313) {
     return 1109;
    }
if (index == 314) {
     return 711;
    }
if (index == 315) {
     return 1073;
    }
if (index == 316) {
     return 1112;
    }
if (index == 317) {
     return 1104;
    }
if (index == 318) {
     return 1113;
    }
if (index == 319) {
     return 1106;
    }
if (index == 320) {
     return 1112;
    }
if (index == 321) {
     return 1096;
    }
if (index == 322) {
     return 1118;
    }
if (index == 323) {
     return 1134;
    }
if (index == 324) {
     return 1123;
    }
if (index == 325) {
     return 1101;
    }
if (index == 326) {
     return 1100;
    }
if (index == 327) {
     return 1102;
    }
if (index == 328) {
     return 1115;
    }
if (index == 329) {
     return 1091;
    }
if (index == 330) {
     return 1095;
    }
if (index == 331) {
     return 1114;
    }
if (index == 332) {
     return 1107;
    }
if (index == 333) {
     return 1127;
    }
if (index == 334) {
     return 1108;
    }
if (index == 335) {
     return 1116;
    }
if (index == 336) {
     return 1110;
    }
if (index == 337) {
     return 1126;
    }
if (index == 338) {
     return 1108;
    }
if (index == 339) {
     return 1119;
    }
if (index == 340) {
     return 1111;
    }
if (index == 341) {
     return 1119;
    }
if (index == 342) {
     return 1108;
    }
if (index == 343) {
     return 1100;
    }
if (index == 344) {
     return 1115;
    }
if (index == 345) {
     return 1123;
    }
if (index == 346) {
     return 1096;
    }
if (index == 347) {
     return 1121;
    }
if (index == 348) {
     return 1091;
    }
if (index == 349) {
     return 1113;
    }
if (index == 350) {
     return 1091;
    }
if (index == 351) {
     return 1138;
    }
if (index == 352) {
     return 1100;
    }
if (index == 353) {
     return 1109;
    }
if (index == 354) {
     return 1109;
    }
if (index == 355) {
     return 1113;
    }
if (index == 356) {
     return 1109;
    }
if (index == 357) {
     return 1119;
    }
if (index == 358) {
     return 1110;
    }
if (index == 359) {
     return 1119;
    }
if (index == 360) {
     return 1099;
    }
if (index == 361) {
     return 1110;
    }
if (index == 362) {
     return 1109;
    }
if (index == 363) {
     return 1098;
    }
if (index == 364) {
     return 1086;
    }
if (index == 365) {
     return 1134;
    }
if (index == 366) {
     return 1085;
    }
if (index == 367) {
     return 1123;
    }
if (index == 368) {
     return 1087;
    }
if (index == 369) {
     return 1091;
    }
if (index == 370) {
     return 1109;
    }
if (index == 371) {
     return 1111;
    }
if (index == 372) {
     return 1109;
    }
if (index == 373) {
     return 1117;
    }
if (index == 374) {
     return 1107;
    }
if (index == 375) {
     return 1127;
    }
if (index == 376) {
     return 1111;
    }
if (index == 377) {
     return 1113;
    }
if (index == 378) {
     return 1110;
    }
if (index == 379) {
     return 1096;
    }
if (index == 380) {
     return 1109;
    }
if (index == 381) {
     return 1125;
    }
if (index == 382) {
     return 1105;
    }
if (index == 383) {
     return 1112;
    }
if (index == 384) {
     return 1100;
    }
if (index == 385) {
     return 1116;
    }
if (index == 386) {
     return 1105;
    }
if (index == 387) {
     return 1118;
    }
if (index == 388) {
     return 1112;
    }
if (index == 389) {
     return 1116;
    }
if (index == 390) {
     return 1106;
    }
if (index == 391) {
     return 1122;
    }
if (index == 392) {
     return 1090;
    }
if (index == 393) {
     return 1123;
    }
if (index == 394) {
     return 1090;
    }
if (index == 395) {
     return 1105;
    }
if (index == 396) {
     return 1103;
    }
if (index == 397) {
     return 1106;
    }
if (index == 398) {
     return 1105;
    }
if (index == 399) {
     return 1104;
    }
if (index == 400) {
     return 1102;
    }
if (index == 401) {
     return 1095;
    }
if (index == 402) {
     return 1097;
    }
if (index == 403) {
     return 1056;
    }
if (index == 404) {
     return 1068;
    }
if (index == 405) {
     return 1087;
    }
if (index == 406) {
     return 1084;
    }
if (index == 407) {
     return 1109;
    }
if (index == 408) {
     return 1093;
    }
if (index == 409) {
     return 1108;
    }
if (index == 410) {
     return 1108;
    }
if (index == 411) {
     return 1131;
    }
if (index == 412) {
     return 1099;
    }
if (index == 413) {
     return 1113;
    }
if (index == 414) {
     return 1091;
    }
if (index == 415) {
     return 1102;
    }
if (index == 416) {
     return 1090;
    }
if (index == 417) {
     return 1131;
    }
if (index == 418) {
     return 1086;
    }
if (index == 419) {
     return 1116;
    }
if (index == 420) {
     return 1093;
    }
if (index == 421) {
     return 1081;
    }
if (index == 422) {
     return 1090;
    }
if (index == 423) {
     return 1068;
    }
if (index == 424) {
     return 720;
    }
if (index == 425) {
     return 1064;
    }
if (index == 426) {
     return 1094;
    }
if (index == 427) {
     return 1099;
    }
if (index == 428) {
     return 1087;
    }
if (index == 429) {
     return 1123;
    }
if (index == 430) {
     return 1092;
    }
if (index == 431) {
     return 1116;
    }
if (index == 432) {
     return 1083;
    }
if (index == 433) {
     return 1083;
    }
if (index == 434) {
     return 1053;
    }
if (index == 435) {
     return 1077;
    }
if (index == 436) {
     return 1064;
    }
if (index == 437) {
     return 1073;
    }
if (index == 438) {
     return 1042;
    }
if (index == 439) {
     return 1077;
    }
if (index == 440) {
     return 1043;
    }
if (index == 441) {
     return 1068;
    }
if (index == 442) {
     return 1040;
    }
if (index == 443) {
     return 1089;
    }
if (index == 444) {
     return 1011;
    }
if (index == 445) {
     return 693;
    }
if (index == 446) {
     return 1018;
    }
if (index == 447) {
     return 1102;
    }
if (index == 448) {
     return 699;
    }
if (index == 449) {
     return 986;
    }
if (index == 450) {
     return 1041;
    }
if (index == 451) {
     return 1084;
    }
if (index == 452) {
     return 1080;
    }
if (index == 453) {
     return 1086;
    }
if (index == 454) {
     return 1062;
    }
if (index == 455) {
     return 1077;
    }
if (index == 456) {
     return 1051;
    }
if (index == 457) {
     return 1078;
    }
if (index == 458) {
     return 1057;
    }
if (index == 459) {
     return 1026;
    }
if (index == 460) {
     return 1057;
    }
if (index == 461) {
     return 1117;
    }
if (index == 462) {
     return 1091;
    }
if (index == 463) {
     return 1120;
    }
if (index == 464) {
     return 1091;
    }
if (index == 465) {
     return 1122;
    }
if (index == 466) {
     return 1085;
    }
if (index == 467) {
     return 1085;
    }
if (index == 468) {
     return 1033;
    }
if (index == 469) {
     return 1067;
    }
if (index == 470) {
     return 1046;
    }
if (index == 471) {
     return 1029;
    }
if (index == 472) {
     return 1033;
    }
if (index == 473) {
     return 1037;
    }
if (index == 474) {
     return 994;
    }
if (index == 475) {
     return 1118;
    }
if (index == 476) {
     return 1111;
    }
if (index == 477) {
     return 1116;
    }
if (index == 478) {
     return 1097;
    }
if (index == 479) {
     return 1123;
    }
if (index == 480) {
     return 1096;
    }
if (index == 481) {
     return 1109;
    }
if (index == 482) {
     return 1094;
    }
if (index == 483) {
     return 1115;
    }
if (index == 484) {
     return 1098;
    }
if (index == 485) {
     return 1102;
    }
if (index == 486) {
     return 1077;
    }
if (index == 487) {
     return 1114;
    }
if (index == 488) {
     return 1098;
    }
if (index == 489) {
     return 1114;
    }
if (index == 490) {
     return 1094;
    }
if (index == 491) {
     return 1115;
    }
if (index == 492) {
     return 1099;
    }
if (index == 493) {
     return 1110;
    }
if (index == 494) {
     return 1111;
    }
if (index == 495) {
     return 1103;
    }
if (index == 496) {
     return 1065;
    }
if (index == 497) {
     return 1052;
    }
if (index == 498) {
     return 1050;
    }
if (index == 499) {
     return 1077;
    }
if (index == 500) {
     return 1098;
    }
if (index == 501) {
     return 1106;
    }
if (index == 502) {
     return 1092;
    }
if (index == 503) {
     return 1090;
    }
if (index == 504) {
     return 1103;
    }
if (index == 505) {
     return 1085;
    }
if (index == 506) {
     return 1093;
    }
if (index == 507) {
     return 1073;
    }
if (index == 508) {
     return 1063;
    }
if (index == 509) {
     return 1133;
    }
if (index == 510) {
     return 1170;
    }
if (index == 511) {
     return 1055;
    }
if (index == 512) {
     return 1082;
    }
if (index == 513) {
     return 1010;
    }
if (index == 514) {
     return 1031;
    }
if (index == 515) {
     return 1140;
    }
if (index == 516) {
     return 1162;
    }
if (index == 517) {
     return 1039;
    }
if (index == 518) {
     return 1028;
    }
if (index == 519) {
     return 1029;
    }
if (index == 520) {
     return 1028;
    }
if (index == 521) {
     return 1035;
    }
if (index == 522) {
     return 1027;
    }
if (index == 523) {
     return 1063;
    }
if (index == 524) {
     return 1095;
    }
if (index == 525) {
     return 1085;
    }
if (index == 526) {
     return 1060;
    }
if (index == 527) {
     return 1036;
    }
if (index == 528) {
     return 1034;
    }
if (index == 529) {
     return 1075;
    }
if (index > 529) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:217_' + imgStr + '/digitalImage';
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
br.numLeafs = 530;

// Book title and the URL used for the book title link
br.bookTitle= "The golden Chersonese and the way thither";
br.bookAuthor= "Bird, Isabella L. (Isabella Lucy)";
br.bookPub= "New York: Putnam, 1884";
br.bookKeyword= "Malaya--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;China--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:217';

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
