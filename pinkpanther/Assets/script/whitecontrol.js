#pragma strict
var velocity:float=8.0;
var moveDelay:float=1.0;
var sustainTime:float=3.0;

public var white:AnimationClip;

function Start()
{
	yield WaitForSeconds(moveDelay);
	
	var player:GameObject=GameObject.FindWithTag("Player");
	var controller:CharacterController=GetComponent(CharacterController);
	animation.Play("White");
	if(player!=null)
	{
		var direction:Vector3=(player.transform.position-transform.position).normalized;
		rigidbody.AddForce(direction*velocity, ForceMode.VelocityChange);
	}

	yield WaitForSeconds(sustainTime);
}



function OnTriggerEnter()
{
	Debug.Log("z");
	var player:GameObject=GameObject.FindWithTag("Player");
	player.animation.Play("Die");
	yield WaitForSeconds(sustainTime);
	Destroy(player.gameObject);
}