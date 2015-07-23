#!/bin/sh

fix_cc(){
              perl -p -e 's/catalog\/scott/scottsboro\/catalog\/scott/g' $1 > temp
              mv temp $1
              echo "fixing $1"
              }

fix_cc scott1001/BookReaderJSSimple.js
fix_cc scott1002/BookReaderJSSimple.js
fix_cc scott1003/BookReaderJSSimple.js
fix_cc scott1004/BookReaderJSSimple.js
fix_cc scott1005/BookReaderJSSimple.js
fix_cc scott1006/BookReaderJSSimple.js
fix_cc scott1007/BookReaderJSSimple.js
fix_cc scott1008/BookReaderJSSimple.js
fix_cc scott1009/BookReaderJSSimple.js
fix_cc scott1010/BookReaderJSSimple.js
fix_cc scott1011/BookReaderJSSimple.js
fix_cc scott2012/BookReaderJSSimple.js
fix_cc scott2013/BookReaderJSSimple.js
fix_cc scott2014/BookReaderJSSimple.js
fix_cc scott2015/BookReaderJSSimple.js
fix_cc scott3016/BookReaderJSSimple.js
fix_cc scott3017/BookReaderJSSimple.js
fix_cc scott3018/BookReaderJSSimple.js
fix_cc scott3019/BookReaderJSSimple.js
fix_cc scott4020/BookReaderJSSimple.js
fix_cc scott4021/BookReaderJSSimple.js
fix_cc scott4022/BookReaderJSSimple.js
fix_cc scott4023/BookReaderJSSimple.js
fix_cc scott4024/BookReaderJSSimple.js
fix_cc scott4025/BookReaderJSSimple.js
fix_cc scott4026/BookReaderJSSimple.js
fix_cc scott4027/BookReaderJSSimple.js
fix_cc scott5028/BookReaderJSSimple.js
fix_cc scott5029/BookReaderJSSimple.js
fix_cc scott5030/BookReaderJSSimple.js
fix_cc scott6031/BookReaderJSSimple.js
fix_cc scott6032/BookReaderJSSimple.js
fix_cc scott7033/BookReaderJSSimple.js
fix_cc scott7034/BookReaderJSSimple.js
fix_cc scott7035/BookReaderJSSimple.js
fix_cc scott7036/BookReaderJSSimple.js
fix_cc scott7037/BookReaderJSSimple.js
fix_cc scott7038/BookReaderJSSimple.js
fix_cc scott7039/BookReaderJSSimple.js
fix_cc scott7040/BookReaderJSSimple.js
fix_cc scott7041/BookReaderJSSimple.js
fix_cc scott7042/BookReaderJSSimple.js
