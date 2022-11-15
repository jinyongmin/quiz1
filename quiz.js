let arr = [];
let arr1 = [];
let vacant;

arr[0]  ='고양이는?';
arr[1]  ='강아지는?';
arr[2]  ='고래는?';
arr[3]  ='상어는?';
arr[4]  ='사자는?';
arr[5]  ='고등어는?';
arr[6]  ='호랑이는?';
arr[7]  ='낙지는?';
arr[8]  ='원숭이는?';
arr[9]  ='오랑우탄은?';
arr[10] ='참치는?';
arr[11] ='방어는?';
arr[12] ='돼지는?';
arr[13] ='말은?';
arr[14] ='낙타는?';
arr[15] ='캥거루는?';
arr[16] ='바다표범은?';
arr[17] ='물개는?';
arr[18] ='수달은?';
arr[19] ='소는?';

arr1 =['육지', '육지', '해양', '해양', '육지', '해양', '육지', '해양', '육지', '육지', '해양', '해양', '육지', '육지', '육지', '육지', '해양', '해양', '해양', '육지'];

while(true){
    let choose = 0;
    let rd;
    function quiz(){
    rd =Math.floor(Math.random()*20);
    vacant = prompt(arr1[rd]);
    if(arr1[rd] == temp){
        choose++;
        alert('정답!');
    }else{
        alert('오답!');
    }
    if(choose ==3){
        alert('성공!');
    }else{
        alert('실패!');
    }
    setTimeout(quiz,3000);
}
}
