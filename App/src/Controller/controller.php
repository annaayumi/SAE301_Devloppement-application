<?php


class controller{

    public static function UsePage(string $Vue) : void {
        require dirname(__DIR__)."src/view/$Vue";// Charge la vue 
    }
     
}

?>