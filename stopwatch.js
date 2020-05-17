var sec=0,min=0,hour=0;
var pre_sec=0,per_min=0,per_hr=0;
var checkstart=0;
function start() 
    {
        if(checkstart===0)
        {
            checkstart=1;
            document.getElementById("result").style.display="none"
            pre_sec=sec;
            per_min=min;
            per_hr=hour;
            hit = setInterval(()=> {
                if(sec<60){
                    sec++;
                    (sec<=9)?document.getElementById("sec").innerHTML="0"+sec:document.getElementById("sec").innerHTML=sec;
                }
                else{
                    if(sec==60){
                        sec=0;
                        document.getElementById("sec").innerHTML="00";
                        if(min<60)
                        {
                        min++;
                        (min<=9)?document.getElementById("min").innerHTML="0"+min:document.getElementById("min").innerHTML=min;
                        }
                        else
                        {
                            if(min==60)
                            {
                                min=0;
                                document.getElementById("min").innerHTML="00";
                                hour++;
                                (hour<=9)?document.getElementById("hr").innerHTML="0"+hour:document.getElementById("hr").innerHTML=hour;
                            }
                        }
                    }
                }
            },1000);
        }
        else
        { 
            document.getElementById("result").innerHTML="Stop Watch Aleady Started";
            document.getElementById("result").style.display="block";
        }
    }
function stop() 
    {
        if(checkstart===1)
        {
            checkstart=0;
            clearInterval(hit);
            var second=sec-pre_sec;  
            var minit=min-per_min;
            var ghonta=hour-per_hr;
            document.getElementById("result").innerHTML="Duration is = "+((ghonta<=9)?'0'+ghonta:ghonta)+" HOUR "+((minit<=9)?'0'+minit:minit)+" MINUTE "+((second<=9)?'0'+second:second)+" SECOND";
            document.getElementById("result").style.display="block";
        }
        else
        { 
            document.getElementById("result").innerHTML="Stop Watch is Not Started";
            document.getElementById("result").style.display="block";
        }
    }
function reset()
    {
        if(checkstart===0)
        {
            min=0;
            sec=0;
            hour=0;
            pre_sec=0;
            per_min=0;
            per_hr=0;
            var back= document.querySelectorAll(".timer")
            document.getElementById("result").style.display="none"
            back.forEach(a =>{a.innerHTML="00";});
        }
        else
        {
            document.getElementById("result").innerHTML="Stop Watch is Running";
            document.getElementById("result").style.display="block";
        }
    }