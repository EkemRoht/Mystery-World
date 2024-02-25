<script>
    import { Human } from "./human.js"; // Путь до файла human.js

    // Создаём новый экземпляр класса Human
    let john = new Human('John', 1);

    // Пусть John выполнит действия
    john.act('punchWithLeft', 'EnemyName');
    john.act('kickWithRight', 'Alien');
    john.act('bite', 'Zombie');
/*
    // Результаты должны быть выведены в консоль следующим образом:
    // John executes punch with left arm with Left Arm to EnemyName!
    // John executes kick with right leg with Right Leg to Alien!
    // John executes bite with Head to Zombie!
    // John executes hug with Torso to Friend!

    // Проверяем действие с отключенной частью тела
    john.bodyParts.leftArm.status = 'disabled';
    john.act('punchWithLeft', 'EnemyName'); // Вызывает сообщение "The body part for action "punchWithLeft" is disabled",
    john.bodyParts.leftArm.status = 'fine'; // Включаем обратно

    // Проверяем действие, которого не существует
    john.act('unknownAction', 'EnemyName'); // Вызывает сообщение "Action "unknownAction" is not available"*/
</script>