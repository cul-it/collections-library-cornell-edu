//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 642;
    }
if (index == 1) {
     return 772;
    }
if (index == 2) {
     return 748;
    }
if (index == 3) {
     return 772;
    }
if (index == 4) {
     return 772;
    }
if (index == 5) {
     return 772;
    }
if (index == 6) {
     return 772;
    }
if (index == 7) {
     return 726;
    }
if (index == 8) {
     return 718;
    }
if (index == 9) {
     return 730;
    }
if (index == 10) {
     return 726;
    }
if (index == 11) {
     return 726;
    }
if (index == 12) {
     return 734;
    }
if (index == 13) {
     return 716;
    }
if (index == 14) {
     return 728;
    }
if (index == 15) {
     return 728;
    }
if (index == 16) {
     return 736;
    }
if (index == 17) {
     return 732;
    }
if (index == 18) {
     return 742;
    }
if (index == 19) {
     return 740;
    }
if (index == 20) {
     return 752;
    }
if (index == 21) {
     return 754;
    }
if (index == 22) {
     return 712;
    }
if (index == 23) {
     return 714;
    }
if (index == 24) {
     return 714;
    }
if (index == 25) {
     return 720;
    }
if (index == 26) {
     return 718;
    }
if (index == 27) {
     return 724;
    }
if (index == 28) {
     return 714;
    }
if (index == 29) {
     return 726;
    }
if (index == 30) {
     return 720;
    }
if (index == 31) {
     return 726;
    }
if (index == 32) {
     return 718;
    }
if (index == 33) {
     return 720;
    }
if (index == 34) {
     return 722;
    }
if (index == 35) {
     return 726;
    }
if (index == 36) {
     return 728;
    }
if (index == 37) {
     return 726;
    }
if (index == 38) {
     return 738;
    }
if (index == 39) {
     return 708;
    }
if (index == 40) {
     return 716;
    }
if (index == 41) {
     return 720;
    }
if (index == 42) {
     return 726;
    }
if (index == 43) {
     return 724;
    }
if (index == 44) {
     return 728;
    }
if (index == 45) {
     return 736;
    }
if (index == 46) {
     return 734;
    }
if (index == 47) {
     return 742;
    }
if (index == 48) {
     return 742;
    }
if (index == 49) {
     return 748;
    }
if (index == 50) {
     return 748;
    }
if (index == 51) {
     return 726;
    }
if (index == 52) {
     return 722;
    }
if (index == 53) {
     return 728;
    }
if (index == 54) {
     return 732;
    }
if (index == 55) {
     return 730;
    }
if (index == 56) {
     return 736;
    }
if (index == 57) {
     return 738;
    }
if (index == 58) {
     return 744;
    }
if (index == 59) {
     return 718;
    }
if (index == 60) {
     return 732;
    }
if (index == 61) {
     return 730;
    }
if (index == 62) {
     return 738;
    }
if (index == 63) {
     return 742;
    }
if (index == 64) {
     return 748;
    }
if (index == 65) {
     return 726;
    }
if (index == 66) {
     return 726;
    }
if (index == 67) {
     return 730;
    }
if (index == 68) {
     return 724;
    }
if (index == 69) {
     return 736;
    }
if (index == 70) {
     return 724;
    }
if (index == 71) {
     return 730;
    }
if (index == 72) {
     return 728;
    }
if (index == 73) {
     return 714;
    }
if (index == 74) {
     return 712;
    }
if (index == 75) {
     return 718;
    }
if (index == 76) {
     return 722;
    }
if (index == 77) {
     return 712;
    }
if (index == 78) {
     return 718;
    }
if (index == 79) {
     return 722;
    }
if (index == 80) {
     return 728;
    }
if (index == 81) {
     return 722;
    }
if (index == 82) {
     return 734;
    }
if (index == 83) {
     return 732;
    }
if (index == 84) {
     return 740;
    }
if (index == 85) {
     return 750;
    }
if (index == 86) {
     return 708;
    }
if (index == 87) {
     return 718;
    }
if (index == 88) {
     return 722;
    }
if (index == 89) {
     return 730;
    }
if (index == 90) {
     return 696;
    }
if (index == 91) {
     return 710;
    }
if (index == 92) {
     return 704;
    }
if (index == 93) {
     return 712;
    }
if (index == 94) {
     return 714;
    }
if (index == 95) {
     return 718;
    }
if (index == 96) {
     return 720;
    }
if (index == 97) {
     return 690;
    }
if (index == 98) {
     return 694;
    }
if (index == 99) {
     return 692;
    }
