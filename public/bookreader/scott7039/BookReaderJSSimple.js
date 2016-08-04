//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
br = new BookReader();

// Return the width of a given page.  Here we assume all images are 800 pixels wide
br.getPageWidth = function(index) {
if (index == 140) {
     return 1114;
    }
if (index == 141) {
     return 1102;
    }
if (index == 142) {
     return 1092;
    }
if (index == 143) {
     return 1092;
    }
if (index == 144) {
     return 1096;
    }
if (index == 145) {
     return 1092;
    }
if (index == 146) {
     return 1090;
    }
if (index == 147) {
     return 1092;
    }
if (index == 148) {
     return 1094;
    }
if (index == 149) {
     return 1094;
    }
if (index == 150) {
     return 1090;
    }
if (index == 151) {
     return 1092;
    }
if (index == 152) {
     return 1094;
    }
if (index == 153) {
     return 1094;
    }
if (index == 154) {
     return 1090;
    }
if (index == 155) {
     return 1090;
    }
if (index == 156) {
     return 1094;
    }
if (index == 157) {
     return 1094;
    }
if (index == 158) {
     return 1090;
    }
if (index == 159) {
     return 1090;
    }
if (index == 160) {
     return 1094;
    }
if (index == 161) {
     return 1092;
    }
if (index == 162) {
     return 1086;
    }
if (index == 163) {
     return 1084;
    }
if (index == 164) {
     return 1090;
    }
if (index == 165) {
     return 1092;
    }
if (index == 166) {
     return 1086;
    }
if (index == 167) {
     return 1084;
    }
if (index == 168) {
     return 1088;
    }
if (index == 169) {
     return 1086;
    }
if (index == 170) {
     return 1082;
    }
if (index == 171) {
     return 1082;
    }
if (index == 172) {
     return 1084;
    }
if (index == 173) {
     return 1088;
    }
if (index == 174) {
     return 1086;
    }
if (index == 175) {
     return 1082;
    }
if (index == 176) {
     return 1086;
    }
if (index == 177) {
     return 1088;
    }
if (index == 178) {
     return 1084;
    }
if (index == 179) {
     return 1082;
    }
if (index == 180) {
     return 1082;
    }
if (index == 181) {
     return 1082;
    }
if (index == 182) {
     return 1082;
    }
if (index == 183) {
     return 1082;
    }
if (index == 184) {
     return 1082;
    }
if (index == 185) {
     return 1082;
    }
if (index == 186) {
     return 1082;
    }
if (index == 187) {
     return 1082;
    }
if (index == 188) {
     return 1082;
    }
if (index == 189) {
     return 1082;
    }
if (index == 190) {
     return 1082;
    }
if (index == 191) {
     return 1082;
    }
if (index == 192) {
     return 1082;
    }
if (index == 193) {
     return 1082;
    }
if (index == 194) {
     return 1082;
    }
if (index == 195) {
     return 1082;
    }
if (index == 196) {
     return 1082;
    }
if (index == 197) {
     return 1082;
    }
if (index == 198) {
     return 1082;
    }
if (index == 199) {
     return 1082;
    }
if (index == 200) {
     return 1082;
    }
if (index == 201) {
     return 1082;
    }
if (index == 202) {
     return 1082;
    }
if (index == 203) {
     return 1082;
    }
if (index == 204) {
     return 1082;
    }
if (index == 205) {
     return 1082;
    }
if (index == 206) {
     return 1082;
    }
if (index == 207) {
     return 1082;
    }
if (index == 208) {
     return 1082;
    }
if (index == 209) {
     return 1082;
    }
if (index == 210) {
     return 1082;
    }
if (index == 211) {
     return 1082;
    }
if (index == 212) {
     return 1082;
    }
if (index == 213) {
     return 1082;
    }
if (index == 214) {
     return 1082;
    }
if (index == 215) {
     return 1082;
    }
if (index == 216) {
     return 1082;
    }
if (index == 217) {
     return 1082;
    }
if (index == 218) {
     return 1082;
    }
if (index == 219) {
     return 1082;
    }
if (index == 220) {
     return 1082;
    }
if (index == 221) {
     return 1082;
    }
if (index == 222) {
     return 1082;
    }
if (index == 223) {
     return 1082;
    }
if (index == 224) {
     return 1082;
    }
if (index == 225) {
     return 1082;
    }
if (index == 226) {
     return 1082;
    }
if (index == 227) {
     return 1082;
    }
if (index == 228) {
     return 1082;
    }
if (index == 229) {
     return 1082;
    }
if (index > 229) {
    return 800;
    }
}

