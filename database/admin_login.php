<?php
    session_start();
    include('bd2.php');
    if (isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = $connection->prepare("SELECT * FROM admin2 WHERE username=:username");
        $query->bindParam("username", $username, PDO::PARAM_STR);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);
        if (!$result) {
            echo '<p class="error">Ievadītā parole vai lietotājvārds ir nepareizs.</p>';
        } else {
                $_SESSION['user_id'] = $result['id'];
                echo '<p class="success">Jūs veiksmīgi pieslēdzāties! </p>';
                echo ('<form action="http://localhost:5000/administratora_lapa.html" method="GET"> <input type="submit" value="Administratora lapa"/> </form>');
        }
    }
?>
<form method="post" action="" name="signin-form">
  <div class="form-element">
    <label>Lietotājvārds</label>
    <input type="text" name="username" pattern="[a-zA-Z0-9]+" required />
  </div>
  <div class="form-element">
    <label>Parole</label>
    <input type="password" name="password" required />
  </div>
  <button type="submit" name="login" value="login">Ienākt</button>
</form>