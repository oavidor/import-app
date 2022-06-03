<?php
 header("Access-Control-Allow-Origin: *");
 require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/server/httpRequestsHandler.php"; //todo-ortal change path
 require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/server/jsonService.php"; //todo-ortal change path


//  $params = !empty($_REQUEST['params']) ? $_REQUEST['params'] : null; //todo-ortal check with es6 and add function for parsing params
 $jsonService = new JsonService();
 $httpRequestsHandler = new HttpRequestsHandler( $jsonService, null);
 $httpRequestsHandler->handleRequest();