//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 627;
    }
if (index == 1) {
     return 624;
    }
if (index == 2) {
     return 641;
    }
if (index == 3) {
     return 666;
    }
if (index == 4) {
     return 649;
    }
if (index == 5) {
     return 673;
    }
if (index == 6) {
     return 673;
    }
if (index == 7) {
     return 679;
    }
if (index == 8) {
     return 681;
    }
if (index == 9) {
     return 683;
    }
if (index == 10) {
     return 681;
    }
if (index == 11) {
     return 691;
    }
if (index == 12) {
     return 685;
    }
if (index == 13) {
     return 649;
    }
if (index == 14) {
     return 666;
    }
if (index == 15) {
     return 658;
    }
if (index == 16) {
     return 668;
    }
if (index == 17) {
     return 650;
    }
if (index == 18) {
     return 658;
    }
if (index == 19) {
     return 669;
    }
if (index == 20) {
     return 650;
    }
if (index == 21) {
     return 671;
    }
if (index == 22) {
     return 659;
    }
if (index == 23) {
     return 666;
    }
if (index == 24) {
     return 688;
    }
if (index == 25) {
     return 669;
    }
if (index == 26) {
     return 672;
    }
if (index == 27) {
     return 680;
    }
if (index == 28) {
     return 704;
    }
if (index == 29) {
     return 669;
    }
if (index == 30) {
     return 720;
    }
if (index == 31) {
     return 670;
    }
if (index == 32) {
     return 726;
    }
if (index == 33) {
     return 712;
    }
if (index == 34) {
     return 628;
    }
if (index == 35) {
     return 600;
    }
if (index == 36) {
     return 698;
    }
if (index == 37) {
     return 685;
    }
if (index == 38) {
     return 698;
    }
if (index == 39) {
     return 718;
    }
if (index == 40) {
     return 727;
    }
if (index == 41) {
     return 697;
    }
if (index == 42) {
     return 689;
    }
if (index == 43) {
     return 712;
    }
if (index == 44) {
     return 694;
    }
if (index == 45) {
     return 669;
    }
if (index == 46) {
     return 725;
    }
if (index == 47) {
     return 675;
    }
if (index == 48) {
     return 698;
    }
if (index == 49) {
     return 669;
    }
if (index == 50) {
     return 701;
    }
if (index == 51) {
     return 670;
    }
if (index == 52) {
     return 690;
    }
if (index == 53) {
     return 683;
    }
if (index == 54) {
     return 704;
    }
if (index == 55) {
     return 679;
    }
if (index == 56) {
     return 696;
    }
if (index == 57) {
     return 676;
    }
if (index == 58) {
     return 679;
    }
if (index == 59) {
     return 673;
    }
if (index == 60) {
     return 688;
    }
if (index == 61) {
     return 678;
    }
if (index == 62) {
     return 724;
    }
if (index == 63) {
     return 683;
    }
if (index == 64) {
     return 711;
    }
if (index == 65) {
     return 676;
    }
if (index == 66) {
     return 710;
    }
if (index == 67) {
     return 889;
    }
if (index == 68) {
     return 705;
    }
if (index == 69) {
     return 676;
    }
if (index == 70) {
     return 682;
    }
if (index == 71) {
     return 673;
    }
if (index == 72) {
     return 676;
    }
if (index == 73) {
     return 840;
    }
if (index == 74) {
     return 839;
    }
if (index == 75) {
     return 832;
    }
if (index == 76) {
     return 855;
    }
if (index == 77) {
     return 818;
    }
if (index == 78) {
     return 836;
    }
if (index == 79) {
     return 885;
    }
if (index == 80) {
     return 853;
    }
if (index == 81) {
     return 821;
    }
if (index == 82) {
     return 643;
    }
if (index == 83) {
     return 843;
    }
if (index == 84) {
     return 868;
    }
if (index == 85) {
     return 876;
    }
if (index == 86) {
     return 886;
    }
if (index == 87) {
     return 862;
    }
if (index == 88) {
     return 842;
    }
if (index == 89) {
     return 876;
    }
if (index == 90) {
     return 847;
    }
if (index == 91) {
     return 871;
    }
