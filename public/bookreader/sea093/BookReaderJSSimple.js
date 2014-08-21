//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 648;
    }
if (index == 1) {
     return 646;
    }
if (index == 2) {
     return 583;
    }
if (index == 3) {
     return 697;
    }
if (index == 4) {
     return 609;
    }
if (index == 5) {
     return 642;
    }
if (index == 6) {
     return 589;
    }
if (index == 7) {
     return 573;
    }
if (index == 8) {
     return 573;
    }
if (index == 9) {
     return 667;
    }
if (index == 10) {
     return 561;
    }
if (index == 11) {
     return 609;
    }
if (index == 12) {
     return 563;
    }
if (index == 13) {
     return 612;
    }
if (index == 14) {
     return 565;
    }
if (index == 15) {
     return 617;
    }
if (index == 16) {
     return 548;
    }
if (index == 17) {
     return 590;
    }
if (index == 18) {
     return 602;
    }
if (index == 19) {
     return 603;
    }
if (index == 20) {
     return 562;
    }
if (index == 21) {
     return 601;
    }
if (index == 22) {
     return 548;
    }
if (index == 23) {
     return 631;
    }
if (index == 24) {
     return 586;
    }
if (index == 25) {
     return 636;
    }
if (index == 26) {
     return 569;
    }
if (index == 27) {
     return 597;
    }
if (index == 28) {
     return 584;
    }
if (index == 29) {
     return 581;
    }
if (index == 30) {
     return 575;
    }
if (index == 31) {
     return 582;
    }
if (index == 32) {
     return 562;
    }
if (index == 33) {
     return 600;
    }
if (index == 34) {
     return 564;
    }
if (index == 35) {
     return 563;
    }
if (index == 36) {
     return 549;
    }
if (index == 37) {
     return 574;
    }
if (index == 38) {
     return 600;
    }
if (index == 39) {
     return 588;
    }
if (index == 40) {
     return 602;
    }
if (index == 41) {
     return 556;
    }
if (index == 42) {
     return 543;
    }
if (index == 43) {
     return 554;
    }
if (index == 44) {
     return 559;
    }
if (index == 45) {
     return 615;
    }
if (index == 46) {
     return 602;
    }
if (index == 47) {
     return 603;
    }
if (index == 48) {
     return 582;
    }
if (index == 49) {
     return 580;
    }
if (index == 50) {
     return 558;
    }
if (index == 51) {
     return 618;
    }
if (index == 52) {
     return 545;
    }
if (index == 53) {
     return 591;
    }
if (index == 54) {
     return 609;
    }
if (index == 55) {
     return 660;
    }
if (index == 56) {
     return 565;
    }
if (index == 57) {
     return 614;
    }
if (index == 58) {
     return 602;
    }
if (index == 59) {
     return 630;
    }
if (index == 60) {
     return 596;
    }
if (index == 61) {
     return 608;
    }
if (index == 62) {
     return 592;
    }
if (index == 63) {
     return 629;
    }
if (index == 64) {
     return 560;
    }
if (index == 65) {
     return 598;
    }
if (index == 66) {
     return 558;
    }
if (index == 67) {
     return 610;
    }
if (index == 68) {
     return 547;
    }
if (index == 69) {
     return 612;
    }
if (index == 70) {
     return 567;
    }
if (index == 71) {
     return 613;
    }
if (index == 72) {
     return 569;
    }
if (index == 73) {
     return 602;
    }
if (index == 74) {
     return 549;
    }
if (index == 75) {
     return 608;
    }
if (index == 76) {
     return 595;
    }
if (index == 77) {
     return 575;
    }
if (index == 78) {
     return 557;
    }
if (index == 79) {
     return 582;
    }
if (index == 80) {
     return 557;
    }
if (index == 81) {
     return 616;
    }
if (index == 82) {
     return 596;
    }
if (index == 83) {
     return 582;
    }
if (index == 84) {
     return 590;
    }
if (index == 85) {
     return 594;
    }
if (index == 86) {
     return 554;
    }
if (index == 87) {
     return 618;
    }
if (index == 88) {
     return 611;
    }
if (index == 89) {
     return 610;
    }
