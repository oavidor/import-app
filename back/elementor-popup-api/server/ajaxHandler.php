<?php

abstract class AjaxHandler{

    protected $requestMethod;
    protected $params;
    protected $contentType;
    protected $headers;

    public function __construct() 
    {
        $this->requestMethod = $_SERVER['REQUEST_METHOD'];
        // $this->params = extract($_REQUEST); //todo-ortal handle params
    }

    abstract protected function handleRequest();

}



//todo-ortal make static? $params
    // abstract protected function setResponse() : string;
        //todo-ortal use overloading or builder