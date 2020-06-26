# 網頁設計期末學習筆記
----
### 前言
網頁設計到底應該如何做，才會是一個好的網頁?<br>別林斯基說過一句富有哲理的話，好的書籍是最貴重的珍寶。這啟發了我， 每個人都不得不面對這些問題。在面對這種問題時， 西班牙曾經提到過，自己的鞋子，自己知道緊在哪裡，這似乎解答了我的疑惑，要怎麼做出一個好的網頁，我認為只能多看，多聽，多學才可以做出大家喜歡的樣子，莎士比亞曾經提到過，拋棄時間的人，時間也拋棄他。所以我們必須在有限的時間內努力的學習，在遇到不懂的語法，只要抓住了問題的關鍵，其他問題則會迎刃而解。
### 在哪練習?
平常老師出給我們的作業都可以有效的幫助我們熟悉語法，所以在以下作業中可以做到相當雜實的一個練習。

* <a href="https://github.com/xiaotsai/wp108b/tree/master/homework/css1">css1</a> <a href="https://github.com/xiaotsai/wp108b/tree/master/homework/css2">css2</a>
* <a href="https://github.com/xiaotsai/wp108b/blob/master/homework/form/form.html">form練習</a>
* <a href="https://github.com/xiaotsai/wp108b/tree/master/homework/personalPage">個人首頁，結合了先前的練習所製作出的第一個小網頁。</a><br>
* <a href="https://github.com/xiaotsai/wp108b/tree/master/homework3">這裡面有著JS的基本練習</a>
* <a href="https://github.com/xiaotsai/wp108b/tree/master/hw5">更進階的JS練習</a>
* <a href="https://github.com/xiaotsai/wp108b/tree/master/hw6">困難的JS練習</a>
* <a href="https://github.com/xiaotsai/wp108b/tree/master/mid">從個人首頁的概念上做出修改，以及新增更多後來學習到的功能</a>
### 學習筆記
```
超簡短介紹 :

<html>
<body>

...		body裡面的東西是visible part

</body>
</html>


<h1> ... </h1>	標題1
<h2> ... </h2>	標題2

<p> ... </p>	段落

<a href="https://youtube.com">YouTube</a>	超連結

<img src="網址" alt="alternative text" width="寬度" height="高度">	放圖片的指令


<hr>	horizontal rule   加入一條橫直線  例如

<h1> ... </h1>
<hr>
<p> ... </p>
			這樣中間就會多一條橫線分隔

<br>	line break	強制換行

<pre> ... </pre>	preformatted text	印出來的字排版會完全跟你打的一模一樣



詳細介紹 :

STYLE
可以在某指令開頭放進去:
<h1 style="color: blue;"> ... </h1>	這個標題顏色就變藍色了

style裡面可以改 color, font-family, font-size, text-align, background-color



FORMATTING
在想要重點強調某字的兩邊放上指令
<p>This is a <mark>Important</mark> text.</p>	Important這個字就會被螢光起來

format有這些
<b>  bold		<strong>  important	<i>  Italic
<em>  emphasized	<mark>  螢光標記	<small>
<del>  刪節號在字上面	<ins>  inserted
<sub>  下標		<sup>  上標

但有些其實差不多效果  像b, strong 都是變粗   i, em 都是變斜體字


QUOTATION
如果要打" "符號  可以用<q>指令
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

就變成 "Build a future whre people live in harmony with nature."

quote還有這些
<blockquote>  被框起來的文字會有自己的區塊顯示
<blockquote cite="網址">  來源

<abbr>  縮寫  <abbr title="What the Fuck">WTF</abbr> 就會顯示WTF 滑鼠移過去會顯示What the Fuck

<address>  地址  就是寫地址的時候放在裡面的  地址會呈現有點斜體 不同字型的樣子 裡面可以加<br>換行

<cite>  文字會變斜線 字型會變 感覺跟format更改有一點不一樣  通常是給一件作品名稱特別標註

<bdo>  讓文字改變方向的東西  後面會加dir="rtl"  就是right to left的意思
<bdo dir="rtl">Right to left</bdo> 就會顯示成 tfel ot thgiR


CSS
<style>  一次編輯某個內容
<head>
<style>
h1 {
  font-family:...;
  font-size:...;
  color: #ffffff;
  border: 1px solid black;  加框線 粗度 實線 顏色 dashed是虛線
  padding: 10px;  框線內跟框線的距離
  margin: 10px;  框線外跟其他東西的距離
}
</style>
</head>

CSS也可以設定id
<p id="p01"> ... </p>  這段落的ID就是p01  且ID不能重複
style裡面也可以直接設定其內容
<style>
#p01 {
  color: blue;
}

CSS設定class(類別)
<p class="one"> ... </p>
<p class="one"> ... </p>
這兩段的類別就會是class 要一起設定也比較方便

p.one {
  color:red;
}


LINKS
target  打開此連結的方式
<a href="https://youtube.com" target="_blank">YouTube</a>

_blank	從新分頁打開
_self	從現在的頁面直接傳送過去
_parent	也是從現在也面直接傳過去  但不同的是它是直接移動整個 跟self有點不同
_top	在現在這個開啟頁面
				//其實不太清楚parent, top這兩個有啥差別 執行效果感覺都一樣

在圖片裡面放連結
<a href="https://youtube.com" target="_blank"><img src="圖片來源(網址)" alt="..." style="..."></a>

按鈕裡面放連結
<button onclick="document.location = 'https://youtube.com'">YouTube</button>

可以在字上面加入連結說明 (title)
<a href="https://youtube.com" title="前往YouTube首頁">YouTube</a>
	滑鼠移過去YouTube上就會顯示提示字

連結可更改style  unvisited, visited, hover, active這四種狀況
<style>
a:link {	網址未拜訪最初始看過去的樣子
  color:green;
  text-decoration:none;		網址去除底線
}
a:visited {	已拜訪
  color:red;
  text-decoration:none;
}
a:hover {	滑鼠放上去的狀態
  color:black;
}
a:active {	點下去那一刻
  color:blue;
  text-decoration:underline;
}
</style>


設定頁面背景圖片(在<style>裡面做)
body{
        background-image:url(...);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
```

js則是在老師的<a href="https://misavo.com/blog/%E9%99%B3%E9%8D%BE%E8%AA%A0/%E6%9B%B8%E7%B1%8D/JavaScript">網站</a>做課後的複習。

### 感想
這學期的遠距離教學，我覺得有好有壞，其中之一是因為在課後不理解時，可以繼續觀看老師的直播紀錄來複習，但是壞處是會有點懶，這也是後來克服的一點，即使對網頁設計沒有太大的興趣，但是跟著老師的腳步，一步一步來，可以做出一個網頁還是非常有成就感的