<?php
header("Access-Control-Allow-Origin: *");
//  require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/server/httpRequestsHandler.php"; //todo-ortal change path
//  require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/server/jsonService.php"; //todo-ortal change path
//  $requestMethod = $_SERVER['REQUEST_METHOD'];
//  $params = !empty($_REQUEST['params']) ? $_REQUEST['params'] : null; //todo-ortal check with es6 and add function for parsing params
//  $jsonService = new JsonService();
//  $httpRequestsHandler = new HttpRequestsHandler( $jsonService, null);
//  $httpRequestsHandler->handleRequest($requestMethod, $params);

// include_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/Request.php"
// include_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/Router.php"

// $router = new Router(new Request);

// $router->get('/popup/content', function($request) {
//   return <<<HTML
//   <h1>Profile</h1>
// HTML;
// });

// $router->post('/data', function($request) {

//   return json_encode($request->getBody());
// });