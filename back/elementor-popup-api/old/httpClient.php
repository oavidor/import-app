<?php
abstract class HttpClient
{
    private $url;

    abstract protected function get(); //todo-ortal add type?
    abstract protected function buildRequst();
    abstract protected function setHeaders();
    abstract protected function setContent();
    abstract protected function setParams();
    abstract protected function setResponse();
    //add success and error

    //todo-ortal change names and change name to httpRequestsHandler

    // abstract protected function post(); //todo-ortal remove

    // // Common method
    // public function printOut() {
    //     print $this->getValue() . "\n";
    // }
}