//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 345;
    }
if (index == 1) {
     return 306;
    }
if (index == 2) {
     return 301;
    }
if (index == 3) {
     return 299;
    }
if (index == 4) {
     return 311;
    }
if (index == 5) {
     return 294;
    }
if (index == 6) {
     return 297;
    }
if (index == 7) {
     return 304;
    }
if (index == 8) {
     return 298;
    }
if (index == 9) {
     return 298;
    }
if (index == 10) {
     return 297;
    }
if (index == 11) {
     return 298;
    }
if (index == 12) {
     return 309;
    }
if (index == 13) {
     return 306;
    }
if (index == 14) {
     return 302;
    }
if (index == 15) {
     return 311;
    }
if (index == 16) {
     return 288;
    }
if (index == 17) {
     return 289;
    }
if (index == 18) {
     return 303;
    }
if (index == 19) {
     return 293;
    }
if (index == 20) {
     return 303;
    }
if (index == 21) {
     return 289;
    }
if (index == 22) {
     return 297;
    }
if (index == 23) {
     return 382;
    }
if (index == 24) {
     return 295;
    }
if (index == 25) {
     return 288;
    }
if (index == 26) {
     return 291;
    }
if (index == 27) {
     return 298;
    }
if (index == 28) {
     return 295;
    }
if (index == 29) {
     return 303;
    }
if (index == 30) {
     return 289;
    }
if (index == 31) {
     return 301;
    }
if (index == 32) {
     return 294;
    }
if (index == 33) {
     return 293;
    }
if (index == 34) {
     return 301;
    }
if (index == 35) {
     return 295;
    }
if (index == 36) {
     return 298;
    }
if (index == 37) {
     return 295;
    }
if (index == 38) {
     return 294;
    }
if (index == 39) {
     return 290;
    }
if (index == 40) {
     return 296;
    }
if (index == 41) {
     return 286;
    }
if (index == 42) {
     return 308;
    }
if (index == 43) {
     return 291;
    }
if (index == 44) {
     return 306;
    }
if (index == 45) {
     return 296;
    }
if (index == 46) {
     return 310;
    }
if (index == 47) {
     return 289;
    }
if (index == 48) {
     return 302;
    }
if (index == 49) {
     return 289;
    }
if (index == 50) {
     return 292;
    }
if (index == 51) {
     return 291;
    }
if (index == 52) {
     return 293;
    }
if (index == 53) {
     return 292;
    }
if (index == 54) {
     return 288;
    }
if (index == 55) {
     return 293;
    }
if (index == 56) {
     return 282;
    }
if (index == 57) {
     return 286;
    }
if (index == 58) {
     return 293;
    }
if (index == 59) {
     return 287;
    }
if (index == 60) {
     return 284;
    }
if (index == 61) {
     return 289;
    }
if (index == 62) {
     return 279;
    }
if (index == 63) {
     return 287;
    }
if (index == 64) {
     return 283;
    }
if (index == 65) {
     return 299;
    }
if (index == 66) {
     return 289;
    }
if (index == 67) {
     return 295;
    }
if (index == 68) {
     return 288;
    }
if (index == 69) {
     return 272;
    }
if (index == 70) {
     return 295;
    }
if (index == 71) {
     return 298;
    }
if (index == 72) {
     return 291;
    }
if (index == 73) {
     return 298;
    }
if (index == 74) {
     return 288;
    }
if (index == 75) {
     return 296;
    }
if (index == 76) {
     return 286;
    }
if (index == 77) {
     return 295;
    }
if (index == 78) {
     return 287;
    }
if (index == 79) {
     return 297;
    }
if (index == 80) {
     return 287;
    }
if (index == 81) {
     return 294;
    }
if (index == 82) {
     return 284;
    }
if (index == 83) {
     return 300;
    }
if (index == 84) {
     return 292;
    }
if (index == 85) {
     return 299;
    }
if (index == 86) {
     return 296;
    }
if (index == 87) {
     return 298;
    }
if (index == 88) {
     return 292;
    }
if (index == 89) {
     return 299;
    }
if (index == 90) {
     return 298;
    }
if (index == 91) {
     return 295;
    }
if (index == 92) {
     return 296;
    }
if (index == 93) {
     return 271;
    }
if (index == 94) {
     return 295;
    }
if (index == 95) {
     return 293;
    }
if (index == 96) {
     return 296;
    }
if (index == 97) {
     return 301;
    }
if (index == 98) {
     return 289;
    }
if (index == 99) {
     return 298;
    }
if (index == 100) {
     return 294;
    }
if (index == 101) {
     return 299;
    }
if (index == 102) {
     return 290;
    }
if (index == 103) {
     return 293;
    }
if (index == 104) {
     return 231;
    }
if (index == 105) {
     return 296;
    }
if (index == 106) {
     return 300;
    }
if (index == 107) {
     return 300;
    }
if (index == 108) {
     return 296;
    }
if (index == 109) {
     return 297;
    }
if (index == 110) {
     return 295;
    }
if (index == 111) {
     return 297;
    }
if (index == 112) {
     return 296;
    }
if (index == 113) {
     return 306;
    }
if (index == 114) {
     return 301;
    }
if (index == 115) {
     return 300;
    }
if (index == 116) {
     return 298;
    }
if (index == 117) {
     return 296;
    }
if (index == 118) {
     return 300;
    }
if (index == 119) {
     return 302;
    }
if (index == 120) {
     return 299;
    }
if (index == 121) {
     return 298;
    }
if (index == 122) {
     return 300;
    }
if (index == 123) {
     return 297;
    }
if (index == 124) {
     return 295;
    }
if (index == 125) {
     return 299;
    }
if (index == 126) {
     return 300;
    }
if (index == 127) {
     return 297;
    }
if (index == 128) {
     return 298;
    }
if (index == 129) {
     return 294;
    }
if (index == 130) {
     return 299;
    }
if (index == 131) {
     return 293;
    }
if (index == 132) {
     return 301;
    }
if (index == 133) {
     return 298;
    }
if (index == 134) {
     return 301;
    }
if (index == 135) {
     return 290;
    }
if (index == 136) {
     return 300;
    }
if (index == 137) {
     return 297;
    }
if (index == 138) {
     return 299;
    }
if (index == 139) {
     return 283;
    }
if (index == 140) {
     return 299;
    }
if (index == 141) {
     return 298;
    }
if (index == 142) {
     return 229;
    }
if (index == 143) {
     return 297;
    }
if (index == 144) {
     return 304;
    }
if (index == 145) {
     return 299;
    }
if (index == 146) {
     return 297;
    }
if (index == 147) {
     return 298;
    }
if (index == 148) {
     return 298;
    }
if (index == 149) {
     return 307;
    }
if (index == 150) {
     return 303;
    }
if (index == 151) {
     return 305;
    }
if (index == 152) {
     return 296;
    }
if (index == 153) {
     return 305;
    }
if (index == 154) {
     return 300;
    }
