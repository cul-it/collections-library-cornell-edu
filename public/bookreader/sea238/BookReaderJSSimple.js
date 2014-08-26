//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 777;
    }
if (index == 1) {
     return 755;
    }
if (index == 2) {
     return 755;
    }
if (index == 3) {
     return 680;
    }
if (index == 4) {
     return 698;
    }
if (index == 5) {
     return 714;
    }
if (index == 6) {
     return 675;
    }
if (index == 7) {
     return 710;
    }
if (index == 8) {
     return 737;
    }
if (index == 9) {
     return 718;
    }
if (index == 10) {
     return 719;
    }
if (index == 11) {
     return 710;
    }
if (index == 12) {
     return 708;
    }
if (index == 13) {
     return 674;
    }
if (index == 14) {
     return 734;
    }
if (index == 15) {
     return 694;
    }
if (index == 16) {
     return 696;
    }
if (index == 17) {
     return 691;
    }
if (index == 18) {
     return 728;
    }
if (index == 19) {
     return 703;
    }
if (index == 20) {
     return 676;
    }
if (index == 21) {
     return 726;
    }
if (index == 22) {
     return 956;
    }
if (index == 23) {
     return 710;
    }
if (index == 24) {
     return 675;
    }
if (index == 25) {
     return 693;
    }
if (index == 26) {
     return 684;
    }
if (index == 27) {
     return 703;
    }
if (index == 28) {
     return 956;
    }
if (index == 29) {
     return 721;
    }
if (index == 30) {
     return 702;
    }
if (index == 31) {
     return 696;
    }
if (index == 32) {
     return 705;
    }
if (index == 33) {
     return 672;
    }
if (index == 34) {
     return 654;
    }
if (index == 35) {
     return 681;
    }
if (index == 36) {
     return 656;
    }
if (index == 37) {
     return 700;
    }
if (index == 38) {
     return 667;
    }
if (index == 39) {
     return 998;
    }
if (index == 40) {
     return 600;
    }
if (index == 41) {
     return 694;
    }
if (index == 42) {
     return 695;
    }
if (index == 43) {
     return 635;
    }
if (index == 44) {
     return 719;
    }
if (index == 45) {
     return 972;
    }
if (index == 46) {
     return 669;
    }
if (index == 47) {
     return 682;
    }
if (index == 48) {
     return 660;
    }
if (index == 49) {
     return 673;
    }
if (index == 50) {
     return 699;
    }
if (index == 51) {
     return 963;
    }
if (index == 52) {
     return 662;
    }
if (index == 53) {
     return 737;
    }
if (index == 54) {
     return 679;
    }
if (index == 55) {
     return 652;
    }
if (index == 56) {
     return 656;
    }
if (index == 57) {
     return 618;
    }
if (index == 58) {
     return 621;
    }
if (index == 59) {
     return 970;
    }
if (index == 60) {
     return 659;
    }
if (index == 61) {
     return 709;
    }
if (index == 62) {
     return 687;
    }
if (index == 63) {
     return 675;
    }
if (index == 64) {
     return 958;
    }
if (index == 65) {
     return 694;
    }
if (index == 66) {
     return 651;
    }
if (index == 67) {
     return 675;
    }
if (index == 68) {
     return 720;
    }
if (index == 69) {
     return 702;
    }
if (index == 70) {
     return 626;
    }
if (index == 71) {
     return 729;
    }
if (index == 72) {
     return 610;
    }
if (index == 73) {
     return 683;
    }
if (index == 74) {
     return 682;
    }
if (index == 75) {
     return 708;
    }
if (index == 76) {
     return 732;
    }
if (index == 77) {
     return 948;
    }
if (index == 78) {
     return 695;
    }
if (index == 79) {
     return 694;
    }
if (index == 80) {
     return 720;
    }
if (index == 81) {
     return 652;
    }
if (index == 82) {
     return 698;
    }
if (index == 83) {
     return 663;
    }
if (index == 84) {
     return 715;
    }
if (index == 85) {
     return 645;
    }
if (index == 86) {
     return 942;
    }
if (index == 87) {
     return 658;
    }
if (index == 88) {
     return 720;
    }
if (index == 89) {
     return 643;
    }
if (index == 90) {
     return 692;
    }
if (index == 91) {
     return 625;
    }
if (index == 92) {
     return 716;
    }
if (index == 93) {
     return 667;
    }
if (index == 94) {
     return 726;
    }
if (index == 95) {
     return 749;
    }
if (index > 95) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1085;
    }
if (index == 1) {
     return 1041;
    }
if (index == 2) {
     return 1050;
    }
if (index == 3) {
     return 1038;
    }
if (index == 4) {
     return 1017;
    }
if (index == 5) {
     return 1025;
    }
