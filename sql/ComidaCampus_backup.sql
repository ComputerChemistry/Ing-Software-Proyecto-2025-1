-- MySQL dump 10.13  Distrib 8.0.37, for Linux (x86_64)
--
-- Host: localhost    Database: ComidaCampus
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Facultades`
--

DROP TABLE IF EXISTS `Facultades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Facultades` (
  `id_facultad` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `localizacion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_facultad`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Facultades`
--

LOCK TABLES `Facultades` WRITE;
/*!40000 ALTER TABLE `Facultades` DISABLE KEYS */;
INSERT INTO `Facultades` VALUES (1,'Facultad Interdisciplinaria de Ciencias Biologicas de Salud','Facultad enfocada en areas de biologia y salud',NULL),(2,'Facultad Interdisciplinaria de Ciencias Economicas y Administrativas','Facultad que cubre economia, administracion y areas afines',NULL),(3,'Facultad Interdisciplinaria de Ciencias Exactas y Naturales','Facultad dedicada a ciencias exactas y naturales',NULL),(4,'Facultad Interdisciplinaria de Ingenieria','Facultad que cubre varias areas de la ingenieria',NULL),(5,'Facultad Interdisciplinaria de Ciencias Sociales','Facultad que abarca areas de ciencias sociales',NULL),(6,'Facultad Interdisciplinaria de Humanidades y Artes','Facultad dedicada a las humanidades y artes',NULL);
/*!40000 ALTER TABLE `Facultades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Menus`
--

DROP TABLE IF EXISTS `Menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Menus` (
  `id_menu` int NOT NULL AUTO_INCREMENT,
  `id_tiendita` int DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_menu`),
  KEY `id_tiendita` (`id_tiendita`),
  CONSTRAINT `Menus_ibfk_1` FOREIGN KEY (`id_tiendita`) REFERENCES `Tienditas` (`id_tiendita`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Menus`
--

LOCK TABLES `Menus` WRITE;
/*!40000 ALTER TABLE `Menus` DISABLE KEYS */;
INSERT INTO `Menus` VALUES (1,1,'Huevo/Homelet','Huevo Preparado al gusto o Tipo Homelet',55.00),(2,1,'Hot Cakes','Hot Cakes preparados con miel o fruta',50.00),(3,1,'Banderillas','Salchicha cubierta de pan se pueden agregar distintos aderezos',40.00),(4,1,'Palomitas con Pollo','Pollo empanizado en porciones chicas',55.00),(5,1,'Chimichangas','Plato a base de tortilla de harina frita rellena',60.00),(6,1,'Chilaquiles','Totopos mezclados con salsa caliente con algunos toppings',60.00),(7,1,'Tacos Dorados','Tortillas dobladas y fritas con algún relleno',55.00),(8,1,'Tostadas','Tortilla tostada con algún acompañamiento arriba',60.00),(9,1,'Molletes','Pan birote cortado con una base de frijoles y carne también queso',50.00),(10,1,'Torta de Jamón','Pan tipo telera con jamón, mayonesa, tomate y lechuga',40.00),(11,1,'Torta de Pierna','Torta con carne de pierna, mayonesa, lechuga, queso y tomate',55.00),(12,1,'Torta de Barbacoa','Torta con carne tipo Barbacoa',60.00),(13,1,'Pechuga a la plancha','Carne de Pollo de tipo Pechuga cocinada a la plancha',65.00),(14,1,'Paquetes de burritos','Burritos de Machaca o Carne con Chile',50.00),(15,1,'Pizza Pan','Pan Birote o Telera a la Mitad Cubierto con Salsa para Pizza y Queso con Peperoni',50.00),(16,1,'Maruchan','Sopa Instantanea en diversas varidades',30.00),(17,1,'Quesadilla Sincronizada','Queso, queso tipo americano y jamon en tortilla de harina',60.00),(18,1,'Quesadilla de carne','Queso, queso tipo americano y carne en tortilla de harina',60.00),(19,1,'Quesadilla de boneless','Queso, queso tipo americano y boneless/pollo en tortilla de harina',60.00),(20,1,'Sandwich de Jamon','Pan con Jamon, Mayonesa, Tomate, Lechuga y Queso',35.00),(21,1,'Sandwich de Pollo','Pan con Pollo, Mayonesa, Tomate, Lechuga y Queso',55.00),(22,1,'Ensalada de Pollo Chica','Ensalada de verduras con pollo,  frituras o crutones, Mayonesa',85.00),(23,1,'Ensalada de Pollo Mediana','Ensala de Verduras con Pollo Frituras/Crutones Mediana',95.00),(24,1,'Ensalada de Boneless Chica','Ensalada de Verduras con Boneless/Pollo Empanizado',105.00),(25,1,'Ensalda de Boneless Mediana','Ensalada de Verduras con Boneless/Pollo Empanizado Mediana',115.00),(26,1,'Orden de Boneless','Orden de Boneless/Pollo Empanizado con salsa o aderezo al gusto',100.00),(27,1,'Papa Boneless','Boneless con papas aderezos y salsa',75.00),(28,1,'Hemburguesa','Hamburguesa con carne alguna carne de res/pollo/boneles tomate, lechuga y queso americano',85.00),(29,1,'Orden de papas a la francesa','Papas fritas con sal',40.00),(30,1,'Orden de papa sazonadas','Papas sazonadas con sal y chile',50.00),(31,1,'Salchipapa','Papas con trozos de salchica y aderezos que acopanan',60.00),(32,1,'Oniguiris','Variedad de Oniguiris Pollo/Res/Camaron con arroz',75.00),(33,2,'Huevo','Huevo preparado al gusto',40.00),(34,2,'Orden de Palomitas','Palomitas de pollo empanizado',100.00),(35,2,'Tortas','Tortas surtidas con diversos ingredientes',100.00),(36,2,'Ensaladas','Ensaladas variadas con pollo o boneless',100.00),(37,2,'Hamburguesas','Hamburguesa de pollo, res o boneless',50.00),(38,2,'Omelette de Pollo','Omelette relleno de pollo',40.00),(39,2,'Omelette de Jamón','Omelette relleno de jamón',30.00),(40,2,'Chimichangas de Pierna','Chimichanga rellena de carne de pierna',50.00),(41,2,'Chimichangas de Boneless','Chimichanga rellena de boneless',60.00),(42,2,'Quesadillas Mini de Cabeza','Quesadilla pequeña con carne de cabeza',60.00),(43,2,'Quesadillas Mini de Jamón','Quesadilla pequeña con jamón',30.00),(44,2,'Ensalada de Pollo Chica','Porción chica de ensalada con pollo',70.00),(45,2,'Ensalada de Pollo Mediana','Porción mediana de ensalada con pollo',90.00),(46,2,'Hamburguesa Sencilla','Hamburguesa sencilla con ingredientes básicos',80.00),(47,2,'Hamburguesa de Pollo','Hamburguesa con pechuga de pollo',80.00),(48,2,'Hamburguesa de Boneless','Hamburguesa con boneless',100.00),(49,2,'Tacos Dorados','Tacos dorados con relleno al gusto',60.00),(50,2,'Hot Cakes de Barbacoa','Hot cakes rellenos de barbacoa',60.00),(51,2,'Hot Cakes con Boneless','Hot cakes acompañados con boneless',60.00),(52,2,'Boneless Chicas','Orden chica de boneless',100.00),(53,2,'Boneless Medianas','Orden mediana de boneless',120.00),(54,2,'Papas a la Francesa','Orden de papas fritas tradicionales',40.00),(55,2,'Papas Sazonadas','Papas con condimento especial y chile',50.00),(56,2,'Papas con Carne Asada','Papas acompañadas con carne asada',70.00),(57,2,'Banderillas','Salchicha empanizada en palillo',30.00),(58,2,'Pollo a la Plancha','Pechuga de pollo cocinada a la plancha',80.00),(59,2,'Molletes','Pan con frijol y queso gratinado',45.00),(60,2,'Tostadas','Tostadas variadas con carne o pollo',70.00),(61,2,'Alitas','Alitas de pollo con aderezo',80.00),(62,2,'Chilaquiles','Totopos con salsa, crema y queso',70.00),(63,2,'Pizza Pan','Pan estilo pizza con salsa, queso y toppings',45.00),(64,2,'Salchipapas','Papas con salchicha y aderezos',70.00),(65,2,'Papa Boneless','Papas con boneless y aderezos',80.00),(66,2,'Sandwich de Jamón','Sandwich con jamón, queso, lechuga y mayonesa',35.00),(67,2,'Sandwich de Pollo','Sandwich con pollo, lechuga y aderezo',70.00),(68,2,'Momias','Salchicha envuelta en masa o tortilla',60.00),(69,2,'Burritos de Carne con Chile','Burritos rellenos de carne con chile',80.00),(70,2,'Maruchan','Sopa instantánea',25.00),(71,2,'Onigiris','Bolas de arroz rellenas de pollo, res o camarón',80.00),(72,3,'Wafle','Wafle esponjoso, servido con miel o fruta.',40.00),(73,3,'Tostadas de pollo','Tostadas crujientes con pollo, lechuga y crema.',40.00),(74,3,'Torta de Jamón','Torta de jamón con papas o ensalada.',30.00),(75,3,'Orden de burritos combinados',NULL,50.00),(76,3,'Tostada de papa',NULL,26.00),(77,3,'Torta de pierna o barbacoa','Torta de pierna o barbacoa, servida con guarnición.',70.00),(78,3,'Omelette al gusto',NULL,60.00),(79,3,'Burro de frijol','Burro de frijol envuelto en tortilla de harina.',45.00),(80,3,'Tacos dorados de papa (3pz)',NULL,60.00),(81,3,'Torta cubana','Torta cubana con variedad de carnes y papas o ensalada.',80.00),(82,3,'Burro de carne con chile o barbacoa','Burro de carne con chile o barbacoa.',80.00),(83,3,'Torta de pollo o boneless',NULL,80.00),(84,3,'Quesadilla sencilla','Quesadilla sencilla con queso.',45.00),(85,3,'Chimichanga','Chimichanga rellena de carne o pollo.',75.00),(86,3,'Sincronizada','Quesadilla sincronizada con jamón y queso.',45.00),(87,3,'Burro parcherón original','Burro parcherón clásico con guisos y queso.',110.00),(88,3,'Burro parcherón tachu y chile verde','Burro parcherón con tachu y chile verde.',120.00),(89,3,'Yogurt con fruta',NULL,30.00),(90,3,'Quesadilla de carne/chile/barbacoa',NULL,80.00),(91,3,'Wrap de pollo o carnes frías',NULL,80.00),(92,3,'Pollo a la plancha (orden)',NULL,80.00),(93,3,'Sandwich de jamón','Sándwich de jamón con papas o ensalada.',30.00),(94,3,'Sandwich de pollo','Sándwich de pollo acompañado de guarnición.',50.00),(95,3,'Tamal de carne o elote',NULL,30.00),(96,3,'Taco salad',NULL,70.00),(97,3,'Sandwich desayuno','Sándwich para desayuno con huevo y queso.',50.00),(98,3,'Club sandwich con papas y ensalada',NULL,80.00),(99,3,'Croissant de jamón con queso',NULL,50.00),(100,3,'Mollete',NULL,45.00),(101,3,'Pan pizza (1 ingrediente)',NULL,45.00),(102,3,'Pan pizza full ingredientes',NULL,150.00),(103,3,'Pan pizza de boneless o asada',NULL,120.00),(104,3,'Boneless con ensalada',NULL,110.00),(105,3,'Salchipapas con papas sazonadas','Salchipapas acompañadas de papas sazonadas.',110.00),(106,3,'Hamburguesa de res o pollo',NULL,80.00),(107,3,'Hamburguesa de boneless','Hamburguesa de boneless acompañada de papas.',100.00),(108,3,'Onigiri de pollo o res','Onigiri relleno de pollo o res, con zanahoria y tampico.',80.00),(109,3,'Onigiri combinado (pollo y res)',NULL,100.00),(110,3,'Papa boneless','Papa con boneless, acompañada de salsas.',100.00),(111,3,'Palomitas de pollo',NULL,70.00),(112,3,'Wrap','Wrap relleno de pollo o carnes frías.',80.00),(113,3,'Pizza',NULL,75.00),(114,3,'Banderilla sola','Banderilla sola, empanizada y frita.',30.00),(115,3,'Banderilla con papas','Banderilla con papas fritas.',40.00),(116,3,'Licuado de proteína','Licuado de proteína, ideal para el desayuno.',70.00),(117,3,'Chicken bake','Chicken bake estilo americano, con pollo y queso fundido.',70.00),(118,3,'Jugo verde','Jugo verde natural con vegetales frescos.',45.00);
/*!40000 ALTER TABLE `Menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tienditas`
--

DROP TABLE IF EXISTS `Tienditas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tienditas` (
  `id_tiendita` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `id_facultad` int DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `foro_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_tiendita`),
  KEY `id_facultad` (`id_facultad`),
  CONSTRAINT `Tienditas_ibfk_1` FOREIGN KEY (`id_facultad`) REFERENCES `Facultades` (`id_facultad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tienditas`
--

LOCK TABLES `Tienditas` WRITE;
/*!40000 ALTER TABLE `Tienditas` DISABLE KEYS */;
INSERT INTO `Tienditas` VALUES (1,'Cafeteria Derecho',5,'64, Calle de la Sabiduria',NULL),(2,'Cafeteria de Trabajo Social',5,'Pasillo Central Departamento de Trabajo Social al lado del Edificio 10C',NULL),(3,'Cafeteria Educacion',5,NULL,NULL);
/*!40000 ALTER TABLE `Tienditas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios` (
  `id_usuarios` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `es_admin` tinyint(1) DEFAULT '0',
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuarios`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-13 21:47:04