if (index == 155) {
     return 305;
    }
if (index == 156) {
     return 297;
    }
if (index == 157) {
     return 294;
    }
if (index == 158) {
     return 294;
    }
if (index == 159) {
     return 296;
    }
if (index == 160) {
     return 230;
    }
if (index == 161) {
     return 302;
    }
if (index == 162) {
     return 301;
    }
if (index == 163) {
     return 302;
    }
if (index == 164) {
     return 298;
    }
if (index == 165) {
     return 303;
    }
if (index == 166) {
     return 303;
    }
if (index == 167) {
     return 299;
    }
if (index == 168) {
     return 303;
    }
if (index == 169) {
     return 304;
    }
if (index == 170) {
     return 297;
    }
if (index == 171) {
     return 293;
    }
if (index == 172) {
     return 305;
    }
if (index == 173) {
     return 303;
    }
if (index == 174) {
     return 301;
    }
if (index == 175) {
     return 299;
    }
if (index == 176) {
     return 228;
    }
if (index == 177) {
     return 301;
    }
if (index == 178) {
     return 294;
    }
if (index == 179) {
     return 300;
    }
if (index == 180) {
     return 300;
    }
if (index == 181) {
     return 297;
    }
if (index == 182) {
     return 301;
    }
if (index == 183) {
     return 299;
    }
if (index == 184) {
     return 297;
    }
if (index == 185) {
     return 282;
    }
if (index == 186) {
     return 295;
    }
if (index == 187) {
     return 298;
    }
if (index == 188) {
     return 298;
    }
if (index == 189) {
     return 297;
    }
if (index == 190) {
     return 300;
    }
if (index == 191) {
     return 299;
    }
if (index == 192) {
     return 302;
    }
if (index == 193) {
     return 298;
    }
if (index == 194) {
     return 303;
    }
if (index == 195) {
     return 305;
    }
if (index == 196) {
     return 293;
    }
if (index == 197) {
     return 300;
    }
if (index == 198) {
     return 297;
    }
if (index == 199) {
     return 304;
    }
if (index == 200) {
     return 301;
    }
if (index == 201) {
     return 301;
    }
if (index == 202) {
     return 303;
    }
if (index == 203) {
     return 301;
    }
if (index == 204) {
     return 298;
    }
if (index == 205) {
     return 302;
    }
if (index == 206) {
     return 304;
    }
if (index == 207) {
     return 305;
    }
if (index == 208) {
     return 301;
    }
if (index == 209) {
     return 279;
    }
if (index == 210) {
     return 302;
    }
if (index == 211) {
     return 305;
    }
if (index == 212) {
     return 297;
    }
if (index == 213) {
     return 310;
    }
if (index == 214) {
     return 302;
    }
if (index == 215) {
     return 301;
    }
if (index == 216) {
     return 299;
    }
if (index == 217) {
     return 300;
    }
if (index == 218) {
     return 298;
    }
if (index == 219) {
     return 302;
    }
if (index == 220) {
     return 294;
    }
if (index == 221) {
     return 287;
    }
if (index == 222) {
     return 295;
    }
if (index == 223) {
     return 291;
    }
if (index == 224) {
     return 305;
    }
if (index == 225) {
     return 302;
    }
if (index == 226) {
     return 299;
    }
if (index == 227) {
     return 305;
    }
if (index == 228) {
     return 298;
    }
if (index == 229) {
     return 305;
    }
if (index == 230) {
     return 303;
    }
if (index == 231) {
     return 298;
    }
if (index == 232) {
     return 305;
    }
if (index == 233) {
     return 297;
    }
if (index == 234) {
     return 223;
    }
if (index == 235) {
     return 297;
    }
if (index == 236) {
     return 296;
    }
if (index == 237) {
     return 300;
    }
if (index == 238) {
     return 297;
    }
if (index == 239) {
     return 300;
    }
if (index == 240) {
     return 287;
    }
if (index == 241) {
     return 295;
    }
if (index == 242) {
     return 299;
    }
if (index == 243) {
     return 295;
    }
if (index == 244) {
     return 291;
    }
if (index == 245) {
     return 294;
    }
if (index == 246) {
     return 291;
    }
if (index == 247) {
     return 284;
    }
if (index == 248) {
     return 295;
    }
if (index == 249) {
     return 294;
    }
if (index == 250) {
     return 289;
    }
if (index == 251) {
     return 298;
    }
if (index == 252) {
     return 297;
    }
if (index == 253) {
     return 300;
    }
if (index == 254) {
     return 298;
    }
if (index == 255) {
     return 297;
    }
if (index == 256) {
     return 291;
    }
if (index == 257) {
     return 299;
    }
if (index == 258) {
     return 298;
    }
if (index == 259) {
     return 296;
    }
if (index == 260) {
     return 298;
    }
if (index == 261) {
     return 299;
    }
if (index == 262) {
     return 303;
    }
if (index == 263) {
     return 291;
    }
if (index == 264) {
     return 291;
    }
if (index == 265) {
     return 291;
    }
if (index == 266) {
     return 299;
    }
if (index == 267) {
     return 293;
    }
if (index == 268) {
     return 292;
    }
if (index == 269) {
     return 400;
    }
if (index == 270) {
     return 209;
    }
if (index == 271) {
     return 203;
    }
if (index == 272) {
     return 296;
    }
if (index == 273) {
     return 293;
    }
if (index == 274) {
     return 201;
    }
if (index == 275) {
     return 390;
    }
if (index == 276) {
     return 398;
    }
if (index == 277) {
     return 302;
    }
if (index == 278) {
     return 205;
    }
if (index == 279) {
     return 395;
    }
if (index == 280) {
     return 292;
    }
if (index == 281) {
     return 395;
    }
if (index == 282) {
     return 208;
    }
if (index == 283) {
     return 201;
    }
if (index == 284) {
     return 388;
    }
if (index == 285) {
     return 287;
    }
if (index == 286) {
     return 225;
    }
if (index == 287) {
     return 399;
    }
if (index == 288) {
     return 398;
    }
if (index == 289) {
     return 397;
    }
if (index == 290) {
     return 304;
    }
if (index == 291) {
     return 204;
    }
if (index == 292) {
     return 204;
    }
if (index == 293) {
     return 205;
    }
if (index == 294) {
     return 304;
    }
if (index == 295) {
     return 300;
    }
if (index == 296) {
     return 203;
    }
if (index == 297) {
     return 393;
    }
if (index == 298) {
     return 204;
    }
if (index == 299) {
     return 202;
    }
if (index == 300) {
     return 203;
    }
if (index == 301) {
     return 301;
    }
if (index == 302) {
     return 204;
    }
if (index == 303) {
     return 307;
    }
if (index == 304) {
     return 305;
    }
if (index == 305) {
     return 209;
    }
if (index == 306) {
     return 206;
    }
if (index == 307) {
     return 294;
    }
if (index == 308) {
     return 295;
    }