if (index == 6) {
     return 1016;
    }
if (index == 7) {
     return 1021;
    }
if (index == 8) {
     return 1021;
    }
if (index == 9) {
     return 1012;
    }
if (index == 10) {
     return 1017;
    }
if (index == 11) {
     return 1006;
    }
if (index == 12) {
     return 1013;
    }
if (index == 13) {
     return 986;
    }
if (index == 14) {
     return 1016;
    }
if (index == 15) {
     return 1005;
    }
if (index == 16) {
     return 1014;
    }
if (index == 17) {
     return 983;
    }
if (index == 18) {
     return 1012;
    }
if (index == 19) {
     return 1003;
    }
if (index == 20) {
     return 1008;
    }
if (index == 21) {
     return 1017;
    }
if (index == 22) {
     return 708;
    }
if (index == 23) {
     return 1006;
    }
if (index == 24) {
     return 1025;
    }
if (index == 25) {
     return 997;
    }
if (index == 26) {
     return 983;
    }
if (index == 27) {
     return 996;
    }
if (index == 28) {
     return 681;
    }
if (index == 29) {
     return 989;
    }
if (index == 30) {
     return 1001;
    }
if (index == 31) {
     return 994;
    }
if (index == 32) {
     return 991;
    }
if (index == 33) {
     return 1003;
    }
if (index == 34) {
     return 1011;
    }
if (index == 35) {
     return 981;
    }
if (index == 36) {
     return 1002;
    }
if (index == 37) {
     return 1005;
    }
if (index == 38) {
     return 1019;
    }
if (index == 39) {
     return 684;
    }
if (index == 40) {
     return 1009;
    }
if (index == 41) {
     return 1013;
    }
if (index == 42) {
     return 1004;
    }
if (index == 43) {
     return 987;
    }
if (index == 44) {
     return 1006;
    }
if (index == 45) {
     return 662;
    }
if (index == 46) {
     return 1003;
    }
if (index == 47) {
     return 1026;
    }
if (index == 48) {
     return 1020;
    }
if (index == 49) {
     return 1006;
    }
if (index == 50) {
     return 997;
    }
if (index == 51) {
     return 711;
    }
if (index == 52) {
     return 1015;
    }
if (index == 53) {
     return 1021;
    }
if (index == 54) {
     return 1017;
    }
if (index == 55) {
     return 1013;
    }
if (index == 56) {
     return 1004;
    }
if (index == 57) {
     return 1009;
    }
if (index == 58) {
     return 1012;
    }
if (index == 59) {
     return 711;
    }
if (index == 60) {
     return 1016;
    }
if (index == 61) {
     return 1005;
    }
if (index == 62) {
     return 1014;
    }
if (index == 63) {
     return 1008;
    }
if (index == 64) {
     return 695;
    }
if (index == 65) {
     return 987;
    }
if (index == 66) {
     return 1003;
    }
if (index == 67) {
     return 999;
    }
if (index == 68) {
     return 1007;
    }
if (index == 69) {
     return 1011;
    }
if (index == 70) {
     return 1007;
    }
if (index == 71) {
     return 1007;
    }
if (index == 72) {
     return 1017;
    }
if (index == 73) {
     return 1006;
    }
if (index == 74) {
     return 1013;
    }
if (index == 75) {
     return 1011;
    }
if (index == 76) {
     return 1015;
    }
if (index == 77) {
     return 671;
    }
if (index == 78) {
     return 1012;
    }
if (index == 79) {
     return 1007;
    }
if (index == 80) {
     return 1007;
    }
if (index == 81) {
     return 1006;
    }
if (index == 82) {
     return 1001;
    }
if (index == 83) {
     return 1012;
    }
if (index == 84) {
     return 1012;
    }
if (index == 85) {
     return 1014;
    }
if (index == 86) {
     return 705;
    }
if (index == 87) {
     return 996;
    }
if (index == 88) {
     return 1007;
    }
if (index == 89) {
     return 1011;
    }
if (index == 90) {
     return 1006;
    }
if (index == 91) {
     return 1006;
    }
if (index == 92) {
     return 1010;
    }
if (index == 93) {
     return 1011;
    }
if (index == 94) {
     return 1027;
    }
if (index == 95) {
     return 1047;
    }
if (index > 95) {
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
    var url = '/fedora/get/seapage:238_' + imgStr + '/digitalImage';
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
br.numLeafs = 96;

// Book title and the URL used for the book title link
br.bookTitle= "Australasia and Malaysia";
br.bookAuthor= "Marsh, Lewis";
br.bookPub= "Glasgow: Blackie, 1915";
br.bookKeyword= "Australasia--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Islands of the Pacific--Description and travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Malay Archipelago--Description and travel";
br.bookUrl  = '/catalog/sea:238';

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
