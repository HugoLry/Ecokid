<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1.0, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../global.css">
    <link rel="icon" type="image/png" href="../../ressources/lif.png" />
    <title>Ecokid</title>
</head>

<body>
    <?php
    try{
    //On établit la connexion
    $link = new PDO('mysql:host=localhost;dbname=ecokid', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    // pour le serveur de l'UPEM, remplacer localhost par sqletud.u-pem.fr

    //On définit le mode d'erreur de PDO sur Exception
    $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    /*On capture les exceptions si une exception est lancée et on affiche
    les informations relatives à celle-ci*/
    catch(PDOException $e){
        echo "Erreur : " . $e->getMessage();
    }
    
    // On dit ce que l'on veut récupérer dans la BDD = dans la table fiche_metier je veux tout (* signifie tout) récupérer
    $sql = "SELECT prenom FROM user ORDER BY id DESC LIMIT 1";
    // On prépare la requête avant l'envoi
    $req = $link -> prepare($sql);
    // On exécute la requête
    $req -> execute();

    while ($data = $req -> fetch()) {
        $prenom = $data['prenom'];
    ?>
    
    <img id="logo" src="../../ressources/logo.png" alt="">

    <div id="avertissement">
        <p>Attention, ce site n'est visible qu'en mode paysage !</p>
        <img class="turn" src="../../ressources/turntel.png" alt="">
    </div>
    <img class="transition-in" src="../../ressources/transition-nuage.png" alt="">
    <img src="../../ressources/Accueil3.png" alt="" class="background">
    <img src="../../ressources/lif/lifngauche.png" alt="" class="lif">
    <div class="texte">
        <img src="../../ressources/nuagePresentationLIF.png" alt="" class="nuage">
        <p><?php echo "Salut $prenom ! Moi c’est Lif aide nous à guérrir ce monde";}?></p>
    </div>
    <div class="button">
        <a href="../" class="lien">
            Commencer à jouer
        </a>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="script.js"></script>
    
</body>

</html>