if (index == 309) {
     return 207;
    }
if (index == 310) {
     return 301;
    }
if (index == 311) {
     return 206;
    }
if (index == 312) {
     return 206;
    }
if (index == 313) {
     return 301;
    }
if (index == 314) {
     return 291;
    }
if (index == 315) {
     return 210;
    }
if (index == 316) {
     return 290;
    }
if (index == 317) {
     return 204;
    }
if (index == 318) {
     return 286;
    }
if (index == 319) {
     return 206;
    }
if (index == 320) {
     return 202;
    }
if (index == 321) {
     return 208;
    }
if (index == 322) {
     return 299;
    }
if (index == 323) {
     return 294;
    }
if (index == 324) {
     return 227;
    }
if (index == 325) {
     return 308;
    }
if (index == 326) {
     return 206;
    }
if (index == 327) {
     return 201;
    }
if (index == 328) {
     return 306;
    }
if (index == 329) {
     return 208;
    }
if (index == 330) {
     return 389;
    }
if (index == 331) {
     return 294;
    }
if (index == 332) {
     return 211;
    }
if (index == 333) {
     return 205;
    }
if (index == 334) {
     return 299;
    }
if (index == 335) {
     return 203;
    }
if (index == 336) {
     return 314;
    }
if (index == 337) {
     return 291;
    }
if (index == 338) {
     return 205;
    }
if (index == 339) {
     return 204;
    }
if (index == 340) {
     return 211;
    }
if (index == 341) {
     return 301;
    }
if (index == 342) {
     return 214;
    }
if (index == 343) {
     return 206;
    }
if (index == 344) {
     return 298;
    }
if (index == 345) {
     return 205;
    }
if (index == 346) {
     return 212;
    }
if (index == 347) {
     return 208;
    }
if (index == 348) {
     return 312;
    }
if (index == 349) {
     return 356;
    }
if (index == 350) {
     return 295;
    }
if (index == 351) {
     return 276;
    }
if (index == 352) {
     return 204;
    }
if (index == 353) {
     return 292;
    }
if (index == 354) {
     return 212;
    }
if (index == 355) {
     return 400;
    }
if (index == 356) {
     return 289;
    }
if (index == 357) {
     return 289;
    }
if (index == 358) {
     return 205;
    }
if (index == 359) {
     return 303;
    }
if (index == 360) {
     return 207;
    }
if (index == 361) {
     return 397;
    }
if (index == 362) {
     return 299;
    }
if (index == 363) {
     return 308;
    }
if (index == 364) {
     return 211;
    }
if (index == 365) {
     return 202;
    }
if (index == 366) {
     return 211;
    }
if (index == 367) {
     return 400;
    }
if (index == 368) {
     return 304;
    }
if (index == 369) {
     return 205;
    }
if (index == 370) {
     return 208;
    }
if (index == 371) {
     return 302;
    }
if (index == 372) {
     return 209;
    }
if (index == 373) {
     return 281;
    }
if (index == 374) {
     return 290;
    }
if (index == 375) {
     return 396;
    }
if (index == 376) {
     return 293;
    }
if (index == 377) {
     return 204;
    }
if (index == 378) {
     return 320;
    }
if (index == 379) {
     return 305;
    }
if (index == 380) {
     return 211;
    }
if (index == 381) {
     return 208;
    }
if (index == 382) {
     return 298;
    }
if (index == 383) {
     return 206;
    }
if (index == 384) {
     return 302;
    }
if (index == 385) {
     return 370;
    }
if (index == 386) {
     return 215;
    }
if (index == 387) {
     return 289;
    }
if (index == 388) {
     return 295;
    }
if (index == 389) {
     return 292;
    }
if (index == 390) {
     return 212;
    }
if (index == 391) {
     return 201;
    }
if (index == 392) {
     return 282;
    }
if (index == 393) {
     return 206;
    }
if (index == 394) {
     return 399;
    }
if (index == 395) {
     return 397;
    }
if (index == 396) {
     return 218;
    }
if (index == 397) {
     return 319;
    }
if (index == 398) {
     return 229;
    }
if (index == 399) {
     return 204;
    }
if (index == 400) {
     return 399;
    }
if (index == 401) {
     return 245;
    }
if (index == 402) {
     return 295;
    }
if (index == 403) {
     return 300;
    }
if (index == 404) {
     return 202;
    }
if (index == 405) {
     return 392;
    }
if (index == 406) {
     return 392;
    }
if (index == 407) {
     return 314;
    }
if (index == 408) {
     return 205;
    }
if (index == 409) {
     return 294;
    }
if (index == 410) {
     return 202;
    }
if (index == 411) {
     return 297;
    }
if (index == 412) {
     return 301;
    }
if (index == 413) {
     return 296;
    }
if (index == 414) {
     return 394;
    }
if (index == 415) {
     return 286;
    }
if (index == 416) {
     return 375;
    }
if (index == 417) {
     return 387;
    }
if (index == 418) {
     return 304;
    }
if (index == 419) {
     return 302;
    }
if (index == 420) {
     return 391;
    }
if (index == 421) {
     return 203;
    }
if (index == 422) {
     return 203;
    }
if (index == 423) {
     return 202;
    }
if (index == 424) {
     return 399;
    }
if (index == 425) {
     return 201;
    }
if (index == 426) {
     return 292;
    }
if (index == 427) {
     return 303;
    }
if (index == 428) {
     return 399;
    }
if (index == 429) {
     return 203;
    }
if (index == 430) {
     return 201;
    }
if (index == 431) {
     return 204;
    }
if (index == 432) {
     return 201;
    }
if (index == 433) {
     return 393;
    }
if (index == 434) {
     return 391;
    }
if (index == 435) {
     return 398;
    }
if (index == 436) {
     return 394;
    }
if (index == 437) {
     return 397;
    }
if (index == 438) {
     return 202;
    }
if (index == 439) {
     return 289;
    }
if (index == 440) {
     return 202;
    }
if (index == 441) {
     return 205;
    }
if (index == 442) {
     return 202;
    }
if (index == 443) {
     return 374;
    }
if (index == 444) {
     return 394;
    }
if (index == 445) {
     return 294;
    }
if (index == 446) {
     return 295;
    }
if (index == 447) {
     return 398;
    }
if (index == 448) {
     return 204;
    }
if (index == 449) {
     return 202;
    }
if (index == 450) {
     return 399;
    }
if (index == 451) {
     return 384;
    }
if (index == 452) {
     return 399;
    }
if (index == 453) {
     return 393;
    }
if (index == 454) {
     return 377;
    }
if (index == 455) {
     return 389;
    }
if (index == 456) {
     return 204;
    }
if (index == 457) {
     return 389;
    }
if (index == 458) {
     return 300;
    }
if (index == 459) {
     return 283;
    }
if (index == 460) {
     return 201;
    }
if (index == 461) {
     return 302;
    }
if (index == 462) {
     return 203;
    }
if (index == 463) {
     return 386;
    }
