<?php
    session_start();
    ?>
    <html>
    <head>
    <title>Pieslēgties</title>
    </head>
    <body>
    <h2>Pieslēgties</h2>
    <form action="testreg.php" method="post">

 <p>
    <label>Lietotājvārds:<br></label>
    <input name="login" type="text" size="15" maxlength="15">
    </p>
 
    <p>

    <label>Parole:<br></label>
    <input name="password" type="password" size="15" maxlength="15">
    </p>

    <p>
    <input type="submit" name="submit" value="Ienākt">

<br>
<a href="reg.php">Reģistrēties</a> 
    </p></form>
    <br>
    <?php
    if (empty($_SESSION['login']) or empty($_SESSION['id']))
    {
    echo "Jūs esat pieslēdzies kā viesis <br><a href='#'>Šī saite ir tikai pieejama reģistrētiem lietotājiem</a>";
    }
    else
    {
    echo "Jūs esat pieslēdzies kā lietotājs ".$_SESSION['login']."<br><a  href='http://localhost:5000/index2.html'>Pāriet uz galveno lapu</a>";
    }
    ?>
    </body>
    </html>