// Return the height of a given page.  Here we assume all images are 1200 pixels high
br.getPageHeight = function(index) {
if (index == 140) {
     return 816;
    }
if (index == 141) {
     return 816;
    }
if (index == 142) {
     return 816;
    }
if (index == 143) {
     return 816;
    }
if (index == 144) {
     return 816;
    }
if (index == 145) {
     return 816;
    }
if (index == 146) {
     return 816;
    }
if (index == 147) {
     return 816;
    }
if (index == 148) {
     return 816;
    }
if (index == 149) {
     return 816;
    }
if (index == 150) {
     return 816;
    }
if (index == 151) {
     return 816;
    }
if (index == 152) {
     return 816;
    }
if (index == 153) {
     return 816;
    }
if (index == 154) {
     return 816;
    }
if (index == 155) {
     return 816;
    }
if (index == 156) {
     return 816;
    }
if (index == 157) {
     return 816;
    }
if (index == 158) {
     return 816;
    }
if (index == 159) {
     return 816;
    }
if (index == 160) {
     return 816;
    }
if (index == 161) {
     return 816;
    }
if (index == 162) {
     return 816;
    }
if (index == 163) {
     return 816;
    }
if (index == 164) {
     return 816;
    }
if (index == 165) {
     return 816;
    }
if (index == 166) {
     return 816;
    }
if (index == 167) {
     return 816;
    }
if (index == 168) {
     return 816;
    }
if (index == 169) {
     return 816;
    }
if (index == 170) {
     return 816;
    }
if (index == 171) {
     return 816;
    }
if (index == 172) {
     return 816;
    }
if (index == 173) {
     return 816;
    }
if (index == 174) {
     return 816;
    }
if (index == 175) {
     return 816;
    }
if (index == 176) {
     return 816;
    }
if (index == 177) {
     return 816;
    }
if (index == 178) {
     return 816;
    }
if (index == 179) {
     return 816;
    }
if (index == 180) {
     return 816;
    }
if (index == 181) {
     return 816;
    }
if (index == 182) {
     return 816;
    }
if (index == 183) {
     return 816;
    }
if (index == 184) {
     return 816;
    }
if (index == 185) {
     return 816;
    }
if (index == 186) {
     return 816;
    }
if (index == 187) {
     return 816;
    }
if (index == 188) {
     return 816;
    }
if (index == 189) {
     return 816;
    }
if (index == 190) {
     return 816;
    }
if (index == 191) {
     return 832;
    }
if (index == 192) {
     return 832;
    }
if (index == 193) {
     return 832;
    }
if (index == 194) {
     return 832;
    }
if (index == 195) {
     return 832;
    }
if (index == 196) {
     return 832;
    }
if (index == 197) {
     return 832;
    }
if (index == 198) {
     return 832;
    }
if (index == 199) {
     return 832;
    }
if (index == 200) {
     return 832;
    }
if (index == 201) {
     return 832;
    }
if (index == 202) {
     return 832;
    }
if (index == 203) {
     return 832;
    }
if (index == 204) {
     return 832;
    }
if (index == 205) {
     return 832;
    }
if (index == 206) {
     return 832;
    }
if (index == 207) {
     return 832;
    }
if (index == 208) {
     return 832;
    }
if (index == 209) {
     return 832;
    }
if (index == 210) {
     return 832;
    }
if (index == 211) {
     return 832;
    }
if (index == 212) {
     return 832;
    }
if (index == 213) {
     return 832;
    }
if (index == 214) {
     return 832;
    }
if (index == 215) {
     return 832;
    }
if (index == 216) {
     return 832;
    }
if (index == 217) {
     return 832;
    }
if (index == 218) {
     return 832;
    }
if (index == 219) {
     return 832;
    }
if (index == 220) {
     return 832;
    }
if (index == 221) {
     return 832;
    }
if (index == 222) {
     return 832;
    }
if (index == 223) {
     return 832;
    }
if (index == 224) {
     return 832;
    }
if (index == 225) {
     return 832;
    }
if (index == 226) {
     return 832;
    }
if (index == 227) {
     return 832;
    }
if (index == 228) {
     return 832;
    }
if (index == 229) {
     return 832;
    }
if (index > 229) {
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
    var url = '/fedora/get/scott:7039_' + imgStr + '/digitalImage';
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
br.numLeafs = 90;

// Book title and the URL used for the book title link
br.bookTitle= "Patterson v. Alabama. October term 1937.  Transcript of record. ii, 175 p.";
br.bookAuthor= "U.S., Supreme Court";
br.bookPub= "Washington, D.C.: , 1937";
br.bookKeyword= "";
br.bookUrl  = '/scottsboro/catalog/scott:7039';

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