if (index == 464) {
     return 391;
    }
if (index == 465) {
     return 287;
    }
if (index == 466) {
     return 202;
    }
if (index == 467) {
     return 273;
    }
if (index == 468) {
     return 289;
    }
if (index == 469) {
     return 392;
    }
if (index == 470) {
     return 400;
    }
if (index == 471) {
     return 284;
    }
if (index == 472) {
     return 388;
    }
if (index == 473) {
     return 384;
    }
if (index == 474) {
     return 262;
    }
if (index == 475) {
     return 296;
    }
if (index == 476) {
     return 393;
    }
if (index == 477) {
     return 282;
    }
if (index == 478) {
     return 390;
    }
if (index == 479) {
     return 386;
    }
if (index == 480) {
     return 204;
    }
if (index == 481) {
     return 395;
    }
if (index == 482) {
     return 301;
    }
if (index == 483) {
     return 397;
    }
if (index == 484) {
     return 298;
    }
if (index == 485) {
     return 208;
    }
if (index == 486) {
     return 201;
    }
if (index == 487) {
     return 201;
    }
if (index == 488) {
     return 282;
    }
if (index == 489) {
     return 391;
    }
if (index == 490) {
     return 286;
    }
if (index == 491) {
     return 397;
    }
if (index == 492) {
     return 291;
    }
if (index == 493) {
     return 400;
    }
if (index == 494) {
     return 295;
    }
if (index == 495) {
     return 283;
    }
if (index == 496) {
     return 399;
    }
if (index == 497) {
     return 204;
    }
if (index == 498) {
     return 286;
    }
if (index == 499) {
     return 202;
    }
if (index == 500) {
     return 292;
    }
if (index == 501) {
     return 295;
    }
if (index == 502) {
     return 291;
    }
if (index == 503) {
     return 203;
    }
if (index == 504) {
     return 300;
    }
if (index == 505) {
     return 201;
    }
if (index == 506) {
     return 305;
    }
if (index == 507) {
     return 290;
    }
if (index == 508) {
     return 295;
    }
if (index == 509) {
     return 395;
    }
if (index == 510) {
     return 398;
    }
if (index == 511) {
     return 389;
    }
if (index == 512) {
     return 210;
    }
if (index == 513) {
     return 395;
    }
if (index == 514) {
     return 399;
    }
if (index == 515) {
     return 390;
    }
if (index == 516) {
     return 298;
    }
if (index == 517) {
     return 224;
    }
if (index == 518) {
     return 295;
    }
if (index == 519) {
     return 287;
    }
if (index == 520) {
     return 203;
    }
if (index == 521) {
     return 203;
    }
if (index == 522) {
     return 303;
    }
if (index == 523) {
     return 391;
    }
if (index == 524) {
     return 310;
    }
if (index == 525) {
     return 391;
    }
if (index == 526) {
     return 320;
    }
if (index == 527) {
     return 216;
    }
if (index == 528) {
     return 295;
    }
if (index == 529) {
     return 303;
    }
if (index == 530) {
     return 305;
    }
if (index == 531) {
     return 299;
    }
if (index == 532) {
     return 288;
    }
if (index == 533) {
     return 304;
    }
if (index == 534) {
     return 315;
    }
if (index == 535) {
     return 285;
    }
if (index == 536) {
     return 295;
    }
if (index == 537) {
     return 305;
    }
if (index == 538) {
     return 323;
    }
if (index == 539) {
     return 310;
    }
if (index == 540) {
     return 326;
    }
if (index == 541) {
     return 310;
    }
if (index == 542) {
     return 325;
    }
if (index == 543) {
     return 303;
    }
if (index == 544) {
     return 285;
    }
if (index == 545) {
     return 286;
    }
if (index == 546) {
     return 299;
    }
if (index == 547) {
     return 309;
    }
if (index == 548) {
     return 311;
    }
if (index == 549) {
     return 316;
    }
if (index == 550) {
     return 309;
    }
if (index == 551) {
     return 315;
    }
if (index == 552) {
     return 311;
    }
if (index == 553) {
     return 292;
    }
if (index == 554) {
     return 307;
    }
if (index == 555) {
     return 310;
    }
if (index == 556) {
     return 307;
    }
if (index == 557) {
     return 306;
    }
if (index == 558) {
     return 316;
    }
if (index == 559) {
     return 316;
    }
if (index == 560) {
     return 317;
    }
if (index == 561) {
     return 310;
    }
if (index == 562) {
     return 304;
    }
if (index == 563) {
     return 295;
    }
if (index == 564) {
     return 305;
    }
if (index == 565) {
     return 311;
    }
if (index == 566) {
     return 306;
    }
if (index == 567) {
     return 315;
    }
if (index == 568) {
     return 306;
    }
if (index == 569) {
     return 306;
    }
if (index == 570) {
     return 309;
    }
if (index == 571) {
     return 304;
    }
if (index == 572) {
     return 305;
    }
if (index == 573) {
     return 309;
    }
if (index == 574) {
     return 312;
    }
if (index == 575) {
     return 315;
    }
if (index == 576) {
     return 312;
    }
if (index == 577) {
     return 304;
    }
if (index == 578) {
     return 317;
    }
if (index == 579) {
     return 304;
    }
if (index == 580) {
     return 310;
    }
if (index == 581) {
     return 317;
    }
if (index == 582) {
     return 322;
    }
if (index == 583) {
     return 309;
    }
if (index == 584) {
     return 334;
    }
if (index == 585) {
     return 308;
    }
if (index == 586) {
     return 312;
    }
if (index == 587) {
     return 306;
    }
if (index == 588) {
     return 310;
    }
if (index == 589) {
     return 315;
    }
if (index == 590) {
     return 313;
    }
if (index == 591) {
     return 317;
    }
if (index == 592) {
     return 314;
    }
if (index == 593) {
     return 307;
    }
if (index == 594) {
     return 321;
    }
if (index == 595) {
     return 315;
    }
if (index == 596) {
     return 315;
    }
if (index == 597) {
     return 310;
    }
if (index == 598) {
     return 316;
    }
if (index == 599) {
     return 309;
    }
if (index == 600) {
     return 319;
    }
if (index == 601) {
     return 312;
    }
if (index == 602) {
     return 321;
    }
if (index == 603) {
     return 325;
    }
if (index == 604) {
     return 332;
    }
if (index == 605) {
     return 301;
    }
if (index == 606) {
     return 228;
    }
if (index == 607) {
     return 337;
    }
if (index > 607) {
    return 400;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 478;
    }
if (index == 1) {
     return 460;
    }
if (index == 2) {
     return 454;
    }
if (index == 3) {
     return 451;
    }
if (index == 4) {
     return 453;
    }
if (index == 5) {
     return 456;
    }
if (index == 6) {
     return 455;
    }
if (index == 7) {
     return 461;
    }
if (index == 8) {
     return 459;
    }
if (index == 9) {
     return 457;
    }
