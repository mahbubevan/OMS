-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2019 at 11:31 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oms`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Michaela Haley', 'matteo27@example.org', '2019-08-16 04:44:05', '$2y$10$tqgxNpIDPWw0iJ0l1Ki2o.PEMODt9axNKtCWiDFvbwbp91w9ZbbyC', 'user', 'xiuyl0wrgFWWCZdJ8dFWPWN1fRCaYV8owESvdNtlWe8bPS9kIBrzV9UY3thH', '2019-08-16 04:44:05', '2019-08-16 04:55:44'),
(2, 'Gerard Kuvalis', 'lschulist@example.com', '2019-08-16 04:44:05', '$2y$10$Fh4HCR3D7qQ0K1yTqRAkneSGRvWaaJoCUzXcWoW3eAyHUEUWrh9pq', 'super_admin', 'DSoc8GKc7b', '2019-08-16 04:44:05', '2019-08-16 04:44:05'),
(3, 'Prof. Kara Zemlak', 'london.nader@example.net', '2019-08-16 04:44:05', '$2y$10$JSB.wKze/25zQ9a/Bz2GueqqvtnaQvKfVanSicB6k.XNKG27B6qYy', 'super_admin', 'LSMpj1A6UJ', '2019-08-16 04:44:05', '2019-08-16 04:44:05'),
(4, 'Dr. Roger Nicolas Jr.', 'minerva10@example.org', '2019-08-16 04:44:05', '$2y$10$PLf56dr1ryFVRaP32bipteWjGKqXcP.1JnJoOjgkS0PdUFG5krDpW', 'super_admin', 'DQRveIJbAY', '2019-08-16 04:44:05', '2019-08-16 04:44:05'),
(8, 'Norene Pagac', 'epowlowski@example.net', '2019-08-16 04:44:17', '$2y$10$C3qKYnKU496QW9NSw2G...2gabCw6dxdcF1.UMFg78zr62Gr3pkpW', 'user', 'zBMafQp0cO', '2019-08-16 04:44:17', '2019-08-16 04:44:17'),
(9, 'Jean Schulist Right', 'test@example.com', '2019-08-16 04:44:17', '$2y$10$e4briMl505l9ZG2zfoL.8e5YipW22cbagKVh8zRosUSgXJzD9eFP.', 'user', '3MYup7MKzlM6dioLzRICWN5TryyIZZBDNDJ4KBcls2OAthxFimxcfWIbhG9u', '2019-08-16 04:44:17', '2019-08-16 04:53:31'),
(11, 'Mahbub', 'evan@evan.com', NULL, '$2y$10$qEa0T6.nwQ4Ss0p/DuGN7uvr/QiD5rDq73Np5upva40XPrFyzKpPy', 'super_admin', NULL, '2019-08-16 04:48:58', '2019-08-16 04:48:58'),
(12, 'Mahbub Alam', 'evan2@evan.com', NULL, '$2y$10$7.C3ZDOxsR79FE2sIipvQuHu3Uc46IX2K0KZHV4Sry127w/TDePyy', 'super_admin', NULL, '2019-08-16 04:49:21', '2019-08-16 04:50:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