if (index == 92) {
     return 871;
    }
if (index == 93) {
     return 891;
    }
if (index == 94) {
     return 843;
    }
if (index == 95) {
     return 870;
    }
if (index == 96) {
     return 904;
    }
if (index == 97) {
     return 878;
    }
if (index == 98) {
     return 864;
    }
if (index == 99) {
     return 886;
    }
if (index == 100) {
     return 885;
    }
if (index == 101) {
     return 890;
    }
if (index == 102) {
     return 867;
    }
if (index == 103) {
     return 860;
    }
if (index == 104) {
     return 913;
    }
if (index == 105) {
     return 884;
    }
if (index == 106) {
     return 856;
    }
if (index == 107) {
     return 850;
    }
if (index == 108) {
     return 828;
    }
if (index == 109) {
     return 856;
    }
if (index == 110) {
     return 816;
    }
if (index == 111) {
     return 869;
    }
if (index == 112) {
     return 864;
    }
if (index == 113) {
     return 861;
    }
if (index == 114) {
     return 846;
    }
if (index == 115) {
     return 831;
    }
if (index == 116) {
     return 835;
    }
if (index == 117) {
     return 840;
    }
if (index == 118) {
     return 848;
    }
if (index == 119) {
     return 865;
    }
if (index == 120) {
     return 878;
    }
if (index == 121) {
     return 949;
    }
if (index == 122) {
     return 949;
    }
if (index == 123) {
     return 837;
    }
if (index == 124) {
     return 858;
    }
if (index == 125) {
     return 885;
    }
if (index == 126) {
     return 837;
    }
if (index == 127) {
     return 839;
    }
if (index == 128) {
     return 834;
    }
if (index == 129) {
     return 841;
    }
if (index == 130) {
     return 847;
    }
if (index == 131) {
     return 822;
    }
if (index == 132) {
     return 820;
    }
if (index == 133) {
     return 835;
    }
if (index == 134) {
     return 850;
    }
if (index == 135) {
     return 840;
    }
if (index == 136) {
     return 829;
    }
if (index == 137) {
     return 856;
    }
if (index == 138) {
     return 827;
    }
if (index == 139) {
     return 848;
    }
if (index == 140) {
     return 841;
    }
if (index == 141) {
     return 834;
    }
if (index == 142) {
     return 864;
    }
if (index == 143) {
     return 874;
    }
if (index == 144) {
     return 829;
    }
if (index == 145) {
     return 848;
    }
if (index == 146) {
     return 805;
    }
if (index == 147) {
     return 833;
    }
if (index == 148) {
     return 835;
    }
if (index == 149) {
     return 850;
    }
if (index == 150) {
     return 849;
    }
if (index == 151) {
     return 626;
    }
if (index == 152) {
     return 587;
    }
if (index == 153) {
     return 572;
    }
if (index == 154) {
     return 577;
    }
if (index == 155) {
     return 578;
    }
if (index == 156) {
     return 565;
    }
if (index == 157) {
     return 561;
    }
if (index == 158) {
     return 573;
    }
if (index == 159) {
     return 546;
    }
if (index == 160) {
     return 592;
    }
if (index == 161) {
     return 567;
    }
if (index == 162) {
     return 586;
    }
if (index == 163) {
     return 563;
    }
if (index == 164) {
     return 579;
    }
if (index == 165) {
     return 590;
    }
if (index == 166) {
     return 584;
    }
if (index == 167) {
     return 585;
    }
if (index == 168) {
     return 564;
    }
if (index == 169) {
     return 575;
    }
if (index == 170) {
     return 577;
    }
if (index == 171) {
     return 564;
    }
if (index == 172) {
     return 570;
    }
if (index == 173) {
     return 557;
    }
if (index == 174) {
     return 562;
    }
if (index == 175) {
     return 586;
    }
if (index == 176) {
     return 559;
    }
if (index > 176) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 997;
    }
if (index == 1) {
     return 954;
    }
if (index == 2) {
     return 945;
    }
if (index == 3) {
     return 964;
    }
if (index == 4) {
     return 953;
    }
if (index == 5) {
     return 947;
    }