if (index == 100) {
     return 700;
    }
if (index == 101) {
     return 698;
    }
if (index == 102) {
     return 706;
    }
if (index == 103) {
     return 694;
    }
if (index == 104) {
     return 702;
    }
if (index == 105) {
     return 702;
    }
if (index == 106) {
     return 704;
    }
if (index == 107) {
     return 710;
    }
if (index == 108) {
     return 714;
    }
if (index == 109) {
     return 704;
    }
if (index == 110) {
     return 704;
    }
if (index == 111) {
     return 710;
    }
if (index == 112) {
     return 708;
    }
if (index == 113) {
     return 716;
    }
if (index == 114) {
     return 712;
    }
if (index == 115) {
     return 720;
    }
if (index == 116) {
     return 712;
    }
if (index == 117) {
     return 718;
    }
if (index == 118) {
     return 722;
    }
if (index == 119) {
     return 722;
    }
if (index == 120) {
     return 730;
    }
if (index == 121) {
     return 714;
    }
if (index == 122) {
     return 724;
    }
if (index == 123) {
     return 720;
    }
if (index == 124) {
     return 728;
    }
if (index == 125) {
     return 718;
    }
if (index == 126) {
     return 724;
    }
if (index == 127) {
     return 724;
    }
if (index == 128) {
     return 724;
    }
if (index == 129) {
     return 728;
    }
if (index == 130) {
     return 716;
    }
if (index == 131) {
     return 724;
    }
if (index == 132) {
     return 714;
    }
if (index == 133) {
     return 724;
    }
if (index == 134) {
     return 722;
    }
if (index == 135) {
     return 730;
    }
if (index == 136) {
     return 714;
    }
if (index == 137) {
     return 718;
    }
if (index == 138) {
     return 726;
    }
if (index == 139) {
     return 720;
    }
if (index == 140) {
     return 726;
    }
if (index == 141) {
     return 728;
    }
if (index == 142) {
     return 736;
    }
if (index == 143) {
     return 736;
    }
if (index == 144) {
     return 716;
    }
if (index == 145) {
     return 714;
    }
if (index == 146) {
     return 718;
    }
if (index == 147) {
     return 718;
    }
if (index == 148) {
     return 710;
    }
if (index == 149) {
     return 716;
    }
if (index == 150) {
     return 716;
    }
if (index == 151) {
     return 724;
    }
if (index == 152) {
     return 724;
    }
if (index == 153) {
     return 730;
    }
if (index == 154) {
     return 718;
    }
if (index == 155) {
     return 730;
    }
if (index == 156) {
     return 726;
    }
if (index == 157) {
     return 736;
    }
if (index == 158) {
     return 736;
    }
if (index == 159) {
     return 714;
    }
if (index == 160) {
     return 724;
    }
if (index == 161) {
     return 724;
    }
if (index == 162) {
     return 732;
    }
if (index == 163) {
     return 742;
    }
if (index == 164) {
     return 714;
    }
if (index == 165) {
     return 718;
    }
if (index == 166) {
     return 732;
    }
if (index == 167) {
     return 738;
    }
if (index == 168) {
     return 746;
    }
if (index == 169) {
     return 716;
    }
if (index == 170) {
     return 718;
    }
if (index == 171) {
     return 724;
    }
if (index == 172) {
     return 704;
    }
if (index == 173) {
     return 716;
    }
if (index == 174) {
     return 716;
    }
if (index == 175) {
     return 728;
    }
if (index == 176) {
     return 730;
    }
if (index == 177) {
     return 738;
    }
if (index == 178) {
     return 736;
    }
if (index == 179) {
     return 742;
    }
if (index == 180) {
     return 714;
    }
if (index == 181) {
     return 718;
    }
if (index == 182) {
     return 726;
    }
if (index == 183) {
     return 728;
    }
if (index == 184) {
     return 714;
    }
if (index == 185) {
     return 712;
    }
if (index == 186) {
     return 722;
    }
if (index == 187) {
     return 722;
    }
if (index == 188) {
     return 722;
    }
if (index == 189) {
     return 726;
    }
if (index == 190) {
     return 728;
    }
if (index == 191) {
     return 734;
    }
if (index == 192) {
     return 734;
    }
if (index == 193) {
     return 700;
    }
if (index == 194) {
     return 700;
    }
if (index == 195) {
     return 714;
    }
if (index == 196) {
     return 712;
    }
if (index == 197) {
     return 720;
    }
if (index == 198) {
     return 702;
    }
if (index == 199) {
     return 708;
    }
