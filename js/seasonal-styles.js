$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        //make the season lower case
        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("html").css("background-color","#2B7129");
                $(".heading").text("Spring means new things!")
                break;

            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("html").css("background-color","#EBA52B");
                $(".heading").text("Jump into Summer!")
                break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("html").css("background-color","#A81124");
                $(".heading").text("Fall into Autumn!")
                break;

            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("html").css("background-color","#005393");
                $(".heading").text("Bundle up for Winter!")
                break;
            
            default:
                $("#logo").attr("src","images/four-seasons.gif");
                $("#wear").attr("src","images/300x400.png");
                $("html").css("background-color","#ccc");
                $(".heading").text("Outfitter for All Seasons!")
        }
    });

    $('#dateForm').submit(function(e){//handle form submission event
        e.preventDefault();//stop default submission
        var datetext = $('input[name=dateField]').val();//grab data from textbox
        var formDate = new Date(datetext);//create a date from form input
        var today = new Date();
        
        if(formDate > today)
        {
            alert(datetext + " is in the future!");
        }else{
            alert(datetext + " is in the past!");
        }
    });
});