if (index == 6) {
     return 944;
    }
if (index == 7) {
     return 943;
    }
if (index == 8) {
     return 947;
    }
if (index == 9) {
     return 944;
    }
if (index == 10) {
     return 946;
    }
if (index == 11) {
     return 947;
    }
if (index == 12) {
     return 938;
    }
if (index == 13) {
     return 952;
    }
if (index == 14) {
     return 942;
    }
if (index == 15) {
     return 943;
    }
if (index == 16) {
     return 937;
    }
if (index == 17) {
     return 953;
    }
if (index == 18) {
     return 959;
    }
if (index == 19) {
     return 946;
    }
if (index == 20) {
     return 937;
    }
if (index == 21) {
     return 937;
    }
if (index == 22) {
     return 939;
    }
if (index == 23) {
     return 936;
    }
if (index == 24) {
     return 950;
    }
if (index == 25) {
     return 946;
    }
if (index == 26) {
     return 939;
    }
if (index == 27) {
     return 945;
    }
if (index == 28) {
     return 941;
    }
if (index == 29) {
     return 941;
    }
if (index == 30) {
     return 941;
    }
if (index == 31) {
     return 942;
    }
if (index == 32) {
     return 933;
    }
if (index == 33) {
     return 940;
    }
if (index == 34) {
     return 915;
    }
if (index == 35) {
     return 922;
    }
if (index == 36) {
     return 945;
    }
if (index == 37) {
     return 944;
    }
if (index == 38) {
     return 944;
    }
if (index == 39) {
     return 940;
    }
if (index == 40) {
     return 936;
    }
if (index == 41) {
     return 938;
    }
if (index == 42) {
     return 939;
    }
if (index == 43) {
     return 947;
    }
if (index == 44) {
     return 936;
    }
if (index == 45) {
     return 951;
    }
if (index == 46) {
     return 948;
    }
if (index == 47) {
     return 942;
    }
if (index == 48) {
     return 929;
    }
if (index == 49) {
     return 939;
    }
if (index == 50) {
     return 944;
    }
if (index == 51) {
     return 941;
    }
if (index == 52) {
     return 936;
    }
if (index == 53) {
     return 937;
    }
if (index == 54) {
     return 922;
    }
if (index == 55) {
     return 925;
    }
if (index == 56) {
     return 923;
    }
if (index == 57) {
     return 928;
    }
if (index == 58) {
     return 932;
    }
if (index == 59) {
     return 923;
    }
if (index == 60) {
     return 932;
    }
if (index == 61) {
     return 933;
    }
if (index == 62) {
     return 910;
    }
if (index == 63) {
     return 942;
    }
if (index == 64) {
     return 926;
    }
if (index == 65) {
     return 934;
    }
if (index == 66) {
     return 941;
    }
if (index == 67) {
     return 613;
    }
if (index == 68) {
     return 926;
    }
if (index == 69) {
     return 940;
    }
if (index == 70) {
     return 937;
    }
if (index == 71) {
     return 928;
    }
if (index == 72) {
     return 930;
    }
if (index == 73) {
     return 602;
    }
if (index == 74) {
     return 619;
    }
if (index == 75) {
     return 593;
    }
if (index == 76) {
     return 584;
    }
if (index == 77) {
     return 596;
    }
if (index == 78) {
     return 559;
    }
if (index == 79) {
     return 571;
    }
if (index == 80) {
     return 547;
    }
if (index == 81) {
     return 575;
    }
if (index == 82) {
     return 898;
    }
if (index == 83) {
     return 570;
    }
if (index == 84) {
     return 541;
    }
if (index == 85) {
     return 578;
    }
if (index == 86) {
     return 558;
    }
if (index == 87) {
     return 575;
    }
if (index == 88) {
     return 584;
    }
if (index == 89) {
     return 584;
    }
if (index == 90) {
     return 566;
    }
if (index == 91) {
     return 582;
    }
if (index == 92) {
     return 575;
    }
if (index == 93) {
     return 600;
    }
if (index == 94) {
     return 605;
    }
if (index == 95) {
     return 631;
    }
if (index == 96) {
     return 642;
    }
