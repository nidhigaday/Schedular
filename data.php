<!DOCTYPE html>
<html lang="en">

<title> Schedule View </title>

<body>
<h1>
<?php 
$agentName = [$_POST["inputName"]];
for (i=0; i<=count($agentName); i++)
{
	echo $agentName[i];
}
?>
</h1>
</body>
</html>