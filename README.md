# KrakenGrupo13
Criterios de revisión

# 1. Funcionalidades bajo pruebas:

| Id | Nombre |
| ------ | ------- |
| 1 | Posts|
| 2 |Pages|
| 3 |Your Profile|
| 4 |Tags|
| 5 |Member|
| 6 |Ajustes|
| 7 |Posts > published|
| 8 |Posts > scheduled|

# 2. Escenarios de prueba.


| Id | Nombre | Escenarios |
| ------ | ------- |---------|
| 1. | Posts| Crear un nuevo post|
| 2.  |      |Editar un post publicado previamente|
| 3. || Crear un post agendado para ser publicado en el futuro|
| 4. |Posts > scheduled|Hacer unpublish de un post agendado |
| 5. |Posts > published|Eliminar un post publicado|
| 6. |Pages|Crear una nueva pagina|
| 7. ||Agendar la creación de una nueva pagina|
| 8. ||Eliminar una pagina|
| 9. ||Hacer unschedule de una pagina agendada|
| 10 .||Hacer unpublish de una pagina publicada|
| 11. |Your Profile|Modificar mi contraseña de perfil|
| 12. ||Modificar mis datos de perfil|
| 13. |Tags|Crear un tag|
| 14. ||Actualizar un tag
| 15. ||Eliminar un tag
| 16. |Member|Actualizar a  un member
| 17. ||Crear un member y comprobar que si lo guardo|
| 18. ||Borrar un member|
| 19. |Ajustes|Modificar el color de la aplicacion|
| 20. ||Modificar el titulo de la aplicacion|



# 3. Pros y contras

## Kraken
### Pros:
1. Fácil codificación de los casos de prueba.
2. Excelente acoplamiento con el uso de etiquetas XPath
3. Excelente interpretación con el uso de lenguaje gherkin
4. Muy buena integración con javaScript.
### Contras:
1. Escasa documentación
2. No permite multiples archivos feature corriendo a la vez en sistemas Widnows
3. El tiempo de ejecución es mayor dada la apertura de diferentes instancias del navegador por cada caso de prueba

# 4. Pasos de ejecución
## Versiones:
### NodeJs:

![imagen](https://user-images.githubusercontent.com/111519973/201498160-4c9e1f44-d639-4b88-bbff-a028f8b66b39.png)

### Ghost:

![imagen](https://user-images.githubusercontent.com/111519973/201498178-353198c6-ce73-4c19-aa5e-538996d086ce.png)


### Pasos:
1. Descargar el repositorio actualizado desde : [Repositorio con pruebas](https://github.com/CamiloAndresGTRUniandes/KrakenGrupo13.git)
2. para la instalación de kraken:
[Tutorial de instalación Kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0)
3. Para la instalación de Ghost:
4. Guardar los datos de acceso a Ghost(email y contraseña) en el archivo features/web/step_definitions/pages_object/userData.js, quedando el archivo como se puede observar en la siguiente imágen:
![imagen](https://user-images.githubusercontent.com/111519973/201498497-fabcac73-eb4f-4fae-b499-a01054931f30.png)

5. Los archivos .feature con los casos de prueba se encuentran en la ruta features/web/scripts, para ejecutar los casos de prueba se debe mover el archivo feature deseado a la altura de la carpeta feature, como se observa en la siguiente imágen:
![imagen](https://user-images.githubusercontent.com/111519973/201498386-3c31b4ef-e79c-4e33-9a89-1aae51b3a4bb.png)

6. Para ejecutar los casos de prueba se debe correr el siguiente comando en la ruta raiz 
 ### npx kraken-node run
 ![imagen](https://user-images.githubusercontent.com/111519973/201498608-b5650098-56fe-4b8c-82a1-b4b78bdd3432.png)

7. Dentro de la ruta \reports, es posible acceder a los reportes de ejecución de los casos de prueba.

8. Las rutas a los documentos con las estrategias de pruebas actualizadas son:

   a.  [Estrategia 1](https://uniandes-my.sharepoint.com/:b:/g/personal/c_guevarat_uniandes_edu_co/ERT-COBT4vdLpjGATIuMeNkBocFtiasAeRVKXIBpybhXpg?e=GDabaw)
   
   b.  [Estrategia 2](https://uniandes-my.sharepoint.com/:b:/g/personal/c_guevarat_uniandes_edu_co/EVJ5O73YYIlKrXtciCnl80kBH8T3qWeyHSi9EavqQfcLXQ?e=uJ7KUA)
   
