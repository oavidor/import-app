<?php
require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/ajaxHandler.php"; //todo-ortal change path
require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/services/contentService.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/api/services/errorHandler.php";


class HttpRequestsHandler extends AjaxHandler{

    public function __construct() 
    {
      parent::__construct();
    }
                
    public function handleRequest() : void //todo-ortal change to protected?
    { 
        parent::handleRequest();
    }

    protected function setResponse()
    {
        $contentService = new ContentService();
        $responseData = $contentService->getContent();
        if(!$responseData){
            throw new Exception('Unknown Error', 2001);
        }
        return json_encode(array(
            'status' => true,
            'data' => $responseData
        ));
    }

    protected function setErrorResponse($error)
    {
        return json_encode(ErrorHandler::parseError($error)); //todo-ortal validate?
    }

    protected function getSupportedHttpMethods()
    {
        return array("GET","POST");
    }

}