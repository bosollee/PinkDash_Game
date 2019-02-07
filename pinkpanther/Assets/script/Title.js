#pragma strict
var labelStyle:GUIStyle;

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Jump"))
	{
			Application.LoadLevel("pinkpanther");
	}
}
