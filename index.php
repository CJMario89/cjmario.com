<?php 
	session_start();
	if(!isset($_SESSION['username'])){
		$user = "Login";
	}else{
		$user = $_SESSION['username'];
	}
	require 'vendor/autoload.php';

	if(isset($_GET['page']) && !empty($_GET['page'])){
		$page =  $_GET['page'];
	}else{
		$page = "main";
	}
	include('header.php');
	switch ($page) {
		case 'main':
			include('main.php');
			break;
		case 'bodyweight_fitness':
			include('bodyweight_fitness.php');
			break;
			
		default:
			include('main.php');
			break;
	}
	include('footer.php');
?>
