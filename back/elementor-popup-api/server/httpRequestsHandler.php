<?php
require_once $_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/server/ajaxHandler.php"; //todo-ortal change path

class HttpRequestsHandler extends AjaxHandler{

    private $dataService;
    private $errorService;

    public function __construct($dataService, $errorService) { //todo-ortal move to set?
      parent::__construct();
      $this->dataService = $dataService; //todo-ortal add validation?
      $this->errorService = $errorService;
    }
                
    public function handleRequest() : void{ //todo-ortal change to protected?
        try{
            if (strtoupper($this->requestMethod) === "GET" || strtoupper($this->requestMethod) === 'POST') {

                 $responseData = $this->getData();
                //  if(!$responseData){ //todo-ortal add back
                //     throw new Exception('Unknown Error', 2001); 
                //  }
                 exit(json_encode(
                    array(
                        'status' => true,
                        'data' => $responseData
                    )
                ));
            } else {
                throw new Exception('Invalid Request', 2000); //todo-ortal change?                
            }
            
        }
        catch(Exception $e){ //todo-ortal change code
            $error = $this->getError($e);
            echo json_encode($error);
            exit;
        }
    }

    protected function setResponse(){

    }

    private function setErrorResponse(){

    }

    private function setSuccessResponse(){

    }

    private function getData(){ //todo-ortal send data source from outside
        if($this->dataService){
            $responseData = $this->dataService->getData($_SERVER['DOCUMENT_ROOT'] . "/elementor-popup/server\data\data.json");
            // return $responseData;
            return $this->params;
        }
        return null;
    }

    private function getError($e){
        return  array(
            'status' => false,
            'error' => $e -> getMessage(),
            'error_code' => $e -> getCode()
        );
    }


}
            //todo-ortal use error handler object
 //todo-ortal use data object / data service
            //todo-ortal what if it doesn't get params? overloading?
            //todo-ortal add endpoint name?
            //todo-ortal add code for validation $this->requestMethod and $params
// private function handleGetRequest(){

// }

// private function handlePostRequest(){

// }

// switch (strtoupper($this->requestMethod)) {
//     case "GET":
//         // code to be executed if n=label1;
//         break;
//     case "POST":
//         // code to be executed if n=label2;
//         break;
//     default:
       
// }

// protected function handleRequest(){
//     try { 
//         if ($_SERVER['REQUEST_METHOD'] !== "GET") {
//             throw new Exception('Invalid Request', 2000);
//         } else {
//             // status is true if everything is fine
//             exit(json_encode(
//                 array(
//                     'status' => true
//                 )
//             ));
//         }
    
    
//     } catch(Exception $e) {
        
//         echo json_encode(
//             array(
//                 'status' => false,
//                 'error' => $e -> getMessage(),
//                 'error_code' => $e -> getCode()
//             )
//         );
    
//         exit;
    
//     }
// }