//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 717;
    }
if (index == 1) {
     return 741;
    }
if (index == 2) {
     return 683;
    }
if (index == 3) {
     return 640;
    }
if (index == 4) {
     return 649;
    }
if (index == 5) {
     return 656;
    }
if (index == 6) {
     return 654;
    }
if (index == 7) {
     return 670;
    }
if (index == 8) {
     return 646;
    }
if (index == 9) {
     return 653;
    }
if (index == 10) {
     return 650;
    }
if (index == 11) {
     return 1029;
    }
if (index == 12) {
     return 1048;
    }
if (index == 13) {
     return 683;
    }
if (index == 14) {
     return 661;
    }
if (index == 15) {
     return 623;
    }
if (index == 16) {
     return 1061;
    }
if (index == 17) {
     return 683;
    }
if (index == 18) {
     return 661;
    }
if (index == 19) {
     return 634;
    }
if (index == 20) {
     return 639;
    }
if (index == 21) {
     return 678;
    }
if (index == 22) {
     return 669;
    }
if (index == 23) {
     return 858;
    }
if (index == 24) {
     return 1053;
    }
if (index == 25) {
     return 672;
    }
if (index == 26) {
     return 645;
    }
if (index == 27) {
     return 628;
    }
if (index == 28) {
     return 663;
    }
if (index == 29) {
     return 687;
    }
if (index == 30) {
     return 663;
    }
if (index == 31) {
     return 899;
    }
if (index == 32) {
     return 644;
    }
if (index == 33) {
     return 675;
    }
if (index == 34) {
     return 664;
    }
if (index == 35) {
     return 633;
    }
if (index == 36) {
     return 672;
    }
if (index == 37) {
     return 686;
    }
if (index == 38) {
     return 655;
    }
if (index == 39) {
     return 1062;
    }
if (index == 40) {
     return 665;
    }
if (index == 41) {
     return 652;
    }
if (index == 42) {
     return 652;
    }
if (index == 43) {
     return 650;
    }
if (index == 44) {
     return 658;
    }
if (index == 45) {
     return 662;
    }
if (index == 46) {
     return 669;
    }
if (index == 47) {
     return 1044;
    }
if (index == 48) {
     return 645;
    }
if (index == 49) {
     return 675;
    }
if (index == 50) {
     return 671;
    }
if (index == 51) {
     return 1062;
    }
if (index == 52) {
     return 640;
    }
if (index == 53) {
     return 685;
    }
if (index == 54) {
     return 658;
    }
if (index == 55) {
     return 685;
    }
if (index == 56) {
     return 1044;
    }
if (index == 57) {
     return 662;
    }
if (index == 58) {
     return 1635;
    }
if (index == 59) {
     return 662;
    }
if (index == 60) {
     return 639;
    }
if (index == 61) {
     return 725;
    }
if (index > 61) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 1105;
    }
if (index == 1) {
     return 1124;
    }
if (index == 2) {
     return 1065;
    }
if (index == 3) {
     return 1044;
    }
if (index == 4) {
     return 1060;
    }
if (index == 5) {
     return 1114;
    }
if (index == 6) {
     return 1062;
    }
if (index == 7) {
     return 1112;
    }
if (index == 8) {
     return 1067;
    }
if (index == 9) {
     return 1073;
    }
if (index == 10) {
     return 1065;
    }
if (index == 11) {
     return 628;
    }
if (index == 12) {
     return 666;
    }
if (index == 13) {
     return 1098;
    }
if (index == 14) {
     return 1067;
    }
if (index == 15) {
     return 1040;
    }
if (index == 16) {
     return 639;
    }
if (index == 17) {
     return 1124;
    }
if (index == 18) {
     return 1059;
    }
if (index == 19) {
     return 1041;
    }
if (index == 20) {
     return 1061;
    }
if (index == 21) {
     return 1088;
    }
if (index == 22) {
     return 1067;
    }
if (index == 23) {
     return 606;
    }
if (index == 24) {
     return 638;
    }
if (index == 25) {
     return 1080;
    }
if (index == 26) {
     return 1065;
    }
if (index == 27) {
     return 1050;
    }
if (index == 28) {
     return 1059;
    }
if (index == 29) {
     return 1092;
    }
if (index == 30) {
     return 1072;
    }
if (index == 31) {
     return 621;
    }
if (index == 32) {
     return 1069;
    }
if (index == 33) {
     return 1081;
    }
if (index == 34) {
     return 1084;
    }
if (index == 35) {
     return 1064;
    }
if (index == 36) {
     return 1076;
    }
if (index == 37) {
     return 1080;
    }
if (index == 38) {
     return 1073;
    }
if (index == 39) {
     return 654;
    }
if (index == 40) {
     return 1077;
    }
if (index == 41) {
     return 1082;
    }
if (index == 42) {
     return 1080;
    }
if (index == 43) {
     return 1056;
    }
if (index == 44) {
     return 1076;
    }
if (index == 45) {
     return 1082;
    }
if (index == 46) {
     return 1071;
    }
if (index == 47) {
     return 664;
    }
if (index == 48) {
     return 1055;
    }
if (index == 49) {
     return 1087;
    }
if (index == 50) {
     return 1083;
    }
if (index == 51) {
     return 658;
    }
if (index == 52) {
     return 1089;
    }
if (index == 53) {
     return 1083;
    }
if (index == 54) {
     return 1102;
    }
if (index == 55) {
     return 1082;
    }
if (index == 56) {
     return 659;
    }
if (index == 57) {
     return 1033;
    }
if (index == 58) {
     return 1320;
    }
if (index == 59) {
     return 1033;
    }
if (index == 60) {
     return 1074;
    }
if (index == 61) {
     return 1115;
    }
if (index > 61) {
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
    var url = '/fedora/get/seapage:100_' + imgStr + '/digitalImage';
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
br.numLeafs = 62;

// Book title and the URL used for the book title link
br.bookTitle= "Java : information for travellers : trips in the Isle of Java, with notes on the climate, railway- and steamer service, hotels, places of interest for tourists, etc., etc";
br.bookAuthor= "Officieel Toeristenbureau voor Nederlandsch-Indie";
br.bookPub= "Batavia: Official Tourist Bureau, 1913";
br.bookKeyword= "Java (Indonesia)--Guidebooks";
br.bookUrl  = '/catalog/sea:100';

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