if (index == 90) {
     return 603;
    }
if (index == 91) {
     return 610;
    }
if (index == 92) {
     return 593;
    }
if (index == 93) {
     return 622;
    }
if (index == 94) {
     return 608;
    }
if (index == 95) {
     return 615;
    }
if (index == 96) {
     return 602;
    }
if (index == 97) {
     return 621;
    }
if (index == 98) {
     return 604;
    }
if (index == 99) {
     return 612;
    }
if (index == 100) {
     return 601;
    }
if (index == 101) {
     return 615;
    }
if (index == 102) {
     return 620;
    }
if (index == 103) {
     return 613;
    }
if (index == 104) {
     return 621;
    }
if (index == 105) {
     return 611;
    }
if (index == 106) {
     return 609;
    }
if (index == 107) {
     return 620;
    }
if (index == 108) {
     return 610;
    }
if (index == 109) {
     return 612;
    }
if (index == 110) {
     return 607;
    }
if (index == 111) {
     return 610;
    }
if (index == 112) {
     return 601;
    }
if (index == 113) {
     return 623;
    }
if (index == 114) {
     return 609;
    }
if (index == 115) {
     return 608;
    }
if (index == 116) {
     return 626;
    }
if (index == 117) {
     return 616;
    }
if (index == 118) {
     return 607;
    }
if (index == 119) {
     return 610;
    }
if (index == 120) {
     return 617;
    }
if (index == 121) {
     return 609;
    }
if (index == 122) {
     return 594;
    }
if (index == 123) {
     return 605;
    }
if (index == 124) {
     return 608;
    }
if (index == 125) {
     return 613;
    }
if (index == 126) {
     return 613;
    }
if (index == 127) {
     return 620;
    }
if (index == 128) {
     return 612;
    }
if (index == 129) {
     return 618;
    }
if (index == 130) {
     return 616;
    }
if (index == 131) {
     return 638;
    }
if (index == 132) {
     return 614;
    }
if (index == 133) {
     return 630;
    }
if (index == 134) {
     return 612;
    }
if (index == 135) {
     return 600;
    }
if (index == 136) {
     return 608;
    }
if (index == 137) {
     return 623;
    }
if (index == 138) {
     return 611;
    }
if (index == 139) {
     return 615;
    }
if (index == 140) {
     return 601;
    }
if (index == 141) {
     return 617;
    }
if (index == 142) {
     return 603;
    }
if (index == 143) {
     return 605;
    }
if (index == 144) {
     return 613;
    }
if (index == 145) {
     return 608;
    }
if (index == 146) {
     return 607;
    }
if (index == 147) {
     return 606;
    }
if (index == 148) {
     return 601;
    }
if (index == 149) {
     return 602;
    }
if (index == 150) {
     return 591;
    }
if (index == 151) {
     return 608;
    }
if (index == 152) {
     return 619;
    }
if (index == 153) {
     return 601;
    }
if (index == 154) {
     return 590;
    }
if (index == 155) {
     return 592;
    }
if (index == 156) {
     return 603;
    }
if (index == 157) {
     return 598;
    }
if (index == 158) {
     return 590;
    }
if (index == 159) {
     return 612;
    }
if (index == 160) {
     return 611;
    }
if (index == 161) {
     return 601;
    }
if (index == 162) {
     return 619;
    }
if (index == 163) {
     return 622;
    }
if (index == 164) {
     return 616;
    }
if (index == 165) {
     return 615;
    }
if (index == 166) {
     return 619;
    }
if (index == 167) {
     return 605;
    }
if (index == 168) {
     return 611;
    }
if (index == 169) {
     return 605;
    }
if (index == 170) {
     return 606;
    }
if (index == 171) {
     return 609;
    }
if (index == 172) {
     return 619;
    }
if (index == 173) {
     return 611;
    }
if (index == 174) {
     return 613;
    }
if (index == 175) {
     return 605;
    }
if (index == 176) {
     return 624;
    }
if (index == 177) {
     return 616;
    }
if (index == 178) {
     return 615;
    }
if (index == 179) {
     return 614;
    }
if (index == 180) {
     return 596;
    }
