#pragma strict



/*function OnTriggerEnter(other:Collider)
{
	if(other.tag=="Player")
	{
	Debug.Log("ehlfkrhekdafjak");
	other.gameObject.SendMessage("CatchCoin",1);
	yield WaitForSeconds(1.0);
	Destroy(gameObject);
	}
}
*/


function OnTriggerEnter()
{
	Debug.Log("z");
	var player:GameObject=GameObject.FindWithTag("Player");
	player.animation.Play("Die");
	yield WaitForSeconds(3.0);
	Destroy(gameObject);
}