if (index == 200) {
     return 710;
    }
if (index == 201) {
     return 714;
    }
if (index == 202) {
     return 710;
    }
if (index == 203) {
     return 708;
    }
if (index == 204) {
     return 712;
    }
if (index == 205) {
     return 700;
    }
if (index == 206) {
     return 718;
    }
if (index == 207) {
     return 716;
    }
if (index == 208) {
     return 722;
    }
if (index == 209) {
     return 722;
    }
if (index == 210) {
     return 722;
    }
if (index == 211) {
     return 712;
    }
if (index == 212) {
     return 718;
    }
if (index == 213) {
     return 724;
    }
if (index == 214) {
     return 722;
    }
if (index == 215) {
     return 726;
    }
if (index == 216) {
     return 724;
    }
if (index == 217) {
     return 702;
    }
if (index == 218) {
     return 702;
    }
if (index == 219) {
     return 704;
    }
if (index == 220) {
     return 704;
    }
if (index == 221) {
     return 704;
    }
if (index == 222) {
     return 708;
    }
if (index == 223) {
     return 714;
    }
if (index == 224) {
     return 720;
    }
if (index == 225) {
     return 714;
    }
if (index == 226) {
     return 712;
    }
if (index == 227) {
     return 710;
    }
if (index == 228) {
     return 716;
    }
if (index == 229) {
     return 718;
    }
if (index == 230) {
     return 708;
    }
if (index == 231) {
     return 716;
    }
if (index == 232) {
     return 716;
    }
if (index == 233) {
     return 726;
    }
if (index == 234) {
     return 728;
    }
if (index == 235) {
     return 706;
    }
if (index == 236) {
     return 710;
    }
if (index == 237) {
     return 718;
    }
if (index == 238) {
     return 712;
    }
if (index == 239) {
     return 698;
    }
if (index == 240) {
     return 698;
    }
if (index == 241) {
     return 698;
    }
if (index == 242) {
     return 696;
    }
if (index == 243) {
     return 698;
    }
if (index > 243) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 840;
    }
if (index == 1) {
     return 840;
    }
if (index == 2) {
     return 840;
    }
if (index == 3) {
     return 840;
    }
if (index == 4) {
     return 840;
    }
if (index == 5) {
     return 840;
    }
if (index == 6) {
     return 864;
    }
if (index == 7) {
     return 864;
    }
if (index == 8) {
     return 864;
    }
if (index == 9) {
     return 864;
    }
if (index == 10) {
     return 864;
    }
if (index == 11) {
     return 864;
    }
if (index == 12) {
     return 864;
    }
if (index == 13) {
     return 864;
    }
if (index == 14) {
     return 864;
    }
if (index == 15) {
     return 864;
    }
if (index == 16) {
     return 864;
    }
if (index == 17) {
     return 864;
    }
if (index == 18) {
     return 864;
    }
if (index == 19) {
     return 864;
    }
if (index == 20) {
     return 864;
    }
if (index == 21) {
     return 864;
    }
if (index == 22) {
     return 864;
    }
if (index == 23) {
     return 864;
    }
if (index == 24) {
     return 864;
    }
if (index == 25) {
     return 864;
    }
if (index == 26) {
     return 864;
    }
if (index == 27) {
     return 864;
    }
if (index == 28) {
     return 864;
    }
if (index == 29) {
     return 864;
    }
if (index == 30) {
     return 864;
    }
if (index == 31) {
     return 864;
    }
if (index == 32) {
     return 864;
    }
if (index == 33) {
     return 864;
    }
if (index == 34) {
     return 864;
    }
if (index == 35) {
     return 864;
    }
if (index == 36) {
     return 864;
    }
if (index == 37) {
     return 864;
    }
if (index == 38) {
     return 864;
    }
if (index == 39) {
     return 864;
    }
if (index == 40) {
     return 864;
    }
if (index == 41) {
     return 864;
    }
if (index == 42) {
     return 864;
    }
if (index == 43) {
     return 864;
    }
if (index == 44) {
     return 864;
    }
if (index == 45) {
     return 864;
    }
if (index == 46) {
     return 864;
    }
if (index == 47) {
     return 864;
    }
if (index == 48) {
     return 864;
    }
if (index == 49) {
     return 864;
    }
if (index == 50) {
     return 864;
    }
if (index == 51) {
     return 864;
    }
if (index == 52) {
     return 864;
    }
if (index == 53) {
     return 864;
    }
if (index == 54) {
     return 864;
    }
if (index == 55) {
     return 864;
    }
