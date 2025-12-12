-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 12, 2025 at 07:44 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `customer_fname` varchar(255) DEFAULT NULL,
  `customer_lname` varchar(255) DEFAULT NULL,
  `customer_tel` varchar(255) DEFAULT NULL,
  `customer_username` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `pickup_name1` varchar(255) DEFAULT NULL,
  `pickup_name2` varchar(255) DEFAULT NULL,
  `rider_fname` varchar(255) DEFAULT NULL,
  `rider_lname` varchar(255) DEFAULT NULL,
  `rider_location` varchar(255) DEFAULT NULL,
  `rider_tel` varchar(255) DEFAULT NULL,
  `rider_username` varchar(255) DEFAULT NULL,
  `vehicle` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `time_stamp` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `customer_fname`, `customer_lname`, `customer_tel`, `customer_username`, `destination`, `license`, `pickup_name1`, `pickup_name2`, `rider_fname`, `rider_lname`, `rider_location`, `rider_tel`, `rider_username`, `vehicle`, `status`, `time_stamp`, `description`) VALUES
(70, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'SC3', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-03 23:33:55.266974', NULL),
(71, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'เชียงราก1', '9กท สิงห์บุรี', 'บร.2', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-03 23:41:55.179253', NULL),
(72, 'Liam', 'Gallagher', '0617698081', 'oasis1', ' Golf veiw', 'sc21', 'อาคารเรียนรวม SC1', NULL, 'Preme', 'Skywalker', 'ประตูเชียงราก1', '061769081', 'jedi1', 'Meledion', 'success', '2025-11-07 17:44:17.035822', NULL),
(73, 'Benjamin', 'Sesko', '0617698084', 'sesko1', 'sc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 20:26:01.063929', NULL),
(74, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'cs1', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-07 20:52:03.818352', NULL),
(75, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 21:00:58.939241', NULL),
(76, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 21:06:01.566295', NULL),
(77, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 21:07:00.948406', NULL),
(78, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-10 22:11:14.529218', NULL),
(79, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'lc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-10 22:20:31.669596', NULL),
(80, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'lc5', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-10 22:21:27.049203', NULL),
(81, 'Liam', 'Gallagher', '0617698081', 'oasis1', '2', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 17:55:05.417136', NULL),
(82, 'Liam', 'Gallagher', '0617698081', 'oasis1', '2', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 17:55:05.473483', NULL),
(83, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'c', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:08:15.844608', NULL),
(84, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'c', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:08:16.037746', NULL),
(85, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'd', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:14:46.206807', NULL),
(86, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'd', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:14:46.360138', NULL),
(87, 'Liam', 'Gallagher', '0617698081', 'oasis1', '22', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:21:33.729988', NULL),
(88, 'Liam', 'Gallagher', '0617698081', 'oasis1', '22', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:21:33.852670', NULL),
(89, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'f', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:23:34.651687', NULL),
(90, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'f', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:23:34.660400', NULL),
(91, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'ff', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:29:36.743341', NULL),
(92, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'd', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-12 18:42:49.383849', NULL),
(93, 'Liam', 'Gallagher', '0617698081', 'oasis1', '00', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-12 18:43:59.345983', NULL),
(94, 'Liam', 'Gallagher', '0617698081', 'oasis1', '00', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:50:20.315120', NULL),
(95, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:51:21.357478', NULL),
(96, 'Punnapha', 'Pomrung', '0825850833', 'wtfah', 'ท่ารถตู้', NULL, 'บร.1', NULL, NULL, NULL, 'ประตูเชียงราก1', NULL, NULL, NULL, 'cancel', '2025-11-12 19:20:20.504809', NULL),
(97, 'Punnapha', 'Pomrung', '0825850833', 'wtfah', 'ท่ารถตู้', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 19:23:12.906420', NULL),
(98, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'คณะสถาปัตย์ฯ', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-20 18:21:35.720490', NULL),
(99, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '9กท สิงห์บุรี', 'คณะพาณิชยศาสตร์และการบัญชี', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-20 18:23:10.167714', NULL),
(100, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '90dc', 'คณะศิลปกรรมศาสตร์', NULL, 'Kittpas', 'Chocktanatorn', 'โรงพยาบาลธรรมศาสตร์', '0986745625', 'premeees', 'Honda Rx7', 'success', '2025-11-23 02:33:44.050129', NULL),
(101, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'เมนสเตเดียม', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-24 17:36:14.041788', NULL),
(102, 'Sirikorn', 'Choktanatorn', '0618574200', 'IGMOM', 'sc3', '9กท สิงห์บุรี', 'คณะแพทย์(คุณากร)', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-27 19:14:37.821321', NULL),
(103, 'Tamakorn', 'Chocktanatorn', '0614579511', 'xnaiya', 'sc3', '9กท สิงห์บุรี', 'คณะนิติศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-27 19:22:53.076127', NULL),
(104, 'Tamakorn', 'Chocktanatorn', '0614579511', 'xnaiya', 'sc', '9กท สิงห์บุรี', 'คณะทันตแพทยศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-27 19:29:12.805996', NULL),
(105, 'Tamakorn', 'Chocktanatorn', '0614579511', 'xnaiya', 'sc3', '9กท สิงห์บุรี', 'คณะ SIIT', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-27 19:30:47.953971', NULL),
(106, 'Tamakorn', 'Chocktanatorn', '0614579511', 'xnaiya', 'sc3', '9กท สิงห์บุรี', 'คณะทันตแพทยศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-27 19:40:58.088034', NULL),
(107, 'Tamakorn', 'Chocktanatorn', '0614579511', 'xnaiya', 'x', '9กท สิงห์บุรี', 'อินเตอร์โซน', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-11-27 19:59:30.738585', NULL),
(108, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'ยิม 7', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-12-01 17:33:03.241435', NULL),
(109, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', 'sc21', 'เมนสเตเดียม', NULL, 'Preme', 'Skywalker', 'ประตูเชียงราก1', '061769081', 'jedi1', 'Meledion', 'success', '2025-12-01 18:28:37.266900', NULL),
(110, 'Kittapas', 'Chocktanatorn', '0617698081', 'kittapasC', 'sc3', NULL, 'คณะศิลปกรรมศาสตร์', NULL, NULL, NULL, 'ประตูเชียงราก2', NULL, NULL, NULL, 'cancel', '2025-12-01 20:34:42.529089', NULL),
(111, 'Kittapas', 'Chocktanatorn', '0617698081', 'kittapasC', 'sc3', 'ขจ254', 'คณะวิศวกรรมศาสตร์', NULL, 'วิชัย', 'กล้าหาญ', 'ประตูเชียงราก2', '0625478541', 'somsak1', 'Honda Wave125 สีขาว', 'success', '2025-12-01 20:39:29.943778', NULL),
(112, 'กฤตภาส', 'โชคธนธรณ์', '0617698081', 'premes', 'sc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'ประตูเชียงราก2', NULL, NULL, NULL, 'cancel', '2025-12-01 20:54:40.892023', NULL),
(113, 'Kittapas', 'Chocktanatorn', '0617698081', 'kittapasC', 'sc3', 'ขจ254', 'คณะทันตแพทยศาสตร์', NULL, 'วิชัย', 'กล้าหาญ', 'ประตูเชียงราก2', '0625478541', 'somsak1', 'Honda Wave125 สีขาว', 'success', '2025-12-01 20:55:04.899874', NULL),
(114, 'กฤตภาส', 'โชคธนธรณ์', '0617698081', 'premes', 'sc3', 'ขจ254', 'คณะนิติศาสตร์', NULL, 'วิชัย', 'กล้าหาญ', 'ประตูเชียงราก2', '0625478541', 'somsak1', 'Honda Wave125 สีขาว', 'success', '2025-12-01 20:55:36.811241', NULL),
(115, 'Kittapas', 'Chocktanatorn', '0617698081', 'kittapasC', 'ssc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'ประตูเชียงราก1', NULL, NULL, NULL, 'cancel', '2025-12-02 01:43:28.311615', NULL),
(116, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'โรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-12-02 19:17:55.266722', NULL),
(117, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'คณะทันตแพทยศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-12-02 19:26:32.033319', NULL),
(118, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'โรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-12-02 19:31:54.183443', 'อาคารปิยชาติ'),
(119, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'โรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-12-02 19:36:06.773388', 'อาคารปิยชาติ'),
(120, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '9กท สิงห์บุรี', 'คณะทันตแพทยศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-12-02 19:40:52.970122', NULL),
(121, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'คณะทันตแพทยศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-12-02 19:42:21.782838', 'อาคารปิยชาติ'),
(122, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'โรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-12-02 19:46:20.314031', 'อาคารปิยชาติ'),
(123, 'Kittapas', 'Peammm', '0617698081', 'peam111', 'SC3', '9กท สิงห์บุรี', 'คณะทันตแพทยศาสตร์', NULL, 'Noel', 'Gallagher', 'โรงอาหารGREEN', '0615878450', 'rider1', 'Honda PCX155 White', 'success', '2025-12-02 20:54:11.482066', 'อาคารปิยชาติ'),
(124, 'Kittapas', 'KIttt', '0617584124', 'premeee', 'sc3', 'sc21', 'คณะทันตแพทยศาสตร์', NULL, 'Preme', 'Skywalker', 'ประตูเชียงราก1', '061769081', 'jedi1', 'Meledion', 'success', '2025-12-02 21:00:18.777901', 'อาคารปิยชาติ'),
(125, 'Kittapas', 'KIttt', '0617584124', 'premeee', 'sc3', NULL, 'คณะทันตแพทยศาสตร์', NULL, NULL, NULL, 'ประตูเชียงราก1', NULL, NULL, NULL, 'cancel', '2025-12-02 21:01:11.567913', 'อาคารปิยชาติ'),
(126, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', 'de254', 'บร.4', NULL, 'somchai', 'popp', 'หอสมุดป๋วย', '06254789854', 'somchai', 'honda wave125 white', 'success', '2025-12-02 21:08:01.502301', 'ป้ายรถรถข้างอาคารโรงละคอน'),
(127, 'OOO', 'RRRTT', '0654784254', 'ppp123', 'sc3', NULL, 'คณะ SIIT', NULL, NULL, NULL, 'ประตูเชียงราก1', NULL, NULL, NULL, 'cancel', '2025-12-02 21:12:59.580372', 'สถาบันเทคโนโลยีนานาชาติสิรินธร'),
(128, 'OOO', 'RRRTT', '0654784254', 'ppp123', 'sc3', 'sc21', 'คณะทันตแพทยศาสตร์', NULL, 'Preme', 'Skywalker', 'ประตูเชียงราก1', '061769085', 'jedi1', 'Meledion', 'success', '2025-12-02 21:13:29.984705', 'อาคารปิยชาติ'),
(129, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', NULL, 'บร.2', NULL, NULL, NULL, 'ประตูเชียงราก2', NULL, NULL, NULL, 'cancel', '2025-12-03 01:52:51.379930', 'วงเวียนข้างหน้าอาคารบร.2'),
(130, 'ธีรชา', 'กาวินคำ', '0970744088', 'nujam02', 'คณะนิติศาสตร์', NULL, 'คณะนิติศาสตร์', NULL, NULL, NULL, 'อินเตอร์โซน', NULL, NULL, NULL, 'cancel', '2025-12-03 11:37:32.794218', 'ตรงข้ามยิมเนเซียม4'),
(131, 'ธีรชา', 'กาวินคำ', '0970744088', 'nujam02', 'sc3', 'กท12', 'คณะทันตแพทยศาสตร์', NULL, 'กฤตภาส', 'โชคธนธรณ์', 'อินเตอร์โซน', '061768082', 'peammm', 'Honda Wave125 สีขาว', 'success', '2025-12-03 11:40:28.854256', 'อาคารปิยชาติ'),
(132, 'ธีรชา', 'กาวินคำ', '0970744088', 'nujam02', 'sc3', 'กท12', 'คณะทันตแพทยศาสตร์', NULL, 'กฤตภาส', 'โชคธนธรณ์', 'อินเตอร์โซน', '061768082', 'peammm', 'Honda Wave125 สีขาว', 'success', '2025-12-03 11:43:41.824196', 'อาคารปิยชาติ');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `image_location` varchar(1000) DEFAULT NULL,
  `pickup_name1` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pickup_name2` varchar(255) NOT NULL,
  `image_location2` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`image_location`, `pickup_name1`, `description`, `pickup_name2`, `image_location2`) VALUES
('https://res.cloudinary.com/preme/image/upload/v1762953390/JC_Cisema_qsryqy.jpg', 'JC Cinema', 'บริเวณตึกติดทางม้าลายเชียงราก1 ', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953392/SC2_huolvb.jpg', 'SC2', 'อาคารวิศิษฎ์อักษร', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953392/SC3_kcrwni.jpg', 'SC3', 'อาคารเรียนรวมสังคมศาสตร์3', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953404/%E0%B8%84%E0%B8%93%E0%B8%B0_SIIT_fbxv4k.jpg', 'คณะ SIIT', 'สถาบันเทคโนโลยีนานาชาติสิรินธร', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953402/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_d1fsis.jpg', 'คณะทันตแพทยศาสตร์', 'อาคารปิยชาติ', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953410/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%99%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_bbr5vr.jpg', 'คณะนิติศาสตร์', 'ตรงข้ามยิมเนเซียม4', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953412/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%93%E0%B8%B4%E0%B8%8A%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5_okrvm1.jpg', 'คณะพาณิชยศาสตร์และการบัญชี', 'ตรงข้ามยิมเนเซียม4', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953425/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_apqtyc.jpg', 'คณะวิศวกรรมศาสตร์', 'ตรงข้ามปั้มน้ำมันปตท.', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953422/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_a8o7jd.jpg', 'คณะศิลปกรรมศาสตร์', 'ติดกับอาคารSC1', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953432/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_t8b7dv.jpg', 'คณะศิลปศาสตร์', 'ตรงข้ามสนามบอลหญ้าเทียม(Flick)', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953387/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%AF_j3wrl2.jpg', 'คณะสถาปัตย์ฯ', 'ตรงข้ามท่ารถตู้', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953416/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C_%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%B2%E0%B8%81%E0%B8%A3_imvaus.jpg', 'คณะแพทย์(คุณากร)', 'ติดกับอาคารปิยชาติ', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953392/%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%82%E0%B8%94%E0%B8%A1%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3_d358vr.jpg', 'ตึกโดมบริหาร', 'ติดกับสำนักงานอธิการบดี', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953401/%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B9%89%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%81_1_vvnsmt.jpg', 'ทางม้าลายเชียงราก 1', 'ข้างอาคารโรงภาพยนร์วารสารศาสตร์', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953408/%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B8%AA%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%A1_qpwjbv.jpg', 'ทิวสนโดม', 'หน้าหอพักนักศึกษาอาคารA-B', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953404/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%95%E0%B8%B9%E0%B9%89_umaqj5.jpg', 'ท่ารถตู้', 'ตรงข้ามคณะสถาปัตย์', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1752591448/bustop_lc4_kumoou.png', 'บร.1', 'ป้ายรอรถข้างหอสมุดป๋วย', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753034277/lc2_ryobeb.jpg', 'บร.2', 'วงเวียนข้างหน้าอาคารบร.2', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753034277/lc3_e93eq0.jpg', 'บร.3', 'ป้ายรอรถหน้าอาคารบร.3', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1755192784/lc4_vrsfdm.jpg', 'บร.4', 'ป้ายรถรถข้างอาคารโรงละคอน', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753036416/lc5_scixm7.png', 'บร.5', 'อาคารคณะวิทยาศาสตร์และเทคโนโลยี', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1764676978/120495944_amics5.jpg', 'ประตูเชียงราก1', 'ทางเข้าติดกับถนนใหญ่', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1764676978/Screenshot_2025-12-02_190231_mluvmm.png', 'ประตูเชียงราก2', 'ติดกับโรงพิมพ์', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953437/%E0%B8%A2%E0%B8%B4%E0%B8%A1_4-5-6_vggr76.jpg', 'ยิม 4-5-6', 'ป้ายรอรถหน้าคณะบัญชี', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953433/%E0%B8%A2%E0%B8%B4%E0%B8%A1_7_i9dayq.jpg', 'ยิม 7', 'ติดกับสนามบอลหญ้าเทียม(Flick)', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953438/%E0%B8%A3%E0%B8%9E.%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_teblit.jpg', 'รพ.ธรรมศาสตร์', 'ทางม้าลายข้ามไปTU Plaza', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953443/%E0%B8%A3%E0%B8%A3.%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_qpicph.jpg', 'รร.อนุบาลธรรมศาสตร์', 'ตรงข้ามอินเตอร์โซน', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753036045/sorkorror_xtinom.jpg', 'ศูนย์การเรียนรู้(ศกร.)', 'ข้างหลังหอสมุดป๋วย', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953454/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A1%E0%B8%A2%E0%B9%8C_tgxft4.jpg', 'ศูนย์ญี่ปุ่น-ป้ายรถเมย์', 'ตรงข้ามอาคารHouse of Wishdom', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953455/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99AIT_bewy0q.jpg', 'สถาบันAIT', 'ป้ายรอรถหน้าทางเข้าสถาบันAIT', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953452/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%8D%E0%B9%89%E0%B8%B2_ogwnon.jpg', 'สระว่ายนํ้า', 'ข้างยิมเนเซียม4', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953458/%E0%B8%AA%E0%B8%A7%E0%B8%97%E0%B8%8A._jfaihp.jpg', 'สวทช.', 'ข้างหน้าวงเวียนศูนย์ญี่ปุ่น', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953461/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9B%E0%B9%8B%E0%B8%A7%E0%B8%A2_100%E0%B8%9B%E0%B8%B5_rzhizn.jpg', 'สวนป๋วย 100ปี', 'ติดกับอาคารเรียนและปฎิบัติการรวม', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953471/%E0%B8%AB%E0%B8%AD%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94%E0%B8%9B%E0%B9%8B%E0%B8%A7%E0%B8%A2_rhtjhj.jpg', 'หอสมุดป๋วย', 'ตรงข้ามหอพระ', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953468/%E0%B8%AB%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%8B%E0%B8%99_A-B_abhuwf.jpg', 'หอในโซน A-B', 'ติดกับศูนย์อาหารทิวสน', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953471/%E0%B8%AB%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%8B%E0%B8%99_C-E_ot3rbx.jpg', 'หอในโซน C-E', 'ตรงข้ามร้านสะดวกซื้อTop', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953466/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99_%E0%B8%9A%E0%B8%B8%E0%B8%99%E0%B8%99%E0%B8%B2%E0%B8%84_uetmq4.jpg', 'อาคารเดือน บุนนาค', 'ติดกับอาคารบร.2', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753036517/sc1_gus6lj.jpg', 'อาคารเรียนรวม SC1', 'ติดกับหอสมุดป๋วย', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953473/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%8E%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%A7%E0%B8%A1_zbhb1s.jpg', 'อาคารเรียนและปฎิบัติการรวม', 'ติดกับสวนป๋วย 100ป๊', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953477/%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%8B%E0%B8%99_g18saa.jpg', 'อินเตอร์โซน', 'ตรงข้ามรร.อนุบาลธรรมศาสตร์', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953429/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A1_jr1or3.jpg', 'เมนสเตเดียม', 'ลานพญานาค', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953444/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C_wihwza.jpg', 'โรงพิมพ์', 'ติดกับประตูเชียงราก2', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953450/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99_otxtxq.jpg', 'โรงอาหารGREEN', 'ตรงข้ามศูนย์หนังสือ', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `imageuri` varchar(1000) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `imageuri`, `firstname`, `lastname`, `password`, `tel`, `username`) VALUES
(6, 'https://res.cloudinary.com/preme/image/upload/v1752943184/woxlz7vxpzjacstaabby.jpg', 'Go', 'Younjung', '$2a$10$JksiwLpjiesGW95gAfNjx.lwbU0LvSfQtg1p1E7ZrrVfvdVgQ8o5S', '123455678', 'go1234'),
(7, 'https://res.cloudinary.com/preme/image/upload/v1752943578/tmd1twy2okjxhpoaxapq.jpg', 'Kim', 'Minji', '$2a$10$N.ryb3.JhkwEzz0DK67Ri.Iz1x7qBq1SFWxDc1y5hq1eL/CLXqsKK', '0617698081', 'admin'),
(10, 'https://res.cloudinary.com/preme/image/upload/v1764586625/qoiodit69cap1nltejh2.jpg', 'Liam', 'Gallagher', '$2a$10$xzoyLDonROSy3Z4GOdeDxe0tDO30Fql3.MCYFZVgR5DlWhmfWVEJm', '0617698081', 'oasis1'),
(12, 'https://res.cloudinary.com/preme/image/upload/v1763638183/y46x1pa6hplojqmwg8ds.jpg', 'Preme', 'Kittapas', '$2a$10$0eU8XK44hYuI/EwV6yxC6uO4jW9NHlmNspyEyaDWPOI44m8xJ2uUK', '0617698081', 'preme01'),
(13, NULL, 'Benjamin', 'Sesko', '$2a$10$S0ybCMoBtukWjadkOYinJuN7aq642QxibAQ8EudgluZxwmDjsvNJK', '0617698084', 'sesko1'),
(14, 'https://res.cloudinary.com/preme/image/upload/v1762949356/louxgurmdabpahnt2miw.jpg', 'Punnapha', 'Pomrung', '$2a$10$kk5B5ZPs1ItKah8OSWO9SeEVhgqnUlQLgoXw9twzr8wrw2bPdBFDe', '0825850833', 'wtfah'),
(15, NULL, 'Sirikorn', 'Choktanatorn', '$2a$10$ADNPtPvQnQbSDLcXXFUkuelSH0.hxEj/ByQ3gg9lM77OsI.isJtFG', '0618574200', 'IGMOM'),
(16, NULL, 'Tamakorn', 'Chocktanatorn', '$2a$10$CgD3FErsmiEb7IfWXI960uhWpk9Q6zkUD.0kMmU4OqLMCneql72fK', '0614579511', 'xnaiya'),
(18, NULL, 'Kittpas', 'Premee', '$2a$10$J26qNpuUt5YY6M89jNRVXOLWmNb8ZugZ2B.cE.EY6KmLpaMVhFs3u', '0617698081', 'kt2511'),
(23, NULL, 'กฤตภาส', 'โชคธนธรณ์', '$2a$10$lZBF9QdPG8Kok2ATfo9NJeOALTzNJLrSKR1q3STnViDurhn4N8LOC', '0617698081', 'premes'),
(24, NULL, 'preme', 'ouyt', '$2a$10$59dxQdctNNjr406F/4vC/OrehldskZeqVwRtV46C1MZACwcyqnGXm', '0832412343', 'premefff'),
(25, 'https://res.cloudinary.com/preme/image/upload/v1764595988/fsiilviygjqdvfa7mztu.jpg', 'Kittapas', 'Chocktanatorn', '$2a$10$t7cPLC/hhHetzeMJSFT7ruFfFL01CaCgsaXCSLPI/QNnQX5DKB3bG', '0617698081', 'kittapasC'),
(26, NULL, 'Kittapas', 'Peammm', '$2a$10$TpTSuQ8N.2xget/xveDu2e5Ng4kLv7gYZ0WcfqqGcmm/AqXze0YT.', '0617698081', 'peam111'),
(27, NULL, 'Kittapas', 'KIttt', '$2a$10$Sy1.emUUsEaly3xQp8810ecAws2V4JLrRDdnog4fgx.n1OHmvqm.m', '0617584124', 'premeee'),
(28, NULL, 'OOO', 'RRRTT', '$2a$10$mhmnEZq5t00wHESzF3jauOy.D5lWAe2v9b0ig/t7tpfTYi4VLYJem', '0654784254', 'ppp123'),
(29, 'https://res.cloudinary.com/preme/image/upload/v1764737193/qxtjiwqukrufnddmrcew.jpg', 'ธีรชา', 'กาวินคำ', '$2a$10$U3ZCx5HLOJRnlIQmcxBFU.BxufnLRjn1lSVdOH7szYTH2xFxHQTpe', '0970744088', 'nujam02');

-- --------------------------------------------------------

--
-- Table structure for table `person_seq`
--

CREATE TABLE `person_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person_seq`
--

INSERT INTO `person_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `requestid` int(11) NOT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `pickup_name1` varchar(255) DEFAULT NULL,
  `pickup_name2` varchar(255) DEFAULT NULL,
  `rider_location` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `respond` tinyint(1) DEFAULT 0,
  `image_request` varchar(1000) DEFAULT NULL,
  `customer_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `requestsummary`
--

CREATE TABLE `requestsummary` (
  `id` int(11) NOT NULL,
  `customer_username` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `pickup_name1` varchar(255) DEFAULT NULL,
  `pickup_name2` varchar(255) DEFAULT NULL,
  `rider_fname` varchar(255) DEFAULT NULL,
  `rider_lname` varchar(255) DEFAULT NULL,
  `rider_location` varchar(255) DEFAULT NULL,
  `rider_tel` varchar(255) DEFAULT NULL,
  `rider_username` varchar(255) DEFAULT NULL,
  `customer_fname` varchar(255) DEFAULT NULL,
  `customer_lname` varchar(255) DEFAULT NULL,
  `customer_tel` varchar(255) DEFAULT NULL,
  `vehicle` varchar(255) DEFAULT NULL,
  `rider_image` varchar(255) DEFAULT NULL,
  `customer_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rider`
--

CREATE TABLE `rider` (
  `rider_id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rider_firstname` varchar(255) DEFAULT NULL,
  `rider_lastname` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `vehicle` varchar(255) DEFAULT NULL,
  `rider_location` varchar(255) DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `rider_image` varchar(1000) DEFAULT NULL,
  `status` bit(1) DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rider`
--

INSERT INTO `rider` (`rider_id`, `password`, `rider_firstname`, `rider_lastname`, `tel`, `username`, `vehicle`, `rider_location`, `license`, `rider_image`, `status`) VALUES
(3, '$2a$10$2S4jcJ349cXV3K5GpjejRuQX6uNKbtqQOPVSwEPE/rnhIwpNUSTRa', 'Noel', 'Gallagher', '0615878450', 'rider1', 'Honda PCX155 White', 'โรงอาหารGREEN', '9กท สิงห์บุรี', 'https://res.cloudinary.com/preme/image/upload/v1753339913/6de62278-1458-46f7-8df4-01f979d0770c_RETINA_PORTRAIT_3_2_fd8a0m.jpg', b'0'),
(5, '$2a$10$dwDEKW5EQ3CtiFyD20a7l.Qc0OlYmM4pmvikBdaKONIy8TiNb9ypW', 'Travis', 'Scott', '06158784324', 'laflame', 'Lamborghini Green', 'โรงอาหารGREEN', 'กท262 สิงห์บุรี', 'https://res.cloudinary.com/preme/image/upload/v1754565548/8c5c57947d8778f36147280e2bbddc5c_ksedqm.jpg', b'0'),
(15, '$2a$10$sobCyR651hMv87ixUpgn5ecGskRaf1YTQDlAr.U7OfjrloJhbrDnu', 'GoYoun', 'Jung', '03254785210', 'younjung', 'benz', 'ประตูเชียงราก1', 'กข262', NULL, b'0'),
(16, '$2a$10$IWMqmtW6fn1mhh73ZTRaE.VGsg6QPtp13tXKObZDULyxztJx6Wy9m', 'Kujo', 'Jotaro', '0214568541', 'manop1', 'BMX', 'green', 'la213', NULL, b'0'),
(17, '$2a$10$tR5YhP46Lc0OV6yCoDWRXuPk4G4abG9qmlsjWUKvdmji4YX7IoCQe', 'Preme', 'Skywalker', '061769085', 'jedi1', 'Meledion', 'ประตูเชียงราก1', 'sc21', 'https://res.cloudinary.com/preme/image/upload/v1764588445/kwvdn6xqh86yyswdfjzw.jpg', b'0'),
(18, '$2a$10$Xb2XecaZW9Q4iXn4hn62PONUhEPFqVYH2q7c29TKuYZBcSRkLCq7y', 'Anakin', 'Skywalker', '082314352', 'preme12', 'R2', 'ประตูเชียงราก2', 'op3421', NULL, b'0'),
(20, '$2a$10$cMJLNvtUS/UBfRo8iCTNCuhc9uKWPGzX5yB8saQLjuoDradTF6Uby', 'Kittpas', 'Chocktanatorn', '0986745625', 'premeees', 'Honda Rx7', 'โรงพยาบาลธรรมศาสตร์', '90dc', 'https://res.cloudinary.com/preme/image/upload/v1763839555/efxwvsqdms2oouknhdrb.jpg', b'0'),
(23, '$2a$10$SfoSbdquLiz2TMvE.CTV5uUU4wxt2moaRPgUZGWWJENnwms0bjBcK', 'Preme', 'Skywalker', '0987348733', 'kittapas1', 'Honda S1000rr', 'ท่ารถตู้ใหม่', 'cs37', NULL, b'0'),
(25, '$2a$10$IIstOHgh4rQlfPa3aKEZi.m/jcYmW90e80LO6JjQ/8/MJZEq1Eq5C', 'วิชัย', 'กล้าหาญ', '0625478541', 'somsak1', 'Honda Wave125 สีขาว', 'ประตูเชียงราก2', 'ขจ254', NULL, b'1'),
(26, '$2a$10$40DJo9NeEcivswyCwnHJUOQhvzMyg9kavHys4LeJPDecNTaJUkLFS', 'somchai', 'popp', '06254789854', 'somchai', 'honda wave125 white', 'หอสมุดป๋วย', 'de254', NULL, b'0'),
(27, '$2a$10$3S4XxMLQ9azHozz01kJw9O8h2dTGLlWP1/9/V8xyIVThpBWBOlktm', 'องอาจ', 'มาดี', '025784125', 'ao1234', 'Yamaha Firano สีแดง', 'ประตูเชียงราก2', 'นร832', NULL, NULL),
(28, '$2a$10$k8np5rseW7Noh/0YmPSLdOzk057UapVTtIQQo1vLHcYPlLvtIURSa', 'กฤตภาส', 'โชคธนธรณ์', '061768082', 'peammm', 'Honda Wave125 สีขาว', 'อินเตอร์โซน', 'กท12', 'https://res.cloudinary.com/preme/image/upload/v1764737213/pshmcbvjaizgmy3eiije.jpg', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `riderlocation`
--

CREATE TABLE `riderlocation` (
  `rider_location` varchar(255) NOT NULL,
  `image_rider_location` varchar(1000) DEFAULT NULL,
  `available_rider` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `riderlocation`
--

INSERT INTO `riderlocation` (`rider_location`, `image_rider_location`, `available_rider`) VALUES
('คณะ SIIT', NULL, 0),
('ท็อปมาร์เก็ตหน้าทิวสน', '', 0),
('ท่ารถตู้ใหม่', NULL, 0),
('บร.4', NULL, 0),
('ประตูเชียงราก1', '', 2),
('ประตูเชียงราก2', '', 1),
('หอสมุดป๋วย', NULL, 0),
('อาคารเรียนรวมSC1', NULL, 0),
('อินเตอร์โซน', NULL, 2),
('โรงพยาบาลธรรมศาสตร์', 'https://res.cloudinary.com/preme/image/upload/v1762953434/%E0%B8%A3%E0%B8%9E.%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%89%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4_vwaosm.jpg', 0),
('โรงอาหารGREEN', 'https://res.cloudinary.com/preme/image/upload/v1752591448/bustop_lc4_kumoou.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `riderregister`
--

CREATE TABLE `riderregister` (
  `rider_firstname` varchar(255) DEFAULT NULL,
  `rider_lastname` varchar(255) DEFAULT NULL,
  `brand_vehicle` varchar(255) DEFAULT NULL,
  `model_vehicle` varchar(255) DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `rider_license` varchar(255) DEFAULT NULL,
  `rider_location` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `person_id` varchar(13) NOT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `register_time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `summary_seq`
--

CREATE TABLE `summary_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `summary_seq`
--

INSERT INTO `summary_seq` (`next_val`) VALUES
(1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`pickup_name1`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`requestid`);

--
-- Indexes for table `requestsummary`
--
ALTER TABLE `requestsummary`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customer_username` (`customer_username`);

--
-- Indexes for table `rider`
--
ALTER TABLE `rider`
  ADD PRIMARY KEY (`rider_id`);

--
-- Indexes for table `riderlocation`
--
ALTER TABLE `riderlocation`
  ADD PRIMARY KEY (`rider_location`);

--
-- Indexes for table `riderregister`
--
ALTER TABLE `riderregister`
  ADD PRIMARY KEY (`person_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `requestid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=290;

--
-- AUTO_INCREMENT for table `requestsummary`
--
ALTER TABLE `requestsummary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT for table `rider`
--
ALTER TABLE `rider`
  MODIFY `rider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
