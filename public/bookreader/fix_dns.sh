#!/bin/sh

fix_dns(){
              perl -p -e 's/http:\/\/hydrastg.library.cornell.edu//g' $1 > temp
              mv temp $1
              perl -p -e 's/http:\/\/hydraprod.library.cornell.edu//g' $1 > temp
              mv temp $1
              rm $1.bak
              echo "fixing $1"
              }
fix_dns sea002/BookReaderJSSimple.js
fix_dns sea003/BookReaderJSSimple.js
fix_dns sea004/BookReaderJSSimple.js
fix_dns sea005/BookReaderJSSimple.js
fix_dns sea006/BookReaderJSSimple.js
fix_dns sea007/BookReaderJSSimple.js
fix_dns sea008/BookReaderJSSimple.js
fix_dns sea010/BookReaderJSSimple.js
fix_dns sea011b/BookReaderJSSimple.js
fix_dns sea011c/BookReaderJSSimple.js
fix_dns sea011d/BookReaderJSSimple.js
fix_dns sea012/BookReaderJSSimple.js
fix_dns sea013/BookReaderJSSimple.js
fix_dns sea014/BookReaderJSSimple.js
fix_dns sea015/BookReaderJSSimple.js
fix_dns sea016/BookReaderJSSimple.js
fix_dns sea017/BookReaderJSSimple.js
fix_dns sea018/BookReaderJSSimple.js
fix_dns sea019/BookReaderJSSimple.js
fix_dns sea020/BookReaderJSSimple.js
fix_dns sea021/BookReaderJSSimple.js
fix_dns sea022/BookReaderJSSimple.js
fix_dns sea023/BookReaderJSSimple.js
fix_dns sea024/BookReaderJSSimple.js
fix_dns sea025/BookReaderJSSimple.js
fix_dns sea026/BookReaderJSSimple.js
fix_dns sea027/BookReaderJSSimple.js
fix_dns sea028/BookReaderJSSimple.js
fix_dns sea029/BookReaderJSSimple.js
fix_dns sea030/BookReaderJSSimple.js
fix_dns sea031/BookReaderJSSimple.js
fix_dns sea032/BookReaderJSSimple.js
fix_dns sea033/BookReaderJSSimple.js
fix_dns sea034a/BookReaderJSSimple.js
fix_dns sea034b/BookReaderJSSimple.js
fix_dns sea034c/BookReaderJSSimple.js
fix_dns sea034d/BookReaderJSSimple.js
fix_dns sea035/BookReaderJSSimple.js
fix_dns sea038/BookReaderJSSimple.js
fix_dns sea040/BookReaderJSSimple.js
fix_dns sea041/BookReaderJSSimple.js
fix_dns sea042/BookReaderJSSimple.js
fix_dns sea043/BookReaderJSSimple.js
fix_dns sea044/BookReaderJSSimple.js
fix_dns sea045/BookReaderJSSimple.js
fix_dns sea046/BookReaderJSSimple.js
fix_dns sea047/BookReaderJSSimple.js
fix_dns sea048/BookReaderJSSimple.js
fix_dns sea049/BookReaderJSSimple.js
fix_dns sea050/BookReaderJSSimple.js
fix_dns sea051/BookReaderJSSimple.js
fix_dns sea052a/BookReaderJSSimple.js
fix_dns sea052b/BookReaderJSSimple.js
fix_dns sea053/BookReaderJSSimple.js
fix_dns sea054/BookReaderJSSimple.js
fix_dns sea055/BookReaderJSSimple.js
fix_dns sea056/BookReaderJSSimple.js
fix_dns sea057/BookReaderJSSimple.js
fix_dns sea058/BookReaderJSSimple.js
fix_dns sea059/BookReaderJSSimple.js
fix_dns sea060/BookReaderJSSimple.js
fix_dns sea061/BookReaderJSSimple.js
fix_dns sea062/BookReaderJSSimple.js
fix_dns sea063/BookReaderJSSimple.js
fix_dns sea064a/BookReaderJSSimple.js
fix_dns sea064b/BookReaderJSSimple.js
fix_dns sea065/BookReaderJSSimple.js
fix_dns sea066/BookReaderJSSimple.js
fix_dns sea068/BookReaderJSSimple.js
fix_dns sea069/BookReaderJSSimple.js
fix_dns sea070/BookReaderJSSimple.js
fix_dns sea071/BookReaderJSSimple.js
fix_dns sea072/BookReaderJSSimple.js
fix_dns sea073/BookReaderJSSimple.js
fix_dns sea074/BookReaderJSSimple.js
fix_dns sea075/BookReaderJSSimple.js
fix_dns sea078/BookReaderJSSimple.js
fix_dns sea079/BookReaderJSSimple.js
fix_dns sea080/BookReaderJSSimple.js
fix_dns sea082/BookReaderJSSimple.js
fix_dns sea083/BookReaderJSSimple.js
fix_dns sea086/BookReaderJSSimple.js
fix_dns sea087/BookReaderJSSimple.js
fix_dns sea088/BookReaderJSSimple.js
fix_dns sea089/BookReaderJSSimple.js
fix_dns sea090/BookReaderJSSimple.js
fix_dns sea092/BookReaderJSSimple.js
fix_dns sea093/BookReaderJSSimple.js
fix_dns sea094/BookReaderJSSimple.js
fix_dns sea095/BookReaderJSSimple.js
fix_dns sea096/BookReaderJSSimple.js
fix_dns sea097/BookReaderJSSimple.js
fix_dns sea098/BookReaderJSSimple.js
fix_dns sea099/BookReaderJSSimple.js
fix_dns sea100/BookReaderJSSimple.js
fix_dns sea101/BookReaderJSSimple.js
fix_dns sea102/BookReaderJSSimple.js
fix_dns sea103a/BookReaderJSSimple.js
fix_dns sea103b/BookReaderJSSimple.js
fix_dns sea103c/BookReaderJSSimple.js
fix_dns sea104/BookReaderJSSimple.js
fix_dns sea105/BookReaderJSSimple.js
fix_dns sea106/BookReaderJSSimple.js
fix_dns sea107/BookReaderJSSimple.js
fix_dns sea108/BookReaderJSSimple.js
fix_dns sea109/BookReaderJSSimple.js
fix_dns sea110/BookReaderJSSimple.js
fix_dns sea111/BookReaderJSSimple.js
fix_dns sea112/BookReaderJSSimple.js
fix_dns sea113/BookReaderJSSimple.js
fix_dns sea114/BookReaderJSSimple.js
fix_dns sea115/BookReaderJSSimple.js
fix_dns sea116/BookReaderJSSimple.js
fix_dns sea117/BookReaderJSSimple.js
fix_dns sea118/BookReaderJSSimple.js
fix_dns sea119/BookReaderJSSimple.js
fix_dns sea120/BookReaderJSSimple.js
fix_dns sea121/BookReaderJSSimple.js
fix_dns sea122/BookReaderJSSimple.js
fix_dns sea123/BookReaderJSSimple.js
fix_dns sea124a/BookReaderJSSimple.js
fix_dns sea124b/BookReaderJSSimple.js
fix_dns sea125/BookReaderJSSimple.js
fix_dns sea126/BookReaderJSSimple.js
fix_dns sea127/BookReaderJSSimple.js
fix_dns sea128a/BookReaderJSSimple.js
fix_dns sea128b/BookReaderJSSimple.js
fix_dns sea129/BookReaderJSSimple.js
fix_dns sea130/BookReaderJSSimple.js
fix_dns sea132/BookReaderJSSimple.js
fix_dns sea133/BookReaderJSSimple.js
fix_dns sea134/BookReaderJSSimple.js
fix_dns sea137/BookReaderJSSimple.js
fix_dns sea139/BookReaderJSSimple.js
fix_dns sea140/BookReaderJSSimple.js
fix_dns sea141/BookReaderJSSimple.js
fix_dns sea143/BookReaderJSSimple.js
fix_dns sea144/BookReaderJSSimple.js
fix_dns sea145/BookReaderJSSimple.js
fix_dns sea146/BookReaderJSSimple.js
fix_dns sea147a/BookReaderJSSimple.js
fix_dns sea147b/BookReaderJSSimple.js
fix_dns sea148/BookReaderJSSimple.js
fix_dns sea149a/BookReaderJSSimple.js
fix_dns sea149b/BookReaderJSSimple.js
fix_dns sea150a/BookReaderJSSimple.js
fix_dns sea150b/BookReaderJSSimple.js
fix_dns sea151a/BookReaderJSSimple.js
fix_dns sea151b/BookReaderJSSimple.js
fix_dns sea153/BookReaderJSSimple.js
fix_dns sea154a/BookReaderJSSimple.js
fix_dns sea155/BookReaderJSSimple.js
fix_dns sea156/BookReaderJSSimple.js
fix_dns sea158/BookReaderJSSimple.js
fix_dns sea159/BookReaderJSSimple.js
fix_dns sea160/BookReaderJSSimple.js
fix_dns sea161/BookReaderJSSimple.js
fix_dns sea162a/BookReaderJSSimple.js
fix_dns sea162b/BookReaderJSSimple.js
fix_dns sea163/BookReaderJSSimple.js
fix_dns sea165/BookReaderJSSimple.js
fix_dns sea168/BookReaderJSSimple.js
fix_dns sea169/BookReaderJSSimple.js
fix_dns sea172a/BookReaderJSSimple.js
fix_dns sea172b/BookReaderJSSimple.js
fix_dns sea174/BookReaderJSSimple.js
fix_dns sea175/BookReaderJSSimple.js
fix_dns sea176/BookReaderJSSimple.js
fix_dns sea179/BookReaderJSSimple.js
fix_dns sea180/BookReaderJSSimple.js
fix_dns sea181/BookReaderJSSimple.js
fix_dns sea182/BookReaderJSSimple.js
fix_dns sea183/BookReaderJSSimple.js
fix_dns sea184/BookReaderJSSimple.js
fix_dns sea185/BookReaderJSSimple.js
fix_dns sea186/BookReaderJSSimple.js
fix_dns sea187/BookReaderJSSimple.js
fix_dns sea188/BookReaderJSSimple.js
fix_dns sea189/BookReaderJSSimple.js
fix_dns sea190/BookReaderJSSimple.js
fix_dns sea191/BookReaderJSSimple.js
fix_dns sea192/BookReaderJSSimple.js
fix_dns sea193/BookReaderJSSimple.js
fix_dns sea194/BookReaderJSSimple.js
fix_dns sea195/BookReaderJSSimple.js
fix_dns sea196/BookReaderJSSimple.js
fix_dns sea197/BookReaderJSSimple.js
fix_dns sea198/BookReaderJSSimple.js
fix_dns sea199/BookReaderJSSimple.js
fix_dns sea200/BookReaderJSSimple.js
fix_dns sea201/BookReaderJSSimple.js
fix_dns sea202/BookReaderJSSimple.js
fix_dns sea204/BookReaderJSSimple.js
fix_dns sea205/BookReaderJSSimple.js
fix_dns sea206/BookReaderJSSimple.js
fix_dns sea207/BookReaderJSSimple.js
fix_dns sea208/BookReaderJSSimple.js
fix_dns sea209/BookReaderJSSimple.js
fix_dns sea210/BookReaderJSSimple.js
fix_dns sea211/BookReaderJSSimple.js
fix_dns sea212/BookReaderJSSimple.js
fix_dns sea214a/BookReaderJSSimple.js
fix_dns sea214b/BookReaderJSSimple.js
fix_dns sea214c/BookReaderJSSimple.js
fix_dns sea215/BookReaderJSSimple.js
fix_dns sea216/BookReaderJSSimple.js
fix_dns sea217/BookReaderJSSimple.js
fix_dns sea218/BookReaderJSSimple.js
fix_dns sea219/BookReaderJSSimple.js
fix_dns sea220/BookReaderJSSimple.js
fix_dns sea221/BookReaderJSSimple.js
fix_dns sea222/BookReaderJSSimple.js
fix_dns sea223/BookReaderJSSimple.js
fix_dns sea224/BookReaderJSSimple.js
fix_dns sea225/BookReaderJSSimple.js
fix_dns sea227a/BookReaderJSSimple.js
fix_dns sea227b/BookReaderJSSimple.js
fix_dns sea229/BookReaderJSSimple.js
fix_dns sea230/BookReaderJSSimple.js
fix_dns sea231/BookReaderJSSimple.js
fix_dns sea232/BookReaderJSSimple.js
fix_dns sea233/BookReaderJSSimple.js
fix_dns sea235/BookReaderJSSimple.js
fix_dns sea237/BookReaderJSSimple.js
fix_dns sea238/BookReaderJSSimple.js
fix_dns sea239/BookReaderJSSimple.js
fix_dns sea240/BookReaderJSSimple.js
fix_dns sea241/BookReaderJSSimple.js
fix_dns sea242/BookReaderJSSimple.js
fix_dns sea243/BookReaderJSSimple.js
fix_dns sea244/BookReaderJSSimple.js
fix_dns sea245/BookReaderJSSimple.js
fix_dns sea246/BookReaderJSSimple.js
fix_dns sea247/BookReaderJSSimple.js
fix_dns sea248/BookReaderJSSimple.js
fix_dns sea249/BookReaderJSSimple.js
fix_dns sea250/BookReaderJSSimple.js
fix_dns sea251/BookReaderJSSimple.js
fix_dns sea252a/BookReaderJSSimple.js
fix_dns sea252b/BookReaderJSSimple.js
fix_dns sea253/BookReaderJSSimple.js
fix_dns sea254/BookReaderJSSimple.js
fix_dns sea255/BookReaderJSSimple.js
fix_dns sea256/BookReaderJSSimple.js
fix_dns sea257a/BookReaderJSSimple.js
fix_dns sea257b/BookReaderJSSimple.js
fix_dns sea258/BookReaderJSSimple.js
fix_dns sea259/BookReaderJSSimple.js
fix_dns sea260/BookReaderJSSimple.js
fix_dns sea261/BookReaderJSSimple.js
fix_dns sea262a/BookReaderJSSimple.js
fix_dns sea262b/BookReaderJSSimple.js
fix_dns sea263a/BookReaderJSSimple.js
fix_dns sea263b/BookReaderJSSimple.js
fix_dns sea263c/BookReaderJSSimple.js
fix_dns sea264/BookReaderJSSimple.js
fix_dns sea265/BookReaderJSSimple.js
fix_dns sea266/BookReaderJSSimple.js
fix_dns sea267/BookReaderJSSimple.js
fix_dns sea268/BookReaderJSSimple.js
fix_dns sea270/BookReaderJSSimple.js
fix_dns sea271a/BookReaderJSSimple.js
fix_dns sea271b/BookReaderJSSimple.js
fix_dns sea272/BookReaderJSSimple.js
fix_dns sea273/BookReaderJSSimple.js
fix_dns sea274a/BookReaderJSSimple.js
fix_dns sea274b/BookReaderJSSimple.js
fix_dns sea275a/BookReaderJSSimple.js
fix_dns sea275b/BookReaderJSSimple.js
fix_dns sea276/BookReaderJSSimple.js
fix_dns sea277/BookReaderJSSimple.js
fix_dns sea278/BookReaderJSSimple.js
fix_dns sea279/BookReaderJSSimple.js
fix_dns sea280/BookReaderJSSimple.js
fix_dns sea281/BookReaderJSSimple.js
fix_dns sea282/BookReaderJSSimple.js
fix_dns sea283/BookReaderJSSimple.js
fix_dns sea284/BookReaderJSSimple.js
fix_dns sea285/BookReaderJSSimple.js
fix_dns sea287/BookReaderJSSimple.js
fix_dns sea288/BookReaderJSSimple.js
fix_dns sea289/BookReaderJSSimple.js
fix_dns sea290/BookReaderJSSimple.js
fix_dns sea291/BookReaderJSSimple.js
fix_dns sea292/BookReaderJSSimple.js
fix_dns sea293/BookReaderJSSimple.js
fix_dns sea294/BookReaderJSSimple.js
fix_dns sea295/BookReaderJSSimple.js
fix_dns sea296/BookReaderJSSimple.js
fix_dns sea297/BookReaderJSSimple.js
fix_dns sea298/BookReaderJSSimple.js
fix_dns sea299/BookReaderJSSimple.js
fix_dns sea300/BookReaderJSSimple.js
fix_dns sea301/BookReaderJSSimple.js
fix_dns sea302/BookReaderJSSimple.js
fix_dns sea303/BookReaderJSSimple.js
fix_dns sea304/BookReaderJSSimple.js
fix_dns sea305/BookReaderJSSimple.js
fix_dns sea306/BookReaderJSSimple.js
fix_dns sea307/BookReaderJSSimple.js
fix_dns sea308/BookReaderJSSimple.js
fix_dns sea309/BookReaderJSSimple.js
fix_dns sea310/BookReaderJSSimple.js
fix_dns sea311/BookReaderJSSimple.js
fix_dns sea312/BookReaderJSSimple.js
fix_dns sea313/BookReaderJSSimple.js
fix_dns sea314/BookReaderJSSimple.js
fix_dns sea316/BookReaderJSSimple.js
fix_dns sea317/BookReaderJSSimple.js
fix_dns sea318/BookReaderJSSimple.js
fix_dns sea319/BookReaderJSSimple.js
fix_dns sea320a/BookReaderJSSimple.js
fix_dns sea320b/BookReaderJSSimple.js
fix_dns sea321/BookReaderJSSimple.js
fix_dns sea322/BookReaderJSSimple.js
fix_dns sea323/BookReaderJSSimple.js
fix_dns sea324/BookReaderJSSimple.js
fix_dns sea325a/BookReaderJSSimple.js
fix_dns sea325b/BookReaderJSSimple.js
fix_dns sea326/BookReaderJSSimple.js
fix_dns sea327/BookReaderJSSimple.js
fix_dns sea328/BookReaderJSSimple.js
fix_dns sea329a/BookReaderJSSimple.js
fix_dns sea329b/BookReaderJSSimple.js
fix_dns sea331/BookReaderJSSimple.js
fix_dns sea332/BookReaderJSSimple.js
fix_dns sea333/BookReaderJSSimple.js
fix_dns sea334/BookReaderJSSimple.js
fix_dns sea335/BookReaderJSSimple.js
fix_dns sea337/BookReaderJSSimple.js
fix_dns sea338/BookReaderJSSimple.js
fix_dns sea340/BookReaderJSSimple.js
fix_dns sea341/BookReaderJSSimple.js
fix_dns sea342/BookReaderJSSimple.js
fix_dns sea343/BookReaderJSSimple.js
fix_dns sea344/BookReaderJSSimple.js
fix_dns sea345/BookReaderJSSimple.js
fix_dns sea346/BookReaderJSSimple.js
fix_dns sea348a/BookReaderJSSimple.js
fix_dns sea348b/BookReaderJSSimple.js
fix_dns sea349/BookReaderJSSimple.js
fix_dns sea350a/BookReaderJSSimple.js
fix_dns sea350b/BookReaderJSSimple.js
fix_dns sea351/BookReaderJSSimple.js
fix_dns sea352/BookReaderJSSimple.js
fix_dns sea353/BookReaderJSSimple.js
fix_dns sea354/BookReaderJSSimple.js
fix_dns sea355a/BookReaderJSSimple.js
fix_dns sea355b/BookReaderJSSimple.js
fix_dns sea356/BookReaderJSSimple.js
fix_dns sea357a/BookReaderJSSimple.js
fix_dns sea357b/BookReaderJSSimple.js
fix_dns sea358/BookReaderJSSimple.js
fix_dns sea359/BookReaderJSSimple.js
fix_dns sea360/BookReaderJSSimple.js
fix_dns sea362/BookReaderJSSimple.js
fix_dns sea363/BookReaderJSSimple.js
fix_dns seaA01/BookReaderJSSimple.js
fix_dns seaA02/BookReaderJSSimple.js
fix_dns seaA03/BookReaderJSSimple.js
fix_dns seaA04/BookReaderJSSimple.js
fix_dns seaA05/BookReaderJSSimple.js
fix_dns seaA06/BookReaderJSSimple.js
fix_dns seaA07/BookReaderJSSimple.js
fix_dns seaA08/BookReaderJSSimple.js
fix_dns seaA09/BookReaderJSSimple.js
fix_dns seaA10/BookReaderJSSimple.js
fix_dns seaA11/BookReaderJSSimple.js
fix_dns seaA12/BookReaderJSSimple.js
fix_dns seaA13a/BookReaderJSSimple.js
fix_dns seaA13b/BookReaderJSSimple.js
fix_dns seaA14/BookReaderJSSimple.js
fix_dns seaA15/BookReaderJSSimple.js
fix_dns seaA16a/BookReaderJSSimple.js
fix_dns seaA16b/BookReaderJSSimple.js
fix_dns seaA17/BookReaderJSSimple.js
fix_dns seaA18/BookReaderJSSimple.js
fix_dns seaA19a/BookReaderJSSimple.js
fix_dns seaA19b/BookReaderJSSimple.js
fix_dns seaA20/BookReaderJSSimple.js
fix_dns seaA21/BookReaderJSSimple.js
fix_dns seaA22/BookReaderJSSimple.js
fix_dns seaA23/BookReaderJSSimple.js
fix_dns seaA24/BookReaderJSSimple.js
fix_dns seaA25/BookReaderJSSimple.js
fix_dns seaA26/BookReaderJSSimple.js
fix_dns seaA27/BookReaderJSSimple.js
fix_dns seaA28/BookReaderJSSimple.js
fix_dns seaA29a/BookReaderJSSimple.js
fix_dns seaA29b/BookReaderJSSimple.js
fix_dns seaA29c/BookReaderJSSimple.js