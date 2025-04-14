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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-14  0:23:50
