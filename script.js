function datetimecore1OnUpdate(Sender)
{     
	var time = new Date();
	var fullText="IR: ";
	fullText += time.getHours()+2;
	fullText +=":";
	fullText += time.getMinutes()+30;
	text2.Text = fullText; 
	
	/*
	if (time.getHours() == 16 ){
	   alert("https://www.youtube.com/softwaretalks");
     }
     */
}




/// slide daily
/////////////////////////////////////////////////////////////////////////////
function btn_dailyOnClick(Sender)
{
	slide_daily.visible = true;

	slide_time.Slided = true;
	slide_note.Slided = true; 
	slide_routine.Slided = true;
	
	slide_daily.Slided = !slide_daily.Slided;
	slide_note.visible = false;
	slide_time.visible = false;
	slide_routine.visible = false;
}


function widgetOnLoad()
{

  memo_monday.Text = Getinivalue(widgetpath+"Config.ini","daily","monday","default text");
  memo_tuesday.Text = Getinivalue(widgetpath+"Config.ini","daily","tuesday","default text");
  memo_wednesday.Text = Getinivalue(widgetpath+"Config.ini","daily","wednesday","default text");
  memo_thursday.Text = Getinivalue(widgetpath+"Config.ini","daily","thursday","default text");
  memo_friday.Text = Getinivalue(widgetpath+"Config.ini","daily","friday","default text");
  memo_saturday.Text = Getinivalue(widgetpath+"Config.ini","daily","saturday","default text");
  memo_sunday.Text = Getinivalue(widgetpath+"Config.ini","daily","sunday","default text");


//it will find the current day for showing the appropriate memo_text
 var time = new Date();   
  switch(time.getDay()) {
    case 1:
         //monday
        memo_monday.bringToFront();         
        break;
    case 2:
        //tuesday
          memo_tuesday.bringToFront();
        break;
    case 3:
        //wednesday
          memo_wednesday.bringToFront();
        break;
    case 4:
        //thursday
          memo_thursday.bringToFront();
        break;
    case 5:
        //friday
          memo_friday.bringToFront();
        break;
    case 6:
        //saturday
          memo_saturday.bringToFront();
        break;
    case 7:
        //sunday
          memo_sunday.bringToFront();
        break;
    default:
       memo_monday.bringToFront();
       break;
  } 
  
  
    memo_note.Text = Getinivalue(widgetpath+"Config.ini","notes","note","default text");
    
    // any desired welcome/note at startup
    alert("Ciao amico");
}


//save data as entered
function memo_mondayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","monday",memo_monday.Text);
}

function memo_tuesdayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","tuesday",memo_tuesday.Text);
}

function memo_wednesdayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","wednesday",memo_wednesday.Text);
}

function memo_thursdayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","thursday",memo_thursday.Text);
}

function memo_fridayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","friday",memo_friday.Text);
}

function memo_saturdayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","saturday",memo_saturday.Text);
}

function memo_sundayOnKeyUp(Sender,Key,KeyChar,Shift)
{
  Setinivalue(widgetpath+"Config.ini","daily","sunday",memo_sunday.Text);
}



//show the notes of selected day
function btn_monOnClick(Sender)
{
  memo_monday.bringToFront();
}

function btn_TueOnClick(Sender)
{
  memo_tuesday.bringToFront();
}

function btn_wedOnClick(Sender)
{
 memo_wednesday.bringToFront();  
}

function btn_ThuOnClick(Sender)
{
  memo_thursday.bringToFront();
}

function btn_FriOnClick(Sender)
{
  memo_friday.bringToFront();
}

function btn_SatOnClick(Sender)
{
  memo_saturday.bringToFront();
}

function btn_SunOnClick(Sender)
{
  memo_sunday.bringToFront();
}




///slide time
////////////////////////////////
function btn_timeOnClick(Sender)
{
	slide_time.visible = true;

	slide_daily.Slided = true;
	slide_note.Slided = true;  
	slide_routine.Slided = true;
	
	slide_time.Slided = !slide_time.Slided;
	slide_daily.visible = false;
	slide_note.visible = false;
	slide_routine.visible = false;
}




/// slide note
/////////////////////////////////////////////////////////////////////////////
function btn_noteOnClick(Sender)
{
	//1. make visible current slide
	//2. slide the rest
	//3. hide them
	slide_note.visible = true;

	slide_daily.Slided = true;
	slide_time.Slided = true;
	slide_routine.Slided = true;
	
	slide_note.Slided = !slide_note.Slided;  
	slide_daily.visible = false;
	slide_time.visible = false;
	slide_routine.visible = false;
}



function memo_noteOnKeyUp(Sender,Key,KeyChar,Shift)
{
    Setinivalue(widgetpath+"Config.ini","notes","note",memo_note.Text);
}




/// slide goal
/////////////////////////////////////////////////////////////////////////////
function btn_goalOnClick(Sender)
{
  Open("C:\Sem4.mpp");
}




/// slide routine
/////////////////////////////////////////////////////////////////////////////
function btn_routineOnClick(Sender)
{
	slide_routine.visible = true;

	slide_daily.Slided = true;
	slide_time.Slided = true;
	slide_note.Slided = true;

	slide_routine.Slided = !slide_routine.Slided;
	slide_daily.visible = false;
	slide_time.visible = false;
	slide_note.visible = false;
}