if (index == 56) {
     return 864;
    }
if (index == 57) {
     return 864;
    }
if (index == 58) {
     return 864;
    }
if (index == 59) {
     return 864;
    }
if (index == 60) {
     return 864;
    }
if (index == 61) {
     return 864;
    }
if (index == 62) {
     return 864;
    }
if (index == 63) {
     return 864;
    }
if (index == 64) {
     return 864;
    }
if (index == 65) {
     return 864;
    }
if (index == 66) {
     return 864;
    }
if (index == 67) {
     return 864;
    }
if (index == 68) {
     return 864;
    }
if (index == 69) {
     return 864;
    }
if (index == 70) {
     return 864;
    }
if (index == 71) {
     return 864;
    }
if (index == 72) {
     return 864;
    }
if (index == 73) {
     return 864;
    }
if (index == 74) {
     return 864;
    }
if (index == 75) {
     return 864;
    }
if (index == 76) {
     return 864;
    }
if (index == 77) {
     return 864;
    }
if (index == 78) {
     return 864;
    }
if (index == 79) {
     return 864;
    }
if (index == 80) {
     return 864;
    }
if (index == 81) {
     return 864;
    }
if (index == 82) {
     return 864;
    }
if (index == 83) {
     return 864;
    }
if (index == 84) {
     return 864;
    }
if (index == 85) {
     return 864;
    }
if (index == 86) {
     return 864;
    }
if (index == 87) {
     return 864;
    }
if (index == 88) {
     return 864;
    }
if (index == 89) {
     return 864;
    }
if (index == 90) {
     return 864;
    }
if (index == 91) {
     return 864;
    }
if (index == 92) {
     return 864;
    }
if (index == 93) {
     return 864;
    }
if (index == 94) {
     return 864;
    }
if (index == 95) {
     return 864;
    }
if (index == 96) {
     return 864;
    }
if (index == 97) {
     return 864;
    }
if (index == 98) {
     return 864;
    }
if (index == 99) {
     return 864;
    }
if (index == 100) {
     return 864;
    }
if (index == 101) {
     return 864;
    }
if (index == 102) {
     return 864;
    }
if (index == 103) {
     return 864;
    }
if (index == 104) {
     return 864;
    }
if (index == 105) {
     return 864;
    }
if (index == 106) {
     return 864;
    }
if (index == 107) {
     return 864;
    }
if (index == 108) {
     return 864;
    }
if (index == 109) {
     return 864;
    }
if (index == 110) {
     return 864;
    }
if (index == 111) {
     return 864;
    }
if (index == 112) {
     return 864;
    }
if (index == 113) {
     return 864;
    }
if (index == 114) {
     return 864;
    }
if (index == 115) {
     return 864;
    }
if (index == 116) {
     return 864;
    }
if (index == 117) {
     return 864;
    }
if (index == 118) {
     return 864;
    }
if (index == 119) {
     return 864;
    }
if (index == 120) {
     return 864;
    }
if (index == 121) {
     return 864;
    }
if (index == 122) {
     return 864;
    }
if (index == 123) {
     return 864;
    }
if (index == 124) {
     return 864;
    }
if (index == 125) {
     return 864;
    }
if (index == 126) {
     return 864;
    }
if (index == 127) {
     return 864;
    }
if (index == 128) {
     return 864;
    }
if (index == 129) {
     return 864;
    }
if (index == 130) {
     return 864;
    }
if (index == 131) {
     return 864;
    }
if (index == 132) {
     return 864;
    }
if (index == 133) {
     return 864;
    }
if (index == 134) {
     return 864;
    }
if (index == 135) {
     return 864;
    }
if (index == 136) {
     return 864;
    }
if (index == 137) {
     return 864;
    }
if (index == 138) {
     return 864;
    }
if (index == 139) {
     return 864;
    }
if (index == 140) {
     return 864;
    }
if (index == 141) {
     return 864;
    }
if (index == 142) {
     return 864;
    }
if (index == 143) {
     return 864;
    }
if (index == 144) {
     return 864;
    }
if (index == 145) {
     return 864;
    }
if (index == 146) {
     return 864;
    }
if (index == 147) {
     return 864;
    }
if (index == 148) {
     return 864;
    }
if (index == 149) {
     return 864;
    }
if (index == 150) {
     return 864;
    }
if (index == 151) {
     return 864;
    }
if (index == 152) {
     return 864;
    }
if (index == 153) {
     return 864;
    }
if (index == 154) {
     return 864;
    }
if (index == 155) {
     return 864;
    }