if (index == 10) {
     return 458;
    }
if (index == 11) {
     return 453;
    }
if (index == 12) {
     return 459;
    }
if (index == 13) {
     return 457;
    }
if (index == 14) {
     return 454;
    }
if (index == 15) {
     return 465;
    }
if (index == 16) {
     return 441;
    }
if (index == 17) {
     return 449;
    }
if (index == 18) {
     return 455;
    }
if (index == 19) {
     return 452;
    }
if (index == 20) {
     return 456;
    }
if (index == 21) {
     return 452;
    }
if (index == 22) {
     return 461;
    }
if (index == 23) {
     return 433;
    }
if (index == 24) {
     return 452;
    }
if (index == 25) {
     return 455;
    }
if (index == 26) {
     return 460;
    }
if (index == 27) {
     return 450;
    }
if (index == 28) {
     return 459;
    }
if (index == 29) {
     return 455;
    }
if (index == 30) {
     return 460;
    }
if (index == 31) {
     return 452;
    }
if (index == 32) {
     return 460;
    }
if (index == 33) {
     return 451;
    }
if (index == 34) {
     return 459;
    }
if (index == 35) {
     return 452;
    }
if (index == 36) {
     return 460;
    }
if (index == 37) {
     return 452;
    }
if (index == 38) {
     return 454;
    }
if (index == 39) {
     return 455;
    }
if (index == 40) {
     return 457;
    }
if (index == 41) {
     return 453;
    }
if (index == 42) {
     return 454;
    }
if (index == 43) {
     return 454;
    }
if (index == 44) {
     return 456;
    }
if (index == 45) {
     return 454;
    }
if (index == 46) {
     return 455;
    }
if (index == 47) {
     return 442;
    }
if (index == 48) {
     return 456;
    }
if (index == 49) {
     return 454;
    }
if (index == 50) {
     return 462;
    }
if (index == 51) {
     return 453;
    }
if (index == 52) {
     return 460;
    }
if (index == 53) {
     return 451;
    }
if (index == 54) {
     return 456;
    }
if (index == 55) {
     return 453;
    }
if (index == 56) {
     return 457;
    }
if (index == 57) {
     return 452;
    }
if (index == 58) {
     return 455;
    }
if (index == 59) {
     return 453;
    }
if (index == 60) {
     return 450;
    }
if (index == 61) {
     return 450;
    }
if (index == 62) {
     return 453;
    }
if (index == 63) {
     return 446;
    }
if (index == 64) {
     return 459;
    }
if (index == 65) {
     return 453;
    }
if (index == 66) {
     return 461;
    }
if (index == 67) {
     return 454;
    }
if (index == 68) {
     return 458;
    }
if (index == 69) {
     return 405;
    }
if (index == 70) {
     return 452;
    }
if (index == 71) {
     return 453;
    }
if (index == 72) {
     return 460;
    }
if (index == 73) {
     return 454;
    }
if (index == 74) {
     return 464;
    }
if (index == 75) {
     return 456;
    }
if (index == 76) {
     return 456;
    }
if (index == 77) {
     return 451;
    }
if (index == 78) {
     return 457;
    }
if (index == 79) {
     return 451;
    }
if (index == 80) {
     return 455;
    }
if (index == 81) {
     return 443;
    }
if (index == 82) {
     return 456;
    }
if (index == 83) {
     return 450;
    }
if (index == 84) {
     return 458;
    }
if (index == 85) {
     return 452;
    }
if (index == 86) {
     return 458;
    }
if (index == 87) {
     return 454;
    }
if (index == 88) {
     return 456;
    }
if (index == 89) {
     return 449;
    }
if (index == 90) {
     return 456;
    }
if (index == 91) {
     return 454;
    }
if (index == 92) {
     return 447;
    }
if (index == 93) {
     return 503;
    }
if (index == 94) {
     return 452;
    }
if (index == 95) {
     return 447;
    }
if (index == 96) {
     return 454;
    }
if (index == 97) {
     return 452;
    }
if (index == 98) {
     return 456;
    }
if (index == 99) {
     return 447;
    }
if (index == 100) {
     return 455;
    }
if (index == 101) {
     return 456;
    }
if (index == 102) {
     return 447;
    }
if (index == 103) {
     return 457;
    }
if (index == 104) {
     return 303;
    }
if (index == 105) {
     return 449;
    }
if (index == 106) {
     return 462;
    }
if (index == 107) {
     return 448;
    }
if (index == 108) {
     return 457;
    }
if (index == 109) {
     return 453;
    }
if (index == 110) {
     return 454;
    }
if (index == 111) {
     return 454;
    }
if (index == 112) {
     return 452;
    }
if (index == 113) {
     return 453;
    }
if (index == 114) {
     return 460;
    }
if (index == 115) {
     return 451;
    }
if (index == 116) {
     return 459;
    }
if (index == 117) {
     return 453;
    }
if (index == 118) {
     return 462;
    }
if (index == 119) {
     return 452;
    }
if (index == 120) {
     return 457;
    }
if (index == 121) {
     return 456;
    }
if (index == 122) {
     return 454;
    }
if (index == 123) {
     return 454;
    }
if (index == 124) {
     return 456;
    }
if (index == 125) {
     return 454;
    }
if (index == 126) {
     return 455;
    }
if (index == 127) {
     return 455;
    }
if (index == 128) {
     return 453;
    }
if (index == 129) {
     return 458;
    }
if (index == 130) {
     return 459;
    }
if (index == 131) {
     return 458;
    }
if (index == 132) {
     return 456;
    }
if (index == 133) {
     return 450;
    }
if (index == 134) {
     return 459;
    }
if (index == 135) {
     return 457;
    }
if (index == 136) {
     return 454;
    }
if (index == 137) {
     return 459;
    }
if (index == 138) {
     return 451;
    }
if (index == 139) {
     return 442;
    }
if (index == 140) {
     return 452;
    }
if (index == 141) {
     return 456;
    }
if (index == 142) {
     return 307;
    }
if (index == 143) {
     return 458;
    }
if (index == 144) {
     return 457;
    }
if (index == 145) {
     return 458;
    }
if (index == 146) {
     return 460;
    }
if (index == 147) {
     return 456;
    }
if (index == 148) {
     return 460;
    }
if (index == 149) {
     return 458;
    }
if (index == 150) {
     return 459;
    }
if (index == 151) {
     return 457;
    }
if (index == 152) {
     return 459;
    }
if (index == 153) {
     return 453;
    }
if (index == 154) {
     return 458;
    }
if (index == 155) {
     return 458;
    }
if (index == 156) {
     return 460;
    }
if (index == 157) {
     return 457;
    }
if (index == 158) {
     return 456;
    }
if (index == 159) {
     return 448;
    }
if (index == 160) {
     return 298;
    }
if (index == 161) {
     return 456;
    }
if (index == 162) {
     return 457;
    }
if (index == 163) {
     return 455;
    }
