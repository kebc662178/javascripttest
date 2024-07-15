//基本資料型別&變數

//字串
"你好嗎"
var phrase = "hello Mr.White";
document.write(phrase+"<br/>");
//字串長度
document.write(phrase.length);
document.write("<br/>");
//字串變成大寫
document.write(phrase.toUpperCase());
document.write("<br/>");
//字串變成小寫
document.write(phrase.toLowerCase());
document.write("<br/>");
//回傳指定字串字元
document.write(phrase.charAt(1));
document.write("<br/>");
//回傳指定字串字元位置
document.write(phrase.indexOf("h"));
document.write("<br/>");
//回傳指定字串區間內容
document.write(phrase.substring(0,5));
document.write("<br/>");

//數字(先乘除後加減，括號先做)
123456
document.write(1+1);
document.write("<br/>");
document.write(1-1);
document.write("<br/>");
document.write(1*2);
document.write("<br/>");
document.write(2/1);
document.write("<br/>");
//%是取餘數
document.write(8%5);
document.write("<br/>");

document.write(-10000);
document.write("<br/>");
document.write(0.45646846);
document.write("<br/>");

//Math.abs() 數字取絕對值後回傳
var number = -114946;
document.write(Math.abs(number));
document.write("<br/>");

//取最大值最小值
document.write(Math.max(3,8,100,998,751,5,36,51,894594));
document.write("<br/>");
document.write(Math.min(3,8,100,998,751,5,36,51,894594));
document.write("<br/>");

//把數字4捨5入回傳
document.write(Math.round(2.5));
document.write("<br/>");

//數字平方
document.write(Math.pow(2,3));
document.write("<br/>");;

//數字開√
document.write(Math.sqrt(64));
document.write("<br/>");;

//回傳0-1區間中隨機一個數
document.write(Math.random());
document.write("<br/>");;
//回傳0-10區間中隨機一個數(隨機0-1取完*10,變成個位數再四捨五入)
document.write(Math.round(Math.random()*10));
document.write("<br/>");

//陣列 array
var scores =[80,60,20,30,50];
var firiends=["小黑","小黃","小綠","小白"];
document.write(scores);

document.write("<hr/>");

document.write(firiends);
document.write("<hr/>");

scores[0]=20;
document.write(scores[0]);
document.write("<hr/>");
document.write(firiends.length);
document.write("<hr/>");

//布林值
true
false

//變數
//只能是大小寫英文或是數字或是$或是_的組合
//開頭不能是數字
var my_name="小白";
var age =87;
var is_male=true;

document.write(my_name);
document.write(is_male);

document.write("<br/>");
document.write("我房間有狗");
document.write("<br/>");
document.write("他今年5個月大");
document.write("<br/>");
document.write("他是我弟養的狗");
document.write("<br/>");
document.write("我想我絕對不適合養狗");
document.write("<br/>");


//函式Function
//▼這個函式需要傳入一個資料到name這個變數中
function hello(name,age){
    document.write("你好"+name+"你今年"+age+"歲");
}
hello("我的媽媽咪呀","82");
document.write("<br/>");

function add(num1,num2){
    //document.write(num1+num2);

    //意思是會覆蓋掉原本的add(20,100) 變成120
    //在複雜的計算可能不只一次印出 故須回傳給它繼續做運算 
    //碰到return會直接跳出函式,不會繼續執行其他程式碼
    return num1+num2;
}


document.write("<hr/>");
document.write(add(20,100));


//  ==等於  &&且  ||或  !不等於 

function max_num(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else{
        return c;
    }    
        

}

document.write("<br/>");
document.write(max_num(70,80,65));
document.write("<br/>");

//物件 object

//  key   value
//  鍵      值

// person變數 等同於一個物件 
//key   有    name1,age,is_male
//value 有     小白, 23, true
var person ={
    name1:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name1);
    }

}

person.print_name();
document.write("<br/>");

//取得物件內的東西要加一個點 person.(key)
document.write(person.age);
document.write("<br/>");

//真實世界物件

 
var movie ={
    title:" 刻在你心裡的名子",
    marker:"氣氛電影",
    duration:114,
    actors:[
        {
            namef:"小賴",
            age:24,
            is_male:true
        },
        {
            namef:"小君",
            age:23,
            is_male:true
        }
    ]

};

//因actors這個物件是陣列，所以要用[]，因為內容用物件表達故要再使用.namef
document.write(movie.actors[0].namef);
document.write("<br/>");
document.write(movie.actors[1].namef);
document.write("<br/>");

//while迴圈

var i=1;
while(i<=3){
    document.write(i);
    document.write("<br/>");
    i+=1;
}

var a=1;
// 先做do再來判斷while有沒有成立
do{
    document.write(a);
    document.write("<br/>");
    a+=1;
}while(a<=3)

//For迴圈

var firiends =["小白","小黑","小綠","小紅","小青","小紫","小黃"];

for(var i=0; i<firiends.length; i++)
{
    document.write(firiends[i]);
}
document.write("<br/>");


//二為陣列、巢狀迴圈
var number =  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
];

//第0位陣列中第一個陣列的第0位
document.write(number[0][0]);
document.write("<br/>");

//i起始從0開始 等到結束才會+1 故一開始為i0j0
for(var i=0;i<4;i++){
    for(var j=0;j<3;j++)
    {
        document.write("i"+i+"j"+j);
        document.write("<br/>");
    }
}

for(var i=0;i<number.length;i++){
    for(var j=0;j<number[i].length;j++)
    {
        document.write(number[i][j]);
    }
    document.write("<br/>");
}

//class

//先創建一個模板
//通常模板名稱英文都是大寫開頭
class Phone{
    //一開始會寫constructor初始函式 :把我們傳入的值賦予給實體的物件
    constructor(number,year,is_waterproof){
        this.number = number;
        this.yesr =year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2024 - this.year; 
    }
}

//()就是傳入我們物件(Phone)的屬性
var phone1 = new Phone("IPHONE16 256G",2020,false);
var phone1 = new Phone("IPHONE13 256G",2021,false);


document.write(phone1.number);
document.write("<br/>");



//如何取得html元素

//document.write()是window底下的屬性 變數那些也都是
//因為windows是全域物件 所以不用特別寫
window.document.write("哈哈哈哈")

//getElementById("Headers")抓取id為Headers裡的內容
var h1=document.getElementById("header");

var link = document.getElementById("link");
console.log(link);

//更換內容
h1.innerText="我這不就來了嗎";

h1.style.backgroundColor="yellow";
h1.style.color="black";

link.href="https://dictionary.cambridge.org/zht/translate/";



//將內容顯示在主控台上(用於除錯)
// console.log(h1);

//event listener 事件監聽器
//element就是接收到傳過來的東西
// function handle_click(element){
//     //alert("我才草尼媽!!");
//     //console.log(element);
//     element.innerText = "有叫你按嗎??";
//     element.style.color="red";
// }

//addEventListener("事件","觸發事件後要做的事")監聽
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    //alert("我才草尼媽!!");
    this.innerText="有叫你按嗎??";
    this.style.color="red";
})

//mouseover滑鼠滑過
var picture =document.getElementById("picture");
picture.addEventListener("mouseover",function(){
    this.src="下載.jpeg";
})

//mouseover滑鼠滑出
var picture =document.getElementById("picture");
picture.addEventListener("mouseout",function(){
    this.src="下載.png";
})
