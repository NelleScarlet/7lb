window.onload = function() {
    var eight = document.getElementById("mag");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("mag-ball");
       var question = document.getElementById("question",);
       
       eightball.addEventListener("click", function() {
        
         if (question.value.length < 1) {
           alert('Вкажіть будь ласка питання');
         } else {
           eight.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         }
       });
       var answers = ["Так","Це рішуче так", "Можеш бути впевнений в цьому", "Ніяких сумнівів", "Безперечно", "Імовірність мала але ...", "Так, але пізніше", "Спитайте у інших гадань", "Ні", "Точно ні", "На 90% так", "Звичайно!", "Куля - не іграшка", "Занадто рано","Хто знає?","Не робіть цього","Краще Вам поки цього не знати","Ви отримаєте бажане","Куля не знає"];
    }; 