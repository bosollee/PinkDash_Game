var walkSpeed:float=100.0;
var gravity:float=20.0;
var jumpSpeed:float=6.0;

public var Jump:AnimationClip;
public var die:AnimationClip;

private var _animation:Animation;
private var velocity:Vector3;

function Start()
{
	animation.Play("Run");
}

function Update()
{
	var controller:CharacterController=GetComponent(CharacterController);
	
	if(controller.isGrounded)
	{
		velocity=Vector3(Input.GetAxis("Vertical")*3, 0, Input.GetAxis("Horizontal")*3);
		velocity*=walkSpeed;
		
		if(Input.GetButtonDown("Jump"))
		{
			velocity.y=jumpSpeed;
			animation.Play("Jump");
		}
		else if(velocity.magnitude>0.5)
		{	
		animation.CrossFade("Run");
		transform.LookAt(transform.position+Vector3.right);
		}
	}
	else
	{
	}

	velocity.y-=gravity*Time.deltaTime;
	controller.Move(velocity*Time.deltaTime);
}