if (index == 181) {
     return 607;
    }
if (index == 182) {
     return 617;
    }
if (index == 183) {
     return 621;
    }
if (index == 184) {
     return 588;
    }
if (index == 185) {
     return 609;
    }
if (index == 186) {
     return 603;
    }
if (index == 187) {
     return 603;
    }
if (index == 188) {
     return 576;
    }
if (index == 189) {
     return 616;
    }
if (index == 190) {
     return 597;
    }
if (index == 191) {
     return 607;
    }
if (index == 192) {
     return 618;
    }
if (index == 193) {
     return 605;
    }
if (index == 194) {
     return 583;
    }
if (index == 195) {
     return 609;
    }
if (index == 196) {
     return 606;
    }
if (index == 197) {
     return 609;
    }
if (index == 198) {
     return 598;
    }
if (index == 199) {
     return 592;
    }
if (index == 200) {
     return 594;
    }
if (index == 201) {
     return 600;
    }
if (index == 202) {
     return 597;
    }
if (index == 203) {
     return 598;
    }
if (index == 204) {
     return 599;
    }
if (index == 205) {
     return 600;
    }
if (index == 206) {
     return 583;
    }
if (index == 207) {
     return 594;
    }
if (index == 208) {
     return 587;
    }
if (index == 209) {
     return 613;
    }
if (index == 210) {
     return 601;
    }
if (index == 211) {
     return 599;
    }
if (index == 212) {
     return 1725;
    }
if (index == 213) {
     return 569;
    }
if (index == 214) {
     return 595;
    }
if (index == 215) {
     return 605;
    }
if (index == 216) {
     return 610;
    }
if (index == 217) {
     return 621;
    }
if (index == 218) {
     return 602;
    }
if (index == 219) {
     return 573;
    }
if (index == 220) {
     return 578;
    }
if (index == 221) {
     return 568;
    }
if (index > 221) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 988;
    }
if (index == 1) {
     return 960;
    }
if (index == 2) {
     return 976;
    }
if (index == 3) {
     return 1018;
    }
if (index == 4) {
     return 975;
    }
if (index == 5) {
     return 978;
    }
if (index == 6) {
     return 974;
    }
if (index == 7) {
     return 932;
    }
if (index == 8) {
     return 957;
    }
if (index == 9) {
     return 984;
    }
if (index == 10) {
     return 974;
    }
if (index == 11) {
     return 965;
    }
if (index == 12) {
     return 985;
    }
if (index == 13) {
     return 967;
    }
if (index == 14) {
     return 966;
    }
if (index == 15) {
     return 970;
    }
if (index == 16) {
     return 973;
    }
if (index == 17) {
     return 988;
    }
if (index == 18) {
     return 1004;
    }
if (index == 19) {
     return 973;
    }
if (index == 20) {
     return 979;
    }
if (index == 21) {
     return 967;
    }
if (index == 22) {
     return 982;
    }
if (index == 23) {
     return 975;
    }
if (index == 24) {
     return 1004;
    }
if (index == 25) {
     return 958;
    }
if (index == 26) {
     return 972;
    }
if (index == 27) {
     return 948;
    }
if (index == 28) {
     return 961;
    }
if (index == 29) {
     return 945;
    }
if (index == 30) {
     return 989;
    }
if (index == 31) {
     return 982;
    }
if (index == 32) {
     return 989;
    }
if (index == 33) {
     return 982;
    }
if (index == 34) {
     return 975;
    }
if (index == 35) {
     return 988;
    }
if (index == 36) {
     return 988;
    }
if (index == 37) {
     return 967;
    }
if (index == 38) {
     return 978;
    }
if (index == 39) {
     return 974;
    }
if (index == 40) {
     return 988;
    }
if (index == 41) {
     return 978;
    }
if (index == 42) {
     return 956;
    }
if (index == 43) {
     return 966;
    }
if (index == 44) {
     return 971;
    }
if (index == 45) {
     return 982;
    }
if (index == 46) {
     return 981;
    }
if (index == 47) {
     return 987;
    }
if (index == 48) {
     return 980;
    }
if (index == 49) {
     return 999;
    }
if (index == 50) {
     return 968;
    }
