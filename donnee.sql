-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Lun 30 Mars 2015 à 16:18
-- Version du serveur :  5.5.38
-- Version de PHP :  5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `pweb-2`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
`id` int(7) NOT NULL,
  `ADRESSE` varchar(255) DEFAULT NULL,
  `CP` int(5) DEFAULT NULL,
  `VILLE` varchar(255) DEFAULT NULL,
  `DEPARTEMENT` varchar(255) NOT NULL,
  `LONGITUDE` double NOT NULL,
  `LATITUDE` double NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `adresse`
--

INSERT INTO `adresse` (`id`, `ADRESSE`, `CP`, `VILLE`, `DEPARTEMENT`, `LONGITUDE`, `LATITUDE`) VALUES
(1, 'Rue du Moulin', 62290, 'Noeux-les-Mines', 'Pas de Calais', 2.6769309, 50.4220848),
(2, 'Rue du Moulin', 62290, 'Noeux-les-Mines', 'Pas de Calais', 2.6769309, 50.4220848),
(3, 'Rue des Sorbiers', 59134, 'Herlies', 'Nord', 2.8603572, 50.5778412),
(4, 'Rue des Ecoles', 62690, 'Agnières', 'Pas de Calais', 2.5616341, 50.352265),
(5, 'Rue Henry Nizart', 62810, 'Avesnes-le-Comte', 'Pas de Calais', 2.5326171, 50.2768901),
(6, 'Route Nationale', 62149, 'Annequin', 'Pas de Calais', 2.72692, 50.4833368),
(7, 'Rue Maurice Bouchery', 59113, 'Seclin', 'Nord', 3.0276038, 50.5536252),
(8, 'Impasse Jules Mousseron', 62160, 'Aix-Noulette', 'Pas de Calais', 2.7117808, 50.4493336),
(9, 'Impasse de Houdain', 62620, 'Barlin', 'Pas de Calais', 2.5970316, 50.4533319),
(10, 'Rue de Montdidier', 62740, 'Fouquières-lès-Lens', 'Pas de Calais', 2.9022367, 50.4220843),
(11, 'rue  Marcel  Sagnol', 62160, 'Aix-Noulette', 'Pas de Calais', 2.7190028, 50.4430624),
(12, 'Rue Gustave Dron', 59280, 'Armentières', 'Nord', 2.8908559, 50.6847815),
(13, 'Rue de Réaumur', 62680, 'Méricourt', 'Pas de Calais', 2.8839766, 50.4144971),
(14, 'Rue Christophe Colomb', 62640, 'Montigny-en-Gohelle', 'Pas de Calais', 2.9349715, 50.427891),
(15, 'Rue Clément Ader', 62800, 'Liévin', 'Pas de Calais', 2.7601929, 50.4274658),
(16, 'Rue de Montdidier', 62790, 'Leforest', 'Pas de Calais', 3.055701, 50.4444579),
(17, 'Rue de l''Egalité', 62220, 'Carvin', 'Pas de Calais', 2.9574071, 50.4981358),
(18, 'Cité du Général de Gaulle', 59221, 'Bauvin', 'Nord', 2.8993561, 50.5107807),
(19, 'Rue de Bellacourt', 62123, 'Bailleulmont', 'Pas de Calais', 2.666028, 50.2373414),
(20, 'Rue Saint-Edouard', 62300, 'Éleu-dit-Leauwette', 'Pas de Calais', 2.8179998, 50.4446729),
(21, 'Rue du Wetz', 62300, 'Éleu-dit-Leauwette', 'Pas de Calais', 2.8273193, 50.432565),
(22, 'Rue de Douai', 62540, 'Lozinghem', 'Pas de Calais', 2.4915625, 50.499332),
(23, 'Rue Jean Moulin', 62940, 'Haillicourt', 'Pas de Calais', 2.5686811, 50.4736566),
(24, 'Rue Jean-Loup Fontaine', 62750, 'Loos-en-Gohelle', 'Pas de Calais', 2.7898033, 50.4615532),
(25, 'Rue des Giroflées', 59553, 'Cuincy', 'Nord', 3.0460744, 50.3787638),
(26, 'rue jéhanne de lallain', 59167, 'Lallaing', 'Nord', 3.1708931, 50.3851176),
(27, 'Rue de Fontenoy', 59800, 'Lille', 'Nord', 3.0678086, 50.6221827),
(28, 'Rue d''Alésia', 75000, 'Paris', 'Paris', 2.3232206, 48.8291774);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
MODIFY `id` int(7) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;