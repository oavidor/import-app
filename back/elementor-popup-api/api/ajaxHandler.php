<?php

abstract class AjaxHandler{ //todo-ortal make abstract and extends with middle class

    protected $requestMethod;
    protected $params;
    protected $contentType;
    protected $headers;
    protected $supportedHttpMethods;

    abstract protected function getSupportedHttpMethods();
    abstract protected function setResponse();
    abstract protected function setErrorResponse($error);

    public function __construct() 
    {
        $this->requestMethod  = $_SERVER['REQUEST_METHOD'];
        $this->supportedHttpMethods = $this->getSupportedHttpMethods();
        // $this->params = extract($_REQUEST); //todo-ortal handle params
    }

    
    protected function handleRequest() //todo-ortal make all abstreact?
    { 
        try{
            if ($this->validateRequestMethod()) {
                 exit($this->setResponse());
            } else {
                $this->invalidMethodHandler();
            }   
        }
        catch(Exception $exception){ //todo-ortal change code
            echo $this->setErrorResponse($exception);
            exit;
        }
    }

    private function validateRequestMethod()
    {
        return in_array($this->requestMethod, $this->supportedHttpMethods);
    }

    private function invalidMethodHandler()
    {
        throw new Exception('Method Not Allowed', 405);

    }
  
    private function defaultRequestHandler()
    {
        throw new Exception('Not Found', 404);
    }



}

//todo-ortal use namse space
//todo-ortal change name
