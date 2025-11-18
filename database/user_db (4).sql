-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 18, 2025 at 08:27 AM
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
  `time_stamp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `customer_fname`, `customer_lname`, `customer_tel`, `customer_username`, `destination`, `license`, `pickup_name1`, `pickup_name2`, `rider_fname`, `rider_lname`, `rider_location`, `rider_tel`, `rider_username`, `vehicle`, `status`, `time_stamp`) VALUES
(70, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'SC3', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-03 23:33:55.266974'),
(71, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'เชียงราก1', '9กท สิงห์บุรี', 'บร.2', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-03 23:41:55.179253'),
(72, 'Liam', 'Gallagher', '0617698081', 'oasis1', ' Golf veiw', 'sc21', 'อาคารเรียนรวม SC1', NULL, 'Preme', 'Skywalker', 'ประตูเชียงราก1', '061769081', 'jedi1', 'Meledion', 'success', '2025-11-07 17:44:17.035822'),
(73, 'Benjamin', 'Sesko', '0617698084', 'sesko1', 'sc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 20:26:01.063929'),
(74, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'cs1', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-07 20:52:03.818352'),
(75, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 21:00:58.939241'),
(76, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 21:06:01.566295'),
(77, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-07 21:07:00.948406'),
(78, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-10 22:11:14.529218'),
(79, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'lc1', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-10 22:20:31.669596'),
(80, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'lc5', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-10 22:21:27.049203'),
(81, 'Liam', 'Gallagher', '0617698081', 'oasis1', '2', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 17:55:05.417136'),
(82, 'Liam', 'Gallagher', '0617698081', 'oasis1', '2', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 17:55:05.473483'),
(83, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'c', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:08:15.844608'),
(84, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'c', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:08:16.037746'),
(85, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'd', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:14:46.206807'),
(86, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'd', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:14:46.360138'),
(87, 'Liam', 'Gallagher', '0617698081', 'oasis1', '22', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:21:33.729988'),
(88, 'Liam', 'Gallagher', '0617698081', 'oasis1', '22', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:21:33.852670'),
(89, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'f', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:23:34.651687'),
(90, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'f', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:23:34.660400'),
(91, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'ff', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:29:36.743341'),
(92, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'd', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-12 18:42:49.383849'),
(93, 'Liam', 'Gallagher', '0617698081', 'oasis1', '00', NULL, 'บร.1', NULL, NULL, NULL, 'วินหน้าโรงอาหารGREEN', NULL, NULL, NULL, 'cancel', '2025-11-12 18:43:59.345983'),
(94, 'Liam', 'Gallagher', '0617698081', 'oasis1', '00', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:50:20.315120'),
(95, 'Liam', 'Gallagher', '0617698081', 'oasis1', 'sc3', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 18:51:21.357478'),
(96, 'Punnapha', 'Pomrung', '0825850833', 'wtfah', 'ท่ารถตู้', NULL, 'บร.1', NULL, NULL, NULL, 'ประตูเชียงราก1', NULL, NULL, NULL, 'cancel', '2025-11-12 19:20:20.504809'),
(97, 'Punnapha', 'Pomrung', '0825850833', 'wtfah', 'ท่ารถตู้', '9กท สิงห์บุรี', 'บร.1', NULL, 'Noel', 'Gallagher', 'วินหน้าโรงอาหารGREEN', '0615878452', 'rider1', 'Honda PCX155 White', 'success', '2025-11-12 19:23:12.906420');

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
('https://res.cloudinary.com/preme/image/upload/v1762953477/%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%8B%E0%B8%99_g18saa.jpg', '', 'อินเตอร์โซน', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953390/JC_Cisema_qsryqy.jpg', 'JC Cinema', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953392/SC2_huolvb.jpg', 'SC2', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953392/SC3_kcrwni.jpg', 'SC3', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953404/%E0%B8%84%E0%B8%93%E0%B8%B0_SIIT_fbxv4k.jpg', 'คณะ SIIT', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953402/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_d1fsis.jpg', 'คณะทันตแพทยศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953410/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%99%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_bbr5vr.jpg', 'คณะนิติศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953412/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%9E%E0%B8%B2%E0%B8%93%E0%B8%B4%E0%B8%8A%E0%B8%A2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5_okrvm1.jpg', 'คณะพาณิชยศาสตร์และการบัญชี', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953425/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_apqtyc.jpg', 'คณะวิศวกรรมศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953422/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_a8o7jd.jpg', 'คณะศิลปกรรมศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953432/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_t8b7dv.jpg', 'คณะศิลปศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953387/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%AF_j3wrl2.jpg', 'คณะสถาปัตย์ฯ', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953416/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C_%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%B2%E0%B8%81%E0%B8%A3_imvaus.jpg', 'คณะแพทย์(คุณากร)', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953392/%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%82%E0%B8%94%E0%B8%A1%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3_d358vr.jpg', 'ตึกโดมบริหาร', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953401/%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B9%89%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%81_1_vvnsmt.jpg', 'ทางม้าลายเชียงราก 1', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953408/%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B8%AA%E0%B8%99%E0%B9%82%E0%B8%94%E0%B8%A1_qpwjbv.jpg', 'ทิวสนโดม', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953404/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%95%E0%B8%B9%E0%B9%89_umaqj5.jpg', 'ท่ารถตู้', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1752591448/bustop_lc4_kumoou.png', 'บร.1', 'ป้ายรอรถข้างหอสมุดป๋วย', '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753034277/lc2_ryobeb.jpg', 'บร.2', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753034277/lc3_e93eq0.jpg', 'บร.3', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1755192784/lc4_vrsfdm.jpg', 'บร.4', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753036416/lc5_scixm7.png', 'บร.5', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953437/%E0%B8%A2%E0%B8%B4%E0%B8%A1_4-5-6_vggr76.jpg', 'ยิม 4-5-6', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953433/%E0%B8%A2%E0%B8%B4%E0%B8%A1_7_i9dayq.jpg', 'ยิม 7', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953438/%E0%B8%A3%E0%B8%9E.%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_teblit.jpg', 'รพ.ธรรมศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953434/%E0%B8%A3%E0%B8%9E.%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%89%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4_vwaosm.jpg', 'รพ.ธรรมศาสตร์(อาคารเฉลิมพระเกียรติ)', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953443/%E0%B8%A3%E0%B8%A3.%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_qpicph.jpg', 'รร.อนุบาลธรรมศาสตร์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753036045/sorkorror_xtinom.jpg', 'ศูนย์การเรียนรู้(ศกร.)', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953454/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99-%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A1%E0%B8%A2%E0%B9%8C_tgxft4.jpg', 'ศูนย์ญี่ปุ่น-ป้ายรถเมย์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953455/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99AIT_bewy0q.jpg', 'สถาบันAIT', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953452/%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%8D%E0%B9%89%E0%B8%B2_ogwnon.jpg', 'สระว่ายนํ้า', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953458/%E0%B8%AA%E0%B8%A7%E0%B8%97%E0%B8%8A._jfaihp.jpg', 'สวทช.', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953461/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9B%E0%B9%8B%E0%B8%A7%E0%B8%A2_100%E0%B8%9B%E0%B8%B5_rzhizn.jpg', 'สวนป๋วย 100ปี', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953471/%E0%B8%AB%E0%B8%AD%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%94%E0%B8%9B%E0%B9%8B%E0%B8%A7%E0%B8%A2_rhtjhj.jpg', 'หอสมุดป๋วย', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953468/%E0%B8%AB%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%8B%E0%B8%99_A-B_abhuwf.jpg', 'หอในโซน A-B', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953471/%E0%B8%AB%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%8B%E0%B8%99_C-E_ot3rbx.jpg', 'หอในโซน C-E', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953466/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99_%E0%B8%9A%E0%B8%B8%E0%B8%99%E0%B8%99%E0%B8%B2%E0%B8%84_uetmq4.jpg', 'อาคารเดือน บุนนาค', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1753036517/sc1_gus6lj.jpg', 'อาคารเรียนรวม SC1', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953473/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%8E%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%A7%E0%B8%A1_zbhb1s.jpg', 'อาคารเรียนและปฎิบัติการรวม', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953429/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A1_jr1or3.jpg', 'เมนสเตเดียม', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953444/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C_wihwza.jpg', 'โรงพิมพ์', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953449/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3_SC1-JC_jqxnhx.jpg', 'โรงอาหาร SC1-JC', NULL, '', NULL),
('https://res.cloudinary.com/preme/image/upload/v1762953450/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99_otxtxq.jpg', 'โรงอาหารGREEN', NULL, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `imageuri` varchar(1000) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `imageuri`, `firstname`, `lastname`, `password`, `tel`, `username`) VALUES
(6, 'https://res.cloudinary.com/preme/image/upload/v1752943184/woxlz7vxpzjacstaabby.jpg', 'Go', 'Younjung', '$2a$10$JksiwLpjiesGW95gAfNjx.lwbU0LvSfQtg1p1E7ZrrVfvdVgQ8o5S', '123455678', 'go1234'),
(7, 'https://res.cloudinary.com/preme/image/upload/v1752943578/tmd1twy2okjxhpoaxapq.jpg', 'Kim', 'Minji', '$2a$10$N.ryb3.JhkwEzz0DK67Ri.Iz1x7qBq1SFWxDc1y5hq1eL/CLXqsKK', '0617698081', 'admin'),
(8, 'https://res.cloudinary.com/preme/image/upload/v1753032677/ntk47ybtcbxci1ee4wkh.jpg', 'Kittapas', 'Chocktanatorn', '$2a$10$ldbo50KEAkTNi4yujWRlB.nAP6fhJJg21OhLk1inZFn8H.YUbE59q', '0617698081', 'preme'),
(10, 'https://res.cloudinary.com/preme/image/upload/v1753017924/oxhjolmucjdlucjonefd.jpg', 'Liam', 'Gallagher', '$2a$10$xzoyLDonROSy3Z4GOdeDxe0tDO30Fql3.MCYFZVgR5DlWhmfWVEJm', '0617698081', 'oasis1'),
(12, NULL, 'Preme', 'Kittapas', '$2a$10$0eU8XK44hYuI/EwV6yxC6uO4jW9NHlmNspyEyaDWPOI44m8xJ2uUK', '0617698081', 'preme01'),
(13, NULL, 'Benjamin', 'Sesko', '$2a$10$S0ybCMoBtukWjadkOYinJuN7aq642QxibAQ8EudgluZxwmDjsvNJK', '0617698084', 'sesko1'),
(14, 'https://res.cloudinary.com/preme/image/upload/v1762949356/louxgurmdabpahnt2miw.jpg', 'Punnapha', 'Pomrung', '$2a$10$kk5B5ZPs1ItKah8OSWO9SeEVhgqnUlQLgoXw9twzr8wrw2bPdBFDe', '0825850833', 'wtfah');

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
  `customer_image` varchar(255) DEFAULT NULL
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
  `customer_image` varchar(255) DEFAULT NULL
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
  `status` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rider`