if (index == 164) {
     return 459;
    }
if (index == 165) {
     return 457;
    }
if (index == 166) {
     return 461;
    }
if (index == 167) {
     return 453;
    }
if (index == 168) {
     return 455;
    }
if (index == 169) {
     return 454;
    }
if (index == 170) {
     return 459;
    }
if (index == 171) {
     return 452;
    }
if (index == 172) {
     return 455;
    }
if (index == 173) {
     return 445;
    }
if (index == 174) {
     return 460;
    }
if (index == 175) {
     return 456;
    }
if (index == 176) {
     return 310;
    }
if (index == 177) {
     return 457;
    }
if (index == 178) {
     return 457;
    }
if (index == 179) {
     return 449;
    }
if (index == 180) {
     return 459;
    }
if (index == 181) {
     return 452;
    }
if (index == 182) {
     return 458;
    }
if (index == 183) {
     return 455;
    }
if (index == 184) {
     return 459;
    }
if (index == 185) {
     return 448;
    }
if (index == 186) {
     return 452;
    }
if (index == 187) {
     return 451;
    }
if (index == 188) {
     return 457;
    }
if (index == 189) {
     return 450;
    }
if (index == 190) {
     return 459;
    }
if (index == 191) {
     return 452;
    }
if (index == 192) {
     return 459;
    }
if (index == 193) {
     return 453;
    }
if (index == 194) {
     return 460;
    }
if (index == 195) {
     return 454;
    }
if (index == 196) {
     return 457;
    }
if (index == 197) {
     return 451;
    }
if (index == 198) {
     return 457;
    }
if (index == 199) {
     return 451;
    }
if (index == 200) {
     return 459;
    }
if (index == 201) {
     return 448;
    }
if (index == 202) {
     return 461;
    }
if (index == 203) {
     return 446;
    }
if (index == 204) {
     return 456;
    }
if (index == 205) {
     return 449;
    }
if (index == 206) {
     return 456;
    }
if (index == 207) {
     return 449;
    }
if (index == 208) {
     return 457;
    }
if (index == 209) {
     return 449;
    }
if (index == 210) {
     return 461;
    }
if (index == 211) {
     return 455;
    }
if (index == 212) {
     return 459;
    }
if (index == 213) {
     return 472;
    }
if (index == 214) {
     return 454;
    }
if (index == 215) {
     return 454;
    }
if (index == 216) {
     return 460;
    }
if (index == 217) {
     return 457;
    }
if (index == 218) {
     return 458;
    }
if (index == 219) {
     return 455;
    }
if (index == 220) {
     return 461;
    }
if (index == 221) {
     return 455;
    }
if (index == 222) {
     return 452;
    }
if (index == 223) {
     return 452;
    }
if (index == 224) {
     return 456;
    }
if (index == 225) {
     return 449;
    }
if (index == 226) {
     return 457;
    }
if (index == 227) {
     return 449;
    }
if (index == 228) {
     return 458;
    }
if (index == 229) {
     return 454;
    }
if (index == 230) {
     return 456;
    }
if (index == 231) {
     return 454;
    }
if (index == 232) {
     return 459;
    }
if (index == 233) {
     return 458;
    }
if (index == 234) {
     return 303;
    }
if (index == 235) {
     return 455;
    }
if (index == 236) {
     return 458;
    }
if (index == 237) {
     return 450;
    }
if (index == 238) {
     return 455;
    }
if (index == 239) {
     return 449;
    }
if (index == 240) {
     return 456;
    }
if (index == 241) {
     return 455;
    }
if (index == 242) {
     return 458;
    }
if (index == 243) {
     return 450;
    }
if (index == 244) {
     return 454;
    }
if (index == 245) {
     return 456;
    }
if (index == 246) {
     return 460;
    }
if (index == 247) {
     return 446;
    }
if (index == 248) {
     return 452;
    }
if (index == 249) {
     return 454;
    }
if (index == 250) {
     return 460;
    }
if (index == 251) {
     return 456;
    }
if (index == 252) {
     return 456;
    }
if (index == 253) {
     return 457;
    }
if (index == 254) {
     return 459;
    }
if (index == 255) {
     return 454;
    }
if (index == 256) {
     return 459;
    }
if (index == 257) {
     return 453;
    }
if (index == 258) {
     return 457;
    }
if (index == 259) {
     return 458;
    }
if (index == 260) {
     return 460;
    }
if (index == 261) {
     return 453;
    }
if (index == 262) {
     return 468;
    }
if (index == 263) {
     return 455;
    }
if (index == 264) {
     return 458;
    }
if (index == 265) {
     return 458;
    }
if (index == 266) {
     return 458;
    }
if (index == 267) {
     return 457;
    }
if (index == 268) {
     return 457;
    }
if (index == 269) {
     return 614;
    }
if (index == 270) {
     return 605;
    }
if (index == 271) {
     return 610;
    }
if (index == 272) {
     return 457;
    }
if (index == 273) {
     return 453;
    }
if (index == 274) {
     return 615;
    }
if (index == 275) {
     return 610;
    }
if (index == 276) {
     return 615;
    }
if (index == 277) {
     return 456;
    }
if (index == 278) {
     return 608;
    }
if (index == 279) {
     return 612;
    }
if (index == 280) {
     return 461;
    }
if (index == 281) {
     return 613;
    }
if (index == 282) {
     return 621;
    }
if (index == 283) {
     return 609;
    }
if (index == 284) {
     return 612;
    }
if (index == 285) {
     return 450;
    }
if (index == 286) {
     return 297;
    }
if (index == 287) {
     return 605;
    }
if (index == 288) {
     return 618;
    }
if (index == 289) {
     return 607;
    }
if (index == 290) {
     return 459;
    }
if (index == 291) {
     return 608;
    }
if (index == 292) {
     return 607;
    }
if (index == 293) {
     return 607;
    }
if (index == 294) {
     return 460;
    }
if (index == 295) {
     return 458;
    }
if (index == 296) {
     return 615;
    }
if (index == 297) {
     return 608;
    }
if (index == 298) {
     return 612;
    }
if (index == 299) {
     return 607;
    }
if (index == 300) {
     return 613;
    }
if (index == 301) {
     return 458;
    }
if (index == 302) {
     return 613;
    }
if (index == 303) {
     return 452;
    }
if (index == 304) {
     return 455;
    }
if (index == 305) {
     return 608;
    }
if (index == 306) {
     return 615;
    }
if (index == 307) {
     return 414;
    }
if (index == 308) {
     return 452;
    }
if (index == 309) {
     return 611;
    }
if (index == 310) {
     return 462;
    }
if (index == 311) {
     return 602;
    }
if (index == 312) {
     return 612;
    }
if (index == 313) {
     return 455;
    }
if (index == 314) {
     return 460;
    }
if (index == 315) {
     return 610;
    }
if (index == 316) {
     return 458;
    }
if (index == 317) {
     return 611;
    }
if (index == 318) {
     return 461;
    }
