<?php
    require_once 'controller.php';

    $action = $_GET['action'];

    // Use page Index

    if($action == 'UsePage_Index'){
        controller::UsePage('Index.php');
    }

    // Use page A propos

    if($action == 'UsePage_A_propos'){
        controller::UsePage('A_propos.php');
    }

    // Use page Contenu A propos
    if($action == 'UsePage_Contenu_A_Propos'){
        controller::UsePage('Contenu_A_propos.php');
    }

    // Use page Contact
    if($action == 'UsePage_Contact'){
        controller::UsePage('Contact.php');
    }

    // Use page Carte
    if($action == 'UsePage_Carte'){
        controller::UsePage('Carte.php');
    }

?>