--

INSERT INTO `rider` (`rider_id`, `password`, `rider_firstname`, `rider_lastname`, `tel`, `username`, `vehicle`, `rider_location`, `license`, `rider_image`, `status`) VALUES
(2, '$2a$10$Ao3wePJY5ed6bVm2BtPpmeM/OsnqD4ByOBkfv8fsCPX1yyKDQdrCa', 'Marc', 'Marquez', '022457102', 'moto', 'ducati', 'ประตูเชียงราก2', '999t', NULL, b'1'),
(3, '$2a$10$2S4jcJ349cXV3K5GpjejRuQX6uNKbtqQOPVSwEPE/rnhIwpNUSTRa', 'Noel', 'Gallagher', '0615878452', 'rider1', 'Honda PCX155 White', 'โรงอาหารGREEN', '9กท สิงห์บุรี', 'https://res.cloudinary.com/preme/image/upload/v1753339913/6de62278-1458-46f7-8df4-01f979d0770c_RETINA_PORTRAIT_3_2_fd8a0m.jpg', b'1'),
(5, '$2a$10$dwDEKW5EQ3CtiFyD20a7l.Qc0OlYmM4pmvikBdaKONIy8TiNb9ypW', 'Travis', 'Scott', '06158784324', 'laflame', 'Lamborghini Green', 'โรงอาหารGREEN', 'กท262 สิงห์บุรี', 'https://res.cloudinary.com/preme/image/upload/v1754565548/8c5c57947d8778f36147280e2bbddc5c_ksedqm.jpg', b'1'),
(6, '$2a$10$BIpr9iIAI48WZ4Jx90gVpOMHO9.fXIfedH6mhVZGmDNYNZ5aSVeaS', 'Kittapas', 'Chocktanatorn', '0617698081', 'prar1', 'BMW', 'sc1', 'ควย49', NULL, NULL),
(14, '$2a$10$xaIR/jKFzYLyiYNlE3WUxuy9y0wMVN2WaMPqKcE91bV8Guqfe4Kki', 'dfs', 'fdsssda', '0615785210', 'gfdg', 'fd', 'ท็อปมาร์เก็ตหน้าทิวสน', 'fs', NULL, NULL),
(15, '$2a$10$sobCyR651hMv87ixUpgn5ecGskRaf1YTQDlAr.U7OfjrloJhbrDnu', 'GoYoun', 'Jung', '03254785210', 'younjung', 'benz', 'ประตูเชียงราก1', 'กข262', NULL, NULL),
(16, '$2a$10$IWMqmtW6fn1mhh73ZTRaE.VGsg6QPtp13tXKObZDULyxztJx6Wy9m', 'Kujo', 'Jotaro', '0214568541', 'manop1', 'BMX', 'green', 'la213', NULL, NULL),
(17, '$2a$10$tR5YhP46Lc0OV6yCoDWRXuPk4G4abG9qmlsjWUKvdmji4YX7IoCQe', 'Preme', 'Skywalker', '061769081', 'jedi1', 'Meledion', 'ประตูเชียงราก1', 'sc21', 'https://res.cloudinary.com/preme/image/upload/v1762511873/kme4yyl26yiw025xwuho.jpg', NULL),
(18, '$2a$10$Xb2XecaZW9Q4iXn4hn62PONUhEPFqVYH2q7c29TKuYZBcSRkLCq7y', 'Anakin', 'Skywalker', '082314352', 'preme12', 'R2', 'ประตูเชียงราก2', 'op3421', NULL, NULL),
(19, '$2a$10$6ijCg1spRRZWx.oqW0q/EezdgYbAjtdLRTqwKQ9YA11v5uqBv/xsa', 'fs', 'pom', '0825850833', 'fs', 'honda', 'ประตูเชียงราก1', '1234', NULL, NULL);

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
('sc', NULL, NULL),
('คณะ SIIT', NULL, NULL),
('ท็อปมาร์เก็ตหน้าทิวสน', '', 0),
('ท่ารถตู้ใหม่', NULL, NULL),
('บร.4', NULL, NULL),
('ประตูเชียงราก1', '', 1),
('ประตูเชียงราก2', '', 0),
('หอสมุดป๋วย', NULL, NULL),
('อินเตอร์โซน', NULL, NULL),
('โรงพยาบาลธรรมศาสตร์', 'https://res.cloudinary.com/preme/image/upload/v1762953434/%E0%B8%A3%E0%B8%9E.%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%89%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4_vwaosm.jpg', 0),
('โรงอาหารGREEN', 'https://res.cloudinary.com/preme/image/upload/v1752591448/bustop_lc4_kumoou.png', 315);

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

--
-- Dumping data for table `riderregister`
--

INSERT INTO `riderregister` (`rider_firstname`, `rider_lastname`, `brand_vehicle`, `model_vehicle`, `license`, `rider_license`, `rider_location`, `username`, `password`, `email`, `person_id`, `tel`, `register_time`) VALUES
('Tony', 'Stark', 'Ironman', 'Mark3', 'pop21', '9213-324-534', 'ท็อปมาร์เก็ตหน้าทิวสน', 'tonyno1', 'peeto', 'avenger1@gmail.com', '5846279318524', '0594125684', '2025-11-09 18:03:00.459078');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `requestid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT for table `requestsummary`
--
ALTER TABLE `requestsummary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT for table `rider`
--
ALTER TABLE `rider`
  MODIFY `rider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