if (index == 51) {
     return 984;
    }
if (index == 52) {
     return 967;
    }
if (index == 53) {
     return 964;
    }
if (index == 54) {
     return 989;
    }
if (index == 55) {
     return 993;
    }
if (index == 56) {
     return 1001;
    }
if (index == 57) {
     return 991;
    }
if (index == 58) {
     return 979;
    }
if (index == 59) {
     return 991;
    }
if (index == 60) {
     return 990;
    }
if (index == 61) {
     return 988;
    }
if (index == 62) {
     return 972;
    }
if (index == 63) {
     return 989;
    }
if (index == 64) {
     return 980;
    }
if (index == 65) {
     return 980;
    }
if (index == 66) {
     return 978;
    }
if (index == 67) {
     return 980;
    }
if (index == 68) {
     return 986;
    }
if (index == 69) {
     return 986;
    }
if (index == 70) {
     return 977;
    }
if (index == 71) {
     return 984;
    }
if (index == 72) {
     return 970;
    }
if (index == 73) {
     return 976;
    }
if (index == 74) {
     return 972;
    }
if (index == 75) {
     return 983;
    }
if (index == 76) {
     return 976;
    }
if (index == 77) {
     return 959;
    }
if (index == 78) {
     return 964;
    }
if (index == 79) {
     return 979;
    }
if (index == 80) {
     return 969;
    }
if (index == 81) {
     return 986;
    }
if (index == 82) {
     return 999;
    }
if (index == 83) {
     return 961;
    }
if (index == 84) {
     return 958;
    }
if (index == 85) {
     return 974;
    }
if (index == 86) {
     return 979;
    }
if (index == 87) {
     return 980;
    }
if (index == 88) {
     return 976;
    }
if (index == 89) {
     return 982;
    }
if (index == 90) {
     return 967;
    }
if (index == 91) {
     return 980;
    }
if (index == 92) {
     return 960;
    }
if (index == 93) {
     return 989;
    }
if (index == 94) {
     return 970;
    }
if (index == 95) {
     return 985;
    }
if (index == 96) {
     return 965;
    }
if (index == 97) {
     return 979;
    }
if (index == 98) {
     return 964;
    }
if (index == 99) {
     return 974;
    }
if (index == 100) {
     return 974;
    }
if (index == 101) {
     return 978;
    }
if (index == 102) {
     return 980;
    }
if (index == 103) {
     return 969;
    }
if (index == 104) {
     return 969;
    }
if (index == 105) {
     return 971;
    }
if (index == 106) {
     return 963;
    }
if (index == 107) {
     return 977;
    }
if (index == 108) {
     return 952;
    }
if (index == 109) {
     return 978;
    }
if (index == 110) {
     return 963;
    }
if (index == 111) {
     return 975;
    }
if (index == 112) {
     return 963;
    }
if (index == 113) {
     return 979;
    }
if (index == 114) {
     return 963;
    }
if (index == 115) {
     return 971;
    }
if (index == 116) {
     return 968;
    }
if (index == 117) {
     return 971;
    }
if (index == 118) {
     return 965;
    }
if (index == 119) {
     return 973;
    }
if (index == 120) {
     return 974;
    }
if (index == 121) {
     return 973;
    }
if (index == 122) {
     return 966;
    }
if (index == 123) {
     return 971;
    }
if (index == 124) {
     return 965;
    }
if (index == 125) {
     return 974;
    }
if (index == 126) {
     return 965;
    }
if (index == 127) {
     return 960;
    }
if (index == 128) {
     return 966;
    }
if (index == 129) {
     return 976;
    }
if (index == 130) {
     return 969;
    }
if (index == 131) {
     return 981;
    }
if (index == 132) {
     return 974;
    }
if (index == 133) {
     return 984;
    }
if (index == 134) {
     return 976;
    }
if (index == 135) {
     return 973;
    }
if (index == 136) {
     return 982;
    }
if (index == 137) {
     return 971;
    }
if (index == 138) {
     return 964;
    }
if (index == 139) {
     return 971;
    }
if (index == 140) {
     return 979;
    }
if (index == 141) {
     return 976;
    }
