function lovecalculator(name){
    if (name === 'btnlove'){
        function getRandInt(max){
            return Math.floor(Math.random()*max)
        }
        let lovepercent = getRandInt(101)
        let name1 = document.getElementById("Name1").value;
        let name2 = document.getElementById('Name2').value;
        document.querySelector('h1').innerHTML = name1+" подходит к "+name2+" на "+lovepercent+"% "
    }
}
function calculateBmi() {
    let weight = document.bmiForm.weight.value
    let height = document.bmiForm.height.value
    if(weight > 0 && height > 0){
        let finalBmi = Math.round(weight/(height/100*height/100))
        document.bmiForm.bmi.value = finalBmi
        if(finalBmi <= 18.5){
            document.bmiForm.meaning.value = "У вас недостаточный вес."
            }else if(finalBmi <= 25){
                document.bmiForm.meaning.value = "У вас все нормально."
                }else if(finalBmi <= 30){
                    document.bmiForm.meaning.value = "У вас излишек веса."
                    }else if(finalBmi > 30){
                        document.bmiForm.meaning.value = "У вас ожирение"
                    }
    }
    else{
        alert("Пожалуйста, заполните ИМТ калькулятор полностью")
    }
}
function visokos(){
    var year = document.yearForm.year.value
    var leap
    if (year%400==0){ leap = true}
    else if (year % 100 == 0) leap = false
    else if (year % 4 == 0) leap = true
    else leap = false
    document.yearForm.resultyear.value = year+' год - '+(leap? '' : "не")+ " високосный"
}
function WhoPays(){
    var textg = document.dinnerForm.guests.value
    function chislogostey(text) {
        return text.split(" ").length        
    }
    function GetRand(max) {
        return Math.floor(Math.random()*max)
    }
    textg.split(" ")
    var i = chislogostey(textg)
    document.dinnerForm.resultdinner.value = textg.split(" ")[GetRand(i)]
}