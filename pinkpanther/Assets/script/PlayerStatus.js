#pragma strict

private var life : int = 100;
public var score :  int = 0;

function CatchCoin(amount : int)
{
	score += amount;
}

function ApplyDamage(amount : int)
{
	life -= amount;
	if(life <= 0)
	{
		animation.Play("Die");
		yield WaitForSeconds(3.0);
		Destroy(transform.gameObject);
	}
}

function OnGUI()
{
	var rect : Rect = Rect(0,0,Screen.width, Screen.height);
	GUI.Label(rect, "LIFE: "+life.ToString()+ "/SCORE: "+score.ToString());
}


function Start () {

}