if (index == 142) {
     return 965;
    }
if (index == 143) {
     return 973;
    }
if (index == 144) {
     return 973;
    }
if (index == 145) {
     return 974;
    }
if (index == 146) {
     return 966;
    }
if (index == 147) {
     return 971;
    }
if (index == 148) {
     return 984;
    }
if (index == 149) {
     return 973;
    }
if (index == 150) {
     return 972;
    }
if (index == 151) {
     return 969;
    }
if (index == 152) {
     return 972;
    }
if (index == 153) {
     return 979;
    }
if (index == 154) {
     return 968;
    }
if (index == 155) {
     return 970;
    }
if (index == 156) {
     return 971;
    }
if (index == 157) {
     return 971;
    }
if (index == 158) {
     return 963;
    }
if (index == 159) {
     return 976;
    }
if (index == 160) {
     return 976;
    }
if (index == 161) {
     return 971;
    }
if (index == 162) {
     return 975;
    }
if (index == 163) {
     return 977;
    }
if (index == 164) {
     return 973;
    }
if (index == 165) {
     return 973;
    }
if (index == 166) {
     return 976;
    }
if (index == 167) {
     return 971;
    }
if (index == 168) {
     return 981;
    }
if (index == 169) {
     return 970;
    }
if (index == 170) {
     return 973;
    }
if (index == 171) {
     return 975;
    }
if (index == 172) {
     return 978;
    }
if (index == 173) {
     return 979;
    }
if (index == 174) {
     return 974;
    }
if (index == 175) {
     return 971;
    }
if (index == 176) {
     return 976;
    }
if (index == 177) {
     return 978;
    }
if (index == 178) {
     return 970;
    }
if (index == 179) {
     return 980;
    }
if (index == 180) {
     return 975;
    }
if (index == 181) {
     return 975;
    }
if (index == 182) {
     return 976;
    }
if (index == 183) {
     return 971;
    }
if (index == 184) {
     return 983;
    }
if (index == 185) {
     return 976;
    }
if (index == 186) {
     return 973;
    }
if (index == 187) {
     return 962;
    }
if (index == 188) {
     return 959;
    }
if (index == 189) {
     return 969;
    }
if (index == 190) {
     return 967;
    }
if (index == 191) {
     return 969;
    }
if (index == 192) {
     return 971;
    }
if (index == 193) {
     return 964;
    }
if (index == 194) {
     return 959;
    }
if (index == 195) {
     return 966;
    }
if (index == 196) {
     return 969;
    }
if (index == 197) {
     return 971;
    }
if (index == 198) {
     return 962;
    }
if (index == 199) {
     return 965;
    }
if (index == 200) {
     return 971;
    }
if (index == 201) {
     return 970;
    }
if (index == 202) {
     return 958;
    }
if (index == 203) {
     return 964;
    }
if (index == 204) {
     return 961;
    }
if (index == 205) {
     return 959;
    }
if (index == 206) {
     return 954;
    }
if (index == 207) {
     return 971;
    }
if (index == 208) {
     return 957;
    }
if (index == 209) {
     return 979;
    }
if (index == 210) {
     return 963;
    }
if (index == 211) {
     return 980;
    }
if (index == 212) {
     return 948;
    }
if (index == 213) {
     return 942;
    }
if (index == 214) {
     return 963;
    }
if (index == 215) {
     return 973;
    }
if (index == 216) {
     return 961;
    }
if (index == 217) {
     return 982;
    }
if (index == 218) {
     return 955;
    }
if (index == 219) {
     return 932;
    }
if (index == 220) {
     return 925;
    }
if (index == 221) {
     return 921;
    }
if (index > 221) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/seapage:093_' + imgStr + '/digitalImage';
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
br.numLeafs = 222;

// Book title and the URL used for the book title link
br.bookTitle= "Java, the pearl of the East";
br.bookAuthor= "Higginson, Sarah Jane Hatfield";
br.bookPub= "Boston ; New York: Houghton, Mifflin and Co, 1890";
br.bookKeyword= "Java (Indonesia)--Description and travel";
br.bookUrl  = 'http://hydraprod.library.cornell.edu/catalog/sea:093';

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
