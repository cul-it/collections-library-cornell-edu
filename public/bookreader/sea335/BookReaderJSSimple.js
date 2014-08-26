//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 0) {
     return 922;
    }
if (index == 1) {
     return 936;
    }
if (index == 2) {
     return 476;
    }
if (index == 3) {
     return 640;
    }
if (index == 4) {
     return 501;
    }
if (index == 5) {
     return 634;
    }
if (index == 6) {
     return 639;
    }
if (index == 7) {
     return 509;
    }
if (index == 8) {
     return 467;
    }
if (index == 9) {
     return 486;
    }
if (index == 10) {
     return 648;
    }
if (index == 11) {
     return 688;
    }
if (index == 12) {
     return 516;
    }
if (index == 13) {
     return 474;
    }
if (index == 14) {
     return 681;
    }
if (index == 15) {
     return 651;
    }
if (index == 16) {
     return 481;
    }
if (index == 17) {
     return 469;
    }
if (index == 18) {
     return 521;
    }
if (index == 19) {
     return 486;
    }
if (index == 20) {
     return 490;
    }
if (index == 21) {
     return 398;
    }
if (index == 22) {
     return 459;
    }
if (index == 23) {
     return 484;
    }
if (index == 24) {
     return 629;
    }
if (index == 25) {
     return 466;
    }
if (index > 25) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 0) {
     return 771;
    }
if (index == 1) {
     return 753;
    }
if (index == 2) {
     return 492;
    }
if (index == 3) {
     return 649;
    }
if (index == 4) {
     return 819;
    }
if (index == 5) {
     return 673;
    }
if (index == 6) {
     return 677;
    }
if (index == 7) {
     return 842;
    }
if (index == 8) {
     return 500;
    }
if (index == 9) {
     return 500;
    }
if (index == 10) {
     return 688;
    }
if (index == 11) {
     return 883;
    }
if (index == 12) {
     return 857;
    }
if (index == 13) {
     return 489;
    }
if (index == 14) {
     return 702;
    }
if (index == 15) {
     return 672;
    }
if (index == 16) {
     return 489;
    }
if (index == 17) {
     return 500;
    }
if (index == 18) {
     return 844;
    }
if (index == 19) {
     return 806;
    }
if (index == 20) {
     return 490;
    }
if (index == 21) {
     return 720;
    }
if (index == 22) {
     return 485;
    }
if (index == 23) {
     return 472;
    }
if (index == 24) {
     return 672;
    }
if (index == 25) {
     return 500;
    }
if (index > 25) {
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
    var url = '/fedora/get/seapage:335_' + imgStr + '/digitalImage';
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
br.numLeafs = 26;

// Book title and the URL used for the book title link
br.bookTitle= "Burman photograph album";
br.bookAuthor= "no author";
br.bookPub= "Ithaca, NY: Division of Rare and Manuscript Collections, Cornell University Library, 1897";
br.bookKeyword= "Missions--Burma<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Funeral Customs--Burma<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Pictorial Works<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Burma--Description and Travel<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monywa(Burma)--Pictorial Works";
br.bookUrl  = '/catalog/sea:335';

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