if (index == 319) {
     return 606;
    }
if (index == 320) {
     return 617;
    }
if (index == 321) {
     return 608;
    }
if (index == 322) {
     return 456;
    }
if (index == 323) {
     return 438;
    }
if (index == 324) {
     return 309;
    }
if (index == 325) {
     return 456;
    }
if (index == 326) {
     return 615;
    }
if (index == 327) {
     return 613;
    }
if (index == 328) {
     return 461;
    }
if (index == 329) {
     return 609;
    }
if (index == 330) {
     return 608;
    }
if (index == 331) {
     return 453;
    }
if (index == 332) {
     return 607;
    }
if (index == 333) {
     return 609;
    }
if (index == 334) {
     return 458;
    }
if (index == 335) {
     return 608;
    }
if (index == 336) {
     return 456;
    }
if (index == 337) {
     return 448;
    }
if (index == 338) {
     return 611;
    }
if (index == 339) {
     return 605;
    }
if (index == 340) {
     return 617;
    }
if (index == 341) {
     return 455;
    }
if (index == 342) {
     return 616;
    }
if (index == 343) {
     return 607;
    }
if (index == 344) {
     return 457;
    }
if (index == 345) {
     return 608;
    }
if (index == 346) {
     return 615;
    }
if (index == 347) {
     return 608;
    }
if (index == 348) {
     return 453;
    }
if (index == 349) {
     return 432;
    }
if (index == 350) {
     return 452;
    }
if (index == 351) {
     return 456;
    }
if (index == 352) {
     return 609;
    }
if (index == 353) {
     return 462;
    }
if (index == 354) {
     return 614;
    }
if (index == 355) {
     return 608;
    }
if (index == 356) {
     return 455;
    }
if (index == 357) {
     return 455;
    }
if (index == 358) {
     return 624;
    }
if (index == 359) {
     return 450;
    }
if (index == 360) {
     return 627;
    }
if (index == 361) {
     return 607;
    }
if (index == 362) {
     return 462;
    }
if (index == 363) {
     return 452;
    }
if (index == 364) {
     return 617;
    }
if (index == 365) {
     return 603;
    }
if (index == 366) {
     return 619;
    }
if (index == 367) {
     return 604;
    }
if (index == 368) {
     return 460;
    }
if (index == 369) {
     return 606;
    }
if (index == 370) {
     return 617;
    }
if (index == 371) {
     return 453;
    }
if (index == 372) {
     return 617;
    }
if (index == 373) {
     return 439;
    }
if (index == 374) {
     return 449;
    }
if (index == 375) {
     return 608;
    }
if (index == 376) {
     return 455;
    }
if (index == 377) {
     return 604;
    }
if (index == 378) {
     return 465;
    }
if (index == 379) {
     return 455;
    }
if (index == 380) {
     return 613;
    }
if (index == 381) {
     return 600;
    }
if (index == 382) {
     return 464;
    }
if (index == 383) {
     return 610;
    }
if (index == 384) {
     return 464;
    }
if (index == 385) {
     return 601;
    }
if (index == 386) {
     return 610;
    }
if (index == 387) {
     return 449;
    }
if (index == 388) {
     return 452;
    }
if (index == 389) {
     return 448;
    }
if (index == 390) {
     return 608;
    }
if (index == 391) {
     return 609;
    }
if (index == 392) {
     return 457;
    }
if (index == 393) {
     return 608;
    }
if (index == 394) {
     return 604;
    }
if (index == 395) {
     return 610;
    }
if (index == 396) {
     return 616;
    }
if (index == 397) {
     return 452;
    }
if (index == 398) {
     return 289;
    }
if (index == 399) {
     return 601;
    }
if (index == 400) {
     return 607;
    }
if (index == 401) {
     return 446;
    }
if (index == 402) {
     return 452;
    }
if (index == 403) {
     return 461;
    }
if (index == 404) {
     return 611;
    }
if (index == 405) {
     return 613;
    }
if (index == 406) {
     return 613;
    }
if (index == 407) {
     return 458;
    }
if (index == 408) {
     return 612;
    }
if (index == 409) {
     return 460;
    }
if (index == 410) {
     return 611;
    }
if (index == 411) {
     return 461;
    }
if (index == 412) {
     return 458;
    }
if (index == 413) {
     return 459;
    }
if (index == 414) {
     return 613;
    }
if (index == 415) {
     return 456;
    }
if (index == 416) {
     return 615;
    }
if (index == 417) {
     return 607;
    }
if (index == 418) {
     return 454;
    }
if (index == 419) {
     return 456;
    }
if (index == 420) {
     return 611;
    }
if (index == 421) {
     return 604;
    }
if (index == 422) {
     return 607;
    }
if (index == 423) {
     return 611;
    }
if (index == 424) {
     return 612;
    }
if (index == 425) {
     return 610;
    }
if (index == 426) {
     return 457;
    }
if (index == 427) {
     return 459;
    }
if (index == 428) {
     return 614;
    }
if (index == 429) {
     return 611;
    }
if (index == 430) {
     return 613;
    }
if (index == 431) {
     return 612;
    }
if (index == 432) {
     return 610;
    }
if (index == 433) {
     return 609;
    }
if (index == 434) {
     return 614;
    }
if (index == 435) {
     return 617;
    }
if (index == 436) {
     return 611;
    }
if (index == 437) {
     return 607;
    }
if (index == 438) {
     return 613;
    }
if (index == 439) {
     return 454;
    }
if (index == 440) {
     return 608;
    }
if (index == 441) {
     return 613;
    }
if (index == 442) {
     return 623;
    }
if (index == 443) {
     return 593;
    }
if (index == 444) {
     return 616;
    }
if (index == 445) {
     return 400;
    }
if (index == 446) {
     return 452;
    }
if (index == 447) {
     return 611;
    }
if (index == 448) {
     return 624;
    }
if (index == 449) {
     return 617;
    }
if (index == 450) {
     return 613;
    }
if (index == 451) {
     return 615;
    }
if (index == 452) {
     return 616;
    }
if (index == 453) {
     return 606;
    }
if (index == 454) {
     return 609;
    }
if (index == 455) {
     return 615;
    }
if (index == 456) {
     return 616;
    }
if (index == 457) {
     return 612;
    }
if (index == 458) {
     return 459;
    }
if (index == 459) {
     return 460;
    }
if (index == 460) {
     return 613;
    }
if (index == 461) {
     return 458;
    }
if (index == 462) {
     return 612;
    }
if (index == 463) {
     return 610;
    }
if (index == 464) {
     return 613;
    }
if (index == 465) {
     return 453;
    }
if (index == 466) {
     return 609;
    }
if (index == 467) {
     return 425;
    }
if (index == 468) {
     return 436;
    }
if (index == 469) {
     return 613;
    }
if (index == 470) {
     return 615;
    }
if (index == 471) {
     return 451;
    }
if (index == 472) {
     return 617;
    }
