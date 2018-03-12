function KeyDownEventHandler(event)
{
	if(event.keyCode == '38')//UpArrow
	{
		TranslateCamera(0,-0.5,0);
		return;
	}
	if(event.keyCode == '40')//DownArrow
	{
		TranslateCamera(0,0.5,0);
		return;
	}
	if(event.keyCode == '37')//LeftArrow
	{
		TranslateCamera(0.5,0,0);
		return;
	}
	if(event.keyCode == '39')//RightArrow
	{
		TranslateCamera(-0.5,0,0);
		return;
	}
	if(event.keyCode == '107')//add
	{
		TranslateCamera(0,0,0.5);
		return;
	}
	if(event.keyCode == '109')//subtract
	{	
		TranslateCamera(0,0,-0.5);
		return;
	}


	if(event.keyCode == '100')//NUM4
	{
		return;
	} 
	if(event.keyCode == '102')//NUM6
	{
		return;
	}
	if(event.keyCode == '98')//NUM2
	{
		return;
	}
	if(event.keyCode == '104')//NUM8
	{
		return;
	}
}

function FrameRenderCallback(Timestamp)
{
	RenderFrame();
	PhysicsRunStep(0.001);
	window.requestAnimationFrame(FrameRenderCallback);
}

function TimerCallback()
{
	PhysicsRunStep(0.0000001);
}

function Rand(MinValue,MaxValue)
{
	return Math.random() * (MinValue-MaxValue) + MaxValue;
}

function RandInt(MinValue,MaxValue)
{
	return Math.floor((Math.random() * (MinValue-MaxValue)+MaxValue));
}

//Entry
//TEEEEESTING
//PhysicsObjectCreate([X,Y,Z],Radius,Mass,[SpeedX,SpeedY,SpeedZ],[R,G,B]);

for(let i = 0; i < RandInt(400,500);i++)
{
	PhysicsObjectCreate([Rand(-40,40),Rand(-40,40),Rand(-40,40)],
	1,1,
	[Rand(-10,10),Rand(-10,10),Rand(-10,10)],
	[Rand(0,1),Rand(0,1),Rand(0,1)]);
}

for(let i = 0; i < RandInt(10,20);i++)
{
	PhysicsObjectCreate([Rand(-40,40),Rand(-40,40),Rand(-40,40)],
	3,1000,
	[Rand(-10,10),Rand(-10,10),Rand(-10,10)],
	[1,1,0]);
}

InitWebGl();

TranslateCamera(0,0,-100);

window.requestAnimationFrame(FrameRenderCallback);
document.addEventListener('keydown',KeyDownEventHandler);
//setTimeout(TimerCallback,33);
