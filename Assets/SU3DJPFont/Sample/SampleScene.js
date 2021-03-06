//
// Selected U3D Japanese fonts  sample scene's script
//
// the script encoding is UTF-8 with BOM
//

var customSkin:GUISkin;

private var buttonW:int = 200;
private var buttonH:int = 48;
private var buttonT:int = 60;
public var Text3D : TextMesh;
public var Text3D2 : TextMesh;

function Start()
{
	//Text3D.text = "<color=#40E0D0><size=100>Lose</size></color>\nABCD\n가나다\n最初から始める\n~!@#$%^&*(*)(";
	Text3D.text = "ABCD\n가나다\n最初から始める\n~!@#$%^&*(*)(";
	Text3D2.text = "ABCD\n가나다\n最初から始める\n~!@#$%^&*(*)(";
}

// draw GUI text
function OnGUI()
{
	var x:int = ( Screen.width / 2 ) - buttonW / 2;
	var y:int = ( Screen.height - buttonT * 3 ) /2;

	GUI.skin = customSkin;
	/*
	// Jp
	// draw words "start at first"
	if(GUI.Button(Rect(x, y + buttonT  * 0 ,buttonW,buttonH),"最初から始める"))
	{
	}
	
	// draw word "continue"
	if(GUI.Button(Rect(x, y + buttonT  * 1 ,buttonW,buttonH),"続きから"))
	{
	}

	// draw word "setting"
	if(GUI.Button(Rect(x, y + buttonT  * 2 ,buttonW,buttonH),"環境設定"))
	{
	}
	*/
	
	
	// Kor
	// draw words "start at first"	
	if(GUI.Button(Rect(x, y + buttonT  * 0 ,buttonW,buttonH),"처음시작"))
	{
	}
	
	// draw word "continue"
	if(GUI.Button(Rect(x, y + buttonT  * 1 ,buttonW,buttonH),"계속하기"))
	{
	}

	// draw word "setting"
	if(GUI.Button(Rect(x, y + buttonT  * 2 ,buttonW,buttonH),"환경설정"))
	{
	}
	
}

// camera rotation
function Update () {

	transform.Rotate( 0,10.0 * Time.deltaTime,0 );
}