if (index == 473) {
     return 612;
    }
if (index == 474) {
     return 456;
    }
if (index == 475) {
     return 457;
    }
if (index == 476) {
     return 610;
    }
if (index == 477) {
     return 455;
    }
if (index == 478) {
     return 612;
    }
if (index == 479) {
     return 619;
    }
if (index == 480) {
     return 621;
    }
if (index == 481) {
     return 611;
    }
if (index == 482) {
     return 470;
    }
if (index == 483) {
     return 631;
    }
if (index == 484) {
     return 467;
    }
if (index == 485) {
     return 623;
    }
if (index == 486) {
     return 624;
    }
if (index == 487) {
     return 622;
    }
if (index == 488) {
     return 465;
    }
if (index == 489) {
     return 619;
    }
if (index == 490) {
     return 463;
    }
if (index == 491) {
     return 631;
    }
if (index == 492) {
     return 473;
    }
if (index == 493) {
     return 625;
    }
if (index == 494) {
     return 472;
    }
if (index == 495) {
     return 460;
    }
if (index == 496) {
     return 624;
    }
if (index == 497) {
     return 625;
    }
if (index == 498) {
     return 462;
    }
if (index == 499) {
     return 627;
    }
if (index == 500) {
     return 473;
    }
if (index == 501) {
     return 458;
    }
if (index == 502) {
     return 471;
    }
if (index == 503) {
     return 624;
    }
if (index == 504) {
     return 473;
    }
if (index == 505) {
     return 631;
    }
if (index == 506) {
     return 467;
    }
if (index == 507) {
     return 443;
    }
if (index == 508) {
     return 452;
    }
if (index == 509) {
     return 631;
    }
if (index == 510) {
     return 626;
    }
if (index == 511) {
     return 637;
    }
if (index == 512) {
     return 628;
    }
if (index == 513) {
     return 632;
    }
if (index == 514) {
     return 629;
    }
if (index == 515) {
     return 627;
    }
if (index == 516) {
     return 472;
    }
if (index == 517) {
     return 294;
    }
if (index == 518) {
     return 452;
    }
if (index == 519) {
     return 458;
    }
if (index == 520) {
     return 633;
    }
if (index == 521) {
     return 632;
    }
if (index == 522) {
     return 471;
    }
if (index == 523) {
     return 634;
    }
if (index == 524) {
     return 468;
    }
if (index == 525) {
     return 632;
    }
if (index == 526) {
     return 467;
    }
if (index == 527) {
     return 358;
    }
if (index == 528) {
     return 452;
    }
if (index == 529) {
     return 473;
    }
if (index == 530) {
     return 466;
    }
if (index == 531) {
     return 459;
    }
if (index == 532) {
     return 466;
    }
if (index == 533) {
     return 473;
    }
if (index == 534) {
     return 467;
    }
if (index == 535) {
     return 440;
    }
if (index == 536) {
     return 452;
    }
if (index == 537) {
     return 475;
    }
if (index == 538) {
     return 472;
    }
if (index == 539) {
     return 481;
    }
if (index == 540) {
     return 472;
    }
if (index == 541) {
     return 479;
    }
if (index == 542) {
     return 475;
    }
if (index == 543) {
     return 468;
    }
if (index == 544) {
     return 472;
    }
if (index == 545) {
     return 472;
    }
if (index == 546) {
     return 470;
    }
if (index == 547) {
     return 474;
    }
if (index == 548) {
     return 461;
    }
if (index == 549) {
     return 473;
    }
if (index == 550) {
     return 471;
    }
if (index == 551) {
     return 471;
    }
if (index == 552) {
     return 472;
    }
if (index == 553) {
     return 454;
    }
if (index == 554) {
     return 471;
    }
if (index == 555) {
     return 479;
    }
if (index == 556) {
     return 470;
    }
if (index == 557) {
     return 472;
    }
if (index == 558) {
     return 467;
    }
if (index == 559) {
     return 475;
    }
if (index == 560) {
     return 469;
    }
if (index == 561) {
     return 472;
    }
if (index == 562) {
     return 476;
    }
if (index == 563) {
     return 466;
    }
if (index == 564) {
     return 472;
    }
if (index == 565) {
     return 472;
    }
if (index == 566) {
     return 464;
    }
if (index == 567) {
     return 474;
    }
if (index == 568) {
     return 465;
    }
if (index == 569) {
     return 473;
    }
if (index == 570) {
     return 469;
    }
if (index == 571) {
     return 469;
    }
if (index == 572) {
     return 473;
    }
if (index == 573) {
     return 473;
    }
if (index == 574) {
     return 470;
    }
if (index == 575) {
     return 480;
    }
if (index == 576) {
     return 464;
    }
if (index == 577) {
     return 469;
    }
if (index == 578) {
     return 470;
    }
if (index == 579) {
     return 468;
    }
if (index == 580) {
     return 472;
    }
if (index == 581) {
     return 478;
    }
if (index == 582) {
     return 473;
    }
if (index == 583) {
     return 466;
    }
if (index == 584) {
     return 476;
    }
if (index == 585) {
     return 463;
    }
if (index == 586) {
     return 475;
    }
if (index == 587) {
     return 468;
    }
if (index == 588) {
     return 474;
    }
if (index == 589) {
     return 459;
    }
if (index == 590) {
     return 472;
    }
if (index == 591) {
     return 473;
    }
if (index == 592) {
     return 473;
    }
if (index == 593) {
     return 467;
    }
if (index == 594) {
     return 472;
    }
if (index == 595) {
     return 470;
    }
if (index == 596) {
     return 473;
    }
if (index == 597) {
     return 470;
    }
if (index == 598) {
     return 475;
    }
if (index == 599) {
     return 464;
    }
if (index == 600) {
     return 471;
    }
if (index == 601) {
     return 461;
    }
if (index == 602) {
     return 476;
    }
if (index == 603) {
     return 474;
    }
if (index == 604) {
     return 466;
    }
if (index == 605) {
     return 467;
    }
if (index == 606) {
     return 573;
    }
if (index == 607) {
     return 474;
    }
if (index > 607) {
    return 600;
    }
}

// We load the images from archive.org -- you can modify this function to retrieve images
// using a different URL structure
br.getPageURI = function(index, reduce, rotate) {
    // reduce and rotate are ignored in this simple implementation, but we
    // could e.g. look at reduce and load images from a different directory
    // or pass the information to an image server
    var imgStr = (index+1).toString();
    var url = '/fedora/get/seapage:001_' + imgStr + '/digitalImage';
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
br.numLeafs = 608;

// Book title and the URL used for the book title link
br.bookTitle= "An official guide to eastern Asia v.5";
br.bookAuthor= "Japan. Tetsud¯osh¯o";
br.bookPub= "Tokyo, Japan: Department of Railways, 1920";
br.bookKeyword= "Railroads<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EastAsia<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guidebooks";
br.bookUrl  = '/catalog/sea:001';

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
