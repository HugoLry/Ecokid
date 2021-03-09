<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1.0, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../global.css">
    <link rel="icon" type="image/png" href="../../ressources/lif/lifndroite.png" />
    <title>Ecokid</title>
</head>

<body>
    <?php
    $link = new PDO('mysql:host=localhost;dbname=ecokid', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    // pour le serveur de l'UPEM, remplacer localhost par sqletud.u-pem.fr

    // Si les valeurs ne sons pas écrit ou si email et message sont pas nuls
    if(isset($_POST["prenom"], $_POST["age"])){

    // Attributions des valeurs
    $prenom = $_POST["prenom"];
    $age = $_POST["age"];

    // On dit se que l'on veut mettre dans la BDD
    $sql = "INSERT INTO user(prenom, age) VALUES (:prenom,:age)";

    // On prépare la requête avant l'envoi
    $req = $link->prepare($sql);
    $req->execute(array(":prenom" => $prenom, ":age" => $age,));
    }
    ?>
    
    <video muted autoplay loop src="../../ressources/accueil.webm" type="video/webm"
        poster="../../ressources/accueil.jpg" id="accueil"></video>
    <img id="logo" src="../../ressources/logo.png" alt="">

    <div id="avertissement">
        <p>Attention, ce site n'est visible qu'en mode paysage !</p>
        <img class="turn" src="../../ressources/turntel.png" alt="">
    </div>


    <form method="POST" action="" class="formulaire">
        <img src="../../ressources/nuagePresentation.png" alt="" class="nuage">
        <h1>Quel est ton prénom ?</h1>
        <label for="prenom"></label>
        <input type="text" name="prenom" id="prenom" required>

        <h2>Quel âge as-tu ?</h2>
        <label for="age"></label>
        <input type="text" name="age" id="age" required>

        <div>
            <button type="submit" class="button">
            <a href="../presentation_lif/presentation_lif.php" class="lien">
                Commencer à jouer
            </a>
            </button>
        </div>
    </form>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="script.js"></script>
</body>

</html>