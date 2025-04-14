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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tienditas`
--

LOCK TABLES `Tienditas` WRITE;
/*!40000 ALTER TABLE `Tienditas` DISABLE KEYS */;
INSERT INTO `Tienditas` VALUES (1,'Cafeteria Derecho',5,'64, Calle de la Sabiduria',NULL),(2,'Cafeteria de Trabajo Social',5,'Pasillo Central Departamento de Trabajo Social al lado del Edificio 10C',NULL),(3,'Cafeteria Educacion',5,NULL,NULL),(4,'Cafeteria Derecho 2',5,'Calle del Conocimiento frente al Edificio de Derecho 10I',NULL),(5,'Cafeteria Historia/Sociologia',5,'10, Calle del Conocimiento',NULL),(6,'Cafeteria Departemento de Ingenieria Quimica',4,'Calle del Conocimiento al lado del Edificio 5I',NULL),(7,'Cafeteria Departemento de Ingenieria Industrial/Civil',4,'Avenida Universidad frente al Edificio 5L',NULL),(8,'Cafetería Medicina',1,'Frente a la biblioteca de Medicina',NULL),(9,'Cafetería Matemáticas',3,'Detrás del edificio 3K3 del Departamento de Matemáticas',NULL),(10,'Cafetería Artes',6,'Detrás del edificio 3K3',NULL),(11,'Cafetería Geología',3,'Al lado del edificio 3V y frente al 3A de Literatura',NULL);
/*!40000 ALTER TABLE `Tienditas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-14  0:23:44
