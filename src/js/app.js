import module1 from "./modules/module1";
import module2 from "./modules/module2";

//変数を定義します

var word1 = "This is";

var word2 = " a pen.";

//関数に変数を投入します

var returnedWord1 = module1(word1);

var returnedWord2 = module2(word2);

//結果をまとめて表示します

var addedWords = returnedWord1 + returnedWord2;

console.log(addedWords);
