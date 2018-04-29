

function datetimecore1OnUpdate(Sender)
{     


    var time = new Date();
      var fullText="IR: ";
     fullText += time.getHours()+2;
     fullText +=":";
     fullText += time.getMinutes()+30;
     text2.Text = fullText; 
     
     
     if (time.getHours() == 16 ){
        //alert("https://www.youtube.com/softwaretalks");
     }
           
}




/// slide daily
/////////////////////////////////////////////////////////////////////////////
function btn_dailyOnClick(Sender)
{
    slide_daily.Slided = !slide_daily.Slided;
  slidepanel2.Slided = true;
  slide_note.Slided = true;  
}


function widgetOnLoad()
{

  memo_monday.Text = Getinivalue(widgetpath+"Config.ini","daily","monday","def text");
  memo_tuesday.Text = Getinivalue(widgetpath+"Config.ini","daily","tuesday","def text");
  memo_wednesday.Text = Getinivalue(widgetpath+"Config.ini","daily","wednesday","def text");
  memo_thursday.Text = Getinivalue(widgetpath+"Config.ini","daily","thursday","def text");
  memo_friday.Text = Getinivalue(widgetpath+"Config.ini","daily","friday","def text");
  memo_saturday.Text = Getinivalue(widgetpath+"Config.ini","daily","saturday","def text");
  memo_sunday.Text = Getinivalue(widgetpath+"Config.ini","daily","sunday","def text");


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
       memo_sunday.bringToFront();
  } 
  
  
    memo_note.Text = Getinivalue(widgetpath+"Config.ini","notes","note","def text");
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
  slide_daily.Slided = true;
  slidepanel2.Slided = !slidepanel2.Slided;
  slide_note.Slided = true;  
}




/// slide daily
/////////////////////////////////////////////////////////////////////////////

function btn_noteOnClick(Sender)
{
  slide_daily.Slided = true;
  slidepanel2.Slided = true;
  slide_note.Slided = !slide_note.Slided;  
}



function memo_noteOnKeyUp(Sender,Key,KeyChar,Shift)
{
    Setinivalue(widgetpath+"Config.ini","notes","note",memo_note.Text);
}