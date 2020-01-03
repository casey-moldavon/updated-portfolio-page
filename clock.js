    
    //------------------------- THE CLOCK!!!!! -------------------------
    function displayTime(){
        var mydate = new Date();
        var year = mydate.getFullYear();
            if(year < 1000){
                year += 1900
            }
            var day = mydate.getDay();
            var month = mydate.getMonth();
            var daym = mydate.getDate();

            var dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
            var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var date = dayArray[day] + " " + daym + " " + monthArray[month] + " " + year //string display of complete date

            var myClock = document.getElementById("time-display");
            myClock.textContent = "" + date
            myClock.innerText = "" + date


            // ~~~~~~~~~~~~~~~~~~~~~~~~~ Winter ~~~~~~~~~~~~~~~~~~~~~~~~~
            if (monthArray[month] === "January" ||
            monthArray[month] === "February" ||
            monthArray[month] === "March")
            {
                $("body").css("background-image", "url(assets/images/winter-background-2.jpg)");
                $(".container-non-materialize").css("background-color", "white");
                $(".container-non-materialize").css("color", "#285570");
                $(".container-non-materialize").css("border", "solid white");
                $(".container-non-materialize").css("box-shadow", "0px 0px 25px 0px white");

                $("#container-time-planner").css("background-color", "white");
                $("#container-time-planner").css("color", "#285570");
                $("#container-time-planner").css("border", "solid white");
                $("#container-time-planner").css("box-shadow", "0px 0px 25px 0px white");

                $("#profile-image").css("box-shadow", "0px 0px 20px 0px #285570");

                $(".link").css("background-color", "white");
                $(".link").css("color", "#285570");
                $(".link").css("border", "solid white");
                $(".link").css("box-shadow", "0px 0px 25px 0px white");

                $(".carousel").css("margin-top", "-70px");
                $(".carousel").css("width", "100%");
            }


            // ~~~~~~~~~~~~~~~~~~~~~~~~~ Spring ~~~~~~~~~~~~~~~~~~~~~~~~~
            // if (monthArray[month] === "March") {"Spring"}
            // if (monthArray[month] === "April") {"Spring"}
            // if (monthArray[month] === "May") {"Spring"}


            // ~~~~~~~~~~~~~~~~~~~~~~~~~ Summer ~~~~~~~~~~~~~~~~~~~~~~~~~
            if (monthArray[month] === "June" ||
            monthArray[month] === "July" ||
            monthArray[month] === "August")
            {
                $("body").css("background-image", "url(assets/images/summer-background-5.jpg)");
                $(".container-non-materialize").css("background-color", "#67e2f9");
                $(".container-non-materialize").css("color", "#dd2a64");
                $(".container-non-materialize").css("border", "solid #67e2f9");
                $(".container-non-materialize").css("box-shadow", "0px 0px 25px 0px #ffde43");

                $("#container-time-planner").css("background-color", "#67e2f9");
                $("#container-time-planner").css("color", "#dd2a64");
                $("#container-time-planner").css("border", "solid #67e2f9");
                $("#container-time-planner").css("box-shadow", "0px 0px 25px 0px #ffde43");

                $("#profile-image").css("box-shadow", "0px 0px 20px 0px #ffde43");

                $(".link").css("background-color", "black");
                $(".link").css("color", "#dd2a64");
                $(".link").css("border", "solid black");
                $(".link").css("box-shadow", "0px 0px 25px 0px #ffde43");

                $(".carousel").css("margin-top", "-70px");
                $(".carousel").css("width", "100%");

                $(".link:hover").css("background-color", "#dd2a64")
                $(".link:hover").css("color", "black")
                $(".link:hover").css("border", "solid #dd2a64")
            }


            // ~~~~~~~~~~~~~~~~~~~~~~~~~ Fall ~~~~~~~~~~~~~~~~~~~~~~~~~
            // if (monthArray[month] === "September") {"Fall"}
            // if (monthArray[month] === "October") {"Fall"}
            // if (monthArray[month] === "November") {"Fall"}


            setTimeout("displayTime()", 1000);
    }

    //calling the clock function so that it continuously updates the display on-screen
    displayTime();

    