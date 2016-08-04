#!/bin/sh

fix_cc(){
              perl -p -e 's/catalog\/lib/liberian\/catalog\/lib/g' $1 > temp
              mv temp $1
              echo "fixing $1"
              }

fix_cc liber001/BookReaderJSSimple.js
fix_cc liber002/BookReaderJSSimple.js
fix_cc liber003/BookReaderJSSimple.js
fix_cc liber004/BookReaderJSSimple.js
fix_cc liber005/BookReaderJSSimple.js
fix_cc liber006/BookReaderJSSimple.js
fix_cc liber007/BookReaderJSSimple.js
fix_cc liber010/BookReaderJSSimple.js
fix_cc liber011/BookReaderJSSimple.js
fix_cc liber012/BookReaderJSSimple.js
fix_cc liber013/BookReaderJSSimple.js
fix_cc liber014/BookReaderJSSimple.js
fix_cc liber015/BookReaderJSSimple.js
fix_cc liber016/BookReaderJSSimple.js
fix_cc liber017/BookReaderJSSimple.js
fix_cc liber018/BookReaderJSSimple.js
fix_cc liber019/BookReaderJSSimple.js
fix_cc liber020/BookReaderJSSimple.js
fix_cc liber021/BookReaderJSSimple.js
fix_cc liber022/BookReaderJSSimple.js
fix_cc liber023/BookReaderJSSimple.js
fix_cc liber024/BookReaderJSSimple.js
fix_cc liber025/BookReaderJSSimple.js
fix_cc liber026/BookReaderJSSimple.js
fix_cc liber027/BookReaderJSSimple.js
fix_cc liber028/BookReaderJSSimple.js
fix_cc liber029/BookReaderJSSimple.js
fix_cc liber030/BookReaderJSSimple.js
fix_cc liber031/BookReaderJSSimple.js
fix_cc liber100/BookReaderJSSimple.js
