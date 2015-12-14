//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 525;
    }
if (index == 1) {
     return 525;
    }
if (index == 2) {
     return 525;
    }
if (index == 3) {
     return 525;
    }
if (index == 4) {
     return 525;
    }
if (index == 5) {
     return 525;
    }
if (index == 6) {
     return 525;
    }
if (index == 7) {
     return 525;
    }
if (index == 8) {
     return 525;
    }
if (index == 9) {
     return 525;
    }
if (index == 10) {
     return 525;
    }
if (index == 11) {
     return 525;
    }
if (index == 12) {
     return 525;
    }
if (index == 13) {
     return 525;
    }
if (index == 14) {
     return 525;
    }
if (index == 15) {
     return 525;
    }
if (index == 16) {
     return 525;
    }
if (index == 17) {
     return 525;
    }
if (index == 18) {
     return 525;
    }
if (index == 19) {
     return 525;
    }
if (index == 20) {
     return 525;
    }
if (index == 21) {
     return 525;
    }
if (index == 22) {
     return 525;
    }
if (index == 23) {
     return 525;
    }
if (index == 24) {
     return 525;
    }
if (index == 25) {
     return 525;
    }
if (index == 26) {
     return 525;
    }
if (index == 27) {
     return 525;
    }
if (index == 28) {
     return 525;
    }
if (index == 29) {
     return 525;
    }
if (index == 30) {
     return 525;
    }
if (index == 31) {
     return 545;
    }
if (index == 32) {
     return 551;
    }
if (index == 33) {
     return 551;
    }
if (index == 34) {
     return 551;
    }
if (index == 35) {
     return 547;
    }
if (index == 36) {
     return 547;
    }
if (index == 37) {
     return 547;
    }
if (index == 38) {
     return 538;
    }
if (index == 39) {
     return 560;
    }
if (index == 40) {
     return 549;
    }
if (index == 41) {
     return 553;
    }
if (index == 42) {
     return 556;
    }
if (index == 43) {
     return 561;
    }
if (index == 44) {
     return 558;
    }
if (index == 45) {
     return 552;
    }
if (index == 46) {
     return 565;
    }
if (index == 47) {
     return 569;
    }
if (index == 48) {
     return 569;
    }
if (index == 49) {
     return 569;
    }
if (index == 50) {
     return 569;
    }
if (index == 51) {
     return 569;
    }
if (index == 52) {
     return 569;
    }
if (index == 53) {
     return 569;
    }
if (index == 54) {
     return 569;
    }
if (index == 55) {
     return 569;
    }
if (index == 56) {
     return 569;
    }
if (index == 57) {
     return 569;
    }
if (index == 58) {
     return 569;
    }
if (index == 59) {
     return 569;
    }
if (index == 60) {
     return 557;
    }
if (index == 61) {
     return 565;
    }
if (index == 62) {
     return 563;
    }
if (index == 63) {
     return 567;
    }
if (index > 63) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 755;
    }
if (index == 1) {
     return 755;
    }
if (index == 2) {
     return 755;
    }
if (index == 3) {
     return 755;
    }
if (index == 4) {
     return 755;
    }
if (index == 5) {
     return 755;
    }
if (index == 6) {
     return 756;
    }
if (index == 7) {
     return 756;
    }
if (index == 8) {
     return 756;
    }
if (index == 9) {
     return 756;
    }
if (index == 10) {
     return 756;
    }
if (index == 11) {
     return 756;
    }
if (index == 12) {
     return 756;
    }
if (index == 13) {
     return 756;
    }
if (index == 14) {
     return 756;
    }
if (index == 15) {
     return 756;
    }
if (index == 16) {
     return 756;
    }
if (index == 17) {
     return 756;
    }
if (index == 18) {
     return 756;
    }
if (index == 19) {
     return 756;
    }
if (index == 20) {
     return 756;
    }
if (index == 21) {
     return 756;
    }
if (index == 22) {
     return 756;
    }
if (index == 23) {
     return 756;
    }
if (index == 24) {
     return 756;
    }
if (index == 25) {
     return 756;
    }
if (index == 26) {
     return 756;
    }
if (index == 27) {
     return 756;
    }
if (index == 28) {
     return 756;
    }
if (index == 29) {
     return 756;
    }
if (index == 30) {
     return 756;
    }
if (index == 31) {
     return 773;
    }
if (index == 32) {
     return 774;
    }
if (index == 33) {
     return 774;
    }
if (index == 34) {
     return 774;
    }
if (index == 35) {
     return 773;
    }
if (index == 36) {
     return 773;
    }
if (index == 37) {
     return 780;
    }
if (index == 38) {
     return 769;
    }
if (index == 39) {
     return 779;
    }
if (index == 40) {
     return 774;
    }
if (index == 41) {
     return 781;
    }
if (index == 42) {
     return 780;
    }
if (index == 43) {
     return 770;
    }
if (index == 44) {
     return 769;
    }
if (index == 45) {
     return 765;
    }
if (index == 46) {
     return 758;
    }
if (index == 47) {
     return 773;
    }
if (index == 48) {
     return 773;
    }
if (index == 49) {
     return 773;
    }
if (index == 50) {
     return 773;
    }
if (index == 51) {
     return 773;
    }
if (index == 52) {
     return 773;
    }
if (index == 53) {
     return 773;
    }
if (index == 54) {
     return 773;
    }
if (index == 55) {
     return 773;
    }
if (index == 56) {
     return 773;
    }
if (index == 57) {
     return 773;
    }
if (index == 58) {
     return 773;
    }
if (index == 59) {
     return 773;
    }
if (index == 60) {
     return 773;
    }
if (index == 61) {
     return 771;
    }
if (index == 62) {
     return 774;
    }
if (index == 63) {
     return 769;
    }
if (index > 63) {
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
    var url = 'http://hydrastg.library.cornell.edu/fedora/get/nur:01132_' + imgStr + '/digitalImage';
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
br.numLeafs = 64;

// Book title and the URL used for the book title link
br.bookTitle= " R &amp; A No. 3113.7 / Principal Nazi Organizations Involved in the Commission of War Crimes: The Nazi Party (Part V) / Office of Strategic Services / Research and Analysis Branch / Draft for Use of the War Crimes Staff / SECRET";
br.bookAuthor= "The author's name is not given.";
br.bookPub= "Nuremberg, Germany: International Military Tribunal, 1945-09-10";
br.bookKeyword= "Organisationsbuch der NSDAP; German Labor Front; Indoctrination; Nazi ideology; Auslandsorganisation (AO); Werkscharen (plant troops); Territorial organization; Honor and Disciplinary Courts; \"Strength through Joy\"; Democratic labor unions; Political persecution; National Socialist Teachers' League; Reich Food Estate; Entailed Farm Legislation; Enslavement of foreign labor; Occupied territories: exploitation of agricultural resources; Reich Ministry for Popular Entertainment and Propaganda; Reich Chamber of Culture; Ministry for Food and Agriculture; Food rationing; Confiscation of private landed property; German settlement of conquered territories";
br.bookUrl  = '/nuremberg/catalog/nur:01132';

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
