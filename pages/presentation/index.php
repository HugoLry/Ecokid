<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1.0, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../styles/global.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="../../ressources/icon.png" />
    <link rel="stylesheet" media="(orientation:portrait)" href="../../styles/portrait.css">
    <title>Ecokid</title>
</head>

<body>
    <?php
    $db = new PDO('mysql:host=localhost:3306;dbname=ecokid', 'ecokid', 'MAUYjH^7');

    if (isset($_POST['user'])) {
        $sql = "INSERT INTO user(age, date_post) VALUES ({$_POST['age']}, NOW())";
        $req = $db->prepare($sql);
        $req->execute();
        header('Location: ../introduction/');
    }
    ?>

    <div class="portrait">
        <div class="portrait_img">
            <img src="../../ressources/icon.png" alt="">
            <img src="../../ressources/turntel.png" alt="">
        </div>
        <p>Ecokid n’est pas disponible dans ce format, tourne ton écran pour jouer !</p>
    </div>

    <div class="main">
        <img class="transition" src="../../ressources/transition-nuage.png" alt="">
        <video muted autoplay loop src="../../ressources/accueil/accueil.webm" type="video/webm" poster="../../ressources/accueil/accueil.jpg" id="accueil"></video>
        <img id="logo" src="../../ressources/logo.png" alt="">

        <form method="post" action="" class="formulaire">
            <label for="prenom">
                <h1>Quel est ton prénom ?</h1>
            </label>
            <input type="text" name="prenom" id="prenom" autocomplete="off" required>
            <label for="age">
                <h2>Quel âge as-tu ?</h2>
            </label>
            <input type="text" maxlength="2" name="age" id="age" pattern="[0-9]{1,2}" autocomplete="off" required>
            <input type="submit" name="user" class="lien begin" value="Commencer à jouer">
        </form>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="script.js"></script>
    <script src="../../scripts/global.js"></script>
</body>

</html>