if (index == 156) {
     return 864;
    }
if (index == 157) {
     return 864;
    }
if (index == 158) {
     return 864;
    }
if (index == 159) {
     return 864;
    }
if (index == 160) {
     return 864;
    }
if (index == 161) {
     return 864;
    }
if (index == 162) {
     return 864;
    }
if (index == 163) {
     return 864;
    }
if (index == 164) {
     return 864;
    }
if (index == 165) {
     return 864;
    }
if (index == 166) {
     return 864;
    }
if (index == 167) {
     return 864;
    }
if (index == 168) {
     return 864;
    }
if (index == 169) {
     return 864;
    }
if (index == 170) {
     return 864;
    }
if (index == 171) {
     return 864;
    }
if (index == 172) {
     return 864;
    }
if (index == 173) {
     return 864;
    }
if (index == 174) {
     return 864;
    }
if (index == 175) {
     return 864;
    }
if (index == 176) {
     return 864;
    }
if (index == 177) {
     return 864;
    }
if (index == 178) {
     return 864;
    }
if (index == 179) {
     return 864;
    }
if (index == 180) {
     return 864;
    }
if (index == 181) {
     return 864;
    }
if (index == 182) {
     return 864;
    }
if (index == 183) {
     return 864;
    }
if (index == 184) {
     return 864;
    }
if (index == 185) {
     return 864;
    }
if (index == 186) {
     return 864;
    }
if (index == 187) {
     return 864;
    }
if (index == 188) {
     return 864;
    }
if (index == 189) {
     return 864;
    }
if (index == 190) {
     return 864;
    }
if (index == 191) {
     return 864;
    }
if (index == 192) {
     return 864;
    }
if (index == 193) {
     return 864;
    }
if (index == 194) {
     return 864;
    }
if (index == 195) {
     return 864;
    }
if (index == 196) {
     return 864;
    }
if (index == 197) {
     return 864;
    }
if (index == 198) {
     return 864;
    }
if (index == 199) {
     return 864;
    }
if (index == 200) {
     return 864;
    }
if (index == 201) {
     return 864;
    }
if (index == 202) {
     return 864;
    }
if (index == 203) {
     return 864;
    }
if (index == 204) {
     return 864;
    }
if (index == 205) {
     return 864;
    }
if (index == 206) {
     return 864;
    }
if (index == 207) {
     return 864;
    }
if (index == 208) {
     return 864;
    }
if (index == 209) {
     return 864;
    }
if (index == 210) {
     return 864;
    }
if (index == 211) {
     return 864;
    }
if (index == 212) {
     return 864;
    }
if (index == 213) {
     return 864;
    }
if (index == 214) {
     return 864;
    }
if (index == 215) {
     return 864;
    }
if (index == 216) {
     return 864;
    }
if (index == 217) {
     return 864;
    }
if (index == 218) {
     return 864;
    }
if (index == 219) {
     return 864;
    }
if (index == 220) {
     return 864;
    }
if (index == 221) {
     return 864;
    }
if (index == 222) {
     return 864;
    }
if (index == 223) {
     return 864;
    }
if (index == 224) {
     return 864;
    }
if (index == 225) {
     return 864;
    }
if (index == 226) {
     return 864;
    }
if (index == 227) {
     return 864;
    }
if (index == 228) {
     return 864;
    }
if (index == 229) {
     return 864;
    }
if (index == 230) {
     return 864;
    }
if (index == 231) {
     return 864;
    }
if (index == 232) {
     return 864;
    }
if (index == 233) {
     return 864;
    }
if (index == 234) {
     return 864;
    }
if (index == 235) {
     return 864;
    }
if (index == 236) {
     return 864;
    }
if (index == 237) {
     return 864;
    }
if (index == 238) {
     return 864;
    }
if (index == 239) {
     return 864;
    }
if (index == 240) {
     return 864;
    }
if (index == 241) {
     return 864;
    }
if (index == 242) {
     return 864;
    }
if (index == 243) {
     return 864;
    }
if (index > 243) {
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
    var url = '/fedora/get/scott:2013_' + imgStr + '/digitalImage';
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
br.numLeafs = 244;

// Book title and the URL used for the book title link
br.bookTitle= "State v. Patterson. Morgan co., Ala. Motion to quash the indictment. March 27, 1933. Testimony 242 p.";
br.bookAuthor= "Morgan County, Circuit Court";
br.bookPub= "Decatur, AL.: , March 27, 1933";
br.bookKeyword= "";
br.bookUrl  = '/scottsboro/catalog/scott:2013';

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
