#pragma strict

private var cleared : boolean;
var labelStyle : GUIStyle;

function Start () 
{
	cleared = false;
	Debug.Log("Start!");
}

function Update () {

}

function OnTriggerEnter (other:Collider)
{
	if(other.gameObject.tag == "Player")
	{
		cleared = true;
		
		yield WaitForSeconds(3.0);
		Application.LoadLevel("Title");
	}
}