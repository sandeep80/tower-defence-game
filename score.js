var myCards = [
    {
        "card1": {
            "type": "attack",
            "id": "1",
            "red": "6",
            "blue": "0",
            "green": "4",
            "attack": "5",

            "image": "images/card1.png"
        },
        "card2": {
            "type": "build",
            "id": "2",
            "red": "8",
            "blue": "5",
            "green": "5",
            "attack": "8",
            "build":"10",
            "image": "images/card2.png"
        },
        "card3": {
            "type": "resource",
            "id": "3",
            "red": "10",
            "blue": "0",
            "green": "0",
            "attack": "12",
            "image": "images/card3.png"
        }
    }
];

var attack;
var cal_health_tower;
var r40_50 = false;
var r30_40 = false;
var r20_30 = false;
var r10_20 = false;
var card_type;
var red, blue, green;
var build;
var calRed, calBlue, calGreen;
var d10_20 = false;
var d20_30 = false;
var d30_40 = false;
var d40_50 = false;
var cards_present = [0, 1, 2];
var item;
var user_turn = true;
var comp_turn = false;
var user_click = true;
//var comp_click = false;
    $(document).ready(function () {
    var red_val = 50;
    var blue_val = 50; // for blue
    var green_val = 50; // for green
    var tower_health = 50;
    var tower_increase=0;

    $('#red_score').text(red_val);
    $('#blue_score').text(blue_val);
    $('#green_score').text(green_val);
    $('#tower_health').text(tower_health);
    $('#tower_increase').text(tower_increase);



    //$('.cards').on('click', card_click);
    $(".cards").click(function(event) {
        card_click($(this), event);
    });

        if((user_turn==true) && (user_click==true) && (comp_turn==false))
        {
            console.log("User turn");
        }
});



function call_attack(this_obj, e){
    //console.log("in attack fn");
    //console.log($(this_obj).find('img').attr("data-val-type"));

    calRed = $('#red_score').text() - parseInt(red);
    cal_health_tower = $('#tower_health').text() - attack;
    //alert(cal_health_tower);
    //alert(attack);
    $('#tower_health').text(cal_health_tower);
    var calculated_th = $('#tower_health').text();

    //console.log(calRed);

    if( (parseInt(calRed)<0) ){
        e.preventDefault();
        alert("not enough resources in attack");

    }
    else{
        $("#red_score").text(calRed);
        $("#blue_score").text(calBlue);
//      $("#green_score").text(calGreen);
    }

    if (r40_50==false){
        if (between(calculated_th, 41 , 50)) {
            console.log("decrease height"+calculated_th);
        }
        else{
            console.log("top tower damaged");
            $('#tower_container2').find('#t_block_6').attr('src','images/right/Layer1.png');
            //decrease_tower_height();
            r40_50=true;
        }
    }
    if ((r30_40==false) && (r40_50==true))
    {
        if (between(calculated_th, 31, 40))
        {
            console.log("do nothing");
        }
        else{
            console.log("dec");
            $('#tower_container2').find('#t_block_6').hide();
             $('#tower_container2').find('#t_block_4').attr('src','images/right/Layer1.png');
            //decrease_tower_height();
            r30_40=true;
        }
    }

    if ((r20_30==false) && (r30_40==true) && (r40_50==true)){
        if (between(calculated_th, 21, 30)) {

            console.log("do nothing");
        }
        else{
            console.log("dec");
            $('#tower_container2').find('#t_block_4').hide();
            $('#tower_container2').find('#t_block_3').attr('src','images/right/Layer1.png');

            //decrease_tower_height();
            r20_30=true;
        }
    }

    if ((r10_20==false) && (r20_30==true) && (r30_40==true) && (r40_50==true)){
        if (between(calculated_th, 10, 20)) {
            console.log("do nothing");
        }
        else{
            console.log("dec");
            $('#tower_container2').find('#t_block_3').hide();
            $('#tower_container2').find('#t_block_2').attr('src','images/right/Layer1.png');

            //decrease_tower_height();
            r10_20=true;
        }
    }

}

function call_build(this_obj, e){
    console.log("in build fn");
    build = parseInt($('#tower_increase').text()) + parseInt(blue);
  $('#tower_increase').text(build);
    var tower_th= $('#tower_increase').text();

    if( (parseInt(build)>=41) ){
        e.preventDefault();
        alert("Not enough in build")
    }
    else
    {
//        $("#red_score").text(calRed);
       $("#blue_score").text(calBlue);
//        $("#green_score").text(calGreen);
    }

    if (d10_20==false){
        if (between(tower_th, 10 , 20)) {
             $('#tower_container1').find('#t_build_6').show();



//            $('#t_build_10').find("#t_build_10")
            $('#t_build_10').hide();
            d10_20=true;
        }

    }

    if (d20_30==false && (d10_20==true)){
        if (between(tower_th, 20 , 30)) {
            $('#tower_container1').find('#t_build_7','#t_build_10').show();

            d20_30=true;
        }

    }
    if (d30_40==false && (d20_30==true)){
        if (between(tower_th, 30 , 40)) {
            $('#tower_container1').find('#t_build_8','#t_build_10').show();
            d30_40=true;
        }
    }
    if (d40_50==false && (d30_40==true)){
        if (between(tower_th, 40 , 50)) {
            $('#tower_container1').find('#t_build_9').show();
            d40_50=true;
        }
    }
//    $('#tower_health').text(cal_health_tower);
//    var calculated_th = $('#tower_health').text();

}


function call_resource(){
    console.log("in resource fn");
}

function decrease_tower_height(){
    $('#tower_container2').animate({height: '-=50'}, 500);
}

function comp_play(){
//    console.log("computer playing");
//    var cards_present = [0, 1, 2];
//    var item = cards_present[Math.floor(Math.random()*cards_present.length)];
//    console.log(item);


 //console.log ("computer play"+$(".cards")[item].click(card_click($(".cards").find("img").attr("data-val-type"))));
//console.log("computer play"+$(".cards_slot").find("img").attr("data-val-type")(this_obj, event));

//console.log( "computer play"+$(".card_slot").find("img").attr("data-var-type"));
 }

function user_play()
{
console.log("click on card");
}

function between(x, min, max)
{
return x >= min && x <= max;
}

function card_click_old(this_card_index)
{
    //console.log("in card click");
    //console.log($($(".cards")[this_card_index]).attr('class'));
}

function card_click(this_obj, event){
    console.log("in card click");

    card_type = $(this_obj).find('img').attr("data-val-type");
    console.log("clicked card_type :- " + card_type);
    red = $(this_obj).find('img').attr("data-val-red");
    blue = $(this_obj).find('img').attr("data-val-blue");
    green = $(this_obj).find('img').attr("data-val-green");
    attack = $(this_obj).find('img').attr("data-val-attack");
    build=$(this_obj).find('img').attr("data-val-build");


    calBlue = $('#blue_score').text() - parseInt(blue);
    calGreen = $('#green_score').text() - parseInt(green);

    switch(card_type) {
        case "build":
            call_build($(this_obj), event);
            break;
        case "attack":
            call_attack($(this_obj), event);
            break;
        case "resource":
            call_resource();
            break;
        default:
            console.log("do nothing");
    }

    if((comp_turn==true) && (user_turn==false))
    {
     comp_auto();
    }

}
function comp_auto()
{
    item = cards_present[Math.floor(cards_present.length * Math.random())];
    //console.log(item);
    var random_card = $('.card_slot').find('.cards')[item];
    $($(random_card)).trigger("click");

}