if (index == 97) {
     return 608;
    }
if (index == 98) {
     return 583;
    }
if (index == 99) {
     return 580;
    }
if (index == 100) {
     return 593;
    }
if (index == 101) {
     return 563;
    }
if (index == 102) {
     return 552;
    }
if (index == 103) {
     return 571;
    }
if (index == 104) {
     return 610;
    }
if (index == 105) {
     return 621;
    }
if (index == 106) {
     return 531;
    }
if (index == 107) {
     return 576;
    }
if (index == 108) {
     return 562;
    }
if (index == 109) {
     return 566;
    }
if (index == 110) {
     return 546;
    }
if (index == 111) {
     return 610;
    }
if (index == 112) {
     return 590;
    }
if (index == 113) {
     return 568;
    }
if (index == 114) {
     return 565;
    }
if (index == 115) {
     return 560;
    }
if (index == 116) {
     return 563;
    }
if (index == 117) {
     return 568;
    }
if (index == 118) {
     return 541;
    }
if (index == 119) {
     return 552;
    }
if (index == 120) {
     return 580;
    }
if (index == 121) {
     return 667;
    }
if (index == 122) {
     return 667;
    }
if (index == 123) {
     return 563;
    }
if (index == 124) {
     return 554;
    }
if (index == 125) {
     return 612;
    }
if (index == 126) {
     return 556;
    }
if (index == 127) {
     return 570;
    }
if (index == 128) {
     return 551;
    }
if (index == 129) {
     return 563;
    }
if (index == 130) {
     return 553;
    }
if (index == 131) {
     return 553;
    }
if (index == 132) {
     return 541;
    }
if (index == 133) {
     return 570;
    }
if (index == 134) {
     return 553;
    }
if (index == 135) {
     return 556;
    }
if (index == 136) {
     return 544;
    }
if (index == 137) {
     return 566;
    }
if (index == 138) {
     return 558;
    }
if (index == 139) {
     return 550;
    }
if (index == 140) {
     return 543;
    }
if (index == 141) {
     return 547;
    }
if (index == 142) {
     return 560;
    }
if (index == 143) {
     return 565;
    }
if (index == 144) {
     return 545;
    }
if (index == 145) {
     return 566;
    }
if (index == 146) {
     return 558;
    }
if (index == 147) {
     return 568;
    }
if (index == 148) {
     return 567;
    }
if (index == 149) {
     return 573;
    }
if (index == 150) {
     return 558;
    }
if (index == 151) {
     return 906;
    }
if (index == 152) {
     return 862;
    }
if (index == 153) {
     return 865;
    }
if (index == 154) {
     return 848;
    }
if (index == 155) {
     return 827;
    }
if (index == 156) {
     return 851;
    }
if (index == 157) {
     return 820;
    }
if (index == 158) {
     return 833;
    }
if (index == 159) {
     return 834;
    }
if (index == 160) {
     return 849;
    }
if (index == 161) {
     return 839;
    }
if (index == 162) {
     return 848;
    }
if (index == 163) {
     return 838;
    }
if (index == 164) {
     return 859;
    }
if (index == 165) {
     return 848;
    }
if (index == 166) {
     return 880;
    }
if (index == 167) {
     return 847;
    }
if (index == 168) {
     return 866;
    }
if (index == 169) {
     return 871;
    }
if (index == 170) {
     return 869;
    }
if (index == 171) {
     return 872;
    }
if (index == 172) {
     return 816;
    }
if (index == 173) {
     return 854;
    }
if (index == 174) {
     return 853;
    }
if (index == 175) {
     return 877;
    }
if (index == 176) {
     return 850;
    }
if (index > 176) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:00693_' + imgStr + '/digitalImage';
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
br.numLeafs = 177;

// Book title and the URL used for the book title link
br.bookTitle= "Preliminary Report: Concealment of Ownership of Some I. G. Farben Selling Companies  / U. S. Group C. C. / Finance Division";
br.bookAuthor= "John J. Purcell and Alexander Sacks";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-06-25";
br.bookKeyword= "I. G. Farben; \"Tarnung\"";
br.bookUrl  = '/nuremberg/catalog/nur:00693';

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
