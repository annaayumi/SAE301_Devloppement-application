<?php


class controller{

    public static function UsePage(string $Vue) : void {
        require __DIR__."/view/$Vue"; // Charge la vue
    }
     
}

?>